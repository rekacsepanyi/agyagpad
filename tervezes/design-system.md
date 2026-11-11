# Agyagpad – design system

Verzió: 4.0 · 2026. november 11.
Állapot: a kiválasztott Udvari műhely főoldalának aktuális specifikációja. A korábbi türkiz gombos irányt ez a dokumentum felülírja.

## Források és hatókör

- A felhasználó legutóbbi főoldali módosításai az elsődlegesek.
- A meglévő brief és a szovegek.md rögzíti a projektadatokat; az eredeti arculat, Figma és iskolai méretskála adja az alapokat.
- Aktuális főoldal: koncepcio-1-udvari-muhely.html. Az index.html külön koncepcióválasztó, a főoldal fejlécéből nincs hozzá hivatkozás.
- Megjelenési forrás: assets/udvari-muhely.css. A betűfájlok és a licencek az assets/fonts mappában elérhetők.
- Ebben a munkakörben kizárólag a főoldal készült tovább. A közös CSS a meglévő aloldalakon is érvényesül, azok HTML-tartalmát nem bővítettük.

## Hangulat

Meleg, földközeli, kézműves, rendezett és olvasható. A nyitókép az agyag formálását mutatja. A műhelyt egyetlen hangsúlyos munka közbeni portré és visszafogott tárgyfotók személyesítik meg. Nincs review-szekció, kitalált statisztika vagy új elismerés.

## Színek

| Token a CSS-ben | HEX | Használat |
| --- | --- | --- |
| --paper | #F9F8F6 | Törtfehér fő felület, hero, műhely, világos kártyák, gombszöveg |
| --ink | #2D2A26 | Grafit törzsszöveg, H2/H3, navigáció, link, ikon és funkcionális keret |
| --clay | #A65B32 | Terrakotta H1, elsődleges gomb, évszám, idővonaltengely és visszafogott kerámiamotívum |
| --earth | #8C4A27 | Az elsődleges gomb sötétebb hover állapota |
| --sand | #D9C3B0 | Tanfolyami és kapcsolati szakasz, tudnivalóblokk meleg bézs alapja |
| --teal | #1B4D4F | Kizárólag a kicker feliratok, beleértve a kártyák felvezetőit |

Új bézs-, homok-, grafit- vagy türkiz-hover árnyalat nincs. A korábban felvetett #F3EFEA, #EFE8E1 és #123C3E nem része az aktuális rendszernek. A fényképek természetes színei nem UI-tokenek.

### Ellenőrzött kontrasztok

| Előtér / háttér | Arány |
| --- | --- |
| Grafit / törtfehér | 13,45:1 |
| Grafit / homok | 8,42:1 |
| Türkiz / törtfehér | 8,91:1 |
| Türkiz / homok | 5,58:1 |
| Terrakotta / törtfehér | 4,75:1 |
| Törtfehér / terrakotta gomb | 4,75:1 |
| Törtfehér / sötétebb terrakotta hover | 6,33:1 |

A homokszínű felületen az elsődleges gomb grafit kerete ad egyértelmű határt; nem támaszkodunk a terrakotta/homok pár gyengébb határkontrasztjára. A linkek sötétek és aláhúzottak. A fókusz grafit, törtfehér elválasztással. Szövegszínhez nem használunk halványító átlátszóságot.

## Tipográfia

Merriweather a címsorokhoz, Inter a szöveghez és kezelőelemekhez. Helyi WOFF2, magyar karakteres készlet, font-display: swap. A logó saját betűrajzát nem szedjük újra.

