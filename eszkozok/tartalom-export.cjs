const fs=require('fs'),path=require('path'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright');
const root=path.resolve(__dirname,'..');
const files=['koncepcio-1-udvari-muhely.html','tanfolyamok.html','muhely.html','kapcsolat.html','adatkezeles.html'];
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'}),pages=[];let main;
 try{
  for(const file of files){
   const page=await browser.newPage({viewport:{width:1440,height:1000}});await page.goto('http://127.0.0.1:4173/'+file);await page.evaluate(()=>document.fonts.ready);
   const content=await page.evaluate(()=>{
    const text=e=>e.textContent.replace(/\s+/g,' ').trim(),links=s=>[...document.querySelectorAll(s)].map(e=>({text:text(e),href:e.getAttribute('href')}));
    return {title:document.title,description:document.querySelector('meta[name="description"]').content,headings:[...document.querySelectorAll('main h1,main h2,main h3')].map(e=>({level:e.tagName,id:e.id,text:text(e)})),navigation:links('.site-header a'),footer:links('.footer-links a'),sections:[...document.querySelectorAll('main>section')].map(e=>({id:e.id,text:text(e)})),forms:[...document.querySelectorAll('[data-contact-form]')].map(e=>({name:e.getAttribute('name'),fields:[...e.querySelectorAll('input,select,textarea')].map(f=>({name:f.name,type:f.type,required:f.required,options:f.tagName==='SELECT'?[...f.options].map(o=>({value:o.value,text:o.textContent})):undefined}))}))};
   });pages.push({file,...content});
   if(file===files[0])main=await page.evaluate(()=>({heroHeading:document.querySelector('h1').textContent,programSummaries:[...document.querySelectorAll('.course-data p')].map(e=>e.textContent),commonNotes:[...document.querySelectorAll('.notes-grid li')].map(e=>e.textContent.trim()),biography:{paragraphs:[...document.querySelectorAll('.story-text p')].map(e=>e.textContent.trim()),stats:[...document.querySelectorAll('.studio-stats>div')].map(e=>[e.querySelector('dd').textContent,e.querySelector('dt').textContent])}}));
   const prefix={ 'koncepcio-1-udvari-muhely.html':'fooldal','tanfolyamok.html':'tanfolyamok','muhely.html':'muhely','adatkezeles.html':'adatkezeles'}[file];
   if(prefix)for(const width of [768,1024]){
    await page.setViewportSize({width,height:1000});await page.evaluate(()=>Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(i=>{i.loading='eager';return i.decode()})));await page.evaluate(()=>{document.activeElement.blur();scrollTo(0,0)});
    await page.screenshot({path:path.join(root,`ellenorzes/kepernyokepek/${prefix}-${width}-teljes.png`),fullPage:true});
    fs.copyFileSync(path.join(root,`ellenorzes/kepernyokepek/${prefix}-${width}-teljes.png`),path.join(root,`beadas/jelenlegi-oldal/${prefix}-tablet-${width===768?'allo':'fekvo'}.png`));
   }
   await page.close();
  }
 }finally{await browser.close()}
 fs.writeFileSync(path.join(root,'tervezes/tartalom-2026-11-14.json'),JSON.stringify({date:'2026-11-14',fictionalCharacter:true,...main,formStatus:'Netlify Forms előkészítve; fogadó inaktív, éles kézbesítés nem igazolt.',pages},null,2)+'\n');
 console.log('Öt oldal tényleges tartalma és a tablet-előnézetek frissítve.');
})().catch(e=>{console.error(e);process.exitCode=1});
