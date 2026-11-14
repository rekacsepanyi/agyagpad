const fs=require('fs'),path=require('path'),crypto=require('crypto'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright'),sharp=r('sharp');
const root=path.resolve(__dirname,'..'),base='http://127.0.0.1:4173/',results=[];
const assert=(ok,message)=>{if(!ok)throw Error(message)};
const captions=['Türkiz és földszínű tálak, tányérok','Karakteres bögre, természetes árnyalatokkal','Vázák meleg és hűvös mázakkal','Összeillő formák a mindennapi terítékhez','Mintázott felületű tál','Türkiz mázas tányérok'];
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  for(const[width,zoom]of [[320,1],[390,1],[600,1],[768,1],[900,1],[1024,1],[1200,1],[1440,1],[390,2],[1440,2]]){
   const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}),errors=[];
   page.on('pageerror',e=>errors.push(e.message));page.on('response',e=>{if(e.status()>=400)errors.push(e.status()+' '+e.url())});
   await page.goto(base+'muhely.html');await page.evaluate(()=>document.fonts.ready);
   assert(await page.locator('main img[loading="lazy"]').count()===9,'Késleltetett tartalmi fotók');
   assert(await page.locator('.hero-photo[fetchpriority="high"]').count()===1,'Hero prioritás');
   await page.evaluate(()=>Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(i=>{i.loading='eager';return i.decode()})));
   if(zoom===2)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Vízszintes túlcsordulás');
   assert(await page.locator('h1').count()===1,'Egyetlen H1');
   assert(await page.locator('main>section').count()===6,'Hat szakasz');
   assert(await page.locator('.site-nav [aria-current="page"]').textContent()==='Műhely','Aktív Műhely menü');
   assert(await page.locator('.header-cta').getAttribute('href')==='koncepcio-1-udvari-muhely.html#kapcsolat','Fejléc érdeklődés célja');
   assert(await page.locator('main a.button[href="tanfolyamok.html"]').count()===2,'Két tanfolyamos CTA');
   assert(await page.locator('main form').count()===0,'Nem másoltunk ide űrlapot');
   assert(JSON.stringify(await page.locator('.studio-stats dd').allTextContents())===JSON.stringify(['15+ év','1500+','7000+']),'Számadatok csak egyszer');
   assert(await page.locator('.pottery-lines').count()===1,'Motívum csak a herón');
   assert(await page.locator('#keramiak').count()===1,'Megőrzött galériahorgony');
   const gallery=await page.locator('.ceramics-gallery').evaluate(e=>({columns:getComputedStyle(e).gridTemplateColumns.split(' ').length}));
   assert(gallery.columns===(width>=1024?3:width>=600?2:1),'Galéria 3/2/1 oszlopa');
   assert(JSON.stringify(await page.locator('.ceramics-gallery figcaption').allTextContents())===JSON.stringify(captions),'Galéria sorrend és feliratok');
   const colors=await page.locator('.attention-panel').evaluate(e=>[e,e.querySelector('h2'),e.querySelector('.eyebrow')].map(n=>({color:getComputedStyle(n).color,background:getComputedStyle(n).backgroundColor})));
   assert(colors[0].background==='rgb(27, 77, 79)'&&colors.every(c=>c.color==='rgb(249, 248, 246)'),'Türkiz figyelemblokk színei');
   const links=await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')));
   for(const href of links){if(/^(https?:|mailto:)/.test(href))continue;const u=new URL(href,base+'muhely.html'),file=path.join(root,decodeURIComponent(u.pathname.slice(1)));assert(fs.existsSync(file),'Hiányzó cél: '+href);if(u.hash)assert(fs.readFileSync(file,'utf8').includes('id="'+u.hash.slice(1)+'"'),'Hiányzó horgony: '+href);}
   if(width<1024){await page.locator('.menu').click();assert(await page.locator('.header-cta').isVisible(),'Mobil CTA');await page.keyboard.press('Escape');assert(await page.locator('.menu').evaluate(e=>e===document.activeElement),'Menü fókuszvisszaadás');}
   for(let i=0;i<6;i++){
    const link=page.locator('[data-gallery-link]').nth(i);await page.keyboard.press('Tab');await link.focus();
    assert(await link.evaluate(e=>e.matches(':focus-visible')&&parseFloat(getComputedStyle(e).outlineWidth)>=3),'Galéria látható fókusz');
    await page.keyboard.press('Enter');assert(await page.locator('dialog').evaluate(e=>e.open),'Nagyító billentyűzetes nyitás');
    assert(await page.locator('.lightbox-close').evaluate(e=>e===document.activeElement),'Nagyító nyitási fókusz');
    await page.locator('.lightbox-image').evaluate(e=>e.decode());
    assert((await page.locator('.lightbox-image').getAttribute('src'))===new URL(await link.getAttribute('href'),base+'muhely.html').href,'A teljes kép jelenik meg');
    assert((await page.locator('#nagyito-felirat').textContent())===captions[i],'Nagyító felirata');
    assert(await page.locator('.lightbox-image').evaluate(e=>getComputedStyle(e).objectFit==='contain'),'Teljes fotó vágás nélkül');
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Nagyító túlcsordulása');
    await page.keyboard.press('Tab');assert(await page.locator('.lightbox-close').evaluate(e=>e===document.activeElement),'Fókusz a nagyítóban marad');
    await page.keyboard.press('Shift+Tab');assert(await page.locator('.lightbox-close').evaluate(e=>e===document.activeElement),'Visszafelé fókuszkezelés');
    if(i%2===0)await page.keyboard.press('Escape');else await page.locator('.lightbox-close').click();
    await page.waitForFunction(()=>!document.querySelector('dialog').open&&!document.body.classList.contains('lightbox-active'));assert(await page.locator('dialog').evaluate(e=>!e.open),'Nagyító bezárása');
    assert(await link.evaluate(e=>e===document.activeElement),'Fókusz a nyitó fotóra visszatér');
    assert(await page.locator('body').evaluate(e=>!e.classList.contains('lightbox-active')),'Görgetés visszaáll');
   }
   await page.goto(base+'muhely.html');await page.keyboard.press('Tab');assert(await page.locator('.skip').evaluate(e=>e===document.activeElement),'Ugrólink');await page.keyboard.press('Enter');assert(await page.locator('main').evaluate(e=>e===document.activeElement),'Ugrólink célfókusz');
   if((width===390||width===1440)&&zoom===1){
    await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(i=>{i.loading='eager';return i.decode()})));
    await page.locator('main').evaluate(e=>e.blur());await page.evaluate(()=>scrollTo(0,0));
    await page.screenshot({path:path.join(root,`ellenorzes/kepernyokepek/muhely-${width}-nyito.png`)});
    await page.screenshot({path:path.join(root,`ellenorzes/kepernyokepek/muhely-${width}-teljes.png`),fullPage:true});
    await page.locator('#keramiak').screenshot({path:path.join(root,`ellenorzes/kepernyokepek/muhely-${width}-galeria.png`)});
    fs.copyFileSync(path.join(root,`ellenorzes/kepernyokepek/muhely-${width}-teljes.png`),path.join(root,`beadas/jelenlegi-oldal/muhely-${width===390?'mobil':'asztali'}.png`));
    fs.copyFileSync(path.join(root,`ellenorzes/kepernyokepek/muhely-${width}-galeria.png`),path.join(root,`beadas/jelenlegi-oldal/muhely-galeria-${width===390?'mobil':'asztali'}.png`));
   }
   assert(errors.length===0,'Böngészőhiba: '+errors.join(';'));
   results.push({width,textZoom:zoom,passed:true,galleryOpenCloseChecks:6});console.log(width,zoom,'OK');await page.close();
  }
  for(const[file,hash]of Object.entries(JSON.parse(fs.readFileSync(path.join(root,'ellenorzes/muhely-valtozatlan-forrasok.json'),'utf8'))))assert(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex')===hash,'Védett forrás módosult: '+file);
  await sharp(path.join(root,'ellenorzes/kepernyokepek/muhely-1440-teljes.png')).resize({width:700}).toFile(path.join(root,'ellenorzes/kepernyokepek/muhely-attekintes.png'));
 }finally{await browser.close();fs.writeFileSync(path.join(root,'ellenorzes/muhely-ellenorzes.json'),JSON.stringify({date:'2026-11-14',passed:results.length===10,protectedSourcesUnchanged:results.length===10,results},null,2)+'\n')}
})().catch(e=>{console.error(e);process.exitCode=1});
