# Agyagpad – beadási ellenőrzőlap

Frissítve: 2026. november 14. Aktuális csomag: public/index.html főoldal, Tanfolyamok, Műhely, Kapcsolat és Adatkezelés. A reszponzív megjelenés és a helyi működés ellenőrzött; az élesítés hátravan.

## Beadandó három tétel

| Tétel | Állapot | Fájl vagy teendő |
| --- | --- | --- |
| Élő weboldal URL-je | Hiányzik | Publikálás után a valóban megnyitható cím. A GitHub-tároló nem élő weboldal. |
| Tervezési folyamat képe | Elkészült | `tervezesi-folyamat/01-eredeti-oldalterkep.png`, `02-eredeti-drotvaz.png`, `03-aktualis-oldalterkep.png` |
| AI-használat, legfeljebb egy oldal | Az eddigi munkához elkészült | [AI-hasznalat.md](AI-hasznalat.md); élesítés után a publikálási lépéssel frissítendő. |

Az első két kép történeti terv, a harmadik az aktuális ötoldalas szerkezet. A `jelenlegi-oldal/` mappában a végleges oldalak friss mobil-, tablet- és asztali felvételei találhatók. A forráslenyomatokat a [verzio.json](verzio.json) rögzíti.

## Kötelező feltételek

| Feltétel | Állapot |
| --- | --- |
| Statikus HTML/CSS | Teljesül; JavaScript kezeli a menüt, az űrlapot és a galérianagyítót, a FAQ natív HTML. |
| Böngészőben megnyitható | Helyben teljesül; az élő beadási URL hiányzik. |
| Mobil és asztali megjelenés | Teljesül az elvégzett helyi próbákban; tablet is ellenőrzött. [Részletek](../ellenorzes/eredmenyek.md). |
| Legalább három oldal vagy szekció | Teljesül: négy főoldali szekció és négy külön aloldal. |
| Legalább egy CTA | Teljesül; a közös Érdeklődöm gomb célja `kapcsolat.html#erdeklodes`. |
| Saját tartalom | Teljesül; a felhasználó által megadott és jóváhagyott projektszövegek. |
| Egységes arculat | Teljesül a vizsgált nézetekben; rögzítve a [design systemben](../tervezes/design-system.md). |
| Tervezési kép | Rendelkezésre áll, aktuális oldaltérképpel. |
| AI-használat leírása | Rendelkezésre áll; az élesítés utáni mondat még kiegészítendő. |

## Ajánlott extrák és külön projektkövetelmények

- GitHub-verziókövetés: [rekacsepanyi/agyagpad](https://github.com/rekacsepanyi/agyagpad).
- SEO-alapok: title, description, címsorok, alt szövegek és többméretű WebP-k rendelkezésre állnak; domainfüggő beállítások hátravannak.
- A Műhely `#keramiak` galériája hat kész tárgyfotót tartalmaz, billentyűzettel kezelhető nagyítóval.
- Az eredeti kiírásban ajánlott valódi űrlapot a felhasználó külön követelménnyé tette. A POST-kód kész és szimulált fogadóval tesztelt, de a Netlify-fogadó inaktív; éles kézbesítés nincs igazolva. [Bekapcsolási lista](../tervezes/urlap-beallitas.md).
- Saját domain, GA4, Search Console, hozzájáruláshoz kötött mérés és portfólió-esettanulmány még nem készült.

## Beadás előtt

1. A tényleges képkreditek és szükséges licencadatok rögzítése.
2. A public/index.html már a végleges belépési pont. A public mappát kell publikálni; a koncepcióválasztó archív munkaanyag.
3. Publikálás, élő URL, fogadó és értesítési e-mail, tényleges kézbesítési próba.
4. A valódi üzemeltető adatkezelési adatainak rögzítése és az AI-leírás véglegesítése.

Határidő: 2026. november 24.; kérhető haladékkal december 1. A csomag nem állítja, hogy a még hátralévő élesítési feltételek már teljesültek.


## SEO és feltöltési állapot

A public mappa tiszta Netlify-kiadás, a munkaanyagok kimaradnak. 83 raszterfájl további tömörítésével 18,6% méretcsökkenés történt; a fotók WebP-k. Az öt oldalon egyedi metaadatok, OG/Twitter és strukturált adatok készültek. A végleges webcím hiánya miatt a canonical, og:url és sitemap URL-ek még véglegesítendők. Netlify Git-buildkor a beállított generátor ezt az URL környezeti változóból megoldja; kézi feltöltésnél a kapott webcímmel újra kell generálni és feltölteni a mappát. 35 új böngészős nézet és 15 szimulált űrlappróba sikeres. Részletek: tervezes/seo-es-publikalas.md.
