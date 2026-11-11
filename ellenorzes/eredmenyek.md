# Agyagpad – a megtartott változat ellenőrzése

Frissítve: 2026. november 11. Weboldalalap: 16527e0; visszaállító helyi commit: 6125a95. A jelentés a dokumentációfrissítéskor újraellenőrzött állapotot írja le. A régi napló másolata: ../archivum/dokumentacio-2026-11-11-korabbi/eredmenyek.md.

## Főoldal

A fooldal-ellenorzes.cjs mind a hét futása sikeres: 320, 390, 768, 1024 és 1440 px; továbbá 390 és 1440 px 200%-os szövegmérettel. A gépi eredmény: fo-ellenorzes.json, a megtartott megjelenési commit azonosítójával.

Ellenőrizve: vízszintes túlcsordulás, betöltött képek, JavaScript és erőforráshibák, címsorszínek, normál kickerek, ár nélküli főoldali kártyák, működő részletlink-célok, változatlan idővonali évszámok és elrendezés, egyetlen műhelyboltfotó, türkiz tudnivalóblokk törtfehér elemekkel és a kártyákhoz igazodó szélességgel. A mobilmenü és Escape, a billentyűzetes ugrólink, az űrlap helyi visszajelzése és a POST-kérés nélküli működés is sikeres.

## Fejléc

A fejlec-ellenorzes.cjs 30 sikeres próbája a főoldal és a két meglévő aloldal fejlécét vizsgálja: 320, 390, 768, 1023, 1024, 1100, 1200 és 1440 px, továbbá 390 és 1024 px 200%-os szövegmérettel. Eredmény: fejlec-ellenorzes.json.

Ellenőrzött a Jelentkezés CTA, a főoldali űrlap elérése az aloldalakról is, a Tanfolyamok menüpont, a lenyíló menü, a terrakotta/törtfehér gomb, a lekerekítés, a sötétebb terrakotta hover, a Tab-fókusz és az Enter-navigáció. A fejléc elemei nem fedik egymást és nem lógnak ki. Ez fejlécellenőrzés; az aloldalak teljes tartalmi és elrendezési lezárását nem igazolja.

## A megtartott vizuális állapot

- A fejléc Jelentkezés gombja csak kezdő nagybetűs.
- A hero fotó az agyagpad-hero WebP-készletből töltődik be.
- A fotón 15 px-es dőlt türkiz idézet, törtfehér kártyán, bevezető vonal nélkül; jobb felső sarok 36 px-es lekerekítéssel, finom árnyékkal.
- Átlátszó logó és favicon, a bögre jobb oldali kontúrja és füle türkiz.
- Visszafogott, külön koronggyűrűk és eltolt türkiz képkeretek. Nincs összefonódó ív vagy lefelé futó spirálvég.
- Műhelybolt: asztalon szöveg balra, fotó jobbra; mobilon szöveg után fotó.
- A tudnivalóblokk a három programkártya alatt marad.

A frissen generált mobil- és asztali felvételek a kepernyokepek/ mappa gyökerében és a ../beadas/jelenlegi-oldal/ mappában vannak. A megtekintett asztali hero a megtartott kártyát, külön motívumokat és normál gombfeliratot mutatja. A régi kísérleti képek a kepernyokepek/korabbi-valtozatok-2026-11-11/ almappában vannak, történeti anyagként.

## Kontrasztok

A fo-kontrasztok.json a meglévő hat UI-színt és a mért színpárokat tartalmazza. Grafit/törtfehér 13,45:1; türkiz/törtfehér 8,91:1; törtfehér/türkiz ugyanennyi; törtfehér/terrakotta 4,75:1; törtfehér/sötétebb terrakotta hover 6,33:1. A fotók természetes színei nem UI-tokenek.

## Vizsgadokumentáció

A kötelező és ajánlott tételek állapota: ../beadas/README.md. A tervezési képek megvannak, az AI-leírás az eddigi munkát röviden összefoglalja. Élő webcím és publikálás még nincs; a jelenlegi űrlap helyi bemutató. Saját domain, mérés, valódi üzenetküldés és esettanulmány ajánlott extrák, nem kötelező teljesítési feltételek.

Az eredeti brief, a korábbi szakaszterv és az arculati képek a folyamat előzményeit őrzik. A követendő dokumentumok: ../tervezes/agyagpad-projektbrief.md, design-system.md, szovegek.md, aktualis-oldalterkep.md. Az utóbbi három fájl is a tervezes mappában található.
