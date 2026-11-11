# Agyagpad – AI webdesigner vizsgamunka

Az Agyagpad kitalált szentendrei kerámiaműhely bemutatóprojektje.

## A három elkészült weboldal-koncepció

**Kiválasztott és továbbfejlesztett irány:** [Udvari műhely](koncepcio-1-udvari-muhely.html). Aktuális főoldal: terrakotta H1 és gombok, grafit alcímek, normál türkiz kickerek előtagvonal nélkül, ár nélküli programkártyák, egyetlen bögrés műhelyboltfotó, türkiz képmotívumok és a programkártyák alatti türkiz tudnivalóblokk, törtfehér szöveggel és ikonokkal. A fejlécben nincs Koncepciók hivatkozás. Az aloldalak további tartalmi fejlesztése a főoldal lezárása után következik.

Nyisd meg az [index.html koncepcióválasztót](index.html) a böngészőben, akár dupla kattintással. A fotók, betűk, stílusok és interakciók helyi fájlokból működnek, nem igényelnek internetkapcsolatot vagy telepítést.

1. [Udvari műhely](koncepcio-1-udvari-muhely.html) – osztott nyitás, agyagot formáló kezek fotójával.
2. [Agyagnapló](koncepcio-2-agyagnaplo.html) – tipográfiai nyitás, aszimmetrikus képpár, naplószerű ritmus.
3. [Az alkotás közelről](koncepcio-3-az-alkotas-kozelrol.html) – széles anyagközeli fotók, kép és külön szövegblokk.

A navigáció, a mobilmenü és a programválasztás kipróbálható. Az űrlap helyi bemutató: nem továbbít és nem tárol adatot. Az adatkezeles.html a jelenlegi prototípus működését ismerteti; nem helyettesíti a majdani éles adatkezelési tájékoztatót.

Az [ellenőrzési összefoglaló](ellenorzes/eredmenyek.md) és a képernyőképek az `ellenorzes` mappában találhatók.

## Aktuális munkafájlok

1. [Projektbrief](tervezes/agyagpad-projektbrief.md) – célok, szolgáltatások, követelmények.
2. [Design system](tervezes/design-system.md) – színek, tipográfia, térközök, komponensek.
3. [Weboldalszövegek](tervezes/szovegek.md) – a megjelenő tartalom, fejléc, lábléc, űrlapállapotok.
4. [Aktuális szerkezeti leírás](tervezes/aktualis-oldalterkep.md) – szekciók és látogatói útvonalak.

A dokumentumokban szereplő `tervezes/...`, `images/...` és `archivum/...` útvonalak a projekt főmappájához képest értendők. A szomszédos fájlokra mutató rövid hivatkozásokat az adott dokumentum mappájából kell értelmezni.

## Mappák

```text
Agyagpad 2/
├── README.md
├── index.html                    Három koncepció választóoldala
├── koncepcio-1-udvari-muhely.html
├── koncepcio-2-agyagnaplo.html
├── koncepcio-3-az-alkotas-kozelrol.html
├── adatkezeles.html              Helyi prototípus működési tájékoztatója
├── tervezes/
│   ├── agyagpad-projektbrief.md
│   ├── design-system.md
│   ├── szovegek.md
│   ├── oldalterkep-es-drotvaz.md
│   ├── drotvaz/                 Oldaltérkép, drótváz, PNG és SVG, HTML-áttekintő
│   └── arculat/                 Saját arculati táblák és Figma-export
├── images/
│   ├── logo/                    Megadott logók és faviconok
│   ├── webp/                    Optimalizált fotók, webes logó és előnézetek
│   └── fotók/                   Eredeti stock fotók, változatlanul
├── assets/fonts/                 Helyi WOFF2-betűk és licencek
├── ellenorzes/                   Tesztjelentések és képernyőképek
├── .webprojekt/                  Jóváhagyott koncepciók és munkafolyamat-állapot
├── eszkozok/                    Drótvázkészítő segédszkript
└── archivum/                    Korábbi javaslat és egyszeri technikai anyagok
```

A jelenlegi mappanév Agyagpad 2. A kért Agyagpad névre átnevezést a Windows fájlhasználati zárolás miatt nem engedte. A projektet használó alkalmazás bezárása után a mappa átnevezhető; a belső relatív hivatkozások ezt követően is működnek. A `.git` rejtett mappa a verziókövetéshez tartozik, változatlanul megmarad.

## Tervezési képek a beadáshoz

