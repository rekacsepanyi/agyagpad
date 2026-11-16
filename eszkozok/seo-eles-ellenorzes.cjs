// Csak olvas: az élő oldal HTML/SEO, képek és három nézet ellenőrzése, űrlapküldés nélkül.
const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright');
const root=path.resolve(__dirname,'..'),site=JSON.parse(fs.readFileSync(path.join(root,'tervezes/seo-konfiguracio.json'))).siteUrl;
const files=['index.html','tanfolyamok.html','muhely.html','kapcsolat.html','adatkezeles.html'],results=[],resources=[];
const assert=(b,m)=>{if(!b)throw Error(m)};
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'}),page=await browser.newPage();let posts=0;page.on('request',r=>{if(r.method()==='POST')posts++});
 const titles=new Set(),descriptions=new Set();
 try{
  for(const file of files){
   const url=site+(file==='index.html'?'/':'/'+file);let meta;
   for(const width of [390,768,1440]){
    await page.setViewportSize({width,height:1000});const response=await page.goto(url);assert(response.status()===200,'HTTP '+file);await page.evaluate(()=>document.fonts.ready);
    await page.evaluate(()=>Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(i=>{i.loading='eager';return i.decode()})));
    meta=await page.evaluate(()=>{
     const get=s=>document.querySelector(s)?.getAttribute('content'),normalize=s=>s.replace(/\s+/g,' ').trim();
     return {title:document.title,description:get('meta[name="description"]'),canonical:document.querySelector('link[rel="canonical"]')?.href,og:Object.fromEntries(['title','description','url','image','type','locale'].map(k=>[k,get(`meta[property="og:${k}"]`)])),twitter:get('meta[name="twitter:card"]'),lang:document.documentElement.lang,h1:document.querySelectorAll('h1').length,headings:[...document.querySelectorAll('main h1,main h2,main h3,main h4')].map(e=>({level:+e.tagName.slice(1),text:normalize(e.textContent)})),images:[...document.images].filter(i=>i.hasAttribute('src')).map(i=>({src:i.currentSrc||i.src,alt:i.getAttribute('alt'),width:i.naturalWidth,brand:!!i.closest('.brand')})),graph:[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(e=>JSON.parse(e.textContent)['@graph']||[]),faq:[...document.querySelectorAll('.faq-list details')].map(e=>({question:normalize(e.querySelector('summary>span').textContent),answer:normalize(e.querySelector('p').textContent)})),overflow:document.documentElement.scrollWidth>innerWidth,robots:get('meta[name="robots"]')};
    });
    assert(meta.canonical===url&&meta.og.url===url,'Canonical/og:url: '+file);assert(meta.og.title===meta.title&&meta.og.description===meta.description,'OG-szövegek: '+file);assert(meta.og.image.startsWith(site+'/images/og/')&&meta.og.type==='website'&&meta.og.locale==='hu_HU'&&meta.twitter==='summary_large_image','OG/Twitter: '+file);
    assert(meta.lang==='hu'&&meta.h1===1&&!meta.overflow,'Nyelv/H1/túlcsordulás: '+file+' '+width);assert(!/noindex/.test(meta.robots||''),'Váratlan noindex');
    for(let i=1;i<meta.headings.length;i++)assert(meta.headings[i].level<=meta.headings[i-1].level+1,'Címsorszint ugrás: '+file);
    for(const img of meta.images)assert(img.width>0&&img.alt!==null&&(img.brand||img.alt.length>0),'Kép/alt: '+img.src);
    assert(meta.graph.length>0,'Hiányzó JSON-LD');
    for(const b of meta.graph.filter(x=>x['@type']==='LocalBusiness'))assert(b.url===site+'/'&&b.address.streetAddress==='Agyagliget köz 4.'&&b.address.addressLocality==='Szentendre'&&b.address.postalCode==='2000'&&b.openingHoursSpecification[0].opens==='10:00'&&b.openingHoursSpecification[0].closes==='18:00'&&b.description.includes('Fiktív'),'Hibás vállalkozásadat');
    if(meta.faq.length){const faq=meta.graph.find(x=>x['@type']==='FAQPage');assert(faq?.mainEntity.length===4,'FAQ schema');meta.faq.forEach((q,i)=>assert(q.question===faq.mainEntity[i].name&&q.answer===faq.mainEntity[i].acceptedAnswer.text,'FAQ-tartalom eltérés'));}
    if(width===390){assert(!titles.has(meta.title)&&!descriptions.has(meta.description),'Duplikált metaadat');titles.add(meta.title);descriptions.add(meta.description);}
    results.push({file,url,width,status:response.status(),passed:true});console.log(file,width,'OK');
   }
   const image=await page.evaluate(async url=>{const res=await fetch(url);const im=await createImageBitmap(await res.blob());return {status:res.status,width:im.width,height:im.height}},meta.og.image);assert(image.status===200&&image.width===1200&&image.height===630,'Megosztási kép');resources.push({url:meta.og.image,...image});
  }
  const technical=await page.evaluate(async origin=>{const urls=['sitemap.xml','robots.txt'],out={};for(const f of urls){const r=await fetch(origin+'/'+f,{cache:'no-store'});out[f]={status:r.status,text:await r.text()}}return out},site);
  const xml=technical['sitemap.xml'];assert(xml.status===200,'Sitemap HTTP');const urls=[...xml.text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert(urls.length===5&&files.every(f=>urls.includes(site+(f==='index.html'?'/':'/'+f))),'Sitemap célok');assert(technical['robots.txt'].status===200&&technical['robots.txt'].text.includes('Sitemap: '+site+'/sitemap.xml'),'Robots sitemap');assert(!/Disallow:\s*\/\s*$/m.test(technical['robots.txt'].text),'Robots tiltja az oldalt');assert(posts===0,'Váratlan POST');resources.push(...Object.entries(technical).map(([file,r])=>({url:site+'/'+file,status:r.status})));
 }finally{
  await browser.close();fs.writeFileSync(path.join(root,'ellenorzes/seo-eles-ellenorzes-2026-11-16.json'),JSON.stringify({date:'2026-11-16',siteUrl:site,passed:results.length===15&&resources.length===7&&posts===0,results,resources,realFormSubmitted:false,note:'A cím fiktív bemutatóadat, a LocalBusiness leírása ezt jelöli. Search Console-hitelesítést és keresési helyezést ez a teszt nem igazol.'},null,2)+'\n');
 }
 console.log('15 élő nézet és 7 megosztási/technikai erőforrás sikeresen ellenőrizve.');
})().catch(e=>{console.error(e);process.exitCode=1});
