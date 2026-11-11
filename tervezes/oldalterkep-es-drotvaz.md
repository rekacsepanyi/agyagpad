# Agyagpad – oldaltérkép és szekciók drótváza

Dátum: 2026. november 6.  
Kiindulás: `agyagpad-projektbrief.md` – végleges projektbrief.  
Állapot: első szerkezeti terv, átnézésre. Ez még nem a végleges arculat és nem működő weboldal.

## Oldaltérkép

Egyetlen görgethető főoldal, négy szekcióval:

1. **Nyitó szekció** (`#kezdo`): főcím, rövid bemutatkozás, Szentendre, hangulatkép és két CTA.
2. **Tanfolyamok** (`#tanfolyamok`): három program, időbeosztás, árak, érdeklődési gombok és közös részvételi tudnivalók.
3. **Műhely és alkotó** (`#muhely`): Fehér Dóra tényszerű bemutatkozása, kerámiák, illusztráció és nyitvatartás.
4. **Kapcsolat és érdeklődés** (`#kapcsolat`): űrlap, helyszíntájékoztatás és egyeztetési tudnivalók.

A fejléc navigációja ezekre a szekciókra mutat. Az Agyagpad logó a nyitó szekcióhoz vezet. Mobilon nyitható menüben érhetők el ugyanazok a hivatkozások.

A láblécből külön adatkezelési tájékoztató lesz elérhető. Ez támogató dokumentum, nem új marketingoldal vagy ötödik fő szekció. Tartalma a ténylegesen választott űrlapkezeléshez igazodik majd.

## A szekciók felépítése

### 1. Nyitó szekció

Asztali nézetben bal oldalon a szöveg és a gombok, jobb oldalon korongozást ábrázoló illusztráció. Mobilon először a szöveg és a gombok, utánuk a kép jelenik meg.

- Tervezett H1: „Alkoss agyagból, kapcsolódj ki Szentendrén.”
- Fő CTA: „Érdeklődöm a tanfolyamról” → kapcsolat, még nincs kiválasztott program.
- Másodlagos CTA: „Megnézem a műhelyt” → műhely és alkotó.

A mobil drótvázon a főcím rövidítve szerepel; a végleges oldalon Szentendre neve a főcímben vagy közvetlen környezetében is egyértelmű marad.

### 2. Tanfolyamok

Asztali nézetben három egymás melletti kártya, mobilon egymás alatt:

| Program | Időbeosztás | Ár |
| --- | --- | --- |
| Korongozó kóstoló | Szombat 14:00–17:00; 3 óra | 18 500 Ft / fő |
| Négyhetes kezdő kurzus | Négy egymást követő szerda 17:00–19:30; 4 × 2,5 óra | 65 000 Ft / fő, a teljes kurzusra |
| Céges csapatépítő | Egyedi egyeztetés szerinti időpont és időtartam | Egyedi árajánlat |

Minden kártyán „Érdeklődöm a tanfolyamról” gomb van. Ez az űrlaphoz vezet, és kiválasztja az adott programot. A választás később módosítható.

A kártyák alatt egyszer szerepelnek a közös tudnivalók: legfeljebb 6 fő; előképzettség nem kell; anyagok és két égetés a díjban; átvétel az utolsó foglalkozás után két héttel; nincs garantált darabszám vagy hibátlan végeredmény. Konkrét indulás és szabad férőhely csak egyeztetéssel tisztázható. Mobilon is minden tudnivaló megmarad: a képen látható tömör jelölés csak a drótváz rövidítése.

### 3. Műhely és alkotó

Asztali nézetben kép és szöveg két oszlopban, mobilon egymás alatt. Bemutatjuk Fehér Dóra keramikust és a kézzel készült használati kerámiákat. A 2026. november 11-i pontosítás szerint a karakter bemutatása egyeztetett, kitalált szakmai mérföldkövekkel bővíthető. A véglegesített történet a szovegek.md fájlban, a korábbi javaslat az archivum/dora-karakterjavaslat.md fájlban található; a képi drótváz továbbra is az eredeti elrendezést mutatja. Díjak és vásárlói vélemények nem részei automatikusan a tartalomnak.

A nyitvatartás csütörtök–vasárnap 10:00–18:00. A kapcsolati részben és a láblécben feltüntetett cím: 2000 Szentendre, Agyagliget köz 4. Közvetlenül mellette „Kitalált bemutatócím” jelölés szerepel. A mintacímhez nem kapcsolódik valós térképtű vagy útvonaltervezés. Online vásárlás nincs.

### 4. Kapcsolat és érdeklődés

Asztali nézetben az űrlap és a helyszíni tudnivalók egymás mellett, mobilon egymás alatt szerepelnek.

Mezők: név, e-mail-cím, programválasztás, üzenet. Tervezési javaslat: az első három kötelező, az üzenet opcionális. A programlistában a három tanfolyam mellett „Ajándékozás / egyéb érdeklődés” lehetőség is legyen, hogy a brief másodlagos célcsoportjai is tudjanak írni.

A mezőknek állandó címkéjük van, a kötelező jelölés magyarázata látható. A beküldés előtt elérhető az adatkezelési tájékoztató. A gomb felirata: „Érdeklődés elküldése”.

Tervezett állapotok a későbbi megvalósításhoz:

- Hibás vagy hiányzó adat: a megfelelő mező mellett érthető magyar hibaüzenet, a megadott többi adat megőrzésével.
- Beküldés folyamatban: „Küldés…” jelzés, ismételt beküldés megakadályozása.
- Sikeres beküldés: „Köszönjük az érdeklődést! Az üzenetet megkaptuk. A beküldés nem jelent helyfoglalást.” Csak ténylegesen sikeres fogadás után jelenhet meg.
- Sikertelen beküldés: egyértelmű jelzés és újrapróbálási lehetőség, a mezők megőrzésével.

Az oldal jelzi, hogy kitalált vállalkozás bemutatóprojektje, és az űrlap nem foglal valódi tanfolyami helyet. A képek illusztrációs jellegét is feltüntetjük.

## Reszponzív és használhatósági elvek

- Mobilon egy oszlop, vízszintes görgetés nélkül; a tartalmak sorrendje változatlan.
- A hosszú programnevek és gombfeliratok törhetnek, nem lóghatnak ki.
- Jól olvasható szöveg és legalább 44 px körüli érintési célok.
- Billentyűzettel használható navigáció és űrlap, látható fókuszjelzés.
- Egy H1, a fő szekciókhoz H2, a programokhoz H3 címsorok.
- A mobil menü nyitása és bezárása, valamint a program előzetes kiválasztása a megvalósításkor ellenőrizendő.

## Beadáshoz és átnézéshez

- `drotvaz/01-oldalterkep.png`: a szerkezetet bemutató, beadáshoz használható kép.
- `drotvaz/02-drotvaz.png`: a négy szekció asztali és mobil drótváza, beadáshoz használható kép.
- Az azonos nevű SVG-k veszteség nélkül nagyítható változatok.
- `drotvaz/terv-megtekintese.html`: mindkét terv böngészőben megnyitható áttekintése.

Ez a dokumentáció a vizsga tervezési folyamatot bemutató képi anyagát készíti elő. A weboldal tényleges működését, reszponzivitását és űrlapját az építés után külön ellenőrizni kell. A szövegek és a design-system azóta elkészültek: a szomszédos szovegek.md és design-system.md az aktuális megvalósítási forrás. A PNG- és SVG-tervek a drotvaz almappában találhatók.



