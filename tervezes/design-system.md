# Agyagpad – design system

Verzió: 4.2 · 2026. november 11.
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
| --clay | #A65B32 | Terrakotta H1, elsődleges gomb, évszám és idővonaltengely |
| --earth | #8C4A27 | Az elsődleges gomb sötétebb hover állapota |
| --sand | #D9C3B0 | Tanfolyami és kapcsolati szakasz, tudnivalóblokk meleg bézs alapja |
| --teal | #1B4D4F | Kicker feliratok, eltolt képkeretek, koronggyűrű-motívum és a tudnivalóblokk háttere |

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

Merriweather a címsorokhoz, Inter a szöveghez és kezelőelemekhez. Helyi WOFF2, magyar karakteres készlet, font-display: swap. A logó saját betűrajzát nem szedjük újra. A bögre jobb oldali kontúrja és füle türkiz, P-szerű hangsúllyal; a többi bögrevonal terrakotta.

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
- A többi gomb nagybetűs megjelenése megmarad; a fejléc „Jelentkezés” gombja mondatkezdő nagybetűs, normál betűközzel. Ez a szabály nem terjed át a kickerekre.
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
- A fejléc: átlátszó logó, Kezdőlap, Tanfolyamok, Műhely, Kapcsolat, majd jobb oldalt kiemelt „Jelentkezés” CTA. A főoldalon #kapcsolat, a meglévő aloldalakon koncepcio-1-udvari-muhely.html#kapcsolat a cél. Koncepciók link nincs.
- A fejléc CTA a meglévő elsődleges gombot használja: terrakotta háttér, törtfehér felirat, kapszulaforma, sötétebb terrakotta hover és közös, 3 px grafit billentyűzetes fókusz. 1024 px alatt a lenyíló menü része, mobilon teljes szélességű. 1024–1199 px között kisebb logószélesség és navigációs térköz tartja szellősen a fejlécet.

## Programkártyák

Sorrend: normál kicker → programnév → rövid élményleírás → alkalomszám és időtartam → „Részletek és árak” link, nyíl nélkül.

- Főoldalon nincs konkrét ár és külön árcímke.
- Korongozó kóstoló: 1 alkalom, 3 óra.
- Négyhetes kurzus (főoldali rövid név): 4 alkalom, 4 × 2,5 óra.
- Céges csapatépítő: egyeztetett időpont, egyedi időtartam; új adatot nem találunk ki.
- A meglévő tanfolyamok.html megfelelő programhorgonyaira mutató linkek megmaradnak; részletes árakat ott talál a látogató.
- Törtfehér kártya, 16 px sugár, nincs árnyék. Belső tér mobil/tablet 24 px, asztalon 32 px.

## Gombok és űrlap

- Elsődleges: terrakotta háttér, törtfehér szöveg, 1 px grafit keret, 999 px kapszula. Hover: #8C4A27.
- A hero másodlagos gombja: átlátszó háttér, terrakotta felirat és keret; hover terrakotta háttér és törtfehér felirat (4,75:1). A többi meglévő másodlagos gomb grafit feliratú és keretű.
- Legalább 48 px magas kezelőelemek, több sorba törhető felirat, látható grafit fókusz.
- Név, e-mail és program kötelező; üzenet opcionális. Mezőcímkék külön láthatók, nem placeholderbe rejtve.
- Mező: törtfehér, grafit szöveg, 1 px grafit keret, 12 px sugár.
- A prototípus nem küld és nem tárol adatot. Érthető helyi visszajelzés, nincs valótlan kézbesítési állítás. JavaScript nélkül a küldés letiltott.
- Hibaüzenet szöveggel és aria-invalid kapcsolattal jelenik meg; az adatok megmaradnak.

## Tudnivalóblokk

