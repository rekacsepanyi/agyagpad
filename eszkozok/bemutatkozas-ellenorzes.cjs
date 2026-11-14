const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright');
const root=path.resolve(__dirname,'..'),results=[];
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  for(const[width,zoom]of [[320,1],[390,1],[768,1],[1024,1],[1440,1],[390,2],[1440,2]]){
   const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
   await page.goto('http://127.0.0.1:4173/koncepcio-1-udvari-muhely.html');await page.evaluate(()=>document.fonts.ready);
   await page.evaluate(()=>Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode()})));
   if(zoom===2)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
   const state=await page.evaluate(()=>{
    const rect=s=>document.querySelector(s).getBoundingClientRect(),image=document.querySelector('.story-photo'),img=image.getBoundingClientRect();
    const stats=document.querySelector('.story-text>.studio-stats');
    return {overflow:document.documentElement.scrollWidth>innerWidth,hasCta:!!document.querySelector('.story-cta'),statsLast:!stats.nextElementSibling,textGap:stats.getBoundingClientRect().top-stats.previousElementSibling.getBoundingClientRect().bottom,blockGap:rect('.shop').top-rect('.story').bottom,portraitRatio:img.height/img.width,naturalRatio:image.naturalHeight/image.naturalWidth,portraitWidth:img.width,storyHeight:rect('.story').height,storyTextHeight:rect('.story-text').height,portraitHeight:img.height,portraitMotifs:document.querySelectorAll('.story .pottery-lines').length,shopMotifs:document.querySelectorAll('.shop .pottery-lines').length,shopFrame:getComputedStyle(document.querySelector('.shop .photo-surround'),'::before').content,shopLink:document.querySelector('.shop-cta').getAttribute('href'),arrangement:innerWidth>=768?rect('.story-photo').right<=rect('.story-text').left&&rect('.shop-copy').right<=rect('.shop-composition').left:rect('.story-text').bottom<=rect('.story-photo').top&&rect('.shop-copy').bottom<=rect('.shop-composition').top};
   });
   const ok=!state.overflow&&!state.hasCta&&state.statsLast&&Math.abs(state.textGap-24*zoom)<1&&Math.abs(state.blockGap-(width>=768?80:48)*zoom)<1&&Math.abs(state.portraitRatio-state.naturalRatio)<.01&&state.portraitMotifs===1&&state.shopMotifs===0&&state.shopFrame!== 'none'&&state.shopLink==='muhely.html#keramiak'&&state.arrangement;
   results.push({width,textZoom:zoom,passed:ok,...state});
   if(!ok)throw Error('Bemutatkozás/műhelybolt: '+JSON.stringify(results.at(-1)));
   if(zoom===1&&[390,1440].includes(width))await page.locator('#muhely').screenshot({path:path.join(root,`ellenorzes/kepernyokepek/szellos-muhely-${width}.png`)});
   await page.close();
  }
 }finally{await browser.close();fs.writeFileSync(path.join(root,'ellenorzes/bemutatkozas-ellenorzes.json'),JSON.stringify({date:'2026-11-14',passed:results.length===7&&results.every(r=>r.passed),results},null,2)+'\n');}
 console.log('7 nézet sikeres: 24 px szövegköz, 80/48 px blokktáv, természetes portréarány, dekoráció és váltakozó sorrend.');
})().catch(e=>{console.error(e);process.exitCode=1});
