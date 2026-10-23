# Källor: blankettmallar och regelverk

Förteckning över alla dokument som appen bygger på, vilken version som använts och var i appen
de syns. Tanken är att man ska kunna slå upp ett dokument när en ny version kommer ut och se vad
som behöver kontrolleras och skrivas om. Senast genomgången 2026-10-22 (app v187).

Kolumnen *Version* är den version som står i dokumentet appen bygger på. *Datum* är dokumentdatum
eller fastställd/gäller från, när det finns i underlaget. Där det står "–" finns uppgiften inte i
de filer som använts (gäller blankettmallarna, som inte har något datum) och bör fyllas i om
det går att få fram.

## Så gör man när en ny version kommer

1. Slå upp dokumentet nedan och läs igenom versionsloggen i det nya dokumentet.
2. Gå igenom filerna under *Beror på i appen* och jämför med det som ändrats.
3. Sök i koden efter dokumentnumret och den gamla versionen (t.ex. `grep -rn "00017" js tools`
   och `grep -rn "v5.0" js`), så att versionsnummer i kommentarer, hjälptexter och rubriker också
   uppdateras.
4. Bilder som är urklippta ur dokumentet görs om med verktyget som står i tabellen. Sidnummer och
   lägen i verktygen kan behöva justeras, eftersom sidorna flyttar sig mellan versioner.
5. Ny version av en **blankettmall**: gör en ny tom PDF-mall (`tools/pdfmall.py` för Word,
   `tools/pdfmall_excel.py` för Excel), kontrollera att fältens platser (`*-layout.js`) stämmer,
   lägg mallen i mallmappen, kör `python3 tools/mallversioner.py <mallmappen>`, bygg om zip-filen
   med mallar och höj versionen i `sw.js`. Appen varnar då den som har den gamla mallen inläst.
6. Uppdatera hjälpsidorna (`js/hjalp.js`), README och den här listan.

## Blankettmallar som fylls i

Mallarna finns inte i repot. Appen känner igen en inläst mall på ämnet `Spårdokumentation mall <nyckel>`
och jämför dess SHA-256 med `js/mallversioner.js` (datumet där är när PDF-mallen gjordes, inte
blankettens version).

| Blankett | Version | Datum | Mallnyckel | Original | Beror på i appen |
|---|---|---|---|---|---|
| DOK 2630 Svetsrapport (med egenkontroll) | 11.0 | fastställd 2022-05-20 | `svets` | Excel | `js/forms/svets.js` (rullistor rälsmodell, material, typ av arbete, svetsmetod, tillsats, WPS, egenkontroll), `js/forms/svets-layout.js`, `img/svets/vaxelbild.jpg` |
| DOK 2859 Tillstånd, kontrollista heta arbeten på tillfällig arbetsplats (bilaga till DOK-225) | 7.0 | fastställd 2023-09-06 | `heta` | Word | `js/forms/heta.js` (kontrollpunkter 0–10, säkerhetsreglerna på sidan 2), `js/forms/heta-layout.js` |
| TMALL 0379 Besiktningsrapport EV | 1.0 | – | `ev` | Word | `js/forms/vaxel.js`, `vaxel-matt.js`, `vaxel-layout.js`, `img/vaxelbild/ev.png` |
| TMALL 0380 Besiktningsrapport EVR | 1.0 | – | `evr` | Word | som ovan, `img/vaxelbild/evr.png` |
| TMALL 0381 Besiktningsrapport EKV | 1.0 | – | `ekv` | Word | som ovan, `img/vaxelbild/ekv.png` |
| TMALL 0382 Besiktningsrapport DKV | 1.0 | – | `dkv` | Word | som ovan, `img/vaxelbild/dkv.png` |
| TMALL 0384 Besiktningsrapport 3V olika håll | 1.0 | – | `v3o` | Word | som ovan, `img/vaxelbild/v3o.png` |
| TMALL 0385 Besiktningsrapport 3V samma håll | 1.0 | – | `v3s` | Word | som ovan, `img/vaxelbild/v3s.png` |
| TMALL 0386 Besiktningsrapport SPK | 2.0 | – | `spk` | Word | som ovan, `img/vaxelbild/spk.png` |
| TMALL 0393 Besiktningsrapport SPK KRYSSVX | 3.0 | – | `spkk` | PDF-formulär | `js/forms/vaxel.js`, `kryss-layout.js`, `img/vaxelbild/spkk.png` |
| TMALL 0394 Besiktningsrapport EV KRYSSVX | 3.0 | – | `evk` | PDF-formulär | `js/forms/vaxel.js`, `kryss-layout.js`, `img/vaxelbild/evk.png` |
| TMALL 0435 Banöverbyggnad Svetsrapport | 6.0 | – | `svets0435` | PDF-formulär | `js/forms/svets.js` (`svets0435`, avvikelselistan), `js/forms/svets0435-layout.js` |
| TMALL 0737 Kontrollplan stabilitetspåverkande arbete | 2.0 | – | `0737` | Excel | `js/forms/k0737.js`, `k0737-layout.js`, `trvinfra0737.js` |
| TMALL 0824 Ibruktagandebesiktning banöverbyggnad utan projektering | 4.0 | – | `ibt` | Excel | `js/forms/ibt.js` (kontrollpunkterna med "utförs enligt" och kontrollmoment), `ibt-layout.js` |
| TMALL 0844 Rapport SFT enligt kapmetoden | 1.0 | – | `kap` | Excel med makron | `js/forms/kap.js` (beräkning som i mallen, tabellen på bladet Admin), `kap-layout.js` |
| TMALL 1481 Banöverbyggnad Spårväxel översyn | 1.0 | – | `1481` | PDF-formulär | `js/forms/oversyn1481.js` (fyller mallens fält efter namn) |
| TMALL 1605 Skevningsprotokoll spårläge | 2.0 | – | `skevning` | Excel | `js/forms/skev.js` (beräkning som bladet Digital), `skev-layout.js` |

