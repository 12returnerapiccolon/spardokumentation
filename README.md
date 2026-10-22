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
- Hänglås per blankett och för avsnitten Bilder och Uppgifter om jobbet. Skickat låser allt. En låst blankett går inte att kryssa ur under Lägg till/ta bort blanketter (direkt under rubriken Blanketter). En låst blankett behåller jobbets uppgifter från när den låstes (`job.lastJobb`).
- Skicka in jobb delar blanketterna och bilderna som separata filer till arbetsledaren, med storlek efter varje fil, och sätter Skickat. Överför jobbet (längst ned i jobbet) gör en PDF som bär jobbet, för en kollega eller en annan enhet, och sätter inte Skickat. Läs in överfört jobb på startsidan läser in den.
- Växelrapporterna: normalvärden och toleranser fylls i efter modell. Mått utanför tolerans rödmarkeras i appen (inte i PDF:en). Växeltyp och modell kan ändras i blanketten och synkas till jobbet.
- Svetsrapporten: SFT räknas som på kapmetoden när före kap, efter kap och rältemp är ifyllda. Visas bara i appen. Rältemp följer inte med från ett tidigare jobb. Rältemp under 0 °C ger en varning före Skapa filer om rutorna för kallt klimat, gasflöde och skyddad svalning inte är ikryssade.
- Överföringsfilen (Överför jobbet) bär jobbet i dokumentinformationen (`js/jobbfil.js`), så att jobbet kan läsas in igen. De enskilda blanketterna bär det inte, så att de inte innehåller dolda uppgifter från andra blanketter.
- Svetsrapporten: fler än tio svetsar ger fler blanketter, numrerade 11–20 osv. med sidnummer, t.ex. 2(3).
- IBT: km från och till skrivs som km + m i två rutor, förval från svetsrapportens svetsar eller jobbet.
- IBT: kraven ur TDOK 2021:0311 (och 0334 för plankorsning) i `js/forms/tdok0311.js`, med figurer, hänvisade tabeller, bedömningsstöd och avsnitt ur TRVINFRA-00012/13/15/17/18 som bilder i `img/tdok/` (urklippta med `tools/tdok_bilder.py` och `tools/regelverk_bilder.py`). TDOK 2014:0598 Katalog över rälsfel ligger som `img/tdok/0598-*.jpg` (`tools/ralsfel_bilder.py`) i en egen cache i `sw.js` (`ralsfel-1`) som inte hämtas om vid varje ny version. Guiden 🔎 Klassificera rälsfel (`js/ralsfel.js`) följer katalogens schema och ger felnumret; namnen följer bladen. Från IBT kan resultatet läggas till som anmärkning (`rowsEditor` har `laggTill`). Avsnitten ur regelverken (TRVINFRA-00012/13/14/15/17/18/00398, TDOK 2014:0514, 2022:0360, 2014:0448, instruktionsboken för spiralbromsar ritning 805970 och tabellerna i 0311) visas som text med riktiga tabeller och utklippta figurer (`js/regelverk.js`, texten i `js/forms/regelverk-text.js`, figurerna i `img/tdok/fig/`), med originalet som bild bakom en knapp. Avsnitten står i `tools/regelverk_avsnitt.json`; `tools/regelverk_text.py` gör texten och `tools/regelverk_bilder.py` originalbilderna. Breda toleranstabeller (Mätpunkter/Tolerans) vänds så att varje grupp mätpunkter blir en rad. De nya bilderna ligger i en egen cache (`regelverk-1`) som bara byter namn när bilderna ändras. Bedömningsstöden visas som kort (`js/bedomning.js`) med texten i `js/forms/bedomning-kort.js`, avskriven från tabellerna och genererad med `tools/bedomning_kort.py`; tabellen finns kvar som bild.
- Svetsrapporten kan fyllas i på Trafikverkets TMALL 0435 i stället för DOK 2630 (inställningen `svetsmall`). `svets0435` i `js/forms/svets.js` har samma uppgifter (`dataKey: 'svets'`) och egen layout i `js/forms/svets0435-layout.js`; `mallForm()` i app.js väljer mall när filerna skapas. Mallen är valfri (`valfri: true`) och saknas den varnar appen inte.
- Svetsstöd för SkV-Elite (`js/svetsstod.js`) enligt TDOK 2014:0664 v3.0: Lathund (portion enligt Tabell 1, faktablad L25/L50, varningar) och Börja svetsa (klockor för förvärmning, formhållarplåtar och avskrotning, justerbara tider i inställningen `svetstider`). Visas under svetsar med SkV Elite L25 eller SkV L50 och WPS TDOK 2014:0664 eller ingen WPS, när inställningen `svetsstod` är på (av från början). `row.tappning` sparar tappningens tid, `row.mattTid` tiden till påminnelsen om temperaturmätning (45 min om inget annat är inställt) och `row.uppmatt` om den är kvitterad. Tabell 1 och 2 är urklippta med `tools/tdok0664_bilder.py`.
- TMALL 1481 fylls i mallens formulärfält, som plattas till vid export.
- Säkerhetskopia som zip (`js/backup.js`), okrypterad. Vid inläsning väljer man att behålla den nyare versionen av varje jobb eller att appen frågar per jobb.
- Lagring i Inställningar: hur mycket appen använder, och borttagning av bilder i avslutade jobb äldre än tre månader.
- Filerna förbereds när ett pågående jobb öppnas och inget saknas, så att Skicka in jobb syns direkt. Har jobbet ändrats när man trycker görs filerna om först (avtryck i `avtryck()`).
- Senaste Skicka in sparas i jobbet (`job.inskickat`: datum, filnamn, storlek, avtryck), och jobbsidan visar om något ändrats efter det.
- Dela bara den här blanketten längst ner i varje blankett. Ändrar inte status.
- Rimlighetskontroll före Skapa filer (`rimlighet` i blanketterna): växelmått långt från normalvärdet, öppning utanför tabellen och orimlig rältemperatur. Växelrapporten varnar också när besiktningstyp saknas.
- Startsidan föreslår Avslutat för jobb som varit Skickat i mer än två veckor.
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