- [Oldaltérkép](tervezes/drotvaz/01-oldalterkep.png)
- [Asztali és mobil drótváz](tervezes/drotvaz/02-drotvaz.png)
- [Böngészős terváttekintő](tervezes/drotvaz/terv-megtekintese.html)
- [Arculati tábla](tervezes/arculat/Arculati-tabla.png)
- [Figma-arculati tábla](tervezes/arculat/Figma-arculati%20t%C3%A1bla.png)

## Technikai anyagok

Az `eszkozok/drotvaz-generalas.cjs` Node.js-szkript a drótvázak SVG-változatát és a HTML-áttekintőt generálja a `tervezes/drotvaz` mappába. A PNG-ket nem frissíti automatikusan. A drótváz szerkezeti terv, nem a végleges arculattal megépített oldal.

Az `archivum/update-design-system.cjs` egyszer lefuttatott migrációs segédlet. Történeti anyag, nem aktuális frissítőparancs; ne futtasd újra. Az archív Dóra-javaslat és Figma-ellenőrzés helyett az aktuális szöveg- és design-system fájlokból kell dolgozni.

## Állapot és hátralévő munka

A tervezési dokumentumok, weboldalszövegek és a három böngészhető prototípus elkészültek. A használt fotók WebP-ként, több méretben előkészítve, a betűk és licencek helyben elérhetők. Mindhárom változat 320, 390 és 1440 px szélességen ellenőrizve.

Hátravan a kiválasztott változat és az aloldalak végső átnézése, a fotóforrások tételes rögzítése, a végleges SEO és publikálás. A valódi üzenetküldés ajánlott extra; ha beállítjuk, a tényleges adatkezelési tájékoztatót és a próbaüzenetet is le kell zárni. Az AI-használat rövid leírása a beadas/AI-hasznalat.md fájlban elkészült; élesítés után a tényleges publikálási lépéssel frissítendő.

Az `eszkozok/helyi-szerver.cjs` opcionális helyi előnézetet indít (`node eszkozok/helyi-szerver.cjs`), a három HTML-oldal azonban szerver nélkül is megnyitható. A fejlesztői ellenőrző és képoptimalizáló szkriptek a helyi Codex Node-runtime sharp/playwright csomagjait használják; a kész HTML-fájlok futtatásához ezek nem szükségesek. A nagy eredeti fotók megmaradnak helyben, a `.gitignore` kizárja őket a Gitből; az optimalizált WebP-k és az oldalak verziókövetettek.

Beadási határidő: 2026. november 24. A kiírás szerint kérhető haladékkal december 1.


A kiválasztott változat aktuális megjelenési forrása assets/udvari-muhely.css, dokumentációja tervezes/design-system.md 4.3 és tervezes/szovegek.md 2.4. Az aktuális hét futásos ellenőrzés: ellenorzes/fo-ellenorzes.json; kontrasztok: ellenorzes/fo-kontrasztok.json. Öt normál nézetszélesség és két 200%-os szövegméret-próba sikeres. A régebbi koncepcióellenőrzések történeti anyagok, a főoldal aktuális elrendezését a fooldal-ellenorzes.cjs ellenőrzi.

Az archivum/udvari-muhely-turkiz-migracio.cjs egyszeri átalakítási segédlet, nem aktuális buildparancs. A kész HTML- és CSS-fájlokat kell tovább szerkeszteni; a migrációt nem kell újrafuttatni.



## Megtartott verzió és beadási dokumentáció

A honlap megjelenési alapja az utoljára jóváhagyott 16527e0. A későbbi összefonódó és lefelé vezetett spirálos motívumkísérleteket visszavontuk; a HTML, CSS és a webes assetek megtartott állapota az irányadó. A dokumentáció erre az állapotra frissült, a weboldal újratervezése nélkül. A fejléc CTA „Jelentkezés”, csak kezdő nagybetűvel.

A beadási csomag és a kötelező/ajánlott tételek szétválasztása: [beadas/README.md](beadas/README.md). Itt található az AI-leírás, az eredeti tervezési képek másolata, az aktuális oldaltérkép és a visszaállított oldal friss képernyőképei. A csomag élő URL hiányában még nem végleges beadás.

A tervezes/oldalterkep-es-drotvaz.md, a koncepciótervek és az eredeti PNG-k történeti anyagok. A régi dokumentáció pillanatképe az archivum/dokumentacio-2026-11-11-korabbi/ mappában maradt meg. A korábbi képernyőképek az ellenorzes/kepernyokepek/korabbi-valtozatok-2026-11-11/ almappába kerültek; nem a jelenlegi felület bizonyítékai. A friss képek a képernyőképmappa gyökerében és a beadas/jelenlegi-oldal/ mappában találhatók.