Közvetlenül a három programkártya alatt, a tanfolyamos szakasz közös tartalmi konténerében helyezkedik el. Sötéttürkiz (#1B4D4F) háttér, törtfehér (#F9F8F6) cím, szöveg és egységes, 24 px-es kör-pipa ikonok. A kártyák együttes szélességéhez igazodik; belső tere mobilon 24 px, asztalon 32 px. A korábbi különálló blokk megszűnt. A törtfehér/türkiz kontraszt 8,91:1. 768 px-től két oszlop, mobilon egy. A hat pont rövid kiemelt állítással kezdődik, és megőrzi az előképzettség, anyagok/égetések, hatfős csoport, két héttel későbbi átvétel, végeredmény-korlátok és időpont-egyeztetés információját. A dekoratív ikonok aria-hidden jelölésűek. A végeredményről szóló pontban a „vagy hibátlan végeredményt nem garantálunk.” új sorban kezdődik.

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
- A hero képaláírása idézőjeles és dőlt: „Az alkotás az első mozdulattal kezdődik.” A fotó bal alsó részére helyezett törtfehér kártyán jelenik meg, grafit Merriweather szöveggel, bevezető díszvonal nélkül, homokszínű kerettel és 14 px-esen lecsapott jobb felső sarokkal. Mobilon a kártya a fotó szélein belül marad.
- Hero: agyagpad-hero.jpg alapján optimalizált agyagpad-hero WebP, agyagedényt formáló kezek; 480, 800, 1200 és 1600 px széles változatok. A bemutatkozásban másik, munka közbeni kép, hero1; a hangsúlyos portré nem ismétlődik.
- A főoldali műhelyboltnál egyetlen fotó marad: muhelybolt (kész bögrék), 4:3 képaránnyal. A korábbi második, vázás kép lekerült; az eredeti fájlt megőrizzük. A tárgyak bemutatásáról szóló második mondat külön bekezdés.
- Kevés, türkiz eltolt képkeret és koronggyűrű-vonalgrafika, 1,5 px-es keretvonallal. A bemutatkozó és a műhelybolti fotó jobb oldalán is visszafogott koronggyűrűk látszanak. Nincs botanikai minta, erős háttértextúra vagy folyamatos animáció.
- A nyitókép eager, a lejjebb lévő képek lazy betöltésűek; eredeti fotók megőrizve.

## Közös tájékoztatás

A bemutatott műhelybolt nyitvatartása csütörtök–vasárnap 10:00–18:00. A tanfolyamok ettől külön programbeosztásúak. A cím 2000 Szentendre, Agyagliget köz 4., egyértelműen kitalált, nem látogatható bemutatócímként feltüntetve. A vizsgamunka- és fikciójelzés a láblécben megmarad. Nincs kitalált működő telefon, e-mail vagy közösségi profil.

## Ellenőrzés és későbbi feladatok

Aktuális teszt: eszkozok/fooldal-ellenorzes.cjs; eredmény: ellenorzes/fo-ellenorzes.json. Öt nézetszélesség: 320, 390, 768, 1024, 1440 px. További két futás 200%-os szövegmérettel: mobil és asztal. Ellenőrzött billentyűzetes ugrólink, menü/Escape, linkcélok, színek, űrlap és túlcsordulás.

A főoldal lezárása után következik az aloldalak tartalmi finomítása. A kért muhely.html még nem készül el ebben a körben; oda 4–6 változatos, tartalom alapján kiválasztott fotó kerülhet: portré, munkafolyamat, műhelyrészlet és kész tárgyak. Addig a főoldali Műhely hivatkozás működő #muhely célra mutat.

Az éles űrlap, adatkezelési tájékoztató, tételes képkreditek, végleges SEO, publikálás és az AI-használat leírása továbbra is külön lezárandó munka.

Favicon: images/logo/Agyagpad-favicon-transparent.svg, 256 px-es átlátszó PNG-tartalékkal; a korábbi WebP ikon is átlátszó változatra frissült. Az eredeti háttérrel rendelkező forrásfájlok megmaradnak, az oldal a háttér nélküli változatokat használja.

A műhelybolt blokk tartalmi és vizuális sorrendje szöveg, majd fotó: asztalon szöveg balra, fotó jobbra; mobilon szöveg felül és fotó alatta. A kép jobb oldali türkiz kerete és koronggyűrűi megmaradnak.
