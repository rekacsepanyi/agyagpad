// A Google-konténer valós kódja fut; minden mérési kérés helyben elfogva.
const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const {chromium,request}=r('playwright'),origin='https://agyagpad-muhely.netlify.app';
const assert=(ok,message)=>{if(!ok)throw Error(message)};
(async()=>{
 const api=await request.newContext();
 const response=await api.get('https://www.googletagmanager.com/gtm.js?id=GTM-W96CCPWJ');
 assert(response.ok(),'A nyilvános Google-konténer nem elérhető');
 const container=await response.body();await api.dispose();
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const context=await browser.newContext(),page=await context.newPage(),results=[],requests=[],collections=[];
 try{
  await page.route('**/*',async route=>{
   const req=route.request(),u=new URL(req.url());
   if(u.origin===origin){
    let name=u.pathname==='/'?'/index.html':u.pathname;
    if(!path.extname(name))name+='.html';
    const file=path.resolve('public','.'+decodeURIComponent(name));
    assert(file.startsWith(path.resolve('public')+path.sep),'Hibás útvonal');
    return route.fulfill({path:file,contentType:{'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.woff2':'font/woff2','.png':'image/png'}[path.extname(file)]});
   }
   if(u.hostname==='www.openstreetmap.org')return route.fulfill({status:200,contentType:'text/html',body:'<p>Térkép nélkül futó mérési teszt.</p>'});
   requests.push({host:u.hostname,path:u.pathname});
   if(u.hostname==='www.googletagmanager.com'&&u.pathname==='/gtm.js')return route.fulfill({status:200,contentType:'text/javascript',body:container});
   if(u.pathname.endsWith('/collect'))collections.push({url:req.url(),body:req.postData()||''});
   return route.fulfill({status:204,body:''});
  });
  for(const file of ['index','tanfolyamok','muhely','kapcsolat','adatkezeles','koszonom']){
   await page.goto(origin+'/'+file+'.html');
   assert(await page.locator('.measurement-choice').isVisible(),'Hiányzó mérési választó: '+file);
   assert(requests.length===0,'Google-kérés a döntés előtt');
   for(const width of [320,390,768,1024,1440]){
    await page.setViewportSize({width,height:900});
    const layout=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,visible:document.querySelector('.measurement-choice').getBoundingClientRect().top<innerHeight}));
    assert(!layout.overflow&&layout.visible,'Választó nem használható: '+file+' '+width);
    if(file==='koszonom'&&[390,1440].includes(width))await page.screenshot({path:'ellenorzes/kepernyokepek/meresi-valaszto-'+width+'.png'});
   }
  }
  results.push('Hat oldal × öt nézet: látható választó, nincs túlcsordulás vagy Google-kérés a döntés előtt');
  await page.locator('[data-measurement="denied"]').click();await page.reload();
  assert(requests.length===0&&!(await page.locator('.measurement-choice').isVisible()),'Az elutasítás nem maradt meg');
  results.push('Elutasítás megmarad, nincs Google-kód vagy mérési kérés');
  await page.evaluate(()=>{localStorage.removeItem('agyagpad-analytics-consent');sessionStorage.setItem('agyagpad-lead-success',JSON.stringify({createdAt:Date.now(),program:'kostolo',source:'/kapcsolat'}))});
  await page.goto(origin+'/koszonom');
  assert(await page.locator('h1').textContent()==='Köszönöm, az üzeneted megérkezett!','Hiányzó sikeres visszajelzés');
  assert(await page.evaluate(()=>(window.dataLayer||[]).filter(e=>e[1]==='generate_lead').length===0),'Konverzió a döntés előtt');
  await page.locator('[data-measurement="granted"]').click();
  await page.waitForFunction(()=>window.google_tag_manager?.['GTM-W96CCPWJ']);
  assert(requests.filter(q=>q.path==='/gtm.js').length===1,'Többször betöltött konténer');
  results.push('Engedélyezés után egy konténerbetöltés, valós publikált Google-kóddal');

  const end=Date.now()+12000;
  while(Date.now()<end&&!collections.some(q=>(q.url+'\n'+q.body).includes('generate_lead')))await page.waitForTimeout(200);
  const leads=collections.filter(q=>(q.url+'\n'+q.body).includes('generate_lead'));
  assert(leads.length===1,'Nem pontosan egy GA4 generate_lead kérés: '+leads.length);
  assert(leads[0].url.includes('G-NVP2Z1B13Y'),'Más GA4-cél');
  results.push('Köszönőoldalon utólagos engedélyezésre is egy generate_lead kérés a G-NVP2Z1B13Y célra; helyben elfogva');
  await page.reload();await page.waitForTimeout(1500);
  assert(collections.filter(q=>(q.url+'\n'+q.body).includes('generate_lead')).length===1,'Frissítés duplázza a konverziót');
  results.push('Frissítéskor nincs új konverziós hálózati kérés');
  await page.locator('.measurement-settings').click();await page.locator('[data-measurement="denied"]').click();await page.waitForLoadState('load');
  const after=collections.length;await page.reload();await page.waitForTimeout(500);
  assert(collections.length===after,'Visszavonás után új mérés');
  assert(!(await context.cookies()).some(c=>c.name==='_ga'||c.name.startsWith('_ga_')),'Visszavonás után GA-süti maradt');
  results.push('Visszavonás után nincs új mérés; GA-sütik törölve');
 }finally{
  await browser.close();
  fs.writeFileSync('ellenorzes/meres-ellenorzes.json',JSON.stringify({date:'2026-11-16',passed:results.length===6,results,container:'GTM-W96CCPWJ',measurementId:'G-NVP2Z1B13Y',analyticsRequestsIntercepted:true,realAnalyticsDeliveryVerified:false},null,2)+'\n');
 }
 console.log(results.join('\n'));
})().catch(e=>{console.error(e);process.exitCode=1});
