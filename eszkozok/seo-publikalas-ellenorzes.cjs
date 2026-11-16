const fs=require('fs'),path=require('path'),http=require('http'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright'),sharp=r('sharp');
const root=path.resolve(__dirname,'..'),web=path.join(root,'public'),out=path.join(root,'ellenorzes/kepernyokepek');
const pages=['index.html','tanfolyamok.html','muhely.html','kapcsolat.html','adatkezeles.html'],results=[],issues=[],pending=[];
const assert=(ok,message)=>{if(!ok)throw Error(message)};
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain'};
(async()=>{
 const server=http.createServer((req,res)=>{if(req.method!=='GET')return res.writeHead(405).end();let file;try{file=path.resolve(web,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(file===web)file=path.join(web,'index.html')}catch{return res.writeHead(400).end()};if(!file.startsWith(web+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile())return res.writeHead(404).end();res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res)});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 fs.mkdirSync(out,{recursive:true});const titles=new Set(),descriptions=new Set(),state=JSON.parse(fs.readFileSync(path.join(root,'ellenorzes/seo-allapot.json')));
 try{
  for(const file of pages){
   for(const [width,zoom]of [[320,1],[390,1],[768,1],[1024,1],[1440,1],[390,2],[1440,2]]){
    const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}),errors=[];let posts=0;
    page.on('pageerror',e=>errors.push(e.message));page.on('response',res=>{if(res.url().startsWith(origin)&&res.status()>=400)errors.push(res.status()+' '+res.url())});page.on('request',req=>{if(req.method()==='POST')posts++});
    try{
     await page.goto(origin+'/'+file);await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(i=>{i.loading='eager';return i.decode()})));
     if(zoom===2)await page.evaluate(()=>document.documentElement.style.fontSize='200%');
     const data=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,lang:document.documentElement.lang,title:document.title,desc:document.querySelector('meta[name="description"]').content,missingAlt:[...document.images].filter(i=>!i.hasAttribute('alt')).length,missingSize:[...document.images].filter(i=>i.hasAttribute('src')&&(!i.width||!i.height)).length,badImages:[...document.images].filter(i=>i.hasAttribute('src')&&!i.naturalWidth).length,photoFormats:[...document.querySelectorAll('main img[src]')].every(i=>new URL(i.currentSrc).pathname.endsWith('.webp')),headings:[...document.querySelectorAll('main h1,main h2,main h3,main h4')].map(e=>({level:+e.tagName.slice(1),text:e.textContent.trim()}))}));
     assert(data.scroll<=data.width,'Vízszintes túlcsordulás');assert(data.h1===1&&data.lang==='hu','H1 vagy nyelv');assert(!data.missingAlt&&!data.badImages&&!data.missingSize&&data.photoFormats,'Képformátum, alt vagy képméret');
     for(let i=1;i<data.headings.length;i++)assert(data.headings[i].level<=data.headings[i-1].level+1,'Címsorszint átugrása');
     assert(await page.locator('meta[property="og:title"]').count()===1,'OG title');assert(await page.locator('meta[property="og:locale"]').getAttribute('content')==='hu_HU','OG locale');assert(await page.locator('meta[name="twitter:card"]').getAttribute('content')==='summary_large_image','Twitter card');
     if(state.siteUrl){const expected=state.siteUrl+(file==='index.html'?'/':'/'+file);assert(await page.locator('link[rel="canonical"]').getAttribute('href')===expected,'Végleges canonical');assert(await page.locator('meta[property="og:url"]').getAttribute('content')===expected,'Végleges og:url');}
     const image=await page.locator('meta[property="og:image"]').getAttribute('content'),imgFile=path.join(web,(state.siteUrl?new URL(image).pathname:image).replace(/^\//,'')),meta=await sharp(imgFile).metadata();assert(meta.width===1200&&meta.height===630,'Megosztási kép');
     const graph=await page.locator('script[type="application/ld+json"]').evaluate(e=>JSON.parse(e.textContent)['@graph']);assert(graph.length,'JSON-LD');
     for(const b of graph.filter(x=>x['@type']==='LocalBusiness'))assert(b.address.streetAddress==='Agyagliget köz 4.'&&b.openingHoursSpecification[0].opens==='10:00'&&b.description.includes('Fiktív'),'Helyi vállalkozás adatai');
     assert(await page.locator('.header-cta').getAttribute('href')==='kapcsolat.html#erdeklodes','Közös CTA');
     for(const href of await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')))){
      if(/^(?:https?:|mailto:|tel:)/.test(href))continue;const url=new URL(href,origin+'/'+file),target=path.join(web,decodeURIComponent(url.pathname).replace(/^\//,''));assert(fs.existsSync(target),'Hiányzó link: '+href);if(url.hash){const html=fs.readFileSync(target,'utf8');assert(html.includes('id="'+decodeURIComponent(url.hash.slice(1))+'"'),'Hiányzó horgony: '+href)}
     }
     if(width<=768){await page.locator('.menu').click();await page.locator('.header-cta').focus();assert(await page.locator('.header-cta').isVisible(),'Mobil CTA');await page.keyboard.press('Escape');}
     if(file==='tanfolyamok.html')for(const key of ['kostolo','kezdo-kurzus','csapatepito']){await page.locator('a[data-program="'+key+'"]').click();assert(await page.locator('#program').inputValue()===key,'Programválasztás');}
     if(file==='muhely.html'){
      const links=page.locator('.ceramics-gallery a');assert(await links.count()===6,'Galéria mérete');
      await links.first().click();assert(await page.locator('dialog').evaluate(e=>e.open),'Nagyító');await page.keyboard.press('Escape');assert(await links.first().evaluate(e=>e===document.activeElement),'Fókusz visszaadása');
     }
     if(file==='kapcsolat.html'){
      const qa=graph.find(x=>x['@type']==='FAQPage').mainEntity;assert(qa.length===4,'FAQ schema');
      const details=page.locator('.faq-list details');for(let i=0;i<4;i++){assert(qa[i].name===await details.nth(i).locator('summary>span:first-child').innerText(),'FAQ kérdés egyezése');assert(qa[i].acceptedAnswer.text===(await details.nth(i).locator('p').textContent()).replace(/\s+/g,' ').trim(),'FAQ válasz egyezése')}
      const sum=details.first().locator('summary');await sum.focus();await page.keyboard.press('Enter');await page.waitForFunction(()=>document.querySelector('.faq-list details').open);await page.keyboard.press('Space');await page.waitForFunction(()=>!document.querySelector('.faq-list details').open);
      await page.goto(origin+'/kapcsolat.html#erdeklodes');await page.evaluate(()=>document.fonts.ready);assert(await page.locator('#kapcsolatcim').evaluate(e=>e.getBoundingClientRect().top)>=0,'Cím láthatósága');
     }
     if(file!=='muhely.html'&&file!=='adatkezeles.html'){
      await page.locator('.send').click();assert(await page.locator('#name-error').innerText(),'Magyar kötelező mezőhiba');await page.locator('#name').fill('Teszt');await page.locator('#email').fill('hibas');await page.locator('.send').click();assert(await page.locator('#email-error').innerText(),'E-mail ellenőrzése');
     }
     assert(!errors.length,'Böngészőhibák: '+errors.join(', '));assert(posts===0,'Éles űrlapteszt helyett váratlan POST');
     if(zoom===1){
      if(width===1440){assert(!titles.has(data.title)&&!descriptions.has(data.desc),'Duplikált metaadat');titles.add(data.title);descriptions.add(data.desc)}
      // Tiszta képernyőképek az aktuális fájlokból; sem mezőhiba, sem fókuszkeret.
      if([390,768,1024,1440].includes(width)){
       await page.reload();await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(i=>{i.loading='eager';return i.decode()})));
       if(file==='kapcsolat.html'){await page.locator('.contact-map').scrollIntoViewIfNeeded();await page.frameLocator('iframe').locator('canvas').waitFor({timeout:20000});await page.waitForTimeout(1500)}else await page.evaluate(()=>scrollTo(0,0));
       await page.screenshot({path:path.join(out,'seo-'+file.replace('.html','')+'-'+width+'.png'),fullPage:true});
       if(file==='index.html'&&width===1440)for(const[selector,name]of [['#kezdo','hero'],['.story','bemutatkozas'],['#muhely','muhely-szakasz'],['.shop','muhelybolt'],['.notes','tudnivalok']])await page.locator(selector).screenshot({path:path.join(out,'seo-index-1440-'+name+'.png')});
       if(file==='muhely.html'&&[390,1440].includes(width))await page.locator('.ceramics-gallery').screenshot({path:path.join(out,'seo-muhely-'+width+'-galeria.png')});
      }
     }
     results.push({file,width,textZoom:zoom,passed:true});console.log(file,width,zoom,'OK');
    }catch(e){issues.push({file,width,textZoom:zoom,error:e.message});throw e}finally{await page.close()}
   }
  }
  const listing=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?listing(path.join(dir,e.name)):[path.relative(web,path.join(dir,e.name)).replaceAll('\\','/')]);
  const files=listing(web);assert(!files.some(f=>/\.(md|cjs|json|docx|psd|fig)$|(?:archivum|fotók|tervezes|beadas|ellenorzes|koncepcio)/i.test(f)),'Munkaanyag a kiadásban');
  const sitemap=fs.readFileSync(path.join(web,'sitemap.xml'),'utf8'),robots=fs.readFileSync(path.join(web,'robots.txt'),'utf8');
  if(state.siteUrl){assert((sitemap.match(/<loc>/g)||[]).length===5,'Sitemap URL-szám');assert(robots.includes('Sitemap: '+state.siteUrl+'/sitemap.xml'),'Robots sitemap');}else pending.push('Végleges HTTPS webcím: canonical, og:url, abszolút megosztási kép-URL, öt sitemap URL és robots Sitemap sor. Netlify Git-build automatikusan véglegesíti az URL környezeti változóból.');
  fs.writeFileSync(path.join(root,'ellenorzes/publikalasi-fajllista.json'),JSON.stringify(files.sort(),null,2)+'\n');
 }finally{
  await browser.close();await new Promise(resolve=>server.close(resolve));
  fs.writeFileSync(path.join(root,'ellenorzes/seo-publikalas-ellenorzes.json'),JSON.stringify({date:'2026-11-16',passed:!issues.length&&results.length===35,domainPending:!state.siteUrl,results,issues,pending,realDeliveryVerified:false},null,2)+'\n');
 }
 console.log('35 nézet sikeres. '+pending.join(' '));
})().catch(e=>{console.error(e);process.exitCode=1});
