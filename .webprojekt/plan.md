# Agyagpad – három weboldal-koncepció terve

> Történeti tervezési anyag. Az eredeti folyamatot őrzi; az aktuális, megtartott 16527e0 verzióhoz a tervezes/aktualis-oldalterkep.md, tervezes/design-system.md és tervezes/szovegek.md az irányadó. A régi ár- és CTA-elrendezés nem aktuális megvalósítási utasítás.


Állapot: a felhasználó jóváhagyta mindhárom irányt; a három helyi HTML-prototípus, WebP-assetek és böngészős ellenőrzések elkészültek. Belépési pont: a projekt index.html fájlja.

## Közös alap

Források: agyagpad-projektbrief.md, design-system.md, szovegek.md, az images/fotók mappa tényleges képei. A koncepciók a kitalált szentendrei kerámiaműhely négy szekciós, statikus weboldalának eltérő elrendezései. Az elsődleges cél az érdeklődő űrlap elérése, a programkártyákból előzetes programválasztással.

Mindhárom változatban megmarad:

- A paletta: #F9F8F6, #2D2A26, #A65B32, #D9C3B0, #8C4A27.
- Merriweather címsorok, Inter szöveg és UI, az elfogadott méretskálával.
- A saját, szíves bögrés logó és favicon.
- A négy fő szekció, a pontos programadatok és árak, Dóra története és a bemutatócím jelölése.
- A szovegek.md szerinti szövegek, CTA-k és programválasztás.
- A kapszulagombok, 16 px-es kártya- és fotólekerekítés, 12 px-es mezőlekerekítés.
- A mobilon is olvasható, teljes tartalom; a mobilmenü és a billentyűzetes használat.
- A vélemények és review-szekció elhagyása.

A különbséget az elrendezés, a képek mérete és sorrendje, a szekciók ritmusa és a meglévő színek felületi aránya adja. Nem készül új színpaletta vagy betűpáros. A koncepciók megengedett szerkezeti változatai az elfogadott tartalmi tervnek.

## 1. Udvari műhely

**Megközelítés:** személyes, kiegyensúlyozott bemutatkozás. A nyitó szekció asztalon két közel azonos szélességű oszlop: bal oldalon főcím, leírás és CTA-k; jobb oldalon Dóra karakterének álló képe. A programok három összehasonlítható kártyán jelennek meg. A műhelyszekcióban portré és bemutatkozás, alatta rövid idővonal és egy használatikerámia-kép. Az oldal alapja törtfehér, a lábléc homokszínű.

**Képek:** hero.jpg a nyitó szekcióban; ugyanennek a karakternek a hero1.jpg képe a bemutatkozásnál; a három programhoz a megfelelő névvel ellátott képek; muhelybolt.jpg a termékbemutatáshoz.

**Miért illik:** a műhelyt vezető alkotó kerül előtérbe, a kezdő látogató könnyen megismeri az embert és a kínálatot.

```text
Fejléc: logó                         navigáció
Főcím + bevezető + két CTA           álló alkotófotó
Tanfolyamkártya | tanfolyamkártya | tanfolyamkártya
Portré              bemutatkozás és rövid mérföldkövek
Űrlap                               helyszín és tudnivalók
Homokszínű lábléc
```

## 2. Agyagnapló

**Megközelítés:** szerkesztett, naplószerű elrendezés, nagyobb szabad terekkel. A nyitásban a szöveg kap teljes szélességű, balra zárt helyet; alatta alacsony, aszimmetrikus képpár mutatja az alkotót és az anyag részleteit. A három program kártyája váltakozó kép- és szövegarányú, de az árak és gombok következetesen összehasonlíthatók. A Dóra-bemutatkozás mellett keskeny részletfotó és függőleges idővonal jelenik meg. A kontaktblokk külön törtfehér űrlapfelületet kap a homokszínű környezetben.

**Képek:** hero1.jpg a széles nyitóképpárban, reszletfoto3.jpg az eszközökhöz, reszletfoto2.jpg az anyagközeli részlethez; a programképek és muhelybolt.jpg a tartalomhoz kapcsolódó helyen.

**Miért illik:** az alkotás apró részletein keresztül mutatja be a műhelyt, a történetnek és a használati tárgyaknak is teret ad.

```text
Fejléc: logó                         navigáció
Balra zárt főcím és szöveg; két CTA
Széles alkotófotó                    keskeny eszközfotó
Programok: három változó kép/szöveg arányú kártya
Bemutatkozás + idővonal              keskeny részletfotó
Homokszínű kapcsolati környezet, törtfehér űrlap
Lábléc
```

## 3. Az alkotás közelről

**Megközelítés:** a kéz és az agyag mozdulata a legerősebb vizuális elem. A fejléc alatt széles korongozásfotó, alatta önálló, egyszínű blokkban főcím, leírás és CTA-k. Nincs fotóra írt szöveg. A programok képei kisebbek, a tartalmi összehasonlítás feszesebb. A műhelyszekcióban a kész kerámiák széles képe, Dóra bemutatkozása pedig egy kisebb portréval párosul. A nyitás képhangsúlyos, a további szekciók nyugodtabbak.

