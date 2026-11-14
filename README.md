# Agyagpad – AI webdesigner vizsgamunka

Aktuális állapot: 2026. november 14. Statikus HTML/CSS webprojekt, helyi JavaScript-komponensekkel. Az Agyagpad és Fehér Dóra fiktív, a cím bemutatóadat.

## Aktív oldalak

- [Főoldal](koncepcio-1-udvari-muhely.html): négy szakasz, programkártyák, bemutatkozás, műhelybolt és meglévő érdeklődési űrlap.
- [Tanfolyamok](tanfolyamok.html): három részletes program, díjazás és helyi, programot előválasztó űrlap.
- [Műhely](muhely.html): személyes történet, műhelybemutató, figyelemblokk és hatképes, nagyítható készkerámia-galéria.
- [Kapcsolat](kapcsolat.html): képes bevezető, elérhetőségek, Szentendre-térkép, változatlan közös űrlap és négy natív gyakori kérdés.
- [Adatkezelés](adatkezeles.html): az űrlap, a külső térkép és az élesítés előtt pótlandó üzemeltetői adatok tájékoztatása.

A közös fejléc **Érdeklődöm** gombja minden aktív oldalon a `kapcsolat.html#erdeklodes` célra vezet. A Tanfolyamok programgombjai továbbra is a saját helyi űrlaphoz vezetnek, előválasztott programmal. A főoldal régi `#kapcsolat` és `#muhely` horgonyai megmaradtak.

Az `index.html` még a régi koncepcióválasztó. Publikálás előtt a kiválasztott főoldalt kell belépési pontnak beállítani. A másik két koncepció és az `archivum/` történeti anyag; nem az aktuális oldal része.

## Űrlap állapota

Az eredeti űrlapmezők és opciók mindhárom űrlapos oldalon megmaradtak. A közös JavaScript magyar mezőhibákat, e-mail-ellenőrzést, URL-kódolt POST-küldést, dupla beküldés elleni védelmet és hibánál megmaradó adatokat kezel. Sikerüzenet kizárólag pozitív fogadói válasz után jelenik meg.

Az `assets/form-config.js` jelenleg szándékosan `enabled: false`: még nincs aktív Netlify-projekt és fogadó. A szimulált küldési próbák sikeresek, de éles e-mail-kézbesítés nem történt. A pontos hátralévő beállítások: [urlap-beallitas.md](tervezes/urlap-beallitas.md). Nincs kitalált publikus telefonszám vagy e-mail-cím.

## Dokumentáció és beadási csomag

- [Projektbrief](tervezes/agyagpad-projektbrief.md), [design system](tervezes/design-system.md), [tényleges weboldalszövegek](tervezes/szovegek.md).
- [Aktuális oldaltérkép](tervezes/aktualis-oldalterkep.md) és [friss tervezési kép](beadas/tervezesi-folyamat/03-aktualis-oldalterkep.png).
- Oldaltervek: [Tanfolyamok](tervezes/tanfolyamok-terv.md), [Műhely](tervezes/muhely-terv.md), [Kapcsolat](tervezes/kapcsolat-terv.md).
- [Beadási ellenőrzőlap](beadas/README.md), [AI-használati leírás](beadas/AI-hasznalat.md), [verziójegyzék és forráslenyomatok](beadas/verzio.json).
- Aktuális mobil-, tablet- és asztali képernyőképek: `beadas/jelenlegi-oldal/`.

A korábbi drótvázak a tervezési folyamatot dokumentálják, ezért történeti állapotként megmaradnak. A fiktív karakter szakmai adatai a felhasználótól származnak; új díjak vagy vendégvélemények nem kerültek be.

## Ellenőrzés és frissítés

A [végső ellenőrzési összegzés](ellenorzes/eredmenyek.md) tartalmazza az eredményeket. Összesen 53 oldal/nézet ellenőrzése sikeres, többek között mobil, álló és fekvő tablet, asztali és kétszeres szövegméret mellett. A galéria, gyakori kérdések, űrlapellenőrzés és fejlécnavigáció külön is tesztelt.

```text
node eszkozok/helyi-szerver.cjs
node eszkozok/fooldal-ellenorzes.cjs
node eszkozok/tanfolyamok-ellenorzes.cjs
node eszkozok/muhely-ellenorzes.cjs
node eszkozok/kapcsolat-ellenorzes.cjs
node eszkozok/urlap-ellenorzes.cjs
node eszkozok/urlap-ellenorzes.cjs tanfolyamok.html
node eszkozok/urlap-ellenorzes.cjs kapcsolat.html
node eszkozok/szoveg-dokumentacio.cjs
node eszkozok/tartalom-export.cjs
node eszkozok/beadasi-kepek.cjs
```

A helyi szerver címe `http://127.0.0.1:4173`; POST-ot nem fogad. Az ellenőrzők a helyi Codex-runtime Playwright/Sharp csomagjait és a telepített Chrome-ot használják. Az oldal megnyitásához nincs szükség fejlesztői csomagokra. A térkép internetkapcsolatot használ; a helyi fotók WebP-k, a betűfájlok is helyiek. Az eredeti nagy fotók a `.gitignore` szerint helyi munkaanyagok maradnak.

## Hátralévő élesítési feladatok

Éles belépési pont és Netlify-publikálás; élő URL; fogadó és értesítési cím, valódi kézbesítési próba; tényleges adatkezelői adatok; tételes képkreditek; domainhez igazított SEO; az AI-leírás élesítési bekezdésének véglegesítése. A saját domain és a hozzájáruláshoz kötött mérés ajánlott extra.

A vizsgahatáridő 2026. november 24., kérhető haladékkal december 1. A valódi űrlap a felhasználó külön projektkövetelménye; az éles fogadó későbbi beállítása korábbi döntése szerint hátravan.
