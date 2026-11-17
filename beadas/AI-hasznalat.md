# AI-használat – Agyagpad

Az Agyagpad egy fiktív szentendrei kerámiaműhely számára készített webdesign-vizsgamunka. A projektet ChatGPT és Codex segítségével, saját tartalmi és vizuális döntésekkel vittem végig.

**Kiindulás és struktúra.** Az iskolai briefből indultam ki. Az AI-nak átadtam a vállalkozás adatait, a célcsoportot, a programokat és a fő célt: a látogató érdeklődjön a foglalkozásokról. ChatGPT segítségével pontosítottam az oldalszerkezetet és a szövegeket. Oldaltérkép és mobil-, illetve asztali drótváz készült; ezeket átnéztem, majd többoldalas webhellyé fejlesztettük a tervet.

**Arculat és tartalom.** Kiindulásként megadtam a színeket, a Merriweather–Inter betűpárt, a logót, a kiválasztott fotókat, Figma-arculati táblát és elrendezési inspirációkat. A következetes megvalósításhoz design-system.md készült. A szövegeket, feliratokat, képkivágásokat és a programok sorrendjét több körben finomítottam; a türkiz hangsúlyszínt az építés során adtam az eredeti palettához. A fiktív vállalkozás jelölése megmaradt.

**Építés és javítás.** Codex három HTML/CSS-koncepciót készített; az Udvari műhely irányt választottam. Böngészős megjegyzésekkel alakítottam a főoldalt, a Tanfolyamok, Műhely és Kapcsolat aloldalakat. Elkészült a kerámiagaléria képnagyítóval, a lenyitható kérdések, a mobilmenü, az érdeklődési űrlap és a külön köszönőoldal. A tartalmi és vizuális döntéseket én hoztam meg.

**Ellenőrzés és élesítés.** Az AI Sharp segítségével többméretű WebP-képeket készített, Playwright és Chrome segítségével pedig mobil-, tablet- és asztali nézeteket, billentyűzetes használatot és az űrlap hibakezelését ellenőrizte. SEO-metaadatok, strukturált adatok, sitemap és robots.txt készült. A forrás GitHubra, a publikálható fájlok külön public mappába kerültek; az oldalt Netlifyon élesítettem. A Search Console tulajdonigazolása és a sitemap beküldése is elkészült.

**Működés igazolása.** A Netlify Forms értesítési címét beállítottam, a próbaüzenet megérkezett. A Google-mérés csak analitikai hozzájárulás után indul. A sikeres érdeklődés generate_lead eseménye megjelent a GA4 valós idejű riportjában; ezt képernyőképpel ellenőriztem. A kulcseseményként történő elszámolás külön ellenőrzése még hátravan.

Élő oldal: https://agyagpad-muhely.netlify.app/
