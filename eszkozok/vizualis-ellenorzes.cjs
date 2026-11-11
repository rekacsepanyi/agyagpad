const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const {chromium}=r('playwright'),sharp=r('sharp');const root=path.resolve(__dirname,'..');
const files=['koncepcio-1-udvari-muhely.html','koncepcio-2-agyagnaplo.html','koncepcio-3-az-alkotas-kozelrol.html'];
const selectedVariant=Number(process.argv[2]||0);
(async()=>{const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});const checks=[];try{
for(let i=0;i<files.length;i++){
 if(selectedVariant&&selectedVariant!==i+1)continue;
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});const page=await context.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('file:///'+path.join(root,files[i]).replaceAll('\\','/'),{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 const missing=await page.evaluate(()=>[...document.images].filter(im=>im.complete&&im.naturalWidth===0).map(im=>im.src));
 if(errors.length||missing.length)throw Error('Helyi fájl hiba: '+files[i]);
 const screenshot=path.join(root,`ellenorzes/kepernyokepek/koncepcio-${i+1}-1440-nyito.png`);await page.screenshot({path:screenshot});
 await sharp(screenshot).resize({width:720}).webp({quality:82}).toFile(path.join(root,`images/webp/koncepcio-${i+1}-elozetes.webp`));
 await page.locator('#tanfolyamok').screenshot({path:path.join(root,`ellenorzes/kepernyokepek/koncepcio-${i+1}-tanfolyamok.png`)});
 await page.locator('#kapcsolat').screenshot({path:path.join(root,`ellenorzes/kepernyokepek/koncepcio-${i+1}-kapcsolat.png`)});
 if(i===0){
  await page.locator('.timeline').screenshot({path:path.join(root,'ellenorzes/kepernyokepek/udvari-muhely-idovonal.png')});
  await page.locator('.notes').screenshot({path:path.join(root,'ellenorzes/kepernyokepek/udvari-muhely-tudnivalok.png')});
  await page.locator('footer').screenshot({path:path.join(root,'ellenorzes/kepernyokepek/udvari-muhely-lablec.png')});
 }
 await context.close();
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:900}});const nojsPage=await nojs.newPage();await nojsPage.goto('http://127.0.0.1:4173/'+files[i]);
 const links=await nojsPage.locator('header a[href="#tanfolyamok"]').first().isVisible();const disabled=await nojsPage.locator('form button[type="submit"]').isDisabled();
 if(!links||!disabled)throw Error('JavaScript nélküli fallback hibás: '+files[i]);checks.push({file:files[i],fileProtocol:true,noJsNavigation:true,noJsSubmitDisabled:true});await nojs.close();
}
const page=await browser.newPage({viewport:{width:1440,height:1000}});await page.goto('http://127.0.0.1:4173/index.html',{waitUntil:'networkidle'});await page.screenshot({path:path.join(root,'ellenorzes/kepernyokepek/koncepciovalaszto.png'),fullPage:true});await page.setViewportSize({width:390,height:900});await page.screenshot({path:path.join(root,'ellenorzes/kepernyokepek/koncepciovalaszto-mobil.png'),fullPage:true});
const reportPath=path.join(root,'ellenorzes/kiegeszito-ellenorzes.json');let combined=checks;if(selectedVariant&&fs.existsSync(reportPath)){const old=JSON.parse(fs.readFileSync(reportPath,'utf8'));combined=[...old.checks.filter(x=>x.file!==files[selectedVariant-1]),...checks];}fs.writeFileSync(reportPath,JSON.stringify({checks:combined,passed:combined.length===3},null,2));console.log(JSON.stringify(checks));
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
