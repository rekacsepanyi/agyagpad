# AI-használat – Agyagpad kerámiaműhely

Állapot: 2026. november 16., az Agyagpad aktuális továbbfejlesztett változata.

**Kiindulás és tervezés.** Az iskolai kerámiaműhely-briefből indultam ki. ChatGPT segítségével pontosítottam a célcsoportot, a programokat, az oldal célját és a tartalmi sorrendet. A kitalált vállalkozás és Fehér Dóra karakterének adatait átnéztem; vásárlói véleményeket és díjakat nem használtam. Oldaltérkép és asztali/mobil drótváz is készült.

**Arculat és szövegek.** Figma arculati táblán rögzítettem a vizuális irányt. Az AI-nak átadtam a briefet, a saját színválasztásomat, a Merriweather–Inter betűpárt, a logót, a fotókat és a korábbi iskolai dokumentumok méret- és komponensmintáit. Ezekből design-system.md és saját weboldalszövegek készültek. A feliratokat, színeket, képsorrendet és megfogalmazásokat több körben módosítottam.

**Építés és finomítás.** Codex segítségével három statikus HTML/CSS-koncepció készült. Az Udvari műhely irányt választottam. Böngészőben adott megjegyzésekkel finomítottam a navigációt, a programkártyákat, az idővonalat, az űrlapot és a fotók elrendezését. A megtartott változatban terrakotta gombok, türkiz kiemelések, átlátszó logó és favicon, valamint a hero fotóján kisebb türkiz idézetkártya szerepel. A spirálos próbákat elvetettem; később váltakozó szakaszlekerekítést, új portrét és hangsúlyosabb képdekorációt kértem.

**Ellenőrzés és fájlkezelés.** Az AI a Sharp eszközzel többméretű WebP-képeket készített, Playwright és Chrome segítségével pedig mobil-, tablet- és asztali nézeteket, linkeket, billentyűzetes kezelést és 200%-os szövegméretet ellenőrzött. A Kapcsolat aloldalon változatlanul átvett űrlapot és natív, billentyűzettel kezelhető gyakori kérdéseket használtunk. A nagyított tabletnézet belső túlcsordulását célzott CSS-javítás és 165 nézetpróba alapján javítottuk. A tartalmi és vizuális döntéseket én hoztam meg. A forráskód Git-verziókövetést kapott és GitHubra került. A SEO- és deploy-mappa skillekkel metaadatok, strukturált adatok és külön public kiadási mappa készültek, további képtömörítéssel. A domainfüggő elemeket az élő Netlify-címhez véglegesítettük. A Műhely aloldalhoz megadtam a teljes szöveget és tíz konkrét fotót; ezekből hat szakasz, hatképes galéria és billentyűzettel kezelhető képnagyító készült.

**Élesítés és SEO.** Az oldalt Netlifyon publikáltam: https://agyagpad-muhely.netlify.app/ . Codex segítségével az öt oldal metaadatait, abszolút URL-jeit, strukturált adatait, sitemapjét és robots.txt-jét ellenőriztem; az élő oldalon 15 nézetpróba és a SEO-vizsgálat sikeres.

**Hátralévő lépés.** Az űrlap Netlify-küldőkódja aktiválva; az éles próba sikerét a felhasználó visszaigazolta. Köszönőoldal és egyszeri konverziós esemény készült; a GTM bekötve, engedélykéréssel. Az Analytics-riport ellenőrzése és az üzemeltetői adatok még hátravannak. A Figma tervezőeszköz, a Sharp, Playwright, Chrome és Git fejlesztői eszközök; az AI-munkatársak ChatGPT és Codex voltak.
