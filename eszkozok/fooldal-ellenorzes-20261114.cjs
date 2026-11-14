const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const {chromium}=r('playwright'),sharp=r('sharp');
const root=path.resolve(__dirname,'..'),shots=path.join(root,'ellenorzes/kepernyokepek');
const home='koncepcio-1-udvari-muhely.html',results=[];
const assert=(ok,message)=>{if(!ok)throw Error(message)};
const expected=['3 óra alkotás és kikapcsolódás','4 hét, egymásra épülő alkalmakkal','Közös alkotás, egyeztetett időpontban'];
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  for(const file of [home,'tanfolyamok.html','muhely.html','adatkezeles.html']){
   const sizes=file===home?[[320,1],[390,1],[768,1],[1024,1],[1440,1],[390,2],[1440,2]]:[[320,1],[390,1],[768,1],[1024,1],[1440,1]];
   for(const [width,zoom]of sizes){
    const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}),errors=[];let posts=0;
    page.on('pageerror',e=>errors.push(e.message));page.on('response',e=>{if(e.status()>=400)errors.push(e.status()+' '+e.url())});page.on('request',e=>{if(e.method()==='POST')posts++;if(!e.url().startsWith('http://127.0.0.1:4173/'))errors.push('Külső kérés: '+e.url())});
    const item={file,width,textZoom:zoom,passed:false};
    try{
     await page.goto('http://127.0.0.1:4173/'+file,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
     await page.evaluate(()=>Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode()})));
     if(zoom===2)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
     assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Vízszintes túlcsordulás');
     assert(await page.locator('h1').count()===1,'H1 hierarchia');
     assert(await page.locator('.header-cta').first().textContent()==='Jelentkezem','Fejléc CTA');
     assert((await page.locator('.project-credit').textContent()).trim()==='© 2026 Agyagpad · Fiktív vállalkozást bemutató webdesign-vizsgamunka.','Lábléc jelzés');
     assert(await page.locator('.footer-links a').count()===4,'Lábléc linkek');
     if(width<1024){await page.locator('.menu').click();assert(await page.locator('.site-header .header-cta').isVisible(),'Mobil CTA');await page.keyboard.press('Escape');assert(await page.locator('.menu').getAttribute('aria-expanded')==='false','Menü/Escape');}
     const targets=await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')).filter(h=>!/^https?:|^mailto:/.test(h)));
     for(const href of targets){const u=new URL(href,'https://local.invalid/'+file),relative=decodeURIComponent(u.pathname.slice(1));assert(fs.existsSync(path.join(root,relative)),'Hiányzó cél: '+href);if(u.hash){const text=fs.readFileSync(path.join(root,relative),'utf8');assert(text.includes('id="'+u.hash.slice(1)+'"'),'Hiányzó horgony: '+href);}}
     if(file===home){
      assert(await page.locator('h1').textContent()==='Alkoss agyagból, bontakozz ki Szentendrén.','Hero cím');
      assert((await page.locator('.hero .intro').textContent()).includes('Előképzettség nélkül, a saját tempódban alkothatsz'),'Hero bevezető');
      assert(JSON.stringify(await page.locator('.course-data p').allTextContents())===JSON.stringify(expected),'Kártyaélmények');
      const cards=await page.locator('.course').evaluateAll(es=>es.map(e=>{const d=e.querySelector('.course-data'),l=e.querySelector('.detail-link'),i=e.querySelector('.course-icon');return{summary:d.getBoundingClientRect().top,link:l.getBoundingClientRect().top,color:getComputedStyle(i).color,weight:getComputedStyle(d).fontWeight,clipped:d.scrollWidth>d.clientWidth}}));
      assert(cards.every(c=>c.color==='rgb(166, 91, 50)'&&Number(c.weight)>=600&&!c.clipped),'Kártyaikonok vagy tördelés');
      if(width>=1024)assert(Math.max(...cards.map(c=>c.summary))-Math.min(...cards.map(c=>c.summary))<2&&Math.max(...cards.map(c=>c.link))-Math.min(...cards.map(c=>c.link))<2,'Kártyasorok nem igazodnak');
      const notes=await page.locator('.notes').evaluate(e=>{const a=e.getBoundingClientRect(),b=e.previousElementSibling.getBoundingClientRect();return{aligned:Math.abs(a.x-b.x)<1&&Math.abs(a.width-b.width)<1,background:getComputedStyle(e).backgroundColor,color:getComputedStyle(e).color,columns:getComputedStyle(e.querySelector('ul')).gridTemplateColumns.split(' ').length}});
      assert(notes.aligned&&notes.background==='rgb(27, 77, 79)'&&notes.color==='rgb(249, 248, 246)'&&notes.columns===(width>=768?2:1),'Tudnivalóblokk');
      assert(await page.locator('.notes-grid li').count()===6,'Hat tudnivaló');
      assert(await page.locator('.timeline').count()===0,'Idővonal maradt');assert(JSON.stringify(await page.locator('.studio-stats dd').allTextContents())===JSON.stringify(['15+ év','1500+','7000+']),'Számadatok');
      assert((await page.locator('.story-text').textContent()).includes('2009-ben')&&(await page.locator('.story-text').textContent()).includes('Népi iparművészként'),'Új Dóra-történet');
      assert(await page.locator('.story-text>.studio-stats:last-child').count()===1&&await page.locator('.story-cta').count()===0,'A bemutatkozás a számadatokkal zárul');assert(await page.locator('.shop .pottery-lines').count()===0,'Kerámiafotón körív maradt');assert((await page.locator('.shop-cta').textContent()).trim()==='Felfedezem a kerámiákat','Kerámia gomb nyíl nélkül');assert(await page.locator('.shop-cta').getAttribute('href')==='muhely.html#keramiak','Kerámia CTA');
      assert(!/bemutató|prototípus|nem küld üzenetet/i.test(await page.locator('#kapcsolat').textContent()),'Régi demószöveg maradt a kapcsolati blokkban');
      await page.locator('form button[type="submit"]').click();assert(await page.locator('[aria-invalid="true"]').count()===3,'Kötelező mezők hibái');
      await page.locator('#name').fill('Teszt Elek');await page.locator('#email').fill('hibas');await page.locator('#program').selectOption('kostolo');await page.locator('.send').click();assert((await page.locator('#email-error').textContent()).includes('érvényes'),'Magyar e-mail hiba');
      await page.locator('#email').fill('teszt@example.com');await page.locator('.send').click();assert((await page.locator('.form-status').textContent()).includes('nem elérhető'),'Fogadó nélküli állapot');assert(posts===0,'Konfiguráció nélkül adatküldés történt');assert(await page.locator('#name').inputValue()==='Teszt Elek','Hibánál elveszett adat');
      await page.reload({waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode()})));if(zoom===2)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
     }
     if(file==='tanfolyamok.html'){
      assert((await page.locator('#kezdo-kurzus .program-facts').textContent()).includes('4 × 2,5 óra'),'Hiányzó pontos kurzusidőtartam');assert((await page.locator('#kezdo-kurzus .program-facts').textContent()).includes('4 alkalom'),'Pontos alkalomszám');
      const mainText=fs.readFileSync(path.join(root,home),'utf8').match(/<ul class="notes-grid">[\s\S]*?<\/ul>/)[0].replace(/\s+/g,' ');const subText=fs.readFileSync(path.join(root,file),'utf8').match(/<ul class="notes-grid">[\s\S]*?<\/ul>/)[0].replace(/\s+/g,' ');assert(mainText===subText,'Eltérő közös tudnivalók');
     }
     await page.goto('http://127.0.0.1:4173/'+file,{waitUntil:'networkidle'});await page.keyboard.press('Tab');assert(await page.locator('.skip').evaluate(e=>e===document.activeElement),'Ugrólink fókusz');await page.keyboard.press('Enter');assert(await page.locator('main').evaluate(e=>e===document.activeElement),'Ugrólink cél');
     if((width===390||width===1440)&&zoom===1){
      await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode()})));
      const prefix=file===home?'udvari-aktualis':file.replace('.html','');await page.screenshot({path:path.join(shots,`${prefix}-${width}-teljes.png`),fullPage:true});
      if(file===home){await page.screenshot({path:path.join(shots,`udvari-aktualis-${width}-nyito.png`)});for(const[selector,name]of[['.studio-stats','szamadatok'],['.story','bemutatkozas'],['#muhely','muhely'],['.shop','keramiak'],['.notes','tudnivalok'],['#tanfolyamok','programok'],['#kapcsolat','kapcsolat']])await page.locator(selector).screenshot({path:path.join(shots,`udvari-aktualis-${width}-${name}.png`)});if(width===1440)await sharp(path.join(shots,'udvari-aktualis-1440-nyito.png')).resize({width:720}).webp({quality:82}).toFile(path.join(root,'images/webp/koncepcio-1-elozetes.webp'));}
     }
     assert(errors.length===0,'Böngészőhiba: '+errors.join(';'));item.passed=true;
    }catch(e){item.error=e.message;await page.screenshot({path:path.join(shots,`nov14-hiba-${file}-${width}-${zoom}.png`),fullPage:true}).catch(()=>{});}
    results.push(item);console.log(JSON.stringify(item));await page.close();
   }
  }
 }finally{await browser.close();fs.writeFileSync(path.join(root,'ellenorzes/fo-ellenorzes.json'),JSON.stringify({date:'2026-11-14',results,passed:results.length===22&&results.every(r=>r.passed),form:'A Netlify-fogadó inaktív. Az éles kézbesítés nincs igazolva.'},null,2)+'\n');}
 if(results.some(r=>!r.passed))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
