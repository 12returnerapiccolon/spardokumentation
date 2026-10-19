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
| TMALL 0379–0382, 0384–0386 Besiktningsrapporter spårväxel (EV, EVR, EKV, DKV, 3V olika/samma håll, SPK) | Tom PDF-mall gjord av Word-blanketten | .pdf |
| TMALL 1481 Översyn spårväxel | PDF-formulär | .pdf |

Vilken besiktningsrapport som används styrs av växeltypen som väljs när jobbet skapas.

Alla dokument skickas som PDF. Word-blanketterna skrivs därför ut till tomma PDF-mallar en gång med `tools/pdfmall.py`, som också tar fram var varje formulärfält hamnar (`js/forms/vaxel-layout.js`). Appen skriver sedan text och kryss på de platserna (`js/fill-overlay.js`). Fälten i Word-mallarna har inte unika namn, så de räknas efter sin ordning i dokumentet (se `js/forms/vaxel.js`, måttabellerna i `js/forms/vaxel-matt.js`). PDF-mallarna känns igen på sitt ämne (Subject), t.ex. `Spårdokumentation mall ev`.

Excel-blanketter görs om på samma sätt med `tools/pdfmall_excel.py`, som tar fram cellernas platser (t.ex. `js/forms/svets-layout.js` för svetsrapporten). Den tomma PDF:en får nya metadata (titel och ämne) innan den lämnas ut, så att Excel-filens författare inte följer med.

Normalvärden kommer ur bilaga 8 (`js/forms/vaxel-normal.js`) och toleranser ur bilaga 9–11 (`js/forms/vaxel-tolerans.js`). PDF-fälten fylls efter namn (se `js/forms/oversyn1481.js`).

Växelmodellerna i rullistan kommer från TRVINFRA-00017 Spårväxel v5.0, bilaga 2–4 (`js/forms/vaxelmodeller.js`). Bilderna i `img/placering/` är sidorna ur bilaga 7 (Placering mått), och `img/vaxelbild/` är växelbilderna ur besiktningsmallarna.

## Köra lokalt

```sh
python3 -m http.server 8000
```

Öppna http://localhost:8000. Offline-läget (service worker) startar bara över https, alltså på GitHub Pages.

## Regler för repot

Inga mallar, ifyllda filer, personuppgifter, lösenord eller inloggningsuppgifter får checkas in. `.gitignore` stoppar Word-, PDF- och Excel-filer.

Höj `VERSION` i `sw.js` när filer ändras, annars kan telefonen visa en gammal version offline.

## Bibliotek

`vendor/` innehåller [JSZip](https://stuk.github.io/jszip/) 3.10.1, [pdf-lib](https://pdf-lib.js.org/) 1.17.1 och @pdf-lib/fontkit 1.1.1 (MIT-licens) samt typsnittet Liberation Sans (SIL Open Font License 1.1). Se licensfilerna.
