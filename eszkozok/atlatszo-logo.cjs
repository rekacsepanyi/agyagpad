const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const sharp=r('sharp');
const root=path.resolve(__dirname,'..');
(async()=>{
 const source=fs.readFileSync(path.join(root,'images/logo/Agyagpad-logo-jo.svg'),'utf8');
 // A háttér két fehér téglalapból és egy textúrafotóból áll. A meglévő vektoros logó megmarad.
 let clean=source.replace(/<rect\b[^>]*\/>/g,'').replace(/<image\b[^>]*\/>/g,'');
 if(/<image\b/.test(clean))throw Error('Nem sikerült eltávolítani a háttérképet.');
 clean=clean.replace(/width="2000"/,'width="1500"').replace(/height="2000"/,'height="1500"');
 const {data,info}=await sharp(Buffer.from(clean)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
 let minX=info.width,minY=info.height,maxX=-1,maxY=-1;
 for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++)if(data[(y*info.width+x)*4+3]>0){minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);}
 if(maxX<0)throw Error('Üres vektoros logó.');
 const padding=12,x=minX-padding,y=minY-padding,w=maxX-minX+1+padding*2,h=maxY-minY+1+padding*2;
 clean=clean.replace(/viewBox="[^"]*"/,`viewBox="${x} ${y} ${w} ${h}"`).replace(/width="1500"/,`width="${w}"`).replace(/height="1500"/,`height="${h}"`);
 fs.writeFileSync(path.join(root,'images/logo/Agyagpad-logo-transparent.svg'),clean);
 await sharp(Buffer.from(clean)).resize({width:1040}).png().toFile(path.join(root,'images/logo/Agyagpad-logo-transparent.png'));
 const meta=await sharp(path.join(root,'images/logo/Agyagpad-logo-transparent.png')).metadata();
 console.log(JSON.stringify({svgViewBox:[x,y,w,h],pngWidth:meta.width,pngHeight:meta.height,hasAlpha:meta.hasAlpha,embeddedImages:0}));
})().catch(e=>{console.error(e);process.exitCode=1});
