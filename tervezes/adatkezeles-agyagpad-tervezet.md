# Agyagpad adatkezelési tájékoztató tervezet

2026. november 17. A tényleges adatkezelő adatai és a GA4-fiók megőrzési beállítása még hiányoznak. A 90 napos próbaüzenet-megőrzés és a 2 hónapos GA4-cél a felhasználó által elfogadott javaslat. A HTML a tervezes/adatkezeles-tervezet/adatkezeles.html fájlban tekinthető meg helyben; az éles oldalra ez a tervezet még nincs közzétéve.

## 1. Milyen alapelvek szerint történik az adatkezelés?

Csak az adott célhoz szükséges adatokat kezeljük, érthetően ismertetett célból és jogalappal. Törekszünk az adatok pontosságára, a hozzáférések korlátozására és az indokolt megőrzési idő betartására. Az érdeklődések adatait nem használjuk hírlevélre vagy hirdetési célú listák építésére.

## 2. Ki kezeli az adatokat?

Az oldal egy fiktív kerámiaműhelyt bemutató webdesign-vizsgaprojekt. Az Agyagpad, Fehér Dóra és a szentendrei műhelycím bemutatóadat; ezek nem azonosítják a tényleges adatkezelőt. Az oldalon valódi vásárlásra vagy tanfolyami szerződés megkötésére nincs lehetőség.

Weboldalagyagpad-muhely.netlify.app

Tényleges adatkezelőA vizsgaprojekt üzemeltetője; a nyilvánosan feltüntethető teljes név és kapcsolattartási adatok még megadásra várnak.

Adatvédelmi kapcsolattartásKözvetlen, nyilvánosan használható adatvédelmi elérhetőség megadása még szükséges.

Az alábbi ismertető ezért még nem végleges adatkezelési tájékoztató. A vizsgaprojekt-jelleg nem jelenti azt, hogy a működő próbaűrlapon beküldött adatok vagy a hozzájárulás után induló mérés adatai fiktívek lennének.

## 3. Mit kezel a próbaűrlap?

Cél: a vizsgaprojekttel kapcsolatos érdeklődés fogadása és megválaszolása, valamint a működő kapcsolatfelvétel bemutatása. A beküldés nem jelent helyfoglalást vagy hírlevél-feliratkozást.

Adatkör: a megadott név, e-mail-cím, választott program, az opcionális üzenet és a beküldéshez kapcsolódó technikai adatok, például az időpont és a szolgáltató által kezelt hálózati adatok. A név, e-mail-cím és program megadása a jelenlegi űrlap beküldéséhez szükséges; az üzenet elhagyható. Különleges vagy más személyhez tartozó adatot ne küldj.

A tervezetben alkalmazott jogalap: a GDPR 6. cikk (1) bekezdés f) pontja szerinti jogos érdek: az önként kezdeményezett megkeresés megválaszolása és a vizsgaprojekt kapcsolatfelvételi funkciójának bemutatása. Ezzel szemben tiltakozhatsz; az érdekmérlegelés összefoglalása a véglegesítés része.

Fogadás és tárolás: a Netlify Forms fogadja a beküldést, és értesítést küld az üzemeltető Gmail-postaládájába. Az adatok ezért a Netlify beküldési listájában és az e-mail-postaládában is megjelenhetnek.

Megőrzés: a lezárt próbaérdeklődések törlésére meghatározott határidő a lezárástól számított legfeljebb 90 nap. Ez az üzemeltető kézi törlési feladata mindkét rendszerben, nem a weboldal automatikus törlési funkciója. Az esetleges szolgáltatói biztonsági mentések kezelésére a szolgáltató szabályai is irányadók.

## 4. Hogyan működik a látogatottságmérés?

A Google Analytics 4 és a Google Tag Manager a webhely használatának és a sikeres próbaérdeklődéseknek a mérését szolgálja. A Google-mérőkód csak a mérési választó Engedélyezem gombjának használata után töltődik be; elutasítás esetén nem indul el. Jogalapja a GDPR 6. cikk (1) bekezdés a) pontja szerinti hozzájárulás.

