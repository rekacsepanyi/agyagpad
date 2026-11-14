# Agyagpad – design system

Verzió: 4.10 · 2026. november 14.
Állapot: az Udvari műhely aktuális specifikációja. Kiindulás: a jóváhagyott 16527e0 változat; november 14-i tartalmi továbbfejlesztés, kártyaélménysorok, Dóra-számadatok és előkészített valódi űrlapküldés. A korábbi türkiz gombos irányt ez a dokumentum felülírja.

## Források és hatókör

- A felhasználó legutóbbi főoldali módosításai az elsődlegesek.
- A meglévő brief és a szovegek.md rögzíti a projektadatokat; az eredeti arculat, Figma és iskolai méretskála adja az alapokat.
- Aktuális főoldal: koncepcio-1-udvari-muhely.html. Az index.html külön koncepcióválasztó, a főoldal fejlécéből nincs hozzá hivatkozás.
- Megjelenési forrás: assets/udvari-muhely.css. A betűfájlok és a licencek az assets/fonts mappában elérhetők.
- A Tanfolyamok aloldal a főoldali arculatra épülő önálló elrendezést kapott. Az aloldali felülírásokat az assets/tanfolyamok.css tartalmazza; a főoldal HTML-je és közös CSS-e változatlan.

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
| --teal | #1B4D4F | Kicker feliratok, eltolt képkeretek, koronggyűrű-motívumok, logó bögrekiemelése, hero-idézet és a tudnivalóblokk háttere |

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
- A többi gomb nagybetűs megjelenése megmarad; a fejléc „Érdeklődöm” gombja mondatkezdő nagybetűs, normál betűközzel. Ez a szabály nem terjed át a kickerekre.
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
- A fejléc: átlátszó logó, Kezdőlap, Tanfolyamok, Műhely, Kapcsolat, majd jobb oldalt kiemelt „Érdeklődöm” CTA. A főoldalon #kapcsolat, a meglévő aloldalakon koncepcio-1-udvari-muhely.html#kapcsolat a cél. Koncepciók link nincs.
- A fejléc CTA a meglévő elsődleges gombot használja: terrakotta háttér, törtfehér felirat, kapszulaforma, sötétebb terrakotta hover és közös, 3 px grafit billentyűzetes fókusz. 1024 px alatt a lenyíló menü része, mobilon teljes szélességű. 1024–1199 px között kisebb logószélesség és navigációs térköz tartja szellősen a fejlécet.

## Programkártyák

Sorrend: normál kicker, programnév, rövid élményleírás, élménysor ikon mellett, Részletek és árak link. A főoldalon nincs konkrét ár.

- Korongozó kóstoló: 3 óra alkotás és kikapcsolódás; óraikon.
- Négyhetes kurzus: 4 hét, egymásra épülő alkalmakkal; naptárikon.
- Céges csapatépítő: Közös alkotás, egyeztetett időpontban; csoportikon.
- Az ikonok 24 px-esek, kitöltés nélkül, 1,5 px-es terrakotta vonallal, a meglévő ikonstílusban.
- Az élményszöveg grafit, Inter 600, 16 px. Nem kerül dobozba vagy kapszulába.
- Asztalon CSS subgrid közös sorai igazítják az élménysor és a link magasságát. Mobilon a szöveg természetesen törik, nincs rögzített magasság vagy levágás.
- A részletlinkek a tanfolyamok.html megfelelő horgonyaira vezetnek. Az aloldalon megmarad a pontos alkalomszám és időtartam: a kurzus 4 × 2,5 órás.

## Gombok és űrlap

- Elsődleges: terrakotta háttér, törtfehér szöveg, 1 px grafit keret, 999 px kapszula. Hover: #8C4A27.
- A hero másodlagos gombja: átlátszó háttér, terrakotta felirat és keret; hover terrakotta háttér és törtfehér felirat (4,75:1). A többi meglévő másodlagos gomb grafit feliratú és keretű.
- Legalább 48 px magas kezelőelemek, több sorba törhető felirat, látható grafit fókusz.
- Név, e-mail és program kötelező; üzenet opcionális. Mezőcímkék külön láthatók, nem placeholderbe rejtve.
- Mező: törtfehér, grafit szöveg, 1 px grafit keret, 12 px sugár.
- A Netlify Forms küldési kódja elkészült, de a felhasználó kérésére az aktív fogadó később állítandó be. Az assets/form-config.js enabled értéke false; nincs konfiguráció nélküli POST vagy sikerjelzés. Valódi küldéskor csak pozitív HTTP-válasz után jelzünk sikert, hiba esetén minden adat megmarad. Részletek: tervezes/urlap-beallitas.md.
- Hibaüzenet szöveggel és aria-invalid kapcsolattal jelenik meg; az adatok megmaradnak.