**Képek:** korongozo-kostolo.jpg vagy reszletfoto1.jpg széles nyitóképként, reszletfoto2.jpg közeli kiegészítésként; muhelybolt.jpg a használati kerámiákhoz; hero.jpg ugyanahhoz a Dóra-karakterhez.

**Miért illik:** először az alkotás élményét teszi kézzelfoghatóvá, majd a programok és az alkotó bemutatásával segít dönteni.

```text
Fejléc: logó                         navigáció
Széles, anyagközeli korongozásfotó
Külön világos blokk: főcím + szöveg + CTA-k
Három áttekinthető, kisebb fotós programkártya
Széles kerámiakép; bemutatkozás kisebb portréval
Űrlap                               kapcsolati információk
Lábléc
```

## A három irány különbsége

| Szempont | Udvari műhely | Agyagnapló | Az alkotás közelről |
| --- | --- | --- | --- |
| Nyitás | Osztott szöveg és álló portré | Szövegközpontú nyitás, alatta képpár | Széles anyagközeli kép, alatta szöveg |
| Képi fókusz | Alkotó és műhely | Eszközök, részletek, történet | Kéz, anyag, kész tárgy |
| Sűrűség | Kiegyensúlyozott | Levegős, szerkesztett | Erős képi nyitás, tömörebb kínálat |
| Szekcióritmus | Következetes kétoszlopos blokkok | Váltakozó arányok és függőleges történet | Széles képsávok és nyugodt szövegblokkok |
| Homokszín szerepe | Lábléc és kisebb információs rész | Kapcsolati környezet és történeti részletek | Rövid váltakozó szekcióhátterek |

## Képkiválasztás és WebP-előkészítés

A jelenlegi mappában 14 eredeti JPEG található; egyes képek 20 MB-nál is nagyobbak. Áttekintésük: arculat/foto-attekinto.jpg; méretleltár: arculat/foto-leltar.json.

- Csak tartalmilag releváns képek kerülnek az oldalakra, nem cél mind a 14-et felhasználni.
- Dóra portréjához a hero.jpg és hero1.jpg ugyanazon modellhez tartozó sorozatát használjuk. A hero3.jpg és hero4.jpg eltérő szereplőit nem nevezzük szintén Dórának.
- A ceges-csapatepito.jpg munkafolyamatot ábrázol; illusztrációként használható, de nem állítjuk, hogy tényleges céges csoportkép.
- A programnevekkel ellátott fájlok a hozzájuk kapcsolódó kártyákhoz kerülnek, az arc és a dolgozó kéz megőrzésével.
- Az eredeti JPEG-ek változatlanul megmaradnak. A honlap kizárólag új, optimalizált WebP-fotópéldányokat használ.
- Tervezett kimenet: images/webp/; 480, 800 és 1200 px szélességű változatok, széles nyitóképhez legfeljebb 1600 px. Soha nem nagyítjuk fel a forrást.
- Kiinduló WebP-minőség: 78–82, képenként vizuálisan ellenőrizve. Tájékoztató cél: fő nyitókép 250 KB alatt, kártya és portré 150 KB alatt, ha a részletminőség engedi.
- Reszponzív srcset/sizes, méretattribútumok, releváns magyar alt. A nyitókép nem lazy, az oldal alatti képek igen.
- Képenként rögzített eredeti fájl, változatméret, WebP-fájlméret és tömörítési eredmény készül az optimalizáláskor.

## Megvalósítás és ellenőrzés jóváhagyás után

1. A meglévő brief átvétele a generalas skill munkafájljába, a forrás megőrzésével; a jóváhagyott irányok rögzítése.
2. Közös képkészlet WebP-optimalizálása, logó webes előkészítése.
3. Három önálló, statikus HTML-koncepció, irányonként elkülönített munkával. A generalas skill előírása szerint párhuzamos alügynökök segíthetnek az építésben; a közös fájlok összehangolását a fő feladat kezeli.
4. Belépési pont: index.html koncepcióválasztó, amely mindhárom változathoz vezet.
5. Asztali és mobil böngészős ellenőrzés: képek betöltése, tördelés, vízszintes túlcsordulás, navigáció, menü, CTA-k és programválasztás.
6. Képernyőképek és rövid ellenőrzési jegyzőkönyv mentése.

Tervezett prototípusfájlok:

- koncepcio-1-udvari-muhely.html
- koncepcio-2-agyagnaplo.html
- koncepcio-3-az-alkotas-kozelrol.html

Ez a kör helyi, böngészhető koncepciókészítés. Az élesítés a kiválasztott változat véglegesítése után külön munkalépés. A jelenlegi prototípus nem állít valódi üzenetküldési sikert: a végleges adatkezelési tájékoztató és az űrlapfogadó hiányában az űrlap nem gyűjt éles adatot. A navigáció és a programválasztás már kipróbálható lesz.

## Jóváhagyási pont

A generalas skill az irányok bemutatása után kifejezett jóváhagyást kér a prototípusépítés előtt. A terv jóváhagyása mindhárom fenti helyi koncepció, a hozzájuk szükséges WebP-képek és az ellenőrzés elkészítésére vonatkozik. Nem kell közülük előre egyetlen nyertest választani.

