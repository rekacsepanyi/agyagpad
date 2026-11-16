const http=require('http');
const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'../public');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.woff2':'font/woff2','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.json':'application/json; charset=utf-8','.md':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});return res.end('A helyi elonezet nem fogad urlapadatot.');}
 let relative;try{relative=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname).replace(/^\/+/, '')||'index.html';}catch{res.writeHead(400);return res.end();}
 relative=relative.replace(/^public\//,'');
 if(relative==='koncepcio-1-udvari-muhely.html')relative='index.html';
 let file=path.resolve(root,relative);
 if(!path.extname(file))file+='.html';
 if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
 fs.stat(file,(error,stat)=>{if(error||!stat.isFile()){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(file).pipe(res);});
}).listen(4173,'127.0.0.1',()=>console.log('Agyagpad helyi előnézet: http://127.0.0.1:4173'));
