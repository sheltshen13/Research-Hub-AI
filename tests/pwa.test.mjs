import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {join,resolve} from 'node:path';
const root=resolve(new URL('../',import.meta.url).pathname);
test('offline asset precache list contains only existing files',async()=>{
  const sw=await readFile(join(root,'sw.js'),'utf8');
  const m=sw.match(/const APP=\[(.*?)\];/s);
  assert.ok(m,'Missing explicit app precache list');
  const files=[...m[1].matchAll(/'([^']+)'/g)].map(x=>x[1]);
  assert.ok(files.includes('/index.html'));assert.ok(files.includes('/src/app.js'));
  for(const path of files) await access(join(root,path==='/'?'index.html':path.slice(1)));
});
test('PWA manifest has 192 and 512 pixel Android icons',async()=>{
  const m=JSON.parse(await readFile(join(root,'manifest.webmanifest'),'utf8'));
  assert.equal(m.display,'standalone');
  for(const size of ['192x192','512x512']){
    const icon=m.icons.find(x=>x.sizes===size);assert.ok(icon);await access(join(root,icon.src.slice(1)));
  }
});
