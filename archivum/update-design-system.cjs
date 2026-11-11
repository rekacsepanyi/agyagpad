const fs = require('fs');
const file = 'design-system.md';
let s = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
function section(start, end, replacement) {
  const a=s.indexOf(start), b=s.indexOf(end,a);
  if(a<0 || b<0) throw new Error('Hiányzó szakasz: '+start);
  s=s.slice(0,a)+replacement.trim()+'\n\n'+s.slice(b);
}
s=s.replace('Verzió: 1.2','Verzió: 2.0').replace('Állapot: Figma-arculati előírásokkal pontosított specifikáció, külön jelölt webes javaslatokkal.','Állapot: rögzített Agyagpad-specifikáció, a felhasználó által megadott méretezési alap és a javított Figma-tábla alapján.');
s=s.replace('| `agyagpad-projektbrief.md` |', '| `C:/Users/jolci/Documents/ChatGPT/ElizaBeauty - AI Webdesign/forrasok/design-system.md` | Méretskála, 8 px-es térközrendszer és komponensformák forrása; csak ezek kerülnek át, az Eliza-arculat nem |\n| `agyagpad-projektbrief.md` |');
section('**Forrásból rögzített:**','## 2.',`**Rögzített döntési sorrend:** az Agyagpad briefje adja a hangulatot és a tartalmi célokat; a felhasználó adja az öt színt, a Merriweather–Inter párost és a bögrés logót. A javított Figma-tábla az Agyagpad asztali tipográfiai alapja. Az Eliza Beauty dokumentumból a mobilméreteket, térközrendszert és komponensformákat vesszük át, az Agyagpadhoz igazított szabályokkal.

Az alábbi méretek az aktuális megvalósítási előírások, nem függőben lévő javaslatok. Ahol a forrásból módosítottunk, az okot rögzítjük. A valódi oldal felépítése után a tördelést és a képkivágásokat vizuálisan ellenőrizni kell; ez nem jelenti a méretrendszer hiányát.`);
section('## 4. Tipográfia','## 5.',`## 4. Tipográfia

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
`);
section('## 6. Rács,','## 7.',`## 6. Rács, méretezés, térközök

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
`);
s=s.replace('## 7. Komponensek és állapotok – webes javaslat','## 7. Komponensek és állapotok – rögzített szabályok');
s=s.replace('1 px terrakotta keret, 8 px sugár.','1 px terrakotta keret, 999 px kapszulaforma.');
s=s.replace('Felirat: Inter Bold 700, 16 px, 130% sorköz, nagybetűs megjelenítés a Figma-tábla szerint. A hosszú magyar felirat mobilon törhet.','Felirat: Inter SemiBold 600, 15 px, 130% sorköz, nagybetű, 0,04em ritkítás. A súly a javított Figma, a méret az Eliza skálája. A hosszú magyar felirat több sorba törhet.');
s=s.replace('Belső tér: 12 px függőlegesen, 24 px vízszintesen; legalább 48 px magas, a több soros felirattal nőhet.','Belső tér: asztalon 16 px függőlegesen és 32 px vízszintesen az Eliza alapján; mobilon és tanfolyamkártyán 16 × 24 px a hosszú CTA miatt. A gomb legalább 48 px magas, a tényleges szöveg és padding miatt egysoros formában körülbelül 54 px; több sorral nőhet.');
s=s.replace('Törtfehér háttér, sötét szöveg és 1 px sötét keret; hover homok háttér, változatlan sötét szöveg.', 'Átlátszó háttér, terrakotta szöveg és 1 px terrakotta keret, az Eliza másodlagos gombjának mintájára. Hoverben terrakotta háttér és törtfehér szöveg. Homok felületen a normál szöveg és keret sötét, a kontraszt megőrzéséért.');
s=s.replace('1 px homokszínű dekoratív keret, 12 px sugár.', '1 px homokszínű dekoratív keret, 16 px sugár az Eliza kártyaszabálya szerint.');
s=s.replace('üzenet: opcionális webes javaslat.', 'üzenet: opcionális.');
s=s.replace('1 px sötét keret, 8 px sugár, 12–16 px belső tér.', '1 px sötét keret, 12 px sugár és 16 px belső tér. A sugár az Eliza komponensszabálya; a keret az Agyagpad sötét színére módosított.');
s=s.replace('- Nyitókép javasolt aránya', '- A fotók lekerekítése 16 px az Eliza alapján; a fotók színvilága az Agyagpad anyagközeli iránya. Nyitókép aránya');
s=s.replace('Ikonkészlet még nincs kiválasztva.', 'Ikonkészlet: Lucide, normál vonalas változat, 24 px-es névleges mérettel és 2 px vonallal. Az Eliza példái közül ezt rögzítjük; a fájlok és licencpéldány beszerzése az építés feladata.');
section('## 10. CSS-alaptokenek','## 11.',`## 10. CSS-alaptokenek

A rögzített szabályok kódolható alapja. A komponensek és a reszponzív viselkedés részleteit az előző szakaszok egészítik ki.

\`\`\`css
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
\`\`\`
`);
s=s.replace('| Mobil tipográfiai skála | A Figma-tábla egyetlen méretsort ad; külön mobil előírás nem szerepel a beolvasott táblán | A dokumentum mobilos javaslatát a kész oldalon ellenőrizni |','| Mobil tipográfiai skála | Rögzítve az Eliza-alapból, Merriweather–Inter adaptációval | Nem hiányzó adat; a kész oldalon tördelési ellenőrzés szükséges |');
s=s.replace('| Webes komponensek és térközök | A beolvasott fájl moodboardot és arculati táblát tartalmaz, kész weboldal-komponensek nélkül | Az itt jelölt webes javaslatokat alkalmazni és vizuálisan ellenőrizni |','| Webes komponensek és térközök | Rögzítve az Eliza-alapból, Agyagpad-kontraszttal és tartalommal | Nem hiányzó adat; alkalmazás és vizuális ellenőrzés szükséges |');
s=s.replace('| Ikonkészlet | Nincs kijelölve | Következetes, jogtisztán használható készlet választása |','| Ikonfájlok | Lucide kijelölve; helyi fájlok még nincsenek | A szükséges ikonok és licencpéldány előkészítése |');
s=s.replace('- [x] Forrásadatok és javasolt webes értékek megkülönböztetve.','- [x] Eliza méretezési alap átvéve, az Agyagpadhoz igazított eltérések dokumentálva.');
const history=s.indexOf('### Figma-tipográfiai forráshivatkozások');
if(history<0)throw new Error('Hiányzó történeti szakasz');
s=s.slice(0,history)+`## 13. Forrásellenőrzés és lezárt finomítások

A 2026. november 11-én újra beolvasott Figma-tábla feliratai: H1 (2:40) Merriweather Bold 60/130%; H2 (2:45) Bold 40/130%; H3 (2:50) Bold 28/130%; H4 (2:55) SemiBold 24/130%; alcím (2:60) SemiBold 20/130%; törzsszöveg (2:63) Inter SemiBold 16/160%; gomb (2:66) Inter SemiBold 16/130%, nagybetűs.

A felhasználó javított SemiBold-előírásait az alcímnél és a gombnál átvettük. A hosszú törzsszövegnél az Eliza Regular 400 súlya és 18/16 px mérete a dokumentált finomítás. A gomb az Eliza 15 px-es méretét, kapszulaformáját és 16 × 32 px alap belső terét kapja; a Figma 130% sorközét megtartja. A hosszú magyar CTA miatt a betűritkítás 0,04em és mobilon/kártyán 24 px az oldalsó padding.

Az Eliza világos halvány mezőkeretét sötét Agyagpad-keretre cseréljük, mert a homok/törtfehér pár kontrasztja csak 1,60:1. Színt, betűcsaládot, szalonhangulatot vagy Eliza-logót nem emelünk át. Az eredeti referenciafájl és a Figma-terv változatlan marad.

A korábbi tervezes/figma-arculat-ellenorzes.json a javítás előtti minták vizsgálatának történeti pillanatképe. Az aktuális tipográfiai döntések forrása a mostani Figma-előírás és e dokumentum 4. szakasza; a régi pillanatkép nem írja felül őket.
`;
fs.writeFileSync(file,s.trim()+'\n','utf8');
const briefFile='agyagpad-projektbrief.md';
let brief=fs.readFileSync(briefFile,'utf8');
brief=brief.replace('A konkrét színek, betűtípusok és komponensszabályok később külön arculati dokumentumban készülnek el.','A konkrét színek, Merriweather–Inter tipográfia, mobilméretek, térközök és komponensszabályok a projekt gyökerében lévő design-system.md 2.0 dokumentumban rögzítve. Az építés ezt a specifikációt kövesse.');
fs.writeFileSync(briefFile,brief,'utf8');
console.log('Frissítve: design-system.md (2.0), agyagpad-projektbrief.md');
