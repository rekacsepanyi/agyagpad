# Agyagpad – SEO, képek és publikálási mappa

2026. november 14. Arculat: 4.16. Szövegek: 3.8. A látható szövegeket és a véglegesített elrendezést megőriztük.

## Hol találhatók a módosítások?

| Fájl | Beállítás |
| --- | --- |
| public/index.html | Végleges főoldal; egyedi title és meta description; OG/Twitter; LocalBusiness JSON-LD. |
| public/tanfolyamok.html | Egyedi metaadatok; OG/Twitter; WebPage JSON-LD; a különálló tudnivalók címe H2, változatlan mérettel. |
| public/muhely.html | Egyedi metaadatok; OG/Twitter; LocalBusiness és a fiktív Dóra karakterét jelölő Person. A hatképes galéria megmaradt. |
| public/kapcsolat.html | Egyedi metaadatok; OG/Twitter; LocalBusiness és a négy látható kérdéssel szó szerint egyező FAQPage. |
| public/adatkezeles.html | Egyedi metaadatok; OG/Twitter; WebPage JSON-LD. |
| public/images/webp/ | Méretezett és tovább tömörített fotók, meglévő reszponzív srcset-változatokkal. |
| public/images/og/ | Négy 1200×630-as JPEG a széles körű megosztási kompatibilitáshoz. |
| public/images/logo/ | Átlátszó SVG-logó és -favicon, kisebbre tömörített PNG-tartalék. |
| public/sitemap.xml, public/robots.txt | Elkészült szerkezet; domain nélküli állapotban egyértelmű TODO-val. |
| public/_redirects | A korábbi főoldali fájlnév és index.html átirányítása a webhely gyökerére Netlify alatt. |
| netlify.toml | public publish directory, SEO-generáló buildparancs. |
| eszkozok/seo-generalas.cjs | Ismételhető generálás, duplikált tagek nélkül, CLI/config/Netlify URL alapján. |
| tervezes/seo-konfiguracio.json | A később megadandó végleges HTTPS webcím. |

Mind az öt oldalon egy H1 van, a fő tartalom címsorszintjei nem ugranak. A leíró altok a képtartalomhoz illeszkednek; a logók dekoratív üres altja mellé a hivatkozáson hozzáférhető márkanév tartozik. A képnagyító kezdetben üres, dinamikus képének altja megnyitáskor a kiválasztott fotó leírására vált. A nyitófotók előnyben töltődnek, az alattuk lévő fotók lazy betöltésűek. A helyi betűk megmaradtak.

A LocalBusiness címadata és nyitvatartása az oldalon látható bemutatóadat: 2000 Szentendre, Agyagliget köz 4.; csütörtök–vasárnap 10:00–18:00. A leírás egyértelműen fiktív vizsgaprojektet jelez. Nincs kitalált telefon, e-mail, térképi koordináta, díj vagy értékelés. A fotók stock illusztrációk. Valódi Google Cégprofilt ehhez a fiktív vállalkozáshoz nem készítünk.

## Képtömörítés

83 meglévő raszterfájl: **8 218 108 → 6 692 253 bájt**, megtakarítás **1 525 855 bájt (18,6%)**. Az eredeti fotók nem változtak. A teljes eredeti képarányú galériaképek nagyítása és az álló tál felismerhető kivágása megmaradt. A böngésző képernyőméret szerint választ a 480–1600 px-es változatokból; a nagyító külön 1920 px-es fájlokat használ. A négy további OG-JPEG összesen körülbelül 404 KB; ezeket normál oldalnézetben a böngésző nem tölti le.

A fotók WebP-k; a vektoros márkaelemeket SVG-ként tartottuk meg. A PNG-favicon veszteségmentesen kisebb lett. A minőséget nem rontottuk korlátlanul fájlméret-cél eléréséhez. Tételes előtte/utána lista: ellenorzes/kepek-optimalizalas.json. A generáló script: eszkozok/webkepek-tomoritese.cjs.

## Végleges webcím még nincs

