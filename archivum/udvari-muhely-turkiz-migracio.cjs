const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const file=path.join(root,'koncepcio-1-udvari-muhely.html');
let html=fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n');
const icon='<svg class="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const programs=[
 {id:'korongozo-kostolo',value:'kostolo',name:'Korongozó kóstoló',tag:'Első találkozás az agyaggal',description:'Próbáld ki, hogyan formálódik az agyag a kezed alatt. Kezdőként is csatlakozhatsz.',count:'1 alkalom',duration:'3 óra',schedule:'Szombat 14:00–17:00',price:'18 500 Ft / fő',image:'korongozo-kostolo',width:6000,height:4000,alt:'Agyagot formázó kezek a fazekaskorongon.'},
 {id:'kezdo-kurzus',value:'kezdo-kurzus',name:'Négyhetes kezdő kurzus',tag:'Alapok négy alkalom alatt',description:'Adj időt az alkotásnak: négy alkalmon át ismerkedhetsz a korongozás alapjaival.',count:'4 alkalom',duration:'4 × 2,5 óra',schedule:'Négy egymást követő szerdán, 17:00–19:30',price:'65 000 Ft / fő',priceDetail:'a teljes kurzusra',image:'4-hetes-kezdo-kurzus',width:7999,height:5340,alt:'A korongon formált edény alját szerszámmal igazítják.'},
 {id:'ceges-csapatepito',value:'csapatepito',name:'Céges csapatépítő',tag:'Közös élmény',description:'Közös kikapcsolódás a korong mellett, ahol a csapat együtt próbálhatja ki az agyagformálást.',count:'Egyeztetett időpont',duration:'Egyedi időtartam',schedule:'Egyedi egyeztetés szerinti időpont és időtartam',price:'Egyedi ajánlat',image:'ceges-csapatepito',width:3624,height:5436,alt:'Agyagedény a korongon, körülötte a műhely szerszámai.'}
];
function image(p,cls='photo course-photo',sizes='(min-width: 1024px) 380px, (min-width: 768px) 45vw, calc(100vw - 40px)'){
 return `<img class="${cls}" src="images/webp/${p.image}-800.webp" srcset="${[480,800,1200,1600].map(w=>`images/webp/${p.image}-${w}.webp ${w}w`).join(', ')}" sizes="${sizes}" width="${p.width}" height="${p.height}" alt="${p.alt}" loading="lazy" decoding="async">`;
}
const cards=programs.map(p=>`<article class="course">${image(p)}<div class="course-body"><p class="course-tag">${p.tag}</p><h3>${p.name}</h3><p class="course-description">${p.description}</p><div class="course-data"><p>${p.count} · ${p.duration}</p></div><div class="course-bottom"><p class="price">${p.price}${p.priceDetail?`<span class="price-detail">${p.priceDetail}</span>`:''}</p><a class="detail-link" href="tanfolyamok.html#${p.id}">Részletek és árak <span aria-hidden="true">→</span></a></div></div></article>`).join('\n');
const a=html.indexOf('        <div class="cards">'),b=html.indexOf('        <aside class="notes"',a);
if(a<0||b<0)throw Error('Programblokk nem található.');
html=html.slice(0,a)+'        <div class="cards">\n'+cards+'\n        </div>\n'+html.slice(b);
html=html.replace('<a class="button" href="#kapcsolat" data-program-reset>Érdeklődöm a tanfolyamról</a>','<a class="button" href="#tanfolyamok">Megnézem a tanfolyamokat</a>');
html=html.replace('<a class="button outline" href="#muhely">Megnézem a műhelyt</a>','<a class="button outline" href="#muhely">Megismerem a műhelyt</a>');
html=html.replace(/hero-(480|800|1200|1600)\.webp/g,'reszletfoto2-$1.webp');
html=html.replace('width="3193" height="4784" loading="eager"','width="4160" height="6240" loading="eager"');
html=html.replace('alt="Szalmakalapos keramikus a fazekaskorong mellett az udvaron."','alt="Agyagedényt formáló kezek a fazekaskorongon, munka közben."');
html=html.replace('Fehér Dóra, az Agyagpad alapítója</figcaption>','Az alkotás az első mozdulattal kezdődik.</figcaption>');
const notes=[
 ['Kezdőként is jöhetsz.','Nem szükséges előképzettség.'],
 ['Az alapanyag benne van.','Az ár tartalmazza az agyagot, a mázat és a két égetést.'],
 ['Kis csoportban alkotunk.','Legfeljebb hat fővel dolgozunk.'],
 ['Az alkotásod később vihető haza.','Az utolsó alkalom után két héttel veheted át az elkészült tárgyakat.'],
 ['A tanulás és az élmény a fontos.','Meghatározott darabszámot vagy hibátlan végeredményt nem garantálunk.'],
 ['Az időpontot külön egyeztetjük.','A heti időbeosztás tájékoztató; a konkrét indulás és a szabad férőhely egyeztetéssel tisztázható.']
];
html=html.replace(/<ul class="notes-grid">[\s\S]*?<\/ul>/,`<ul class="notes-grid">${notes.map(([title,text])=>`<li>${icon}<span><strong>${title}</strong> ${text}</span></li>`).join('\n')}</ul>`);
html=html.replace(/<ol class="timeline"[^>]*>[\s\S]*?<\/ol>/,`<ol class="timeline" aria-label="Fehér Dóra és az Agyagpad történetének mérföldkövei">${[
 ['2018','Az első találkozás az agyaggal.','Első korongozóélmény.'],['2022','Megnyílik az Agyagpad.','Saját műhely Szentendrén.'],['2023','Az első saját kollekció.','Bögrék, tálak, tányérok.'],['2024','Elindulnak a kezdő foglalkozások.','Alkotás legfeljebb hatfős csoportban.']
].map(([year,title,text])=>`<li><time datetime="${year}">${year}</time><strong>${title}</strong><p>${text}</p></li>`).join('\n')}</ol>`);
const motif='<svg class="pottery-lines" viewBox="0 0 120 80" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" focusable="false"><ellipse cx="60" cy="40" rx="52" ry="25"/><ellipse cx="60" cy="40" rx="40" ry="18"/><ellipse cx="60" cy="40" rx="27" ry="11"/></svg>';
html=html.replace('<figure class="photo-surround">\n        <img class="photo hero-photo"','<figure class="photo-surround">\n        '+motif+'\n        <img class="photo hero-photo"');
let css;
if(/<style>/.test(html)){
 css=html.match(/<style>([\s\S]*?)<\/style>/)[1];
 html=html.replace(/<style>[\s\S]*?<\/style>/,'<link rel="stylesheet" href="assets/udvari-muhely.css">');
}else css=fs.readFileSync(path.join(root,'assets/udvari-muhely.css'),'utf8').split('/* Türkiz hierarchia')[0];
css+=`\n/* Türkiz hierarchia és megosztott főoldal/aloldal komponensek. */
:root{--teal:#1B4D4F;--teal-hover:#123C3E;--small:.9375rem}
a{color:var(--teal)}
:focus-visible{outline-color:var(--teal)}
h1,h2{color:var(--teal)}
.site-nav a:hover,.site-nav [aria-current],.concept-link:hover{color:var(--teal)}
.button{background:var(--teal);border-color:var(--teal)}
.button:hover,.button:active{background:var(--teal-hover);border-color:var(--teal-hover)}
.button.outline{color:var(--teal);background:transparent;border-color:var(--teal)}
.button.outline:hover{background:var(--teal);color:var(--paper);border-color:var(--teal)}
.button:disabled{background:var(--sand);border-color:var(--ink);color:var(--ink)}
.hero-photo{object-position:50% 52%}
.eyebrow{font-size:.875rem}
.course-description{font-size:1rem;line-height:1.65;margin-top:1rem}
.course-data{margin:1.25rem 0;font-size:1rem;line-height:1.65}
.price{color:var(--teal)}.price-detail{display:block;font-size:.9375rem;font-weight:400;color:var(--ink);margin-top:.25rem}
.detail-link{display:inline-flex;gap:.5rem;align-items:center;min-height:3rem;margin-top:.5rem;font:600 1rem/1.5 var(--body);text-underline-offset:.25em}
.detail-link span{transition:transform 150ms ease-out}.detail-link:hover span{transform:translateX(3px)}
.notes{background:var(--teal);color:var(--paper)}.notes h2,.notes h3,.notes strong{color:var(--paper)}
.notes-grid{font-size:1rem;line-height:1.65}.notes-grid strong{font-weight:600}.note-icon{color:var(--sand)}
.photo-surround::before{border:1px solid var(--clay);background:none;border-radius:1rem}
.hero .photo-surround::before{inset:18px -10px 36px 14px;transform:none}
.story .photo-surround::before{inset:14px 12px -10px -10px;background:none;transform:none}
.pottery-lines{position:absolute;top:-30px;right:12px;width:100px;height:67px;color:var(--clay);opacity:.65;z-index:-1;pointer-events:none}
.timeline time{font-size:1.75rem}.timeline li{line-height:1.65}.timeline li p{margin:0}
.form-note,.small,.field-error,.form-status,.address-note{font-size:.9375rem;line-height:1.65}
input::placeholder,textarea::placeholder{color:var(--ink);opacity:.72}
.course-page-intro{padding-block:3rem 4rem}.course-page-intro h1{max-width:22ch}.course-page-intro p{margin-top:1.5rem;max-width:62ch}
.breadcrumb{display:flex;flex-wrap:wrap;gap:.5rem;font-size:.9375rem;margin-bottom:2rem}
.program-nav{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem}.program-nav a{display:inline-flex;align-items:center;min-height:3rem;padding:.625rem 1rem;border:1px solid var(--teal);border-radius:999px;text-decoration:none}
.program-detail{padding-block:3rem;border-top:1px solid var(--sand);scroll-margin-top:1rem}
.program-layout{display:grid;gap:2rem;align-items:start}.program-layout .photo{aspect-ratio:4/3}
.program-copy h2{margin-bottom:1rem}.program-copy>.course-description{font-size:1.125rem;margin-bottom:1.5rem}
.program-facts{display:grid;gap:1rem;margin:0 0 1.5rem}.program-facts div{display:grid;grid-template-columns:7rem minmax(0,1fr);gap:1rem;padding-bottom:.75rem;border-bottom:1px solid var(--sand)}
.program-facts dt{font-weight:600}.program-facts dd{margin:0}.program-copy .price{font-size:1.25rem;margin-bottom:1.5rem}
.conditions{margin-block:3rem}.conditions h2{font-size:var(--h3);margin-bottom:1.5rem}.conditions h3{font:600 1rem/1.5 var(--body);margin-top:1.5rem;margin-bottom:.5rem}.conditions p,.conditions li{font-size:1rem;line-height:1.65}.conditions ul{padding-left:1.25rem}.conditions li+li{margin-top:.75rem}
.privacy-main{padding-block:4rem;min-height:55vh}.privacy-main h1{max-width:24ch}.privacy-main p{margin-top:1.5rem}.privacy-main .button{margin-top:2rem}
@media(min-width:48rem){.program-layout{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:3rem}.course-page-intro{padding-block:4rem}.timeline time{font-size:2.25rem}}
@media(min-width:64rem){.course-page-intro{padding-block:4rem 6rem}.program-detail{padding-block:4rem}.timeline time{font-size:2.25rem}}
@media(max-width:47.999rem){.hero .photo-surround::before{inset:14px -6px 35px 12px;transform:none}.story .photo-surround::before{inset:12px 10px -8px -6px;transform:none}.pottery-lines{width:80px;right:10px}.program-facts div{grid-template-columns:6rem minmax(0,1fr)}.program-copy>.course-description{font-size:1rem}.program-nav{gap:.5rem}.program-nav a{font-size:.9375rem}}
@media(prefers-reduced-motion:reduce){.detail-link span{transition:none}.detail-link:hover span{transform:none}}
`;
fs.writeFileSync(path.join(root,'assets/udvari-muhely.css'),css.replaceAll("url('assets/fonts/","url('fonts/").trim()+'\n');
// A főoldali navigáció a teljes kínálati oldalra vezet; a hero az áttekintésre.
html=html.replace(/(<nav class="site-nav"[^>]*>)[\s\S]*?<\/nav>/,'$1<a href="#kezdo">Kezdőlap</a><a href="tanfolyamok.html">Tanfolyamok</a><a href="#muhely">Műhely</a><a href="#kapcsolat">Kapcsolat</a></nav>');
html=html.replace(/(<nav class="footer-links"[^>]*>)[\s\S]*?<\/nav>/,'$1<a href="#kezdo">Kezdőlap</a><a href="tanfolyamok.html">Tanfolyamok</a><a href="#muhely">Műhely</a><a href="#kapcsolat">Kapcsolat</a><a href="#kapcsolat">Írj az űrlapon</a></nav>');
html=html.replace('A programok időbeosztását a <a href="#tanfolyamok">Tanfolyamok</a> résznél találod.','A programok időbeosztását a <a href="tanfolyamok.html">Tanfolyamok</a> oldalon találod.');
html=html.replace("    const status = form.querySelector('[role=\"status\"]');",`    const status = form.querySelector('[role="status"]');
    const initialProgram = new URLSearchParams(location.search).get('program');
    if (['kostolo','kezdo-kurzus','csapatepito','egyeb'].includes(initialProgram)) program.value = initialProgram;`);
