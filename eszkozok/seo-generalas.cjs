// Függőség nélküli, ismételhető SEO-generálás; Netlify buildben is fut.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),customOutput=process.argv.find(a=>a.startsWith('--output='))?.slice(9),web=path.resolve(root,customOutput||'public');
if(!web.startsWith(root+path.sep))throw Error('A kimenetnek a projekt mappáján belül kell maradnia.');
const config=JSON.parse(fs.readFileSync(path.join(root,'tervezes/seo-konfiguracio.json'),'utf8'));
const raw=process.argv.find(a=>a.startsWith('--domain='))?.slice(9)||config.siteUrl||process.env.URL;
let origin='';if(raw){const u=new URL(raw);if(u.protocol!=='https:'||u.pathname!=='/'||u.search||u.hash)throw Error('HTTPS webhelygyökér szükséges, útvonal és paraméter nélkül.');origin=u.origin;}
const records=[
 ['index.html','Korongozás Szentendrén, kezdőbarát élmény | Agyagpad','Próbáld ki a korongozást Szentendrén, kis csoportban, személyes figyelemmel. Ismerd meg az Agyagpad programjait és kézzel készült kerámiáit, és érdeklődj bátran!','fooldal'],
 ['tanfolyamok.html','Korongozó tanfolyamok és alkotóprogramok | Agyagpad','Korongozó kóstoló, négyhetes kezdő kurzus és céges csapatépítő Szentendrén. Nézd meg az időtartamokat, árakat és tudnivalókat, majd érdeklődj a szabad helyekről!','tanfolyamok'],
 ['muhely.html','Kerámiaműhely és kézzel készült kerámiák | Agyagpad','Ismerd meg Fehér Dóra szentendrei kerámiaműhelyét és alkotásait. Bögrék, tálak, tányérok és vázák képgalériája vár: nézz körül, és fedezd fel a korongozást!','muhely'],
 ['kapcsolat.html','Kapcsolat és érdeklődés, szentendrei műhely | Agyagpad','Kérdezz a korongozó programokról, céges alkotásról vagy a kerámiákról. Műhelyadatok, nyitvatartás és gyakori kérdések egy helyen. Írd meg, mi érdekel az Agyagpadban!','kapcsolat'],
 ['adatkezeles.html','Adatkezelés és az érdeklődési űrlap adatai | Agyagpad','Olvasd el az Agyagpad bemutatóprojekt adatkezelési tájékoztatóját: érdeklődési űrlap, külső térkép és az üzenetküldés állapota. Tájékozódj a beküldés előtt!','muhely']
];
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const text=s=>s.replace(/<[^>]*>/g,'').replaceAll('&amp;','&').replaceAll('&quot;','"').replace(/\s+/g,' ').trim();
const business={
 '@type':'LocalBusiness','@id':origin?origin+'/#muhely':'#muhely',
 name:'Agyagpad Kerámiaműhely',
 description:'Fiktív vállalkozást bemutató webdesign-vizsgamunka. Kerámiaműhely és kezdőbarát korongozó programok Szentendrén; a cím kitalált bemutatóadat.',
 address:{'@type':'PostalAddress',streetAddress:'Agyagliget köz 4.',addressLocality:'Szentendre',postalCode:'2000',addressCountry:'HU'},
 openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Thursday','Friday','Saturday','Sunday'],opens:'10:00',closes:'18:00'}],
 ...(origin?{url:origin+'/',image:origin+'/images/og/muhely.jpg',logo:origin+'/images/logo/Agyagpad-logo-transparent.svg'}:{})
};
for(const[file,title,description,image]of records){
 const target=path.join(web,file);let html=fs.readFileSync(target,'utf8');
 html=html.replace(/\n?<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->\n?/g,'\n').replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi,'').replace(/<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/gi,'').replace(/<link\b[^>]*rel="canonical"[^>]*>/gi,'');
 // Önálló információs szakasz címe a Tanfolyamok oldalon H2, megjelenése változatlan.
 if(file==='tanfolyamok.html')html=html.replace('<h3 id="tudnivalok">Amit érdemes tudnod</h3>','<h2 id="tudnivalok">Amit érdemes tudnod</h2>');
 const url=origin+(file==='index.html'?'/':'/'+file),ogImage=(origin||'')+'/images/og/'+image+'.jpg';
 const graph=[];
 if(file==='index.html'||file==='muhely.html'||file==='kapcsolat.html')graph.push({...business});
 if(file==='muhely.html')graph.push({'@type':'Person',name:'Fehér Dóra',description:'Az Agyagpad fiktív vizsgaprojekt alapítójának karaktere.',jobTitle:'Népi iparművész',worksFor:{'@id':business['@id']}});
 if(file==='kapcsolat.html'){
  const faq=[...html.matchAll(/<details>\s*<summary[^>]*>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>\s*<\/details>/g)].map(m=>({'@type':'Question',name:text(m[1]).replace(/[+−]\s*$/,''),acceptedAnswer:{'@type':'Answer',text:text(m[2])}}));
  if(faq.length!==4)throw Error('A látható négy GYIK-válasz nem található.');
  graph.push({'@type':'FAQPage',...(origin?{'@id':url+'#gyik'}:{}),inLanguage:'hu-HU',mainEntity:faq});
 }
 if(!graph.length)graph.push({'@type':'WebPage',name:title,description,inLanguage:'hu-HU',...(origin?{url}:{})});
 const schema={'@context':'https://schema.org','@graph':graph};
 const tags=['<!-- SEO:START -->',`<title>${esc(title)}</title>`,`<meta name="description" content="${esc(description)}">`,
 '<meta name="robots" content="index,follow">',
 ...(origin?[`<link rel="canonical" href="${esc(url)}">`,`<meta property="og:url" content="${esc(url)}">`]:['<!-- TODO: végleges HTTPS webcím után a canonical és og:url generálása: node eszkozok/seo-generalas.cjs --domain=https://SAJAT-WEBCIM -->']),
 `<meta property="og:title" content="${esc(title)}">`,`<meta property="og:description" content="${esc(description)}">`,
 `<meta property="og:type" content="website">`,`<meta property="og:locale" content="hu_HU">`,`<meta property="og:site_name" content="Agyagpad Kerámiaműhely">`,
 `<meta property="og:image" content="${esc(ogImage)}">`,`<meta property="og:image:type" content="image/jpeg">`,`<meta property="og:image:width" content="1200">`,`<meta property="og:image:height" content="630">`,`<meta property="og:image:alt" content="${image==='fooldal'?'Agyagot formáló kezek a fazekaskorongon.':image==='tanfolyamok'?'Korongozás közben formálódó agyagedény.':image==='kapcsolat'?'Mázazott kerámiatálca és tányér.':'Türkiz és földszínű kerámiatálak, tányérok.'}">`,
 '<meta name="twitter:card" content="summary_large_image">',`<meta name="twitter:title" content="${esc(title)}">`,`<meta name="twitter:description" content="${esc(description)}">`,`<meta name="twitter:image" content="${esc(ogImage)}">`,
 `<script type="application/ld+json">\n${JSON.stringify(schema,null,2).replaceAll('<','\\u003c')}\n</script>`,'<!-- SEO:END -->'];
 html=html.replace('</head>',tags.join('\n')+'\n</head>').replace(/^[ \t]+$/gm,'');fs.writeFileSync(target,html.trimEnd()+'\n');
}
// Domain nélkül nem találunk ki keresőknek elküldött URL-t: érvényes, üres XML + egyértelmű TODO.
const urls=origin?records.map(([f])=>`  <url><loc>${esc(origin+(f==='index.html'?'/':'/'+f))}</loc></url>`).join('\n'):'  <!-- TODO: a webcím megadása után öt abszolút HTTPS URL generálódik. -->';
fs.writeFileSync(path.join(web,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls+'\n</urlset>\n');
fs.writeFileSync(path.join(web,'robots.txt'),'User-agent: *\nAllow: /\n\n'+(origin?'Sitemap: '+origin+'/sitemap.xml':'# TODO: végleges webcím után Sitemap: HTTPS-WEBCIM/sitemap.xml')+'\n');
fs.writeFileSync(customOutput?path.join(web,'seo-allapot.json'):path.join(root,'ellenorzes/seo-allapot.json'),JSON.stringify({date:'2026-11-14',siteUrl:origin||null,domainPending:!origin,generatedPages:records.map(([file,title,description])=>({file,title,titleLength:title.length,description,descriptionLength:description.length})),fictionalBusiness:true},null,2)+'\n');
console.log('Öt oldal SEO-elemei frissítve. '+(origin?'Végleges webcím: '+origin:'A canonical, og:url, abszolút kép-URL és a sitemap URL-jei a Netlify-címre várnak.'));
