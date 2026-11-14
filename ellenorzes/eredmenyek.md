# Agyagpad – november 14-i ellenőrzés

Frissítve: 2026. november 14. Revízió: 2026-11-14-content-and-form. Kiinduló mentés: 7064af8.

## Reszponzív oldalak

A fooldal-ellenorzes.cjs az aktuális fooldal-ellenorzes-20261114.cjs tesztet indítja. Mind a 22 nézet sikeres: a főoldal 320, 390, 768, 1024 és 1440 px-en, plusz 390 és 1440 px 200%-os szöveggel; a tanfolyamok, műhely és adatkezelés oldalak ugyanezen öt normál szélességen.

Ellenőrzött: betöltött WebP-k és helyi betűk, hiányzó erőforrás/JavaScript-hiba és vízszintes túlcsordulás nélkül. A Jelentkezem fejlécgomb, mobilmenü/Escape, billentyűzetes ugrólink, az új közös lábléc négy navigációs linkje és a fiktív vizsgamunka-jelzés mind a négy oldalon szerepel. A helyi fájl- és horgonycélok léteznek.

## Főoldali módosítások

- Új H1 és hero-bevezető.
- A három élménysor az előírt szöveggel, grafit 600-as betűvel és terrakotta, kitöltés nélküli vonalas ikon mellett.
- Asztalon és nagyított asztali szövegnél is egyező élménysor- és linkmagasság, CSS subgrid segítségével. Mobilon nincs szöveglevágás.
- A türkiz tudnivalóblokk közvetlenül a kártyák alatt, azok szélességéhez igazítva maradt; asztalon két, mobilon egy oszlop.
- A hat tudnivaló szövege szó szerint azonos a főoldalon és a tanfolyamok aloldalán. Körülbelül két hét átvételi idő szerepel.
- A 2009-es történet és népi iparművész megjelölés a felhasználó új fiktív karakteradata; a három számadat 15+ év, 1500+, 7000+. A régi idővonal eltűnt.
- A műhelybolt terrakotta gombja létező muhely.html#keramiak szakaszra vezet. Négy meglévő kép mutat kész bögrét, készülő vázát, munkafolyamatot és eszközöket.
- A főoldali kapcsolati szakaszból a korábbi állandó demó- és prototípusszövegek kikerültek.

A tanfolyamok aloldalon a pontos adatok megmaradtak: a négyhetes kurzus 4 alkalom, 4 × 2,5 óra; az eredeti heti beosztás és ár nem változott.

## Űrlap – technikai próba és az éles működés határa

Az assets/erdeklodes.js Netlify Forms-ra készít URL-kódolt POST-ot a statikus form-name, név, e-mail, program, üzenet és honeypot mezőkkel. Az éles konfiguráció szándékosan enabled: false, mert a felhasználó még nem hozott létre Netlify-oldalt, és a fogadó későbbi beállítását kérte.

A helyi főoldali ellenőrzés igazolja a három kötelező mező hibáját, az e-mail-formátum magyar hibáját, az adatok megtartását és a konfiguráció nélküli POST elmaradását. A helyi előnézeti szerver GET/HEAD kérést szolgál ki, POST-ra 405-öt ad, nem állít sikeres átvételt.

A külön urlap-ellenorzes.cjs öt sikeres, teljesen helyi szimulációja:

1. HTTP 500 után nincs siker, az üzenet megmarad.
2. A tényleges POST törzsében minden szükséges mező és a honeypot is szerepel.
3. Hálózati hibánál az adatok megmaradnak, a küldés újrapróbálható.
4. Függő válasznál nincs idő előtti sikerüzenet vagy dupla POST, a gomb tiltott.
5. Csak a pozitív fogadói HTTP-válasz után jelenik meg siker és ürülnek a mezők.

Az eredmény az urlap-ellenorzes.json fájlban van. A fogadót a böngészőteszt szimulálta; sem valódi Netlify-átvétel, sem postaládába érkezés nincs igazolva. A szükséges éles beállítások pontos listája: ../tervezes/urlap-beallitas.md.

## Képek, arculat és dokumentáció

A meglévő hat UI-színt, Merriweather–Inter tipográfiát és a korábbi szakaszsarkokat, képmotívumokat megtartottuk. Új szín nincs. A fo-kontrasztok.json meglévő párosításai továbbra is érvényesek: türkiz/törtfehér 8,91:1; grafit/törtfehér 13,45:1; törtfehér/terrakotta gomb 4,75:1.

A friss képernyőképek a kepernyokepek mappában, kiválasztott másolataik a ../beadas/jelenlegi-oldal mappában vannak. A tervezési eredetiek történeti folyamatképek, az aktuális oldaltérkép az új számadatokat, műhelygalériát és előkészített űrlapot követi. A régebbi szöveges/JSON-jelentések és kísérleti felvételek történeti anyagok, nem írják felül ezt a jelentést.

## Hátralévő éles lépések

Netlify-projekt és élő URL; form detection; értesítési cím; valódi üzemeltetői adatkezelési tájékoztató; explicit engedélyezett tárhelynév és a küldés bekapcsolása; éles próba a szolgáltató listájában és a postaládában. A végleges képkreditek, domainhez kötött SEO és publikálás is hátravan. A működő küldés a felhasználó külön projektkövetelménye, amelyet a fogadó későbbi beállítása után lehet teljesítettnek jelölni.

## Bemutatkozó számadatok és CTA – későbbi finomítás

A három számadat a bemutatkozó szövegoszlopba, a két bekezdés alá került. Alatta az Ismerkedjünk meg személyesen gomb a #kapcsolat szakaszhoz navigál. A Felfedezem a kerámiákat gomb nyila kikerült. Hét célzott nézetben ellenőrizve: 320, 390, 768, 1024 és 1440 px, valamint 390 és 1440 px 200%-os szöveggel. A számadatok és a CTA sorrendje, a valódi horgonyugrás és a túlcsordulás-mentesség sikeres. A friss képernyőképek és a szövegforrás is ezt az elrendezést követik.
