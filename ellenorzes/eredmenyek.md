# Agyagpad – a három prototípus ellenőrzése

## Elkészült eredmény

Három önálló statikus HTML-koncepció és egy közös index.html választó. Azonos, elfogadott márkaarculat és tartalom, eltérő nyitás, képhasználat és szekcióritmus. Nincs véleményszekció vagy kitalált értékelés.

## Böngészős ellenőrzés

Eszköz: helyi Chrome, Playwright. Mindhárom oldal 320, 390 és 1440 px nézetszélességen, összesen kilenc sikeres ellenőrzési futás.

- Egy H1 és mind a négy fő szekció jelen van.
- Nincs vízszintes túlcsordulás.
- A megjelenő képek WebP-fájlok; nincs hibás kép vagy helyi erőforrás.
- Inter és Merriweather helyben betöltve, magyar karakteres részhalmazzal.
- Mobilmenü nyitás és Escape-zárás működik.
- Mindhárom programkártya a megfelelő programot választja az űrlapban.
- A nyitó CTA alapállapotra állítja a programválasztót, a többi kitöltött adatot megőrzi.
- A lábléc kapcsolati linkje megőrzi a programválasztást.
- A helyi űrlap nem indít POST-kérést, és nem állít valótlan üzenetküldési sikert.
- Nincs JavaScript-hiba, 404-es erőforrás vagy külső erőforráskérés.
- Mindhárom változat közvetlen file:// megnyitással is ellenőrizve.
- JavaScript nélkül a navigáció elérhető; az űrlap beküldőgombja letiltott.

A mobil és asztali nyitóképek vizuális ellenőrzése, valamint a program- és kapcsolati blokkok részletellenőrzése megtörtént. A képernyőképek a kepernyokepek almappában találhatók. Az automatizált eredmények: prototipus-ellenorzes.json és kiegeszito-ellenorzes.json.

Ez helyi prototípus-ellenőrzés, nem teljes körű akadálymentességi tanúsítás és nem az éles űrlap kézbesítési próbája. A végleges oldalt a kiválasztás és a küldési szolgáltatás beállítása után ismét ellenőrizni kell.

## Képoptimalizálás

- 12 kiválasztott eredeti fotó: összesen kb. 130,25 MB.
- 48 WebP-fotófájl: 480, 800, 1200 és 1600 px szélességű változatok.
- Az összes méretváltozat együtt kb. 4,09 MB.
- A legnagyobb, 1600 px-es változatok együttes mérete kb. 1,99 MB: kb. 98,47%-os méretcsökkenés az eredetikhez képest.
- A böngésző a megjelenési mérethez és képpontsűrűséghez illő változatot választja a srcset/sizes alapján.
- Az eredeti fotók változatlanul megmaradtak. A webes logó és favicon külön WebP-ként készült, a megadott grafikákból.
- A részletgazdag eszközfotóknál a nagyobb változatok túlléphetik a kezdeti 250 KB-os célértéket; a cél nem merev korlát, és a kisebb megjelenéshez kisebb változatok állnak rendelkezésre. A tényleges fájlméreteket és minőséget a képlista tartalmazza.

Részletes méret- és forrásleltár: ../tervezes/arculat/webp-keplista.json. A képméretek összehasonlítása nem azonos a teljes oldal hálózati méretével.

## Élesítés előtt

Koncepcióválasztás és finomhangolás; valódi üzemeltetői adatok és űrlapfogadó; végleges adatkezelési tájékoztató; pontos képkreditek; SEO véglegesítése; éles Netlify-űrlap és próbaüzenet; AI-használat leírása és beadási csomag.
