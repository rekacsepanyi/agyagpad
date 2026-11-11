# Agyagpad – design system

Verzió: 2.0 · 2026. november 11.  
Állapot: rögzített Agyagpad-specifikáció, a felhasználó által megadott méretezési alap és a javított Figma-tábla alapján.

## 1. Források és az adatok státusza

| Forrás | Szerepe |
| --- | --- |
| `C:/Users/jolci/Documents/ChatGPT/ElizaBeauty - AI Webdesign/forrasok/design-system.md` | Méretskála, 8 px-es térközrendszer és komponensformák forrása; csak ezek kerülnek át, az Eliza-arculat nem |
| `agyagpad-projektbrief.md` | Célcsoport, célok, tartalom, működés |
| `C:/Users/jolci/Desktop/Agyagpad-színkódok.docx` | Az öt pontos HEX-kód és eredeti szerepük; kiolvasva |
| `tervezes/arculat/Arculati-tabla.png` | Friss arculati referencia, betűcsaládok és képi hangulat |
| `images/logo/Agyagpad-logo-jo.svg` | Elsődleges, bögrés logó; a vázaemblémás korábbi irányt felváltja |
| `images/logo/Agyagpad-Favicon-jo.svg` | Kapcsolódó bögrés favicon forrása |
| `tervezes/oldalterkep-es-drotvaz.md` és `tervezes/drotvaz/02-drotvaz.png` | Négy szekció és reszponzív tartalmi sorrend |
| [Figma-terv](https://www.figma.com/design/JBJUoyS0OdRW9q4lMgWJhc/Agyagpad---designterv?node-id=0-1) | Közvetlen Figma-kapcsolattal beolvasva: Page 1 (0:1), arculati tábla (2:25); a tipográfiai előírások és a minták tényleges szövegbeállításai is ellenőrizve |

**Rögzített döntési sorrend:** az Agyagpad briefje adja a hangulatot és a tartalmi célokat; a felhasználó adja az öt színt, a Merriweather–Inter párost és a bögrés logót. A javított Figma-tábla az Agyagpad asztali tipográfiai alapja. Az Eliza Beauty dokumentumból a mobilméreteket, térközrendszert és komponensformákat vesszük át, az Agyagpadhoz igazított szabályokkal.

Az alábbi méretek az aktuális megvalósítási előírások, nem függőben lévő javaslatok. Ahol a forrásból módosítottunk, az okot rögzítjük. A valódi oldal felépítése után a tördelést és a képkivágásokat vizuálisan ellenőrizni kell; ez nem jelenti a méretrendszer hiányát.

## 2. Arculati alapelvek

- Meleg, földközeli, kézműves, közvetlen; a szíves bögre adja a játékos részletet.
- Levegős elrendezés, anyagközeli fotók, jól olvasható magyar szövegek.
- A terrakotta irányítja a figyelmet az érdeklődésre; a sötét szöveg és a törtfehér háttér biztosítja a nyugalmat.
- A kézműves hangulatot a meglévő logó, a képek és a betűk adják. Nincs szükség minden felületre textúrára, szabálytalan keretre vagy dekorációra.
- Nincs külön GYIK, blog, webshop vagy automatikus foglalás. A terv számozott szekciójelölései tervezési címkék, az éles oldalon nem kötelező megjeleníteni őket.

## 3. Színrendszer – pontos forrásadatok

| Token | HEX | Szerep |
| --- | --- | --- |
| `--color-bg` | `#F9F8F6` | Meleg törtfehér fő háttér; elsődleges gomb felirata |
| `--color-text` | `#2D2A26` | Törzsszöveg, címsorok, címkék, ikonok |
| `--color-primary` | `#A65B32` | Terrakotta CTA, hangsúlyos hivatkozás, logó |
| `--color-sand` | `#D9C3B0` | Homokszínű kiegészítő felület, dekoratív elválasztó |
| `--color-primary-hover` | `#8C4A27` | Interaktív elem hover és aktív állapota |

### Használat és ellenőrzött kontraszt

Az arányok a dokumentumban rögzített HEX-értékekből, sRGB relatív fénysűrűséggel számítva, két tizedesre kerekítve:

| Előtér / háttér | Kontraszt | Használat |
| --- | --- | --- |
| Sötét / törtfehér | 13,45:1 | Alap szöveg és címsor |
| Törtfehér / terrakotta | 4,75:1 | Elsődleges gomb normál felirata |
| Törtfehér / sötét terrakotta | 6,33:1 | Gomb hover felirata |
| Terrakotta / törtfehér | 4,75:1 | Hivatkozás, rövid kiemelés |
| Sötét / homok | 8,42:1 | Kártya és információs blokk szövege |
| Terrakotta / homok | 2,97:1 | Szöveghez és lényeges ikonhoz ne használjuk |
| Homok / törtfehér | 1,60:1 | Dekorációhoz jó; önálló mezőhatárnak nem elég erős |

Homokszínű felületen a szöveg és az aláhúzott link is sötét legyen. Az elsődleges terrakotta gombot törtfehér felületre helyezzük; homokszínű környezetben kapjon törtfehér befoglalót vagy sötét keretet. Nem csökkentjük a gombszöveg átlátszatlanságát. Fotóra közvetlenül nem helyezünk szöveget: külön, egyszínű szövegblokkot használunk.

Hiba és siker jelzéséhez ebben a változatban nem vezetünk be új márkaszínt: sötét szöveg, egyértelmű ikon és állapotszöveg jelöl. A hiba nem pusztán színváltozás.

## 4. Tipográfia

Merriweather a címsorok és az alcím betűje; Inter a törzsszövegé és a kezelőelemeké. A logó betűrajza változatlan.

| Szerep | Betű / súly | Asztali méret / sorköz | Mobil méret / sorköz | Eredet, finomítás |
| --- | --- | --- | --- | --- |
| H1 | Merriweather 700 | 60 / 78 px | 40 / 52 px | Asztal: Agyagpad; mobilméret: Eliza, Agyagpad 130% sorközzel |
| H2 | Merriweather 700 | 40 / 52 px | 32 / 41,6 px | Asztal: Agyagpad; mobilméret: Eliza, 130% sorközzel |
| H3 | Merriweather 700 | 28 / 36,4 px | 24 / 31,2 px | Mindkét méretskálával egyezik; Agyagpad-sorköz |
| H4, ha szükséges | Merriweather 600 | 24 / 31,2 px | 20 / 26 px | Agyagpad; mobil adaptáció |
| Alcím / kiemelt bevezető | Merriweather 600 | 20 / 26 px | 18 / 27 px | Javított Agyagpad-Figma; mobil adaptáció |
| Törzsszöveg | Inter 400 | 18 / 28,8 px | 16 / 25,6 px | Méret: Eliza; 160% sorköz: Agyagpad |
| Kis szöveg | Inter 400 | 15 / 22,5 px | 14 / 21 px | Eliza |
| Gomb, nagybetűs | Inter 600 | 15 / 19,5 px | 15 / 19,5 px | Eliza-méret; javított Agyagpad-súly és 130% sorköz |
| Navigáció | Inter 600 | 16 / 24 px | 16 / 24 px | Webes alkalmazás |
| Ár, mezőcímke | Inter 600 | 16 / 24 px | 16 / 24 px | Webes alkalmazás |
| Opcionális rövid szakaszcímke | Inter 600 | 14 / 19,6 px | 13 / 18,2 px | Eliza; csak ha tartalmi szerepe van |

**Indokolt finomítások:** az Eliza 64/44 px-es asztali H1/H2 értékei helyett az Agyagpad saját 60/40 px-es méretei maradnak. A Merriweatherhez a saját Figma 130%-os címsorsorközét használjuk az Eliza tömörebb 110–120%-a helyett. A törzsszöveg desktopon 18 px-re nő; a 160%-os sorköz megmarad. A javított Figma törzsszöveg-felirata Inter SemiBold 16/160%; az itt rögzített hosszú bekezdések súlya tudatosan Regular 400, hogy a címkék és kiemelések 600-as súlya elkülönüljön. A rövid alcím és a gomb SemiBold 600.

- Alapméret 16 px; a méretek rem egységre váltva követik a böngésző beállításait.
- Egy H1; a fő szekciók H2, a programok H3 címet kapnak.
- Balra zárt szöveg, sorkizárás nélkül. Folyó szöveg legfeljebb 680 px, és legfeljebb 65ch széles; a kettő közül a kisebb érvényesül.
- Normál betűköz a címsorokon és a bekezdéseken. A nagybetűs gomb és az opcionális rövid címke 0,04em ritkítást kap: az Eliza 0,08em értékét a hosszú magyar CTA miatt csökkentjük.
- A gomb forrásszövege mondatkezdő írásmódú, a nagybetűs megjelenést CSS biztosítja. A navigáció és a bekezdés nem nagybetűs.
- A mobilértékek 767 px-ig, az asztali értékek 1024 px-től érvényesek; közte a H1/H2 folytonosan növekedhet. Kisebb képernyőn a több soros címsor megengedett; nem vágjuk le.
- Helyi WOFF2, magyar ő/ű készlettel, font-display: swap. Szükséges súlyok: Merriweather 600/700, Inter 400/600. Tartalékok: Georgia, serif és Arial, sans-serif.
- A betűfájlok beszerzése még hátravan; a család, súly és méret már meghatározott.

## 5. Logó és favicon

### Meglévő fájlok

- Logó: `images/logo/Agyagpad-logo-jo.svg` és `images/logo/Agyagpad-logo.png`.
- Favicon: `images/logo/Agyagpad-Favicon-jo.svg` és `images/logo/Agyagpad-Favicon.png`.
- Elsődleges az új, szíves bögrés változat. A régi vázaemblémát és az arculati táblán látható egyszerű szöveges próbákat nem keverjük hozzá.

### Webes alkalmazási szabályok – javaslat

- A logó arányai, színei és felirata megmaradnak. Nyújtás, forgatás, utólagos árnyék vagy újraszedett felirat nincs.
- Törtfehér vagy a tényleges logóháttérhez igazított világos befoglaló. Átlátszó hátteret nem feltételezünk: az exportok beágyazott képet is tartalmaznak.
- A jelenlegi SVG-k 2000 × 2000 méretű, négyzetes exportok, `viewBox="0 0 1500 1499.999933"` értékkel; mindkettőben van egy `<image>` elem. Nem tekintjük őket teljes egészében tiszta vektoros exportnak.
- Webes példányon szűkíteni kell a fölösleges vásznat. Az eredetiket megőrizzük; a fejlécben nem a teljes négyzetes fájlt kicsinyítjük le.
- A vágott teljes logó javasolt szélessége asztalon 220–260 px, mobilon 180–210 px; legfeljebb a rendelkezésre álló szélesség 65%-a. Méretét a „Kerámiaműhely” alcím tényleges olvashatósága alapján véglegesítjük.
- Védőtávolság: legalább a bögre rajzolt magasságának negyede, minden oldalon. Ez a logón kívüli tér, nem a fölösleges exportvászon.
- A honlap tetejére vezető logóhivatkozás hozzáférhető neve: „Agyagpad – kezdőlap”. Egyetlen név legyen, ne ismétlődő kép- és linkfelirat.
- Faviconhoz a bögrejel önálló, szorosan vágott változata szükséges. A 16 × 16 és 32 × 32 px olvashatóság, illetve egy 180 × 180 px érintőikon külön ellenőrizendő. A jelenlegi nagy export nem bizonyítja a kis méretű megfelelést.

## 6. Rács, méretezés, térközök

Alap: az Eliza dokumentum 8 px-es térközrendszere. A rögzített Agyagpad-értékek:

| Elem | Érték |
| --- | --- |
| Tartalom maximális szélessége | 1200 px |
| Folyó szöveg maximális szélessége | min(680 px, 65ch) |
| Oldalsó belső tér | Mobil 20 px; tablet 32 px; asztal 48 px |
| Térközskála | 8, 16, 24, 32, 48, 64, 96, 128 px |
| Szekció függőleges belső tere | Mobil/tablet 64 px; asztal 96 px |
| Nyitó szekció asztali függőleges belső tere | 128 px; mobilon 64 px |
| Kétoszlopos blokk oszlopköze | Mobil 24 px; tablet 32 px; asztal 48 px |
| Tanfolyamkártyák közti tér | Mobil 24 px; asztal 32 px |
| Címsor → bevezető | 16 px |
| Szekcióbevezető → tartalom | Mobil 32 px; asztal 48 px |
| Bekezdések közti tér | 16 px |
| Szöveg → CTA | 32 px |
| Egymás melletti CTA-k közti tér | 16 px |
| Kártya belső tere | Mobil 24 px; asztal 32 px |
| Űrlapmezők csoportjai közti tér | 24 px |
| Mezőcímke → mező | 8 px |
| Gomb lekerekítése | 999 px, kapszula |
| Űrlapmező lekerekítése | 12 px |
| Kártya és fotó lekerekítése | 16 px |
| Kezelőelem minimális magassága | 48 px |

A 20 px-es mobil oldalmargó a forrásban is szereplő tudatos kivétel a 8 px-es térközrendszerből. A tipográfia, vonalvastagság és sugár nem térköz, nem kell 8 többszörösének lennie. Egymás mellé kerülő szekcióknál a fenti belső tereket használjuk, nem adunk hozzájuk még egy külön, azonos méretű külső margót.

Töréspontok: 0–767 px mobil; 768–1023 px tablet; 1024 px-től asztal. 320 px szélességen sem lehet vízszintes görgetés. A töréspontokat az Eliza nem rögzíti: ezek az Agyagpad megvalósítási szabályai.

- Nyitó szekció: asztalon szöveg és kép két oszlopban; 1024 px alatt szöveg, két CTA, majd kép egy oszlopban.
- Tanfolyamok: 1024 px-től három azonos szélességű kártya; alatta egy oszlop. A hosszú címek és CTA-k törhetnek.
- Műhely: asztalon kép és szöveg; alatta kép, majd szöveg. Dóra története ebben a szekcióban marad.
- Kapcsolat: asztalon űrlap és tudnivalók; mobilon először űrlap, utána cím és információ. Név és e-mail 768 px alatt külön sor.
- Lábléc: mobilon egy oszlop; desktopon a tartalmak csoportosítva, 32 px-es közökkel.

## 7. Komponensek és állapotok – rögzített szabályok

### Fejléc és navigáció

Világos háttér, bal oldali logó; asztalon jobb oldalt Kezdőlap, Tanfolyamok, Műhely, Kapcsolat hivatkozások. Mobil/tablet nézetben 1024 px alatt „Menü” gomb, látható szöveggel és ikonnal. Javasolt, nem rögzített fejléc, hogy ne takarja a tartalmat.

A mobil menü a fejléc alatt nyílik; nem teljes képernyős modal. A gomb `aria-expanded` és `aria-controls` állapota követi a nyitást. Escape bezárja, és a fókusz a menügombra kerül. Hivatkozás választásakor bezárul. JavaScript nélkül is hozzáférhetőek maradnak a navigációs linkek.

### Elsődleges CTA

- Normál: terrakotta háttér, törtfehér szöveg, 1 px terrakotta keret, 999 px kapszulaforma.
- Felirat: Inter SemiBold 600, 15 px, 130% sorköz, nagybetű, 0,04em ritkítás. A súly a javított Figma, a méret az Eliza skálája. A hosszú magyar felirat több sorba törhet.
- Belső tér: asztalon 16 px függőlegesen és 32 px vízszintesen az Eliza alapján; mobilon és tanfolyamkártyán 16 × 24 px a hosszú CTA miatt. A gomb legalább 48 px magas, a tényleges szöveg és padding miatt egysoros formában körülbelül 54 px; több sorral nőhet.
- Hover és lenyomott állapot: sötét terrakotta; a lenyomást enyhe belső keret is jelezheti. Nincs ugráló méret vagy elmozdítás.
- Fókusz: 3 px sötét kontúr, 3 px törtfehér elválasztóval. Nem támaszkodik kizárólag színváltásra.
- Küldés: „Küldés…” szöveg, foglaltságjelzés, ismételt beküldés blokkolása.
- Letiltott gomb: homok háttér, sötét szöveg, egyértelmű ok/szöveg; nem csökkentett átlátszatlanság.
- Mobilon teljes szélességű; asztalon tartalomhoz igazodó. Nem rögzített szélességbe préseljük a magyar feliratot.

Pontos fő CTA: **„Érdeklődöm a tanfolyamról”**. Nyitó szekcióból az űrlaphoz vezet; kártyáról a kapcsolódó programot előre kiválasztja. Navigációra hivatkozást, beküldésre gombot használunk.

### Másodlagos CTA és szöveges link

Másodlagos CTA: **„Megnézem a műhelyt”**. Átlátszó háttér, terrakotta szöveg és 1 px terrakotta keret, az Eliza másodlagos gombjának mintájára. Hoverben terrakotta háttér és törtfehér szöveg. Homok felületen a normál szöveg és keret sötét, a kontraszt megőrzéséért. Ugyanaz a méret, fókusz és lekerekítés, mint az elsődleges gombnál.

Szöveges hivatkozás: törtfehéren terrakotta és aláhúzott; homokszínű felületen sötét és aláhúzott. Hoverben az aláhúzás vastagodik. A fókusz jól látható kontúr.

### Tanfolyamkártya

Törtfehér felület, 1 px homokszínű dekoratív keret, 16 px sugár az Eliza kártyaszabálya szerint. A kártya nem teljes egészében kattintható: külön CTA a vezérlő. Alapállapotban nincs árnyék, hoverben nem emelkedik.

Sorrend: H3 programnév → rövid leírás → időtartam → heti időbeosztás → ár és egység → CTA. Az árnál nem maradhat el a „/ fő”, illetve „a teljes kurzusra” jelentés. Asztalon a CTA-k a kártyák aljára igazodnak, de a tartalom soha nem vágódik le. A közös részvételi tudnivalók a kártyák alatt egyszer szerepelnek.

### Űrlap

- Név, e-mail, program: kötelező; üzenet: opcionális. A csillag magyarázata az űrlap előtt jelenjen meg.
- Címke minden mező felett, Inter 600; a placeholder nem helyettesíti a címkét.
- Mező: törtfehér háttér, sötét szöveg, 1 px sötét keret, 12 px sugár és 16 px belső tér. A sugár az Eliza komponensszabálya; a keret az Agyagpad sötét színére módosított. A sötét keret biztosítja a homokszínűnél erősebb láthatóságot.
- Mezőmagasság legalább 48 px; üzenetmező legalább 144 px, függőlegesen átméretezhető.
- Fókusz: 3 px sötét terrakotta kontúr, 3 px törtfehér elválasztóval; a mező nem változtat méretet.
- Hiba: 2 px sötét keret és „Hiba:” kezdetű segítő szöveg, `aria-invalid`, programozott kapcsolat a mezővel. Példák: „Add meg a neved.”, „Adj meg egy érvényes e-mail-címet.”, „Válassz programot.”
- Programlista: a három program és „Ajándékozás / egyéb érdeklődés”. Kezdetben „Válassz programot”; a kártyáról érkezés kiválaszt, de a választás módosítható.
- Gomb: **„Érdeklődés elküldése”**.
- Beküldés előtt adatkezelési hivatkozás, az olvasási sorrend részeként.
- Siker: sötét szövegű, keretezett visszajelzés, képernyőolvasónak is jelezve: „Köszönjük az érdeklődést! Az üzenetet megkaptuk. A beküldés nem jelent helyfoglalást.” Csak valóban sikeres fogadás után.
- Hálózati hiba: „Az üzenet nem ment el. Próbáld újra.” A mezők tartalma megmarad. Hiba esetén nem ürül ki az űrlap.

### Lábléc

Homok háttér és sötét szöveg; az adatkezelési link aláhúzott. Megjelenő cím: **2000 Szentendre, Agyagliget köz 4.**, közvetlen mellette **„Kitalált bemutatócím”**. Nincs hozzá valós helyszínt jelölő térképtű vagy útvonaltervezés.

Kötelező projektjelzés: „Az Agyagpad kitalált vállalkozás, az oldal bemutatóprojekt. Az űrlap nem foglal valódi tanfolyami helyet.” Képhasználati megjegyzés: „A fotók a kitalált műhely és szereplő illusztrációi.” A szükséges fotóforrás-jelölések helye itt biztosított; pontos szövegük a licencadatoktól függ.

## 8. Képek és ikonok

- Meglévő fotókönyvtár: `images/fotók/`. A könyvtár Freepik-jellegű és Unsplash-nevű fájlokat egyaránt tartalmaz; a konkrét forrást nem vezetjük le pusztán a fájlnévből.
- A felhasználó megerősítette a választott Freepik-fotók ingyenes felhasználhatóságát, és a stock portré használatát Dóra kitalált karakteréhez. A pontos forrás- és licencnyilvántartás még hiányzik.
- Fotóhangulat: természetes fény, agyag, kéz, korongozás, műhely és használati kerámiák. Nincs eltúlzott színfilter vagy újabb képre égetett szöveg.
- A fotók lekerekítése 16 px az Eliza alapján; a fotók színvilága az Agyagpad anyagközeli iránya. Nyitókép aránya 4:3; portré 4:5; műhely/kerámiakép 4:3. `object-fit: cover`; a fontos kézmozdulat és az arc ne vágódjon le. Képenkénti fókuszpont a végleges kiválasztás után.
- Webes képpéldányok: WebP vagy AVIF, a források megőrzésével; reszponzív méretváltozatok. Tájékoztató cél: nyitókép legfeljebb kb. 250 KB, további kép kb. 150 KB, amennyiben a minőség engedi.
- A nyitókép nem késleltetve töltődik; az oldal alatti képek igen. Minden kép kap szélességet/magasságot a betöltés közbeni elmozdulás elkerülésére.
- Tartalmi fotóhoz rövid, tényleges képtartalmat leíró magyar alt; dekorációhoz üres alt. A stockképet nem nevezzük dokumentált valós műhelyfotónak.
- UI-ikonok: egyszerű vonalas, 24 px-es, 1,5–2 px vonalvastagságú készlet; az ikon a közeli szöveg színét követi. Ikonkészlet: Lucide, normál vonalas változat, 24 px-es névleges mérettel és 2 px vonallal. Az Eliza példái közül ezt rögzítjük; a fájlok és licencpéldány beszerzése az építés feladata. A márka bögrerajzát nem használjuk általános kezelőikonként.

## 9. Mozgás, használhatóság

- Szín- és keretváltás: 150 ms ease-out. Nincs folyamatos animáció vagy automatikusan mozgó dekoráció.
- A csökkentett mozgás beállítását követjük; ilyenkor nincs animált görgetés vagy átmenet.
- Minden funkció használható billentyűzettel; a fókuszt nem rejtjük el. „Ugrás a tartalomra” hivatkozás fókuszkor látható.
- Menü, CTA, űrlapmező és link érintési területe lehetőleg legalább 44 × 44 px; a fő vezérlők 48 px magasak.
- 200%-os nagyításnál sincs szöveglevágás. A menü és a több soros CTA sem fedheti a szomszédos elemeket.
- A háttértextúra csak dekoratív képfelületen használható; szöveg és űrlap alatt egyszínű háttér marad.

## 10. CSS-alaptokenek

A rögzített szabályok kódolható alapja. A komponensek és a reszponzív viselkedés részleteit az előző szakaszok egészítik ki.

```css
:root {
  --color-bg: #F9F8F6;
  --color-text: #2D2A26;
  --color-primary: #A65B32;
  --color-sand: #D9C3B0;
  --color-primary-hover: #8C4A27;
  --font-heading: "Merriweather", Georgia, serif;
  --font-body: "Inter", Arial, sans-serif;
  --space-8: .5rem;
  --space-16: 1rem;
  --space-24: 1.5rem;
  --space-32: 2rem;
  --space-48: 3rem;
  --space-64: 4rem;
  --space-96: 6rem;
  --space-128: 8rem;
  --radius-button: 999px;
  --radius-field: .75rem;
  --radius-card: 1rem;
  --radius-image: 1rem;
  --content-max: 75rem;
  --prose-max: min(42.5rem, 65ch);
  --control-min-height: 3rem;
  --page-gutter: 1.25rem;
  --section-space: 4rem;
  --hero-space: 4rem;
  --text-h1: 2.5rem;
  --text-h2: 2rem;
  --text-h3: 1.5rem;
  --text-body: 1rem;
  --text-small: .875rem;
  --text-button: .9375rem;
  --line-heading: 1.3;
  --line-body: 1.6;
  --weight-body: 400;
  --weight-ui: 600;
  --weight-heading: 700;
  --button-tracking: .04em;
  --button-padding-inline: 1.5rem;
  --button-padding-block: 1rem;
  --motion-fast: 150ms;
}
@media (min-width: 48rem) {
  :root {
    --page-gutter: 2rem;
    --text-h1: clamp(2.5rem, calc(-1.25rem + 7.8125vw), 3.75rem);
    --text-h2: clamp(2rem, calc(.5rem + 3.125vw), 2.5rem);
  }
}
@media (min-width: 64rem) {
  :root {
    --page-gutter: 3rem;
    --section-space: 6rem;
    --hero-space: 8rem;
    --text-h1: 3.75rem;
    --text-h2: 2.5rem;
    --text-h3: 1.75rem;
    --text-body: 1.125rem;
    --text-small: .9375rem;
    --button-padding-inline: 2rem;
  }
}
/* A kártya CTA-ja asztalon is 24 px oldalsó belső térrel készül. */
@media (prefers-reduced-motion: reduce) {
  :root { --motion-fast: 0ms; }
}
```

## 11. Hiányzó vagy pontosításra váró adatok

| Adat | Jelenlegi helyzet | Következő teendő |
| --- | --- | --- |
| Mobil tipográfiai skála | Rögzítve az Eliza-alapból, Merriweather–Inter adaptációval | Nem hiányzó adat; a kész oldalon tördelési ellenőrzés szükséges |
| Webes komponensek és térközök | Rögzítve az Eliza-alapból, Agyagpad-kontraszttal és tartalommal | Nem hiányzó adat; alkalmazás és vizuális ellenőrzés szükséges |
| WOFF2 betűk és licencfájlok | Nincsenek helyben | Magyar karakteres készlet beszerzése az építéskor |
| Szűkre vágott logó, kis favicon | Nagy, beágyazott képet is tartalmazó exportok vannak | Webes másolatok és kis méretű ellenőrzés készítése |
| Végleges fotó-hozzárendelés | Képfájlok vannak, szekciónkénti végleges választás nincs | Nyitókép, Dóra-portré és műhelykép kiválasztása |
| Fotóforrások, licencadatok, kreditigény | Felhasználói megerősítés van, tételes nyilvántartás nincs | Forráslink és licencadat képenkénti rögzítése |
| Ikonfájlok | Lucide kijelölve; helyi fájlok még nincsenek | A szükséges ikonok és licencpéldány előkészítése |

Kapcsolódó tartalmi/működési nyitott pontok, amelyek nem akadályozzák az arculati rendszer használatát: az űrlap fogadó e-mail-címe, a tényleges üzemeltető adatai és az adatkezelési tájékoztató végleges tartalma. Dóra története és a megjelenő szövegek a szomszédos szovegek.md fájlban rögzítve. Nyilvános telefonszám és e-mail-cím nincs megadva: nem találunk ki működő elérhetőséget. A bemutatócím már rögzített projektadat.

## 12. Átadás előtti ellenőrzési lista

- [x] Pontos öt szín kiolvasva a megadott dokumentumból.
- [x] Fő színpárok kontrasztja számszerűen ellenőrizve.
- [x] A friss logó- és faviconfájlok azonosítva.
- [x] Eliza méretezési alap átvéve, az Agyagpadhoz igazított eltérések dokumentálva.
- [x] Figma-tábla tipográfiai feliratainak kiolvasása és átvezetése (H1–H4, alcím, törzsszöveg, gomb).
- [ ] Betűfájlok, vágott logó, favicon és végleges fotók előkészítése.
- [ ] Komponensek és állapotok ellenőrzése a megépített oldalon, mobilon és asztalon.

A kontrasztszámítás az itt megadott egyszínű párokra vonatkozik. Nem helyettesíti a később elkészülő oldal teljes vizuális és használhatósági ellenőrzését.

## 13. Forrásellenőrzés és lezárt finomítások

A 2026. november 11-én újra beolvasott Figma-tábla feliratai: H1 (2:40) Merriweather Bold 60/130%; H2 (2:45) Bold 40/130%; H3 (2:50) Bold 28/130%; H4 (2:55) SemiBold 24/130%; alcím (2:60) SemiBold 20/130%; törzsszöveg (2:63) Inter SemiBold 16/160%; gomb (2:66) Inter SemiBold 16/130%, nagybetűs.

A felhasználó javított SemiBold-előírásait az alcímnél és a gombnál átvettük. A hosszú törzsszövegnél az Eliza Regular 400 súlya és 18/16 px mérete a dokumentált finomítás. A gomb az Eliza 15 px-es méretét, kapszulaformáját és 16 × 32 px alap belső terét kapja; a Figma 130% sorközét megtartja. A hosszú magyar CTA miatt a betűritkítás 0,04em és mobilon/kártyán 24 px az oldalsó padding.

Az Eliza világos halvány mezőkeretét sötét Agyagpad-keretre cseréljük, mert a homok/törtfehér pár kontrasztja csak 1,60:1. Színt, betűcsaládot, szalonhangulatot vagy Eliza-logót nem emelünk át. Az eredeti referenciafájl és a Figma-terv változatlan marad.

A korábbi archivum/figma-arculat-ellenorzes.json a javítás előtti minták vizsgálatának történeti pillanatképe. Az aktuális tipográfiai döntések forrása a mostani Figma-előírás és e dokumentum 4. szakasza; a régi pillanatkép nem írja felül őket.

## Szövegek alkalmazása

A megjelenő szövegek aktuális forrása a szomszédos szovegek.md. A korábbi komponenspéldákkal való szöveges eltéréskor ezt kövessük, különösen az űrlap siker- és hibajelzéseinél. A megjelenési szabályok továbbra is e design-system szerintiek. Az Agyagpad egyoldalas: a teljes kapcsolati űrlap egyszer jelenik meg, a kiegészítő tájékoztató és visszajelző oldalak csak a közös fejlécet és láblécet öröklik.