fs.writeFileSync(file,html);
const header=html.match(/<header class="site-header">[\s\S]*?<\/header>/)[0];
const footer=html.match(/<footer>[\s\S]*?<\/footer>/)[0];
const menuScript=html.match(/  <script>([\s\S]*?)    const sectionLinks/)[1];
const home='koncepcio-1-udvari-muhely.html';
function subHeader(active){return header.replace(/href="#(kezdo|muhely|kapcsolat)"/g,`href="${home}#$1"`).replace('href="tanfolyamok.html">Tanfolyamok','href="tanfolyamok.html"'+(active?' aria-current="page"':'')+'>Tanfolyamok');}
function subFooter(){return footer.replace(/href="#(kezdo|muhely|kapcsolat)"/g,`href="${home}#$1"`);}
function pageHead(title,description){return `<!doctype html><html lang="hu"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><link rel="icon" type="image/webp" href="images/webp/agyagpad-favicon.webp"><link rel="stylesheet" href="assets/udvari-muhely.css"></head><body><a class="skip" href="#tartalom">Ugrás a tartalomra</a>`;}
const details=programs.map(p=>`<section class="program-detail" id="${p.id}" aria-labelledby="${p.id}-cim"><div class="program-layout"><figure class="photo-surround">${image(p,'photo','(min-width:1024px) 520px, (min-width:768px) 45vw, calc(100vw - 40px)')}</figure><div class="program-copy"><p class="eyebrow">${p.tag}</p><h2 id="${p.id}-cim">${p.name}</h2><p class="course-description">${p.description}</p><dl class="program-facts"><div><dt>Alkalmak</dt><dd>${p.value==='csapatepito'?'Egyeztetés szerint':p.count}</dd></div><div><dt>Időtartam</dt><dd>${p.value==='csapatepito'?'Egyedi egyeztetés szerint':p.duration}</dd></div><div><dt>Időpont</dt><dd>${p.schedule}</dd></div><div><dt>Csoport</dt><dd>Legfeljebb 6 fő</dd></div></dl><p class="price">${p.price}${p.priceDetail?`<span class="price-detail">${p.priceDetail}</span>`:''}</p><a class="button" href="${home}?program=${p.value}#kapcsolat">${p.value==='csapatepito'?'Egyedi ajánlatról érdeklődöm':'Érdeklődöm a tanfolyamról'}</a></div></div></section>`).join('\n');
const courses=pageHead('Tanfolyamok és árak | Agyagpad – Bemutatóprojekt','Korongozó kóstoló, négyhetes kezdő kurzus és céges alkotóprogram: árak, időbeosztás és részvételi tudnivalók az Agyagpad bemutatóprojektjében.')+subHeader(true)+`<main id="tartalom" class="wrap" tabindex="-1"><section class="course-page-intro"><nav class="breadcrumb" aria-label="Morzsanavigáció"><a href="${home}">Kezdőlap</a><span aria-hidden="true">/</span><span aria-current="page">Tanfolyamok</span></nav><p class="eyebrow">Programok és árak</p><h1>Találj időt az alkotásra</h1><p>Egyetlen alkalomra érkeznél, vagy több héten át ismerkednél az agyaggal? Itt megtalálod a programok árait, időbeosztását és a közös részvételi tudnivalókat.</p><nav class="program-nav" aria-label="Programok ezen az oldalon">${programs.map(p=>`<a href="#${p.id}">${p.name}</a>`).join('')}</nav></section>${details}<section class="notes conditions" aria-labelledby="feltetelek"><h2 id="feltetelek">Részvételi tudnivalók</h2><ul class="notes-grid">${notes.map(([title,text])=>`<li>${icon}<span><strong>${title}</strong> ${text}</span></li>`).join('')}</ul></section><section class="conditions" aria-labelledby="erdeklodes-menete"><h2 id="erdeklodes-menete">Így működne az érdeklődés</h2><p>A program melletti érdeklődési gomb a főoldali űrlaphoz vezet, az adott program kiválasztásával. Egy valódi műhelynél ezt időpont- és férőhely-egyeztetés követné; a részvétel visszaigazolással válna véglegessé.</p><h3>Bemutatóprojekt, valódi foglalás nélkül</h3><p>Az Agyagpad kitalált vállalkozás. Az oldalon nem lehet valódi tanfolyamra jelentkezni, az űrlap helyi bemutatóként működik, üzenetet nem küld. A feltüntetett árak és időbeosztások a vizsgaprojekt adatai.</p><h3>Műhelybolt és nyitvatartás</h3><p>A bemutatott műhelybolt nyitvatartása csütörtök–vasárnap 10:00–18:00. A tanfolyamok külön, a fenti programbeosztás szerint szerepelnek.</p><p>2000 Szentendre, Agyagliget köz 4. · Kitalált bemutatócím, nem látogatható műhelyhelyszín.</p><a class="detail-link" href="${home}#muhely">Megismerem a műhelyt <span aria-hidden="true">→</span></a></section></main>`+subFooter()+`<script>${menuScript}</script></body></html>`;
fs.writeFileSync(path.join(root,'tanfolyamok.html'),courses);
const privacy=pageHead('Adatkezelési információk a helyi prototípushoz | Agyagpad','Az Agyagpad helyi prototípusa nem továbbít űrlapadatokat. A végleges adatkezelési tájékoztató az élesítéskor készül el.')+subHeader(false)+`<main id="tartalom" class="privacy-main wrap" tabindex="-1"><h1>Adatkezelési információk a helyi prototípushoz</h1><p>Ez az Agyagpad weboldalának helyi bemutatóváltozata. Az űrlapba írt adatok nem kerülnek elküldésre, nem mentjük őket szerverre vagy böngészős tárhelyre. A próba során nincs valódi tanfolyami jelentkezés.</p><p>A végleges, üzenetküldésre alkalmas oldal adatkezelési tájékoztatóját a tényleges üzemeltető és az űrlapkezelés adatainak megadása után készítjük el. Ez az oldal a jelenlegi prototípus működését ismerteti.</p><p>A bemutató nem tartalmaz analitikai vagy reklámkövető kódot. A képek és betűk a projekt helyi fájljaiból töltődnek be.</p><a class="button outline" href="${home}#kapcsolat">Vissza az érdeklődő űrlaphoz</a></main>`+subFooter()+`<script>${menuScript}</script></body></html>`;
fs.writeFileSync(path.join(root,'adatkezeles.html'),privacy);
const colors={paper:'#F9F8F6',ink:'#2D2A26',teal:'#1B4D4F',hover:'#123C3E',sand:'#D9C3B0',clay:'#A65B32'};
function luminance(hex){const [r,g,b]=hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*r+.7152*g+.0722*b;}
const contrast=[['paper','teal'],['paper','hover'],['teal','paper'],['teal','sand'],['ink','paper'],['sand','teal'],['clay','paper']].map(([a,b])=>{const x=luminance(colors[a]),y=luminance(colors[b]);return {foreground:colors[a],background:colors[b],ratio:Number(((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2))};});
fs.writeFileSync(path.join(root,'ellenorzes/turkiz-kontrasztok.json'),JSON.stringify(contrast,null,2));
console.log(JSON.stringify(contrast));

