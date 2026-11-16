// Sűrű mobil/tablet nézetmátrix; a szövegdobozokat külön is vizsgálja.
const fs=require('fs'),path=require('path'),http=require('http'),{createRequire}=require('module');
const r=createRequire('C:/Users/jolci/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json'),{chromium}=r('playwright');
const root=path.resolve(__dirname,'..'),web=path.join(root,'public'),out=path.join(root,'ellenorzes/kepernyokepek');
const pages=['index.html','tanfolyamok.html','muhely.html','kapcsolat.html','adatkezeles.html'];
const views=[[320,568],[360,800],[375,667],[390,844],[412,915],[430,932],[540,720],[568,320],[667,375],[844,390],[932,430],[600,960],[768,1024],[800,1280],[820,1180],[834,1194],[912,1368],[1024,768],[1180,820],[1194,834],[1280,800],[1368,912],[767,1000],[899,1000],[900,1000],[1023,768],[1099,820],[1100,820],[1199,834],[1200,834],[320,568,2],[768,1024,2],[1024,768,2]];
const results=[],assert=(b,m)=>{if(!b)throw Error(m)};
(async()=>{
 const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2','.jpg':'image/jpeg'};
 const server=http.createServer((req,res)=>{const f=path.resolve(web,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(req.method!=='GET'||!f.startsWith(web+path.sep)||!fs.existsSync(f)||!fs.statSync(f).isFile())return res.writeHead(404).end();res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(res)});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 fs.mkdirSync(out,{recursive:true});
 try{
  for(const file of pages){
   const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:2,reducedMotion:'reduce'});
   // A külső térkép tartalma nem befolyásolja az iframe dobozának reszponzív méretét.
   await page.route('https://www.openstreetmap.org/**',route=>route.fulfill({status:200,contentType:'text/html',body:'<html lang="hu"><body style="margin:0">Szentendre térképének helye az elrendezési tesztben</body></html>'}));
   try{
    for(const[width,height,zoom=1]of views){
     const item={file,width,height,textZoom:zoom,passed:false,errors:[]};results.push(item);
     try{
      await page.setViewportSize({width,height});await page.goto(origin+'/'+file);await page.evaluate(()=>document.fonts.ready);
      await page.evaluate(()=>Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(i=>{i.loading='eager';return i.decode()})));
      if(zoom!==1)await page.evaluate(z=>document.documentElement.style.fontSize=z*100+'%',zoom);
      const issues=await page.evaluate(()=>{
       const a=[],visible=e=>!!e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden',label=e=>e.tagName+'.'+String(e.className).slice(0,70)+' '+e.textContent.trim().slice(0,80);
       if(document.documentElement.scrollWidth>innerWidth+1)a.push('Oldalszintű vízszintes túlcsordulás');
       for(const e of document.querySelectorAll('main h1,main h2,main h3,main p,main label,main dt,main dd,main figcaption,main a.button,main .program-nav strong,main .selector-intro-label,footer p,footer h3')){
        if(!visible(e))continue;const b=e.getBoundingClientRect(),style=getComputedStyle(e);
        if(b.width<1)continue;
        if(b.left<-.5||b.right>innerWidth+.5)a.push('Doboz a képernyőn kívül: '+label(e));
        if(e.scrollWidth>e.clientWidth+2&&e.clientWidth>0)a.push('Belső túlcsordulás: '+label(e));
        if(e.scrollHeight>e.clientHeight+2&&['hidden','clip'].includes(style.overflowY))a.push('Levágott szöveg: '+label(e));
        // A normál inline szavak sorai sem lóghatnak ki a szöveg saját hasábjából.
        const range=document.createRange();range.selectNodeContents(e);
        for(const rect of range.getClientRects())if(rect.width>0&&(rect.left<b.left-2||rect.right>b.right+2)){a.push('Szöveg a hasábon kívül: '+label(e));break;}
       }
       for(const e of document.querySelectorAll('main img[src],input:not([type=hidden]):not([name=bot-field]),select,textarea')){
        if(!visible(e))continue;const b=e.getBoundingClientRect();if(b.width<1||b.left<-.5||b.right>innerWidth+.5)a.push('Kép/mező nem fér el: '+label(e));
       }
       return a;
      });
      item.errors.push(...issues);
      const menu=page.locator('.menu');if(await menu.isVisible()){
       await menu.click();assert(await menu.getAttribute('aria-expanded')==='true','Menü nem nyílik');
       const links=await page.locator('.nav-group a').evaluateAll(es=>es.map(e=>{const b=e.getBoundingClientRect();return {text:e.textContent.trim(),left:b.left,right:b.right,top:b.top,bottom:b.bottom,w:innerWidth}}));
       for(const link of links)assert(link.left>=0&&link.right<=width+1,'Menüpont kilóg: '+link.text);
       await page.keyboard.press('Escape');assert(await menu.getAttribute('aria-expanded')==='false','Escape nem zárja a menüt');
      }
      assert(item.errors.length===0,item.errors.join('\n'));
      if(zoom===1&&[[360,800],[768,1024],[1024,768]].some(([w,h])=>w===width&&h===height)){
       await page.evaluate(()=>{document.activeElement.blur();scrollTo(0,0)});await page.screenshot({path:path.join(out,`reszponziv-${file.replace('.html','')}-${width}x${height}.png`),fullPage:true,scale:'css'});
      }
      item.passed=true;
     }catch(e){if(!item.errors.includes(e.message))item.errors.push(e.message);console.log('HIBA',file,width,height,zoom,item.errors.join(' | '));}
    }
   }finally{await page.close()}
   console.log(file+': '+results.filter(x=>x.file===file&&x.passed).length+'/'+views.length+' nézet rendben.');
  }
 }finally{
  await browser.close();await new Promise(resolve=>server.close(resolve));
  fs.writeFileSync(path.join(root,'ellenorzes/reszponziv-ellenorzes-2026-11-16.json'),JSON.stringify({date:'2026-11-16',browser:'Chrome, mobil érintéses emuláció',passed:results.length===pages.length*views.length&&results.every(x=>x.passed),testedViews:results.length,results,note:'A külső térkép helyettesítve; az iframe mérete ellenőrzött. A teszt konkrét méreteket igazol, nem minden létező eszközt.'},null,2)+'\n');
 }
 if(results.some(x=>!x.passed))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
