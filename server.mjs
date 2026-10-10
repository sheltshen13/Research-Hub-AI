import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';
const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT || 5173);
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.webmanifest':'application/manifest+json','.json':'application/json; charset=utf-8','.md':'text/plain; charset=utf-8'};
createServer(async (req,res)=>{
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405);res.end();return;}
  let raw;
  try {raw=decodeURIComponent(new URL(req.url,'http://localhost').pathname);} catch {res.writeHead(400);res.end();return;}
  if (raw.includes('\0')) {res.writeHead(400);res.end();return;}
  const path=resolve(root,'.'+raw);
  if (path!==root && !path.startsWith(root+sep)) {res.writeHead(403);res.end();return;}
  try {
    let file=path;
    if ((await stat(file)).isDirectory()) file=resolve(file,'index.html');
    if (file.includes(`${sep}.git${sep}`) || file.endsWith(`${sep}.env`)) {res.writeHead(403);res.end();return;}
    const bytes=await readFile(file);
    res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    if (req.method==='HEAD') res.end(); else res.end(bytes);
  } catch {res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`Research Hub AI running at http://127.0.0.1:${port}`));
