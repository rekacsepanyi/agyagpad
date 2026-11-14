# Agyagpad – Kapcsolat aloldal

2026. november 14. A felhasználó négy utasítását külön lépésként, a megadott sorrendben hajtottuk végre.

## 1. Fejléc és rövid bevezető

Új oldal: kapcsolat.html. Közös fejléc, aktív Kapcsolat menüpont, Kezdőlap / Kapcsolat morzsamenü. A fejléc Érdeklődöm gombja a helyi #kapcsolat szakaszhoz vezet. A kicker Az első lépés egy üzenet, a H1 Beszéljük meg, mit alkotnál szívesen! A bevezető szó szerint a felhasználó szövege. A felhasználó későbbi pontosítása szerint jobbra a megnevezett tálcás fotó került, az asztali H1 két sorban jelenik meg. Külön bevezető CTA nincs.

Merriweather–Inter tipográfia, 1200 px tartalmi maximum, a meglévő hat szín és a közös gombok. Az új oldal külső elrendezését az assets/kapcsolat.css adja; közös CSS- és betűfájl nem változott.

## 2. Elérhetőségek és változatlan űrlap

Bézs szakasz: 900 px-től 40–60%-os oszloparány, 48 px oszlopköz. Balra Itt találsz meg, a megadott Agyagpad Kerámiaműhely név, a 2000 Szentendre, Agyagliget köz 4. cím, a Műhely és műhelybolt nyitvatartása és az előzetesen egyeztetett tanfolyamokról szóló mondat. Mobilon ezek után következik az űrlap.

Nem találtunk kijelölt publikus e-mail-címet vagy telefonszámot. Kitalált elérhetőség és belső értesítési cím nem kerül ki.

Jobbra a főoldali #kapcsolat szakasz teljes form-block HTML-je változtatás nélkül szerepel; a címet és a bevezetőt megtartottuk, az Érdeklődés és kapcsolat kickert a felhasználó kérésére eltávolítottuk. A mezők, feliratok, opciók, osztályok, tájékoztatások és közös stílusok megmaradtak. Az új CSS nem írja felül az űrlap belső elemeit. A külön Találkozzunk a műhelyben! kártya nincs átmásolva.

A meglévő assets/form-config.js és assets/erdeklodes.js változatlanul töltődik be. Az űrlap küldési állapota is változatlan: a Netlify-fogadó a felhasználó korábbi döntése szerint még inaktív. Az oldal készítése nem kapcsolta be a küldést, és nem igazol éles e-mail-kézbesítést.

## 3. Gyakori kérdések

Törtfehér szakasz: Jó tudni, mielőtt írsz kicker, Talán benned is felmerült. H2. Négy natív details/summary elem, a megadott kérdésekkel és válaszokkal. Nincs külön harmonika-JavaScript. Enter és szóköz nyit/zár, a böngésző kezeli a szemantikát. A nyitásjelző terrakotta plusz/mínusz vonal, a fókusz a közös grafit körvonal. Új szín vagy dekorációs stílus nincs.

## 4. Lábléc és ellenőrzés

Azonos tartalmú és megjelenésű közös lábléc. A Kapcsolat link itt a helyi #kapcsolat szakaszhoz vezet. A felhasználó következő kérésére az elérhetőségek alá OpenStreetMap-térkép került Szentendre városáról; fiktív címre mutató helyjelölő és útvonaltervezés nincs. További CTA-blokk nem készült. Az oldal Dóra személyes hangján szól; az együtt megbeszélendő részletekre utaló természetes többes szám megmarad.

A többi végleges oldal HTML-je, stílusai és működési kódja nem változott. Forráslenyomatok: ellenorzes/kapcsolat-valtozatlan-forrasok.json. A többi oldal navigációját sem módosítottuk ebben a körben.

## Vizsgálatok

