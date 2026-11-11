# Prototípus-építési szerződés

A user jóváhagyta mindhárom irányt. A generalas skill alapján párhuzamos alügynökök építenek. User brief/design-system/szovegek mindent felülír: NINCS review, kitalált statisztika, szalonhangulat, új szín/font, önjáró animáció. Magyar tegező szövegek, 4 fő szekció.

## Kimenet és források

Minden ügynök csak a saját gyökérbeli koncepcio-N-slug.html fájlját írja. CSS és JS inline, helyi assetekkel. A szülő készíti az index.html választót, adatkezeles.html helyi információt, asseteket és teszteket. Ne írj más fájlt, ne commitolj.

Olvasandó: C:/Users/jolci/.codex/skills/frontend-design/SKILL.md; .webprojekt/brief.md; tervezes/design-system.md; tervezes/szovegek.md; tervezes/koncepcioterv.md; .webprojekt/iranyok.json (saját irány).

## Készülő helyi assetek

- images/webp/NEV-480.webp, NEV-800.webp, NEV-1200.webp, NEV-1600.webp. Nevek: hero, hero1, korongozo-kostolo, 4-hetes-kezdo-kurzus, ceges-csapatepito, kapcsolat, muhelybolt, reszletfoto, reszletfoto1, reszletfoto2, reszletfoto3, reszletfoto4. Más képfájlra ne hivatkozz.
- images/webp/agyagpad-logo.webp: szűkre vágott meglévő bögrés logó. Ne szedd újra, ne rajzold át. Header 220–260px; mobil max65% szélesség; object-fit:contain.
- images/webp/agyagpad-favicon.webp: meglévő bögrés jel; link rel=icon type=image/webp.
- assets/fonts/inter-latin.woff2 és inter-latin-ext.woff2: Inter variable 400–600.
- assets/fonts/merriweather-latin.woff2 és merriweather-latin-ext.woff2: Merriweather variable 600–700.
- Inline @font-face mindkét subsethez. latin-ext unicode-range: U+0100-02FF,U+1E00-1EFF,U+20A0-20AB,U+20AD-20C0,U+2C60-2C7F,U+A720-A7FF; latin: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD. Font-display:swap; font-weight tartomány 400 600 illetve 600 700.
- Fotó srcset 480/800/1200/1600, sizes a layouthoz; width/height arány helyes; nyitókép eager fetchpriority=high, többi lazy. Csak WebP fotók.
- Fotók áttekintése: tervezes/arculat/foto-attekinto.jpg. Hero/hero1 azonos kalapos nő: csak ő Dóra. Céges kép egy munkafolyamat, nem tényleges csoportkép.

## Kötelező UI

- 320/375/390px-en nincs overflow. Ne rejtsd overflow-x-szel a hibát. H1 mobil40 desktop60/1.3; H2 32/40; H3 24/28. Többi a design-system szerint. 1024 alatt mobilmenü.
- Egy H1, #kezdo,#tanfolyamok,#muhely,#kapcsolat; teljes történet + 4 mérföldkő; összes részvételi tudnivaló; pontos árak; nyitvatartás, kitalált bemutatócím, fikciójelzés. Hero főcím: Alkoss agyagból, kapcsolódj ki Szentendrén.
- Header kis Koncepciók link index.html-re; a terméknavigációtól elkülönítve.
- Menü aria-expanded, aria-controls, Escape, nyitott címke Menü bezárása; JS nélkül nav látható.
- Kártya CTA: href=#kapcsolat + data-program=kostolo/kezdo-kurzus/csapatepito. Hero CTA data-program-reset. JS beállítja select#program. Menü és footer Kapcsolat link nem változtatja. Név/email/üzenet sosem törlődik.
- Form: form[data-demo-form], mezők id=name,email,program,message; select required üres Válassz programot option + kostolo,kezdo-kurzus,csapatepito,egyeb. Címke és required jelzés. Pontos szövegek a szovegek.md szerint.
- PROTOTÍPUS: semmit nem küldünk sehová. Natív validáció működjön. Submit preventDefault, csak helyi role=status szöveg: Ez helyi bemutató: az adatok nem kerültek elküldésre. A valódi üzenetküldést a kiválasztott változat véglegesítésekor állítjuk be. Soha nincs megkaptuk/siker állítás. Form onsubmit="return false" fallback JS-hibára, hogy ne kerüljön adat URL-be.
- Látható űrlapmegjegyzés a szovegek.md projektjelzése + A prototípus nem küld üzenetet.
- Adatkezelési link adatkezeles.html (szülő írja).
- Lábléc teljes rögzített szövegek, nincs kitalált telefon/email/social.
- Fókusz látható, min48px vezérlők, reduced-motion, 150ms finom interakciók; nincs statisztikaszámláló/lebegő dekoráció.
- Teljes inline CSS, ne függj Tailwind CDN-től; offline, build nélküli statikus HTML. Nincs framework vagy távoli kép.

## Design

Saját jóváhagyott irányod legyen határozottan különböző. Igényes fotókompozíció, tipográfia, felületi ritmus; ne dashboardkártyák. Rögzített paletta, capsule button,16px card/photo,12px field. Fotóra írt szöveg nincs. A hosszú magyar CTA törhet, nem lóghat ki. Ha a skill sablon eltér a user rögzített szabályaitól, a user szabálya nyer.
