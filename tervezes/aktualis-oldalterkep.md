# Agyagpad – aktuális oldaltérkép

Frissítve: 2026. november 14. Revízió: 2026-11-14-responsive-final-review.

## Közös navigáció

Öt aktív oldal: `koncepcio-1-udvari-muhely.html`, `tanfolyamok.html`, `muhely.html`, `kapcsolat.html`, `adatkezeles.html`. Az `index.html` még a régi koncepcióválasztó; publikáláskor a végleges főoldal legyen a belépési oldal.

A közös fejlécben logó, Kezdőlap, Tanfolyamok, Műhely, Kapcsolat és Érdeklődöm gomb szerepel. Az utóbbi minden oldalon `kapcsolat.html#erdeklodes` célra vezet, mobilmenüben is. A helyi programgombok célja ettől függetlenül megmarad.

## Főoldal

1. `#kezdo`: terrakotta H1, kezdőbarát bevezető, két CTA, korongozós fotó és idézetkártya.
2. `#tanfolyamok`: három ár nélküli, élményalapú programkártya. Részletlinkek a Tanfolyamok megfelelő programjához. Közvetlenül alattuk türkiz tudnivalóblokk hat állítással; asztalon két, mobilon egy oszlop.
3. `#muhely`: Dóra bemutatkozása, portréja és három számadata. A bemutatkozás után szellősebb műhelybolt: balra szöveg, jobbra kerámiafotó. A Felfedezem a kerámiákat gomb a `muhely.html#keramiak` célra vezet.
4. `#kapcsolat`: meglévő érdeklődési űrlap és Találkozzunk a műhelyben! információs kártya.

## Tanfolyamok

Morzsamenü → képes hero → kompakt, kerámiaikonos programválasztó → három cikkcakkos programbemutató → közös türkiz tudnivalók → háromlépéses folyamat → helyi űrlap → közös lábléc.

Pontos adatok és árak itt szerepelnek, a kurzus 4 alkalom × 2,5 óra. A céges létszámot és időtartamot külön egyeztetik. A programgombok a helyi `#kapcsolat` űrlaphoz vezetnek, automatikus programválasztással. A hero résztvevőt mutat, nem Dórát. Részletes terv: `tanfolyamok-terv.md`.

## Műhely

Személyes hero → Dóra története hangulatképpel és egyszer szereplő számhármassal → műhelybemutató két összetartozó fotóval → türkiz személyes figyelemblokk → hatképes készkerámia-galéria (`#keramiak`) → rövid bézs lezárás → közös lábléc.

Asztalon három-, tableten két-, mobilon egyoszlopos galéria. A képek teljes fotóként nagyíthatók, billentyűzettel és megfelelő fókuszkezeléssel. Nincs külön galériaoldal vagy űrlap. Részletes terv: `muhely-terv.md`.

## Kapcsolat

Morzsamenü → rövid, képes bevezető → bézs elérhetőségek és űrlap → törtfehér gyakori kérdések → közös lábléc.

Az elérhetőségek alatt Szentendre-térkép látható, a kitalált bemutatócímre helyjelölés nélkül. Nincs új e-mail vagy telefonszám. Az eredeti űrlapmezők és működés megmaradtak; az űrlapot és címét tartalmazó szakasz `id="erdeklodes"` azonosítót és 7 rem görgetési ráhagyást kapott. A korábbi `#kapcsolat` horgony is megmarad. A négy gyakori kérdés natív `details`/`summary` elemekből áll. Részletes terv: `kapcsolat-terv.md`.

## Lábléc, adatkezelés és küldés

Közös márkaszöveg, bemutatócím, nyitvatartás, előzetes egyeztetés, négy navigációs link és adatkezelési link. Alsó sor: © 2026 Agyagpad · Fiktív vállalkozást bemutató webdesign-vizsgamunka.

Az Adatkezelés oldal az űrlapot, a külső térképet és a pótlandó valós üzemeltetői adatokat ismerteti. A Netlify-kód előkészített, de a fogadó felhasználói döntés alapján inaktív. Éles kézbesítést még nem igazoltunk. Beállítás: `urlap-beallitas.md`.

## Tervezési bizonyíték és ellenőrzés

Az eredeti oldaltérkép és drótváz a kezdeti tervezést dokumentálja. A `beadas/tervezesi-folyamat/03-aktualis-oldalterkep.png` már a fenti ötoldalas állapotot mutatja. Az aktuális nézetképek a `beadas/jelenlegi-oldal/` mappában találhatók. Az 53 sikeres nézetpróba és az űrlapszimulációk összefoglalója: `ellenorzes/eredmenyek.md`.
