const fs=require('fs');
const path=require('path');
const {createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const {chromium}=r('playwright');
const sharp=r('sharp');
const root=path.resolve(__dirname,'..');
const shots=path.join(root,'ellenorzes/kepernyokepek');fs.mkdirSync(shots,{recursive:true});
const pages=['koncepcio-1-udvari-muhely.html','koncepcio-2-agyagnaplo.html','koncepcio-3-az-alkotas-kozelrol.html'];
const selectedVariant=Number(process.argv[2]||0);
const results=[];
const assert=(condition,message)=>{if(!condition)throw Error(message)};
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
 for(let i=0;i<pages.length;i++){
  if(selectedVariant&&selectedVariant!==i+1)continue;
  for(const width of [320,390,1440]){
   const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
   const page=await context.newPage();let posts=0;const errors=[],failed=[],external=[];
   page.on('pageerror',e=>errors.push(e.message));
   page.on('request',req=>{if(req.method()==='POST')posts++;if(!req.url().startsWith('http://127.0.0.1:4173/')&&!req.url().startsWith('data:'))external.push(req.url())});
   page.on('response',res=>{if(res.status()>=400)failed.push({url:res.url(),status:res.status()})});
   const result={file:pages[i],width,checks:[],passed:false};
   try{
    const response=await page.goto('http://127.0.0.1:4173/'+pages[i],{waitUntil:'networkidle'});assert(response.status()===200,'Nem 200-as oldal');
    await page.evaluate(()=>document.fonts.ready);
    const layout=await page.evaluate(()=>({viewport:innerWidth,body:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,sections:['kezdo','tanfolyamok','muhely','kapcsolat'].every(id=>document.getElementById(id)),badImages:[...document.images].filter(im=>im.complete&&im.naturalWidth===0).map(im=>im.src),photoFormats:[...document.images].every(im=>new URL(im.currentSrc||im.src).pathname.endsWith('.webp')),fonts:[document.fonts.check('600 16px Inter','Őrült űrlap'),document.fonts.check('700 40px Merriweather','Őszi műhely')]}));
    assert(layout.body<=layout.viewport+1,'Vízszintes túlcsordulás: '+JSON.stringify(layout));assert(layout.h1===1,'H1 darabszám');assert(layout.sections,'Hiányzó fő szekció');assert(layout.badImages.length===0,'Hibás képek: '+layout.badImages);assert(layout.photoFormats,'Nem WebP kép');assert(layout.fonts.every(Boolean),'Betű nem töltődött');result.checks.push('elrendezés, 4 szekció, 1 H1, WebP-k, helyi fontok');
    if(width<1024){
     const toggle=page.locator('button[aria-expanded][aria-controls]').first();assert(await toggle.count()===1,'Menügomb hiányzik');await toggle.click();assert(await toggle.getAttribute('aria-expanded')==='true','Menü nem nyílik');await page.keyboard.press('Escape');assert(await toggle.getAttribute('aria-expanded')==='false','Escape nem zár');result.checks.push('mobilmenü nyitás/zárás Escape');
    }
    await page.locator('#name').fill('Teszt Elek');await page.locator('#email').fill('teszt@example.com');await page.locator('#message').fill('Helyi ellenőrzés, nincs üzenetküldés.');
    for(const value of ['kostolo','kezdo-kurzus','csapatepito']){
     await page.locator('[data-program="'+value+'"]').first().click();assert(await page.locator('#program').inputValue()===value,'Program nem állt be: '+value);
    }
    await page.locator('[data-program-reset]').first().click();assert(await page.locator('#program').inputValue()==='','Hero nem alapállapot');assert(await page.locator('#name').inputValue()==='Teszt Elek','Név elveszett');
    await page.locator('#program').selectOption('egyeb');await page.locator('footer a[href="#kapcsolat"]').first().click();assert(await page.locator('#program').inputValue()==='egyeb','Footer törölte választást');result.checks.push('3 kártya programválasztás, hero reset, adatmegőrzés, footer megőrzi');
    await page.locator('form[data-demo-form] button[type="submit"]').click();assert(posts===0,'Váratlan adatküldés');assert((await page.locator('body').innerText()).includes('az adatok nem kerültek elküldésre'),'Helyi űrlap-visszajelzés hiányzik');result.checks.push('bemutatóűrlap nem küld adatot');
    assert(errors.length===0,'JS-hibák: '+errors.join(';'));assert(failed.length===0,'Erőforráshibák: '+JSON.stringify(failed));assert(external.length===0,'Külső erőforrás: '+external.join(';'));result.checks.push('nincs JS/erőforráshiba vagy külső kérés');
    await page.goto('http://127.0.0.1:4173/'+pages[i],{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>scrollTo(0,0));
    if(width!==320){await page.screenshot({path:path.join(shots,`koncepcio-${i+1}-${width}.png`),fullPage:true});await page.screenshot({path:path.join(shots,`koncepcio-${i+1}-${width}-nyito.png`)});}
    if(width===1440){await sharp(path.join(shots,`koncepcio-${i+1}-${width}-nyito.png`)).resize({width:720}).webp({quality:82}).toFile(path.join(root,`images/webp/koncepcio-${i+1}-elozetes.webp`));}
    result.passed=true;
   }catch(e){result.error=e.message;await page.screenshot({path:path.join(shots,`hiba-${i+1}-${width}.png`),fullPage:true}).catch(()=>{});}
   result.jsErrors=errors;result.failedResources=failed;results.push(result);console.log(JSON.stringify(result));await context.close();
  }
 }
 // A kész választó és az adatkezelési státuszoldal is megnyitható.
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 for(const file of ['index.html','adatkezeles.html?v=3']){const response=await page.goto('http://127.0.0.1:4173/'+file,{waitUntil:'networkidle'});assert(response.status()===200,'Hiányzó kiegészítő oldal');}
 await page.goto('http://127.0.0.1:4173/index.html',{waitUntil:'networkidle'});await page.screenshot({path:path.join(shots,'koncepciovalaszto.png'),fullPage:true});await page.close();
 }finally{await browser.close();const reportPath=path.join(root,'ellenorzes/prototipus-ellenorzes.json');let combined=results;if(selectedVariant&&fs.existsSync(reportPath)){const old=JSON.parse(fs.readFileSync(reportPath,'utf8'));combined=[...old.results.filter(x=>x.file!==pages[selectedVariant-1]),...results];}fs.writeFileSync(reportPath,JSON.stringify({results:combined,passed:combined.length===9&&combined.every(x=>x.passed)},null,2));}
 if(results.some(x=>!x.passed))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