| Elem | Betű / súly | Asztal | Mobil | Sorköz |
| --- | --- | --- | --- | --- |
| H1 | Merriweather 700 | 60 px | 40 px | 130% |
| H2 | Merriweather 700 | 40 px | 32 px | 130% |
| H3 | Merriweather 700 | 28 px | 24 px | 130% |
| Törzsszöveg | Inter 400 | 18 px | 16 px | 165% |
| Kártya- és tudnivalószöveg | Inter 400/600 | 16 px | 16 px | 165% |
| Kicker / kártyafelvezetés | Inter 400 | 15 px | 15 px | 150% |
| Navigáció / mezőcímke | Inter 600 | 16 px | 16 px | 150% |
| Kis leírás, űrlapsegédlet | Inter 400 | 15 px | 15 px | 165% |
| Elsődleges gomb | Inter 600 | 15 px | 15 px | 130% |
| Idővonal évszáma | Merriweather 700 | 36 px | 28 px | 130% |

- H1 terrakotta; H2 és H3 grafit a világos felületeken.
- A kickerek normál, mondatkezdő nagybetűs írásmódúak. Nincs text-transform: uppercase, ritkítás, bevezető em dash vagy dekoratív előtagvonal.
- A gombok nagybetűs megjelenése megmarad; ez a szabály nem terjed át a kickerekre.
- Folyó szöveg max. min(680 px, 65ch). Balra zárt, nem sorkizárt.
- Egy H1, a fő szekciók H2, a programnevek H3.
- A nagyított szöveg nem vágódhat le. Szűk helyen a hosszú szavak törhetnek; a tartalmat nem rejtjük el vízszintes overflow-val.

## Elrendezés és szakaszhátterek

- Tartalom max. 1200 px. Oldalsó tér mobilon 20 px, tableten 32 px, asztalon 48 px.
- Térközskála: 8, 16, 24, 32, 48, 64, 96, 128 px. A 20 px-es mobilmargó tudatos kivétel.
- Szekciók függőleges belső tere mobil/tablet 64 px, asztal 96 px; hero asztalon 128 px.
- Hero: #F9F8F6. Tanfolyamok: #D9C3B0, törtfehér programkártyákkal. Műhely: #F9F8F6. Kapcsolat: #D9C3B0, világos mezőkkel és információs kártyával.
- Nincs dekoratív határvonal a szakaszok között vagy a műhelybolt blokkja körül. A funkcionális mezőkeretek és fókuszjelzések megmaradnak.
- 1024 px alatt mobilmenü; 768 px alatt egyoszlopos tartalmi blokkok. A programkártyák tabletméretben egymás alatt, asztalon három oszlopban látszanak.
- A fejléc: átlátszó logó, Kezdőlap, Tanfolyamok, Műhely, Kapcsolat. Koncepciók link nincs.

## Programkártyák

Sorrend: normál kicker → programnév → rövid élményleírás → alkalomszám és időtartam → Részletek és árak → link.

- Főoldalon nincs konkrét ár és külön árcímke.
- Korongozó kóstoló: 1 alkalom, 3 óra.
- Négyhetes kezdő kurzus: 4 alkalom, 4 × 2,5 óra.
- Céges csapatépítő: egyeztetett időpont, egyedi időtartam; új adatot nem találunk ki.
- A meglévő tanfolyamok.html megfelelő programhorgonyaira mutató linkek megmaradnak; részletes árakat ott talál a látogató.
- Törtfehér kártya, 16 px sugár, nincs árnyék. Belső tér mobil/tablet 24 px, asztalon 32 px.

## Gombok és űrlap

- Elsődleges: terrakotta háttér, törtfehér szöveg, 1 px grafit keret, 999 px kapszula. Hover: #8C4A27.
- Másodlagos: átlátszó háttér, grafit felirat és keret; hover meglévő homokszín.
- Legalább 48 px magas kezelőelemek, több sorba törhető felirat, látható grafit fókusz.
- Név, e-mail és program kötelező; üzenet opcionális. Mezőcímkék külön láthatók, nem placeholderbe rejtve.
- Mező: törtfehér, grafit szöveg, 1 px grafit keret, 12 px sugár.
- A prototípus nem küld és nem tárol adatot. Érthető helyi visszajelzés, nincs valótlan kézbesítési állítás. JavaScript nélkül a küldés letiltott.
- Hibaüzenet szöveggel és aria-invalid kapcsolattal jelenik meg; az adatok megmaradnak.