## Tudnivalóblokk

Közvetlenül a három programkártya alatt, a tanfolyamos szakasz közös tartalmi konténerében helyezkedik el. Sötéttürkiz (#1B4D4F) háttér, törtfehér (#F9F8F6) cím, szöveg és egységes, 24 px-es kör-pipa ikonok. A kártyák együttes szélességéhez igazodik; belső tere mobilon 24 px, asztalon 32 px. A korábbi különálló blokk megszűnt. A törtfehér/türkiz kontraszt 8,91:1. 768 px-től két oszlop, mobilon egy. A hat pont rövid kiemelt állítással kezdődik, és megőrzi az előképzettség, anyagok/égetések, hatfős csoport, két héttel későbbi átvétel, végeredmény-korlátok és időpont-egyeztetés információját. A dekoratív ikonok aria-hidden jelölésűek. A végeredményről szóló pontban a „vagy hibátlan végeredményt nem garantálunk.” új sorban kezdődik.

## Dóra bemutatkozása és számadatok

Az idővonal kikerült. Az új bemutatkozásban 2009-es tanulási kezdet és népi iparművész megjelölés szerepel. Alatta: 15+ év szakmai tapasztalat, 1500+ tanítvány, 7000+ alkotás. Ezek a felhasználó által megadott új fiktív karakteradatok, nem valós személy ellenőrzött referenciái.

A számadatok szemantikus dl-listában, három oszlopban, levegős térközzel jelennek meg. Merriweather terrakotta számok és kisebb grafit, félkövér címkék. A szövegek nagyításnál is törhetnek, nem vágódnak le.

## Képek, logó és dekoráció

- Átlátszó logó: images/logo/Agyagpad-logo-transparent.svg; PNG-párja ugyanott. Nincs külön doboz, keret vagy színezett háttér.
- Tartalmi fotók: images/webp, reszponzív srcset/sizes, 16 px lekerekítés, helyes méretattribútumok és tartalomhoz illő alt.
- A hero képaláírása idézőjeles és dőlt: „Az alkotás az első mozdulattal kezdődik.” A fotó bal alsó részére helyezett törtfehér kártyán jelenik meg, 15 px-es türkiz Merriweather szöveggel, bevezető díszvonal nélkül, homokszínű kerettel, 4/36/4/4 px-es aszimmetrikus lekerekítéssel és a meglévő grafit 10%-os átlátszóságából képzett finom árnyékkal. Mobilon a kártya a fotó szélein belül marad.
- Hero: agyagpad-hero.jpg alapján optimalizált agyagpad-hero WebP, agyagedényt formáló kezek; 480, 800, 1200 és 1600 px széles változatok. A bemutatkozásban a csatolt hero.jpg álló portréjának hero WebP-készlete, eredeti, közel 2:3 képaránnyal, nyújtás és kényszerített kivágás nélkül, legfeljebb 360 px szélességgel; a hangsúlyos portré nem ismétlődik.
- A főoldali műhelyboltnál egyetlen fotó marad: muhelybolt (kész bögrék), 4:3 képaránnyal. A korábbi második, vázás kép lekerült; az eredeti fájlt megőrizzük. A tárgyak bemutatásáról szóló második mondat külön bekezdés.
- Kevés, türkiz eltolt képkeret és koronggyűrű-vonalgrafika. A hero keretvonala 1,5 px; a bemutatkozó és műhelybolti képé 2 px, 16 px-es asztali és 8 px-es mobilos jobb oldali eltolással. Köríves motívum a műhelyszakaszon belül csak a portré jobb felső részén marad; a műhelybolti képről eltávolítottuk. A portrénál a fotó mögül három gyűrű látszik ki: asztalon 148 × 99 px, mobilon 112 × 75 px, 1,75 px-es vonallal. Nincs botanikai minta, erős háttértextúra vagy folyamatos animáció.
- A nyitókép eager, a lejjebb lévő képek lazy betöltésűek; eredeti fotók megőrizve.

## Közös tájékoztatás

A bemutatott műhelybolt nyitvatartása csütörtök–vasárnap 10:00–18:00. A tanfolyamok ettől külön programbeosztásúak. A cím 2000 Szentendre, Agyagliget köz 4., egyértelműen kitalált, nem látogatható bemutatócímként feltüntetve. A vizsgamunka- és fikciójelzés a láblécben megmarad. Nincs kitalált működő telefon, e-mail vagy közösségi profil.

## Ellenőrzés és későbbi feladatok

Aktuális teszt: eszkozok/fooldal-ellenorzes.cjs; eredmény: ellenorzes/fo-ellenorzes.json. Öt nézetszélesség: 320, 390, 768, 1024, 1440 px. További két futás 200%-os szövegmérettel: mobil és asztal. Ellenőrzött billentyűzetes ugrólink, menü/Escape, linkcélok, színek, űrlap és túlcsordulás.

A muhely.html elkészült, a főoldali terrakotta gomb a #keramiak galériához vezet. Négy WebP-kép mutat kész bögréket, készülő vázát, korongozást és műhelyeszközöket. A feliratok megkülönböztetik a kész tárgyat és a munkafázist.

Az éles űrlap, adatkezelési tájékoztató, tételes képkreditek, végleges SEO, publikálás továbbra is külön lezárandó munka. Az AI-használat eddigi folyamata a beadas/AI-hasznalat.md fájlban elkészült; élesítés után a tényleges publikálási lépéssel frissítendő.

Favicon: images/logo/Agyagpad-favicon-transparent.svg, 256 px-es átlátszó PNG-tartalékkal; a korábbi WebP ikon is átlátszó változatra frissült. Az eredeti háttérrel rendelkező forrásfájlok megmaradnak, az oldal a háttér nélküli változatokat használja.

A műhelybolt blokk tartalmi és vizuális sorrendje szöveg, majd fotó: asztalon szöveg balra, fotó jobbra; mobilon szöveg felül és fotó alatta. A kép jobb oldali türkiz eltolt kerete megmarad, koronggyűrűk nélkül.

## November 12-i szakaszritmus

A Tanfolyamok szakasz bal felső, a Műhely szakasz jobb felső, a Kapcsolat szakasz bal felső sarka lekerekített. A sugár clamp(2rem, 6vw, 5rem), normál asztalon legfeljebb 80 px. A meglévő törtfehér és homok színek rétegzett szakaszhátterei teszik láthatóvá a sarkokat. Nincs új szín, és a szakaszok nem vágják le a képmotívumokat vagy a fókuszjelzéseket.

## November 14-i szöveg és közös elemek

A hero főcíme „Alkoss agyagból, bontakozz ki Szentendrén.”, hosszabb, kezdőbarát bevezetővel. A kapcsolat szakaszban nincs állandó demó- vagy prototípusmegjegyzés; a foglalás nélküli érdeklődés tájékoztatása megmarad. A lábléc minden aktív oldalon az új közös szöveget, négy navigációs linket és a rövid fiktív vizsgamunka-jelzést használja. Az „Írj az űrlapon” link kikerült.

A bemutatkozás a három számadattal zárul, a két bekezdés után 24 px (1,5rem) térközzel; külön bemutatkozó CTA nincs. A bemutatkozó és a műhelybolt blokk közötti távolság asztalon 80 px (5rem), mobilon 48 px (3rem). A portré eredeti arányú, legfeljebb 360 px széles, természetes magassággal. A köríves motívum csak a portrénál marad, a műhelybolti képnél csak az eltolt keret. A Felfedezem a kerámiákat gomb megmarad, nyíl nélkül, muhely.html#keramiak céllal.

## Tanfolyamok aloldal – november 14-i kiegészítés

A színpaletta és a betűkészlet változatlan. A részletes terv a tanfolyamok-terv.md fájlban található. A hero fotó 4:5 arányú, legfeljebb 464 px széles, felülre igazított képkivágással; az arc, a két kéz és az edény látható. A hero3.jpg szereplője résztvevői illusztráció, nem Dóra. A türkiz keret és körívek a főoldali stílust követik.

A kompakt programválasztó asztalon három oszlop, mobilon egy. A részletes programok 900 px-től váltakozó kép–szöveg sorrendű, kétoszlopos rácsok, kisebb kijelzőn egy oszlopba rendeződnek. Szakasztérköz 48 px, 900 px-től 64 px; kép–szöveg köz 32/48 px. A gyakorlati adatok 24 px-es, terrakotta, 1,5 vonalvastagságú meglévő ikonokat kapnak. Gombok: meglévő terrakotta alapstílus, a programgombokon mondatkezdő nagybetű.

A türkiz tudnivalóblokk a főoldali hat pontot és ikonokat használja; belső térköz 24/32 px, mobilon egy, asztalon két oszlop. A helyi érdeklődési szakasz és műhelykártya a főoldal azonos komponense.

### Tanfolyamok finomítása

A programválasztó törtfehér, kontúr nélküli, 24 px belső térközű navigációs kártyákat használ bézs háttéren, a meglévő terrakotta ikonokkal és nyíllal. Hover: terrakotta belső keret; billentyűzetes fókusz: a közös grafit körvonal. A programválasztó és a folyamat címe ugyanazt a H2-méretet használja. A programok 900 px-től két egyforma szélességű oszlopot használnak 48 px oszlopközzel, felülre igazított kép–szöveggel. Minden programfotó 4:3 arányú, egyedi tárgypozícióval. Mobilon kép után szöveg következik.

Az ár és gomb közös lezáró egység: 24–28 px-es, 600-as ár, kisebb Inter magyarázó sor; a gomb előtt 18 px térköz. A közös űrlap adatkezelési mondata és a küldés gomb között minden érintett oldalon 24 px térköz van. A főoldalon csak ez az űrlaptérköz változott.

### Programválasztó és programelrendezés – aktuális pontosítás

A programválasztó 16 px belső térközű, minimum-magasság nélküli kártyákat használ. Balra saját készítésű, dekoratív bögre-, váza- és tányér-SVG (32 px, terrakotta, 1,5-ös vonal, kitöltés nélkül, lekerekített végek), középen a két szövegsor, jobbra navigációs nyíl. A személyes felvezetés 15 px/400, a programnév 18 px/600. A kerámiaikon csak hangulati jelölés, nem garantált tanfolyami eredmény. Az adatlistákban a korábbi óra-, csoport- és naptárikon marad.

A részletes programok fotókerete most 6:5 alaparányú. Asztalon az időtartam és csoport két oszlopba kerül, az időpont teljes szélességre. A céges adatlista természetes, kétpontos felsorolás marad üres helyek nélkül. Az ár és a gomb flex zárósorba kerül, lehetőség szerint ár balra, gomb jobbra, 24 px vízszintes köz; szűkebb helyen 18 px függőleges köz. A szöveg rugalmas, a zárósor alulra igazodik; magasabb tartalomnál a fotókeret is nőhet. Mobilon a 6:5 kép önálló magasságú, kép után szöveg és CTA következik. Ez felülírja a korábbi 4:3 képarányt és a minden nézetben egymás alatti ár–gomb elrendezést.

### Aktuális programbemutatók: gyakorlati adatok és díjazás

A program szövegsorrendje: kicker, cím, élményleírás, közös adatrész, majd külön balra igazított CTA. Az adatrész bal oszlopában egymás alatt vannak a gyakorlati adatok a megmaradó óra-, csoport- és naptárikonokkal; jobb oldalon a díjazás és magyarázata. Az ár és a Díjazás felirat egyaránt 20 px/600, Merriweather. A magyarázat 15 px-es Inter. A teljes adatrész után 18 px térközzel jön a gomb. Az előző ár–gomb zárósoros elrendezést ez felülírja; nincs automatikus alsó igazítás vagy kitöltő üres tér.

A cikkcakkos, kétoszlopos programelrendezés 1200 px-től jelenik meg, egyforma oszlopszélességgel és 48 px közzel. Ez alatt kép után szöveg következik; a kép legfeljebb 576 px, a szöveg legfeljebb 680 px széles, középre rendezett. Mindhárom programfotó önálló 6:5 képarányú, a szöveg magassága nem nyújtja meg. Az adatrész a saját szövegoszlop legalább 28 rem-es szélességénél két oszlop, alatta egy; nagyított betűnél ehhez is alkalmazkodik. A programválasztó ikonrendje most tányér, váza, bögre. A többi szakasz és a főoldal változatlan.

### Aktuális gombigazítás és árhierarchia

Asztalon (1200 px-től) a program szövegoszlopa flexoszlop, a CTA a fennmaradó térrel alulra kerül. A kóstoló és a céges program gombja a jobb szélre, a fordított kurzusblokk gombja balra igazodik, így mindig a fotótól távolabbi szélen zár. A grid sorához a fotó és a szöveg egyaránt nyúlik; a 6:5 alapkeret magasabb szöveghez alkalmazkodhat. Az adatrész után legalább 18 px marad, külön programonkénti margó nélkül. Ez felülírja az előző, minden nézetben balra igazított, fotótól független gombelrendezést.

A díjazás 22 px/600, a gyakorlati adatértékek 16 px-esek; ár mellett nincs ikon. Az időpont Szerdánként, 17:00–19:30; a leírás rögzíti a négy egymást követő hetet. 1200 px alatt nincs alsó fotóigazítás, a gomb a tartalom után balra, a feliratához igazodó szélességgel jelenik meg.
