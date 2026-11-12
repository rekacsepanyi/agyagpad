# Agyagpad – az aktuális változat ellenőrzése

Frissítve: 2026. november 12. Kiinduló weboldalalap: 16527e0. Az aktuális továbbfejlesztés váltakozó szakaszsarkokat, a csatolt portrét és hangsúlyosabb képmotívumokat tartalmaz. A főoldal hét futását november 12-én újra elvégeztük; a fejléc harminc próbájának jelentése november 11-i, a fejléc ebben a körben nem változott. A régi napló másolata: ../archivum/dokumentacio-2026-11-11-korabbi/eredmenyek.md.

## Főoldal

A fooldal-ellenorzes.cjs mind a hét futása sikeres: 320, 390, 768, 1024 és 1440 px; továbbá 390 és 1440 px 200%-os szövegmérettel. A gépi eredmény: fo-ellenorzes.json, a kiinduló commit és az aktuális designrevízió azonosítójával.

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

A november 12-én frissen generált mobil- és asztali felvételek a kepernyokepek/ mappa gyökerében és a ../beadas/jelenlegi-oldal/ mappában vannak. A megtekintett asztali hero a megtartott kártyát, külön motívumokat és normál gombfeliratot mutatja. A régi kísérleti képek a kepernyokepek/korabbi-valtozatok-2026-11-11/ almappában vannak, történeti anyagként.

## Kontrasztok

A fo-kontrasztok.json a meglévő hat UI-színt és a mért színpárokat tartalmazza. Grafit/törtfehér 13,45:1; türkiz/törtfehér 8,91:1; törtfehér/türkiz ugyanennyi; törtfehér/terrakotta 4,75:1; törtfehér/sötétebb terrakotta hover 6,33:1. A fotók természetes színei nem UI-tokenek.

## Vizsgadokumentáció

A kötelező és ajánlott tételek állapota: ../beadas/README.md. A tervezési képek megvannak, az AI-leírás az eddigi munkát röviden összefoglalja. Élő webcím és publikálás még nincs; a jelenlegi űrlap helyi bemutató. Saját domain, mérés, valódi üzenetküldés és esettanulmány ajánlott extrák, nem kötelező teljesítési feltételek.

Az eredeti brief, a korábbi szakaszterv és az arculati képek a folyamat előzményeit őrzik. A követendő dokumentumok: ../tervezes/agyagpad-projektbrief.md, design-system.md, szovegek.md, aktualis-oldalterkep.md. Az utóbbi három fájl is a tervezes mappában található.

## November 12-i designfinomítás és tartalmi észrevétel

A Tanfolyamok és Kapcsolat szakasz bal felső, a Műhely jobb felső sarkán reszponzív, 32–80 px közötti lekerekítés van. Az új felületi hátterek a meglévő paper és sand tokenekből állnak; a tartalmat és a fókuszt nem vágják le.

A bemutatkozó kép a felhasználó által csatolt hero.jpg (3193 × 4784 px) meglévő, 480/800/1200/1600 px-es WebP-készletét használja. A 800 px-es változat 98 298 bájt a 7 155 353 bájtos JPG helyett. A portré 3:4 képkivágást kapott; az arc, a kezek és az edény is látható. A bemutatkozó és műhelybolti fotó 2 px-es türkiz kerete mögül a jobb felső részen három finom gyűrű látszik ki, 1,75 px vonallal. Asztalon 148 × 99, mobilon 112 × 75 px a motívum.

Mind a hét futás ellenőrzi a váltakozó sarkokat, a felületszíneket, az új portréforrást és a két megerősített motívum méretezését, helyét és látható vonalvastagságát. Mobilon és 200%-os szöveggel nincs vízszintes túlcsordulás. A teljes műhelyszakasz új felvételén a késleltetett képek dekódolását is megvártuk.

A kerámiák többféle tárggyal való bemutatása a saját brief vállalása. Az általános vizsgakiírás nem követel külön kerámiagalériát. Jelenleg a műhelybolt kész bögréket mutat; a tálak/tányérok/vázák képi bemutatása még kiegészítendő, vagy a szöveges ígéret pontosítandó. Új galériát ebben a körben nem adtunk hozzá.