Att tänka på:

- Word-mallarnas fält räknas efter ordning i dokumentet. Har en ny version fått ett fält till
  eller ett mindre förskjuts allt efter det, så `vaxel.js`/`vaxel-matt.js` måste gås igenom.
- TMALL 0737 v2.0 hänvisar till tabell K10.1–K10.3 i TRVINFRA-00014, men i TRVINFRA-00014 v5.0
  heter tabellerna K11.1–K11.3. Appen visar K11 och skriver det i hjälptexten (`k0737.js`).
- TMALL 1481 hänvisar i sina fotnoter till TDOK 2014:0240, 2014:0516, 2014:0462 och 2014:0469.
  Det är mallens egen text, appen använder inte de dokumenten. Flera av dem är ersatta:
  TDOK 2014:0240 är slopad (ersatt av bl.a. TDOK 2021:0311 och 2021:0302) och TDOK 2014:0469 är
  ersatt av TDOK 2021:0335. Fotnoterna rättas när Trafikverket ger ut en ny version av mallen.

## Regelverk

### Trafikverkets tekniska krav (TRVINFRA)

| Dokument | Version | Datum | Vad appen hämtar | Beror på i appen |
|---|---|---|---|---|
| TRVINFRA-00012 Banöverbyggnad Spårsystem | 5.0 | publicerad 2025-07-01 | Avsnitt 7.3 och 8.2 (trafikering på arbetsplats) och K-krav som TMALL 0737 hänvisar till; bilaga 2 tabell B2.1 (rälsbrottsöppning → ΔT) för kapmetoden och SFT i svetsrapporten; avsnitt 7.1.1.7 och 8.1.1.15 (ballast) som bilder till IBT | `js/forms/trvinfra0737.js`, `js/forms/k0737.js`, `js/forms/kap.js` (tabellen), `js/forms/svets.js` (SFT via `kap.js`), `js/forms/tdok0311.js`, `img/tdok/00012-*.png` (`tools/regelverk_bilder.py`), `js/hjalp.js` |
| TRVINFRA-00013 Banöverbyggnad Spårläge | 2.0 (**v3.0 kommer 2026-10-28** och ersätter då även TDOK 2013:0658; inte inläst än, gå igenom allt i den här raden) | publicerad 2021-10-11 | Tabell K6.1 (belastad/obelastad spårlägesmätning per typ av arbete); avsnitt 11.3 tabell K11.15, K11.18, K11.19 (UH2-gränser obelastad mätning) i skevningsprotokollet; avsnitt 11 och 13 som bilder till IBT; avsnitt 12.2/12.3 i texterna till TMALL 0737 | `js/jobb.js` (`ARBETEN[].k61`, `SPARLAGE`), `js/app.js` (rad i K6.1 visas vid nytt jobb), `js/forms/skev.js` (gränserna), `js/forms/tdok0311.js`, `js/forms/trvinfra0737.js`, `img/tdok/00013-*.png` (`tools/regelverk_bilder.py`) |
| TRVINFRA-00014 Banöverbyggnad Stabilitetspåverkande arbete | 5.0 | publicerad 2023-07-03 | Kategori 1–3 (kap 7), ΔT = Tf − To (kap 8, K38701), stabiliserande åtgärder (kap 9), tabell K11.1–K11.3 tillåtna hastigheter (kap 11) | `js/forms/k0737.js`, `js/forms/trvinfra0737.js`, `img/0737/k11-*.png`, `js/jobb.js` och `js/forms/ibt.js` (kategori 1–3 som typ av arbete), `js/hjalp.js` |
| TRVINFRA-00015 Banöverbyggnad Oförstörande provning | 2.0 | publicerad 2026-01-01 | Kap 7 Åtgärdstider för rälfel som bild till IBT | `js/forms/tdok0311.js`, `img/tdok/00015-7.png` (`tools/regelverk_bilder.py`) |
| TRVINFRA-00016 Svetsning | 3.0 | publicerad 2025-01-01 | Regler för kallt klimat (nämns i en varning) | `js/svetsstod.js` (varning vid rältemp under 0 °C), `js/forms/svets.js` (egenkontrollen kallt klimat/gasflöde/svalning) |
| TRVINFRA-00017 Banöverbyggnad Spårväxel | 5.0 | publicerad 2024-01-01 | Bilaga 2–4 växelmodeller; bilaga 7 placering av mått; bilaga 8 normalvärden; bilaga 9–11 toleranser (nybyggnad, säkerhet, underhåll); avsnitt 9.3, 10.6 och 10.8 som bilder till IBT | `js/forms/vaxelmodeller.js`, `js/forms/vaxel-normal.js`, `js/forms/vaxel-tolerans.js`, `js/forms/vaxel.js`, `img/placering/*.png`, `img/tdok/00017-*.png` (`tools/regelverk_bilder.py`), `js/hjalp.js` |
| TRVINFRA-00018 Banöverbyggnad Spårkomponenter | 7.0 | publicerad 2025-11-01 | Kap 10 Skyddsräler och kap 11 Stoppbock som bilder till IBT | `js/forms/tdok0311.js`, `img/tdok/00018-*.png` (`tools/regelverk_bilder.py`) |
| TRVINFRA-00271 Banöverbyggnad Teknisk säkerhetsstyrning | 2.0 | publicerad 2024-05-01 | Bilaga 1 tabell B1.1: typ av arbete och vem som får ibruktaga (spårsvetsare, bankontrollant, säkerhetsbesiktningsman) | `js/jobb.js` (`ARBETEN`, `BEHORIGHET`), `js/forms/ibt.js` (arbete under Objekt), `js/app.js` (nytt jobb), `js/hjalp.js` |

