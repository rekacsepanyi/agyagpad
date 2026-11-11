const fs = require('fs');
const path = require('path');
const {createRequire}=require('module');
const runtimeRequire=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const sharp=runtimeRequire('sharp');
const root=path.resolve(__dirname,'..');
const source=path.join(root,'images','fotók'),dest=path.join(root,'images','webp');
fs.mkdirSync(dest,{recursive:true});
const names=['hero','hero1','korongozo-kostolo','4-hetes-kezdo-kurzus','ceges-csapatepito','kapcsolat','muhelybolt','reszletfoto','reszletfoto1','reszletfoto2','reszletfoto3','reszletfoto4'];
(async()=>{
const photos=[];
for(const name of names){
 const input=path.join(source,name+'.jpg');const meta=await sharp(input).metadata(); const variants=[];
 for(const width of [480,800,1200,1600]){
  const target=path.join(dest,`${name}-${width}.webp`);let quality=80;
  let info=await sharp(input).rotate().resize({width,withoutEnlargement:true}).webp({quality,effort:5}).toFile(target);
  const targetBytes=width<=800?110000:width<=1200?160000:250000;
  while(info.size>targetBytes&&quality>48){quality-=4;info=await sharp(input).rotate().resize({width,withoutEnlargement:true}).webp({quality,effort:5}).toFile(target);}
  variants.push({path:`images/webp/${name}-${width}.webp`,width:info.width,height:info.height,bytes:info.size,quality});
 }
 photos.push({source:`images/fotók/${name}.jpg`,originalBytes:fs.statSync(input).size,width:meta.width,height:meta.height,variants});
 console.log(name+': '+variants.map(v=>Math.round(v.bytes/1024)+' KB').join(', '));
}
const logoInput=path.join(root,'images/logo/Agyagpad-logo.png');
await sharp(logoInput).extract({left:190,top:810,width:1560,height:450}).resize({width:1040}).webp({quality:95,effort:6}).toFile(path.join(dest,'agyagpad-logo.webp'));
const iconInput=path.join(root,'images/logo/Agyagpad-Favicon.png');
await sharp(iconInput).trim({threshold:25}).resize({width:192,height:192,fit:'contain',background:'#F9F8F6'}).webp({quality:95,effort:6}).toFile(path.join(dest,'agyagpad-favicon.webp'));
fs.writeFileSync(path.join(root,'tervezes/arculat/webp-keplista.json'),JSON.stringify({photos,originalBytes:photos.reduce((s,p)=>s+p.originalBytes,0),webpBytes:photos.reduce((s,p)=>s+p.variants.reduce((a,v)=>a+v.bytes,0),0)},null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
