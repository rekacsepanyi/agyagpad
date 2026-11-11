const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const {chromium}=r('playwright'),sharp=r('sharp');
const root=path.resolve(__dirname,'..'),out=path.join(root,'ellenorzes/kepernyokepek');fs.mkdirSync(out,{recursive:true});
const home='koncepcio-1-udvari-muhely.html',results=[];
const assert=(ok,message)=>{if(!ok)throw Error(message)};
(async()=>{const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});try{
for(const width of [320,390,768,1024,1440]){
 const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'}),page=await context.newPage();const issues=[],external=[];let sends=0;
 page.on('pageerror',e=>issues.push(e.message));page.on('response',r=>{if(r.status()>=400)issues.push(r.status()+' '+r.url())});page.on('request',r=>{if(r.method()==='POST')sends++;if(!r.url().startsWith('http://127.0.0.1:4173/'))external.push(r.url())});
 const result={width,passed:false,checks:[]};
 try{
 await page.goto('http://127.0.0.1:4173/'+home,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 let homeLayout=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,notes:getComputedStyle(document.querySelector('.notes')).backgroundColor,columns:getComputedStyle(document.querySelector('.notes-grid')).gridTemplateColumns.split(' ').length,yearColumns:getComputedStyle(document.querySelector('.timeline')).gridTemplateColumns.split(' ').length,years:[...document.querySelectorAll('.timeline time')].map(x=>x.textContent),hero:document.querySelector('.hero-photo').getAttribute('src'),h1:document.querySelectorAll('h1').length,cards:document.querySelectorAll('.course').length,notesCount:document.querySelectorAll('.notes-grid li').length}));
 assert(!homeLayout.overflow,'Főoldali túlcsordulás');assert(homeLayout.notes==='rgb(27, 77, 79)','Nem türkiz tudnivaló');assert(homeLayout.columns===(width<768?1:2),'Tudnivalók elrendezése');assert(homeLayout.yearColumns===(width<768?1:4),'Idővonal elrendezése');assert(homeLayout.years.join(',')==='2018,2022,2023,2024','Mérföldkő változott');assert(homeLayout.hero.includes('reszletfoto2'),'Nem anyagközeli nyitókép');assert(homeLayout.h1===1&&homeLayout.cards===3&&homeLayout.notesCount===6,'Főoldali tartalom hiányos');result.checks.push('színek, olvasható 6 tudnivaló, idővonal és képhasználat');
 if(width<1024){const toggle=page.locator('.menu');await toggle.click();assert(await toggle.getAttribute('aria-expanded')==='true','Menü nem nyílik');await page.keyboard.press('Escape');assert(await toggle.getAttribute('aria-expanded')==='false','Menü nem zár');}
 await page.getByRole('link',{name:'Megnézem a tanfolyamokat',exact:true}).click();assert(new URL(page.url()).hash==='#tanfolyamok','Hero CTA hibás');
 const links=page.locator('.course .detail-link');assert(await links.count()===3,'Részletlinkek hiányoznak');
 const anchors=['korongozo-kostolo','kezdo-kurzus','ceges-csapatepito'],values=['kostolo','kezdo-kurzus','csapatepito'];
 const hrefs=await links.evaluateAll(list=>list.map(a=>a.getAttribute('href')));assert(hrefs.every((x,i)=>x==='tanfolyamok.html#'+anchors[i]),'Részletlink célpontja');
 await links.first().click();await page.waitForLoadState('networkidle');assert(page.url().endsWith('tanfolyamok.html#korongozo-kostolo'),'Kártyalink nem navigál');
 assert(await page.locator('h1').count()===1,'Aloldal H1');assert(await page.locator('.program-detail').count()===3,'Programrészletek hiányoznak');
 assert(await page.locator('.program-detail').filter({hasText:'18 500 Ft / fő'}).count()===1,'Kóstoló ára');assert(await page.locator('.program-detail').filter({hasText:'65 000 Ft / fő'}).count()===1,'Kurzus ára');
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Aloldali túlcsordulás');
 const notesTitleColor=await page.locator('#feltetelek').evaluate(e=>getComputedStyle(e).color);assert(notesTitleColor==='rgb(249, 248, 246)','Aloldali tudnivaló címe nem világos');result.checks.push('3 főoldali részletlink, árak és működő tanfolyamaloldal');
 for(let i=0;i<values.length;i++){
  await page.goto('http://127.0.0.1:4173/tanfolyamok.html#'+anchors[i],{waitUntil:'networkidle'});await page.locator('#'+anchors[i]+' .button').click();await page.waitForLoadState('networkidle');assert(await page.locator('#program').inputValue()===values[i],'Aloldali programválasztás: '+values[i]);
 }
 await page.locator('#name').fill('Teszt Elek');await page.locator('#email').fill('teszt@example.com');await page.locator('#message').fill('Helyi ellenőrzés.');
 await page.getByRole('link',{name:'Megnézem a tanfolyamokat',exact:true}).click();assert(await page.locator('#program').inputValue()==='csapatepito','Hero átírja a programválasztást');
 await page.locator('footer a[href="#kapcsolat"]').first().click();assert(await page.locator('#name').inputValue()==='Teszt Elek','Elveszett a mezőtartalom');await page.locator('form button[type="submit"]').click();assert((await page.locator('[role="status"]').textContent()).includes('nem kerültek elküldésre'),'Helyi űrlap visszajelzése');assert(sends===0,'Váratlan adatküldés');result.checks.push('aloldali érdeklődés programválasztással, adatmegőrzés, helyi űrlap');
 assert(issues.length===0,'Hibás erőforrás/JS: '+issues.join(';'));assert(external.length===0,'Külső erőforrás');
 if(width===390||width===1440){
  await page.goto('http://127.0.0.1:4173/'+home,{waitUntil:'networkidle'});await page.screenshot({path:path.join(out,`udvari-turkiz-${width}-nyito.png`)});await page.screenshot({path:path.join(out,`udvari-turkiz-${width}-teljes.png`),fullPage:true});
  for(const [selector,name] of [['#tanfolyamok','programok'],['.timeline','idovonal'],['.notes','tudnivalok'],['footer','lablec']])await page.locator(selector).screenshot({path:path.join(out,`udvari-turkiz-${width}-${name}.png`)});
  await page.goto('http://127.0.0.1:4173/tanfolyamok.html',{waitUntil:'networkidle'});await page.screenshot({path:path.join(out,`tanfolyamok-${width}.png`),fullPage:true});
  if(width===1440)await sharp(path.join(out,'udvari-turkiz-1440-nyito.png')).resize({width:720}).webp({quality:82}).toFile(path.join(root,'images/webp/koncepcio-1-elozetes.webp'));
 }
 result.passed=true;
 }catch(e){result.error=e.message;await page.screenshot({path:path.join(out,'turkiz-hiba-'+width+'.png'),fullPage:true}).catch(()=>{});}
 results.push(result);console.log(JSON.stringify(result));await context.close();
}
const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:900}}),page=await context.newPage();await page.goto('file:///'+path.join(root,home).replaceAll('\\','/'));assert(await page.locator('form button[type="submit"]').isDisabled(),'JS nélkül küldhető űrlap');assert(await page.locator('header a[href="tanfolyamok.html"]').isVisible(),'JS nélkül nincs nav');await context.close();
}finally{await browser.close();fs.writeFileSync(path.join(root,'ellenorzes/turkiz-ellenorzes.json'),JSON.stringify({results,passed:results.length===5&&results.every(r=>r.passed)},null,2));}if(results.some(r=>!r.passed))process.exitCode=1;})().catch(e=>{console.error(e);process.exitCode=1});
