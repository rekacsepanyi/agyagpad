# Agyagpad – végleges weboldal és Netlify-feltöltés

Frissítve: 2026. november 16. A vállalkozás, Dóra karaktere és a műhely címe fiktív vizsgaadat.

A publikálandó weboldal kizárólag a **public/** mappában található. Kezdőlap: [public/index.html](public/index.html). Aloldalak: Tanfolyamok, Műhely, Kapcsolat és Adatkezelés. A főoldal korábbi koncepciós fájlneve belső linkként már nem szerepel. A régi gyökérbeli HTML-fájlok csak a korábban használt helyi címek átirányítói.

A munkaanyagok a tervezes/, beadas/, ellenorzes/, eszkozok/, archivum/, .webprojekt/ és az eredeti images/ mappában maradtak. **A projekt gyökerét ne töltsd fel kézi Netlify-telepítéshez.** A régi koncepcióválasztó: archivum/koncepciok-index.html.

## Netlify

GitHubos telepítésnél a netlify.toml beállítja:

- Build command: `node eszkozok/seo-generalas.cjs`
- Publish directory: `public`
- A végleges domain hiányában a build a Netlify `URL` környezeti változójából generálja a canonical és megosztási URL-eket, valamint az ötelemű sitemapet.

Kézi feltöltéshez a public mappát add át a Netlifynak. A Netlify ilyenkor nem futtat buildparancsot. Az elsőként kapott HTTPS webcím után futtasd a projekt gyökeréből:

`node eszkozok/seo-generalas.cjs --domain=https://A-KAPOTT-WEBCIM`

Ezután töltsd fel ismét a public mappát. A fenti parancsban a teljes saját Netlify-cím szerepeljen. Tartós beállításként a tervezes/seo-konfiguracio.json siteUrl mezőjét töltsd ki. Jelenleg nincs végleges URL; nem írtunk be kitalált domaint.

Az űrlap fogadója a korábbi döntés szerint még inaktív. Beállítás és éles próba: [tervezes/urlap-beallitas.md](tervezes/urlap-beallitas.md). A Netlifyra feltöltés önmagában nem kapcsolja be a jelenlegi konfigurációban az üzenetküldést.

## SEO és képek

Öt egyedi title és leírás, Open Graph és Twitter-kártya, négy 1200×630-as megosztási kép, ellenőrzött címsorok és alt szövegek, LocalBusiness/Person/FAQPage/WebPage strukturált adatok készültek. A fiktív jelleg a LocalBusiness leírásában is szerepel; nem adtunk meg kitalált telefonszámot, koordinátát vagy értékelést.

A 83 meglévő webes raszterállomány összmérete 8 218 108-ról 6 692 253 bájtra csökkent (18,6%). A fotók többméretű WebP-k; a logó és favicon elsődlegesen SVG. A közösségi megosztók kompatibilitása miatt a külön OG-képek JPEG-ek.

Részletek és pontos fájlhelyek: [tervezes/seo-es-publikalas.md](tervezes/seo-es-publikalas.md).

## Aktuális ellenőrzések

- `node eszkozok/seo-publikalas-ellenorzes.cjs`: 35 böngészős nézet, 320–1440 px, 200%-os szövegnagyítás, linkek, képek, navigáció, galéria, GYIK és űrlapellenőrzés.
- `node eszkozok/urlap-ellenorzes.cjs`: a főoldali űrlap öt szimulált küldési esete; paraméterként tanfolyamok.html vagy kapcsolat.html is megadható.
- `node eszkozok/szoveg-dokumentacio.cjs`, `node eszkozok/tartalom-export.cjs`: tartalomfrissítés a helyi előnézetből.
- `node eszkozok/beadasi-kepek.cjs`: a legutóbbi kiadási teszt képei és forráslenyomatai.

A korábbi, dátumozott megjelenéstesztek és védett forráspéldányok történeti ellenőrzések. A public mappás kiadás aktuális tesztje a seo-publikalas-ellenorzes.cjs; nem a régi gyökérbeli HTML-eket kell szerkeszteni.

Helyi előnézet a projekt gyökeréből: `node eszkozok/helyi-szerver.cjs`, majd http://127.0.0.1:4173/public/index.html. Ez nem élő weboldal.


## Legutóbbi mobil/tablet ellenőrzés – november 16.

`node eszkozok/reszponziv-ellenorzes.cjs`: öt oldal, 33 beállítás oldalanként, összesen 165 nézet. Telefon és tablet álló/fekvő helyzetben, 320–1368 px szélességen, töréspontok mellett és 200%-os szöveggel. A főoldal nagyított fekvő tabletnézetében talált belső kártyatúlcsordulás és túl szűk bemutatkozó hasáb javítva. A Műhely galériabevezetője a kért új szöveg, a Kapcsolat hero a részleteket. kifejezése nem válik két sorra. Új szín, galériakép vagy gomb nincs. Részletes eredmény: ellenorzes/reszponziv-ellenorzes-2026-11-16.json. A teszt Chrome érintéses emulációban futott, nem minden létező fizikai eszközön.
