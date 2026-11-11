const fs = require('fs');
const path = require('path');
const dir = path.resolve(__dirname, '../tervezes/drotvaz');
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
let a=[];
function start(w,h){a=[`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="100%" height="100%" fill="#f3f3f1"/>`];}
function box(x,y,w,h,fill='#fff',stroke='#b5b5b0',r=8){a.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`);}
function t(x,y,s,size=18,weight=400,color='#30302e'){a.push(`<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(s)}</text>`);}
function lines(x,y,ss,size=18,gap=28){ss.forEach((s,i)=>t(x,y+i*gap,s,size));}
function button(x,y,w,label,dark=true){box(x,y,w,43,dark?'#41413e':'#fff','#41413e',4);t(x+14,y+27,label,16,600,dark?'#fff':'#30302e');}
function photo(x,y,w,h,label){box(x,y,w,h,'#e6e6e2');a.push(`<path d="M${x} ${y} L${x+w} ${y+h} M${x+w} ${y} L${x} ${y+h}" stroke="#c9c9c3"/>`);box(x+12,y+h/2-19,w-24,38,'#e6e6e2','#e6e6e2',2);t(x+23,y+h/2+6,label,16);}
function finish(name){a.push('</svg>');fs.writeFileSync(path.join(dir,name),a.join('\n'));}
start(1440,880);
t(60,68,'AGYAGPAD / OLDALTÉRKÉP',32,700);
t(60,105,'Tervezési dokumentáció • 2026. november 6. • A végleges projektbrief alapján',18);
box(470,150,500,84,'#41413e','#41413e');t(500,186,'Egyoldalas, görgethető weboldal',25,700,'#fff');t(500,215,'Főoldal / index.html',18,400,'#fff');
a.push('<path d="M720 234 V270 M210 270 H1230 M210 270 V310 M550 270 V310 M890 270 V310 M1230 270 V310" fill="none" stroke="#777770" stroke-width="2"/>');
const nodes=[['01 / NYITÓ SZEKCIÓ','#kezdo',['Bemutatkozás, helyszín','Hangulatkép','Két egyértelmű CTA']],['02 / TANFOLYAMOK','#tanfolyamok',['Három program és árak','Részvételi tudnivalók','Érdeklődési gombok']],['03 / MŰHELY ÉS ALKOTÓ','#muhely',['Fehér Dóra bemutatása','Kerámiák és műhelyhangulat','Nyitvatartási információ']],['04 / KAPCSOLAT','#kapcsolat',['Érdeklődő űrlap','Helyszín és egyeztetés','Beküldési visszajelzés']]];
nodes.forEach((n,i)=>{let x=60+i*340;box(x,310,300,200);t(x+18,347,n[0],18,700);t(x+18,377,n[1],17);lines(x+18,419,n[2],17,27);});
box(60,550,1320,152);t(85,587,'FŐ LÁTOGATÓI ÚTVONAL',18,700);t(85,626,'Program megismerése → „Érdeklődöm a tanfolyamról” → Űrlap → Visszajelzés',23,600);t(85,667,'A tanfolyamkártya gombja előre kiválasztja a programot. A beküldés nem jelent helyfoglalást.',18);
box(60,728,1320,100,'#e8e8e4');t(85,765,'Kiegészítő elem: láblécből elérhető adatkezelési tájékoztató.',19,600);t(85,800,'Ez támogató dokumentum; a főoldal továbbra is a briefben rögzített négy szekcióból áll.',18);
finish('01-oldalterkep.svg');
start(1600,2520);
t(55,65,'AGYAGPAD / SZEKCIÓK DRÓTVÁZA',32,700);t(55,103,'Tartalmi és elrendezési terv • Szürkeárnyalatos vázlat • Nem végleges arculat',19);
t(55,155,'ASZTALI NÉZET',21,700);t(1130,155,'MOBILNÉZET',21,700);
box(55,180,1015,2225);box(1130,180,415,2225);
box(75,200,975,72,'#efefeb');t(95,244,'Agyagpad',27,700);t(395,243,'Kezdőlap     Tanfolyamok     Műhely     Kapcsolat',18);
t(95,315,'01 / NYITÓ SZEKCIÓ · #kezdo',17,700);
t(95,369,'Alkoss agyagból,',38,700);t(95,415,'kapcsolódj ki Szentendrén.',34,700);
lines(95,461,['Kezdőbarát korongozás kis csoportban,','egy szentendrei kerámiaműhely hangulatával.'],19);
button(95,520,303,'Érdeklődöm a tanfolyamról');button(95,578,235,'Megnézem a műhelyt',false);
photo(650,320,360,310,'Korongozás · illusztráció');
box(75,670,975,645,'#f5f5f2');t(95,711,'02 / TANFOLYAMOK · #tanfolyamok',17,700);t(95,758,'Válaszd ki a neked való alkotást',31,700);
const cards=[['Korongozó kóstoló',['1 alkalom · 3 óra','Szombat 14:00–17:00','18 500 Ft / fő']],['Négyhetes kezdő kurzus',['4 × 2,5 óra','Szerda 17:00–19:30','65 000 Ft / teljes kurzus']],['Céges csapatépítő',['Egyeztetett időtartam','Egyedi időpont','Egyedi árajánlat']]];
cards.forEach((c,i)=>{let x=95+i*307;box(x,790,290,281);t(x+16,828,c[0],19,700);lines(x+16,877,c[1],17,36);button(x+16,1007,258,'Érdeklődöm a tanfolyamról');});
t(95,1120,'Közös részvételi tudnivalók',23,700);
lines(95,1158,['Legfeljebb 6 fő; előképzettség nem szükséges.','A díj tartalmazza az agyagot, a mázat és két égetést.','Átvétel az utolsó foglalkozás után két héttel; garantált darabszám nincs.','Az időbeosztás tájékoztató; a férőhelyek és indulások egyeztethetők.'],18,31);
t(95,1363,'03 / MŰHELY ÉS ALKOTÓ · #muhely',17,700);
photo(95,1400,407,260,'Műhely / kerámiák · illusztráció');
t(540,1434,'Ismerd meg az Agyagpadot',28,700);
lines(540,1476,['Fehér Dóra keramikus bemutatkozása.','Kézzel készült bögrék, tálak, tányérok.','Rövid, tényszerű szöveg az alkotásról.','','Műhelybolt: csütörtök–vasárnap,','10:00–18:00 · Szentendre.'],18,29);
box(75,1700,975,540,'#f5f5f2');t(95,1740,'04 / KAPCSOLAT ÉS ÉRDEKLŐDÉS · #kapcsolat',17,700);t(95,1787,'Melyik program érdekel?',30,700);
t(95,1830,'Név *',16);box(95,1843,260,42);t(380,1830,'E-mail-cím *',16);box(380,1843,260,42);
t(95,1915,'Program *',16);box(95,1928,545,43);t(110,1955,'Válassz programot…                                      ▾',17);
t(95,2002,'Üzenet',16);box(95,2014,545,77);
t(95,2120,'Adatkezelési tájékoztató ↗  ·  * Kötelező mező',15);button(95,2145,245,'Érdeklődés elküldése');
lines(690,1837,['2000 Szentendre,','Agyagliget köz 4.','Kitalált bemutatócím.','Nem látogatható helyszín.','','A beküldés érdeklődés.','A részvétel külön egyeztetéssel','és visszaigazolással végleges.'],17,29);
box(75,2260,975,122,'#e8e8e4');t(95,2296,'2000 Szentendre, Agyagliget köz 4. · Kitalált bemutatócím',18,700);lines(95,2326,['Az Agyagpad kitalált vállalkozás, az oldal bemutatóprojekt.','Az űrlap nem foglal valódi tanfolyami helyet. A stock képek illusztrációk.'],17,27);
// Mobil: a teljes tartalmi sorrend, a hosszú szövegek tömörített jelölésével.
box(1148,200,379,65,'#efefeb');t(1167,241,'Agyagpad',25,700);t(1480,241,'☰',25);
t(1150,299,'01 / NYITÓ SZEKCIÓ',16,700);t(1150,340,'Alkoss agyagból,',28,700);t(1150,375,'kapcsolódj ki!',28,700);t(1150,410,'Kezdőbarát korongozás · Szentendre',16);
button(1150,433,355,'Érdeklődöm a tanfolyamról');button(1150,488,355,'Megnézem a műhelyt',false);photo(1150,548,355,120,'Korongozás · illusztráció');
t(1150,710,'02 / TANFOLYAMOK',16,700);
cards.forEach((c,i)=>{let y=734+i*207;box(1150,y,355,192,'#f5f5f2');t(1166,y+31,c[0],20,700);lines(1166,y+62,c[1],16,24);button(1166,y+139,323,'Érdeklődöm a tanfolyamról');});
box(1150,1368,355,112,'#e8e8e4');t(1166,1395,'Közös részvételi tudnivalók',18,700);lines(1166,1423,['A desktopon jelölt összes tudnivaló','itt is megjelenik, egymás alatt.'],16,24);
t(1150,1520,'03 / MŰHELY ÉS ALKOTÓ',16,700);photo(1150,1540,355,110,'Műhely / kerámiák · illusztráció');lines(1150,1682,['Fehér Dóra és a kézműves kerámiák.','Bemutatkozó szöveg és nyitvatartás.'],16,25);
t(1150,1757,'04 / KAPCSOLAT',16,700);t(1150,1788,'Melyik program érdekel?',24,700);
[['Név *',1818,38],['E-mail-cím *',1889,38],['Program *',1960,38],['Üzenet',2031,55]].forEach(([label,y,h])=>{t(1150,y,label,15);box(1150,y+12,355,h);});
t(1150,2128,'Adatkezelési tájékoztató ↗',15);button(1150,2145,355,'Érdeklődés elküldése');
lines(1150,2217,['2000 Szentendre, Agyagliget köz 4.','Kitalált bemutatócím.'],15,23);
box(1150,2270,355,112,'#e8e8e4');t(1165,2301,'Lábléc · adatkezelés',17,700);lines(1165,2327,['Agyagliget köz 4. · Kitalált cím','Projektjelzés, képhasználat.'],15,23);
t(55,2453,'Mobilon a kártyák és az űrlapmezők egy oszlopba rendeződnek; a szekciók tartalma megmarad.',19);
t(55,2485,'A szövegek tervezési minták. A végleges arculat, képek és weboldalszövegek a következő munkafázisokban készülnek.',17);
finish('02-drotvaz.svg');
fs.writeFileSync(path.join(dir,'terv-megtekintese.html'),`<!doctype html><html lang="hu"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Agyagpad – oldaltérkép és drótváz</title><style>body{margin:0;background:#e4e4df;font:18px Arial;color:#30302e}header,main{max-width:1600px;margin:auto}header{padding:28px}h1{font-size:28px}img{display:block;width:100%;height:auto;margin-bottom:32px}a{color:inherit}</style><header><h1>Agyagpad – szerkezeti terv</h1><p>2026. november 6. · A végleges brief alapján. A drótváz a tartalom helyét és sorrendjét mutatja; az arculat külön lépés.</p><p><a href="01-oldalterkep.png">Oldaltérkép letöltése (PNG)</a> · <a href="02-drotvaz.png">Drótváz letöltése (PNG)</a></p></header><main><img src="01-oldalterkep.svg" alt="Az Agyagpad egyoldalas weboldalának oldaltérképe"><img src="02-drotvaz.svg" alt="A négy szekció drótváza asztali és mobil elrendezésben"></main></html>`);