A felhasználó megerősítette, hogy még nincs végleges webcím. Emiatt a nyilvános HTML-be nem került kitalált canonical vagy og:url. Az OG-képek útvonala átmenetileg domain nélküli. A sitemap érvényes XML, de az öt URL a domain megadásáig nincs benne; a robots.txt Sitemap sora addig komment.

GitHub → Netlify telepítéskor a netlify.toml buildparancsa a Netlify URL környezeti változójából automatikusan véglegesíti ezeket. Saját domainnél a seo-konfiguracio.json siteUrl értékét kell beállítani, majd új buildet indítani.

Kézi feltöltéskor a Netlify nem futtat buildet. Az első telepítés után a kapott valódi HTTPS-címmel futtasd a projekt gyökeréből: `node eszkozok/seo-generalas.cjs --domain=https://A-KAPOTT-WEBCIM`, majd töltsd fel újra a public mappát. Ezután a sitemap öt abszolút URL-t, a robots.txt pedig a valódi sitemap-címet tartalmazza.

## Ellenőrzési eredmény

A Vikingo skill kiinduló ellenőrzése 17 hibát jelzett. Az aktuális domain nélküli kiadásban 10 jelzés marad: oldalanként a végleges og:url és a canonical hiánya. Ezek a hiányzó webcímhez kötöttek, nem jelöljük őket késznek. A többi ellenőrzött alapelem elkészült. A GSC-hitelesítés hiánya külön figyelmeztetés; ellenőrzéséhez valós domain szükséges.

A domaines generálást a kiadástól elkülönített, nem publikált tesztmappában is ellenőriztük, kizárólag seo-proba.invalid tesztcímmel: **0 hiba**. Ez a tesztcím nem került a public mappába. A valós domain megadását nem helyettesíti. Jelentések: ellenorzes/seo-kiindulo.txt, seo-skill-eredmeny.txt és seo-domain-proba.txt.

A public mappás kiadás 35 böngészős nézetpróbán szerepel: 320, 390, 768, 1024 és 1440 px, plusz 390/1440 px 200%-os szöveggel. Ellenőrzött a képek betöltése, a tördelés, a belső linkek, a fejléc CTA, programválasztás, billentyűzetes galéria/FAQ és a magyar mezőhibák. A három űrlap külön öt-öt szimulált HTTP-próbája sikeres; éles kézbesítést nem állítunk. A küldő konfiguráció változatlanul inaktív.

## Mi került ki a feltöltésből?

A public mappában nincs brief, README, eredeti JPG-fotó, skill, ellenőrzés, tervezési anyag vagy koncepcióválasztó. A webes fájlokat Git-mozgatással rendeztük át; a gyökérbeli korábbi címek helyi átirányítóként megmaradtak. A munkaanyagok és beadási dokumentumok a projekten belül, a public mappán kívül maradtak.

Az ellenőrzött skillek: https://github.com/vikingokft/skill-vikingo-seo és https://github.com/vikingokft/ai-webdesign/tree/main/deploy-mappa. A telepített változatok útvonalai és lenyomatai: ellenorzes/skill-ellenorzes.json. A letöltött útmutatók tartalma azonos a korábban telepítettekkel; a SKILL.md fájlok frissítve, a helyi ellenőrző segédfájlok megtartva.

## Következő lépések

A végleges webcím után SEO-generálás és az élő URL ellenőrzése; ezt követően Search Console-hitelesítés és sitemap-beküldés végezhető. A Netlify Forms címzettje, aktiválása és valódi próbaüzenete továbbra is hátravan. Az üzemeltetői adatokat az adatkezelési oldalon is véglegesíteni kell.

Ez belépőszintű keresőoptimalizálás: nem garantál Google-helyezést vagy AI-válaszokban megjelenést. A FAQ strukturált adat sem garantál külön keresési megjelenést. Szakmai források: https://developers.google.com/search/docs/appearance/structured-data/local-business , https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap , https://ogp.me/ , https://docs.netlify.com/build/configure-builds/environment-variables/ .
