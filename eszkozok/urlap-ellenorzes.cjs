const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright');
const root=path.resolve(__dirname,'..'),origin='https://agyagpad-form-teszt.invalid';
const assert=(ok,message)=>{if(!ok)throw Error(message)};
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'}),page=await browser.newPage();
 const results=[];let mode='error',posts=0,lastBody,release;
 const gate=new Promise(resolve=>{release=resolve});
 try{
  await page.route('**/*',async route=>{
   const req=route.request(),url=new URL(req.url());if(url.origin!==origin){if(url.origin==='https://www.openstreetmap.org'&&url.pathname==='/export/embed.html')return route.fulfill({status:200,contentType:'text/html',body:'<p>A térképet a küldési szimuláció nem tölti be.</p>'});throw Error('Váratlan külső kérés');}
   if(req.method()==='POST'){
    posts++;lastBody=new URLSearchParams(req.postData());
    if(mode==='network')return route.abort('failed');
    if(mode==='pending')await gate;
    return route.fulfill({status:mode==='error'?500:200,contentType:'text/html',body:mode==='error'?'Hiba':'<p>Accepted by simulated form receiver</p>'});
   }
   const file=path.resolve(root,'.'+decodeURIComponent(url.pathname));assert(file.startsWith(root+path.sep),'Hibás tesztútvonal');
   const ext=path.extname(file),type={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2'}[ext]||'application/octet-stream';
   return route.fulfill({status:200,contentType:type,body:fs.readFileSync(file)});
  });
  const target=process.argv[2]||'koncepcio-1-udvari-muhely.html';
  assert(['koncepcio-1-udvari-muhely.html','tanfolyamok.html','kapcsolat.html'].includes(target),'Ismeretlen tesztoldal');
  await page.goto(origin+'/'+target);
  await page.evaluate(()=>{window.AGYAGPAD_FORM_CONFIG={enabled:true,endpoint:'/',allowedHosts:[location.hostname]}});
  await page.locator('#name').fill('Teszt Elek');await page.locator('#email').fill('teszt@example.com');await page.locator('#program').selectOption('kezdo-kurzus');await page.locator('#message').fill('Helyi, szimulált beküldési próba.');
  await page.locator('.send').click();await page.waitForFunction(()=>document.querySelector('.form-status').textContent.includes('nem sikerült'));
  assert(await page.locator('#message').inputValue()==='Helyi, szimulált beküldési próba.','Szerverhibánál elveszett üzenet');results.push('HTTP 500: nincs siker, megmaradó adatok');
  assert(lastBody.get('form-name')==='agyagpad-erdeklodes'&&lastBody.get('email')==='teszt@example.com'&&lastBody.get('program')==='kezdo-kurzus'&&lastBody.has('bot-field'),'Hiányos Netlify payload');results.push('Valódi POST-kérés, form-name, összes mező és honeypot');
  mode='network';await page.locator('.send').click();await page.waitForFunction(()=>document.querySelector('.form-status').textContent.includes('nem sikerült'));assert(await page.locator('#email').inputValue()==='teszt@example.com','Hálózati hibánál elveszett e-mail');results.push('Hálózati hiba: megmaradó adatok, újrapróbálható küldés');
  mode='pending';const before=posts;await page.locator('.send').click();await page.waitForFunction(()=>document.querySelector('form').getAttribute('aria-busy')==='true');assert(await page.locator('.send').isDisabled(),'Folyamatban aktív gomb');assert(!(await page.locator('.form-status').textContent()).includes('megérkezett'),'Idő előtti siker');
  await page.locator('form').evaluate(e=>e.requestSubmit());await page.waitForTimeout(50);assert(posts===before+1,'Dupla küldés');results.push('Folyamatban nincs sikerüzenet, nincs dupla POST');
  release();await page.waitForFunction(()=>document.querySelector('.form-status').textContent.includes('megérkezett'));assert(await page.locator('#name').inputValue()===''&&!(await page.locator('.send').isDisabled()),'Sikerállapot vagy visszaállítás');results.push('Csak pozitív fogadói HTTP-válasz után siker, mezők ürítése');
 }finally{await browser.close();fs.writeFileSync(path.join(root,process.argv[2]==='kapcsolat.html'?'ellenorzes/kapcsolat-urlap-ellenorzes.json':process.argv[2]==='tanfolyamok.html'?'ellenorzes/tanfolyamok-urlap-ellenorzes.json':'ellenorzes/urlap-ellenorzes.json'),JSON.stringify({date:'2026-11-14',passed:results.length===5,results,realDeliveryVerified:false,note:'A fogadó válaszait a helyi böngészős teszt szimulálta. Ez nem valódi Netlify- vagy e-mail-kézbesítési próba.'},null,2)+'\n');}
 console.log(results.join('\n'));
})().catch(e=>{console.error(e);process.exitCode=1});
