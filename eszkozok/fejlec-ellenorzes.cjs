const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const {chromium}=r('playwright');
const root=path.resolve(__dirname,'..'),results=[];
const assert=(ok,message)=>{if(!ok)throw Error(message)};
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  for(const file of ['koncepcio-1-udvari-muhely.html','tanfolyamok.html','adatkezeles.html']){
   for(const [width,zoom] of [[320,1],[390,1],[768,1],[1023,1],[1024,1],[1100,1],[1200,1],[1440,1],[390,2],[1024,2]]){
    const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
    await page.goto('http://127.0.0.1:4173/'+file,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    if(zoom===2)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
    const cta=page.locator('.site-header .header-cta'),toggle=page.locator('.menu');
    assert(await cta.count()===1,'Nem egyetlen fejléc CTA');
    assert(await page.locator('.site-nav').getByRole('link',{name:'Tanfolyamok',exact:true,includeHidden:true}).count()===1,'Hiányzó Tanfolyamok');
    if(width<1024){assert(!await cta.isVisible(),'Zárt mobilmenüben látható CTA');await toggle.click();}
    assert(await cta.isVisible(),'Nem látható CTA');
    const info=await cta.evaluate(e=>{
     const s=getComputedStyle(e),a=e.getBoundingClientRect(),brand=document.querySelector('.site-header .brand').getBoundingClientRect();
     const links=[...document.querySelectorAll('.site-nav a')].map(n=>n.getBoundingClientRect());
     const overlaps=b=>a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top;
     return {background:s.backgroundColor,color:s.color,radius:s.borderRadius,overlap:[brand,...links].some(overlaps),overflow:[...document.querySelectorAll('.site-header *')].filter(n=>getComputedStyle(n).display!=='none'&&n.getClientRects().length).some(n=>{const b=n.getBoundingClientRect();return b.left<0||b.right>innerWidth+1}),x:a.x,right:a.right,href:e.getAttribute('href')};
    });
    assert(info.background==='rgb(166, 91, 50)'&&info.color==='rgb(249, 248, 246)'&&info.radius==='999px','Eltérő gombstílus');
    assert(!info.overlap&&!info.overflow&&info.x>=0&&info.right<=width,'Zsúfolt vagy túlcsorduló fejléc: '+JSON.stringify({file,width,zoom,info}));
    await cta.hover();assert(await cta.evaluate(e=>getComputedStyle(e).backgroundColor)==='rgb(140, 74, 39)','Eltérő hover');
    // Tab segítségével érjük el, hogy a :focus-visible állapotot is ellenőrizzük.
    await page.locator('.site-nav a').last().focus();await page.keyboard.press('Tab');
    assert(await cta.evaluate(e=>e===document.activeElement&&e.matches(':focus-visible')&&getComputedStyle(e).outlineWidth==='3px'),'Billentyűzetes CTA-fókusz');
    if(zoom===1&&[390,1024,1100].includes(width)&&file.startsWith('koncepcio-1'))await page.locator('.site-header').screenshot({path:path.join(root,`ellenorzes/kepernyokepek/fejlec-cta-${width}.png`)});
    await page.keyboard.press('Enter');await page.waitForURL('**/koncepcio-1-udvari-muhely.html#kapcsolat');
    assert(await page.locator('#kapcsolat form').count()===1,'CTA nem a főoldali űrlaphoz vezet');
    if(width<1024)assert(await page.locator('.menu').getAttribute('aria-expanded')==='false','Navigálás után nyitott mobilmenü');
    results.push({file,width,textZoom:zoom,passed:true});await page.close();
   }
  }
 }finally{await browser.close();fs.writeFileSync(path.join(root,'ellenorzes/fejlec-ellenorzes.json'),JSON.stringify({passed:results.length===30,results},null,2));}
 console.log('Sikeres fejlécellenőrzés: '+results.length+' nézet; CTA, linkcél, mobilmenü, hover, billentyűzetes fókusz és túlcsordulás.');
})().catch(e=>{console.error(e);process.exitCode=1});