A mérés oldallátogatási és technikai adatokat, böngésző- és eszközinformációkat, valamint böngészős azonosítókat érinthet. A sikeres érdeklődés generate_lead eseménye az űrlap nevét, a választott program kódját és a forrásoldal útvonalát tartalmazza. A kód az esemény paramétereiben nem küld nevet, e-mail-címet vagy üzenetszöveget. Az automatikus felhasználóiadat-gyűjtést kikapcsoltuk, a hirdetési hozzájárulások tiltva maradnak.

A hozzájárulás a lábléc Mérési beállítások gombjával bármikor módosítható. A visszavonás megállítja a további Google-mérést, törli az oldal által elérhető GA-sütiket és újratölti a lapot. Nem törli automatikusan a korábban már továbbított adatokat. Az űrlap mérési engedély nélkül is működik.

Adatmegőrzés: a projekthez választott cél a GA4 felhasználói és eseményszintű adatok 2 hónapos megőrzése. A fiók tényleges beállítása még nincs visszaigazolva; ezt a véglegesítés előtt ellenőrizni kell. Ez nem azonos a sütik élettartamával, és nem minden összesített jelentésre vonatkozó törlési határidő. Google tájékoztató az adatmegőrzésről.

## 5. Milyen sütik és böngészős tárolók vannak?

Az alábbi lista a projekt saját működésében használt tárolókat ismerteti. A böngészős tárhelyek nem mind sütik; a hozzájárulási döntés és a sikeres küldés jelzése külön helyi tárolókban marad.

agyagpad-analytics-consent — localStorageA mérési döntést és annak idejét őrzi legfeljebb 180 napig. Szükséges ahhoz, hogy az engedélyezést és az elutasítást megjegyezzük; nem Google-mérési azonosító.

agyagpad-lead-success — sessionStorageA sikeres küldés időpontját, a program kódját és a forrásútvonalat tartalmazó egyszeri jelzés. A köszönőoldal beolvasáskor törli; legfeljebb tízperces jelzést fogad el. Ha nem kerül beolvasásra, a lapfül munkamenetének végéig maradhat meg. Nevet, e-mail-címet és üzenetszöveget nem tárol.

_ga és _ga_… — analitikai sütikCsak engedélyezett mérésnél jelenhetnek meg. Felhasználók megkülönböztetését és a munkamenet állapotát segítik. A Google alapértelmezett lejárata 2 év, amelyet a böngésző korlátozhat, és ismételt használat frissíthet. Az adott böngészőben megjelenő lejárat ettől eltérhet. A GA4 sütijeinek leírása.

A sütik és helyi tárolók a böngészőben is törölhetők. A mérési döntés törlése után a választó ismét megjelenik. Az alapműködéshez kapcsolódó technikai tárolás és a Google-analitika hozzájárulása külön kezelendő.

## 6. Mi történik a külső térkép betöltésekor?

A Kapcsolat oldalon OpenStreetMap-térkép jelenik meg. A beágyazás betöltésekor a böngésző kapcsolatba lép a térképszolgáltatóval, amely technikai adatokat, például IP-címet és lekérési adatokat kaphat. Ez az analitikai engedélytől független külső kapcsolat; a mérési választó nem a térképet kapcsolja ki vagy be. Az űrlap mezőit nem adjuk át a térképnek.

A térkép célja Szentendre bemutatása. Az Agyagliget köz 4. kitalált bemutatócím, nem valódi foglalkozási helyszín. A térképszolgáltató saját adatkezelési szabályai alkalmazandók: OpenStreetMap Foundation adatvédelmi szabályzat. A szolgáltatói adatkezelés részleteit és a beágyazás jogalapját a végleges tájékoztatóban az üzemeltetőnek is rögzítenie kell.

## 7. Mely szolgáltatókhoz kerülhet adat?

Netlify, Inc. — a honlap kiszolgálása, technikai biztonsági funkciók, szolgáltatói jelvény és Netlify Forms. A technikai kérések IP-címet, időpontot és böngészőadatokat is érinthetnek. Cím: 101 2nd Street, San Francisco, CA 94105, USA. Adatvédelmi tájékoztató, adatfeldolgozási megállapodás.

