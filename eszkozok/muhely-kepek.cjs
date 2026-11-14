const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),sharp=r('sharp');
const root=path.resolve(__dirname,'..');
const sources=[
 ['hero1','muhely-hero'],
 ['handmade-pottery-bowl','muhely-kezben-tal'],
 ['side-view-clay-pots-arrangement','muhely-polc'],
 ['close-up-female-potter-s-hand-giving-shape-clay-bowl-pottery-wheel','muhely-korongozas'],
 ['different-ceramic-empty-plates-bowls','muhely-talak-tanyerok'],
 ['rustic-speckled-mug-design-resource','muhely-pettyes-bogre'],
 ['close-up-arrangement-modern-vases (1)','muhely-vazak'],
 ['top-view-table-arrangement-with-empty-dishes-tableware','muhely-teritek'],
 ['ceramic-bowl-linen-cloth','muhely-mintazott-tal'],
 ['bottom-view-round-platters-black-table','muhely-turkiz-tanyerok']
];
(async()=>{
 const assets=[];
 for(const[name,target]of sources){
  const source=path.join(root,'images/fotók',name==='hero1'||name==='side-view-clay-pots-arrangement'?'':'muhely',name+'.jpg');
  if(!fs.existsSync(source))throw Error('Hiányzó kért fotó: '+source);
  const meta=await sharp(source).metadata(),outputs=[];
  const widths=sources.findIndex(s=>s[0]===name)>=4?[480,800,1200,1600,1920]:[480,800,1200,1600];
  for(const width of widths){
   const file='images/webp/'+target+'-'+width+'.webp';
   const info=await sharp(source).rotate().resize({width,withoutEnlargement:true}).webp({quality:82,effort:6}).toFile(path.join(root,file));
   outputs.push({file,width:info.width,height:info.height,bytes:info.size});
  }
  assets.push({source:path.relative(root,source).replaceAll('\\','/'),target,width:meta.width,height:meta.height,outputs});
 }
 fs.writeFileSync(path.join(root,'ellenorzes/muhely-assetlista.json'),JSON.stringify(assets,null,2)+'\n');
 console.log(assets.length+' azonosított fotó, '+assets.reduce((n,a)=>n+a.outputs.length,0)+' teljes képarányú WebP-változat.');
})().catch(e=>{console.error(e);process.exitCode=1});
