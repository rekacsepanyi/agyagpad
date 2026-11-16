# Köszönőoldal és GA4-konverzió

2026. november 16. A felhasználó beállította a Netlify e-mail-értesítést és sikeres éles próbaküldést jelzett. A címzett nincs a nyilvános kódban.

## Elkészült

- Mindhárom űrlap kizárólag pozitív POST-válasz után irányít a `/koszonom` oldalra. Szerverhiba vagy hálózati hiba esetén megmaradnak a mezők.
- A köszönőoldal visszaigazolja az átvételt, elmondja a következő lépést, és az alkotásokhoz vezet: `/muhely#keramiak`.
- Egyedi metaadatok, canonical, Open Graph, egy H1 és `noindex,follow`. A köszönőoldal kimarad a sitemapből, a robots.txt engedi a noindex kiolvasását.
- A sikeres válasz egyszer használható jelzést ír a sessionStorage-ba. A köszönőoldal ezt azonnal törli, legfeljebb tíz percig fogadja el. Frissítés, közvetlen megnyitás vagy újabb látogatás nem hoz létre új eseményt. Egy új sikeres beküldés új eseményt jelent.
- Esemény: `gtag('event', 'generate_lead', {form_name: 'agyagpad-erdeklodes', program, form_source})`. Csak engedélyezett programkódok és forrásútvonalak kerülnek bele; személyes adatok nem.
- A közvetlenül megnyitott oldal általános köszönetet mutat, nem állítja, hogy üzenet érkezett.

## Ami még szükséges a valódi GA4-méréshez

A projektben nincs Google tag, GA4-mérési azonosító vagy GTM-konténer. Az esemény jelenleg csak a böngésző helyi `dataLayer` sorába kerül; Google felé nincs analitikai hálózati adatküldés. Ez még nem igazolt GA4-konverzió.

1. Add meg a GA4 webes adatfolyam `G-…` azonosítóját, vagy a meglévő GTM-konténert. A Google taget az összes oldalon egységesen kell telepíteni az attribúció megőrzéséhez, a megfelelő hozzájárulás-kezeléssel és adatkezelési tájékoztatóval együtt.
2. GA4-ben a `generate_lead` eseményt jelöld kulcseseménynek. Ne hozz létre mellé új konverziót a `/koszonom` page_view-ból: az duplázást és közvetlen látogatások miatti téves mérést okozhat.
3. Tag Assistant / DebugView alatt egy engedélyezett próbaküldéshez egyetlen `generate_lead` eseményt ellenőrizz. Frissítéskor és közvetlen megnyitáskor ne jelenjen meg újabb. A GA4 automatikus `form_submit` eseménye nem helyettesíti a szerver által elfogadott küldést.
4. GTM választása esetén a meglévő gtag-parancssor helyett egyetlen GTM-adatréteges esemény és egyetlen GA4-eseménytag legyen bekötve; ne fusson két párhuzamos mérési út.

Tiltott sessionStorage, blokkolt analitika vagy elutasított hozzájárulás esetén a küldés és az átirányítás működhet, de az analitikai konverzió elmaradhat. A Netlify beérkezési listája marad a beküldések forrása; a böngészős analitika nem kézbesítési nyilvántartás. A munkamenetjelzés nem szerveroldali hitelesítési védelem.

Források: [GA4 generate_lead](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead), [GA4 kulcsesemény beállítása](https://support.google.com/analytics/answer/12966437), [Google noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