## Tudnivalóblokk

Meleg bézs (#D9C3B0), grafit szöveg és egységes, 24 px-es grafit kör-pipa ikonok. 768 px-től két oszlop, mobilon egy. A hat pont rövid kiemelt állítással kezdődik, és megőrzi az előképzettség, anyagok/égetések, hatfős csoport, két héttel későbbi átvétel, végeredmény-korlátok és időpont-egyeztetés információját. A dekoratív ikonok aria-hidden jelölésűek.

## Idővonal

- Állomások: 2018, 2022, 2023, 2024. Új évszám vagy esemény nincs.
- Normál asztali nézet: évszám felül, terrakotta pont és összekötő középen, rövid eseményszöveg alul.
- Szűkebb tartalmi térben: függőleges tengely bal oldalon; évszám és eseményszöveg jobb oldalon.
- A vízszintes elrendezést a műhely tartalmi konténerének legalább 44rem szélessége engedi. Nagyított szövegnél ezért korábban függőlegesre vált.
- A szöveg CSS Gridben marad; csak a dekoratív tengely kap abszolút pozicionálást.
- Az év, a pont és a szöveg nem fedheti egymást. 200%-os szövegmérettel is ellenőrizendő.

## Képek, logó és dekoráció

- Átlátszó logó: images/logo/Agyagpad-logo-transparent.svg; PNG-párja ugyanott. Nincs külön doboz, keret vagy színezett háttér.
- Tartalmi fotók: images/webp, reszponzív srcset/sizes, 16 px lekerekítés, helyes méretattribútumok és tartalomhoz illő alt.
- Hero: reszletfoto2, agyagot formáló kezek. A bemutatkozásban másik, munka közbeni kép, hero1; a hangsúlyos portré nem ismétlődik.
- Főoldali kerámiakompozíció: muhelybolt (kész bögrék) és reszletfoto4 (megformált váza a műhelyben). A fotókat a ténylegesen megtekintett tartalom alapján választottuk ki.
- Kevés, terrakotta eltolt képkeret és koronggyűrű-vonalgrafika. Nincs botanikai minta, erős háttértextúra vagy folyamatos animáció.
- A nyitókép eager, a lejjebb lévő képek lazy betöltésűek; eredeti fotók megőrizve.

## Közös tájékoztatás

A bemutatott műhelybolt nyitvatartása csütörtök–vasárnap 10:00–18:00. A tanfolyamok ettől külön programbeosztásúak. A cím 2000 Szentendre, Agyagliget köz 4., egyértelműen kitalált, nem látogatható bemutatócímként feltüntetve. A vizsgamunka- és fikciójelzés a láblécben megmarad. Nincs kitalált működő telefon, e-mail vagy közösségi profil.

## Ellenőrzés és későbbi feladatok

Aktuális teszt: eszkozok/fooldal-ellenorzes.cjs; eredmény: ellenorzes/fo-ellenorzes.json. Öt nézetszélesség: 320, 390, 768, 1024, 1440 px. További két futás 200%-os szövegmérettel: mobil és asztal. Ellenőrzött billentyűzetes ugrólink, menü/Escape, linkcélok, színek, űrlap és túlcsordulás.

A főoldal lezárása után következik az aloldalak tartalmi finomítása. A kért muhely.html még nem készül el ebben a körben; oda 4–6 változatos, tartalom alapján kiválasztott fotó kerülhet: portré, munkafolyamat, műhelyrészlet és kész tárgyak. Addig a főoldali Műhely hivatkozás működő #muhely célra mutat.

Az éles űrlap, adatkezelési tájékoztató, tételes képkreditek, végleges SEO, publikálás és az AI-használat leírása továbbra is külön lezárandó munka.
