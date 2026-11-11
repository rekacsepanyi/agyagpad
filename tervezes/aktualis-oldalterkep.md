# Agyagpad – aktuális oldaltérkép és szekciószerkezet

Frissítve: 2026. november 11. Alap: a megtartott `16527e0` weboldalváltozat.

## Belépési pontok

- Főoldal: `koncepcio-1-udvari-muhely.html`, négy szekcióval.
- Programrészletek: `tanfolyamok.html`, három programhorgonnyal.
- Helyi prototípus adatkezelési tájékoztatása: `adatkezeles.html`.
- `index.html`: három korábbi koncepció választója; élesítés előtt a kiválasztott oldal legyen a fő belépési pont.
- A másik két koncepció történeti anyag. Külön `muhely.html` nincs; a Műhely link a működő főoldali szekcióhoz vezet.

## Fejléc

Logó, Kezdőlap, Tanfolyamok, Műhely, Kapcsolat és kiemelt „Jelentkezés” gomb. A Tanfolyamok a részletes aloldalra vezet. A Jelentkezés minden jelenlegi oldalról a főoldali `#kapcsolat` szekcióhoz navigál. Mobilon a lenyíló menü része; felirata csak kezdőbetűjében nagybetűs. Koncepciók hivatkozás nincs.

## A négy főoldali szekció

### 1. Nyitó szekció – `#kezdo`

Asztalon szöveg és két CTA balra, az agyagot formáló kezeket mutató `agyagpad-hero` fotó jobbra. Mobilon szöveg, gombok, majd fotó következik.

- H1: Alkoss agyagból, kapcsolódj ki Szentendrén.
- Fő CTA: Megnézem a tanfolyamokat → `#tanfolyamok`.
- Másodlagos CTA: Megismerem a műhelyt → `#muhely`.
- A fotón 15 px-es, dőlt türkiz idézet, törtfehér, finoman árnyékolt kártyán, lágyan lekerekített jobb felső sarokkal. Nincs előtte díszvonal.
- A megtartott dekoráció eltolt türkiz keret és három külön koronggyűrű. Nincs összefonódó első/hátsó SVG-réteg vagy lefelé futó spirálvég.

### 2. Tanfolyamok – `#tanfolyamok`

Asztalon három kártya; tabletméretben egymás alatti kép–szöveg kártyák; mobilon egy oszlop.

| Főoldali programnév | Látható összefoglaló | Részletlink célja |
| --- | --- | --- |
| Korongozó kóstoló | 1 alkalom · 3 óra | `tanfolyamok.html#korongozo-kostolo` |
| Négyhetes kurzus | 4 alkalom · 4 × 2,5 óra | `tanfolyamok.html#kezdo-kurzus` |
| Céges csapatépítő | Egyeztetett időpont · Egyedi időtartam | `tanfolyamok.html#ceges-csapatepito` |

Sorrend: felvezetés, programnév, élményleírás, időtartam és „Részletek és árak” link, nyíl nélkül. Főoldalon nincs konkrét ár. A részletes árak és a programot előválasztó érdeklődési gombok az aloldalon találhatók.

Közvetlenül alattuk azonos teljes szélességgel az „Amit érdemes tudnod” blokk szerepel. Türkiz háttér, törtfehér cím, szöveg és ikonok; asztalon két, mobilon egy oszlop. Hat állítás: kezdőbarát részvétel, alapanyag és két égetés, legfeljebb hat fő, két héttel későbbi átvétel, nincs garantált darabszám vagy hibátlan végeredmény, külön időpont-egyeztetés.

### 3. Műhely és alkotó – `#muhely`

Fehér Dóra munka közbeni képe és bemutatkozása: asztalon kép balra, szöveg jobbra. A bemutatkozásban bögrék, tálak és vázák szerepelnek. Ezután a 2018, 2022, 2023 és 2024 állomású idővonal következik: asztalon vízszintesen, szűk helyen függőlegesen.

A műhelyboltban asztalon szöveg balra, egyetlen bögrés fotó jobbra kerül; mobilon szöveg után fotó következik. Nyitvatartás: csütörtök–vasárnap 10:00–18:00. Cím: 2000 Szentendre, Agyagliget köz 4., kitalált, nem látogatható bemutatócímként jelölve. Nincs webshop vagy térképes útvonaltervezés.

### 4. Kapcsolat – `#kapcsolat`

Űrlap és helyszíni tájékoztatás, asztalon két, mobilon egy oszlopban. Név, e-mail és program kötelező; üzenet opcionális. A programválasztó alaphelyzetben „Válassz programot”; ismert URL-paraméter előválaszthat programot. A főoldali ugrógombok nem törlik a kitöltött adatokat.

A jelenlegi űrlap helyi bemutató: nem továbbít adatot és nem foglal valódi helyet. Hibajelzése és helyi visszajelzése kipróbálható. A valódi üzenetküldés ajánlott extra, nincs késznek feltüntetve.

## Lábléc

Márka és rövid bemutatkozás; bemutatócím és nyitvatartás; navigáció; adatkezelési link. A vizsgamunka, a kitalált vállalkozás, a foglalás nélküli működés és a stock fotók illusztrációs jellege jelölt.

## Tervezési folyamat és aktuális képek

- `tervezes/drotvaz/01-oldalterkep.png` és `02-drotvaz.png`: megőrzött eredeti folyamatképek; nem a végleges felület pontos rajzai.
- `beadas/tervezesi-folyamat/03-aktualis-oldalterkep.png`: az aktuális szerkezet áttekintése.
- `beadas/jelenlegi-oldal/`: a visszaállított főoldal új mobil- és asztali felvételei.

A kiírás legalább három oldalt **vagy** szekciót kér; a négy főoldali szekció ezt teljesíti. Az eredeti képek a folyamatot, a friss képernyőképek az eredményt dokumentálják.
