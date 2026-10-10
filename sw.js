const CACHE='research-hub-ai-0.1.2-core';
const APP=['./','index.html','styles.css','src/app.js','src/data.js','src/content.js','src/stats.js','src/backup.js','manifest.webmanifest','icons/icon.svg','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP.map(path=>new URL(path,self.registration.scope).href))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    for(const key of await caches.keys()) if(key.startsWith('research-hub-ai-')&&key!==CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin) return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const match=await cache.match(event.request,{ignoreSearch:true});
    if(match) return match;
    try { return await fetch(event.request); }
    catch { if(event.request.mode==='navigate')return await cache.match(new URL('index.html',self.registration.scope).href); throw new Error('Offline and not cached'); }
  })());
});
