// Egyszeri, Git-történetet megtartó átrendezés. A public/ megléte esetén nem fut újra.
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..'),dest=path.join(root,'public');
if(fs.existsSync(dest))throw Error('A public már létezik; az egyszeri átrendezést nem ismételjük.');
const files=JSON.parse(fs.readFileSync(path.join(root,'ellenorzes/publikalas-forraslista.json')));
const mapping=new Map(files.map(f=>[f,'public/'+(f==='koncepcio-1-udvari-muhely.html'?'index.html':f)]));
const move=(from,to)=>{fs.mkdirSync(path.dirname(path.join(root,to)),{recursive:true});execFileSync('git',['mv','--',from,to],{cwd:root});};
move('index.html','archivum/koncepciok-index.html');
for(const[from,to]of mapping)move(from,to);
for(const file of files.filter(f=>f.endsWith('.html'))){const target=path.join(root,mapping.get(file));fs.writeFileSync(target,fs.readFileSync(target,'utf8').replaceAll('koncepcio-1-udvari-muhely.html','index.html'));}
// A megmaradó koncepciók, archív oldalak hivatkozásai továbbra is működjenek.
const visit=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()&&!['.git','public','node_modules','skill-forrasok'].includes(e.name)?visit(path.join(dir,e.name)):e.isFile()&&/\.(html|css)$/.test(e.name)?[path.join(dir,e.name)]:[]);
for(const abs of visit(root)){
 const current=path.relative(root,abs).replaceAll('\\','/'),owner=current==='archivum/koncepciok-index.html'?'index.html':current;
 let body=fs.readFileSync(abs,'utf8');
 const resolve=url=>{if(/^(?:https?:|data:|mailto:|tel:|#)/.test(url))return url;const [base,...tail]=url.split(/(?=[?#])/),source=path.normalize(path.join(path.dirname(owner),decodeURIComponent(base))).replaceAll('\\','/');const target=mapping.get(source)||(source==='index.html'?'archivum/koncepciok-index.html':null);if(!target)return url;return path.relative(path.dirname(current),target).replaceAll('\\','/')+tail.join('');};
 body=body.replace(/\b(src|href)="([^"]+)"/g,(_,a,url)=>`${a}="${resolve(url)}"`).replace(/srcset="([^"]+)"/g,(_,s)=>`srcset="${s.split(',').map(x=>{const[u,w]=x.trim().split(/\s+/);return resolve(u)+(w?' '+w:'')}).join(', ')}"`).replace(/url\(['"]?([^'"\)]+)['"]?\)/g,(_,url)=>`url('${resolve(url)}')`);
 fs.writeFileSync(abs,body);
}
const shortcut=target=>'<!doctype html>\n<html lang="hu"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta http-equiv="refresh" content="0;url='+target+'"><title>Agyagpad – a weboldal új helye</title></head><body><p><a href="'+target+'">Tovább az Agyagpad weboldalára</a></p><script>location.replace('+JSON.stringify(target)+'+location.search+location.hash)</script></body></html>\n';
for(const f of ['index.html',...files.filter(f=>f.endsWith('.html'))])fs.writeFileSync(path.join(root,f),shortcut('public/'+(f==='index.html'||f==='koncepcio-1-udvari-muhely.html'?'index.html':f)));
console.log(files.length+' webes fájl áthelyezve. A régi helyi címek átirányítóként megmaradtak.');
