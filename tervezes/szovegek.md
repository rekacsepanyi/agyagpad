# Agyagpad – a weboldal szövegei

Verzió: 1.1 · 2026. november 11.  
Állapot: az építéshez rögzített weboldalszövegek; az adatkezelési tájékoztató és a képkreditek külön, még előkészítendő tartalmak.

Az Agyagpad egyetlen görgethető főoldal, négy szekcióval. Ez a dokumentum a felhasználó szövegtervének javított, kiegészített változata. A szerkezeti minta az iskolai Eliza Beauty `forrasok/szovegek.md` fájlja; a vállalkozás, a programok, a történet és a megjelenő szövegek az Agyagpad saját projektanyagából származnak.

Az Agyagpad és Fehér Dóra kitalált szereplők. A dátumok és mérföldkövek a felhasználó által az aktuális szövegtervbe beemelt karaktertörténet részei. A bemutatóprojekt-jelzés az oldalon is megjelenik. Nem teszünk hozzá díjakat, intézményi elismeréseket vagy vásárlói véleményeket.

A **Kicker** a címsor fölötti rövid felirat; nem külön címsorszint. A szekciószámok és technikai megjegyzések tervezési jelölések, nem látható weboldalszövegek. A megadott CTA-feliratok megjelenítését a `design-system.md` szabályozza.

---

## Közös elemek

### Fejléc

- **Logó:** a megadott bögrés Agyagpad-logó „Kerámiaműhely” alcímmel.
- **Logóhivatkozás hozzáférhető neve:** Agyagpad – kezdőlap
- **Menü:** Kezdőlap · Tanfolyamok · Műhely · Kapcsolat
- **Mobil menügomb, zárt állapot:** Menü
- **Mobil menügomb, nyitott állapot:** Menü bezárása
- **Billentyűzetes ugróhivatkozás:** Ugrás a tartalomra

| Menüelem | Főoldali cél | Kiegészítő oldalról elérendő cél |
| --- | --- | --- |
| Kezdőlap / logó | `#kezdo` | `index.html#kezdo` |
| Tanfolyamok | `#tanfolyamok` | `index.html#tanfolyamok` |
| Műhely | `#muhely` | `index.html#muhely` |
| Kapcsolat | `#kapcsolat` | `index.html#kapcsolat` |

Megvalósítási megjegyzés: a relatív `index.html#...` célok az azonos könyvtárba kerülő statikus oldalakra vonatkoznak. Az „Ugrás a tartalomra” célja minden dokumentum saját fő tartalma, nem egy másik oldal.

### Közös érdeklődési lehetőség

A főoldal alján, közvetlenül a lábléc előtt a **04 / Kapcsolat és érdeklődés** szekció szerepel. Ez tölti be az Eliza-minta ismétlődő időpontkérő blokkjának szerepét. Nem készül mellette még egy azonos űrlap vagy ötödik fő szekció.

Az adatkezelési tájékoztatóra és a beküldés visszajelző oldalára nem ismételjük át a teljes kapcsolati szekciót. Ezek a saját feladatukhoz szükséges tartalmat, a közös fejlécet és láblécet kapják. A fejléc Kapcsolat linkje visszavezet a főoldali űrlaphoz.

### Lábléc

#### Márka és rövid bemutatkozás

- **Márkanév / logó:** Agyagpad – Kerámiaműhely
- **Bemutatkozás:** Kézzel készült kerámiák és kezdőbarát korongozás Szentendrén. Bögrék, tálak és közös alkotóélmények, kis csoportban.

#### Bemutatócím és nyitvatartás

- **Csoportcím:** Műhely és nyitvatartás
- **Cím:** 2000 Szentendre, Agyagliget köz 4.
- **Közvetlen címjelölés:** Kitalált bemutatócím, nem látogatható műhelyhelyszín.
- **Nyitvatartás:** Csütörtök–vasárnap: 10:00–18:00
- **Tanfolyamok:** A programok időbeosztását a Tanfolyamok résznél találod.
- **A „Tanfolyamok” szöveg célja:** főoldalon `#tanfolyamok`, kiegészítő oldalon `index.html#tanfolyamok`.

