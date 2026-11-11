# Agyagpad – a három prototípus ellenőrzése

## Legfrissebb főoldali ellenőrzés

A jelenlegi főoldal elsődleges eredménye: **fo-ellenorzes.json**, kontrasztok: **fo-kontrasztok.json**. Az alábbi régebbi türkiz és koncepciótesztek történeti ellenőrzések.

- Öt normál szélesség: 320, 390, 768, 1024, 1440 px.
- Két nagyított szövegű próba: 390 és 1440 px, 200%-os betűmérettel.
- Mind a hét sikeres: nincs vízszintes túlcsordulás vagy idővonal-szövegütközés.
- A türkiz kizárólag a kickereken jelenik meg, a H1 terrakotta, a H2/H3 grafit.
- A kickerek normál 400-as súlyúak, mondatkezdő nagybetűsek, nincs uppercase transzformáció vagy előtagvonal.
- A fejlécből eltűnt a Koncepciók link.
- A főoldali kártyákon nincs ár; az időtartam és alkalomszám, az élményleírás és a részletlink megmarad.
- A két kerámiakép tényleges tartalma megtekintve: kész bögrék és egy megformált váza a műhelyben.
- Az idővonal szövege gridben, nem abszolút pozicionálva helyezkedik el. Asztalon évszám, pont és vonal, eseményleírás a sorrend. Nagyított vagy keskeny nézetben függőleges tengelyre vált.
- Menügomb, Escape-zárás, billentyűzetes ugrólink, kártyalink-célok és helyi, adatot nem küldő űrlap ellenőrizve.
- A CSS-ben kizárólag az öt eredeti arculati szín és #1B4D4F szerepel. Kisebb feliratok kontrasztja legalább 5,58:1; az elsődleges gomb feliratáé 4,75:1, hoverben 6,33:1.

Képernyőképek: kepernyokepek/udvari-aktualis-... fájlok. Az aloldalak HTML-tartalma ebben a körben nem változott, új muhely.html és galéria nem készült; a felhasználó kérésére ez a főoldal lezárása utáni feladat.

## Aktuális kiválasztott változat: türkiz Udvari műhely

A felhasználó új kérése alapján elkészült a #1B4D4F elsődleges színű főoldal és a tanfolyamok.html részletező aloldal. Az új, öt nézetes ellenőrzés eredménye a turkiz-ellenorzes.json fájlban, a számított színkontrasztok a turkiz-kontrasztok.json fájlban találhatók. Az alábbi korábbi koncepcióellenőrzés a projekt előzménye; a régi hero-reset és közvetlen kártyaválasztás helyett most a kártya → részletes program → érdeklődés útvonal az érvényes.

Ellenőrzött szélességek: **320, 390, 768, 1024 és 1440 px**, mind sikeres.

- Új hero CTA a főoldali programokhoz vezet; nem változtatja meg az űrlap választását.
- Mindhárom „Részletek és árak →” link a tanfolyamaloldal megfelelő programjához vezet.
- A két fix ár változatlan, a céges programnál „Egyedi ajánlat” szerepel.
- A részletes programokból az érdeklődési gomb a kiválasztott programmal tér vissza az űrlaphoz.
- Hat kiemelt tudnivaló sötéttürkiz kártyán, két-/egyoszlopos elrendezéssel; lényeges feltétel nem veszett el.
- A 2018/2022/2023/2024 idővonal változatlan állomásokkal, nagyobb évszámokkal.
- Nincs túlcsordulás, külső erőforráskérés, JavaScript-hiba vagy hiányzó kép/betű. A menü és a helyi űrlap működik; adatküldés nincs.
- Átlátszó logó, WebP-fotók, eltérő nyitókép és bemutatkozó fotó, közös fejléc/lábléc és megosztott CSS.
- Törtfehér/türkiz gombkontraszt: **8,91:1**; a hover állapoté **11,36:1**; homokikon/türkiz kontraszt: **5,58:1**.

Képernyőképek: kepernyokepek/udvari-turkiz-... és kepernyokepek/tanfolyamok-... fájlok. A szemrevételezés a mobil és asztali nyitásra, programokra, tudnivalókra, idővonalra és tanfolyamaloldalra is kiterjedt.

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

### Udvari műhely – első finomítás ellenőrzése

A felhasználó az első koncepciót választotta. A módosított oldal ismét átment a 320, 390 és 1440 px-es ellenőrzésen. Ellenőrizve az átlátszó SVG-logó, az idővonal mobil/asztali oszlopszáma, az öt ikonos tudnivaló és az egy-/kétoszlopos rács, a két organikus fotóháttér, az összevont láblécjelzés, a programválasztás, a menü és a helyi űrlap. A dekorációk mobilos vízszintes túlcsordulása javítva. Az SVG nem tartalmaz beágyazott képet vagy háttértéglalapot; a tartalmi fotók továbbra is WebP-k.

### Hátralévő lépések

Az Udvari műhely további finomhangolása; valódi üzemeltetői adatok és űrlapfogadó; végleges adatkezelési tájékoztató; pontos képkreditek; SEO véglegesítése; éles Netlify-űrlap és próbaüzenet; AI-használat leírása és beadási csomag.


### 2026. november 11. – 12 böngészőmegjegyzés átvezetése

Türkiz képkeretek, kerámiamotívum és kör-pipa ikonok; idézőjeles, dőlt hero-képaláírás; terrakotta másodlagos gomb; módosított programcímek és nyíl nélküli kártyalinkek. A sorrend tanfolyamok → műhely → tudnivalók → kapcsolat. A műhelyboltban egy bögrés fotó maradt, a második mondat külön bekezdés.

A fooldal-ellenorzes.cjs mind a hét futása sikeres: 320, 390, 768, 1024 és 1440 px, valamint 390 és 1440 px 200%-os szövegmérettel. Nincs vízszintes túlcsordulás, hiányzó kép, külső kérés vagy JavaScript-hiba. Ellenőrzött sorrend, színek, linkcélok, menü/Escape, billentyűzetes ugrólink és helyi űrlap. A másodlagos gomb normál és hover szövegkontrasztja 4,75:1; a türkiz ikonok kontrasztja homokon 5,58:1. Az aktuális mobil- és asztali képernyőképek az ellenorzes/kepernyokepek mappába kerültek.

### Tudnivalóblokk visszahelyezése a tanfolyamokhoz

Az egyetlen tudnivalóblokk közvetlenül a három programkártya alatt helyezkedik el, velük azonos szélességgel. Háttér #1B4D4F; cím, szöveg és ikonok #F9F8F6 (8,91:1). Belső tér mobilon 24 px, asztalon 32 px; két/egy oszlop. Új szín nincs. A korábbi különálló hely és üres konténere megszűnt. A böngészős ellenőrzés az elhelyezést, egyszeri előfordulást, igazítást, színeket és oszlopszámot is vizsgálja.
