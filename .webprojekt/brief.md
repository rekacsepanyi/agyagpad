# Projektbrief: Agyagpad kerámiaműhely

Frissítve: 2026. november 14. Aktuális tartalmi forrás: szovegek.md 3.4; arculat: design-system.md 4.10.

## Ügyfél és keret

Az Agyagpad kitalált szentendrei kerámiaműhely. Az oldal fiktív vállalkozást bemutató webdesign-vizsgamunka; ezt a közös lábléc jelzi. A tulajdonoskarakter Fehér Dóra. A bemutatócím 2000 Szentendre, Agyagliget köz 4.; kitalált adat, nem ellenőrzött vagy látogatható valódi műhely. Nem készül valós címre mutató térképtű. A kapcsolatkezelés valódi üzemeltetői adatai még szükségesek.

## Célcsoport és cél

Kezdők, kikapcsolódást kereső felnőttek, ajándékötletet keresők és kisebb céges csapatok. Fő cél a program megismerése, majd érdeklődés a szabad időpontokról. A beküldés nem automatikus helyfoglalás.

## Programok és pontos adatok

| Program | Alkalom és időtartam | Heti időbeosztás | Ár |
| --- | --- | --- | --- |
| Korongozó kóstoló | 1 alkalom, 3 óra | Szombat 14:00–17:00 | 18 500 Ft / fő |
| Négyhetes kezdő kurzus | 4 alkalom, 4 × 2,5 óra | Négy egymást követő szerda 17:00–19:30 | 65 000 Ft / fő, a teljes kurzusra |
| Céges csapatépítő | Egyedi időtartam, egyeztetés szerint | Egyeztetett időpont | Egyedi ajánlat |

A részletes programadatok a tanfolyamok.html oldalon maradnak. A főoldalon ár nélküli, élményalapú összefoglalók jelennek meg: „3 óra alkotás és kikapcsolódás”, „4 hét, egymásra épülő alkalmakkal”, „Közös alkotás, egyeztetett időpontban”. A link felirata Részletek és árak.

A közös részvételi tudnivalók mindkét oldalon azonosak: kezdőként is lehet csatlakozni; az agyag, máz és két égetés az árban van; a kezdő foglalkozásokon legfeljebb hat fő; a szárítás és égetés után körülbelül két hét múlva vihetők haza a tárgyak; nincs garantált darabszám vagy hibátlan végeredmény; a konkrét kezdést és férőhelyet egyeztetjük. A céges program résztvevőszámát külön egyeztetjük.

## Friss karaktertörténet

A felhasználó november 14-én felülírta a korábbi 2018–2024-es idővonalat. Fehér Dóra 2009-ben tanulta a korongozás alapjait; a szövegben népi iparművészként szerepel. Számadatok: 15+ év szakmai tapasztalat, 1500+ tanítvány, 7000+ alkotás. Ezek újonnan megadott, fiktív karakteradatok. Nem valós személy elismerései vagy ellenőrzött referenciái. Véleményeket vagy új díjakat nem adunk hozzá.

## Oldalszerkezet és CTA-k

- Főoldal: koncepcio-1-udvari-muhely.html, négy szekcióval: kezdo, tanfolyamok, muhely, kapcsolat.
- Fejléc CTA: Érdeklődöm → a Tanfolyamok oldalon helyi #kapcsolat, más aloldalakon a főoldali #kapcsolat.
- Hero H1: Alkoss agyagból, bontakozz ki Szentendrén.
- Hero CTA-k: Megnézem a tanfolyamokat és Megismerem a műhelyt.
- Programkártyák: részletes tanfolyamoldali horgonyokra mutatnak.
- Dóra bemutatkozása után három számadat szerepel, idővonal nincs.
- Műhelybolt CTA: Felfedezem a kerámiákat → muhely.html#keramiak.
- Létező aloldalak: tanfolyamok.html, muhely.html, adatkezeles.html.
- Az index.html még koncepcióválasztó; élesítés előtt a kiválasztott oldal legyen a belépési pont.

## Kerámiák és képek

Bögrék, tálak, tányérok és vázák bemutatása, online vásárlás nélkül. A muhely.html négy meglévő, optimalizált WebP-képet használ: kész bögrék, formálódó váza, korongozási folyamat, műhelyeszközök. A kész és készülő tárgyakat a feliratok megkülönböztetik. További kész tál-, tányér- és vázafotó később bővítheti a termékbemutatást; ilyen képeket nem találunk ki.

A felhasználó Freepik stock fotókat adott, felhasználási jogukról ő tájékoztatott. A tételes forrás- és licencadatokat élesítés előtt rögzíteni kell. Minden felhasznált tartalmi fotó többméretű WebP, tartalomhoz illő alt szöveggel. A logó és favicon átlátszó, a bögre jobb oldala türkiz.

## Űrlap – újonnan kért valódi működés

Netlify Forms-ra előkészített, statikus HTML-űrlap, valódi POST-kóddal, mezőhöz rendelt magyar hibákkal, sikerjelzéssel kizárólag pozitív fogadói válasz után. Hiba esetén megmaradnak az adatok; küldés közben nincs dupla beküldés.

A felhasználó november 14-i válasza: még nincs Netlify-oldal, a fogadót később állítjuk be. Ezért a küldés jelenleg nincs élesítve. Hiányzik az élő Netlify-projekt, a bekapcsolt form detection, az értesítési e-mail-cím, a valódi üzemeltető adatkezelési adatai és az éles próbaüzenet. Pontos lista: urlap-beallitas.md. A helyi szimuláció nem e-mail-kézbesítési bizonyíték.

A kiírás eredetileg ajánlott extraként említette a működő űrlapot; a felhasználó ezt most külön kötelező projektkövetelménnyé tette. Ezt a tételt az éles próba előtt nem jelöljük teljesítettnek.

## Nyitvatartás, arculat és lábléc

Műhelybolt: csütörtök–vasárnap 10:00–18:00. A foglalkozásokon előzetes egyeztetéssel lehet részt venni; a heti programbeosztás ettől külön értendő.

A meglévő hat UI-szín, Merriweather és Inter, váltakozó szakaszlekerekítések és türkiz fotómotívumok megmaradnak. A kártyák ikonjai a meglévő vonalas rendszer terrakotta változatai, nem új ikonstílus. A szövegforrás és a design system az irányadó.

Közös lábléc: rövid márkaszöveg, cím és nyitvatartás, négy navigációs link, adatkezelési link. Alsó sor: © 2026 Agyagpad · Fiktív vállalkozást bemutató webdesign-vizsgamunka.

## Vizsgakeret és hátralévő lépések

Statikus HTML/CSS, reszponzív megjelenés, legalább három oldal vagy szekció, CTA, saját tartalom és egységes arculat. A tervezési képek, az aktuális felvételek és a rövid AI-leírás a beadas mappában vannak. Élő URL és publikálás még hiányzik; a valódi űrlapfogadást ezután ellenőrizni kell. Beadási határidő: 2026. november 24.; kérhető haladékkal december 1.

A Tanfolyamok aloldal új szerkezete: résztvevői hero (hero3.jpg), kompakt programválasztó, három képes részletes programblokk, közös tudnivalók, háromlépéses folyamat, helyi űrlap és közös lábléc. A hero szereplője nem Fehér Dóra. Programgombok: helyi űrlap és automatikus programválasztás. Részletes terv: tervezes/tanfolyamok-terv.md.
