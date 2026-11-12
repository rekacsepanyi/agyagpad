# Ellenőrzési anyagok

Kiinduló megjelenési alap: `16527e0`. Aktuális revízió: 2026-11-12-rounded-sections; a főoldal váltakozó szakaszsarkokkal, portrécserével és erősebb motívumokkal finomodott. A főoldaljelentés november 12-i, a változatlan fejléc jelentése november 11-i.

## Aktuális bizonyítékok

- `eredmenyek.md`: a megtartott állapot új ellenőrzési összefoglalója.
- `fo-ellenorzes.json`: hét friss főoldalpróba, a megjelenési commit azonosítójával.
- `fejlec-ellenorzes.json`: harminc friss fejlécpróba, a megjelenési commit azonosítójával.
- `fo-kontrasztok.json`: a megtartott hat UI-szín és színpárjaik kontrasztjai.
- `kepernyokepek/` gyökér: kizárólag a most újragenerált képek. Beadáshoz kiválasztott másolataik: `../beadas/jelenlegi-oldal/`.

## Történeti anyagok

A `turkiz-*`, `prototipus-*` és `kiegeszito-*` JSON-jelentések korábbi fejlesztési állapotokhoz tartoznak; nem írják felül az aktuális jelentéseket. A `kepernyokepek/korabbi-valtozatok-2026-11-11/` mappa a régebbi és az elvetett próbák felvételeit őrzi. A régi szöveges napló másolata az `../archivum/dokumentacio-2026-11-11-korabbi/` mappában található.

## Újragenerálás

1. Indíts helyi előnézetet: `node eszkozok/helyi-szerver.cjs` a projekt gyökeréből.
2. Futtasd: `node eszkozok/fooldal-ellenorzes.cjs`, majd `node eszkozok/fejlec-ellenorzes.cjs`.
3. Futtasd: `node eszkozok/beadasi-kepek.cjs` a tervezési képek és a beadási képmásolatok frissítéséhez.

A segédeszközök a helyi Codex Node-környezet Playwright/Sharp csomagjait és a telepített Chrome-ot használják. A kész oldal közvetlen böngészős megnyitásához ezek nem szükségesek. Az ellenőrzési JSON-ok commit- és dátumjelölése a jelen dokumentációfrissítés része; a tesztek önálló futtatása után az azonosítókat is egyeztetni kell. A régebbi állapotváltó migrációs szkripteket nem kell újrafuttatni.
