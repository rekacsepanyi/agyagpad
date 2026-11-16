# Agyagpad – végleges SEO és publikálás

Frissítve: 2026. november 16. **Élő webhely: https://agyagpad-muhely.netlify.app/**.

A Netlify build már az első élő ellenőrzéskor létrehozta a domainhez kötött SEO-elemeket. A jó title-öket és leírásokat megőriztük; most a megadott webcímet a projekt konfigurációjában és minden helyi kiadási fájlban is véglegesítettük. A látható oldalszövegek és a megjelenés nem változtak.

## Mit és hol állítottunk be?

| Fájl | Egyedi title | További adatok |
| --- | --- | --- |
| public/index.html | Korongozás Szentendrén, kezdőbarát élmény &#124; Agyagpad | Egyedi leírás, OG/Twitter, canonical, LocalBusiness. |
| public/tanfolyamok.html | Korongozó tanfolyamok és alkotóprogramok &#124; Agyagpad | Egyedi leírás, OG/Twitter, canonical, WebPage. |
| public/muhely.html | Kerámiaműhely és kézzel készült kerámiák &#124; Agyagpad | Egyedi leírás, OG/Twitter, canonical, LocalBusiness és a fiktív alapító Person adata. |
| public/kapcsolat.html | Kapcsolat és érdeklődés, szentendrei műhely &#124; Agyagpad | Egyedi leírás, OG/Twitter, canonical, LocalBusiness és a négy látható kérdéssel egyező FAQPage. |
| public/adatkezeles.html | Adatkezelés és az érdeklődési űrlap adatai &#124; Agyagpad | Egyedi leírás, OG/Twitter, canonical, WebPage. |

A HTML-title-ökben a márkanevet függőleges vonal választja el. Hosszuk 51–54 karakter; a leírások 156–165 karakteresek. Mindegyik egyedi, magyar nyelvű és az adott oldal tartalmát írja le.

Az öt HTML head részében egy-egy SEO-blokk szerepel. Az Open Graph elemek: title, description, url, image, type, locale, site_name, képformátum/méret/alt. A megosztási képek 1200×630-as JPEG-ek a public/images/og/ mappában; mindegyik ténylegesen elérhető. Az og:url, og:image, Twitter-kép és canonical abszolút HTTPS-címet használ, az agyagpad-muhely.netlify.app domainnel. A Twitter-kártya summary_large_image.

A LocalBusiness címadata: Agyagliget köz 4., Szentendre, 2000, HU. Nyitvatartás: csütörtök, péntek, szombat és vasárnap, 10:00–18:00, OpeningHoursSpecification formában. A napnevek az angol schema.org értékek. A vállalkozás URL-je, képe és logója abszolút, elérhető webcím. Nincs hozzáadott telefon, koordináta vagy értékelés. A leírás kifejezetten jelzi, hogy a vállalkozás és a cím fiktív bemutatóadat. Valódi Cégprofilt ehhez a vizsgakarakterhez nem hozunk létre.

A fő tartalomban oldalanként pontosan egy H1 van, nincs átugrott címsorszint. A fotók leíró alt szöveget kaptak; a logók üres altja mellett a hivatkozásnak hozzáférhető márkaneve van. A galéria dinamikus nagyítójában a kiválasztott kép leírása jelenik meg. A hajtás alatti fotók lazy betöltésűek, a hero előnyben töltődik. A meglévő WebP-, SVG- és favicon-beállítások megmaradtak.

## Technikai fájlok és konfiguráció

- public/sitemap.xml: öt abszolút, közvetlenül HTTP 200-zal elérhető kanonikus URL. Élő: https://agyagpad-muhely.netlify.app/sitemap.xml .
- public/robots.txt: User-agent: *, Allow: / és az élő sitemap hivatkozása. Élő: https://agyagpad-muhely.netlify.app/robots.txt .
- tervezes/seo-konfiguracio.json: a végleges siteUrl. Már nincs hiányzó domain vagy TODO ebben az állapotban.
- eszkozok/seo-generalas.cjs: ismételhető, duplikáció nélküli SEO-generátor. A konfigurált címet használja, és saját domainre költözéskor innen frissíthetők az URL-ek.
- netlify.toml: a generátort futtatja buildkor; publish directory: public.
- public/_redirects: a korábbi főoldali fájlnév és index.html átirányítása a kezdőlapra.

## Bizonyított ellenőrzés

A mostani élő kiinduló állapotban **0 SEO-hiba** volt: a Netlify build már helyesen generált. A helyi, még domain nélküli előző kiadás 10 hiányzó URL-jelzése a véglegesítés után **0-ra csökkent**. Nem állítjuk, hogy a már megfelelő élő title-öket vagy leírásokat újra kellett írni.

- ellenorzes/seo-eles-kiindulo-2026-11-16.txt: a tényleges élő HTML-ek Vikingo-ellenőrzése, 0 hiba.
- ellenorzes/seo-vegleges-2026-11-16.txt: a végleges domainnel generált public mappa, 0 hiba.
- ellenorzes/seo-eles-ellenorzes-2026-11-16.json: öt élő oldal 390, 768 és 1440 px-en; 15 sikeres nézet, öt megosztásikép-ellenőrzés és két technikai fájl. A canonical és og:url pontos egyezése, egyedi metaadatok, JSON-LD tartalma, látható GYIK-egyezés, képek, altok és címsorok is ellenőrzöttek. Űrlapküldés nem történt.
- ellenorzes/seo-publikalas-ellenorzes.json: 35 sikeres helyi nézet és működési próba, nagyított szöveggel is.
- ellenorzes/reszponziv-ellenorzes-2026-11-16.json: a korábbi célzott mobil/tablet ellenőrzés 165 sikeres nézete. A SEO-véglegesítés a látható elrendezést nem módosítja.

A Google jelenlegi alapszintű dokumentációját a skill frissességi szabálya szerint ismét ellenőriztük. A LocalBusiness nyitvatartási értékek és a kanonikus sitemap-címek megfelelnek; új kötelező elem bevezetése nem volt szükséges.

## Képek és feltöltési mappa

83 meglévő raszterfájl: 8 218 108 → 6 692 253 bájt, **18,6% megtakarítás**; az eredeti fotók változatlanok. A webes fotók WebP-k, a logó/favikon SVG, a PNG-favicon tartalék veszteségmentesen tömörített. A négy külön OG-JPEG összesen körülbelül 404 KB. Tételes lista: ellenorzes/kepek-optimalizalas.json.

A public mappa kizárólag a webhelyhez szükséges 110 fájlt tartalmazza. Brief, ellenőrzés, skill, eredeti nagy JPG és tervezési munkaanyag nincs benne. A helyi forráslenyomatok és az élő cím a beadas/verzio.json fájlban szerepelnek.

## Következő keresőoldali lépés

Search Console-hitelesítés és a sitemap beküldése ajánlott; a kódban ennek még nincs nyoma. DNS-hitelesítés az oldal forrásából nem igazolható. A strukturált adat nem garantál kiemelt keresési megjelenést, és az alapbeállítások nem garantálnak helyezést vagy AI-válaszban megjelenést.

Az űrlap fogadója a korábbi döntés szerint változatlanul inaktív; aktiválása és az éles e-mail-próba külön feladat. Az üzemeltető adatkezelési adatai is véglegesítendők.

Felhasznált szakmai források: [Google LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business), [Google sitemap-útmutató](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [strukturált adatok irányelvei](https://developers.google.com/search/docs/appearance/structured-data/sd-policies). Alkalmazott skill: C:/Users/jolci/.codex/skills/vikingo-seo-skill/SKILL.md.
