// Csak a kiadásban használt fotókat tömöríti, lehetőleg az eredeti JPG-ből.
const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),sharp=r('sharp');
const root=path.resolve(__dirname,'..'),web=path.join(root,'public');
const old=JSON.parse(fs.readFileSync(path.join(root,'ellenorzes/kepek-kiindulo.json'))),sources=new Map();
for(const photo of JSON.parse(fs.readFileSync(path.join(root,'tervezes/arculat/webp-keplista.json'))).photos)for(const v of photo.variants)sources.set(v.path,photo.source);
for(const photo of JSON.parse(fs.readFileSync(path.join(root,'ellenorzes/muhely-assetlista.json'))))for(const v of photo.outputs)sources.set(v.file,photo.source);
for(const f of old){if(f.file.includes('/agyagpad-hero-'))sources.set(f.file,'images/fotók/agyagpad-hero.jpg');if(f.file.includes('/tanfolyam-resztvevo-'))sources.set(f.file,'images/fotók/hero3.jpg');if(f.file.includes('/kapcsolat-teritek-'))sources.set(f.file,'images/fotók/muhely/top-view-brown-big-tray-with-same-colored-plate-dark-surface.jpg');}
(async()=>{
 const results=[];
 for(const f of old){
  const target=path.join(web,f.file),before=fs.readFileSync(target);let buffer=before,quality=null,original=null;
  if(f.file.endsWith('.webp')){
   original=sources.get(f.file);const input=original&&fs.existsSync(path.join(root,original))?path.join(root,original):before;
   const limit=f.width<=480?45000:f.width<=800?90000:f.width<=1200?155000:f.width<=1600?240000:330000;
   for(let q=78;q>=66;q-=4){const candidate=await sharp(input).rotate().resize({width:f.width,withoutEnlargement:true}).webp({quality:q,effort:6,smartSubsample:true}).toBuffer();if(candidate.length<buffer.length){buffer=candidate;quality=q;}if(buffer.length<=limit)break;}
   if(buffer.length<before.length)fs.writeFileSync(target,buffer);
  }else if(f.file.endsWith('.png')){
   const candidate=await sharp(before).png({compressionLevel:9,effort:10}).toBuffer();if(candidate.length<before.length){buffer=candidate;fs.writeFileSync(target,buffer);}
  }
  const m=await sharp(target).metadata();results.push({file:'public/'+f.file,original:original||null,width:m.width,height:m.height,beforeBytes:before.length,afterBytes:buffer.length,quality});
 }
 // A megosztórobotok széles körű támogatásához külön, kisméretű JPEG-ek.
 fs.mkdirSync(path.join(web,'images/og'),{recursive:true});
 for(const[name,input,position]of [['fooldal','agyagpad-hero-1200.webp','centre'],['tanfolyamok','korongozo-kostolo-1200.webp','centre'],['muhely','muhely-talak-tanyerok-1200.webp','centre'],['kapcsolat','kapcsolat-teritek-1200.webp','centre']])await sharp(path.join(web,'images/webp',input)).resize(1200,630,{fit:'cover',position}).jpeg({quality:80,mozjpeg:true}).toFile(path.join(web,'images/og',name+'.jpg'));
 const before=results.reduce((s,x)=>s+x.beforeBytes,0),after=results.reduce((s,x)=>s+x.afterBytes,0);
 fs.writeFileSync(path.join(root,'ellenorzes/kepek-optimalizalas.json'),JSON.stringify({date:'2026-11-14',beforeBytes:before,afterBytes:after,savedBytes:before-after,savedPercent:Math.round((1-after/before)*1000)/10,originalsUnchanged:true,results},null,2)+'\n');
 console.log(results.length+' kép: '+before+' → '+after+' bájt ('+Math.round((1-after/before)*100)+'% csökkenés).');
})().catch(e=>{console.error(e);process.exitCode=1});
