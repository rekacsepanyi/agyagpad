# Agyagpad – a Műhely aloldal terve

2026. november 14. A felhasználó által megadott hat szakasz, szó szerinti szövegek és megnevezett fotók alapján.

## Arculat és hatókör

A kész főoldal és Tanfolyamok arculatát használjuk: Merriweather címsorok, Inter szöveg, 1200 px legnagyobb tartalmi szélesség. Színek: törtfehér #F9F8F6, grafit #2D2A26, terrakotta #A65B32, földszín #8C4A27, bézs #D9C3B0, türkiz #1B4D4F. Nincs új szín. A főoldal és a Tanfolyamok HTML-je, stílusai és űrlapkódja változatlan; ezt forráslenyomatok ellenőrzik.

Az új elrendezés az assets/muhely.css fájlba került. A nagyító működése: assets/muhely-galeria.js. Nem készül galéria-aloldal vagy új menüpont; az érdeklődési űrlap nem kerül át erre az oldalra.

## Oldalszerkezet

1. Közös fejléc, aktív Műhely menüpont. Érdeklődöm → koncepcio-1-udvari-muhely.html#kapcsolat. Diszkrét Kezdőlap / Műhely morzsamenü.
2. Személyes hero: szöveg balra, hero1 fotó jobbra; terrakotta H1, türkiz kicker, egyetlen türkiz keret és köríves motívum. CTA → tanfolyamok.html.
3. Dóra története: bézs felületen balra a kézben tartott tál, jobbra a három bekezdés. A 15+ év, 1500+, 7000+ számhármas a szöveg alatt, ezen az oldalon egyszer szerepel.
4. Műhelybemutató: törtfehér felület, balra szöveg, jobbra domináns polcfotó és kisebb korongozási részlet. A két kép egymást és a szöveget nem takarja; mobilon egymás alá kerülnek.
5. Személyes figyelem: közös türkiz blokk törtfehér tipográfiával, három állítás, képek és belső kártyák nélkül. Asztalon három, kisebb kijelzőn egy oszlop.
6. Alkotások: megőrzött #keramiak horgony. Hat kész tárgyfotó a kért sorrendben, képaláírásokkal, árak és vásárlási gombok nélkül. 1024 px-től három, 600 px-től kettő, alatta egy oszlop.
7. Most rajtad a sor: rövid, bézs hátterű lezárás; CTA → tanfolyamok.html.
8. Közös, végleges lábléc; a kitalált vállalkozást és vizsgamunkát jelző sor megmarad.

## Fotók azonosítása

Minden kért fotó megtalálható és tartalmilag ellenőrzött. Nem használtunk helyettesítő képet.

| Hely | Eredeti fotó | Webes fájlnév előtagja |
| --- | --- | --- |
| Hero | images/fotók/hero1.jpg | muhely-hero |
| Dóra története | images/fotók/muhely/handmade-pottery-bowl.jpg | muhely-kezben-tal |
| Műhely fő kép | images/fotók/side-view-clay-pots-arrangement.jpg | muhely-polc |
| Műhely részlet | images/fotók/muhely/close-up-female-potter-s-hand-giving-shape-clay-bowl-pottery-wheel.jpg | muhely-korongozas |
| Galéria 1 | images/fotók/muhely/different-ceramic-empty-plates-bowls.jpg | muhely-talak-tanyerok |
| Galéria 2 | images/fotók/muhely/rustic-speckled-mug-design-resource.jpg | muhely-pettyes-bogre |
| Galéria 3 | images/fotók/muhely/close-up-arrangement-modern-vases (1).jpg | muhely-vazak |
| Galéria 4 | images/fotók/muhely/top-view-table-arrangement-with-empty-dishes-tableware.jpg | muhely-teritek |
| Galéria 5 | images/fotók/muhely/ceramic-bowl-linen-cloth.jpg | muhely-mintazott-tal |
| Galéria 6 | images/fotók/muhely/bottom-view-round-platters-black-table.jpg | muhely-turkiz-tanyerok |

Mindegyikhez 480, 800, 1200 és 1600 px széles, teljes eredeti képarányú WebP készült, 82-es minőséggel. A hat galériafotónak 1920 px széles nagyítható változata is van. Összesen 46 webes fájl. A források eredeti fájljai nem változtak. Újragenerálás: node eszkozok/muhely-kepek.cjs. Méretek és fájlméretek: ellenorzes/muhely-assetlista.json.

A hero 4:5 képhelyet használ, teljes forrásmagassággal, 30%-os vízszintes tárgypozícióval. Csak oldalt vágunk; a kalapból az eredeti fotón látható rész, az arc, mindkét kéz és a váza megmarad. A képfelbontás kiválasztása a portréhely kitöltéséhez szükséges forrásszélességgel számol. Nincs sötétítés.

A galéria keretei egységesen 4:3 arányúak. A bögre és vázák természetesen elférnek a kivágásban. A mintázott tál álló fotóját contain kitöltés tartja teljes egészében láthatóan, a meglévő törtfehér háttéren. Nincs további türkiz galériadekoráció.

## Nagyító és billentyűzet

A képek valódi hivatkozások a teljes WebP-re; JavaScript nélkül is megnyithatók. JavaScripttel natív dialog nyílik, a kép vágás nélküli contain kitöltéssel jelenik meg. Belépéskor a Bezárás gomb kap fókuszt; Tab és Shift+Tab a nagyítón belül marad. Escape, bezárógomb vagy a panelen kívüli háttérkattintás zár. Bezáráskor a fókusz visszatér a megnyitó képre, a háttér görgetése helyreáll. A betöltési hiba külön magyar visszajelzést kap.

## Ellenőrzés és beadási bizonyítékok

Tíz nézet: 320, 390, 600, 768, 900, 1024, 1200, 1440 px; továbbá 390 és 1440 px kétszeres szövegmérettel. Nézetenként mind a hat fotó nagyítása, bezárása és fókusz-visszaadása ellenőrzött. Eredmények: ellenorzes/muhely-ellenorzes.json. A főoldal és Tanfolyamok változatlansága: ellenorzes/muhely-valtozatlan-forrasok.json.

Friss képek: beadas/jelenlegi-oldal/muhely-asztali.png, muhely-mobil.png, muhely-galeria-asztali.png és muhely-galeria-mobil.png. Az eredeti drótvázak történeti folyamatképek maradnak. A szövegek külön dokumentuma: muhely-szovegek.md.

## Böngészőmegjegyzések szerinti tipográfiai pontosítás

A figyelemblokk címében a „melletted vagyok.” új sorban indul. Asztalon az „és segítek”, a „hatan” és a „személyes” szintén új sorban kezdődik; a lezárásban a második, kisbetűs „akár” került új sorba. A bekezdések célzott sortörései 900 px alatt inline-ra váltanak, így mobilon természetes marad a tördelés. A galéria mind a hat képaláírása középre igazított. Szöveg, kép, navigáció és nagyítóműködés nem változott. A módosítás az eredeti 1254 px-es nézetben és kisebb kijelzőkön is ellenőrzött.
