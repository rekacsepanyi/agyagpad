# Agyagpad – Tanfolyamok aloldal

2026. november 14. · A felhasználó részletes újratervezési kérése alapján.

Az aloldal a végleges főoldal Merriweather–Inter tipográfiáját, hat meglévő arculati színét, terrakotta gombjait és lekerekítéseit használja. Saját elrendezési szabályai az assets/tanfolyamok.css fájlban találhatók. A főoldal HTML-je változatlan; a közös CSS-ben kizárólag az űrlap kért térköze változott.

## Szerkezet és navigáció

1. Közös fejléc. Az Érdeklődöm gomb ezen az oldalon a helyi #kapcsolat űrlaphoz vezet.
2. Morzsamenü és képes hero. A Megnézem a programokat gomb célja #programvalaszto.
3. Kompakt, háromelemű programválasztó; nem újabb fényképes kártyasor.
4. Váltakozó kép–szöveg elrendezésű programbemutatók: #korongozo-kostolo, #kezdo-kurzus, #ceges-csapatepito. A főoldali hivatkozások céljai megmaradtak.
5. Amit érdemes tudnod: a főoldallal szó szerint azonos hat pont és ikon, türkiz hátteren. Asztalon két, mobilon egy oszlop.
6. Így indul a közös alkotás: választás, egyeztetés, érkezés.
7. A főoldalról átvett helyi érdeklődési űrlap és műhelykártya.
8. A főoldallal azonos lábléctartalom; a Kapcsolat helyi célra mutat.

## Fotó és kivágás

A hero forrása images/fotók/hero3.jpg. A fotón szereplő személy egy résztvevőt illusztrál, nem Fehér Dóra. Nem kap Dóra nevére utaló képaláírást vagy alt szöveget. Dóra főoldali portréja változatlan.

A képhely 4:5 arányú; asztalon legfeljebb 464 px széles. A fotó felülre igazítva, aránytartó object-fit:cover megjelenítéssel látható. Az alsó asztal- és lábrészből vágunk; az arc, mindkét kéz és az edény megmarad. Nincs sötétítés vagy színszűrő. A visszafogott türkiz keret és köríves motívum a kép szélén, a tartalom mögött található.

Új WebP-változatok: tanfolyam-resztvevo-480.webp, -800.webp, -1200.webp, -1600.webp. Minőség: 82; a böngésző srcset alapján választ. A hero kiemelt betöltési prioritást, a többi fotó késleltetett betöltést kap.

## Pontos programadatok

- Korongozó kóstoló: 1 alkalom · 3 óra; legfeljebb 6 fő; tájékoztató időpont szombat 14:00–17:00; 18 500 Ft/fő.
- Négyhetes kezdő kurzus: 4 alkalom × 2,5 óra; legfeljebb 6 fő; négy egymást követő szerdán 17:00–19:30; 65 000 Ft/fő a teljes kurzusra.
- Céges csapatépítő: egyeztetett időpont és időtartam; a csapat igényeihez igazított létszám, előzetes egyeztetéssel; személyre szabott ajánlat. A korábbi általános hatfős korlát itt nem szerepel.

## Űrlap működése

A programgombok a helyi #kapcsolat szakaszhoz vezetnek, és kiválasztják a megfelelő programot. A már kitöltött név, e-mail és üzenet megmarad. A közös assets/erdeklodes.js végzi a magyar mezőellenőrzést és az előkészített POST-küldést. A tényleges Netlify-projekt és értesítési cím beállítása későbbre maradt a felhasználó döntése alapján. Az éles kézbesítés nincs igazolva; inaktív konfigurációval nincs adatküldés vagy megtévesztő sikerjelzés.

## Ellenőrzés és dokumentáció