Megvalósítási megjegyzés: a nyitvatartás a kitalált műhely bemutatott működéséhez tartozik. A címjelölést nem rejtjük tooltipbe. A bemutatócím nem kap valós helyszínt jelölő térképtűt vagy útvonaltervező linket. Nyilvános telefonszám és e-mail-cím nincs megadva; nem írunk be helyettük fiktív működő elérhetőséget.

#### Navigáció és kapcsolat

- **Csoportcím:** Fedezd fel
- **Hivatkozások:** Kezdőlap · Tanfolyamok · Műhely · Kapcsolat
- **Kapcsolati hivatkozás felirata:** Írj az űrlapon
- **Cél:** főoldalon `#kapcsolat`, kiegészítő oldalon `index.html#kapcsolat`.

#### Alsó sor és projektjelzés

- **Alsó sor:** © 2026 Agyagpad · AI webdesigner vizsgamunka
- **Adatkezelési link:** Adatkezelési tájékoztató → `adatkezeles.html`
- **Projektjelzés:** Az Agyagpad kitalált vállalkozás, az oldal bemutatóprojekt. Az űrlap nem foglal valódi tanfolyami helyet.
- **Képhasználati megjegyzés:** A fotók a kitalált műhely és szereplő illusztrációi.

A szükséges képkreditek e megjegyzés alatt kapnak helyet, a ténylegesen felhasznált képek forrás- és licencadatai szerint. Pontos szövegük még nem ismert; helykitöltő vagy ellenőrizetlen szerzőnév nem kerül az éles láblécbe. Az évszám a kiadás éve, későbbi kiadáskor frissítendő.

---

## Főoldal

### 01 / Nyitó szekció (`#kezdo`)

- **Kicker:** SZENTENDREI KÉZMŰVES MŰHELY
- **Főcím (H1):** Alkoss agyagból, kapcsolódj ki Szentendrén.
- **Leírás:** Kezdőbarát korongozás kis csoportban, egy hangulatos szentendrei kerámiaműhelyben.
- **Fő CTA:** Érdeklődöm a tanfolyamról → `#kapcsolat`
- **Másodlagos CTA:** Megnézem a műhelyt → `#muhely`

A fő CTA az űrlaphoz vezet, és a programválasztót a „Válassz programot” alapállapotra állítja. Nem foglalási gomb. A részletes viselkedést az űrlap alábbi leírása rögzíti.

### 02 / Tanfolyamok (`#tanfolyamok`)

- **Kicker:** PROGRAMOK ÉS ÁRAK
- **Címsor (H2):** Válaszd ki a neked való alkotást

#### Korongozó kóstoló

- **Kártyakicker:** Első találkozás az agyaggal
- **Címsor (H3):** Korongozó kóstoló
- **Időbeosztás:** Szombat 14:00–17:00
- **Időtartam:** 1 alkalom · 3 óra
- **Ár:** 18 500 Ft / fő
- **Gomb:** Érdeklődöm a tanfolyamról → `#kapcsolat`, Korongozó kóstoló előzetes kiválasztásával.

#### Négyhetes kezdő kurzus

- **Kártyakicker:** Alapok négy alkalom alatt
- **Címsor (H3):** Négyhetes kezdő kurzus
- **Időbeosztás:** Szerda 17:00–19:30
- **Időtartam:** Négy egymást követő alkalom · 4 × 2,5 óra
- **Ár:** 65 000 Ft / fő, a teljes kurzusra
- **Gomb:** Érdeklődöm a tanfolyamról → `#kapcsolat`, Négyhetes kezdő kurzus előzetes kiválasztásával.

#### Céges csapatépítő

- **Kártyakicker:** Közös élmény
- **Címsor (H3):** Céges csapatépítő
- **Időbeosztás és időtartam:** Egyedi egyeztetés szerint
- **Ár:** Egyedi árajánlat alapján
- **Gomb:** Érdeklődöm a tanfolyamról → `#kapcsolat`, Céges csapatépítő előzetes kiválasztásával.

#### Közös részvételi tudnivalók

