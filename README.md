# Svetsjobb

Hette tidigare Spårdokumentation (bytt 2026-10-20). Det gamla namnet finns kvar där det måste: databasen i telefonen (`spardokumentation`), mallarnas ämne (`Spårdokumentation mall …`) och nyckeln för jobb i PDF:erna (`SpardokumentationJobb`), så att inläsning av data, mallar och äldre filer fortsätter fungera.

Webbapp för iPhone där en spårsvetsare fyller i fältdokumentation och får ut ifyllda originalblanketter.

- Körs helt i webbläsaren (Safari). Ingen server, ingen inloggning.
- Fungerar offline efter första besöket.
- Allt som fylls i sparas bara i telefonen (IndexedDB).
- Blankettmallarna finns **inte** i repot. Användaren läser in dem från Filer en gång, och de sparas i telefonen.
- Färdiga filer delas via iOS delningsmeny (Mail, Teams, OneDrive).

## Blanketter som stöds

Kort namn är det som står i appens lista och som sidtitel; hela namnet och mallnumret står under.

| Kort namn i appen | Blankett | Mallformat |
|---|---|---|
| Heta arbeten | DOK 2859 Tillstånd heta arbeten | Tom PDF-mall gjord av Word-blanketten |
| Svetsrapport | DOK 2630 Svetsrapport (flera blanketter, del 1, 2 … vid fler svetsar) | Tom PDF-mall gjord av Excel-blanketten |
| IBT | TMALL 0824 Ibruktagandebesiktning banöverbyggnad | Tom PDF-mall gjord av Excel-blanketten |
| Besiktningsrapport EV, EVR, EKV, DKV, 3V olika håll, 3V samma håll, SPK, EV KRYSSVX, SPK KRYSSVX | TMALL 0379–0382, 0384–0386, 0393, 0394 Besiktningsrapporter spårväxel | Tom PDF-mall (Word-blanketter; kryssväxlarnas PDF-formulär görs om till tomma mallar) |
| Översyn spårväxel | TMALL 1481 Översyn spårväxel | PDF-formulär |
| Skevningsprotokoll | TMALL 1605 Skevningsprotokoll spårläge | Tom PDF-mall gjord av Excel-blanketten |
| BASTAB | TMALL 0737 Kontrollplan stabilitetspåverkande arbete | Tom PDF-mall gjord av Excel-blanketten |
| SFT Kapmetoden | TMALL 0844 Spänningsfri temperatur SFT, Kapmetoden | Tom PDF-mall gjord av Excel-blanketten |

Alla blanketter lämnas ut som PDF. Korta namn ligger i `kort` i varje formulär under `js/forms/`. Skriv alltid "SFT Kapmetoden", aldrig "Kapmetoden SFT".

Vilken besiktningsrapport som används styrs av växeltypen som väljs när jobbet skapas.

Word-blanketterna skrivs därför ut till tomma PDF-mallar en gång med `tools/pdfmall.py`, som också tar fram var varje formulärfält hamnar (`js/forms/vaxel-layout.js`). Appen skriver sedan text och kryss på de platserna (`js/fill-overlay.js`). Fälten i Word-mallarna har inte unika namn, så de räknas efter sin ordning i dokumentet (se `js/forms/vaxel.js`, måttabellerna i `js/forms/vaxel-matt.js`). PDF-mallarna känns igen på sitt ämne (Subject), t.ex. `Spårdokumentation mall ev`.

Excel-blanketter görs om på samma sätt med `tools/pdfmall_excel.py`, som tar fram cellernas platser (t.ex. `js/forms/svets-layout.js` för svetsrapporten). Den tomma PDF:en får nya metadata (titel och ämne) innan den lämnas ut, så att Excel-filens författare inte följer med.

Normalvärden kommer ur bilaga 8 (`js/forms/vaxel-normal.js`) och toleranser ur bilaga 9–11 (`js/forms/vaxel-tolerans.js`). PDF-fälten fylls efter namn (se `js/forms/oversyn1481.js`).

Växelmodellerna i rullistan kommer från TRVINFRA-00017 Spårväxel v5.0, bilaga 2–4 (`js/forms/vaxelmodeller.js`). Bilderna i `img/placering/` är sidorna ur bilaga 7 (Placering mått), och `img/vaxelbild/` är växelbilderna ur besiktningsmallarna.

## Funktioner i korthet

- Nytt jobb: rutorna Datum och order, Plats, Arbete och Växel. Blanketterna förväljs efter svaren och kan ändras.
- Jobbet: status (Pågående, Skickat, Avslutat), blanketter, bilder (Före, Efter, Rälsmärkning), Skapa filer med varningar för det som saknas eller ligger utanför tolerans.
- Hänglås per blankett och för avsnitten Bilder, blankettval och Uppgifter om jobbet. Skickat låser allt. En låst blankett behåller jobbets uppgifter från när den låstes (`job.lastJobb`).
- Skicka in jobb delar blanketterna och bilderna som separata filer till arbetsledaren, med storlek efter varje fil, och sätter Skickat. Överför jobbet (längst ned i jobbet) gör en PDF som bär jobbet, för en kollega eller en annan enhet, och sätter inte Skickat. Läs in överfört jobb på startsidan läser in den.
- Växelrapporterna: normalvärden och toleranser fylls i efter modell. Mått utanför tolerans rödmarkeras i appen (inte i PDF:en). Växeltyp och modell kan ändras i blanketten och synkas till jobbet.
- Svetsrapporten: SFT räknas som på kapmetoden när före kap, efter kap och rältemp är ifyllda. Visas bara i appen.
- Överföringsfilen (Överför jobbet) bär jobbet i dokumentinformationen (`js/jobbfil.js`), så att jobbet kan läsas in igen. De enskilda blanketterna bär det inte, så att de inte innehåller dolda uppgifter från andra blanketter.
- Svetsrapporten: fler än tio svetsar ger fler blanketter, numrerade 11–20 osv. med sidnummer, t.ex. 2(3).
- TMALL 1481 fylls i mallens formulärfält, som plattas till vid export.
- Säkerhetskopia som zip (`js/backup.js`), okrypterad. Vid inläsning väljer man att behålla den nyare versionen av varje jobb eller att appen frågar per jobb.
- Lagring i Inställningar: hur mycket appen använder, och borttagning av bilder i avslutade jobb äldre än tre månader.
- Sök bland jobben, hjälp på varje sida (`js/hjalp.js`) och en Kom igång-sida per enhet.

## Säkerhet

- Content-Security-Policy i `index.html`: bara appens egna filer, plus nominatim.openstreetmap.org (adress) och tile.openstreetmap.org (kartbilder). Positionen skickas bara när användaren trycker Min position eller Välj på karta.
- Det som skrivs sparas när appen läggs undan och när en ruta lämnas.

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
