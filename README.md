# Agyagpad – AI webdesigner vizsgamunka

Az Agyagpad kitalált szentendrei kerámiaműhely bemutatóprojektje.

## Aktuális munkafájlok

1. [Projektbrief](tervezes/agyagpad-projektbrief.md) – célok, szolgáltatások, követelmények.
2. [Design system](tervezes/design-system.md) – színek, tipográfia, térközök, komponensek.
3. [Weboldalszövegek](tervezes/szovegek.md) – a megjelenő tartalom, fejléc, lábléc, űrlapállapotok.
4. [Szerkezeti leírás](tervezes/oldalterkep-es-drotvaz.md) – szekciók és látogatói útvonalak.

A dokumentumokban szereplő `tervezes/...`, `images/...` és `archivum/...` útvonalak a projekt főmappájához képest értendők. A szomszédos fájlokra mutató rövid hivatkozásokat az adott dokumentum mappájából kell értelmezni.

## Mappák

```text
Agyagpad 2/
├── README.md
├── tervezes/
│   ├── agyagpad-projektbrief.md
│   ├── design-system.md
│   ├── szovegek.md
│   ├── oldalterkep-es-drotvaz.md
│   ├── drotvaz/                 Oldaltérkép, drótváz, PNG és SVG, HTML-áttekintő
│   └── arculat/                 Saját arculati táblák és Figma-export
├── images/
│   ├── logo/                    Megadott logók és faviconok
│   └── fotók/                   Eredeti stock fotók, változatlanul
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

A tervezési dokumentumok és weboldalszövegek elkészültek. A honlap megépítése, képek és betűk webes előkészítése, az adatkezelési tájékoztató véglegesítése, az űrlap beállítása, tesztelés és élesítés még hátravan. Az AI-használat legfeljebb egyoldalas leírását a tényleges munkafolyamat alapján kell lezárni.

Beadási határidő: 2026. november 24. A kiírás szerint kérhető haladékkal december 1.

