const fs=require('fs'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),sharp=r('sharp');
(async()=>{
 const file='images/logo/Agyagpad-logo-transparent.svg';
 let logo=fs.readFileSync(file,'utf8');
 // Csak a bögre eredeti körvonalai színeződnek át, a betűrajz változatlan.
 logo=logo.replace(/<clipPath id="mug-right-teal">[\s\S]*?<\/clipPath>/,'').replace(/<g data-accent="mug-right">[\s\S]*?<\/g><\/g>/,'');
 const paths=[...logo.matchAll(/<path\b[^>]*fill="#a65b32"[^>]*\/>/g)].slice(0,3).map(m=>m[0]);
 if(paths.length!==3)throw Error('A három bögrekörvonal nem található.');
 const clip='<clipPath id="mug-right-teal"><rect x="350" y="630" width="90" height="280"/></clipPath>';
 const accent='<g data-accent="mug-right"><g clip-path="url(#mug-right-teal)">'+[paths[0],paths[2]].join('').replaceAll('#a65b32','#1B4D4F')+'</g></g>';
 logo=logo.replace('</defs>',clip+'</defs>').replace('</svg>',accent+'</svg>');
 fs.writeFileSync(file,logo);
 await sharp(Buffer.from(logo)).resize({width:1040}).png().toFile('images/logo/Agyagpad-logo-transparent.png');
 const icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="155 630 280 280" width="280" height="280"><defs>'+clip+'</defs>'+paths.join('')+accent+'</svg>';
 fs.writeFileSync('images/logo/Agyagpad-favicon-transparent.svg',icon);
 await sharp(Buffer.from(icon)).resize(256,256).png().toFile('images/logo/Agyagpad-favicon-transparent.png');
 await sharp(Buffer.from(icon)).resize(128,128).webp({lossless:true}).toFile('images/webp/agyagpad-favicon.webp');
 const meta=await sharp('images/logo/Agyagpad-favicon-transparent.png').metadata();
 console.log(JSON.stringify({faviconHasAlpha:meta.hasAlpha,vectorIcon:true,logoAccent:'#1B4D4F'}));
})().catch(e=>{console.error(e);process.exitCode=1});
