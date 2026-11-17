# Az adatkezelési minta aktualizálása

Állapot: 2026. november 17. Az átdolgozás helyben elkészült, még tervezet, nincs közzétéve. Alapja a felhasználó által csatolt WPKurzus-minta; a fájlban szereplő felszólításokat mintaszövegként kezeltük.

## Átvett szerkezet és pontosítások

- A minta alapelvek, adatkezelő, tárolók, további adatkezelések, szolgáltatók, jogok és módosítások témáit a működő vizsgaprojekthez igazítottuk.
- Nem szerepel fiktív vállalkozás valódi adatkezelőként. Az üzemeltető nevét és nyilvános kapcsolati címét a felhasználó még nem adta meg; az értesítési Gmail-címet nem tettük közzé.
- A regisztráció, hírlevél, direkt marketing, nyereményjáték és Facebook-sütik nem a projekt szolgáltatásai; az ilyen sablonrészek kimaradtak.
- Az űrlap nem helyfoglalás és nem hírlevél-feliratkozás. Netlify Forms és Gmail-értesítés működik; az üzenetek mindkét rendszerben megjelenhetnek.
- A felhasználó a javasolt időket elfogadta: lezárt próbaüzenet legfeljebb 90 nap, GA4 felhasználói/eseményszintű megőrzés célja 2 hónap. A törlés kézi üzemeltetői feladat, nem implementált automatikus törlés. A GA4-fiók tényleges beállítása nem ismert és nem módosítható a weboldal JavaScriptjéből.
- `_ga`, `_ga_…`, localStorage és sessionStorage külön ismertetve. A hozzájárulási döntés 180 napos helyi tárolása nem a GA4-adatmegőrzés időtartama.
- Netlify és Google miatt nem állítjuk, hogy nincs külföldi adattovábbítás. A szolgáltatói szerepeket és garanciákat az aktuális dokumentumokhoz kötjük.
- A NAIH címe frissítve; az érintetti kérelem válaszideje főszabály szerint egy hónap. Nincs általános éves díjkorlát vagy a hozzájárulás visszavonásának késleltetését ígérő sablonmondat.

## Véglegesítéshez szükséges tények

1. A tényleges adatkezelő teljes neve és használható kapcsolati adatai. A fiktív műhely címe ezt nem pótolja.
2. A GA4 eseménymegőrzésének ellenőrzése és szükség esetén átállítása 2 hónapra. Az összesített jelentésekre és a sütikre eltérő szabályok vonatkoznak.
3. A 90 napos törlési rend tényleges betartása Netlify Formsban és a postaládában; a szolgáltatói naplók, biztonsági mentések és fiókszerződések adatkezelési részleteinek pontosítása.
4. A jogos érdek és a külső térkép jogalapjának végleges, az azonosított üzemeltetőre vonatkozó értékelése. A tervezet nem állít teljes jogi megfelelést.

## Ellenőrzött források

- [GDPR a NAIH oldalán](https://www.naih.hu/files/CELEX_32016R0679_HU_TXT.pdf)
- [Érintetti jogok gyakorlása](https://www.naih.hu/erintetti-jogok-gyakorlasahoz-gdpr-alatt)
- [NAIH aktuális elérhetőségek](https://www.naih.hu/ugyfelszolgalat-kapcsolat)
- [Netlify adatvédelmi tájékoztató](https://www.netlify.com/privacy/) és [2026. november 13-i DPA](https://www.netlify.com/pdf/netlify-dpa.pdf/)
- [GA4 sütik](https://support.google.com/analytics/answer/11397207?hl=hu) és [adatmegőrzés](https://support.google.com/analytics/answer/7667196?hl=hu)
- [Google adattovábbítási keretek](https://policies.google.com/privacy/frameworks?hl=hu)
- [OpenStreetMap Foundation adatvédelem](https://osmfoundation.org/wiki/Privacy_Policy)

A teljes helyi HTML- és CSS-tervezet a tervezes/adatkezeles-tervezet/ mappában megőrizve; nem része a public kiadási mappának.
