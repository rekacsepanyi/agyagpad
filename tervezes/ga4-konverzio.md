# Köszönőoldal és GA4-konverzió

2026. november 16. A felhasználó beállította a Netlify e-mail-értesítést és sikeres éles próbaküldést jelzett. A címzett nincs a nyilvános kódban.

## Elkészült

- Mindhárom űrlap kizárólag pozitív POST-válasz után irányít a `/koszonom` oldalra. Szerverhiba vagy hálózati hiba esetén megmaradnak a mezők.
- A köszönőoldal visszaigazolja az átvételt, elmondja a következő lépést, és az alkotásokhoz vezet: `/muhely#keramiak`.
- Egyedi metaadatok, canonical, Open Graph, egy H1 és `noindex,follow`. A köszönőoldal kimarad a sitemapből, a robots.txt engedi a noindex kiolvasását.
- A sikeres válasz egyszer használható jelzést ír a sessionStorage-ba. A köszönőoldal ezt azonnal törli, legfeljebb tíz percig fogadja el. Frissítés, közvetlen megnyitás vagy újabb látogatás nem hoz létre új eseményt. Egy új sikeres beküldés új eseményt jelent.
- Esemény, kizárólag analitikai engedély után: `gtag('event', 'generate_lead', {form_name: 'agyagpad-erdeklodes', program, form_source})`. Csak engedélyezett programkódok és forrásútvonalak kerülnek bele; személyes adatok nem.
- A közvetlenül megnyitott oldal általános köszönetet mutat, nem állítja, hogy üzenet érkezett.

## Ami még szükséges a valódi GA4-méréshez

A felhasználó megadta a `GTM-W96CCPWJ` konténer új telepítési kódját. A nyilvános, publikált konténer kapcsolt GA4-célja `G-NVP2Z1B13Y`. A Google új telepítési formájához a meglévő `gtag('event', 'generate_lead', …)` parancs megfelelő: valós konténerkóddal egy GA4-kérés készült a helyes célra. Nem alakítottuk át párhuzamos GTM-eseménycímkére.

A hat oldalon közös `assets/meres.js` és `assets/meres.css` van. A saját mérési választó basic consent módban működik: a Google-kód csak az analitika engedélyezése után töltődik be. A hirdetési hozzájárulások tiltva maradnak. A döntés legfeljebb 180 napig őrződik meg, a láblécből módosítható. Visszavonáskor az oldal GA-sütijei törlődnek és a lap újratöltődik, hogy a már betöltött Google-kód se fusson tovább. JavaScript nélküli Google-iframe nincs, mert az megkerülné a döntést.

Ellenőrzés: `node eszkozok/meres-ellenorzes.cjs`. Hat oldal × öt nézet, döntés előtti tiltás, megőrzött elutasítás, egy konténerbetöltés, egy `generate_lead` kérés, frissítés elleni védelem és visszavonás sikeres. A köszönőoldalon utólag adott engedély esetén is pontosan egy esemény keletkezett. A nyilvános konténer valós kódja futott, de minden analitikai kérés helyben elfogásra került. A GA4-riportban való tényleges beérkezés még nincs igazolva.

1. A megadott konténerben már van Google tag, ezért ne telepíts mellé második GA4-alapkódot. A GA4 felületén ellenőrizd a megfelelő tulajdont és az adatmegőrzés beállítását. A felhasználó kikapcsolta a Google tag felhasználóiadat-képességeit; a nyilvános konfigurációban a __ogt_1p_data_v2 vtp_isEnabled értéke false. A kód a hirdetési adatfelhasználási engedélyt végig tiltja.
2. GA4-ben a `generate_lead` eseményt jelöld kulcseseménynek. Ne hozz létre mellé új konverziót a `/koszonom` page_view-ból: az duplázást és közvetlen látogatások miatti téves mérést okozhat.
3. Tag Assistant / DebugView alatt egy engedélyezett próbaküldéshez egyetlen `generate_lead` eseményt ellenőrizz. Frissítéskor és közvetlen megnyitáskor ne jelenjen meg újabb. A GA4 automatikus `form_submit` eseménye nem helyettesíti a szerver által elfogadott küldést.
4. A konténer adminisztrációjához nincs közvetlen hozzáférésünk. A kulcsesemény-jelölés, DebugView és az élő riport ellenőrzése a felhasználó GA4-fiókjában végezhető el. A mérésbe személyes adatot tartalmazó próbaüzenet nem szükséges.

Tiltott sessionStorage, blokkolt analitika vagy elutasított hozzájárulás esetén a küldés és az átirányítás működhet, de az analitikai konverzió elmaradhat. A Netlify beérkezési listája marad a beküldések forrása; a böngészős analitika nem kézbesítési nyilvántartás. A munkamenetjelzés nem szerveroldali hitelesítési védelem.

Források: [GA4 generate_lead](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead), [GA4 kulcsesemény beállítása](https://support.google.com/analytics/answer/12966437), [Google noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

## Közzététel állapota

A GTM-bekötés és a mérési választó jelenleg helyi, tesztelt módosítás. A commitot és az éles push-t az automatikus jóváhagyási ellenőrzés elutasította a nyilvános konténerben jelzett automatikus e-mail-/felhasználóiadat-gyűjtés miatt. Az éles oldal utolsó commitja továbbra is 02b959f. A felhasználót megkértük, hogy a Google tag „Allow user-provided data capabilities” beállítását kapcsolja ki. A felhasználó ezután kikapcsolta a funkciót. A Google nyilvános kódjában a frissülés után vtp_isEnabled:false látható; az eredeti blokkoló feltétel megszűnt. A közzététel folytatható, a mérési kérések továbbra is csak analitikai engedély után indulnak.
