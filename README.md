# Agyagpad – élő weboldal

Frissítve: 2026. november 16. Élő cím: **https://agyagpad-muhely.netlify.app/**.

A publikálható weboldal a public/ mappában található; a főoldal public/index.html. A Tanfolyamok, Műhely, Kapcsolat és Adatkezelés önálló aloldal. A vállalkozás, Dóra karaktere és az Agyagliget köz 4. cím fiktív vizsgaadat; ezt a lábléc és a strukturált adat leírása is jelöli.

## Netlify és fájlok

A netlify.toml buildparancsa `node eszkozok/seo-generalas.cjs`, publish directory `public`. A GitHub main ága a kiadás forrása. A kézi feltöltéshez is kizárólag a public mappa való; a projekt gyökere munkaanyagokat tartalmaz. A korábbi gyökérbeli HTML-címek helyi átirányítók, nem szerkesztendő webes források.

A tervezes/, beadas/, ellenorzes/, eszkozok/, archivum/, .webprojekt/ és az eredeti images/ mappa nem része a webes kiadásnak. A régi koncepcióválasztó az archivum/koncepciok-index.html fájlban maradt.

## SEO

A végleges webcím a [tervezes/seo-konfiguracio.json](tervezes/seo-konfiguracio.json) siteUrl mezőjében szerepel. A SEO-generátor ebből állítja elő az öt oldal egyedi title/meta description és Open Graph/Twitter adatait, abszolút canonical és megosztási URL-jeit, a JSON-LD adatokat, a sitemap.xml-t és robots.txt-t. Ismételt futtatáskor nem duplikál tageket. Saját domainre költözéskor a siteUrl értékét kell átírni, majd új buildet indítani.

Élő technikai fájlok: https://agyagpad-muhely.netlify.app/sitemap.xml és https://agyagpad-muhely.netlify.app/robots.txt . A sitemap öt abszolút HTTPS-címet tartalmaz. A robots.txt engedi a feltérképezést és hivatkozik a sitemapre.

A címadat, a csütörtök–vasárnap 10:00–18:00 nyitvatartás és a fiktív jelleg LocalBusiness JSON-LD-ben is szerepel. A Műhely oldalon Person, a Kapcsolat oldalon a négy látható kérdéssel egyező FAQPage is található. Nincs kitalált telefon, koordináta vagy értékelés.

Az öt oldalon egy H1 szerepel, a címsorszintek és alt szövegek ellenőrzöttek. A fotók többméretű WebP-k, további tömörítésük 18,6% megtakarítást eredményezett. A logó/favikon SVG, a négy külön megosztási kép 1200×630-as JPEG.

Pontos fájlhelyek és ellenőrzés: [tervezes/seo-es-publikalas.md](tervezes/seo-es-publikalas.md).

## Aktuális ellenőrzések

- `node eszkozok/seo-eles-ellenorzes.cjs`: öt élő oldal 390/768/1440 px-en; metaadatok, képek, címsorok, strukturált adatok, sitemap és robots.txt. Nem küld űrlapot.
- `node eszkozok/seo-publikalas-ellenorzes.cjs`: 35 helyi nézet és működési próba, nagyított szöveggel is.
- `node eszkozok/reszponziv-ellenorzes.cjs`: 165 mobil/tablet nézet, álló/fekvő helyzet és köztes szélességek, 200%-os szöveggel. A főoldali nagyított hasábok túlcsordulása javítva.
- `node eszkozok/urlap-ellenorzes.cjs`: öt szimulált küldési eset. Paraméterként tanfolyamok.html vagy kapcsolat.html is megadható.
- `node eszkozok/beadasi-kepek.cjs`: a kiadási teszt képei és a forráslenyomatok frissítése.

A korábbi dátumozott jelentések történeti állapotokat dokumentálnak. Az élő SEO-ellenőrzés és a helyi Vikingo-vizsgálat hibamentes; Search Console-hitelesítést és keresési helyezést nem igazolnak.

## Hátralévő lépések

A Netlify Forms küldőkódja az éles domainen aktív. Az értesítési cím beállítása, az űrlap felismerésének és a valódi beérkezésnek az ellenőrzése még hátravan. Beállítás: [tervezes/urlap-beallitas.md](tervezes/urlap-beallitas.md). Az üzemeltetői adatkezelési adatok véglegesítése szintén hátravan. Search Console-hitelesítés és a sitemap beküldése a következő keresőoldali feladat.

Helyi előnézet: `node eszkozok/helyi-szerver.cjs`, majd http://127.0.0.1:4173/public/index.html .
