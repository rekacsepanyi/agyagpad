const fs=require('fs'),path=require('path'),crypto=require('crypto'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright'),sharp=r('sharp');
const root=path.resolve(__dirname,'..'),base='http://127.0.0.1:4173/',results=[];
const assert=(ok,message)=>{if(!ok)throw Error(message)};
const html=fs.readFileSync(path.join(root,'kapcsolat.html'),'utf8'),home=fs.readFileSync(path.join(root,'koncepcio-1-udvari-muhely.html'),'utf8');
const block=h=>h.match(/<div class="form-block">[\s\S]*?<\/form>\s*<\/div>/)[0];
const contact=home.match(/<section class="chapter" id="kapcsolat"[\s\S]*?<\/section>/)[0];
const sourceHeading=contact.match(/<header class="chapter-heading">[\s\S]*?<\/header>/)[0];
const footer=home.match(/<footer>[\s\S]*?<\/footer>/)[0];
(async()=>{
 assert(block(html)===block(home),'A teljes eredeti űrlapblokk változatlan');
 assert(html.replace(/\s+/g,' ').includes(sourceHeading.replace('<p class="eyebrow">Érdeklődés és kapcsolat</p>','').replace(/\s+/g,' ')),'Az eredeti űrlapcím és bevezető a kért kicker nélkül megmaradt');
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});let protectedSourcesUnchanged=false;
 try{
  for(const[width,zoom]of [[320,1],[390,1],[600,1],[768,1],[900,1],[1024,1],[1200,1],[1440,1],[390,2],[1440,2]]){
   const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}),errors=[];let posts=0;
   page.on('pageerror',e=>errors.push(e.message));page.on('response',e=>{if(e.status()>=400)errors.push(e.status()+' '+e.url())});page.on('request',e=>{if(e.method()==='POST')posts++});
   await page.goto(base+'kapcsolat.html');await page.evaluate(()=>document.fonts.ready);if(zoom===2)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Vízszintes túlcsordulás');
   assert(await page.locator('h1').count()===1&&(await page.locator('h1').textContent())==='Beszéljük meg, mit alkotnál szívesen!','Egyetlen, megadott H1');
   assert(await page.locator('main img').count()===1&&await page.locator('.contact-map iframe').count()===1&&await page.locator('.contact-aside').count()===0,'Kért hero-fotó és térkép, külön műhelykártya nélkül');
   assert(await page.locator('.contact-form-column .eyebrow').count()===0,'Második szakasz kicker nélkül');
   if(width>=1100&&zoom===1)assert(await page.locator('h1 span').evaluateAll(es=>es.length===2&&es.every(e=>Math.abs(e.getBoundingClientRect().height-parseFloat(getComputedStyle(e).lineHeight))<1)),'Kétsoros asztali főcím');
   assert(await page.locator('main>section').count()===3,'Csak a három kért szakasz');
   assert(await page.locator('.site-nav [aria-current="page"]').textContent()==='Kapcsolat','Aktív Kapcsolat menüpont');
   assert(await page.locator('.header-cta').getAttribute('href')==='kapcsolat.html#erdeklodes','Helyi fejlécgomb');
   if(width<1024){await page.locator('.menu').click();assert(await page.locator('.header-cta').isVisible(),'Mobil fejlécgomb');await page.keyboard.press('Escape');}
   await page.locator('.header-cta').evaluate(e=>e.focus());
   if(width<1024)await page.locator('.menu').click();
   await page.locator('.header-cta').click();assert(new URL(page.url()).hash==='#erdeklodes','A helyi űrlapos szakaszhoz navigál');
   const layout=await page.locator('.contact-page-grid').evaluate(e=>{const a=e.firstElementChild.getBoundingClientRect(),b=e.lastElementChild.getBoundingClientRect();return{left:a.toJSON(),right:b.toJSON()}});
   if(width>=900)assert(Math.abs(layout.left.top-layout.right.top)<1&&layout.right.width>layout.left.width,'Asztali elérhetőség–űrlap arány');
   else assert(layout.right.top>layout.left.bottom,'Mobilon először elérhetőségek, utána űrlap');
   assert(await page.locator('a[href^="mailto:"],a[href^="tel:"]').count()===0,'Nincs kitalált publikus elérhetőség');
   const sameFooter=await page.locator('footer').evaluate((e,source)=>{const doc=new DOMParser().parseFromString(source,'text/html'),normalize=t=>t.replace(/\s+/g,' ').trim();return normalize(e.textContent)===normalize(doc.querySelector('footer').textContent)},footer);
   assert(sameFooter,'Azonos lábléctartalom');
   for(const href of await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')))){
    if(/^(https?:|mailto:|tel:)/.test(href))continue;const u=new URL(href,base+'kapcsolat.html'),file=path.join(root,decodeURIComponent(u.pathname.slice(1)));assert(fs.existsSync(file),'Hiányzó cél: '+href);if(u.hash)assert(fs.readFileSync(file,'utf8').includes('id="'+u.hash.slice(1)+'"'),'Hiányzó horgony: '+href);
   }
   assert(await page.locator('.faq-list details').count()===4,'Négy gyakori kérdés');
   for(let i=0;i<4;i++){
    const detail=page.locator('.faq-list details').nth(i),summary=detail.locator('summary');await page.keyboard.press('Tab');await summary.focus();
    assert(await summary.evaluate(e=>e.matches(':focus-visible')&&parseFloat(getComputedStyle(e).outlineWidth)>=3),'FAQ fókuszjelölés');
    await page.keyboard.press('Enter');await page.waitForFunction(e=>e.open,await detail.elementHandle(),{timeout:3000});assert(await detail.evaluate(e=>e.open),'FAQ Enterre nyílik');assert(await detail.locator('p').isVisible(),'Válasz látható');
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Nyitott FAQ nem csordul túl');
    await page.keyboard.press('Space');await page.waitForFunction(e=>!e.open,await detail.elementHandle(),{timeout:3000});assert(await detail.evaluate(e=>!e.open),'FAQ szóközre zár');
   }
   await page.locator('.send').click();assert(await page.locator('[aria-invalid="true"]').count()===3,'Kötelező mezők változatlan ellenőrzése');
   await page.locator('#name').fill('Teszt Elek');await page.locator('#email').fill('hibás');await page.locator('#program').selectOption('egyeb');await page.locator('#message').fill('Megmaradó helyi tesztüzenet.');await page.locator('.send').click();assert((await page.locator('#email-error').textContent()).includes('érvényes'),'Magyar e-mail-hiba');
   await page.locator('#email').fill('teszt@example.com');await page.locator('.send').click();assert((await page.locator('.form-status').textContent()).includes('nem elérhető')&&posts===0,'Inaktív fogadónál nincs küldés vagy siker');assert(await page.locator('#message').inputValue()==='Megmaradó helyi tesztüzenet.','Megmaradó kitöltés');
   await page.goto(base+'kapcsolat.html');await page.keyboard.press('Tab');assert(await page.locator('.skip').evaluate(e=>e===document.activeElement),'Ugrólink');await page.keyboard.press('Enter');assert(await page.locator('main').evaluate(e=>e===document.activeElement),'Ugrólink célja');
   if(zoom===1&&[390,768,1024,1440].includes(width)){
    await page.evaluate(()=>document.fonts.ready);await page.locator('.contact-introduction-photo img').evaluate(e=>e.decode());await page.locator('.contact-map').scrollIntoViewIfNeeded();await page.frameLocator('.contact-map iframe').locator('canvas').first().waitFor({timeout:15000});await page.waitForTimeout(1500);await page.locator('main').evaluate(e=>e.blur());
    // A WebGL-térképet látható állapotban rögzítjük a teljes oldalképhez.
    await page.screenshot({path:path.join(root,`ellenorzes/kepernyokepek/kapcsolat-${width}-teljes.png`),fullPage:true});
    await page.evaluate(()=>scrollTo(0,0));
    await page.screenshot({path:path.join(root,`ellenorzes/kepernyokepek/kapcsolat-${width}-nyito.png`)});
    const suffix={390:'mobil',768:'tablet-allo',1024:'tablet-fekvo',1440:'asztali'}[width];fs.copyFileSync(path.join(root,`ellenorzes/kepernyokepek/kapcsolat-${width}-teljes.png`),path.join(root,`beadas/jelenlegi-oldal/kapcsolat-${suffix}.png`));
   }
   assert(errors.length===0,'Böngészőhiba: '+errors.join(';'));results.push({width,textZoom:zoom,passed:true});console.log(width,zoom,'OK');await page.close();
  }
  for(const[file,hash]of Object.entries(JSON.parse(fs.readFileSync(path.join(root,'ellenorzes/kapcsolat-valtozatlan-forrasok.json'),'utf8'))))assert(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex')===hash,'Védett forrás módosult: '+file);
  protectedSourcesUnchanged=true;
  await sharp(path.join(root,'ellenorzes/kepernyokepek/kapcsolat-1440-teljes.png')).resize({width:700}).toFile(path.join(root,'ellenorzes/kepernyokepek/kapcsolat-attekintes.png'));
 }finally{await browser.close();fs.writeFileSync(path.join(root,'ellenorzes/kapcsolat-ellenorzes.json'),JSON.stringify({date:'2026-11-14',passed:results.length===10&&protectedSourcesUnchanged,protectedSourcesUnchanged,formHtmlUnchanged:true,realDeliveryVerified:false,results},null,2)+'\n')}
})().catch(e=>{console.error(e);process.exitCode=1});