- **Blokkcím:** Amit érdemes tudnod
- Legfeljebb hatfős csoportban dolgozunk, a kezdő programokhoz előképzettség nem szükséges.
- A díj tartalmazza az agyagot, a mázat és a két égetést.
- Az elkészült tárgyak az utolsó foglalkozás után két héttel vehetők át.
- A tanfolyamon a tanulás és az alkotás élménye a fontos; meghatározott darabszámot vagy hibátlan végeredményt nem garantálunk.
- Az időbeosztás tájékoztató jellegű. A bemutatott működés szerint a konkrét indulás és a szabad férőhely külön egyeztetéssel tisztázható.

A kártyák és ez a blokk a kitalált vállalkozás kínálatát szemléltetik. Az űrlap melletti és a láblécben elhelyezett projektjelzés egyértelművé teszi, hogy nincs valódi tanfolyami jelentkezés.

### 03 / Műhely és alkotó (`#muhely`)

- **Kicker:** AZ ALKOTÓ ÉS A HELYSZÍN
- **Címsor (H2):** Ismerd meg az Agyagpadot

#### Bemutatkozás

Fehér Dóra vagyok, az Agyagpad alapítója. Az első korongozó foglalkozásomon az fogott meg, hogy az agyag minden apró mozdulatra válaszol. Ebből a kíváncsiságból született meg később a saját szentendrei műhelyem.

Ma olyan bögréket, tálakat és tányérokat készítek, amelyeket jó kézbe venni a hétköznapokban. A foglalkozásokon pedig azt szeretném megmutatni, hogyan indulhatsz el te is. Kis csoportban dolgozunk, hogy mindenkinek jusson figyelem és segítség az első mozdulatokhoz.

#### Rövid mérföldkövek

- **2018 – Az első találkozás az agyaggal.** Egy korongozó foglalkozásból rendszeres alkotás születik.
- **2022 – Megnyílik az Agyagpad.** Saját műhely egy régi szentendrei udvari helyiségben.
- **2023 – Az első saját kollekció.** Kézzel készült bögrék, tálak és tányérok a mindennapokra.
- **2024 – Elindulnak a kezdő foglalkozások.** Közös alkotás legfeljebb hatfős csoportokban.

Mind a négy rövid mérföldkő használható, a bemutatkozással egy szekción belül; mobilon egymás alatt. Nem külön ötödik fő szekció. Ezek kitalált karakteradatok, nem valós szakmai referenciák.

#### Műhelybolt és kerámiák

- **Rövid szöveg:** Kézzel készült használati kerámiák: bögrék, tálak és tányérok. A tárgyakat az oldalon bemutatjuk; online vásárlásra nincs lehetőség.
- **Nyitvatartás:** Csütörtök–vasárnap: 10:00–18:00
- **Bemutatócím:** 2000 Szentendre, Agyagliget köz 4.
- **Közvetlen címjelölés:** Kitalált bemutatócím, nem látogatható műhelyhelyszín.

### 04 / Kapcsolat és érdeklődés (`#kapcsolat`)

- **Kicker:** ÉRDEKLŐDÉS ÉS KAPCSOLAT
- **Címsor (H2):** Melyik program érdekel?
- **Bevezető:** Válassz programot, vagy írd meg, mi érdekel az Agyagpaddal kapcsolatban. Ajándékozásról és a kerámiákról is kérdezhetsz.
- **Jól látható űrlapmegjegyzés:** Az űrlapon a bemutatóprojekt működését próbálhatod ki. Beküldésével nem foglalsz valódi tanfolyami helyet.
- **A kötelező jelölés magyarázata:** A csillaggal (*) jelölt mezők kitöltése kötelező.

#### Űrlapmezők

| Látható címke | Kötelező | Segítő szöveg / tartalom |
| --- | --- | --- |
| Név * | Igen | A neved |
| E-mail-cím * | Igen | E-mail-cím, amelyen elérhető vagy |
| Program * | Igen | Kezdeti állapot: Válassz programot |
| Üzenet | Nem | Írd meg, mire vagy kíváncsi. Ne adj meg érzékeny személyes adatot. |

