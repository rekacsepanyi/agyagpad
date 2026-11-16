# Agyagpad – Netlify Forms

Állapot: 2026. november 16. A felhasználó bekapcsolta a Form detection beállítást. A küldőkód aktív a https://agyagpad-muhely.netlify.app domainen; a helyi előnézet nem küld adatot. A felismerést az új közzététel után a Netlify felületén kell ellenőrizni. E-mail-értesítés még nincs beállítva, valódi kézbesítési próba még nem történt.

## Megvalósítás és ellenőrzés

- Mindhárom meglévő űrlap neve `agyagpad-erdeklodes`, Netlify-jelöléssel, rejtett `form-name` és honeypot mezővel.
- `public/assets/form-config.js`: `enabled: true`, `endpoint: '/'`, kizárólag az éles tárhely engedélyezett.
- Magyar mezőhibák, kötelező mezők és e-mail-formátum ellenőrzése. Hiba esetén megmaradó adatok, küldés közbeni gombtiltás és időkorlát.
- A sikerüzenet kizárólag pozitív HTTP-válasz után jelenik meg.
- Három oldalon összesen 15 szimulált HTTP-teszt sikeres: szerverhiba, hálózati hiba, POST-adatok, dupla beküldés és pozitív válasz. Ezek nem igazolják a Netlify beérkezést vagy az e-mail-kézbesítést.

## A Netlify felületén elvégzendő lépések

1. Nyisd meg az `agyagpad-muhely` projektet, majd a **Forms** részt. Az új közzététel után szerepeljen az `agyagpad-erdeklodes` űrlap a listában.
2. **Forms → Submission notifications** alatt adj hozzá e-mail-értesítést. Válaszd az `agyagpad-erdeklodes` űrlapot, és add meg a fogadó e-mail-címet, majd mentsd el.
3. Ha a cím megerősítésre vár, nyisd meg a kapott levelet és erősítsd meg. Ha a Netlify csak csapattag címét engedi, a Netlify-fiókodhoz tartozó címet használd.
4. Küldj egy próbaérdeklődést az éles oldalon. Ellenőrizd a Netlify beküldési listáját és az e-mail-postaládát, szükség esetén a spam mappát is. Csak ezek után jelölhető igazoltnak a valódi kézbesítés.

A címzettet a Netlify tárolja, nem a nyilvános forráskód. A vizsgaprojekt valódi üzemeltetőjének adatai és az adatmegőrzés részletei továbbra is véglegesítendők az adatkezelési tájékoztatóban; ezek helyett nem használható a fiktív műhely címe.

Hivatalos források: [Forms beállítás](https://docs.netlify.com/manage/forms/setup/), [e-mail-értesítések](https://docs.netlify.com/manage/forms/notifications/).
