import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {join,resolve} from 'node:path';
const root=resolve(new URL('../',import.meta.url).pathname);

test('offline precache uses scope-relative paths that exist',async()=>{
  const sw=await readFile(join(root,'sw.js'),'utf8');
  const m=sw.match(/const APP=\[(.*?)\];/s);
  assert.ok(m,'Missing explicit app precache list');
  const files=[...m[1].matchAll(/'([^']+)'/g)].map(x=>x[1]);
  assert.ok(files.includes('./'));
  assert.ok(files.includes('index.html'));
  assert.ok(files.includes('src/app.js'));
  assert.ok(sw.includes('new URL(path,self.registration.scope).href'));
  assert.ok(sw.includes("new URL('index.html',self.registration.scope).href"));
  for(const path of files){
    assert.ok(!path.startsWith('/'),'Precache must not refer to the domain root');
    await access(join(root,path==='./'?'index.html':path));
  }
});

test('PWA manifest has subpath-aware scope, start URL and Android icons',async()=>{
  const m=JSON.parse(await readFile(join(root,'manifest.webmanifest'),'utf8'));
  assert.equal(m.display,'standalone');
  assert.equal(m.start_url,'./');
  assert.equal(m.scope,'./');
  assert.equal(m.id,'./');
  for(const size of ['192x192','512x512']){
    const icon=m.icons.find(x=>x.sizes===size);
    assert.ok(icon);
    assert.ok(!icon.src.startsWith('/'));
    await access(join(root,icon.src));
  }
});

test('HTML asset URLs and service worker registration support GitHub Pages subpaths',async()=>{
  const html=await readFile(join(root,'index.html'),'utf8');
  const app=await readFile(join(root,'src/app.js'),'utf8');
  for(const path of ['icons/icon.svg','manifest.webmanifest','styles.css','src/app.js']){
    assert.ok(html.includes('"./'+path+'"'));
  }
  assert.ok(app.includes('new URL(\'../sw.js\',import.meta.url)'));
  assert.ok(app.includes('src="./icons/icon.svg"'));
});