Google-szolgáltatások — GA4 és Google Tag Manager a hozzájárulás után; Gmail a próbaüzenetek értesítéseinek fogadásához. Az alkalmazandó feltételektől függően Google Ireland Limited és Google LLC is részt vehet a szolgáltatásban. Google adatvédelmi irányelvek.

OpenStreetMap Foundation — a külső térkép kiszolgálása és saját technikai adatkezelése. A térképkérések globális kiszolgálóhálózaton is áthaladhatnak.

A projektet kezelő személyek és szolgáltatói hozzáférések körét, a szolgáltatói megőrzési időket és a szerződéses szerepeket a véglegesítéskor pontosítani kell. Nem állítjuk, hogy minden adat kizárólag Magyarországon vagy az Európai Unióban marad.

EGT-n kívüli feldolgozás is előfordulhat. A szolgáltatók az alkalmazható megfelelőségi döntésekre és szerződéses garanciákra támaszkodhatnak; a konkrét feltételeket az aktuális szolgáltatási dokumentumok ismertetik. Google nemzetközi adattovábbítási keretek. A Netlify feltételei a fenti megállapodásban érhetők el.

## 8. Milyen további tudnivalók vannak?

Az oldal nem kínál felhasználói regisztrációt, hírlevél-feliratkozást, webshopot vagy nyereményjátékot, és nem tartalmaz Facebook Pixel-kódot. A helyi betűtípusok és a képek a weboldal saját fájljaiból töltődnek be.

A weboldal HTTPS-kapcsolatot használ, az űrlap mezőellenőrzést és egy egyszerű robotcsapda-mezőt tartalmaz. Ezek nem jelentenek teljes biztonsági garanciát. A szolgáltatói fiókok hozzáféréseinek védelme és a 90 napos törlési rend betartása az üzemeltető feladata. A vizsgaprojekt saját kódja nem hoz automatizált, joghatással járó döntést, és nem használja az érdeklődéseket reklámprofil készítésére.

## 9. Milyen jogaid és jogorvoslati lehetőségeid vannak?

A feltételek fennállásakor kérhetsz tájékoztatást és hozzáférést, helyesbítést, törlést, korlátozást, illetve adathordozhatóságot; a jogos érdeken alapuló kezelés ellen tiltakozhatsz. A hozzájárulás visszavonható, ez a korábbi adatkezelés jogszerűségét önmagában nem érinti. Az egyes jogok feltételeit a GDPR szabályozza.

A kérelemre indokolatlan késedelem nélkül, általában egy hónapon belül kell választ adni. Összetett vagy nagyszámú kérelemnél a GDPR szerinti hosszabbítás lehetséges, amelyről az első hónapon belül tájékoztatni kell. A joggyakorlás főszabály szerint díjmentes; díj vagy a kérelem teljesítésének megtagadása csak a GDPR szerinti feltételekkel, például nyilvánvalóan megalapozatlan vagy túlzó kérelem esetén merülhet fel.

Panaszt tehetsz a Nemzeti Adatvédelmi és Információszabadság Hatóságnál, és bírósági jogorvoslatot is igénybe vehetsz. NAIH: 1055 Budapest, Falk Miksa utca 9–11.; levelezés: 1363 Budapest, Pf. 9.; telefon: +36 (1) 391-1400; honlap: naih.hu. Az aktuális hivatalos benyújtási módokat a Hatóság oldalán találod. Az adatkezelő előzetes megkeresésének javaslata nem korlátozza a panaszjogot.

## 10. Jogszabályi háttér és a tájékoztató módosítása

A tervezet az (EU) 2016/679 rendelet (GDPR) és a magyar adatvédelmi szabályok figyelembevételével, a csatolt oktatási minta szerkezetét követve készült. Ha az oldal működése vagy a szolgáltatói kör változik, a tájékoztatót is aktualizálni kell. A megőrzési idők és a tényleges adatkezelő adatainak hiánya miatt ez a változat nem tekinthető lezárt, teljes jogi dokumentumnak.

Frissítve: 2026. november 17.

NAIH tájékoztató az érintetti jogokról · A GDPR szövege

A teljes helyi HTML- és CSS-tervezet a tervezes/adatkezeles-tervezet/ mappában megőrizve; nem része a public kiadási mappának.