### TDOK

| Dokument | Version | Datum | Vad appen hämtar | Beror på i appen |
|---|---|---|---|---|
| TDOK 2021:0311 Säkerhetsbesiktning – Banöverbyggnad | 7.0 | dokumentdatum 2025-12-18, gäller från 2026-01-01 | Kraven per kontrollpunkt i IBT (kap 4.1–4.6), figurer, hänvisade tabeller och bedömningsstöd | `js/forms/tdok0311.js` (texterna och kapitelnumren), `js/forms/ibt.js` (kap-hänvisningar per kontrollpunkt), `js/forms/bedomning-kort.js` (`tools/bedomning_kort.py`), `js/bedomning.js`, `img/tdok/0311-*.png` (`tools/tdok_tabeller.py`, `tools/tdok_bilder.py`), `js/hjalp.js` |
| TDOK 2021:0334 Säkerhetsbesiktning – Signalsystem | 9.0 | dokumentdatum 2026-03-20, gäller från 2026-03-25 | Kap 4.1.23 Väg-/gångbanan (plankorsning) med figur 4 och bedömningsstöd | `js/forms/tdok0311.js` (avsnittet har nyckeln `0334-4.1.22` från v7.0 men rubriken 4.1.23), `js/forms/bedomning-kort.js`, `img/tdok/0334-*.png` (`tools/tdok_bilder.py`), `js/hjalp.js` (nämner version 9.0) |
| TDOK 2014:0598 Katalog över rälsfel | 1.0 | dokumentdatum 2015-04-01 (gäller från 2005-07-04, ersätter BVH 524.100) | Felnummer, namn och blad; schemat för klassificering | `js/ralsfel.js` (namn, grupper, guidens frågor), `img/tdok/0598-*.jpg` (`tools/ralsfel_bilder.py`), `sw.js` (egen cache `ralsfel-1`: byt namn på cachen när bilderna görs om) |
| TDOK 2014:0664 Arbetsinstruktioner för termitsvetsning (SkV-Elite och PLA) | 3.0 | dokumentdatum 2023-06-28, gäller från 2023-07-01 | Kap 4.1–4.2: tabell 1 portion per stålsort, tabell 2 profiler, faktablad L25 och L50 (tider, tryck, mått), generella regler | `js/svetsstod.js` (tider, portioner, varningar), `js/forms/svets.js` (WPS-värdet `TDOK 2014:0664`), `img/tdok/0664-*.png` (`tools/tdok0664_bilder.py`), `js/hjalp.js`, inställningen `svetstider` |
| TDOK 2021:0299 Säkerhetsbesiktning – genomföra | 3.0 (kap 5.4.2 oförändrat mot 2.0) | dokumentdatum 2025-04-30 | Prioritet på besiktningsanmärkningar (A, V, M …) | `js/forms/ibt.js` (texten om prioritet) |
| TDOK 2021:0303 Underhållsbesiktning – genomföra | 2.0 | dokumentdatum 2024-11-01 | Prioritet på besiktningsanmärkningar, kap 5.4.2 | `js/forms/ibt.js` (texten om prioritet) |

