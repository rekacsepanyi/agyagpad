# Agyagpad – AI webdesigner vizsgamunka

Aktuális állapot: 2026. november 14. Az Agyagpad fiktív szentendrei kerámiaműhely. A kiinduló jóváhagyott változat 7064af8; a mostani revízió új szövegeket, élménysorokat, karakteradatokat és Netlify Forms küldési kódot tartalmaz.

## Megnyitás és oldalak

- [Főoldal](koncepcio-1-udvari-muhely.html): négy szekció, új hero, kártyák, tudnivalók, Dóra-bemutatkozás és számadatok, műhelybolt, érdeklődési űrlap.
- [Tanfolyamok](tanfolyamok.html): részletes árak, alkalomszám és időtartam. A négyhetes kurzus továbbra is 4 × 2,5 órás.
- [Műhely és kerámiák](muhely.html#keramiak): négyképes, meglévő WebP-assetekből álló galéria; kész tárgyak és munkafázisok megkülönböztetve.
- [Adatkezelés](adatkezeles.html): a még inaktív küldés és az élesítés előtt pótlandó üzemeltetői adatok.

Az index.html a régi háromkoncepciós választó; élesítés előtt a kiválasztott oldal legyen a fő belépési pont. A másik két koncepció és az archivum mappa történeti anyagok.

## Valódi űrlap – pontos állapot

A korábbi helyi siker-visszajelző helyett Netlify Forms-ra előkészített statikus űrlap és tényleges HTTP POST-kód készült. Magyar, mező melletti hibák, dupla küldés elleni védelem, időkorlát, csak pozitív fogadói válasz utáni siker, hibánál megmaradó adatok.

A felhasználó megerősítette: még nincs Netlify-oldal, a fogadó később állítandó be. Az assets/form-config.js enabled értéke ezért false. Nincs valódi kézbesítés igazolva. A pontos hiánylista és bekapcsolási sorrend: [urlap-beallitas.md](tervezes/urlap-beallitas.md). A címzett e-mailt a Netlify értesítéseinél kell megadni, nem a nyilvános HTML-ben.

## Aktuális forrásdokumentumok

1. [Projektbrief](tervezes/agyagpad-projektbrief.md).
2. [Design system 4.5](tervezes/design-system.md).
3. [Weboldalszövegek 3.0](tervezes/szovegek.md), a tényleges oldalakból kinyerve.
4. [Aktuális oldaltérkép](tervezes/aktualis-oldalterkep.md).
5. [Beadási ellenőrzőlap](beadas/README.md), tervezési képek és rövid AI-leírás.

Dóra 2009-es története, népi iparművész megjelölése és a 15+ év / 1500+ tanítvány / 7000+ alkotás a felhasználó új fiktív karakteradatai. A korábbi idővonal kikerült. A rövid, fiktív vállalkozást jelző lábléc minden aktív oldalon megmarad.

## Ellenőrzés és képek

[ellenorzes/eredmenyek.md](ellenorzes/eredmenyek.md): 22 reszponzív nézet a négy oldalon, valamint külön szimulált fogadós űrlapteszt. Az éles szolgáltatás és e-mail kézbesítését a szimuláció nem igazolja.

A tartalmi képek WebP-k, többméretű srcsettel; helyi Inter és Merriweather betűk, átlátszó logó és favicon. Az eredeti nagy fotók helyben maradnak, a .gitignore kizárja őket. A forrás- és licencadatok tételes lezárása élesítés előtti feladat.

## Fejlesztői parancsok

- Helyi előnézet: node eszkozok/helyi-szerver.cjs – 127.0.0.1:4173. Ez a szerver POST-ot nem fogad.
- Aktuális ellenőrzés: node eszkozok/fooldal-ellenorzes.cjs.
- Beküldési hibautak: node eszkozok/urlap-ellenorzes.cjs (minden válasz helyben szimulált).
- Szövegek dokumentálása: node eszkozok/szoveg-dokumentacio.cjs.
- Beadási képek és verzióleltár: node eszkozok/beadasi-kepek.cjs.

Az ellenőrzők a helyi Codex Node-runtime Sharp/Playwright csomagjait és a telepített Chrome-ot használják. A honlap megnyitásához nem kell fejlesztői csomag. A régi migrációs szkriptek és az előző elrendezést ellenőrző tesztek történeti anyagok; nem kell újrafuttatni őket.

## Hátralévő lépések

Aktív Netlify-projekt és élő URL; űrlapfelismerés, értesítési e-mail és éles próba; valódi üzemeltetői adatokhoz igazított adatkezelési tájékoztató; tételes képkreditek; végleges SEO és publikálás; az AI-leírás élesítési bekezdésének lezárása. A saját domain és mérés továbbra is ajánlott extra.

Határidő: 2026. november 24.; kérhető haladékkal december 1. A valódi űrlapot a felhasználó külön projektkövetelménnyé tette, de a fogadó későbbi beállítását most kifejezetten kérte.