Programválasztási lehetőségek, ebben a sorrendben. A számozás csak a dokumentumbeli sorrendet jelöli; a weboldalon natív HTML `<select>` mező és az alábbi `<option>` elemek készülnek, számozott feliratok nélkül:

1. Korongozó kóstoló
2. Négyhetes kezdő kurzus
3. Céges csapatépítő
4. Ajándékozás vagy egyéb érdeklődés

Minden mező saját, állandó címkét kap; a segítő szöveg nem helyettesíti a címkét. A kiválasztott program módosítható.

#### A programválasztó és a CTA-k viselkedése

- **Nyitó szekció fő CTA-ja:** a `#kapcsolat` űrlaphoz vezet; a programválasztó „Válassz programot” alapállapotba kerül, korábbi kártyaválasztás után is.
- **Tanfolyamkártya CTA-ja:** ugyanahhoz a `#kapcsolat` űrlaphoz vezet, de előre kiválasztja a kártyához tartozó programot.
- **Fejléc és lábléc Kapcsolat hivatkozása:** csak az űrlaphoz navigál; a már megadott programválasztást nem módosítja.
- **Adatmegőrzés:** egyik CTA sem törli a nevet, az e-mail-címet vagy az üzenetet. A programválasztás kézzel bármikor módosítható.
- **Alapállapot:** „Válassz programot”, üres `value=""` értékkel. Ez nem érvényes választás; a `required` mező beküldéséhez a négy lehetőség egyikét kell kiválasztani.

| Látható opciófelirat | HTML option value |
| --- | --- |
| Korongozó kóstoló | `kostolo` |
| Négyhetes kezdő kurzus | `kezdo-kurzus` |
| Céges csapatépítő | `csapatepito` |
| Ajándékozás vagy egyéb érdeklődés | `egyeb` |

A kártyagombok ezekre az értékekre hivatkoznak. JavaScript nélkül a hivatkozások továbbra is az űrlaphoz vezetnek, de az automatikus programválasztás helyett a látogató választ a legördülő listából.

#### Beküldés előtti szöveg

- **Adatkezelési sor:** Az üzenet elküldése előtt olvasd el az Adatkezelési tájékoztatót.
- **Linkfelirat:** Adatkezelési tájékoztató → `adatkezeles.html`
- **Gomb:** Érdeklődés elküldése

Ez a rövid sor navigáció a részletes tájékoztatóhoz, nem annak helyettesítője. A korábbi „kizárólag a tanfolyami jelentkezés megválaszolására” állítás nem szerepel: a tényleges adatkezelés részletei még meghatározandók. Nem kerül be automatikusan hírlevél-feliratkozás vagy marketinghozzájárulás.

#### Az űrlap melletti információk

- **Információs cím:** A bemutatott műhely
- **Bemutatócím:** 2000 Szentendre, Agyagliget köz 4.
- **Címjelölés:** Kitalált bemutatócím, nem látogatható műhelyhelyszín.
- **Nyitvatartás:** Csütörtök–vasárnap: 10:00–18:00
- **Rövid magyarázat:** Egy valódi műhelynél az érdeklődést időpont- és férőhely-egyeztetés követné. Ezen az oldalon ezt a működést szemléltetjük; valódi tanfolyamra nem lehet jelentkezni.

---

## Űrlap-visszajelzések

### Hiányzó vagy hibás adat

- **Összesítő szöveg:** Ellenőrizd a megjelölt mezőket.
- **Hiányzó név:** Add meg a neved.
- **Hiányzó e-mail:** Add meg az e-mail-címed.
- **Hibás e-mail:** Adj meg egy érvényes e-mail-címet.
- **Hiányzó program:** Válassz a Program mező lehetőségei közül. Ha nem tanfolyamról kérdezel, válaszd az „Ajándékozás vagy egyéb érdeklődés” lehetőséget.

Hibánál a többi mező tartalma megmarad. Az opcionális üzenet üresen is elküldhető. A hibaüzenet a hozzá tartozó mező mellett, képernyőolvasóval is elérhető módon jelenik meg.

