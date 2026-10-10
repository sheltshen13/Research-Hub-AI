// Dependency-free ZIP "store" writer/reader, plus SHA-256 manifest verification.
// Backups are NOT encrypted. Use only with non-sensitive research data.
const encoder=new TextEncoder();const decoder=new TextDecoder('utf-8',{fatal:true});
const table=(()=>{const t=new Uint32Array(256);for(let i=0;i<256;i++){let c=i;for(let j=0;j<8;j++)c=(c&1)?(0xedb88320^(c>>>1)):(c>>>1);t[i]=c>>>0;}return t;})();
export function crc32(bytes){let crc=0xffffffff;for(const b of bytes)crc=table[(crc^b)&255]^(crc>>>8);return (crc^0xffffffff)>>>0;}
const write16=(dv,i,n)=>dv.setUint16(i,n,true);const write32=(dv,i,n)=>dv.setUint32(i,n,true);
export function packZip(files){
  const arr=Object.entries(files).map(([name,value])=>({name,filename:encoder.encode(name),data:typeof value==='string'?encoder.encode(value):value}));
  if(arr.length===0||arr.length>20)throw new Error('Invalid backup content.');
  let offset=0;const local=[],central=[];
  for(const f of arr){
    if(!/^[a-z0-9_.-]+$/i.test(f.name)||f.data.length>12_000_000)throw new Error('Invalid backup filename or size.');
    const crc=crc32(f.data),size=f.data.length;
    const localHeader=new Uint8Array(30+f.filename.length+size),lv=new DataView(localHeader.buffer);
    write32(lv,0,0x04034b50);write16(lv,4,20);write16(lv,6,0);write16(lv,8,0);write32(lv,14,crc);write32(lv,18,size);write32(lv,22,size);write16(lv,26,f.filename.length);localHeader.set(f.filename,30);localHeader.set(f.data,30+f.filename.length);local.push(localHeader);
    const h=new Uint8Array(46+f.filename.length),cv=new DataView(h.buffer);
    write32(cv,0,0x02014b50);write16(cv,4,20);write16(cv,6,20);write32(cv,16,crc);write32(cv,20,size);write32(cv,24,size);write16(cv,28,f.filename.length);write32(cv,42,offset);h.set(f.filename,46);central.push(h);
    offset+=localHeader.length;
  }
  const centralSize=central.reduce((s,b)=>s+b.length,0);
  const end=new Uint8Array(22),ev=new DataView(end.buffer);write32(ev,0,0x06054b50);write16(ev,8,arr.length);write16(ev,10,arr.length);write32(ev,12,centralSize);write32(ev,16,offset);
  const result=new Uint8Array(offset+centralSize+22);let p=0;for(const part of [...local,...central,end]){result.set(part,p);p+=part.length;}
  return result;
}
export function unpackZip(bytes){
  if(bytes.length>15_000_000)throw new Error('Backup is too large (15 MB maximum).');
  const dv=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),read16=i=>dv.getUint16(i,true),read32=i=>dv.getUint32(i,true);
  if(bytes.length<22)throw new Error('Not a valid backup ZIP file.');
  let endPos=-1;for(let i=bytes.length-22;i>=Math.max(0,bytes.length-65557);i--){if(read32(i)===0x06054b50){endPos=i;break;}}
  if(endPos<0)throw new Error('ZIP end-of-archive is missing.');
  const count=read16(endPos+10),size=read32(endPos+12),start=read32(endPos+16);
  if(count<1||count>20||start+size>endPos)throw new Error('Invalid ZIP directory.');
  let pos=start;const out={};
  for(let i=0;i<count;i++){
    if(pos+46>bytes.length||read32(pos)!==0x02014b50)throw new Error('Invalid ZIP entry.');
    const method=read16(pos+10),crc=read32(pos+16),n=read32(pos+20),uncompressed=read32(pos+24),len=read16(pos+28),extra=read16(pos+30),comment=read16(pos+32),off=read32(pos+42);
    if(method!==0||n!==uncompressed||n>12_000_000||pos+46+len+extra+comment>bytes.length)throw new Error('Unsupported or damaged ZIP entry.');
    const name=decoder.decode(bytes.slice(pos+46,pos+46+len));
    if(!/^[a-z0-9_.-]+$/i.test(name)||Object.hasOwn(out,name))throw new Error('Unexpected ZIP filename.');
    if(off+30>bytes.length||read32(off)!==0x04034b50)throw new Error('ZIP entry data is missing.');
    const dataStart=off+30+read16(off+26)+read16(off+28);
    if(dataStart+n>bytes.length)throw new Error('Incomplete ZIP entry.');
    const data=bytes.slice(dataStart,dataStart+n);
    if(crc32(data)!==crc)throw new Error('Backup ZIP checksum failed.');
    out[name]=data;pos+=46+len+extra+comment;
  }
  if(pos!==start+size)throw new Error('Inconsistent ZIP directory size.');
  return out;
}
export async function sha256(bytes){const bytesHash=new Uint8Array(await crypto.subtle.digest('SHA-256',bytes));return [...bytesHash].map(x=>x.toString(16).padStart(2,'0')).join('');}
export async function createBackup(records){
  const data={schemaVersion:1,appVersion:'0.1.4',exportedAt:new Date().toISOString(),records};
  const body=encoder.encode(JSON.stringify(data));
  const manifest={format:'research-hub-ai-backup',schemaVersion:1,dataFile:'data.json',sha256:await sha256(body),recordCount:records.length,exportedAt:data.exportedAt,encrypted:false};
  return packZip({'manifest.json':JSON.stringify(manifest,null,2),'data.json':body});
}
const allowedTypes=new Set(['profile','project','attempt','reference','settings','lesson-note']);
export async function inspectBackup(bytes){
  const files=unpackZip(bytes);
  if(Object.keys(files).length!==2||!files['manifest.json']||!files['data.json'])throw new Error('This is not a Research Hub AI backup.');
  let manifest,body;
  try{manifest=JSON.parse(decoder.decode(files['manifest.json']));body=JSON.parse(decoder.decode(files['data.json']));}
  catch{throw new Error('Backup JSON is damaged or unreadable.');}
  if(manifest.format!=='research-hub-ai-backup'||manifest.schemaVersion!==1||body.schemaVersion!==1)throw new Error('Unsupported backup version. Your existing work was not changed.');
  if(!Array.isArray(body.records)||body.records.length>3000||body.records.length!==manifest.recordCount)throw new Error('Backup contains an invalid record list.');
  if((await sha256(files['data.json']))!==manifest.sha256)throw new Error('Backup integrity check failed.');
  const ids=new Set();
  for(const r of body.records){
    if(!r||typeof r!=='object'||Array.isArray(r)||typeof r.id!=='string'||r.id.length>120||r.id.length===0||!allowedTypes.has(r.type)||ids.has(r.id))throw new Error('Backup contains invalid or duplicate entries.');
    ids.add(r.id);
    if(r.type==='project'&&(typeof r.title!=='string'||r.title.length>140))throw new Error('Backup contains a malformed project.');
    if(r.type==='attempt'&&(!Array.isArray(r.answers)||typeof r.lessonId!=='string'))throw new Error('Backup contains malformed lesson results.');
    if(r.type==='lesson-note'&&(typeof r.lessonId!=='string'||r.lessonId.length>60||typeof r.practice!=='string'||r.practice.length>8000||typeof r.reflection!=='string'||r.reflection.length>8000))throw new Error('Backup contains malformed lesson notes.');
    if(r.type==='lesson-note'){for(const field of ['guide_observation','guide_question','guide_evidence','guide_limitation','method_qual','method_quant','method_mixed','method_choice']) if(Object.hasOwn(r,field)&&(typeof r[field]!=='string'||r[field].length>3000))throw new Error('Backup contains malformed guided practice.');}
  }
  return {records:body.records,exportedAt:body.exportedAt,count:body.records.length,projectCount:body.records.filter(x=>x.type==='project').length};
}
