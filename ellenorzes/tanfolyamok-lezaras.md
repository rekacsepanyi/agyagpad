# Tanfolyamok aloldal – lezárási ellenőrzés

2026. november 14. A felhasználó végső pontosításai alapján.

## Elvégzett módosítások

- A négyhetes és a céges program leírása a megadott szövegre cserélve. A kurzus időpontja: Szerdánként, 17:00–19:30; időtartama 4 alkalom × 2,5 óra.
- Asztalon a gombok a fotótól távolabbi szélen, a fotó alsó éléhez igazodnak. Közös, tartalomhoz növő grid-sorok és flexoszlopok biztosítják az egyforma fotóméreteket. Nincs merev szövegmagasság vagy programonként külön margó.
- Mobilon a kép után a szöveg következik; a gomb a tartalom után balra jelenik meg. A kép magassága nincs a szövegéhez kötve.
- Díjazás: 22 px, 600-as súly; adatértékek: 16 px. A díjazás mellett nincs ikon.
- A céges ajánlat az agyagot, a mázat és a két égetést is tartalmazza. A hatfős korlát csak a kezdő foglalkozásokra vonatkozik.
- Dóra szolgáltatói megszólalásai egyes számúak. A főoldalon kizárólag a közös tudnivalók négy mondatának nyelvi egységesítése történt; a közös alkotást és egyeztetést jelölő többes szám megmaradt.
- Az űrlap opciói és értékei változatlanok. Az Ajándékozás vagy egyéb érdeklődés eredetileg is egy összevont opció; nem került bele új választási lehetőség.

## Ellenőrzések eredménye

- 11 nézet sikeres: 320, 390, 768, 900, 1024, 1100, 1199, 1200 és 1440 px; valamint 390 és 1440 px mellett kétszeres szövegméret.
- Nincs vízszintes túlcsordulás vagy böngészős betöltési hiba. A képkivágások képernyőképeken is ellenőrizve.
- Azonos asztali fotóméretek, alsó és külső gombigazítás; mobil kép–szöveg sorrend és balra igazított gombok: sikeres.
- Belső hivatkozások, billentyűzetes kártya- és programgomb-navigáció, látható fókusz, mobilmenü és Escape, ugrólink: sikeres.
- A három programgomb a helyi űrlapot éri el, a helyes programmal; a kitöltött név, e-mail és üzenet megmarad.
- Kötelező mezők, hibás e-mail, magyar mezőhibák: sikeres.
- Mindkét oldali űrlap szimulált HTTP 500, hálózati hiba, folyamatban lévő és pozitív fogadói válasszal tesztelt. Csak a pozitív válasz után jelenik meg siker; hibánál megmaradnak az adatok, dupla beküldés nincs.

Bizonyítékok: tanfolyamok-ellenorzes.json, tanfolyamok-urlap-ellenorzes.json, urlap-ellenorzes.json; képek a kepernyokepek mappában és a beadas/jelenlegi-oldal alatt.

## Fennmaradó üzembehelyezési feladat

**Az éles üzenettovábbítás és az e-mail-kézbesítés nincs igazolva.** Az assets/form-config.js jelenleg enabled:false és üres allowedHosts beállítást tartalmaz, a felhasználó korábbi döntése szerint. Ez nem javítható pusztán helyi teszttel.

Szükséges: élő Netlify-projekt és HTTPS-cím, aktivált/felismert Netlify Forms fogadó, engedélyezett tárhelynév, értesítési e-mail-cím és végleges adatkezelői adatok. Ezután éles próbaüzenet szükséges, ellenőrizve a beküldési listában és a fogadó postaládában. Részletek: tervezes/urlap-beallitas.md.

A helyi és szimulált ellenőrzések során további hiba nem maradt. A dizájn ebben az állapotban lezárva.