- 320, 390, 600, 768, 900, 1024, 1200, 1440 px; továbbá 390 és 1440 px mellett kétszeres szövegméret. Nincs túlcsordulás vagy böngészős betöltési hiba.
- Az eredeti form-block HTML és a cím/bevezető szöveg egyezése gépileg ellenőrzött.
- Aktív menüpont, helyi fejlécgomb, mobilmenü, Escape, ugrólink és belső célpontok: sikeres.
- Mind a négy FAQ billentyűzetes nyitása/zárása és fókuszjelölése: sikeres.
- Kötelező mezők, hibás e-mail, magyar mezőhibák és hiba esetén megmaradó adatok: sikeres.
- Helyi szimulált fogadóval HTTP 500, hálózati hiba, folyamatban lévő és pozitív válasz ellenőrzött. Siker kizárólag pozitív válasz után jelenik meg; dupla beküldés nincs.

Eredmények: ellenorzes/kapcsolat-ellenorzes.json, ellenorzes/kapcsolat-urlap-ellenorzes.json. Képek: beadas/jelenlegi-oldal/kapcsolat-asztali.png, kapcsolat-mobil.png, kapcsolat-tablet-allo.png és kapcsolat-tablet-fekvo.png. Teljes szövegek: kapcsolat-szovegek.md.

## Fennmaradó beállítás

Az éles küldéshez élő Netlify-projekt, felismert/aktivált Forms fogadó, engedélyezett tárhelynév, értesítési e-mail és végleges adatkezelői adatok szükségesek, majd valódi próbaüzenet. Részletek: urlap-beallitas.md. Ez a korábbi projektállapot része; az űrlapot változtatás nélkül vettük át.

A felhasználó következő kérése alapján a közös fejléc és lábléc Kapcsolat hivatkozása minden aktív oldalon a kapcsolat.html-re frissült. Az Érdeklődöm gombok és a főoldali #kapcsolat űrlapszakasz megmaradtak. A navigáció file:// címről, 390 és 1254 px-en is ellenőrzött.

## Hero és térkép – későbbi pontosítás

A hero szövege mellé a top-view-brown-big-tray-with-same-colored-plate-dark-surface.jpg került, a projekt images/fotók/muhely mappájából, tartalmilag ellenőrizve. Webes előtag: kapcsolat-teritek; 480, 800, 1200 és 1600 px-es WebP-változatok, 82-es minőséggel. Asztalon a H1 két sorban jelenik meg: Beszéljük meg, / mit alkotnál szívesen!; keskeny nézetben természetesen tovább törhet. A kép 3:2 keretű, 1100 px-től a szöveg mellett, alatta egymás alatt. Az űrlap belső HTML-je és működése változatlan.

A térkép az Itt találsz meg oszlop alatt jelenik meg, 23:16 arányban, késleltetett iframe-betöltéssel. Szentendre városát mutatja, bemutatócímre tett jelölő nélkül. A képaláírás egyértelművé teszi, hogy az Agyagliget köz 4. kitalált bemutatócím. A beágyazás ténylegesen betöltve, mobilon is ellenőrzött; internetkapcsolat és az OpenStreetMap szolgáltatása szükséges hozzá. Az adatkezelési oldalon rövid tájékoztatás szerepel a külső térképszolgáltatásról. Ez a későbbi kérés felülírja az eredeti fotó- és térképmentes tervet.

A közös fejléc Érdeklődöm gombjának egységes célja minden aktív oldalon: kapcsolat.html#erdeklodes. A Kapcsolat oldali contact-form-column önálló section, id=erdeklodes azonosítóval és 7 rem scroll-margin-top értékkel. A korábbi #kapcsolat horgony megmaradt. A gomb megjelenése, az űrlap HTML-je, a programgombok és az űrlapszkriptek változatlanok. 15 mobil/tablet/asztali navigáció és file:// használat ellenőrizve, tesztben rögzített fejléc mellett is látható címmel.
