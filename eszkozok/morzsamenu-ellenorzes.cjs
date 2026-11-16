// Helyi és élő, kizárólag olvasó ellenőrzés. Az űrlapokat nem küldi el és nem állítja át.
const fs=require('fs'),path=require('path'),http=require('http'),crypto=require('crypto'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright');
const root=path.resolve(__dirname,'..'),web=path.join(root,'public'),live=process.argv.includes('--live'),pages=['index.html','tanfolyamok.html','muhely.html','kapcsolat.html'],results=[],screenshots=[];
const hash=s=>crypto.createHash('sha256').update(s).digest('hex'),assert=(b,m)=>{if(!b)throw Error(m)};
const baseline=JSON.parse(fs.readFileSync(path.join(root,'ellenorzes/morzsamenu-kiindulo-2026-11-16.json')));
const normalize=s=>s.replace(/\s+/g,' ').trim();
function protectedSources(){
 for(const f of Object.keys(baseline.pages)){
  const s=fs.readFileSync(path.join(web,f),'utf8'),b=baseline.pages[f];
  assert(hash(s.match(/<head[^>]*>([\s\S]*?)<\/head>/i)[1])===b.head,'SEO head megváltozott: '+f);
  assert(hash(s.match(/<header class="site-header">([\s\S]*?)<\/header>/)[0])===b.header,'Fejléc megváltozott: '+f);
  assert(JSON.stringify([...s.matchAll(/<form\b[^>]*>[\s\S]*?<\/form>/g)].map(m=>hash(m[0])))===JSON.stringify(b.forms),'Űrlap HTML megváltozott: '+f);
  assert(hash(s.slice(s.indexOf('<body')).replace(/<nav class="wrap breadcrumb"[^>]*>[\s\S]*?<\/nav>\r?\n?/g,''))===b.bodyWithoutBreadcrumb,'Más látható tartalom megváltozott: '+f);
 }
 for(const[f,sha]of Object.entries(baseline.scripts))assert(hash(fs.readFileSync(path.join(web,'assets',f)))===sha,'Funkcionális script megváltozott: '+f);
}
(async()=>{
 protectedSources();let server,origin='https://agyagpad-muhely.netlify.app';
 if(!live){const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2','.jpg':'image/jpeg'};server=http.createServer((req,res)=>{if(req.method!=='GET')return res.writeHead(405).end();let f=path.resolve(web,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(f===web)f=path.join(web,'index.html');if(!f.startsWith(web+path.sep)||!fs.existsSync(f)||!fs.statSync(f).isFile())return res.writeHead(404).end();res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'text/plain','Cache-Control':'no-store'});fs.createReadStream(f).pipe(res)});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));origin='http://127.0.0.1:'+server.address().port;}
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'}),context=await browser.newContext({reducedMotion:'reduce'});
 let posts=0;context.on('request',req=>{if(req.method()==='POST')posts++});
 const out=path.join(root,'ellenorzes/kepernyokepek');fs.mkdirSync(out,{recursive:true});
 try{
  for(const file of pages)for(const width of [320,390,768,1024,1440]){
   const page=await context.newPage(),errors=[]; // A méret külön setViewportSize-zal is rögzítve.
   const item={file,width,passed:false,checks:[]};results.push(item);
   page.on('pageerror',e=>errors.push(e.message));page.on('response',res=>{if(res.url().startsWith(origin)&&res.status()>=400&&!res.url().includes('/.netlify/'))errors.push(res.status()+' '+res.url())});
   const reset=async()=>{await page.goto(origin+(file==='index.html'?'/':'/'+file));await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(i=>{i.loading='eager';return i.decode()})))};
   try{
    await page.setViewportSize({width,height:1000});await reset();
    assert(await page.locator('.breadcrumb,[aria-label="Morzsanavigáció"]').count()===0,'Megmaradt morzsamenü');
    assert(!await page.locator('script[type="application/ld+json"]').evaluateAll(es=>es.some(e=>e.textContent.includes('BreadcrumbList'))),'Megmaradt BreadcrumbList');
    assert(await page.locator('h1').count()===1,'H1');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Vízszintes túlcsordulás');
    const first=page.locator('main>section').first(),space=await first.evaluate(e=>({top:e.getBoundingClientRect().top,header:document.querySelector('.site-header').getBoundingClientRect().bottom,padding:parseFloat(getComputedStyle(e).paddingTop),rem:parseFloat(getComputedStyle(document.documentElement).fontSize)}));
    if(file!=='index.html'){assert(Math.abs(space.top-space.header)<1,'Üres sáv maradt a fejléc alatt');assert(Math.abs(space.padding-(width<768?2:3)*space.rem)<1,'Eltérő felső térköz');}
    item.topSpacing=space;item.checks.push('Morzsamenü nélkül, egységes felső térköz; egy H1, nincs túlcsordulás');
    if(file!=='index.html')assert(await page.locator(`.site-nav a[href="${file}"]`).getAttribute('aria-current')==='page','Aktív menüpont');
    const styles=await page.locator('link[rel="stylesheet"]').evaluateAll(es=>es.map(e=>e.href));
    for(const url of styles){const css=await page.evaluate(async u=>await(await fetch(u,{cache:'no-store'})).text(),url);assert(!css.includes('.breadcrumb'),'Megmaradt morzsamenü-CSS');}
    const links=await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')));
    for(const href of links){if(/^(?:https?:|mailto:|tel:)/.test(href))continue;const url=new URL(href,origin+'/'+file),name=decodeURIComponent(url.pathname).replace(/^\//,'')||'index.html',target=path.join(web,name);assert(fs.existsSync(target),'Hiányzó belső cél: '+href);if(url.hash)assert(fs.readFileSync(target,'utf8').includes('id="'+decodeURIComponent(url.hash.slice(1))+'"'),'Hiányzó horgony: '+href);}
    const nav=page.locator('.site-nav a');
    for(let i=0;i<await nav.count();i++){if(await page.locator('.menu').isVisible())await page.locator('.menu').click();const a=nav.nth(i),href=await a.getAttribute('href'),expected=new URL(href,page.url());await page.keyboard.press('Tab');await a.focus();assert(await a.evaluate(e=>getComputedStyle(e).outlineStyle!=='none'),'Hiányzó fókuszjelölés');await a.press('Enter');await page.waitForLoadState('load');assert(new URL(page.url()).pathname===expected.pathname,'Hibás navigációs cél');await reset();}
    item.checks.push('Navigáció, aktív menüpont és billentyűzetes fókusz');
    if(await page.locator('.menu').isVisible()){await page.locator('.menu').click();await page.locator('.header-cta').focus();assert(await page.locator('.header-cta').isVisible(),'Mobil CTA');await page.keyboard.press('Escape');assert(await page.locator('.menu').getAttribute('aria-expanded')==='false','Escape nem zár');}
    if(await page.locator('.menu').isVisible())await page.locator('.menu').click();await page.locator('.header-cta').click();await page.waitForURL('**/kapcsolat.html#erdeklodes');await page.evaluate(()=>document.fonts.ready);assert(await page.locator('#kapcsolatcim').evaluate(e=>e.getBoundingClientRect().top)>=0,'CTA célcíme takarásban');await reset();
    if(file==='index.html'){
     await page.locator('.hero .actions a').first().click();assert(new URL(page.url()).hash==='#tanfolyamok','Hero fő CTA');await page.locator('.hero .actions a').nth(1).click();assert(new URL(page.url()).hash==='#muhely','Hero második CTA');
     await page.locator('.shop-cta').click();await page.waitForURL('**/muhely.html#keramiak');assert(await page.locator('#keramiak').isVisible(),'Kerámia CTA');await reset();
     for(let i=0;i<3;i++){await page.locator('.detail-link').nth(i).click();assert(new URL(page.url()).pathname==='/tanfolyamok.html'&&!!new URL(page.url()).hash,'Kártya CTA');await reset();}
    }
    if(file==='tanfolyamok.html'){
     for(const a of await page.locator('.program-nav a').all()){await a.click();assert(!!new URL(page.url()).hash,'Programválasztó horgony');}
     for(const key of ['kostolo','kezdo-kurzus','csapatepito']){await page.locator(`a[data-program="${key}"]`).click();assert(new URL(page.url()).hash==='#kapcsolat'&&await page.locator('#program').inputValue()===key,'Program CTA');}
    }
    if(file==='muhely.html'){
     const gallery=page.locator('[data-gallery-link]');assert(await gallery.count()===6,'Galéria elemszám');
     for(let i=0;i<6;i++){await gallery.nth(i).click();assert(await page.locator('dialog').evaluate(e=>e.open),'Nagyító nem nyílt');await page.locator('.lightbox-image').evaluate(e=>e.decode());assert(await page.locator('.lightbox-image').getAttribute('alt')!==null,'Nagyított alt');if(i%2)await page.locator('.lightbox-close').click();else await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('dialog').open);assert(await gallery.nth(i).evaluate(e=>e===document.activeElement),'Nagyító fókusz');}
     item.checks.push('Mind a hat fotó nagyítása, bezárógomb, Escape és fókusz-visszaadás');
     for(const a of await page.locator('main a.button').all()){await a.click();await page.waitForURL('**/tanfolyamok.html');await reset();}
    }
    if(file==='kapcsolat.html'){
     const details=page.locator('.faq-list details');assert(await details.count()===4,'GYIK elemszám');
     for(let i=0;i<4;i++){await details.nth(i).locator('summary').focus();await page.keyboard.press('Enter');await page.waitForFunction(e=>e.open,await details.nth(i).elementHandle());assert(await details.nth(i).locator('p').isVisible(),'GYIK válasz');await page.keyboard.press('Space');await page.waitForFunction(e=>!e.open,await details.nth(i).elementHandle());}
     item.checks.push('Mind a négy GYIK Enter/szóköz kezelése');
    }
    item.checks.push('Belső linkek, horgonyok és CTA-k; űrlapküldés nélkül');
    assert(errors.length===0,'Erőforrás-/JS-hiba: '+errors.join(', '));
    if([390,1440].includes(width)){await reset();await page.evaluate(()=>{document.activeElement.blur();scrollTo(0,0)});const name=`morzsamenu-${live?'eles':'helyi'}-${file.replace('.html','')}-${width}.png`;await page.screenshot({path:path.join(out,name),fullPage:true,scale:'css'});screenshots.push(name);}
    item.passed=true;console.log(file,width,'OK');
   }catch(e){item.error=e.message;throw e}finally{await page.close()}
  }
  assert(posts===0,'Váratlan POST');protectedSources();
 }finally{
  await browser.close();if(server)await new Promise(resolve=>server.close(resolve));
  fs.writeFileSync(path.join(root,live?'ellenorzes/kepernyokepek/morzsamenu-eles-2026-11-16.json':'ellenorzes/morzsamenu-helyi-2026-11-16.json'),JSON.stringify({date:'2026-11-16',origin,passed:results.length===20&&results.every(x=>x.passed)&&posts===0,formConfigurationUnchanged:true,formScriptsUnchanged:true,formSubmissions:posts,otherSeoAndVisibleContentUnchanged:true,results,screenshots},null,2)+'\n');
 }
 console.log('20 nézet sikeres; űrlap, fejléc és más SEO változatlan.');
})().catch(e=>{console.error(e);process.exitCode=1});
