# Agyagpad – a valódi üzenetküldés bekapcsolása

Állapot: 2026. november 16. Az élő Netlify-oldal már elérhető: https://agyagpad-muhely.netlify.app/ . A fogadót a korábbi döntés szerint később állítjuk be. A küldési kód elkészült, az éles üzenetátvétel és e-mail-értesítés még nincs bekapcsolva és nincs igazolva.

## Ami elkészült

- Statikus, Netlify Forms által felismerhető HTML-űrlap, `agyagpad-erdeklodes` névvel, mezőnevekkel, rejtett form-name és honeypot mezővel.
- Magyar, mezőhöz rendelt hibák, kötelező név/e-mail/program, e-mail-formátum és hosszkorlátok ellenőrzése.
- URL-kódolt valódi HTTP POST; csak a szolgáltató pozitív HTTP-válasza után sikerüzenet.
- Küldés közbeni gombtiltás, dupla beküldés elleni védelem, időkorlát és hálózati/szerverhiba-kezelés.
- Hiba esetén megmaradó adatok. Aktív fogadó nélkül nincs POST és nincs sikerüzenet.

## Pontosan mi hiányzik

1. Az élő Netlify-projekt már elérhető: https://agyagpad-muhely.netlify.app/ . A következő fogadói beállításokat kell még elvégezni.
2. A Netlify felületén a Forms automatikus felismerésének bekapcsolása, majd az űrlapot tartalmazó oldal új telepítése. Ellenőrizni kell, hogy az `agyagpad-erdeklodes` megjelent a Forms alatt.
3. Az értesítéseket fogadó e-mail-cím. A Forms → Submission notifications alatt az értesítést külön be kell állítani; a külső címhez a szolgáltató megerősítést kérhet. A cím nem kerül a nyilvános HTML-be.
4. A tényleges adatkezelő neve és elérhetősége, a vállalt megőrzési idő és az éles adatkezelési tájékoztató. A fiktív műhely helyett a vizsgaprojekt valódi üzemeltetőjét kell megadni.
5. Az `public/assets/form-config.js` fájlban a pontos tárhelynév az `allowedHosts` listában, majd `enabled: true`. Az `endpoint: '/'` a statikus Netlify Forms fogadója. A jelenlegi `enabled: false` szándékos.
6. Éles próbaüzenet: a Netlify beküldési listájában és a címzett postaládájában is ellenőrizni kell. A böngészős tesztben szimulált pozitív válasz nem igazol e-mail-kézbesítést.

A kiírás eredeti szövegében a valódi üzenetküldés ajánlott extra volt; a felhasználó most ezt külön kért projektkövetelménnyé tette. Nem jelöljük teljesítettnek, amíg a fogadót és a próbaüzenetet nem ellenőriztük.

## Hivatalos megvalósítási források

- [Netlify: Forms setup, HTML/AJAX](https://docs.netlify.com/manage/forms/setup/)
- [Netlify: értesítések beállítása](https://docs.netlify.com/manage/forms/notifications/)

A helyi előnézeti szerver nem fogad vagy tárol beküldéseket. A működési tesztek a válaszokat helyben szimulálják, valódi személyes adatot nem küldenek.
