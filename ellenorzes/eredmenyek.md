# Legutóbbi ellenőrzés – 2026. november 16.

Öt oldal 33 telefon/tablet beállításon, összesen 165 nézetben: 320–1368 px, álló/fekvő tájolás, köztes méretek, 200%-os szöveg. A nagyított fekvő tabletnézetben talált főoldali subgrid-szövegtúlcsordulás és túl szűk bemutatkozó hasáb javítva. A szövegdobozok, képek, űrlapmezők és a menü külön is ellenőrzöttek. Részletes gépi eredmény: reszponziv-ellenorzes-2026-11-16.json.

A Műhely kért galériabevezetője cserélve; a cím, képek, képaláírások, galériaelrendezés nem változott. A Kapcsolat hero a részleteket. kifejezése nem törhető szóközt használ. Az általános kiadási ellenőrzés 35 nézete a működést és az asztali megjelenést is vizsgálja. Az alábbi jelentések korábbi állapotokat dokumentálnak.

# Aktuális kiegészítés – SEO és public kiadás

2026. november 14.: a webes források a public mappába költöztek, a főoldal public/index.html. A legfrissebb teszt a seo-publikalas-ellenorzes.json: 35 sikeres nézetpróba. A három űrlap öt-öt HTTP-szimulációja sikeres. A domainfüggő SEO-elemek a még hiányzó webcímre várnak; részletes állapot: tervezes/seo-es-publikalas.md. Az alábbi 53 nézetpróba a költöztetés előtti állapot történeti ellenőrzése.

# Agyagpad – végső reszponzív ellenőrzés

Frissítve: 2026. november 14. Revízió: 2026-11-14-responsive-final-review.

Az öt aktuális oldal: főoldal, Tanfolyamok, Műhely, Kapcsolat és Adatkezelés. A mostani ellenőrzés nem indokolt újabb dizájnmódosítást.

## Nézetek és arányok

Összesen 53 sikeres oldal/nézet-próba készült Chrome és Playwright segítségével:

- Általános oldalellenőrzés: 22 nézet, 320–1440 px között; a főoldalon 200%-os szövegnagyítással is.
- Tanfolyamok részletes ellenőrzése: 11 nézet, köztes szélességekkel és 200%-os szövegnagyítással.
- Műhely részletes ellenőrzése: 10 nézet, köztes szélességekkel és 200%-os szövegnagyítással.
- Kapcsolat részletes ellenőrzése: 10 nézet, köztes szélességekkel és 200%-os szövegnagyítással.

Nincs vízszintes túlcsordulás, levágott szöveg, hiányzó helyi kép vagy JavaScript-hiba. A helyi betűk és optimalizált WebP-k betöltődnek. A mobilmenü, ugrólink, fókuszjelölések és a hivatkozási célok ellenőrzöttek. A szövegek keskeny képernyőn természetesen több sorba törhetnek.

A Tanfolyamok oldalon megmaradt a cikkcakkos elrendezés, az egységes fotókeret, a 22 px-es díjazás és az asztali gombok fotó aljához igazítása. Mobilon kép–szöveg sorrend és balra igazított gombok szerepelnek. A programgombok a helyi űrlaphoz vezetnek, megfelelő programkiválasztással.

A Műhely oldalon a képpár asztalon visszafogottan átfed, mobilon egymás alá kerül. A hatképes galéria egységes kereteket használ; a mintázott tál kivágása kitölti a keretet, nagyításkor a teljes fotó látható. Mind a hat kép nagyítója, bezárása, Escape- és fókuszkezelése ellenőrzött.

A Kapcsolat oldalon a 40–60%-os kapcsolati oszloppár mobilon egymás alá kerül. Az eredeti űrlap HTML-je változatlan. A térkép Szentendrét mutatja, nem tesz jelölőt a kitalált címre. A négy natív gyakori kérdés billentyűzettel is kezelhető.

## Közös fejléc és hivatkozások

Az Érdeklődöm fejlécgomb mind az öt oldalon `kapcsolat.html#erdeklodes` célra vezet, asztali és mobilmenüben egyaránt. Az azonosító az űrlap címét is tartalmazó szakaszon található. A 7 rem görgetési ráhagyás rögzített fejléccel is helyet hagy a címnek; ezt a külön fejlécellenőrzés is vizsgálta. A többi programgomb célja megmaradt.

## Űrlappróbák és korlátjuk

A főoldal, a Tanfolyamok és a Kapcsolat űrlapján külön-külön öt szimulált küldési ellenőrzés sikeres: HTTP-hiba, elküldött mezők, hálózati hiba, folyamatban lévő küldés és pozitív válasz utáni sikerjelzés. Hibakor a bevitt adatok megmaradnak; a kötelező mezők és az e-mail magyar mezőhibákkal ellenőrzöttek. A küldés közben nincs dupla beküldés.

**Éles e-mail-kézbesítés nincs igazolva.** A felhasználó döntése alapján a Netlify-oldal és a fogadó beállítása későbbi lépés. Az inaktív konfiguráció nem mutat hamis sikerüzenetet. A szimuláció nem helyettesíti az éles próbaüzenetet.

## Frissített mentések és hátralévő lépések

A jelenlegi szövegek, oldaltérkép, tartalomexport, forráslenyomatok és beadási képek frissültek. Az eredeti tervezési képek történeti bizonyítékként megmaradtak. A jelenlegi oldalakról mobil-, álló/fekvő tablet- és asztali képek találhatók a `beadas/jelenlegi-oldal/` mappában.

Élesítés előtt még szükséges: a régi koncepcióválasztó helyett megfelelő publikálási kezdőlap, Netlify-beállítás és publikus URL, valós üzemeltetői adatkezelési adatok, címzett és éles űrlappróba. Ezeket a GitHub-mentés nem teljesíti.

Gépi eredmények: `fo-ellenorzes.json`, `tanfolyamok-ellenorzes.json`, `muhely-ellenorzes.json`, `kapcsolat-ellenorzes.json`, `fejlec-erdeklodes-ellenorzes.json`, valamint a három `*urlap-ellenorzes.json` fájl. A képernyőképeken a valódi külső térképet ellenőriztük; az elkülönített HTTP-szimulációban helyettesítő térkép szerepel.