## Dokument som bara nämns

De här står i texter som appen visar (oftast avskrivna ur TDOK 2021:0311, TRVINFRA-00012/00014 eller
en blankettmall), men appen hämtar inget innehåll ur dem. Ändras de behöver appen normalt inte ändras,
men hänvisningen kan bli inaktuell.

| Dokument | Version (om den finns i underlaget) | Var det nämns |
|---|---|---|
| IRS 70712 Rail Defects | – | `js/forms/tdok0311.js` (kap 4.1.2) |
| TDOK 2013:0658 Urspårningsfarliga spårlägesfel – Anmälan och trafikal åtgärd | 2.0. **Slopas 2026-10-28**, ersätts av TRVINFRA-00013 Spårläge v3.0 (stämpel i dokumentet) | `js/forms/tdok0311.js` (avskrivet ur TDOK 2021:0311 kap 4.1.1, blir inaktuellt) |
| TDOK 2014:0514 Spårkomponenter DEF-sliprar Besiktning | 2.0, gäller från 2025-01-01 | `js/forms/tdok0311.js` |
| TDOK 2022:0360 och TDOK 2014:0448 Balkbromsar | – | `js/forms/tdok0311.js`, `js/forms/ibt.js` (kontrollpunkt 52) |
| TDOK 2021:0322 Säkerhetsbesiktning – Elkraft högspänning | – | `js/forms/tdok0311.js` |
| TDOK 2012:90 Begäran om dispens från tekniska regler | – | `js/forms/trvinfra0737.js` |
| TRVINFRA-00398 Banutformning | 3.0, publicerad 2026-01-01 | `js/forms/ibt.js` (kontrollpunkt 17, mallens text) |
| TMALL 0842 Spårläge på arbetsplats | – | `js/forms/trvinfra0737.js` |
| TDOK 2014:0516 Underhållsbesiktning av banöverbyggnad (tidigare BVH 807.30) | 0.1, dokumentdatum 2015-04-01 | TMALL 1481 (mallens fotnot) |
| SBF 175 (blankett för urkopplat brandlarm) | – | `js/forms/heta.js` |
| DOK 5821 och WPS-numren i svetsrapporten | – | `js/forms/svets.js` (`WPS`, mallens rullista) |
| Underlag till linjeboken (Sth) | – | `js/forms/k0737.js` (hjälptext) |

## Underlag som finns men inte används

Dessa har lästs in under arbetet men inget i appen bygger på dem: TDOK 2014:0587 Svetsarprövning
(v3.0, 2024-04-29), TDOK 2019:0174 Säkerhetsbesiktning – periodicitet (v3.0, 2022-11-01),
TDOK 2021:0309 Säkerhetsbesiktning – behörighetshantering (v4.0, 2024-11-01) och TDOK 2021:0479
Säkerhetsbesiktning – Byggnadsverk Tunnel (2026-03-20), TDOK 2021:0302 Säkerhetsbesiktning –
genomföra åtgärd (v3.0, 2025-12-18, gäller från 2026-01-01), TDOK 2021:0335 Underhållsbesiktning –
Signalsystem (v9.0, 2026-03-20, gäller från 2026-03-25), TRVINFRA-00019 Banöverbyggnad
Makadamballast (v1.0.0, 2020-04-01) och den äldre TRVINFRA-00012 v3.0 (2021-10-11), som ersatts av v5.0.
