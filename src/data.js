// Small auditable IndexedDB adapter. No account, no analytics, no server.
export const DB_NAME='research-hub-ai-local';
export const DB_VERSION=1;
const STORE='records';
let openPromise;
export function openDB(){
  if(!globalThis.indexedDB) return Promise.reject(new Error('This browser does not support IndexedDB. Your work cannot be saved.'));
  if(!openPromise)openPromise=new Promise((resolve,reject)=>{
    const r=indexedDB.open(DB_NAME,DB_VERSION);
    r.onupgradeneeded=()=>{const db=r.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:'id'});s.createIndex('type','type',{unique:false});}};
    r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error||new Error('Could not open local database'));
  });
  return openPromise;
}
function transactionRequest(mode,operation){
  return openDB().then(db=>new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,mode);const store=tx.objectStore(STORE);let result;
    tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error||new Error('Local storage failed'));tx.onabort=()=>reject(tx.error||new Error('Local storage cancelled'));
    try {const req=operation(store);if(req){req.onsuccess=()=>{result=req.result;};}}catch(e){tx.abort();reject(e);}
  }));
}
export const allRecords=()=>transactionRequest('readonly',s=>s.getAll());
export const getRecord=id=>transactionRequest('readonly',s=>s.get(id));
export const putRecord=record=>transactionRequest('readwrite',s=>s.put(record));
export const deleteRecord=id=>transactionRequest('readwrite',s=>s.delete(id));
export function replaceAllRecords(records){
  return openDB().then(db=>new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,'readwrite');const store=tx.objectStore(STORE);
    tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error||new Error('Restore failed'));tx.onabort=()=>reject(tx.error||new Error('Restore cancelled'));
    try{store.clear();for(const r of records) store.put(r);}catch(e){tx.abort();reject(e);}
  }));
}
export const uid=()=>globalThis.crypto?.randomUUID?.()||('r-'+Date.now()+'-'+Math.random().toString(36).slice(2));
export const now=()=>new Date().toISOString();
export const cleanText=(v,max=5000)=>String(v??'').trim().slice(0,max);
export function makeProject(title,discipline='General'){
  const stamp=now();
  return {id:uid(),type:'project',title:cleanText(title,140),discipline:cleanText(discipline,60),question:'',objectives:'',method:'',notes:'',draft:'',stage:1,status:'active',createdAt:stamp,updatedAt:stamp};
}
export const defaultProfile=()=>({id:'profile',type:'profile',name:'Researcher',level:'foundation',mentorMode:'teach',onboarded:true,createdAt:now(),updatedAt:now()});
