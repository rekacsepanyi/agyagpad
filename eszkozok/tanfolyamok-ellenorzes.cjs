const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright');
const root=path.resolve(__dirname,'..'),base='http://127.0.0.1:4173/',results=[];
const assert=(ok,message)=>{if(!ok)throw Error(message)};
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  for(const [width,zoom] of [[320,1],[390,1],[768,1],[900,1],[1024,1],[1100,1],[1199,1],[1200,1],[1440,1],[390,2],[1440,2]]){
   const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}),errors=[];let posts=0;
   page.on('pageerror',e=>errors.push(e.message));page.on('response',e=>{if(e.status()>=400)errors.push(e.status()+' '+e.url())});page.on('request',e=>{if(e.method()==='POST')posts++});
   await page.goto(base+'tanfolyamok.html');await page.evaluate(()=>document.fonts.ready);
   await page.evaluate(()=>Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode()})));
   if(zoom===2)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Túlcsordulás');
   assert(await page.locator('h1').count()===1,'H1');
   const geometry=await page.locator('.program-detail').evaluateAll(es=>es.map(e=>{
    const image=e.querySelector('.photo').getBoundingClientRect(),copy=e.querySelector('.program-copy').getBoundingClientRect(),info=e.querySelector('.program-information').getBoundingClientRect(),facts=e.querySelector('.program-facts').getBoundingClientRect(),price=e.querySelector('.price').getBoundingClientRect(),button=e.querySelector('.program-cta').getBoundingClientRect();
    return {buttonRight:button.right,copyRight:copy.right,imageBottom:image.bottom,buttonBottom:button.bottom,width:image.width,height:image.height,copyWidth:copy.width,top:image.top,copyTop:copy.top,copyLeft:copy.left,left:image.left,gap:button.top-info.bottom,buttonLeft:button.left,facts:facts.toJSON(),price:price.toJSON(),priceSize:parseFloat(getComputedStyle(e.querySelector('.price')).fontSize)};
   }));
   assert(geometry.every(g=>g.gap>=16),'Gomb és adatok minimális térköze');
   if(width>=1200){assert(geometry.every(g=>g.height>=g.width*5/6-1&&Math.abs(g.imageBottom-g.buttonBottom)<1),'Rugalmas fotómagasság és alsó gombigazítás');assert(geometry.every((g,i)=>i===1?Math.abs(g.buttonLeft-g.copyLeft)<1:Math.abs(g.buttonRight-g.copyRight)<1),'Gombok a fotótól távolabbi szélen');}
   else assert(geometry.every(g=>Math.abs(g.width/g.height-6/5)<.01&&Math.abs(g.buttonLeft-g.copyLeft)<1&&g.gap<=40),'Mobil képarány és balra igazított gomb');
   assert(geometry.every(g=>g.priceSize===22*zoom),'Egységes 22 px-es díjazás');
   if(geometry.every(g=>g.copyWidth>=448*zoom)){assert(geometry.every(g=>Math.abs(g.facts.top-g.price.top)<1&&g.price.left>g.facts.right),'Bal oldali adatok és jobb oldali díjazás');}
   else assert(geometry.every(g=>g.price.top>g.facts.bottom),'Mobil adat–díjazás sorrend');
   if(width>=1200&&zoom===1){assert(geometry.every(g=>Math.abs(g.width-g.copyWidth)<1&&Math.abs(g.top-g.copyTop)<1),'Azonos oszlopszélesség és felső igazítás');assert(Math.max(...geometry.map(g=>g.width))-Math.min(...geometry.map(g=>g.width))<1&&Math.max(...geometry.map(g=>g.height))-Math.min(...geometry.map(g=>g.height))<1,'Azonos fotóméret');assert(geometry[1].left>geometry[1].copyLeft&&geometry[0].left<geometry[0].copyLeft,'Cikkcakk elrendezés');}
   if(width<1200)assert(geometry.every(g=>g.copyTop>g.top),'Mobil kép–szöveg sorrend');
   assert(await page.evaluate(()=>getComputedStyle(document.querySelector('#programvalaszto h2')).fontSize===getComputedStyle(document.querySelector('.course-process h2')).fontSize),'Közös H2-stílus');
   assert(await page.locator('.program-nav .ceramic-icon[aria-hidden="true"]').count()===3,'Dekoratív kerámiaikonok');
   assert(await page.locator('.program-facts .course-icon').count()===8,'Megmaradó adatjelölő ikonok');
   const facts=await page.locator('#korongozo-kostolo .program-facts').evaluate(e=>[...e.children].map(c=>c.getBoundingClientRect().toJSON()));
   assert(facts[1].top>facts[0].top&&facts[2].top>facts[1].top,'Gyakorlati adatok közös bal oszlopban');
   await page.locator('.program-nav a').first().focus();assert(await page.locator('.program-nav a').first().evaluate(e=>e.matches(':focus-visible')&&parseFloat(getComputedStyle(e).outlineWidth)>=3),'Látható billentyűzetes fókusz');await page.keyboard.press('Enter');assert(new URL(page.url()).hash==='#korongozo-kostolo','Billentyűzetes kártyanavigáció');
   const formGap=await page.locator('.send').evaluate(e=>e.getBoundingClientRect().top-e.previousElementSibling.getBoundingClientRect().bottom);
   assert(formGap>=20&&formGap<=48,'Adatkezelési szöveg és gomb térköze');
   assert(await page.locator('.header-cta').getAttribute('href')==='#kapcsolat','Helyi fejléc CTA');
   assert(await page.locator('.hero .actions a').getAttribute('href')==='#programvalaszto','Hero cél');
   assert(await page.locator('.hero-photo').evaluate(e=>getComputedStyle(e).filter==='none'&&getComputedStyle(e).objectPosition==='50% 0%'),'Kivágás vagy sötétítés');
   assert(!(await page.locator('.hero').textContent()).includes('Dóra'),'Résztvevő Dóraként bemutatva');
   assert((await page.locator('#kezdo-kurzus .program-facts').textContent()).includes('4 alkalom × 2,5 óra'),'Pontos kurzusidő');
   assert((await page.locator('#kezdo-kurzus .program-facts').textContent()).includes('Szerdánként, 17:00–19:30'),'Rövid heti időpont');
   assert((await page.locator('#kezdo-kurzus .course-description').textContent()).includes('Az agyag előkészítésétől és központosításától'),'Végleges kurzusleírás');
   assert(await page.locator('.price svg').count()===0,'Díjazás ikon nélkül');
   assert((await page.locator('#ceges-csapatepito .price').textContent()).includes('az agyagot, a mázat és a két égetést'),'Céges alapanyag és égetés');
   assert(!(await page.locator('#ceges-csapatepito .program-facts').textContent()).includes('6 fő'),'Hatfős korlát nem a céges programon');
   assert(JSON.stringify(await page.locator('#program option').allTextContents())===JSON.stringify(['Válassz programot','Korongozó kóstoló','Négyhetes kezdő kurzus','Céges csapatépítő','Ajándékozás vagy egyéb érdeklődés']),'Megmaradó űrlapopciók');
   assert((await page.locator('#ceges-csapatepito .program-facts').textContent()).includes('a program kialakításakor egyeztetjük.'),'Céges létszám');
   for(const href of await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')))){
    if(/^(https?:|mailto:)/.test(href))continue;
    const u=new URL(href,base+'tanfolyamok.html'),file=path.join(root,decodeURIComponent(u.pathname.slice(1)));
    assert(fs.existsSync(file),'Hiányzó cél: '+href);
    if(u.hash)assert(fs.readFileSync(file,'utf8').includes('id="'+u.hash.slice(1)+'"'),'Hiányzó horgony: '+href);
   }
   const notes=await page.locator('.notes').evaluate(e=>({bg:getComputedStyle(e).backgroundColor,color:getComputedStyle(e).color,cols:getComputedStyle(e.querySelector('ul')).gridTemplateColumns.split(' ').length}));
   assert(notes.bg==='rgb(27, 77, 79)'&&notes.color==='rgb(249, 248, 246)'&&notes.cols===(width>=768?2:1),'Tudnivalók színe vagy rácsa');
   const noteHtml=file=>fs.readFileSync(path.join(root,file),'utf8').match(/<ul class="notes-grid">[\s\S]*?<\/ul>/)[0];
   assert(noteHtml('tanfolyamok.html')===noteHtml('koncepcio-1-udvari-muhely.html'),'Eltérő közös információ');
   if(width<1024){await page.locator('.menu').click();assert(await page.locator('.header-cta').isVisible(),'Mobil CTA');await page.keyboard.press('Escape');assert(await page.locator('.menu').evaluate(e=>e===document.activeElement),'Menü fókuszvisszaadás');}
   await page.locator('.send').click();assert(await page.locator('[aria-invalid="true"]').count()===3,'Kötelező mezők');
   await page.locator('#name').fill('Teszt Elek');await page.locator('#email').fill('hibás');await page.locator('#message').fill('Megmaradó tesztüzenet');
   for(const key of ['kostolo','kezdo-kurzus','csapatepito']){
    await page.locator(`[data-program="${key}"]`).focus();await page.keyboard.press('Enter');
    assert(await page.locator('#program').inputValue()===key,'Billentyűzetes programválasztás');
    assert(new URL(page.url()).pathname==='/tanfolyamok.html'&&new URL(page.url()).hash==='#kapcsolat','Helyi űrlapcél');
    assert(await page.locator('#message').inputValue()==='Megmaradó tesztüzenet','Elveszett kitöltés');
    assert(await page.locator('#program').getAttribute('aria-invalid')===null,'Elavult programhiba');
   }
   await page.locator('.send').click();assert((await page.locator('#email-error').textContent()).includes('érvényes'),'E-mail hiba');
   await page.locator('#email').fill('teszt@example.com');await page.locator('.send').click();
   assert((await page.locator('.form-status').textContent()).includes('nem elérhető')&&posts===0,'Inaktív küldési konfiguráció');
   assert(await page.locator('#name').inputValue()==='Teszt Elek','Megmaradó adatok');
   await page.goto(base+'tanfolyamok.html');await page.keyboard.press('Tab');assert(await page.locator('.skip').evaluate(e=>e===document.activeElement),'Ugrólink');await page.keyboard.press('Enter');assert(await page.locator('main').evaluate(e=>e===document.activeElement),'Ugrólink fókuszcél');
   assert(errors.length===0,'Böngészőhiba: '+errors.join(';'));
   results.push({width,textZoom:zoom,passed:true});console.log(width,zoom,'OK');await page.close();
  }
 }finally{await browser.close();fs.writeFileSync(path.join(root,'ellenorzes/tanfolyamok-ellenorzes.json'),JSON.stringify({date:'2026-11-14',passed:results.length===11,results,realDeliveryVerified:false},null,2)+'\n')}
})().catch(e=>{console.error(e);process.exitCode=1});
