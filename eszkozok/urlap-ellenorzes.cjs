const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright');
const root=path.resolve(__dirname,'..'),web=path.join(root,'public'),origin='https://agyagpad-muhely.netlify.app';
const assert=(ok,message)=>{if(!ok)throw Error(message)};
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'}),page=await browser.newPage();
 const results=[];let mode='error',posts=0,lastBody,release;
 const gate=new Promise(resolve=>{release=resolve});
 try{
  await page.route('**/*',async route=>{
   const req=route.request(),url=new URL(req.url());if(url.origin!==origin){if(url.hostname==='www.googletagmanager.com')return route.fulfill({status:200,contentType:'text/javascript',body:'/* A Google-fogadót ez a teszt nem tölti be. */'});if(url.origin==='https://www.openstreetmap.org'&&url.pathname==='/export/embed.html')return route.fulfill({status:200,contentType:'text/html',body:'<p>A térképet a küldési szimuláció nem tölti be.</p>'});throw Error('Váratlan külső kérés');}
   if(req.method()==='POST'){
    posts++;lastBody=new URLSearchParams(req.postData());
    if(mode==='network')return route.abort('failed');
    if(mode==='pending')await gate;
    return route.fulfill({status:mode==='error'?500:200,contentType:'text/html',body:mode==='error'?'Hiba':'<p>Accepted by simulated form receiver</p>'});
   }
   const pathname=url.pathname==='/koszonom'?'/koszonom.html':url.pathname;
   const file=path.resolve(web,'.'+decodeURIComponent(pathname));assert(file.startsWith(web+path.sep),'Hibás tesztútvonal');
   const ext=path.extname(file),type={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2'}[ext]||'application/octet-stream';
   return route.fulfill({status:200,contentType:type,body:fs.readFileSync(file)});
  });
  const target=process.argv[2]||'index.html';
  assert(['index.html','tanfolyamok.html','kapcsolat.html'].includes(target),'Ismeretlen tesztoldal');
  await page.goto(origin+'/'+target);
  await page.locator('[data-measurement="granted"]').click();
  assert(await page.evaluate(()=>window.AGYAGPAD_FORM_CONFIG?.enabled===true&&window.AGYAGPAD_FORM_CONFIG.allowedHosts.includes(location.hostname)),'Az éles domain küldési konfigurációja inaktív');
  await page.locator('#name').fill('Teszt Elek');await page.locator('#email').fill('teszt@example.com');await page.locator('#program').selectOption('kezdo-kurzus');await page.locator('#message').fill('Helyi, szimulált beküldési próba.');
  await page.locator('.send').click();await page.waitForFunction(()=>document.querySelector('.form-status').textContent.includes('nem sikerült'));
  assert(await page.locator('#message').inputValue()==='Helyi, szimulált beküldési próba.','Szerverhibánál elveszett üzenet');results.push('HTTP 500: nincs siker, megmaradó adatok');
  assert(lastBody.get('form-name')==='agyagpad-erdeklodes'&&lastBody.get('email')==='teszt@example.com'&&lastBody.get('program')==='kezdo-kurzus'&&lastBody.has('bot-field'),'Hiányos Netlify payload');results.push('Valódi POST-kérés, form-name, összes mező és honeypot');
  mode='network';await page.locator('.send').click();await page.waitForFunction(()=>document.querySelector('.form-status').textContent.includes('nem sikerült'));assert(await page.locator('#email').inputValue()==='teszt@example.com','Hálózati hibánál elveszett e-mail');results.push('Hálózati hiba: megmaradó adatok, újrapróbálható küldés');
  mode='pending';const before=posts;await page.locator('.send').click();await page.waitForFunction(()=>document.querySelector('form').getAttribute('aria-busy')==='true');assert(await page.locator('.send').isDisabled(),'Folyamatban aktív gomb');assert(!(await page.locator('.form-status').textContent()).includes('megérkezett'),'Idő előtti siker');
  await page.locator('form').evaluate(e=>e.requestSubmit());await page.waitForTimeout(50);assert(posts===before+1,'Dupla küldés');results.push('Folyamatban nincs sikerüzenet, nincs dupla POST');
  release();await page.waitForURL(origin+'/koszonom');await page.waitForFunction(()=>document.querySelector('h1').textContent.includes('megérkezett'));
  const leadEvents=()=>page.evaluate(()=>(window.dataLayer||[]).filter(e=>e[0]==='event'&&e[1]==='generate_lead').map(e=>e[2]));
  const events=await leadEvents();assert(events.length===1&&events[0].program==='kezdo-kurzus'&&events[0].form_name==='agyagpad-erdeklodes'&&Object.keys(events[0]).length===3,'Hibás vagy személyes adatot tartalmazó konverzió');
  results.push('Csak pozitív HTTP-válasz után köszönőoldal és egy generate_lead esemény, személyes adat nélkül');
  await page.reload();assert((await leadEvents()).length===0,'Frissítéskor ismételt konverzió');results.push('Köszönőoldal frissítése nem számít új konverziónak');
  await page.goto(origin+'/koszonom');assert((await leadEvents()).length===0,'Közvetlen megnyitáskor konverzió');assert(!(await page.locator('h1').textContent()).includes('megérkezett'),'Közvetlen megnyitáskor téves átvételi igazolás');results.push('Közvetlen megnyitás nem számít konverziónak és nem állít sikeres küldést');
 }finally{await browser.close();fs.writeFileSync(path.join(root,process.argv[2]==='kapcsolat.html'?'ellenorzes/kapcsolat-urlap-ellenorzes.json':process.argv[2]==='tanfolyamok.html'?'ellenorzes/tanfolyamok-urlap-ellenorzes.json':'ellenorzes/urlap-ellenorzes.json'),JSON.stringify({date:new Date().toISOString().slice(0,10),passed:results.length===7,results,realDeliveryVerified:false,note:'A fogadó válaszait a helyi böngészős teszt szimulálta. Ez nem valódi Netlify- vagy e-mail-kézbesítési próba.'},null,2)+'\n');}
 console.log(results.join('\n'));
})().catch(e=>{console.error(e);process.exitCode=1});
