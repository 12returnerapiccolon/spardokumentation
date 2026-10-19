# Spårdokumentation

Webbapp för iPhone där en spårsvetsare fyller i fältdokumentation och får ut ifyllda originalblanketter.

- Körs helt i webbläsaren (Safari). Ingen server, ingen inloggning.
- Fungerar offline efter första besöket.
- Allt som fylls i sparas bara i telefonen (IndexedDB).
- Blankettmallarna finns **inte** i repot. Användaren läser in dem från Filer en gång, och de sparas i telefonen.
- Färdiga filer delas via iOS delningsmeny (Mail, Teams, OneDrive).

## Blanketter som stöds

| Blankett | Mallformat | Ut |
|---|---|---|
| TMALL 0379 Besiktningsrapport Enkel växel | .dotx (Word-formulärfält) | .docx |
| TMALL 1481 Översyn spårväxel | PDF-formulär | .pdf |

Word-mallarnas formulärfält har inte unika namn, så de fylls efter sin ordning i dokumentet (se `js/forms/ev.js`). PDF-fälten fylls efter namn (se `js/forms/oversyn1481.js`).

## Köra lokalt

```sh
python3 -m http.server 8000
```

Öppna http://localhost:8000. Offline-läget (service worker) startar bara över https, alltså på GitHub Pages.

## Regler för repot

Inga mallar, ifyllda filer, personuppgifter, lösenord eller inloggningsuppgifter får checkas in. `.gitignore` stoppar Word-, PDF- och Excel-filer.

Höj `VERSION` i `sw.js` när filer ändras, annars kan telefonen visa en gammal version offline.

## Bibliotek

`vendor/` innehåller [JSZip](https://stuk.github.io/jszip/) 3.10.1 och [pdf-lib](https://pdf-lib.js.org/) 1.17.1 (MIT-licens, se licensfilerna).