### Küldés folyamatban

- **Gombfelirat:** Küldés…
- **Állapotszöveg:** Az üzenet elküldése folyamatban van.

Az ismételt beküldés a küldés idejére nem elérhető. Az állapotszöveg nem jelent sikeres kézbesítést.

### Sikeres beküldés

- **Cím:** Köszönjük az érdeklődést!
- **Szöveg:** Az üzenetet megkaptuk. Ez egy bemutatóprojekt: a beküldés nem jelent valódi tanfolyami jelentkezést vagy helyfoglalást.
- **Továbblépés:** Vissza a tanfolyamokhoz → főoldalon `#tanfolyamok`, külön visszajelző oldalról `index.html#tanfolyamok`.

A sikerüzenet csak igazoltan sikeres szolgáltatói fogadás után jelenhet meg. Nem ígérünk automatikus emberi választ vagy megadott válaszidőt. Ha a Netlify Forms külön visszajelző oldalra irányít, azon ugyanezek a szövegek szerepeljenek a közös fejléc és lábléc között. A közvetlen oldalmegnyitást nem szabad egy új, sikeres beküldés bizonyítékaként kezelni.

### Sikertelen beküldés

- **Cím:** Az üzenet nem ment el.
- **Szöveg:** Ellenőrizd az internetkapcsolatodat, majd próbáld újra. A megadott adatok az űrlapon megmaradtak.
- **Gomb:** Újrapróbálom

Az adatmegőrzésre vonatkozó mondat csak akkor használható, ha a megvalósítás valóban megőrzi a mezőket. Az újrapróbálás ismételt küldést kezdeményez, és a folyamatban lévő állapotot jeleníti meg.

---

## Kiegészítő oldal: adatkezelési tájékoztató

- **Oldalcím / H1:** Adatkezelési tájékoztató
- **Visszavezető link:** Vissza az érdeklődő űrlaphoz → `index.html#kapcsolat`
- **Fejléc és lábléc:** a közös elemek szerint, főoldali szekciókra mutató hivatkozásokkal.

A részletes tájékoztató szövege még nem végleges. Az oldal üzemeltetőjének valós adatai, az űrlap fogadóhelye és a ténylegesen választott adatkezelés ismeretében készítendő el. A kitalált Fehér Dóra és a bemutatócím nem helyettesíti a tényleges üzemeltető adatait. Hiányos tájékoztatóra mutató linkkel a működő adatgyűjtés nem tekinthető késznek. Ez előkészítési megjegyzés, nem publikálandó helykitöltő szöveg.

---

## Oldalcím és keresőleírás – szövegjavaslat

- **Főoldal title:** Agyagpad – Kerámiaműhely Szentendrén | Bemutatóprojekt
- **Főoldal meta description:** Kezdőbarát korongozás, kis csoportos tanfolyamok és kézzel készült kerámiák egy kitalált szentendrei műhely bemutatóoldalán. AI webdesigner vizsgamunka.
- **Adatkezelési oldal title:** Adatkezelési tájékoztató | Agyagpad
- **Sikeres beküldési oldal title, ha külön oldal készül:** Üzenet visszajelzése | Agyagpad

Ez a szövegcsomag még nem jelenti a technikai SEO megvalósítását.

## Élesítés előtt még szükséges adatok

1. A tényleges oldalüzemeltető adatai, az űrlap fogadó e-mail-címe és a végleges adatkezelési tájékoztató. Ezeket nem találjuk ki a karakterhez.
2. A felhasznált fotók pontos forráslinkjei és a szükséges képkreditek végleges szövege.
3. A képekhez tartozó alt szövegek, a végleges képkiválasztás és kivágás után.

A négy fő szekció, a közös fejléc és lábléc, a CTA-k és az űrlap állapotszövegei rögzítve vannak. Új ár, díj, garancia, válaszidő vagy szolgáltatás csak új tartalmi döntés alapján kerülhet a szövegekbe. Az Eliza-mintában szereplő vélemények, hírlevél, garanciák és külön oldalak nem részei az Agyagpad tartalmi tervének.