Ellenőrzött szélességek: 320, 390, 768, 900, 1024, 1100, 1440 px; 390 és 1440 px mellett kétszeres szövegméret is. Ellenőrzés: képek betöltése, túlcsordulás, hivatkozások, mobilmenü, billentyűzetes programválasztás, megmaradó mezőértékek és magyar hibák. A két oldal közös küldési kódja szimulált sikeres, szerverhibás és hálózati hibás fogadóval is tesztelt. Valódi e-mail nem ment ki.

Bizonyítékok: ellenorzes/tanfolyamok-ellenorzes.json; ellenorzes/tanfolyamok-urlap-ellenorzes.json; ellenorzes/kepernyokepek/tanfolyamok-390-teljes.png és tanfolyamok-1440-teljes.png. Beadási másolatok: beadas/jelenlegi-oldal/tanfolyamok-mobil.png és tanfolyamok-asztali.png.

## Aktuális finomítás

A hero bevezetője „Kipróbálnád a korongozást…” kezdetű. A programválasztó kártyák címei: Csak kipróbálnám; Jobban elmélyülnék benne; A csapatommal érkeznék. A programblokkok két egyforma szélességű oszlopot használnak, 4:3 fotókkal és felső igazítással. Az ár–CTA egység gomb előtti térköze 18 px. A céges program felirata Személyre szabott ajánlat, gombja Ajánlatot kérek. Az űrlap adatkezelési sora után 24 px térköz van mindkét oldalon. A cikkcakk sorrend, a türkiz tudnivalóblokk, a lábléc és az űrlap működése megmaradt.

### Legutóbbi elrendezési pontosítás

A programválasztó kerámiaikonokat kapott: bögre, váza, tányér. Ezek dekoratív, saját SVG-k, nem tárgykészítési ígéretek. A programnév hangsúlyosabb a személyes felvezetésnél; a kártyák belső térköze 16 px. A részletes programfotók új alaparánya 6:5; asztalon magasabb tartalomhoz a képkeret is rugalmasan nőhet. Az időtartam és a csoport két oszlop, az időpont alattuk teljes szélességű. A céges program üres adatmezők nélkül marad. Az ár és CTA megfelelő helyen egy sorban, a fotó aljához igazodik; szűk helyen egymás alá törik. A többi szakasz, a főoldal és az űrlapkód nem változott ebben a körben.

### Aktuális adat–díjazás szerkezet

A korábbi ár–gomb zárósor helyett közös adatrész jelenik meg: balra a gyakorlati adatok egymás alatt, jobbra a díjazás és magyarázata. Mindkettő után, a szövegoszlop bal szélén következik a CTA 18 px térközzel. A díjazás egységesen 20 px/600: 18 500 Ft / fő; 65 000 Ft / fő; Díjazás. A céges magyarázat: A létszám és a program alapján egyeztetjük.

A programválasztó ikonrendje: tányér a kóstolónál, váza a kurzusnál, bögre a céges programnál. A programfotók egyforma 6:5 méretűek, a szöveghez nem nyúlnak. A cikkcakkos kétoszlopos programelrendezés 1200 px-től érvényes; az adatrész 28 rem széles szövegoszloptól kétoszlopos. Szűkebb nézetben kép, szöveg, gyakorlati adatok, díjazás, gomb sorrend. A korábbi alsó igazítást és 900 px-es programtöréspontot ez felülírja. Ellenőrzött szélességek: 320, 390, 768, 900, 1024, 1100, 1199, 1200 és 1440 px, továbbá 390 és 1440 px mellett kétszeres szövegméret.

### Utolsó finomhangolás

Asztalon a kóstoló és a céges program gombja jobbra, a kurzusé balra zár, a fotó alsó széléhez igazítva. A flex/grid elrendezés természetesen növeli a fotókeretet, ha a szöveg magasabb; nincs külön beállított programmargó. Mobilon a gombok a tartalom után balra kerülnek, alsó fotóigazítás nélkül. Díjazás: 22 px/600, adatértékek: 16 px, árikon nincs. A kurzus tervezett időpontja Szerdánként, 17:00–19:30. A négy egymást követő hét a leírásban megmarad.
