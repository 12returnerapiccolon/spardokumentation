// Genererad av tools/regelverk_text.py (2026-10-22): avsnitten ur regelverken som text, tabeller och
// figurer. namn (samma som originalbilden img/tdok/<namn>.png) → { dok, rubrik, block }.
// block: [h, rubrik] [k, kravnummer] [etikett, Råd] [p, text] [li, nivå, markering, text]
// [tabell, rader av [text, kolumner, rader?]] [figur, bild, bildtext] [ruta, Varning|Obs, text].
export default {
"00013-11-1": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.1 Allmänt",
"block": [
[
"h",
"11.1 Allmänt"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Trafikverket har, baserat på TSD Infrastruktur, TSD Rullande materiel-Lok och passargerarfordon, SS-EN 13848-1, SS-EN 13848-5, SS-EN 13848-6 och SS-EN 14363, fastställt värden för planeringsgräns (Alert Limit), underhållsgräns 1 och 2 (Invention Limit) och gräns för omedelbar åtgärd (Immediate Action Limit) för följande parametrar:"
],
[
"li",
1,
"•",
"Sidoläge – punktfel – genomsnittliga värden till toppvärden"
],
[
"li",
1,
"•",
"Höjdläge – punktfel – genomsnittliga värden till toppvärden"
],
[
"li",
1,
"•",
"Skevning – punktfel – noll-till-toppvärde, kritiska åtgärdsgränsvärden bestämda i TSD ska innehållas"
],
[
"li",
1,
"•",
"Spårvidd – punktfel – nominell spårvidd till toppvärde, kritiska åtgärdsgränsvärden bestämda i TSD ska innehållas"
],
[
"li",
1,
"•",
"Genomsnittlig spårvidd över 100 m sträckor – nominell spårvidd till genomsnittsvärde, kritiska åtgärdsgränsvärden bestämda i TSD ska innehållas"
],
[
"li",
1,
"•",
"Rälsförhöjning – kritiskt åtgärdsgränsvärde för avvikelse från anlagd rälsförhöjning enligt TSD ska innehållas"
],
[
"li",
1,
"•",
"Sidoläge – standardavvikelser (endast för ”Underhållsgräns – planerad åtgärd”)"
],
[
"li",
1,
"•",
"Höjdläge – standardavvikelser (endast för ”Underhållsgräns – planerad åtgärd”)"
],
[
"p",
"Trafikverket har utöver ovan nämnda parametrar också krav på följande parametrar:"
],
[
"li",
1,
"•",
"Långvågiga spårlägesfel i höjdled"
],
[
"li",
1,
"•",
"Långvågiga spårlägesfel i sidled"
],
[
"li",
1,
"•",
"Rälsförhöjnings ojämnhet"
],
[
"li",
1,
"•",
"Standardavvikelse för samverkande fel."
],
[
"p",
"Trafikverket har, baserat på TSD Infrastruktur och SS-EN 13848-5, valt att lägga till nivåerna NYTT och NYJUST spår samt delat upp underhållsgränsen (Intervention limit) i två nivåer, UH1 och UH2, som tillsammans ger något hårdare krav jämfört med SS-EN 13848-5."
],
[
"k",
"K38432"
],
[
"p",
"Kravnivå enligt tabell K11.1. ska användas för varje spårlägesparameter."
],
[
"p",
"Tabell K11.1 Kravnivåer."
],
[
"tabell",
[
[
[
"Kravnivå -Förkortning",
1
],
[
"Kravnivå -Benämning",
1
],
[
"Förklaring/krav på åtgärd",
1
],
[
"SS-EN 13848\noch TSD",
1
]
],
[
[
"NYTT",
1
],
[
"Nybyggt",
1
],
[
"Krav för nybyggt och upprustat spår",
1
],
[
"",
1
]
],
[
[
"NYJUST",
1
],
[
"Nyjusterat",
1
],
[
"Krav för nyjusterat spår efter\nspårriktningsinsats",
1
],
[
"",
1
]
],
[
[
"PLAN",
1
],
[
"Planering",
1
],
[
"Krav för planering, PLAN-gräns.\nSpårlägesfel som överskrider PLAN-gräns\nska analyseras för planering av kommande\ninsatser",
1
],
[
"Alert Limit",
1
]
],
[
[
"UH1",
1
],
[
"Underhåll 1",
1
],
[
"Krav för underhåll, UH1-gräns.\nSpårlägesfel som överskrider UH1-gräns\nska snarast åtgärdas så att nästa nivå,\nUH2-gräns, med marginal inte hinner\nnås före nästa besiktningstillfälle",
1
],
[
"Intervention\nLimit ('low')",
1
]
],
[
[
"UH2",
1
],
[
"Underhåll 2",
1
],
[
"Säkerhetskrav, UH2-gräns.\nSpårlägesfel ska åtgärdas innan de nått\nUH2-gräns. För spårlägesfel som\növerskrider UH2-gräns, dvs. ligger mellan\ngränsvärdena UH2 och KRIT, ska\nomedelbar planering av åtgärd ske och\ngenomförande av åtgärd ske utan onödigt\ndröjsmål.",
1
],
[
"Intervention\nLimit ('high')",
1
]
],
[
[
"KRIT",
1
],
[
"Kritisk",
1
],
[
"Säkerhetskrav, KRIT-gräns.\nVid uppmätta spårlägesfel som överskrider\nKRIT-gräns ska åtgärder omedelbart\nvidtas för att minska risken för\nsäkerhetskonsekvens. Detta kan ske\ngenom att felet åtgärdas, att det införs\nhastighetsnedsättning eller trafikstopp.",
1
],
[
"Immediate\nAction Limit",
1
]
]
]
]
]
},
"00013-11-2-1": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.2.1 Spårvidd (belastad mätning)",
"block": [
[
"h",
"11.2 Toleranser belastad spårlägesmätning"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Nedan angivna gränsvärden för respektive spårlägesparameter gäller som krav i Trafikverkets spår. Värdena är baserade på tidigare kravdokument samt de i TSD Infrastruktur och SS-EN-standarder angivna normativa gränsvärdena, för IAL=KRIT, och förslag till gränsvärden (informativa) för övriga åtgärdskrav. Trafikverkets gränsvärden kan avvika något från informativa/föreslagna gränsvärden."
],
[
"p",
"Angivna gränsvärden i respektive kolumn är de värden som accepteras för respektive kravnivå, t.ex. beträffande spårvidd för nyjusterat spår i hastighetsklass H2, tabell K11.2 så är 1440 mm (+5) resp. 1434 mm (-1) godkända värden samt alla värden däremellan. Där endast ”-” anges finns för närvarande inga krav."
],
[
"h",
"11.2.1 Spårvidd"
],
[
"h",
"11.2.1.1 Punktfel"
],
[
"k",
"K38437"
],
[
"p",
"Gränsvärde i tabell K11.2 ska användas vid klassificering av åtgärdskrav för spårvidds punktfel. Två värden anges i varje kolumn för avvikelser (+/-) från nominellt värde, dvs. ett max- och ett minvärde (spårvidd Max och spårvidd Min)."
],
[
"p",
"Tabell K11.2 Gränsvärden för spårvidds punktfel."
],
[
"tabell",
[
[
[
"Spårvidd, punktfel, avvikelse från nominell spårvidd 1435 mm, +/- i mm",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"+4/0",
1
],
[
"+4/0",
1
],
[
"+8/-3",
1
],
[
"+10/-3",
1
],
[
"+15/-4",
1
],
[
"+28/-5",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"+4/0",
1
],
[
"+5/0",
1
],
[
"+10/-3",
1
],
[
"+12/-4",
1
],
[
"+20/-5",
1
],
[
"+28/-7",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"+4/0",
1
],
[
"+5/0",
1
],
[
"+12/-3",
1
],
[
"+15/-4",
1
],
[
"+22/-5",
1
],
[
"+33/-8",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"+4/0",
1
],
[
"+5/-1",
1
],
[
"+12/-4",
1
],
[
"+17/-4",
1
],
[
"+25/-5",
1
],
[
"+33/-9",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"+4/0",
1
],
[
"+7/-1",
1
],
[
"+15/-4",
1
],
[
"+22/-4",
1
],
[
"+30/-5",
1
],
[
"+35/-10",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"+4/0",
1
],
[
"+7/-1",
1
],
[
"+15/-4",
1
],
[
"+22/-4",
1
],
[
"+30/-5",
1
],
[
"+35/-10",
1
]
]
]
],
[
"h",
"11.2.1.2 Glidande medelvärde över 100 m"
],
[
"k",
"K38439"
],
[
"p",
"Gränsvärde i tabell K11.3 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.3 Gränsvärden för spårvidds medelvärde över 100 m."
],
[
"tabell",
[
[
[
"Spårvidd, glidande medelvärde över 100 m, gällande för rakspår och spår\nmed projekterad radie över 2500 m",
5
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTTmin",
1
],
[
"UH1min",
1
],
[
"UH2min",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"1435",
1
],
[
"1434",
1
],
[
"1432¹",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"1435",
1
],
[
"1433",
1
],
[
"1430",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"1435",
1
],
[
"1432",
1
],
[
"1430",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"1435",
1
],
[
"1431",
1
],
[
"1430",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"1435",
1
],
[
"1431",
1
],
[
"1430",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"1435",
1
],
[
"-",
1
],
[
"-",
1
]
]
]
],
[
"p",
"1) 1433 mm vid hastigheter över 230 km/h"
]
]
},
"00013-11-2-2": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.2.2 Höjdläge (belastad)",
"block": [
[
"h",
"11.2.2 Höjdläge"
],
[
"h",
"11.2.2.1 Punktfel med våglängd D1 (1–25 m)"
],
[
"k",
"K38442"
],
[
"p",
"Gränsvärde i tabell K11.4 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.4 Gränsvärden för höjdlägets punktfel, våglängd D1 (1–25 m)."
],
[
"tabell",
[
[
[
"Höjdläge för respektive räl, punktfel i +/- mm, våglängd D1 (1–25 m)",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"2",
1
],
[
"2",
1
],
[
"4",
1
],
[
"6",
1
],
[
"8",
1
],
[
"16",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"2",
1
],
[
"2",
1
],
[
"5",
1
],
[
"7",
1
],
[
"9",
1
],
[
"20",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"2",
1
],
[
"2",
1
],
[
"6",
1
],
[
"8",
1
],
[
"12",
1
],
[
"23",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"3",
1
],
[
"4",
1
],
[
"8",
1
],
[
"10",
1
],
[
"15",
1
],
[
"26",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"3",
1
],
[
"5",
1
],
[
"10",
1
],
[
"12",
1
],
[
"19",
1
],
[
"28",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"3",
1
],
[
"6",
1
],
[
"12",
1
],
[
"15",
1
],
[
"25",
1
],
[
"28",
1
]
]
]
],
[
"h",
"11.2.2.2 Punktfel med våglängd D2 (25–70 m)"
],
[
"k",
"K38444"
],
[
"p",
"Gränsvärde i tabell K11.5 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.5 Gränsvärden för höjdlägets punktfel, våglängd D2 (25–70 m)."
],
[
"tabell",
[
[
[
"Höjdläge för respektive räl, punktfel i +/- mm, våglängd D2 (25–70 m)",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"5",
1
],
[
"7",
1
],
[
"10",
1
],
[
"14",
1
],
[
"20",
1
],
[
"28",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"5",
1
],
[
"7",
1
],
[
"12",
1
],
[
"16",
1
],
[
"23",
1
],
[
"33",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
]
]
]
]
},
"00013-11-2-3": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.2.3 Sidoläge (belastad)",
"block": [
[
"h",
"11.2.3 Sidoläge"
],
[
"h",
"11.2.3.1 Punktfel med våglängd D1 (1–25 m)"
],
[
"k",
"K38447"
],
[
"p",
"Gränsvärde i tabell K11.6 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.6 Gränsvärden för sidolägets punktfel, våglängd D1 (1–25 m)."
],
[
"tabell",
[
[
[
"Sidoläge för respektive räl, punktfel i +/- mm, våglängd D1 (1–25 m)",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"2",
1
],
[
"2",
1
],
[
"3",
1
],
[
"4",
1
],
[
"5",
1
],
[
"10",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"2",
1
],
[
"2",
1
],
[
"3",
1
],
[
"4",
1
],
[
"6",
1
],
[
"12",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"2",
1
],
[
"2",
1
],
[
"4",
1
],
[
"5",
1
],
[
"8",
1
],
[
"14",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"2",
1
],
[
"3",
1
],
[
"5",
1
],
[
"7",
1
],
[
"11",
1
],
[
"17",
1
]
],
[
[
"H1*",
1
],
[
"40<V≤80",
1
],
[
"2",
1
],
[
"3",
1
],
[
"8",
1
],
[
"11",
1
],
[
"14",
1
],
[
"22",
1
]
],
[
[
"H0*",
1
],
[
"V≤40",
1
],
[
"2",
1
],
[
"4",
1
],
[
"10",
1
],
[
"14",
1
],
[
"17",
1
],
[
"22",
1
]
]
]
],
[
"p",
"* Våglängdsområde 1–15 m ska användas vid 20 m intill plötslig kurvaturförändring ≥ 0,0025 (1/m), exempelvis i en spårväxel."
],
[
"etikett",
"Råd"
],
[
"p",
"Vissa kurvor saknar övergångskurvor så att kurvans tangentpunkter får en plötslig kurvaturförändring. I dessa tangentpunkter medför den projekterade spårgeometrin i sig stora utslag i sidoläget i våglängdsområde 15–25 m. 20 m före och efter en sådan tangentpunkt ska sidoläget inte utvärderas i original D1 1–25 m utan endast i våglängdsområde 1–15 m. Detta gäller om tangentpunkten har plötslig kurvaturförandring ≥ 0,0025 (1/m), exempelvis i en spårväxel vid passage av grenspår i en enkelväxel, eller passage av ett höger- och ett vänsterben i en sammansatt växel (EKV och DKV). I spårväxlar ska utvärderingar göras i hela växelns utsträckning samt 20 m före och efter spårväxeln."
],
[
"h",
"11.2.3.2 Punktfel med våglängd D2 (25–70 m)"
],
[
"k",
"K38450"
],
[
"p",
"Gränsvärde i tabell K11.7 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.7 Gränsvärden för sidolägets punktfel, våglängd D2 (25–70 m)."
],
[
"tabell",
[
[
[
"Sidoläge för respektive räl, punktfel i +/- mm, våglängd D2 (25–70 m)",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"4",
1
],
[
"5",
1
],
[
"8",
1
],
[
"10",
1
],
[
"14",
1
],
[
"20",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"4",
1
],
[
"5",
1
],
[
"9",
1
],
[
"12",
1
],
[
"17",
1
],
[
"24",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
]
]
]
]
},
"00013-11-2-4": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.2.4 Rälsförhöjning (belastad)",
"block": [
[
"h",
"11.2.4 Rälsförhöjning"
],
[
"h",
"11.2.4.1 Rälsförhöjnings ojämnhet"
],
[
"k",
"K38453"
],
[
"p",
"Gränsvärde i tabell K11.8 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.8 Gränsvärden för rälsförhöjnings ojämnhet, våglängd D1 (1–25 m)."
],
[
"tabell",
[
[
[
"Rälsförhöjnings ojämnhet, punktfel i +/- mm",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"2",
1
],
[
"3",
1
],
[
"4",
1
],
[
"5",
1
],
[
"8",
1
],
[
"20",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"2",
1
],
[
"3",
1
],
[
"4",
1
],
[
"6",
1
],
[
"9",
1
],
[
"20",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"3",
1
],
[
"4",
1
],
[
"5",
1
],
[
"7",
1
],
[
"10",
1
],
[
"20",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"3",
1
],
[
"4",
1
],
[
"6",
1
],
[
"8",
1
],
[
"12",
1
],
[
"20",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"3",
1
],
[
"5",
1
],
[
"7",
1
],
[
"10",
1
],
[
"14",
1
],
[
"20",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"3",
1
],
[
"5",
1
],
[
"8",
1
],
[
"12",
1
],
[
"16",
1
],
[
"20",
1
]
]
]
],
[
"h",
"11.2.4.2 Rälsförhöjnings avvikelse"
],
[
"k",
"K38455"
],
[
"p",
"Gränsvärde i tabell K11.9 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.9 Gränsvärden för rälsförhöjnings avvikelse från anordnad rälsförhöjning."
],
[
"tabell",
[
[
[
"Rälsförhöjningens avvikelse, +/- mm",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"2",
1
],
[
"3",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"2",
1
],
[
"3",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"3",
1
],
[
"4",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"3",
1
],
[
"4",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"3",
1
],
[
"5",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"3",
1
],
[
"5",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
]
]
]
]
},
"00013-11-2-5": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.2.5 Skevning (belastad)",
"block": [
[
"h",
"11.2.5 Skevning"
],
[
"h",
"11.2.5.1 Skevning mätt med mätbas 3 m"
],
[
"k",
"K38458"
],
[
"p",
"Gränsvärde i tabell K11.10 ska användas vid klassificering av åtgärdskrav. Värdena för UH2 och KRIT ska gälla för faktisk (absolut) total skevning inklusive rälsförhöjningsramp."
],
[
"p",
"Tabell K11.10 Gränsvärden för skevnings punktfel, 3 m mätbas."
],
[
"tabell",
[
[
[
"Skevnings punktfel vid 3 m mätbas, i +/- mm",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"3",
1
],
[
"3",
1
],
[
"4",
1
],
[
"6",
1
],
[
"9",
1
],
[
"12",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"3",
1
],
[
"3",
1
],
[
"5",
1
],
[
"7",
1
],
[
"10",
1
],
[
"15",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"3",
1
],
[
"3",
1
],
[
"6",
1
],
[
"8",
1
],
[
"11",
1
],
[
"15",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"3",
1
],
[
"3",
1
],
[
"7",
1
],
[
"9",
1
],
[
"12",
1
],
[
"18",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"5",
1
],
[
"5",
1
],
[
"8",
1
],
[
"10",
1
],
[
"13",
1
],
[
"18",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"6",
1
],
[
"6",
1
],
[
"9",
1
],
[
"12",
1
],
[
"14",
1
],
[
"18",
1
]
]
]
],
[
"h",
"11.2.5.2 Skevning mätt med mätbas 6 m"
],
[
"k",
"K38460"
],
[
"p",
"Gränsvärde i tabell K11.11 ska användas vid klassificering av åtgärdskrav. Värdena för UH2 och KRIT ska gälla för faktisk (absolut) total skevning inklusive rälsförhöjningsramp."
],
[
"p",
"Tabell K11.11 Gränsvärden för skevnings punktfel, 6 m mätbas."
],
[
"tabell",
[
[
[
"Skevnings punktfel med 6 m mätbas, i +/- mm",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"4",
1
],
[
"4",
1
],
[
"6",
1
],
[
"9",
1
],
[
"13",
1
],
[
"20",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"4",
1
],
[
"4",
1
],
[
"6",
1
],
[
"9",
1
],
[
"13",
1
],
[
"25",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"4",
1
],
[
"4",
1
],
[
"8",
1
],
[
"11",
1
],
[
"17",
1
],
[
"25",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"6",
1
],
[
"6",
1
],
[
"9",
1
],
[
"13",
1
],
[
"19",
1
],
[
"29",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"8",
1
],
[
"8",
1
],
[
"12",
1
],
[
"16",
1
],
[
"21",
1
],
[
"29",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"10",
1
],
[
"10",
1
],
[
"15",
1
],
[
"19",
1
],
[
"23",
1
],
[
"29",
1
]
]
]
]
]
},
"00013-11-2-6": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.2.6 Standardavvikelse (belastad)",
"block": [
[
"h",
"11.2.6 Standardavvikelse"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Gränsvärde för standardavvikelse SDH och SDS är enligt SS-EN 13848-6 och bygger på en studie av CEN/TC 256 SC1/WG28 och har använts för att bestämma TQC:er, Track Quality Classes. Gränsvärde för standardavvikelse SDSAM bygger på tidigare kravdokument och vår egen studie."
],
[
"k",
"K38463"
],
[
"p",
"För nytt och nyjusterat spår ska kraven delas upp på linjespår, spårväxlar och driftplatser beroende på specifika krav för projektet/entreprenaden."
],
[
"h",
"11.2.6.1 Standardavvikelse för höjdläge (SDH)"
],
[
"k",
"K38465"
],
[
"p",
"Gränsvärde i tabell K11.12 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.12 Gränsvärden för standardavvikelse för höjdläge, våglängd D1 (3–25 m)."
],
[
"tabell",
[
[
[
"Standardavvikelse för höjdläge (SDH), i mm, våglängd D1 (3–25 m)",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"0,40",
1
],
[
"0,40",
1
],
[
"0,85",
1
],
[
"1,15",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"0,60",
1
],
[
"0,60",
1
],
[
"1,15",
1
],
[
"1,60",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"0,65",
1
],
[
"0,65",
1
],
[
"1,40",
1
],
[
"1,85",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"0,75",
1
],
[
"0,75",
1
],
[
"1,80",
1
],
[
"2,50",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"1,25",
1
],
[
"1,25",
1
],
[
"2,75",
1
],
[
"3,75",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"1,25",
1
],
[
"1,25",
1
],
[
"2,75",
1
],
[
"3,75",
1
],
[
"-",
1
],
[
"-",
1
]
]
]
],
[
"etikett",
"Råd"
],
[
"p",
"Övergripande analys och utvärdering av standardavvikelser för höjdläge över en längre bansträcka, till exempel en bandel, kan utföras enligt kapitel 15 Utvärdering och kvalitetsbedömning."
],
[
"h",
"11.2.6.2 Standardavvikelse för sidoläge (SDS)"
],
[
"k",
"K38468"
],
[
"p",
"Gränsvärde i tabell K11.13 ska användas vid klassificering av åtgärdskrav."
],
[
"p",
"Tabell K11.13 Gränsvärden för standardavvikelse för sidoläge, våglängd D1 (3–25 m)."
],
[
"tabell",
[
[
[
"Standardavvikelse för sidoläge (SDS), i mm, våglängd D1 (3–25 meter)",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"0,35",
1
],
[
"0,35",
1
],
[
"0,50",
1
],
[
"0,65",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"0,40",
1
],
[
"0,40",
1
],
[
"0,70",
1
],
[
"0,90",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"0,45",
1
],
[
"0,45",
1
],
[
"0,75",
1
],
[
"1,00",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"0,50",
1
],
[
"0,50",
1
],
[
"1,05",
1
],
[
"1,45",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"0,90",
1
],
[
"0,90",
1
],
[
"1,95",
1
],
[
"2,70",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"0,90",
1
],
[
"0,90",
1
],
[
"1,95",
1
],
[
"2,70",
1
],
[
"-",
1
],
[
"-",
1
]
]
]
],
[
"etikett",
"Råd"
],
[
"p",
"Övergripande analys och utvärdering av standardavvikelser för sidoläge över en längre bansträcka, till exempel en bandel, kan utföras enligt kapitel 15 Utvärdering och kvalitetsbedömning."
],
[
"h",
"11.2.6.3 Standardavvikelse för samverkande fel (SDSAM)"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Enligt SS-EN 13848-5 bör infrastrukturförvaltaren även ta hänsyn till effekterna av samverkande fel och periodiska större samverkande fel. Detta kan göras vid utvärderingen av samverkande fel i sidoläge och rälsförhöjning, dels genom beräkning av standardavvikelse för samverkande fel, och dels genom kontroll av den direkta samverkanssignalen där våglängder 10–30 m särskilt studeras."
],
[
"k",
"K38472"
],
[
"p",
"Åtgärd enligt UH1-gräns ska vidtas när angiven gräns i tabell K11.14 uppnås."
],
[
"p",
"Tabell K11.14 Gränsvärden för standardavvikelse för samverkande fel."
],
[
"tabell",
[
[
[
"Samverkande fel, standardavvikelse, SDSAM, mm",
3
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"UH1",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"1,6",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"1,7",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"1,9",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"2,4",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"3,1",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"3,6",
1
]
]
]
],
[
"etikett",
"Råd"
],
[
"p",
"Periodiska spårlägesfel kan starkt påverka resandekomforten trots att de enskilda felen i höjd- och sidoläge visar måttliga värden. När samverkansfel har uppmätts bör samverkansfel rörande ev. periodicitet för den direkta samverkanssignalen med våglängd 10–30 m analyseras. Vid upptäckt av större samverkansfel, tre eller fler svängningar i följd, bör åtgärd vidtas enligt krav för överskridande av UH2-gräns."
]
]
},
"00013-11-2-7": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.2.7 Ekvivalent konicitet (belastad)",
"block": [
[
"h",
"11.2.7 Ekvivalent konicitet"
],
[
"k",
"K38475"
],
[
"p",
"Bedömning av spårets ekvivalenta konicitet ska göras enligt TSD Infrastruktur och SS‑EN 15302. Ingen bedömning av ekvivalent konicitet krävs för spårväxlar och kurvor med projekterad kurvradie mindre än 2500 m."
],
[
"h",
"11.2.7.1 Konstruktionsgränsvärde"
],
[
"k",
"K38477"
],
[
"p",
"Konstruktionsvärden för spårvidd, rälhuvudets profil och rällutning ska väljas på ett sådant sätt att konstruktionsgränsvärden för ekvivalent konicitet i tabell K11.15 inte överskrids."
],
[
"p",
"Tabell K11.15 Konstruktionsgränsvärden för ekvivalent konicitet."
],
[
"tabell",
[
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"Hjulprofil S1002",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"0,20",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"0,25",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"0,25",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"0,25",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"-",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"-",
1
]
]
]
],
[
"h",
"11.2.7.2 Ekvivalent konicitet i drift"
],
[
"k",
"K38479"
],
[
"p",
"Spårets ekvivalenta konicitet ska utvärderas enligt punkt 1 tom 2:"
],
[
"li",
1,
"1.",
"Ett värde ska beräknas i varje mätpunkt. Värdet motsvarar då hur det ser ut 50m före till 50 m efter mätpunkten enligt beräkningen av glidande ekvivalent konicitet över 100 m."
],
[
"li",
1,
"2.",
"Hjulprofil S1002 enligt SS-EN 13715 ska användas."
],
[
"etikett",
"Råd"
],
[
"p",
"Om andra hjulprofiler än S1002 anses mer representativa och finns tillgängliga, kan de också användas i ekvivalent konicitet bedömningar och gränsvärden i tabell K11.16 gäller."
],
[
"k",
"K38481"
],
[
"p",
"Åtgärd enligt UH2-gräns ska vidtas när angivet gränsvärde i tabell K11.16 överskrids."
],
[
"p",
"Tabell K11.16 Gränsvärden för spårets ekvivalenta konicitet i drift."
],
[
"tabell",
[
[
[
"Spårets ekvivalenta konicitet, medelvärde över 100 m, gällande för rakspår\noch spår med projekterad radie över 2500 m",
3
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"UH2",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"0,25",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"0,30",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"0,35",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"0,40",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"-",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"-",
1
]
]
]
]
]
},
"00013-11-3": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.3 Toleranser obelastad spårlägesmätning",
"block": [
[
"h",
"11.3 Toleranser obelastad spårlägesmätning"
],
[
"h",
"11.3.1 Allmänt"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Obelastad spårlägesmätning, dvs. manuell mätning och mätning med lättviktsutrustning, har nackdelen att spåret inte blir tillräckligt belastat och vissa spårlägesfel kan då komma att mätas för ”snällt”, dvs. mätutslagen blir för små. Detta kompenseras till viss del av att det, för vissa spårlägesparametrar, är snävare gränsvärden för manuell obelastad mätning men det kan ändå inte fullt ut kompensera för motsvarande belastad mätning."
],
[
"k",
"K38486"
],
[
"p",
"Vid obelastad uppmätt värde över UH2-gräns respektive KRIT-gräns under pågående normal trafikering ska åtgärder omedelbart vidtas."
],
[
"k",
"K38501"
],
[
"p",
"Uppmätt värde från belastad spårlägesmätning ska alltid gälla vid manuell ”efterkontroll”, för lokalisering av spårlägesfel, tills dess mätentreprenör bekräftat mätfel."
],
[
"etikett",
"Råd"
],
[
"p",
"Lokalisering av spårlägesfel, som uppmäts med belastad spårlägesmätning, med manuell mätning eller handhållen lätt utrustning kan vara svår då rälen/spåret inte trycks ut/ned med denna utrustning."
],
[
"k",
"K38503"
],
[
"p",
"I de fall spårlägesfelet är svårt att hitta ska spårlägesfelet lokaliseras med något av följande alternativ:"
],
[
"li",
1,
"•",
"längdmätning eller GPS-koordinater"
],
[
"li",
1,
"•",
"sakta rullande järnvägsfordon, tåg eller spårgående arbetsmaskin"
],
[
"li",
1,
"•",
"tillräckligt lång sträcka åtgärdas för att säkert eliminera felet"
],
[
"h",
"11.3.2 Spårvidd"
],
[
"k",
"K38505"
],
[
"p",
"Gränsvärde i tabell K11.15 ska användas för klassificering av åtgärdsnivå för spårvidds punktfel. Två värden anges i varje kolumn för avvikelser (+/-) från nominellt värde, dvs. ett max- och ett minvärde (spårvidd Max och spårvidd Min)."
],
[
"p",
"Tabell K11.15 Gränsvärden för spårvidds punktfel, obelastad mätning."
],
[
"tabell",
[
[
[
"Spårvidd, punktfel, avvikelse från normalvärde 1435 mm, (+), - mm",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"+4/0",
1
],
[
"+4/0",
1
],
[
"+8/-3",
1
],
[
"+12/-3",
1
],
[
"+15/-4",
1
],
[
"+28/-5",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"+4/0",
1
],
[
"+5/0",
1
],
[
"+10/-3",
1
],
[
"+15/-4",
1
],
[
"+20/-5",
1
],
[
"+28/-7",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"+4/0",
1
],
[
"+5/0",
1
],
[
"+10/-3",
1
],
[
"+15/-4",
1
],
[
"+20/-5",
1
],
[
"+33/-10",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"+4/0",
1
],
[
"+5/-1",
1
],
[
"+15/-4",
1
],
[
"+20/-4",
1
],
[
"+25/-5",
1
],
[
"+33/-10",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"+4/0",
1
],
[
"+7/-1",
1
],
[
"+20/-4",
1
],
[
"+25/-4",
1
],
[
"+30/-5",
1
],
[
"+35/-10",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"+4/0",
1
],
[
"+7/-1",
1
],
[
"+20/-4",
1
],
[
"+25/-4",
1
],
[
"+30/-5",
1
],
[
"+35/-10",
1
]
]
]
],
[
"h",
"11.3.3 Höjdläge"
],
[
"k",
"K38507"
],
[
"p",
"Gränsvärde i tabell K11.16 ska användas vid klassificering av åtgärdsnivå för höjdlägets punktfel."
],
[
"p",
"Tabell K11.16 Gränsvärden för höjdlägets punktfel vid mätbas 10 meter, obelastad mätning."
],
[
"tabell",
[
[
[
"Höjdläge för respektive räl, punktfel i +/- mm, mätbas 10 meter",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"2",
1
],
[
"2",
1
],
[
"4",
1
],
[
"6",
1
],
[
"8",
1
],
[
"16",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"2",
1
],
[
"2",
1
],
[
"5",
1
],
[
"7",
1
],
[
"9",
1
],
[
"20",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"2",
1
],
[
"2",
1
],
[
"6",
1
],
[
"8",
1
],
[
"12",
1
],
[
"23",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"3",
1
],
[
"4",
1
],
[
"8",
1
],
[
"10",
1
],
[
"15",
1
],
[
"26",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"3",
1
],
[
"5",
1
],
[
"10",
1
],
[
"12",
1
],
[
"19",
1
],
[
"28",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"3",
1
],
[
"6",
1
],
[
"12",
1
],
[
"15",
1
],
[
"25",
1
],
[
"28",
1
]
]
]
],
[
"h",
"11.3.4 Sidoläge"
],
[
"k",
"K38509"
],
[
"p",
"Gränsvärde i tabell K11.17 ska användas vid klassificering av åtgärdsnivå för sidolägets punktfel."
],
[
"p",
"Tabell K11.17 Gränsvärden för sidolägets punktfel vid mätbas 10 meter, obelastad mätning."
],
[
"tabell",
[
[
[
"Sidoläge för respektive räl, punktfel i +/- mm, mätbas 10 meter",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"2",
1
],
[
"2",
1
],
[
"3",
1
],
[
"4",
1
],
[
"5",
1
],
[
"10",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"2",
1
],
[
"3",
1
],
[
"3",
1
],
[
"4",
1
],
[
"6",
1
],
[
"12",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"2",
1
],
[
"4",
1
],
[
"4",
1
],
[
"5",
1
],
[
"8",
1
],
[
"14",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"3",
1
],
[
"5",
1
],
[
"5",
1
],
[
"7",
1
],
[
"11",
1
],
[
"17",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"4",
1
],
[
"6",
1
],
[
"8",
1
],
[
"11",
1
],
[
"14",
1
],
[
"22",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"5",
1
],
[
"7",
1
],
[
"10",
1
],
[
"14",
1
],
[
"17",
1
],
[
"22",
1
]
]
]
],
[
"h",
"11.3.5 Rälsförhöjning"
],
[
"k",
"K38511"
],
[
"p",
"Gränsvärde i tabell K11.18 ska användas vid klassificering av åtgärdsnivå för rälsförhöjnings avvikelse från anordnad förhöjning."
],
[
"p",
"Tabell K11.18 Gränsvärden för rälsförhöjnings avvikelse från anordnad, obelastad mätning."
],
[
"tabell",
[
[
[
"Rälsförhöjnings avvikelse, punktfel i +/- mm",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"2",
1
],
[
"3",
1
],
[
"4",
1
],
[
"5",
1
],
[
"6",
1
],
[
"15",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"2",
1
],
[
"3",
1
],
[
"4",
1
],
[
"5",
1
],
[
"7",
1
],
[
"15",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"3",
1
],
[
"4",
1
],
[
"5",
1
],
[
"6",
1
],
[
"8",
1
],
[
"15",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"3",
1
],
[
"4",
1
],
[
"6",
1
],
[
"7",
1
],
[
"10",
1
],
[
"20",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"3",
1
],
[
"5",
1
],
[
"7",
1
],
[
"10",
1
],
[
"13",
1
],
[
"20",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"3",
1
],
[
"5",
1
],
[
"8",
1
],
[
"12",
1
],
[
"16",
1
],
[
"20",
1
]
]
]
],
[
"h",
"11.3.6 Skevning"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Vid obelastad mätning av skevning med mätbas 3 m blir osäkerheten i uppmätta värden alltför stor liksom risken för feltolkning av resultatet. De mätbehov som finns för obelastad mätning av skevning ska därför göras med mätbas 6 m."
],
[
"k",
"K38514"
],
[
"p",
"Obelastad mätning av skevning ska göras med mätbas 6 m."
],
[
"etikett",
"Råd"
],
[
"p",
"Obelastad mätning kan eventuellt användas för att indikera lokalisering av belastat uppmätta skevningsfel."
],
[
"k",
"K38516"
],
[
"p",
"Uppmätt värde från obelastad mätning får inte användas till att avskriva belastat uppmätt värde, även om obelastat uppmätt värde ligger inom angivna toleranser i tabell K11.19."
],
[
"etikett",
"Råd"
],
[
"p",
"Obelastad mätning av skevning ger osäkra resultat och bör därför endast användas för indikativa kontrollmätningar då sliprarna är väl understoppade."
],
[
"k",
"K38518"
],
[
"p",
"Gränsvärde i tabell K11.19 ska användas vid klassificering av åtgärdsnivå för skevning uppmätt med mätbas 6 meter."
],
[
"p",
"Tabell K11.19 Gränsvärden för skevnings punktfel, mätbas 6 m, obelastad mätning."
],
[
"tabell",
[
[
[
"Skevnings punktfel med 6 m mätbas, i +/- mm",
8
]
],
[
[
"Hastighetsklass",
1
],
[
"STH (km/h)",
1
],
[
"NYTT",
1
],
[
"NYJUST",
1
],
[
"PLAN",
1
],
[
"UH1",
1
],
[
"UH2",
1
],
[
"KRIT",
1
]
],
[
[
"H5",
1
],
[
"200<V≤250",
1
],
[
"4",
1
],
[
"4",
1
],
[
"6",
1
],
[
"7",
1
],
[
"10",
1
],
[
"15",
1
]
],
[
[
"H4",
1
],
[
"160<V≤200",
1
],
[
"4",
1
],
[
"4",
1
],
[
"6",
1
],
[
"8",
1
],
[
"12",
1
],
[
"18",
1
]
],
[
[
"H3",
1
],
[
"120<V≤160",
1
],
[
"4",
1
],
[
"4",
1
],
[
"7",
1
],
[
"9",
1
],
[
"14",
1
],
[
"20",
1
]
],
[
[
"H2",
1
],
[
"80<V≤120",
1
],
[
"6",
1
],
[
"6",
1
],
[
"9",
1
],
[
"11",
1
],
[
"17",
1
],
[
"20",
1
]
],
[
[
"H1",
1
],
[
"40<V≤80",
1
],
[
"8",
1
],
[
"8",
1
],
[
"11",
1
],
[
"14",
1
],
[
"20",
1
],
[
"25",
1
]
],
[
[
"H0",
1
],
[
"V≤40",
1
],
[
"10",
1
],
[
"10",
1
],
[
"13",
1
],
[
"16",
1
],
[
"20",
1
],
[
"25",
1
]
]
]
],
[
"k",
"K38519"
],
[
"p",
"Värde för UH2 i tabell K11.19 ska beskriva faktisk (absolut) total skevning inklusive rälsförhöjningsramp."
],
[
"k",
"K38520"
],
[
"p",
"Värde för KRIT i tabell K11.19 ska beskriva faktisk (absolut) total skevning inklusive rälsförhöjningsramp."
]
]
},
"00013-11-4": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "11.4 Spårläge i spårväxel",
"block": [
[
"h",
"11.4 Spårläge i spårväxel"
],
[
"k",
"K38522"
],
[
"p",
"Spårväxel ska uppfylla samma krav på det relativa spårläget som spår. Undantag gäller för nybyggnads- och underhållsgränsvärden för spårväxel enligt tabeller i bilaga 9 Toleranser nybyggnad och bilaga 11 Toleranser underhåll i dokument TRVINFRA-00017 Banöverbyggnad Spårväxel."
],
[
"etikett",
"Råd"
],
[
"p",
"Avvikelserna gäller något större toleranser vid nybyggnad samt snävare toleranser för underhåll."
]
]
},
"00013-13": {
"dok": "TRVINFRA-00013 Banöverbyggnad Spårläge",
"rubrik": "13 Åtgärd vid fel över KRIT-gräns",
"block": [
[
"h",
"13 Åtgärd vid fel över KRIT-gräns"
],
[
"h",
"13.1 Allmänt"
],
[
"k",
"K38545"
],
[
"p",
"För säkerhetskrav KRIT enligt tabell K11.1 ska efter belastad spårlägesmätning åtgärder enligt nedanstående punkter 1–3 vidtas:"
],
[
"li",
1,
"1.",
"Åtgärd ska omedelbart vidtas för att minska risken för säkerhetskonsekvens genom att någon av punkterna 1-3 utförs:"
],
[
"li",
3,
"1.",
"felet åtgärdas"
],
[
"li",
3,
"2.",
"hastighetsnedsättning"
],
[
"li",
3,
"3.",
"trafiken stoppas"
],
[
"li",
1,
"2.",
"Skevningsfel och spårviddsfel Max som överskrider KRIT-gräns ska klassas som urspårningsfarliga spårlägesfel och trafikal åtgärd vidtas enligt tabell K13.1– K13.3"
],
[
"li",
1,
"3.",
"Urspårningsfarliga spårlägesfel ska anmälas och hanteras enligt TDOK 2013:0658 Urspårningsfarliga spårlägesfel – Anmälan och trafikal åtgärd."
],
[
"k",
"K38546"
],
[
"p",
"För säkerhetskrav KRIT enligt tabell K11.1 ska efter obelastad spårlägesmätning nedanstående krav uppfyllas:"
],
[
"li",
1,
"1.",
"Besiktningsman ska tillse att nödvändiga trafikala åtgärder enligt krav K38545 införs."
],
[
"h",
"13.2 Trafikala åtgärder vid KRIT ej urspårningsfarliga fel"
],
[
"k",
"K38548"
],
[
"p",
"Om nedanstående, ej urspårningsfarliga, höjd- och sidolägesfel i våglängdsområde D1 (1–25m) samt rälsförhöjningsfel över KRIT-gräns inte åtgärdas inom 14 dagar ska trafikala åtgärder vidtas enligt punkt 1−3 nedan"
],
[
"li",
1,
"1.",
"Höjdlägesfel i våglängdsområde D1: Hastigheten ska minst sättas ned till den högsta hastighet som gäller i den hastighetsklass (H) inom vilken uppmätt värde underskrider KRIT-gräns enligt tabell K11.4."
],
[
"li",
1,
"2.",
"Sidolägesfel i våglängdsområde D1: Hastigheten ska minst sättas ned till den högsta hastighet som gäller i den hastighetsklass (H) inom vilken uppmätt värde underskrider KRIT-gräns enligt tabell K11.6."
],
[
"li",
1,
"3.",
"Rälsförhöjningsfel: Hastigheten ska minst sättas ned till den högsta hastighet som gäller i den hastighetsklass (H) inom vilken uppmätt värde underskrider KRIT-gräns enligt tabell K11.8."
],
[
"k",
"K38549"
],
[
"p",
"Om nedanstående, ej urspårningsfarliga, höjd- och sidolägesfel i våglängdsområde D2 över KRIT-gräns inte åtgärdas inom 3 månader ska trafikala åtgärder vidtas enligt punkt 1−2 nedan:"
],
[
"li",
1,
"1.",
"Höjdlägesfel i våglängdsområde D2: Hastigheten ska minst sättas ned till den högsta hastighet som gäller i den hastighetsklass (H) inom vilken uppmätt värde underskrider KRIT-gräns enligt tabell K11.5."
],
[
"li",
1,
"2.",
"Sidolägesfel ivåglängdsområde D2: Hastigheten ska minst sättas ned till den högsta hastighet som gäller i den hastighetsklass (H) inom vilken uppmätt värde underskrider KRIT-gräns enligt tabell K11.7."
],
[
"h",
"13.3 Trafikala åtgärder vid urspårningsfarliga fel"
],
[
"k",
"K38551"
],
[
"p",
"Vid urspårningsfarliga spårlägesfel, ska trafikala åtgärder omedelbart vidtas enligt tabell K13.1, K13.2 och K13.3 nedan."
],
[
"k",
"K38552"
],
[
"p",
"Anmälan och hantering av urspårningsfarliga spårlägesfel ska utföras enligt TDOK 2013:0658 Urspårningsfarliga spårlägesfel – Anmälan och trafikal åtgärd."
],
[
"h",
"13.3.1 Skevningsfel - urspårningsfarliga"
],
[
"k",
"K38554"
],
[
"p",
"Gränsvärden och trafikala åtgärder i tabell K13.1 för urspårningsfarliga skevningsfel med mätbas 3 m."
],
[
"p",
"Tabell K13.1 Gränsvärden för skevningsfel, mätbas 3 m, samt trafikal åtgärd."
],
[
"tabell",
[
[
[
"Skevnings punktfel med mätbas 3 m - uppmätt skevning (värde i mm)",
3
]
],
[
[
"Hastighetsklass",
1
],
[
"Nedsättning till 40 km/h¹",
1
],
[
"Trafikstopp",
1
]
],
[
[
"H5",
1
],
[
"12 < värde ≤ 15",
1
],
[
"15 < värde",
1
]
],
[
[
"H4–H3",
1
],
[
"15 < värde ≤ 18",
1
],
[
"18 < värde",
1
]
],
[
[
"H2–H0",
1
],
[
"18 < värde ≤ 21",
1
],
[
"21 < värde",
1
]
]
]
],
[
"p",
"1Om STH är lägre än ₄₀ km/h gäller aktuell STH."
],
[
"k",
"K38555"
],
[
"p",
"Gränsvärden och trafikala åtgärder i tabell K13.2 för urspårningsfarliga skevningsfel med mätbas 6 m."
],
[
"p",
"Tabell K13.2 Gränsvärden för skevningsfel, mätbas 6 m, samt trafikal åtgärd."
],
[
"tabell",
[
[
[
"Skevnings punktfel med mätbas 6 m - uppmätt skevning (värde i mm)",
3
]
],
[
[
"Hastighetsklass",
1
],
[
"Nedsättning till 40 km/h¹",
1
],
[
"Trafikstopp",
1
]
],
[
[
"H5",
1
],
[
"20 < värde ≤ 23",
1
],
[
"23 < värde",
1
]
],
[
[
"H4–H3",
1
],
[
"25 < värde ≤ 28",
1
],
[
"28 < värde",
1
]
],
[
[
"H2–H0",
1
],
[
"29 < värde ≤ 32",
1
],
[
"32 < värde",
1
]
]
]
],
[
"p",
"1Om STH är lägre än ₄₀ km/h gäller aktuell STH."
],
[
"h",
"13.3.2 Spårviddsfel Max, punktfel - Urspårningsfarliga"
],
[
"k",
"K38557"
],
[
"p",
"Gränsvärden och trafikala åtgärder i tabell K13.3 för urspårningsfarliga spårviddsfel Max."
],
[
"p",
"Tabell K13.3 Gränsvärden för Spårviddsfel Max – samt Trafikal åtgärd."
],
[
"tabell",
[
[
[
"Spårvidd Max, punktfel - uppmätt spårvidd (värde i mm)",
3
]
],
[
[
"Hastighetsklass",
1
],
[
"Nedsättning till 40 km/h¹",
1
],
[
"Trafikstopp",
1
]
],
[
[
"H5–H4",
1
],
[
"28 < värde ≤ 33",
1
],
[
"33 < värde",
1
]
],
[
[
"H3–H2",
1
],
[
"33 < värde ≤ 35",
1
],
[
"35 < värde",
1
]
],
[
[
"H1–H0",
1
],
[
"35 < värde ≤ 37",
1
],
[
"37 < värde",
1
]
]
]
],
[
"p",
"1Om STH är lägre än ₄₀ km/h gäller aktuell STH."
],
[
"h",
"13.4 Åtgärder vid trång spårvidd"
],
[
"k",
"K38559"
],
[
"p",
"Vid spårviddsfel Min under KRIT-gräns enligt tabell K11.2, ska åtgärder enligt nedanstående punkter 1–2 vidtas:"
],
[
"li",
1,
"1.",
"En bedömning ska göras omedelbart med avseende på risk för instabil gång hos trafikerande fordon."
],
[
"li",
1,
"2.",
"Åtgärds- och tidsplan ska tas fram och beslutas."
],
[
"etikett",
"Råd"
],
[
"p",
"Risk för instabil gång hos trafikerande fordon kan inträffa då många punktfel finns på längre sträcka, ca 100 m eller mer. Typ av fordon kopplat till hastighet och spårets skick i övrigt bör vägas in i åtgärdsbedömningen. I svårare fall kan trafikerande järnvägsföretag kontaktas för gemensam bedömning."
]
]
},
"00015-7": {
"dok": "TRVINFRA-00015 Banöverbyggnad Oförstörande provning",
"rubrik": "7 Åtgärdstider för rälfel",
"block": [
[
"h",
"7 Åtgärdstider för rälfel"
],
[
"p",
"Sammanställning från den automatiska periodiska kontrollen kan med fördel användas för planering av åtgärd."
],
[
"p",
"Samråd bör ske med beställare för kontrakt periodisk OFP-kontroll om det råder oklarhet kring OFP-anmärkning som kan härledas till periodiska OFP-kontrollen."
],
[
"k",
"K38061"
],
[
"p",
"Grupp 1-fel med prioritet A – akut ska hanteras enligt avsnitt 9.2 Rälsbrott i TRVINFRA-00012 Banöverbyggnad Spårsystem."
],
[
"k",
"K38062"
],
[
"p",
"Grupp 1-fel med prioritet V – vecka ska åtgärdas senast två veckor (14 dagar) efter att fel har påträffats."
],
[
"k",
"K38063"
],
[
"p",
"Grupp 1-fel med prioritet M – månad ska åtgärdas senast tre månader (90 dagar) efter att fel har påträffats."
],
[
"etikett",
"Råd"
],
[
"p",
"Grupp 1-fel med prioritet A och V är större och allvarligare än grupp 1-fel med prioritet M."
],
[
"k",
"K38064"
],
[
"p",
"Grupp 2-fel med prioritet B – besiktigas okulärt vid varje säkerhetsbesiktning som utförs i aktuell anläggning."
],
[
"etikett",
"Råd"
],
[
"p",
"Underhållskontrakt kan välja att i förtid åtgärda grupp 2-fel."
],
[
"k",
"K274546"
],
[
"p",
"Åtgärd av OFP-anmärkningar ska genomföras enligt TDOK 2021:0302 Säkerhetsbesiktning - genomföra åtgärd."
],
[
"etikett",
"Råd"
],
[
"p",
"Åtgärd av fel finns beskrivet i TRVINFRA-00018 Spårkomponenter"
],
[
"k",
"K268853"
],
[
"p",
"Åtgärdstid för OFP-anmärkning får inte förlängas genom omkontroll."
],
[
"k",
"K37951"
],
[
"p",
"Feltyp 801 och räler med rostangrepp ska uppfylla krav i TRVINFRA-00018 Banöverbyggnad Spårkomponenter."
],
[
"etikett",
"Råd"
],
[
"p",
"Feltyp 801 ger en indikation på att rälerna kan ha korroderat. Den visuella kontrollen bör göras genom att lyfta beläggningen mellan rälerna för att kunna inspektera rälen ordentligt. Det är främst befästningarnas klämkrafter som hänsyn måste tas vid korrosion i rälfot, hur mycket material som finns kvar till befästningarna samt rälens integritet."
],
[
"k",
"K268898"
],
[
"p",
"I samband med att en OFP-anmärkning permanent åtgärdas ska den vita färgmarkeringen för OFP-anmärkningen tas bort från räl och rälkomponent."
]
]
},
"00017-9-3": {
"dok": "TRVINFRA-00017 Banöverbyggnad Spårväxel",
"rubrik": "9.3 Säkerhetsbesiktning",
"block": [
[
"h",
"9.3. Säkerhetsbesiktning"
],
[
"h",
"9.3.1. Toleranser säkerhet"
],
[
"k",
"K36884"
],
[
"p",
"Säkerhetstolerans för besiktningsklass B3-B5 ska vara enligt någon av punkterna 1– 16 för:"
],
[
"li",
1,
"1.",
"EV-60E enligt tabell B10.1."
],
[
"li",
1,
"2.",
"EV med R ≥ 300 m enligt tabell B10.2."
],
[
"li",
1,
"3.",
"EV med R < 300 m enligt tabell B10.3"
],
[
"li",
1,
"4.",
"EVR-60E enligt tabell B10.6."
],
[
"li",
1,
"5.",
"EVR-UIC60 och EVR-UIC60/60E enligt tabell B10.7."
],
[
"li",
1,
"6.",
"DKV-60E enligt tabell B10.10."
],
[
"li",
1,
"7.",
"DKV övriga växeltyper enligt tabell B10.11."
],
[
"li",
1,
"8.",
"EKV enligt tabell B10.14."
],
[
"li",
1,
"9.",
"EV tillhörande KRYSSVX-60E enligt tabell B10.16."
],
[
"li",
1,
"10.",
"SPK tillhörande KRYSSVX enligt tabell B10.17."
],
[
"li",
1,
"11.",
"EV tillhörande KRYSSVX övriga växeltyper med R ≥ 300 m enligt tabell B10.18."
],
[
"li",
1,
"12.",
"EV tillhörande KRYSSVX övriga växeltyper med R < 300 m enligt tabell B10.19"
],
[
"li",
1,
"13.",
"SPK tillhörande KRYSSVX övriga växeltyper enligt tabell B10.20."
],
[
"li",
1,
"14.",
"SPK enligt tabell B10.25."
],
[
"li",
1,
"15.",
"Smalspårsväxel enligt tabell B10.26."
],
[
"li",
1,
"16.",
"Treskensväxel enligt tabell B10.27-B10.28."
],
[
"p",
"Tabellerna finns i bilaga 10 Toleranser säkerhet."
],
[
"k",
"K36885"
],
[
"p",
"Säkerhetstolerans för besiktningsklass B1-B2 ska vara enligt någon av punkterna 1– 14 för:"
],
[
"li",
1,
"1.",
"EV-60E enligt tabell B10.4."
],
[
"li",
1,
"2.",
"EV övriga växeltyper enligt tabell B10.5."
],
[
"li",
1,
"3.",
"3V som avviker åt samma håll enligt tabell B10.8."
],
[
"li",
1,
"4.",
"3V avviker åt olika håll enligt tabell B10.9."
],
[
"li",
1,
"5.",
"DKV-60E enligt tabell B10.12."
],
[
"li",
1,
"6.",
"DKV övriga växeltyper enligt tabell B10.13."
],
[
"li",
1,
"7.",
"EKV enligt tabell B10.15."
],
[
"li",
1,
"8.",
"EV tillhörande KRYSSVX 60E enligt tabell B10.21."
],
[
"li",
1,
"9.",
"SPK tillhörande KRYSSVX 60E enligt tabell B10.22."
],
[
"li",
1,
"10.",
"EV tillhörande KRYSSVX övriga växeltyper enligt tabell B10.23."
],
[
"li",
1,
"11.",
"SPK tillhörande KRYSSVX övriga växeltyper enligt tabell B10.24."
],
[
"li",
1,
"12.",
"SPK enligt tabell B10.25."
],
[
"li",
1,
"13.",
"Smalspårsväxel enligt tabell B10.26."
],
[
"li",
1,
"14.",
"Treskensväxel enligt tabell B10.27-B10.28."
],
[
"p",
"Tabellerna finns i bilaga 10 Toleranser säkerhet."
],
[
"h",
"9.3.2. Omläggningsanordning JEA 70"
],
[
"k",
"K36887"
],
[
"p",
"Vid mätning av omläggningskraft i en spårväxel med mer än en omläggningsanordning får mätklocka inte användas."
],
[
"k",
"K36888"
],
[
"p",
"Vid mätning av omläggningskraft ska ström mätas över motor. Tillåtna värden avläses i tabell K9.1."
],
[
"k",
"K36889"
],
[
"p",
"Mätning ska ske med sant effektivvärdesvisande (TRMS) A-mätare oberoende av ställverkstyp."
],
[
"k",
"K36890"
],
[
"p",
"Vid besiktning i spårväxel ska värden enligt tabell K9.1 gälla."
],
[
"p",
"Tabell K9.1"
],
[
"tabell",
[
[
[
"Motor typ",
1
],
[
"Friktion (N)",
1
],
[
"Slaglängd (mm)",
1
],
[
"Motorström (A)",
1
]
],
[
[
"BKE 2501 (likström)",
1
],
[
"6000 ± 1000",
1
],
[
"94 (37-94)",
1
],
[
"2,0 ± 0,3",
1
]
],
[
[
"BKE 2501 (likström)",
1
],
[
"3000 ± 500",
1
],
[
"94 (37-94)",
1
],
[
"1,0 ± 0,2",
1
]
],
[
[
"BKE 2501 (likström)",
1
],
[
"6000 ± 1000",
1
],
[
"170 (102-170)",
1
],
[
"3,15 ± 0,45",
1
]
],
[
[
"BKE 2512 R1A (växelström)a⁾",
1
],
[
"6000 ± 1000",
1
],
[
"94 (37-94)",
1
],
[
"2,15 ± 0,25b⁾",
1
]
],
[
[
"BKE 2512 R1A (växelström)a⁾",
1
],
[
"3000 ± 500",
1
],
[
"94 (37-94)",
1
],
[
"1,35 ± 0,25b⁾",
1
]
],
[
[
"BKE 2512 R1A (växelström)a⁾",
1
],
[
"6000 ± 1000",
1
],
[
"170 (102-170)",
1
],
[
"3,7 ± 0,6b⁾",
1
]
],
[
[
"BKE 2512 R2A (växelström)a⁾",
1
],
[
"6000 ± 1000",
1
],
[
"94 (37-94)",
1
],
[
"1,9 ± 0,2b⁾",
1
]
],
[
[
"BKE 2512 R2A (växelström)a⁾",
1
],
[
"3000 ± 500",
1
],
[
"94 (37-94)",
1
],
[
"1,15 ±0,15b⁾",
1
]
],
[
[
"BKE 2512 R2A (växelström)a⁾",
1
],
[
"6000 ± 1000",
1
],
[
"170 (102-170)",
1
],
[
"3,25 ± 0,55b⁾",
1
]
]
]
],
[
"p",
"a) TRMS-visande amperemeter b) 4,5 A maximal ström för ställverk 85. Beakta vilotiden för ställverket mellan provkörningarna"
],
[
"h",
"9.3.3. EKR-UIC60 korsning med rörlig spets"
],
[
"k",
"K36892"
],
[
"p",
"Kontroll ska utföras enligt punkt 1 till och med 5:"
],
[
"li",
1,
"1.",
"skruvar för drivanslutningsplattor är låsta med åtdragningsmoment 500 Nm"
],
[
"li",
1,
"2.",
"främre drivanslutningsplatta har frigång, 2 +0/-1,5 mm, mot Mn-vaggan, se figur K9.1"
],
[
"li",
1,
"3.",
"dilatationsfogen vid omläggning har erforderligt rörelseutrymme och fungerar"
],
[
"li",
1,
"4.",
"glidplattor under korsningsspets är fria från föroreningar och främmande föremål"
],
[
"li",
1,
"5.",
"geometriparametrar är inom tolerans enligt avsnitt 10.9.1.1."
],
[
"figur",
"img/tdok/fig/00017-9-3-1.png",
"Figur K9.1 Drivanslutningsplatta 1 i EKR."
],
[
"k",
"K36893"
],
[
"p",
"Korsningsspets höjd ska kontrolleras i förhållande till ytterräl med hjälp av linjal eller lina som placeras tvärs över korsning enligt punkt 1 och 2:"
],
[
"li",
1,
"1.",
"Korsningsspets ligger 0,3 mm under vingräl vid position:"
],
[
"li",
3,
"a.",
"1000 mm bakom spetsens framkant för EKR-UIC60-1:14/15."
],
[
"li",
3,
"b.",
"2335 mm bakom spetsens framkant för EKR-UIC60-1:26,5/27,5."
],
[
"li",
1,
"2.",
"Korsningsspets vingräl och ytterräl ligger på samma nivå vid positionen:"
],
[
"li",
3,
"a.",
"2567 mm bakom spetsens framkant för EKR-UIC60-1:14/15."
],
[
"li",
3,
"b.",
"5315 mm bakom spetsens framkant för EKR-UIC60-1:26,5/27,5."
],
[
"etikett",
"Råd"
],
[
"p",
"En distans på 10–12 mm mellan linjal eller lina och ytterräl reducerar risken att linjal eller lina rider på korsningen."
]
]
},
"00017-10-6": {
"dok": "TRVINFRA-00017 Banöverbyggnad Spårväxel",
"rubrik": "10.6 Kontroll av växeltungors, stödräls slitage",
"block": [
[
"h",
"10.6. Kontroll av växeltungors, stödräls slitage"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Det kombinerade slitaget på tunga och stödräl tillsammans med slitaget på hjulflänsen är avgörande för om urspårningsrisk föreligger vid tungspetsen i en spårväxel. Avsnittet beskriver ett redskap som används vid kontroll av slitage på tungor och stödräler i spårväxlar med avseende på urspårningsrisk. Vidare redovisar avsnittet bedömningskriterier för när urspårningsrisk föreligger i en spårväxel. Dessutom omfattar avsnittet en bruksanvisning av hur redskapet används och en allmän beskrivning av redskapet med ritningsförteckning samt artikelnummer för beställning hos Trafikverket Logistik."
],
[
"h",
"10.6.1. Anskaffning"
],
[
"k",
"K36945"
],
[
"p",
"Redskap och dess tillhörande mallar för kontroll av växeltungors och stödrälers slitage med artikelnummer 7959400 ska beställas från Trafikverket Logistik, Nässjö."
],
[
"h",
"10.6.2. Användning"
],
[
"k",
"K36947"
],
[
"p",
"Kontroll ska göras, innan redskap används, att mallar inte är skadade."
],
[
"etikett",
"Råd"
],
[
"p",
"Redskapet består av tre stycken mallar:"
],
[
"li",
1,
"•",
"Mall 1: Kontroll av tungspets. Anger om urspårningsrisk föreligger."
],
[
"li",
1,
"•",
"Mall 2: Kontroll av tungans höjd. Anger om urspårningsrisk föreligger."
],
[
"li",
1,
"•",
"Mall 3: Kontroll av stödräl. Anger om ny tunga kan läggas in mot sliten stödräl."
],
[
"p",
"Mall 1 och 2 används för alla växelmodeller. Mall 3 används för växeltyp UIC60, BV50, SJ50, SJ43 och SJ41."
],
[
"k",
"K36949"
],
[
"p",
"Redskapet ska vid användning placeras vinkelrätt mot den punkt på tungan som ska kontrolleras. Se figur K10.1."
],
[
"figur",
"img/tdok/fig/00017-10-6-1.jpg",
"Figur K10.1 Redskap placeras vinkelrätt mot tunga/stödräl."
],
[
"h",
"10.6.2.1. Kontroll av tungspets"
],
[
"k",
"K36951"
],
[
"p",
"Tungspets ska kontrolleras med mall 1."
],
[
"k",
"K36952"
],
[
"p",
"Vid kontroll ska mall placeras ytterst på tungspetsen."
],
[
"k",
"K36953"
],
[
"p",
"Bedömning ska göras enligt figur K10.2."
],
[
"figur",
"img/tdok/fig/00017-10-6-2.jpg",
"Figur K10.2 Kontroll av tungspets med mall 1."
],
[
"h",
"10.6.2.2. Kontroll av tungans höjd"
],
[
"k",
"K36955"
],
[
"p",
"Tungans höjd ska kontrolleras med mall 2."
],
[
"k",
"K36956"
],
[
"p",
"Kontroll ska göras 200 mm från tungspets och in på tungan på en längd som bestäms av slitagets omfattning."
],
[
"k",
"K36957"
],
[
"p",
"Bedömning ska göras enligt figur K10.3."
],
[
"figur",
"img/tdok/fig/00017-10-6-3.png",
"Figur K10.3 Kontroll av tungans höjd."
],
[
"h",
"10.6.2.3. Kontroll av sidoslitage på stödräl"
],
[
"k",
"K36959"
],
[
"p",
"Innan tunga med ny profil får läggas in ska stödrälens slitage kontrolleras med mall 3."
],
[
"k",
"K36960"
],
[
"p",
"Mall ska placeras 5–10 mm framför tungspetsen för kontroll av sidoslitage."
],
[
"k",
"K36961"
],
[
"p",
"Bedömning ska göras enligt figur K10.4."
],
[
"figur",
"img/tdok/fig/00017-10-6-4.png",
"Figur K10.4 Kontroll av sidoslitage på stödräl."
],
[
"h",
"10.6.2.4. Kontroll av höjdslitage på stödräl"
],
[
"k",
"K36963"
],
[
"p",
"Innan tunga med ny profil får läggas in ska stödrälens höjdslitage kontrolleras med mall 3."
],
[
"k",
"K36964"
],
[
"p",
"Vid kontroll ska mall placeras på stödrälen, dels vid tungspets, dels 2 m in på tungan."
],
[
"k",
"K36965"
],
[
"p",
"Tillåtet avstånd mellan mall och stödräls överkant ska vara enligt följande:"
],
[
"li",
1,
"1.",
"stödräl (UIC60) ≤ 1,5 mm"
],
[
"li",
1,
"2.",
"stödräl (BV50, SJ50, 43, 41) Se rits på tolk."
],
[
"k",
"K36966"
],
[
"p",
"Bedömning ska göras enligt figur K10.5."
],
[
"figur",
"img/tdok/fig/00017-10-6-5.png",
"Figur K10.5 Kontroll av höjdslitage på stödräl."
],
[
"h",
"10.6.3. Byte av mallar"
],
[
"k",
"K36968"
],
[
"p",
"Skadade mallar ska omedelbart bytas ut."
]
]
},
"00017-10-8": {
"dok": "TRVINFRA-00017 Banöverbyggnad Spårväxel",
"rubrik": "10.8 Mangankorsning",
"block": [
[
"h",
"10.8. Mangankorsning"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Detta avsnitt ska ligga till grund vid bedömning av defekter, i första hand sprickor, i mangankorsningar samt styra åtgärder. Tanken är att Trafikverket ska kunna behålla korsningar längre tid i spår innan de tas ur drift med bibehållen säkerhet. Avsnittet omfattar mangankorsningar under såväl som efter garantitiden. Avsnittet omfattar manganmaterialet i korsningar med fast såväl som rörlig korsningsspets. Avsnittet omfattar inte rälskorsningar eller defekter i räler i anslutning till skarvar, så kallade Inoxskarvar. Avsnittet omfattar sprickor i mangankorsningar, övriga defekttyper behandlas inte. Orsaken till sprickor i korsningar beror på förekomst av defekt i kombination med belastning. Detta gäller oberoende av om det rör sig om mangan- eller rälskorsningar. Defekter går relativt lätt att hitta i rälsmaterial men i manganstål är det svårare. Mangankorsningar är gjutna och i och med det kan materialet innehålla någon form av gjutdefekt. Gjutstrukturen gör det också svårt att med ultraljud hitta defekter och avgöra dess storlek. Tiden det går för att en defekt ska bli synlig på ytan av korsningen beror dels på hur stor defekten är, dels på hur mycket korsningen belastas. För att uppnå en korsning där hjulet mjukt kan löpa från korsningsspets till vingräl och det omvända genomförs underhållsåtgärder innan stora skador och stort slitage uppkommit. Bedömningsgrunderna skiljer sig mellan mangankorsningar inom och utom garantitiden. Storleken på sprickor i korsningar inom garantitiden grundar sig på krav mot leverantör medan storleken på sprickor i korsningar utom garantitiden grundar sig på att säkerställa säkerheten. Långa disponeringstider behövs för att laga en diagonal eller längsgående spricka i mangankorsning."
],
[
"k",
"K36988"
],
[
"p",
"Förebyggande underhåll ska utföras på mangankorsning."
],
[
"etikett",
"Råd"
],
[
"p",
"Förebyggande underhållsåtgärder för att optimera livslängden för mangankorsning är:"
],
[
"li",
1,
"1.",
"Regelbundna slipningar för att undvika övervalsning och deformation."
],
[
"li",
1,
"2.",
"Åtgärda slitage i tid genom påsvetsning av korsningsspets och vingräl."
],
[
"li",
1,
"3.",
"Reparera skador så tidigt som möjligt för att hålla nere belastningen på korsningen."
],
[
"li",
1,
"4.",
"Kontrollera höjdläget på hela korsningspartiet och åtgärda eventuella fel genom stoppning, gummering eller slipersbyte."
],
[
"li",
1,
"5.",
"Penetrantprovning för kontroll av ytliga sprickor."
],
[
"etikett",
"Råd"
],
[
"p",
"Förutom rena underhållsbesiktningar kan slitage och slag kontrolleras ytterligare minst två gånger per år."
],
[
"k",
"K36991"
],
[
"p",
"Trafikverket Logistik ska alltid kontaktas när en defekt i mangankorsning detekteras under garantitid eller vid osäkerhet gällande garantitid, oavsett läge, storlek eller riktning."
],
[
"k",
"K36992"
],
[
"p",
"Reparation eller byte av mangankorsning under garantitid ska ske efter samråd med Trafikverket Logistik som har kontakt med leverantör."
],
[
"k",
"K36993"
],
[
"p",
"Hela mangankorsningen ska kontrolleras visuellt, särskild uppmärksamhet riktas mot:"
],
[
"li",
1,
"1.",
"korsningsspets"
],
[
"li",
1,
"2.",
"flänsränna"
],
[
"li",
1,
"3.",
"område på vingräl där hjulkontakt förekommer"
],
[
"li",
1,
"4.",
"korsningens liv och synlig del av fot"
],
[
"li",
1,
"5.",
"inoxskarv mellan manganmaterial och rälmaterial"
],
[
"etikett",
"Råd"
],
[
"p",
"Penetrantprovning (PT) kan vid behov användas som kompletterande undersökning av ytdefekt och spricka som går upp i mangankorsnings yta."
],
[
"k",
"K36996"
],
[
"p",
"Om en defekt vid besiktning av mangankorsning bedöms vara av så allvarlig karaktär att säkerheten påverkas ska beslut om omedelbar åtgärd fattas."
],
[
"k",
"K36997"
],
[
"p",
"Mangankorsning ska kontrolleras i periodicitet enligt TRVINFRA-00015 Banöverbyggnad Oförstörande provning."
],
[
"k",
"K36998"
],
[
"p",
"För bedömningsgrund av spricka i mangankorsning ska tabell K10.4 och K10.5 användas. Se även figur K3.22 i avsnitt 3.6 för definition av längd (L) och djup (D) för spricka."
],
[
"p",
"Tabell K10.4 Sammanställning av bedömningsgrund för spricka i mangankorsning, inom garantitid."
],
[
"tabell",
[
[
[
"Spricktyp",
1
],
[
"Byte",
1
],
[
"Kontroll/\nUppföljning",
1
],
[
"Åtgärd i samråd\nmed materialservice",
1
],
[
"Periodicitet för\nokulär-besiktning",
1
]
],
[
[
"Längsgående",
1
],
[
"L>100mm\nD>10mm oavsett längd\nSprickan viker av och tillväxer\ni annan riktning",
1
],
[
"Uppföljning\ndokumenteras i\nunderhållssystem",
1
],
[
"Detekterbar\nspricka",
1
],
[
"I enlighet med\nTDOK 2014:0240",
1
]
],
[
[
"Tvärgående",
1
],
[
"D>15mm\nGenom-gående i\nkorsningsspets\nSprickan viker av och tillväxer\ni annan riktning",
1
],
[
"Uppföljning\ndokumenteras i\nunderhållssystem",
1
],
[
"Detekterbar\nspricka",
1
],
[
"I enlighet med\nTDOK 2014:0240",
1
]
],
[
[
"Diagonala",
1
],
[
"D>15mm\nSprickan viker av och tillväxer\ni annan riktning",
1
],
[
"Uppföljning\ndokumenteras i\nunderhållssystem",
1
],
[
"Detekterbar\nspricka",
1
],
[
"I enlighet med\nTDOK 2014:0240",
1
]
],
[
[
"Flänsränna",
1
],
[
"L>200mm\nSprickan viker av och når över\nradie-övergången\nflänsränna/sida",
1
],
[
"Uppföljning\ndokumenteras i\nunderhållssystem",
1
],
[
"Detekterbar\nspricka",
1
],
[
"I enlighet med\nTDOK 2014:0240",
1
]
]
]
],
[
"p",
"Tabell K10.5 Sammanställning av bedömningsgrund för spricka i mangankorsning, utom garantitid."
],
[
"tabell",
[
[
[
"Spricktyp",
1
],
[
"Byte",
1
],
[
"Lagning/ Svets-rep",
1
],
[
"Kontroll/ Uppföljning",
1
],
[
"Periodicitet för okulärbesiktning",
1
]
],
[
[
"Längsgående",
1
],
[
"L>300mm\nSprickan viker av\noch tillväxer i\nannan riktning",
1
],
[
"L≤300mm om krav\npå svetsrep kan\nuppfyllas, annars\nbyte",
1
],
[
"Detekterbar\nspricka\nUppföljning\ndokumenteras i\nunderhållssystem",
1
],
[
"Minst varannan vecka vid\nbyte\nMinst varannan månad vid\nreparation",
1
]
],
[
[
"Tvärgående",
1
],
[
"D>35mm\nSprickan viker av\noch tillväxer i\nannan riktning",
1
],
[
"D≤35mm, om krav\npå svetsrep kan\nuppfyllas, annars\nbyte",
1
],
[
"Detekterbar\nspricka\nUppföljning\ndokumenteras i\nunderhållssystem",
1
],
[
"Minst varannan vecka vid\nbyte\nMinst varannan månad vid\nreparation",
1
]
],
[
[
"Diagonala",
1
],
[
"D>35mm\nSprickan viker av\noch tillväxer i\nannan riktning",
1
],
[
"D≤35mm, om krav\npå svetsrep kan\nuppfyllas, annars\nbyte",
1
],
[
"Detekterbar\nspricka\nUppföljning\ndokumenteras i\nunderhållssystem",
1
],
[
"Minst varannan vecka vid\nbyte\nMinst varannan månad vid\nreparation",
1
]
],
[
[
"Flänsränna",
1
],
[
"Sprickan viker av\noch tillväxer i\nannan riktning",
1
],
[
"L>200mm",
1
],
[
"Detekterbar\nspricka\nUppföljning\ndokumenteras i\nunderhållssystem",
1
],
[
"Minst varannan vecka vid\nbyte\nI enlighet med säkerhetsbesiktning minst varannan\nmånad",
1
]
]
]
],
[
"p",
"L=längd, D=djup"
],
[
"etikett",
"Råd"
],
[
"p",
"En okulär besiktning av mangankorsning görs innan beslut om åtgärd."
],
[
"etikett",
"Råd"
],
[
"p",
"Åtgärd av mangankorsning med defekt kan vara något av följande alternativ:"
],
[
"li",
1,
"1.",
"Behålla mangankorsning i trafik under regelbunden uppsikt."
],
[
"li",
1,
"2.",
"Svetsreparation."
],
[
"li",
1,
"3.",
"Byte av mangankorsning med eventuella föregående trafikbegränsande åtgärder, till exempel hastighetsnedsättning."
],
[
"etikett",
"Råd"
],
[
"p",
"Trafikala åtgärder bör beaktas vid detektering och uppföljning av defekt i mangankorsning, så som:"
],
[
"li",
1,
"1.",
"Hastighetsnedsättning"
],
[
"li",
1,
"2.",
"Omledning av trafik"
],
[
"k",
"K37002"
],
[
"p",
"Detekterade sprickor i korsningar inom garantitid som uppnått storlek enligt definierade spricklängder för åtgärd i korsningar som inte innefattas av garanti ska okulärbesiktigas minst varannan vecka för att säkerställa säkerheten."
],
[
"k",
"K37003"
],
[
"p",
"Fel i mangankorsning ska märkas ut på samma sätt som fel i rälkomponent.11 Märkning av fel, i dokument TRVINFRA-00015 Banöverbyggnad Oförstörande provning."
],
[
"etikett",
"Råd"
],
[
"p",
"Vid detektering och uppföljning av spricka i mangankorsning kan den märkas med körnslag."
],
[
"k",
"K37005"
],
[
"p",
"Detekterad spricka i flänsränna på mangankorsning ska svetsrepareras senast vid nästa planerade växelrevision."
],
[
"k",
"K37006"
],
[
"p",
"Defekt i mangankorsning ska tas bort helt vid svetsreparation. Om det inte går ska defekten svetsas igen och mangankorsningen bytas inom en vecka. Om byte av mangankorsning inte sker inom en vecka ska mangankorsningen besiktigas med maximalt sju (7) dagars mellanrum fram till dess att byte skett. Undantaget är genomgående spricka i flänsränna, se K37013."
],
[
"etikett",
"Råd"
],
[
"p",
"Bedömning om svetsning eller byte är lämpligt för åtgärdande av defekt i mangankorsning görs ur både ekonomisk och teknisk synvinkel."
],
[
"etikett",
"Råd"
],
[
"p",
"Vid svetsreparation av mangankorsning kan följande parametrar beaktas:"
],
[
"li",
1,
"1.",
"axellast"
],
[
"li",
1,
"2.",
"trafikbelastning"
],
[
"li",
1,
"3.",
"andel passagerartrafik"
],
[
"li",
1,
"4.",
"största tillåtna hastighet"
],
[
"etikett",
"Råd"
],
[
"p",
"Bedömning av disponeringstid vid svetsreparation av mangankorsning i spår, görs utförligt."
],
[
"etikett",
"Råd"
],
[
"p",
"Mangankorsningar kan svetsrepareras i spår om nog lång disponeringstid kan erhållas."
],
[
"etikett",
"Råd"
],
[
"p",
"Trafikala åtgärder bör beaktas för att säkerställa säkerheten, så som:"
],
[
"li",
1,
"1.",
"Hastighetsnedsättning"
],
[
"li",
1,
"2.",
"Omledning av trafik"
],
[
"k",
"K37012"
],
[
"p",
"Om krav på svetsning och borttagande av defekt inte kan uppnås under tilldelad disponeringstid i spår ska svetsning ske vid sidan av spår."
],
[
"k",
"K37013"
],
[
"p",
"En genomgående spricka i flänsränna på mangankorsning där botten av mangankorsningen nås, ska svetsas igen och behöver då inte bytas ut."
],
[
"k",
"K37014"
],
[
"p",
"Detekterad spricka i mangankorsning ska dokumenteras i Trafikverkets underhållssystem."
],
[
"k",
"K37015"
],
[
"p",
"Uppföljning av detekterad spricka ska dokumenteras i Trafikverkets underhållssystem."
],
[
"k",
"K37016"
],
[
"p",
"Beställaren ska informeras när anmärkning av detekterad spricka i mangankorsning görs i Trafikverkets underhållssystem."
],
[
"k",
"K37017"
],
[
"p",
"Vid dokumentering och uppföljning av detekterad spricka i mangankorsning ska följande rapporteras i Trafikverkets underhållssystem."
],
[
"li",
1,
"1.",
"Anmärkning: Rälfel"
],
[
"li",
1,
"2.",
"Åtgärdsförslag: Enligt notering"
],
[
"li",
1,
"3.",
"Prioritet: Besiktning"
],
[
"li",
1,
"4.",
"Föreslaget åtgärdsdatum: Det datum då korsningen ska besiktigas igen"
],
[
"li",
1,
"5.",
"Notering: Ange sprickans längd, djup och läge (från korsningsspets)."
],
[
"k",
"K37018"
],
[
"p",
"Vid planerat byte av mangankorsning ska följande rapporteras i Trafikverkets underhållssystem."
],
[
"li",
1,
"1.",
"Anmärkning: Rälfel"
],
[
"li",
1,
"2.",
"Åtgärdsförslag: Bytes"
],
[
"li",
1,
"3.",
"Prioritet: enligt K37019"
],
[
"li",
1,
"4.",
"Föreslaget åtgärdsdatum: (datum föreslås av systemet)"
],
[
"li",
1,
"5.",
"Notering: Ange sprickans längd, djup och läge (från korsningsspets)."
],
[
"k",
"K37019"
],
[
"p",
"Vid korsningsbyte ska prioritet på anmärkning väljas efter allvarlighetsgrad enligt avsnitt 6.6 i TDOK 2014:0240 Säkerhetsbesiktning av fasta järnvägsanläggningar."
],
[
"k",
"K37020"
],
[
"p",
"Vid detektering av defekt i mangankorsning under garantitid ska följande dokumenteras av ansvarig beställare tillsammans med Trafikverket Logistik."
],
[
"li",
1,
"1.",
"Kontaktuppgifter"
],
[
"li",
1,
"2.",
"Utdrag ur Trafikverkets underhållssystem."
],
[
"li",
1,
"3.",
"Utdrag ur BIS (i Excelformat, vid behov kompletterat med artikelnummer)"
],
[
"li",
1,
"4.",
"Beskrivning av spricka eller defekt (typ, storlek och läge)"
],
[
"li",
1,
"5.",
"Typ av trafik, hastigheter och tonnage (uppskattning)"
],
[
"li",
1,
"6.",
"Bild(er)"
],
[
"k",
"K37021"
],
[
"p",
"Normalt dispensförfarande gäller vid anmärkning i mangankorsning."
]
]
},
"00017-b10": {
"dok": "TRVINFRA-00017 Banöverbyggnad Spårväxel",
"rubrik": "Bilaga 10 Toleranser Säkerhet",
"block": [
[
"h",
"Bilaga 10 Toleranser Säkerhet"
],
[
"p",
"Tabell B10.1 Säkerhetstoleranser EV-60E B3-B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, c₁, t, t₁",
1
],
[
"± 6",
1
]
],
[
[
"d, d₁",
1
],
[
"+4\n-6",
1
]
],
[
[
"i, i₁",
1
],
[
"+2\n-4",
1
]
],
[
[
"e*, e₁*",
1
],
[
"+4\n-6",
1
]
],
[
[
"h, h₁",
1
],
[
"± 3",
1
]
]
]
],
[
"p",
"*e och e₁ kontrolleras endast för spårväxel i kurva."
],
[
"p",
"Tabell B10.2 Säkerhetstoleranser EV övriga växeltyper med R ≥ 300 m B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, c₁, t, t₁",
1
],
[
"+8\n-4",
1
]
],
[
[
"d, d₁",
1
],
[
"+6\n-4",
1
]
],
[
[
"i, i₁",
1
],
[
"max 1398\nmin 1392",
1
]
],
[
[
"e*, e₁*",
1
],
[
"+6\n-4",
1
]
],
[
[
"h, h₁",
1
],
[
"± 3",
1
]
]
]
],
[
"p",
"*e och e₁ kontrolleras endast för spårväxel i kurva."
],
[
"p",
"Tabell B10.3 Säkerhetstoleranser EV övriga växeltyper med R < 300 m B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, t",
1
],
[
"+8\n-4",
1
]
],
[
[
"c₁, t₁",
1
],
[
"+15\n-5",
1
]
],
[
[
"d",
1
],
[
"+6\n-4",
1
]
],
[
[
"d₁",
1
],
[
"+8\n-5",
1
]
],
[
[
"i, i₁",
1
],
[
"max 1398\nmin 1392",
1
]
],
[
[
"e*",
1
],
[
"+6\n-4",
1
]
],
[
[
"e₁*",
1
],
[
"+8\n-5",
1
]
],
[
[
"h",
1
],
[
"± 3",
1
]
],
[
[
"h₁",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"*e och e₁ kontrolleras endast för spårväxel i kurva."
],
[
"p",
"Tabell B10.4 Säkerhetstoleranser EV-60E B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, c₁, t, t₁",
1
],
[
"+13\n-7",
1
]
],
[
[
"d, d₁",
1
],
[
"+6\n-7",
1
]
],
[
[
"i, i₁",
1
],
[
"+4\n-7",
1
]
],
[
[
"e*, e₁*",
1
],
[
"+6\n-7",
1
]
],
[
[
"h, h₁",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"*e och e₁ kontrolleras endast för spårväxel i kurva."
],
[
"p",
"Tabell B10.5 Säkerhetstoleranser EV övriga växeltyper B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, c₁, t, t₁",
1
],
[
"+15\n-5",
1
]
],
[
[
"d, d₁",
1
],
[
"+8\n-5",
1
]
],
[
[
"i, i₁",
1
],
[
"max 1400\nmin 1389",
1
]
],
[
[
"e*, e₁*",
1
],
[
"+8\n-5",
1
]
],
[
[
"h, h₁",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"*e och e₁ kontrolleras endast för spårväxel i kurva."
],
[
"p",
"Tabell B10.6 Säkerhetstoleranser EVR-60E B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, c₁, t, t₁, d, d₁, e*, e₁*, z, z₁",
1
],
[
"+6\n-6",
1
]
]
]
],
[
"p",
"*e och e₁ kontrolleras endast för spårväxel i kurva."
],
[
"p",
"Tabell B10.7 Säkerhetstoleranser EVR-UIC60 och EVR-UIC60/60E B3-B5"
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, c₁, t, t₁, d, d₁, e*, e₁*, z, z₁",
1
],
[
"+8\n-4",
1
]
]
]
],
[
"p",
"*e och e₁ kontrolleras endast för spårväxel i kurva."
],
[
"p",
"Tabell B10.8 Säkerhetstoleranser 3V avviker åt samma håll B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, c₁, c₂, c₃",
1
],
[
"+ 15\n- 5",
1
]
],
[
[
"d, d₁, d₂, d₃, d₄",
1
],
[
"+ 8\n- 5",
1
]
],
[
[
"i, i₁, i₂, I₃, i₄, i₅",
1
],
[
"+ 6\n- 5",
1
]
],
[
[
"h, h₁, h₂, h₃, h₄, h₅",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"Tabell B10.9 Säkerhetstoleranser 3V avviker åt olika håll B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, b₁, c₁",
1
],
[
"+ 15\n- 5",
1
]
],
[
[
"d, d₁, d₂, d₃, d₄",
1
],
[
"+ 8\n- 5",
1
]
],
[
[
"i, i₁, i₂, i₃, i₄, i₅",
1
],
[
"+ 6\n- 5",
1
]
],
[
[
"h, h₁, h₂, h₃, h₄, h₅",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"Tabell B10.10 Säkerhetstoleranser DKV-60E B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"b, b₁, b₂, b₃, c, c₁, c₂, c₃, c₄, c₅, c₆, c₇",
1
],
[
"+ 6\n- 6",
1
]
],
[
[
"i, i₁, i₂, i₃",
1
],
[
"+ 2\n- 4",
1
]
],
[
[
"h, h₁, h₆, h₇",
1
],
[
"± 3",
1
]
]
]
],
[
"p",
"Tabell B10.11 Säkerhetstoleranser DKV övriga växeltyper B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"b, b₁, b₂, b₃, c, c₁, c₂, c₃, c₄, c₅, c₆, c₇",
1
],
[
"+ 8\n- 4",
1
]
],
[
[
"i, i₁, i₂, i₃",
1
],
[
"+ 4\n- 2",
1
]
],
[
[
"h, h₁, h₆, h₇",
1
],
[
"± 3",
1
]
]
]
],
[
"p",
"Tabell B10.12 Säkerhetstoleranser DKV-60E B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"b, b₁, b₂, b₃, c₁, c₂, c₅, c₆, c, c₃, c₄, c₇",
1
],
[
"+ 13\n- 7",
1
]
],
[
[
"i, i₁, i₂, i₃",
1
],
[
"+ 4\n- 7",
1
]
],
[
[
"h, h₁, h₆, h₇",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"Tabell B10.13 Säkerhetstoleranser DKV övriga växeltyper B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"b, b₁, b₂, b₃, c₁, c₂, c₅, c₆, c, c₃, c₄, c₇",
1
],
[
"+ 15\n- 5",
1
]
],
[
[
"i, i₁, i₂, i₃",
1
],
[
"+ 6\n- 5",
1
]
],
[
[
"h, h₁, h₆, h₇",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"Tabell B10.14 Säkerhetstoleranser EKV B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"b, b₁, b₂, b₃, c, c₁, c₂, c₅, c₆, c₇",
1
],
[
"+ 8\n- 4",
1
]
],
[
[
"i, i₁, i₂, i₃",
1
],
[
"+ 4\n- 2",
1
]
],
[
[
"h, h₁, h₆, h₇",
1
],
[
"± 3",
1
]
]
]
],
[
"p",
"Tabell B10.15 Säkerhetstoleranser EKV B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"b, b₁, b₂, b₃, c₁, c₂, c₅, c₆, c, c₇",
1
],
[
"+ 15\n- 5",
1
]
],
[
[
"i, i₁, i₂, i₃",
1
],
[
"+ 6\n- 5",
1
]
],
[
[
"h, h₁, h₆, h₇",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"Tabell B10.16 Säkerhetstoleranser EV tillhörande KRYSSVX-60E B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, t, c₁, t₁",
1
],
[
"+6\n-7",
1
]
],
[
[
"d, d₁",
1
],
[
"+4\n-6",
1
]
],
[
[
"i, i₁",
1
],
[
"+2\n-4",
1
]
],
[
[
"h",
1
],
[
"±3",
1
]
]
]
],
[
"p",
"Tabell B10.17 Säkerhetstoleranser SPK tillhörande KRYSSVX-60E B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"g₅, g₆, g₇, g₈",
1
],
[
"± 3",
1
]
],
[
[
"i₂, i₃, i₄, i₅",
1
],
[
"+2\n-4",
1
]
]
]
],
[
"p",
"Tabell B10.18 Säkerhetstoleranser EV tillhörande KRYSSVX övriga växeltyper med R ≥ 300m B3-B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, t, c₁, t₁",
1
],
[
"+8\n-4",
1
]
],
[
[
"d, d₁",
1
],
[
"+6\n-4",
1
]
],
[
[
"i, i₁",
1
],
[
"max 1398\nmin 1392",
1
]
],
[
[
"h",
1
],
[
"±3",
1
]
]
]
],
[
"p",
"Tabell B10.19 Säkerhetstoleranser EV tillhörande KRYSSVX övriga växeltyper med R < 300 m B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, t",
1
],
[
"+8\n-4",
1
]
],
[
[
"c₁, t₁",
1
],
[
"+15\n-5",
1
]
],
[
[
"d",
1
],
[
"+6\n-4",
1
]
],
[
[
"d₁",
1
],
[
"+8\n-5",
1
]
],
[
[
"i, i₁",
1
],
[
"max 1398\nmin 1392",
1
]
],
[
[
"h",
1
],
[
"±3",
1
]
]
]
],
[
"p",
"Tabell B10.20 Säkerhetstoleranser SPK tillhörande KRYSSVX övriga växeltyper B3–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"g₅, g₆, g₇, g₈",
1
],
[
"± 3**",
1
]
],
[
[
"i₂, i₃, i₄, i₅",
1
],
[
"max 1398***\nmin 1392***",
1
]
]
]
],
[
"p",
"**Kryssväxel SPK-SJ50/SJ43-1:4,44: g₅,₆,₇,₈ = +3 -9"
],
[
"p",
"***Kryssväxel SPK-SJ50-1:4,44: i₂,₃,₄,₅ = +12 -0"
],
[
"p",
"Tabell B10.21 Säkerhetstoleranser EV tillhörande KRYSSVX 60E B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, t, c₁, t₁",
1
],
[
"+13\n-7",
1
]
],
[
[
"d, d₁",
1
],
[
"+6\n-7",
1
]
],
[
[
"i, i₁",
1
],
[
"+4\n-7",
1
]
],
[
[
"h",
1
],
[
"±4",
1
]
]
]
],
[
"p",
"Tabell B10.22 Säkerhetstoleranser SPK tillhörande KRYSSVX 60E B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"g₅, g₆, g₇, g₈",
1
],
[
"± 3",
1
]
],
[
[
"i₂, i₃, i₄, i₅",
1
],
[
"+4\n-7",
1
]
]
]
],
[
"p",
"Tabell B10.23 Säkerhetstoleranser EV tillhörande KRYSSVX övriga växeltyper B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a, c, t, c₁, t₁",
1
],
[
"+15\n-5",
1
]
],
[
[
"d, d₁",
1
],
[
"+8\n-5",
1
]
],
[
[
"i, i₁",
1
],
[
"max 1400\nmin 1389",
1
]
],
[
[
"h",
1
],
[
"±4",
1
]
]
]
],
[
"p",
"Tabell B10.24 Säkerhetstoleranser SPK tillhörande KRYSSVX övriga växeltyper B1–B2."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"g₅, g₆, g₇, g₈",
1
],
[
"± 3**",
1
]
],
[
[
"i₂, i₃, i₄, i₅",
1
],
[
"max 1400***\nmin 1389***",
1
]
]
]
],
[
"p",
"**Kryssväxel SPK-SJ50/SJ43-1:4,44: g₅,₆,₇,₈ = +3 -9"
],
[
"p",
"***Kryssväxel SPK-SJ50-1:4,44: i₂,₃,₄,₅ = +12 -0"
],
[
"p",
"Tabell B10.25 Säkerhetstoleranser SPK B1–B5."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"i, i₁, i₂, i₃",
1
],
[
"+6\n-5",
1
]
],
[
[
"h, h₁, h₆, h₇",
1
],
[
"± 4",
1
]
]
]
],
[
"p",
"Tabell B10.26 Säkerhetstoleranser smalspårsväxel EV-SJ43-5,9-1:9-891 B1-B3"
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a",
1
],
[
"+15\n-5*",
1
]
],
[
[
"b",
1
],
[
"+15\n-5*",
1
]
],
[
[
"c",
1
],
[
"+15\n-5*",
1
]
],
[
[
"c₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"r",
1
],
[
"+15\n-5*",
1
]
],
[
[
"r₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"t",
1
],
[
"+15\n-5*",
1
]
],
[
[
"t₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"u",
1
],
[
"+15\n-5*",
1
]
],
[
[
"u₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"d",
1
],
[
"+15\n-5*",
1
]
],
[
[
"d₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"e",
1
],
[
"+15\n-5*",
1
]
],
[
[
"e₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"i",
1
],
[
"+4\n-2",
1
]
],
[
[
"i₁",
1
],
[
"+4\n-2",
1
]
],
[
[
"h",
1
],
[
"±3",
1
]
],
[
[
"h₁",
1
],
[
"±3",
1
]
],
[
[
"x",
1
],
[
"-3",
1
]
],
[
[
"x₁",
1
],
[
"-3",
1
]
]
]
],
[
"p",
"* Dock ej mindre än 888 mm"
],
[
"p",
"Tabell B10.27 Säkerhetstoleranser treskensväxel EV-SJ43-5,9-1:8-R1435-G891 och EVSJ43-5,9-1:12-R1435-G891 B1-B3"
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a",
1
],
[
"+8\n-4",
1
]
],
[
[
"a₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"b",
1
],
[
"+8\n-4",
1
]
],
[
[
"b₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"c",
1
],
[
"+8\n-4",
1
]
],
[
[
"c₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"r",
1
],
[
"+8\n-4",
1
]
],
[
[
"r₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"t",
1
],
[
"+8\n-4",
1
]
],
[
[
"t₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"u",
1
],
[
"+8\n-4",
1
]
],
[
[
"u₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"d",
1
],
[
"+6\n-4",
1
]
],
[
[
"d₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"e",
1
],
[
"+6\n-4",
1
]
],
[
[
"e₁",
1
],
[
"+15\n-5*",
1
]
],
[
[
"i",
1
],
[
"+4\n-2",
1
]
],
[
[
"i₁",
1
],
[
"+4\n-2",
1
]
],
[
[
"h",
1
],
[
"±3",
1
]
],
[
[
"h1",
1
],
[
"±3",
1
]
],
[
[
"x",
1
],
[
"≥55",
1
]
],
[
[
"x₁",
1
],
[
"-3",
1
]
]
]
],
[
"p",
"* Dock ej mindre än 888 mm"
],
[
"p",
"Tabell B10.28 Säkerhetstoleranser treskensväxel EV-SJ50-5,9-1:9-R1435-G1435/891 B1-B3"
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"a",
1
],
[
"+8\n-4",
1
]
],
[
[
"a₁",
1
],
[
"+15\n-5",
1
]
],
[
[
"b",
1
],
[
"+8\n-4",
1
]
],
[
[
"b₁",
1
],
[
"+15\n-5",
1
]
],
[
[
"x",
1
],
[
"≥55",
1
]
],
[
[
"x₁",
1
],
[
"≥55",
1
]
],
[
[
"c",
1
],
[
"+8\n-4",
1
]
],
[
[
"c₁",
1
],
[
"+15\n-5",
1
]
],
[
[
"c₂",
1
],
[
"+15\n-5",
1
]
],
[
[
"t",
1
],
[
"+8\n-4",
1
]
],
[
[
"t₁",
1
],
[
"+15\n-5",
1
]
],
[
[
"t₂",
1
],
[
"+15\n-5",
1
]
],
[
[
"d",
1
],
[
"+6\n-4",
1
]
],
[
[
"d₁",
1
],
[
"+8\n-5",
1
]
],
[
[
"d₂",
1
],
[
"+15\n-5",
1
]
]
]
],
[
"p",
"..."
],
[
"tabell",
[
[
[
"Mätpunkter",
1
],
[
"Tolerans (mm)",
1
]
],
[
[
"i",
1
],
[
"+4\n-2",
1
]
],
[
[
"h",
1
],
[
"±3",
1
]
],
[
[
"i₁",
1
],
[
"+4\n-2",
1
]
],
[
[
"h₁",
1
],
[
"±3",
1
]
],
[
[
"d₃",
1
],
[
"+6\n-4",
1
]
],
[
[
"d₄",
1
],
[
"+8\n-5",
1
]
],
[
[
"d₅",
1
],
[
"+15\n-5*",
1
]
],
[
[
"i₂",
1
],
[
"+4\n-2",
1
]
],
[
[
"h₂",
1
],
[
"±3",
1
]
],
[
[
"i₃",
1
],
[
"+4\n-2",
1
]
],
[
[
"h₃",
1
],
[
"±4",
1
]
],
[
[
"e",
1
],
[
"+6\n-4",
1
]
],
[
[
"e₁",
1
],
[
"+8\n-5",
1
]
],
[
[
"e₂",
1
],
[
"+15\n-5*",
1
]
]
]
],
[
"p",
"* Dock ej mindre än 888 mm"
]
]
},
"00018-10": {
"dok": "TRVINFRA-00018 Banöverbyggnad Spårkomponenter",
"rubrik": "10 Skyddsräler",
"block": [
[
"h",
"10 Skyddsräler"
],
[
"h",
"10.1. Konstruktiv utformning"
],
[
"h",
"10.1.1. Rälprofil"
],
[
"k",
"K37602"
],
[
"p",
"Begagnade räler som skyddsräl ska användas. Undantag är om begagnad räl inte finns att tillgå får ny räl användas."
],
[
"k",
"K225541"
],
[
"p",
"Vid användning av begagnad räl ska följande uppfyllas:"
],
[
"li",
1,
"1.",
"Rälprofil 50E3, omfattar samtliga tillverkningsår och stålsorter. Rälprofil 60E1 passar inte med nuvarande sortiment av sliprar för skyddsräl"
],
[
"li",
1,
"2.",
"Räler med eventuellt sidoslitage ska sliten farkant vara vänd mot spårmitt. Sidoslitage på båda farkanterna får inte förekomma. I övrigt ska slitagegränser för Sort 3 enligt kap 5.3.2 Tillåtet slitage uppfyllas"
],
[
"li",
1,
"3.",
"Isolerskarvar, kabelförbindningar och eventuella markeringar från den oförstörande provningen ska tas bort från samtliga räler. Svetsskarvar eller hål från kabelförbindningar kan behållas om de är visuellt oskadade"
],
[
"li",
1,
"4.",
"Ingen ytterligare OFP-kontroll krävs för användning"
],
[
"li",
1,
"5.",
"I första hand tillämpas Direkt återanvändning, enligt kapitel 5.3.1 Allmänt"
],
[
"li",
1,
"6.",
"Markeras med gul fetkrita och texten \"Skyddsräl\" ovanpå rälfot i vardera rälände"
],
[
"k",
"K37603"
],
[
"p",
"Annan avbärande anordning får användas men ska då, för varje enskilt fall, godkännas av beställaren."
],
[
"h",
"10.1.2. Utformning"
],
[
"k",
"K37605"
],
[
"p",
"Skyddsräl ska utföras som skarvspår utan skarvjärn."
],
[
"k",
"K37606"
],
[
"p",
"Spaltöppning mellan räländar ska ligga inom intervallet 30–40 mm."
],
[
"k",
"K37607"
],
[
"p",
"Rällängd för enskild skyddsräl får inte överstiga 40 m."
],
[
"k",
"K37608"
],
[
"p",
"Skyddsräls överkant ska ligga på samma nivå som farräls eller högst 40 mm under."
],
[
"k",
"K37609"
],
[
"p",
"Beställaren ska, för varje enskilt fall, godkänna att skyddsräl, eller annan avbärande anordning, placeras utanför farrälen."
],
[
"h",
"10.1.3. Utspetsning"
],
[
"k",
"K37611"
],
[
"p",
"Skyddsräl, inklusive utspetsning, ska nå minst 10 m utanför båda ändarna av det objekt där skyddsräl monteras."
],
[
"etikett",
"Råd"
],
[
"p",
"På broar mäts avståndet från landfästets inre avslut. Vid sned skärning mäts från landfästets innersta kant, vinkelrätt spåret."
],
[
"figur",
"img/tdok/fig/00018-10-1.png",
"Figur R10.1 Utspetsning av skyddräler"
],
[
"k",
"K37613"
],
[
"p",
"Vid skyddsräls slut ska utspetsning påbörjas med en spaltöppning på 30–40 mm."
],
[
"k",
"K37614"
],
[
"p",
"Utspetsning ska utformas med raka räler vilka sammanförs mot spårmitt till en hopsvetsad och nedåt avfasad spets, se ritning 1-514513."
],
[
"h",
"10.1.4. Montering"
],
[
"k",
"K37616"
],
[
"p",
"Skyddsräl ska monteras så att de inte överför längsgående kraft till spåret."
],
[
"etikett",
"Råd"
],
[
"p",
"För att inte överföra längsgående kraft till spår, vidmakthåll nominell spaltöppning."
],
[
"etikett",
"Råd"
],
[
"p",
"Lämpligen ”låses” skyddsräl med fast befästning på mitten av räl och övrig del av skyddsräl monteras med glidande befästning."
],
[
"k",
"K37619"
],
[
"p",
"Vid dilatationsanordning och skarvöppning mitt för balis placeras det fasta montaget i rälände närmast dessa ställen."
],
[
"etikett",
"Råd"
],
[
"p",
"Kortare räl som räcker över fem sliprar eller färre bör fästas med fast befästning på varje sliper."
],
[
"k",
"K37621"
],
[
"p",
"Skyddsräl på betongsliper:"
],
[
"li",
1,
"1.",
"ska utformas enligt gällande sammanställningsritning 1-514513"
],
[
"li",
1,
"2.",
"ska befästas på minst var annan sliper"
],
[
"li",
1,
"3.",
"ska befästas med klämmande klämplatta för fast montage"
],
[
"li",
1,
"4.",
"ska befästas med glidande klämplatta för glidande montage"
],
[
"k",
"K37622"
],
[
"p",
"Skyddsräl på träsliper:"
],
[
"li",
1,
"1.",
"ska befästas på varje sliper"
],
[
"li",
1,
"2.",
"ska normalt befästas med rälspik"
],
[
"li",
1,
"3.",
"ska befästas i kombination med rälvandringshinder på vardera sidan om slipern för fast montage"
],
[
"etikett",
"Råd"
],
[
"p",
"Vid behov, till exempel för att höja skyddsrälen till rätt nivå, kan underläggsplatta användas."
],
[
"k",
"K37624"
],
[
"p",
"Fast montage ska endast göras på ett ställe på varje rällängd."
],
[
"k",
"K37625"
],
[
"p",
"På betongsliper ska fast montering göras på två sliprar."
],
[
"k",
"K37626"
],
[
"p",
"På träsliper ska fast montering göras på en sliper."
],
[
"k",
"K37627"
],
[
"p",
"Skyddsräl får inte ha metallisk kontakt med I-räl."
],
[
"h",
"10.1.5. Avstånd mellan skyddsräl och farräls rälhuvud"
],
[
"k",
"K37629"
],
[
"p",
"Avståndet ska vara 450 mm."
],
[
"k",
"K37630"
],
[
"p",
"På bro med direkt spåruppläggning ska avståndet vara 250 mm."
],
[
"k",
"K37631"
],
[
"p",
"På en sträcka av minst 4 m ska skyddsräl föras in mot spårmitt så att avståndet blir 450 mm vid broöverbyggnadens slut, se ritning 4-803364."
],
[
"h",
"10.1.6. Balis"
],
[
"k",
"K37633"
],
[
"p",
"Vid balis ska, vid avstånd 450 mm mellan skyddsräl och farräl, urkapning göras i skyddsrälens fot enligt ritning 1-514513."
],
[
"k",
"K37634"
],
[
"p",
"Minst 30 mm skarvöppning ska anordnas i båda skyddsrälerna mitt för balis."
],
[
"h",
"10.1.7. Jordning"
],
[
"k",
"K37636"
],
[
"p",
"Skyddsräl ska jordas, se avsnitt 8.7 i TDOK 2014:0416 Jordning och skärmning i Trafikverkets anläggningar."
]
]
},
"00018-11": {
"dok": "TRVINFRA-00018 Banöverbyggnad Spårkomponenter",
"rubrik": "11 Stoppbock",
"block": [
[
"h",
"11 Stoppbock"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Stoppbockens uppgift är att bromsa upp tåg, rullande vagnar och vagnsätt vid spårslut på ett sådant sätt att rullande materiel och det som är ombord samt bakomvarande byggnader, människor etc. skyddas vid eventuell påkörning."
],
[
"p",
"Funktion hos en fast stoppbock ges genom att den inte är förskjutningsbar längs spåret. Påkörande fordon bringas därför till i det närmaste direkt stopp vid påkörning."
],
[
"p",
"Funktionen hos en glidbar stoppbock ges genom att den är förskjutningsbar längs spåret och uträttar vid påkörning ett bromsarbete genom friktionen i bromselementen. Bromsarbetet är beroende av friktionskraftens storlek och bromssträckans längd. Friktionskraftens storlek beror på åtdragningsmomentet och förspänningskraftens storlek i bromsförbanden, dessa specificeras för respektive stoppbock. Glidbar stoppbock och tillsatselement är möjliga att återställa till rätt läge efter påkörning."
],
[
"p",
"Funktionen hos de hydrauliska buffertarna är att de tar upp en del av bromsarbetet och automatiskt återställs till utgångsläget."
],
[
"k",
"K225551"
],
[
"p",
"Stoppbock ska monteras vid spårslut."
],
[
"k",
"K37642"
],
[
"p",
"Stoppbock ska dimensioneras utifrån dimensionerande hastighet och vikt så att fordon bromsas till stopp inom installationslängd."
],
[
"k",
"K37643"
],
[
"p",
"Om lokala förhållanden som t ex lutning på spåret erfordrar ökad bromsförmåga ska stoppbocken anpassas."
],
[
"k",
"K37644"
],
[
"p",
"Stoppbock ska dimensioneras på ett sådant sätt att rullande materiel och det som är ombord ej skadas vid påkörning."
],
[
"k",
"K37645"
],
[
"p",
"Stoppbock ska där så erfordras dimensioneras för att kunna ge skydd åt t ex byggnader, människor etc. som befinner sig bakom den."
],
[
"h",
"11.1. Val av stoppbock"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Avsnittet beskriver vilken hänsyn som skall tas vid val av stoppbock och dimensionering."
],
[
"k",
"K37648"
],
[
"p",
"Vid nybyggnad och upprustning ska någon av följande stoppbockar användas:"
],
[
"li",
1,
"1.",
"Gulo, enligt Trafikverkets Materialkatalog och information om stoppbock GULO ritning 805887 och ritning 805841"
],
[
"li",
1,
"2.",
"betongstoppbock - ändlastkaj, se tabell K.11.1 i avsnitt 11.2.3 Montering stoppbock"
],
[
"li",
1,
"3.",
"betongstoppbock - hydraulisk buffert. se tabell K.11.1 i avsnitt 11.2.3 Montering stoppbock"
],
[
"li",
1,
"4.",
"annan av Trafikverket godkänd stoppbock"
],
[
"etikett",
"Råd"
],
[
"p",
"Glidbar stoppbock används som standardstoppbock inom Trafikverket. Den är lämplig för de flesta platser där erforderligt spårutrymme finns. Genom olika monteringsalternativ kan den anpassas för varierande påkörningskrafter."
],
[
"p",
"Fast stoppbock används på plats, där enstaka vagnar skall bromsas upp eller där spårutrymme ej finns för användning av glidbar stoppbock och för låga hastigheter."
],
[
"p",
"Stoppbock av betong används på plats, där speciellt kraftigt skydd erfordras t ex mot väg, gångbana, hus och brant."
],
[
"p",
"Hydrauliska buffertar används på platser, där stora påkörningskrafter förekommer. De används även för att minska risken för skador på gods och rullande materiel vid påkörning."
],
[
"k",
"K225552"
],
[
"p",
"Vid underhåll får följande stoppbockar användas:"
],
[
"li",
1,
"1.",
"Gulo, enligt Trafikverkets Materialkatalog och information om stoppbock GULO ritning 805887 och ritning 805841"
],
[
"li",
1,
"2.",
"M 77, se tabell K.11.1 i avsnitt 11.2.3 Montering stoppbock"
],
[
"li",
1,
"3.",
"M 77 med hydraulisk buffert, se tabell K.11.1 i avsnitt 11.2.3 Montering stoppbock"
],
[
"li",
1,
"4.",
"VP600, fällbar stoppbock"
],
[
"li",
1,
"5.",
"betongstoppbock - ändlastkaj, se tabell K.11.1 i avsnitt 11.2.3 Montering stoppbock"
],
[
"li",
1,
"6.",
"betongstoppbock - hydraulisk buffert. se tabell K.11.1 i avsnitt 11.2.3 Montering stoppbock"
],
[
"li",
1,
"7.",
"annan av Trafikverket godkänd stoppbock"
],
[
"etikett",
"Råd"
],
[
"p",
"Med underhåll menas återinstallation av befintlig stoppbock, stoppbocksmodell t.ex. där stoppbocksposition ändras, byte av rälprofil eller behov av byte av komplett stoppbock av samma modell."
],
[
"k",
"K37649"
],
[
"p",
"Vid val av stoppbock typ och utförande ska hänsyn tas till följande:"
],
[
"li",
1,
"1.",
"Högsta hastighet som stoppbocken beräknas bli påkörd med"
],
[
"li",
1,
"2.",
"Tågvikter som beräknas förekomma"
],
[
"li",
1,
"3.",
"Byggnader eller anordningar bakom stoppbock som fordrar extra skydd"
],
[
"li",
1,
"4.",
"Att rullande materiel och det som är ombord ej skadas vid påkörning"
],
[
"li",
1,
"5.",
"Installationslängd"
],
[
"li",
1,
"6.",
"Skyddsspår eller inte"
],
[
"k",
"K37651"
],
[
"p",
"Följande tågvikt och hastighet ska gälla vid dimensionering av stoppbock:"
],
[
"li",
1,
"1.",
"Sidospår där skjutsning förekommer: 10 km/h."
],
[
"li",
1,
"2.",
"Huvudspår: 15 km/h"
],
[
"li",
1,
"3.",
"För övriga spår dimensioneras stoppbock med hänsyn till högsta hastighet"
],
[
"li",
1,
"4.",
"Stoppbock ska dimensioneras med hänsyn till förekommande tågvikt"
],
[
"k",
"K37658"
],
[
"p",
"Stoppbock som monteras på skyddsspår ska dimensioneras för att bromsa tåg med vikt på 1000 ton och hastighet 15 km/h till stopp och installeras med min 17 m installationslängd. Det motsvarande stoppbock angiven i tabell K.11.1 i avsnitt11.2.3 Montering stoppbock."
],
[
"h",
"11.2. Montering"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Avsnittet gäller förutsättningar för montering stoppbockar."
],
[
"k",
"K67362"
],
[
"p",
"Vid montering ska monteringsinstruktion för aktuell stoppbock följas för att säkerställa stoppbockens funktion."
],
[
"h",
"11.2.1. Spåravstånd"
],
[
"k",
"K37655"
],
[
"p",
"Spåravstånd mellan spår med stoppbock och annat spår ska vara minst 4,1 m plus eventuellt kurvtillägg."
],
[
"etikett",
"Råd"
],
[
"p",
"Spåravstånd mellan skyddsspår med stoppbock och huvudspår bör vara minst 4,5 m."
],
[
"h",
"11.2.2. Krav på spår"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Avsnittet gäller vid montering av rälmonterad stoppbock."
],
[
"h",
"11.2.2.1. Räler"
],
[
"k",
"K37663"
],
[
"p",
"Rältyp ska vara 60E1, 50E3 eller SJ43."
],
[
"k",
"K37664"
],
[
"p",
"Vid tågvikter högre än 200 ton ska räl 60E1 eller 50E3 användas."
],
[
"k",
"K37665"
],
[
"p",
"Rälers bromsytor inom installationslängden ska vara"
],
[
"li",
1,
"1.",
"Fria från svetsskarvar"
],
[
"li",
1,
"2.",
"Jämna"
],
[
"k",
"K37666"
],
[
"p",
"Skarvjärn får inte finnas inom installationslängden"
],
[
"k",
"K37667"
],
[
"p",
"För rälmonterad stoppbock, fast eller glidande ska spåret helsvetsas inom hela installationslängden och till en längd av minst 40 m framför stoppbocken eller till närmaste spårväxel."
],
[
"k",
"K37668"
],
[
"p",
"Höjdslitage på spårets räler får inte vara större än 2 mm."
],
[
"k",
"K37659"
],
[
"p",
"Om det finns spårledning ska skyddsspår förses med rostfri beläggning för att säkerställa kortslutning."
],
[
"h",
"11.2.2.2. Sliper"
],
[
"k",
"K37670"
],
[
"p",
"Sliper ska vara av betong eller trä av god kvalitet 5 m framför stoppbock och hela installationslängden. Med god kvalitet menas att inga slipersbrott förekommer och att sliprarnas bärighet inte försämrats till exempel genom omfattande sprickbildning eller röta."
],
[
"k",
"K37671"
],
[
"p",
"Betongsliper ska vara av den typ som används för skyddsräl, då förstärkt spår krävs enligt 11.2.2.5 Förstärkt spår."
],
[
"h",
"11.2.2.3. Befästning"
],
[
"k",
"K37673"
],
[
"p",
"Klämfjäderbefästning ska användas som rälbefästning."
],
[
"h",
"11.2.2.4. Isolerskarv"
],
[
"k",
"K37675"
],
[
"p",
"Isolerskarv i anslutning till rälmonterad stoppbock får inte placeras närmare än 2 m från stoppbockens infästning."
],
[
"k",
"K37676"
],
[
"p",
"Det får inte vara möjligt att ställa upp fordon mellan isolerskarv och stoppbock."
],
[
"h",
"11.2.2.5. Förstärkt spår"
],
[
"k",
"K37678"
],
[
"p",
"Förstärkning av spår ska utföras vid tågvikt över 200 ton eller dimensionerande hastigheter över 5 km/h. Förstärkning ska utföras med 2 extra räler min 2 m framför stoppbock och hela installationslängden likt skyddsräler."
],
[
"k",
"K71952"
],
[
"p",
"Förstärkning av spår ska utföras enligt montageritning för stoppbock i spår."
],
[
"etikett",
"Råd"
],
[
"p",
"Förstärkningen kan utgöras av begagnade räler."
],
[
"k",
"K37680"
],
[
"p",
"Slipersbädd ska vara av god kvalitet."
],
[
"h",
"11.2.2.6. Spårets rakhet"
],
[
"k",
"K37682"
],
[
"p",
"Inom 20 m framför stoppbock samt längs eventuell glidsträcka får horisontalradien inte vara mindre än 1000 m."
],
[
"h",
"11.2.3. Montering stoppbock"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Avsnittet behandlar montering av fast och glidbar rälmonterad stoppbock. Monteringen anpassas till exempel efter önskad funktion genom val av åtdragningsmoment i bromsförband, antal bromselement, positioner samt den totala installationslängden."
],
[
"p",
"Information finns även med om valbara stoppbockar."
],
[
"k",
"K37685"
],
[
"p",
"Före montering ska kontrolleras:"
],
[
"li",
1,
"1.",
"att monteringsinstruktion finns till hands"
],
[
"li",
1,
"2.",
"att skruvar i bromsförband är anoljade"
],
[
"li",
1,
"3.",
"att inga svetssvulster eller skarvar finns utefter bromssträckan"
],
[
"k",
"K37691"
],
[
"p",
"Efter slutförd montering ska stoppbockens och tillsatselementens främre kants läge markeras med ett gult streck på rälens liv så att de kan återställas till rätt läge efter påkörning."
],
[
"h",
"11.2.3.1. Modell M77 monteringsinstruktion"
],
[
"k",
"K37686"
],
[
"p",
"Före montering av rälmonterad stoppbock ska kontrolleras att spårets räler är infettade med smörjfett (grafitfett eller likvärdigt)."
],
[
"etikett",
"Råd"
],
[
"p",
"Infettning av räler görs för att undvika fastrostning av bromsförband."
],
[
"k",
"K37688"
],
[
"p",
"Tillsatselementen ska monteras som tillhörande stoppbock inkluderat att skruvarna dras med samma åtdragningsmoment."
],
[
"k",
"K37689"
],
[
"p",
"Montering av stoppbocksmodell M77 ska utföras enligt följande alternativ: Alternativ I"
],
[
"li",
1,
"1.",
"Alla skruvar i bromsförbanden ska dras till 400–500 Nm"
],
[
"li",
1,
"2.",
"Med tung hammare ska bromsförbanden slås så att de sätter sig"
],
[
"li",
1,
"3.",
"Skruvarna ska därefter dras till åtdragningsmoment enligt tabell K.11.1"
],
[
"p",
"Alternativ II"
],
[
"li",
1,
"1.",
"Alla skruvar i bromsförbanden ska dras med 300–400 Nm"
],
[
"li",
1,
"2.",
"Påkörning ska göras på stoppbocken med lok eller lokomotor så att bromsförbanden sätter sig"
],
[
"li",
1,
"3.",
"Samtliga skruvar ska efterdras till åtdragningsmoment enligt tabell K.11.1. och angivet inom \"( )\""
],
[
"k",
"K37690"
],
[
"p",
"Monteringskrav som ska följas för respektive modell samt information, dimensionerande hastighet och vikt redovisas i tabell K11.1."
],
[
"p",
"Tabell K11.1 Innehållande dimensionerande hastighet och vikt samt information och monteringskrav för respektive modell."
],
[
"tabell",
[
[
[
"Stoppbocksmodell",
1
],
[
"Tågvikt\nmax\n(ton)",
1
],
[
"Hastighet max\n(km/h)",
1
],
[
"Åtdragningsmoment\nAltI (AltII)",
1
],
[
"Min\ninstallationsängd\nA-mått (m)",
1
],
[
"Tillsatselement\n(par)",
1
],
[
"Figur*⁾\nRitning",
1
]
],
[
[
"M 77 fast",
1
],
[
"100",
1
],
[
"5",
1
],
[
"850",
1
],
[
"3",
1
],
[
"1",
1
],
[
"Figur\nB.1\nA 4862",
1
]
],
[
[
"M 77 fast",
1
],
[
"300",
1
],
[
"5",
1
],
[
"850",
1
],
[
"4",
1
],
[
"3",
1
],
[
"Figur\nB.2\nA 4862",
1
]
],
[
[
"M 77 fast\nhydraulisk\nbuffert OLÉO\ntyp 9",
1
],
[
"300",
1
],
[
"10",
1
],
[
"850",
1
],
[
"3",
1
],
[
"1",
1
],
[
"Figur\nB.3\n-",
1
]
],
[
[
"M 77 fast\nhydraulisk\nbuffert OLÉO\ntyp 15",
1
],
[
"1000",
1
],
[
"7",
1
],
[
"850",
1
],
[
"3",
1
],
[
"1",
1
],
[
"Figur\nB.3\n-",
1
]
],
[
[
"Betong\nstoppbock",
1
],
[
"1000",
1
],
[
"5",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"Figur\nB.4",
1
]
],
[
[
"Ändlastkaj",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
],
[
"-",
1
]
],
[
[
"Betong\nstoppbock\nhyrdaulisk\nbuffert",
1,
2
],
[
"300",
1
],
[
"10",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
],
[
"Figur\nB.5\n1-507840",
1,
2
]
],
[
[
"1000",
1
],
[
"7",
1
],
[
"-",
1
],
[
"-",
1
],
[
"-",
1
]
],
[
[
"M 77 glid",
1
],
[
"200",
1
],
[
"10",
1
],
[
"400 (270)",
1
],
[
"6",
1
],
[
"1",
1
],
[
"Figur\nB.6\nA 4862",
1
]
],
[
[
"M 77 glid",
1
],
[
"1 000",
1
],
[
"10",
1
],
[
"500 (350)",
1
],
[
"10",
1
],
[
"3",
1
],
[
"Figur\nB.7\nA 4862",
1
]
],
[
[
"M 77 glid",
1
],
[
"700",
1
],
[
"15",
1
],
[
"500 (350)",
1
],
[
"15",
1
],
[
"3",
1
],
[
"Figur\nB.7\nA 4862",
1
]
],
[
[
"M77 glid",
1
],
[
"1 000",
1
],
[
"15",
1
],
[
"500 (350)",
1
],
[
"20",
1
],
[
"3",
1
],
[
"Figur\nB.7\nA 4862",
1
]
],
[
[
"M77 glid\nSkyddsspår",
1
],
[
"1 000",
1
],
[
"15",
1
],
[
"500 (350)",
1
],
[
"17",
1
],
[
"3",
1
],
[
"Figur\nB.8\nA 4862",
1
]
],
[
[
"M 77 glid\nhydraulisk\nbuffert OLÉO\ntyp15",
1
],
[
"1 000",
1
],
[
"10",
1
],
[
"750",
1
],
[
"7",
1
],
[
"1",
1
],
[
"Figur\nB.9\n-",
1
]
],
[
[
"M 77 glid\nhydraulisk\nbuffert OLÉO\ntyp9",
1
],
[
"300",
1
],
[
"15",
1
],
[
"750",
1
],
[
"7",
1
],
[
"1",
1
],
[
"Figur\nB.9\n-",
1
]
]
]
],
[
"p",
"*) För figur som visar monteringskrav se bilaga 1"
],
[
"h",
"11.3. Anskaffning"
],
[
"k",
"K37693"
],
[
"p",
"På rekvisition av stoppbock ska anges:"
],
[
"li",
1,
"1.",
"Artikelnummer"
],
[
"li",
1,
"2.",
"Typ av stoppbock"
],
[
"li",
1,
"3.",
"Rältyp på montageplats"
],
[
"li",
1,
"4.",
"Högsta tågvikt och hastighet som stoppbocken beräknas bli påkörd med (vid beställning av stoppbock med hydraulbuffertar)"
]
]
},
"00012-7-1-1-7": {
"dok": "TRVINFRA-00012 Banöverbyggnad Spårsystem",
"rubrik": "7.1.1.7 Ballast och ballastsektion (skarvfritt spår)",
"block": [
[
"h",
"7.1.1.7. Ballast och ballastsektion"
],
[
"k",
"K35590"
],
[
"p",
"Makadamballast ska uppfylla krav enligt dokument TRVINFRA-00019 Banöverbyggnad Makadamballast."
],
[
"k",
"K35742"
],
[
"p",
"Makadamballast klass I ska användas. Undantag gäller på bangårdar där växlingsarbete förekommer samt gångytor på bangårdar där makadamballast klass II respektive finmakadam kan användas enligt avsnitt 6.1 Ballastlager i TDOK 2015:0198 Typsektioner för banan."
],
[
"k",
"K35743"
],
[
"p",
"Ballastsektion i spår ska anordnas enligt nedanstående punkter"
],
[
"li",
1,
"1.",
"Ballastskuldrans bredd från slipersände ska uppfylla nedanstående krav:"
],
[
"li",
3,
"a.",
"minsta bredd ska vara 40 cm vid STH ≤ 200 km/h"
],
[
"li",
3,
"b.",
"minsta bredd ska vara 50 cm vid STH > 200 km/h"
],
[
"li",
3,
"c.",
"minsta bredd ska vara 55 cm i kurvor med en horisontalradie < 500 m."
],
[
"li",
1,
"2.",
"I kurvor med horisontalradie < 400 m ska ballastskuldran i yttersträng överhöjas med minst 10 cm."
],
[
"li",
1,
"3.",
"I spår med STH ≤ 160 km/h ska ballastens överyta vara i nivå med slipers överkant med undantag för ballastskuldran i yttersträng för kurvor med horisontalradie < 400 m."
],
[
"li",
1,
"4.",
"I spår med STH > 160 km/h ska ballastens överyta uppfylla kraven i punkt d och e:"
],
[
"li",
3,
"d.",
"Mellan rälerna ska ballastnivån sänkas med 3–4 cm för att minska risken för stensprut."
],
[
"li",
3,
"e.",
"Utanför rällägena ska ballastnivån vara i nivå med slipers överkant."
],
[
"li",
1,
"5.",
"Sliprarnas ovansida ska vara fri från ballast."
],
[
"li",
1,
"6.",
"Ballastlagrets tjocklek under slipers underkant ska vara minst 30 cm. Vid rälsförhöjning gäller måttet under innerrälen."
],
[
"li",
1,
"7.",
"På broar eller betongdäck ska ballastlagrets tjocklek under slipers underkant vara minst 40 cm med undantag för övergångskonstruktion där ballasten avdelas där ballastlagrets tjocklek ska vara minst 30 cm."
],
[
"li",
1,
"8.",
"Makadamballastens släntlutning ska vara högst 1:1,5 i såväl rakspår som kurvspår."
],
[
"etikett",
"Råd"
],
[
"p",
"Illustration av ballastsektion vid rakspår och kurvor med R≥ 500 m."
],
[
"figur",
"img/tdok/fig/00012-7-1-1-7-1.jpg",
"Figur R7.1 Ballastsektion för rakspår och i kurvor med horisontalradie större eller lika med 500 m."
],
[
"etikett",
"Råd"
],
[
"p",
"Illustration av ballastsektion vid kurva med 400 ≤ R < 500 m."
],
[
"figur",
"img/tdok/fig/00012-7-1-1-7-2.jpg",
"Figur R7.2 Ballastsektion i kurvor med horisontalradie större eller lika med 400 m och mindre än 500 m."
],
[
"etikett",
"Råd"
],
[
"p",
"Illustration av ballastsektion vid kurva med R < 400 m."
],
[
"figur",
"img/tdok/fig/00012-7-1-1-7-3.jpg",
"Figur R7.3 Ballastsektion i kurvor med horisontalradie mindre än 400 m."
],
[
"etikett",
"Råd"
],
[
"p",
"Illustration av sänkt ballastsektion på sträckor med STH över 160 km/h."
],
[
"figur",
"img/tdok/fig/00012-7-1-1-7-4.png",
"Figur R7.4 Ballastsektion på sträckor med STH över 160 km/h."
],
[
"etikett",
"Råd"
],
[
"p",
"Vid andra hårda underlag under ballastlagret, så som bergtunnel eller terassyta av berg, kan en ökning av ballastlagrets yta vara nödvändigt. Alternativ till ökning av ballastlagrets tjocklek kan vara sliper med slipermatta."
],
[
"k",
"K258275"
],
[
"p",
"I spårväxel ska ballastsektion anordnas enligt något av nedanstående alternativ:"
],
[
"li",
1,
"1.",
"Enligt krav K35743."
],
[
"li",
1,
"2.",
"Enligt krav K35743 men med en sänkning av ballastnivå med 5 cm utmed glidplattor/underläggsplattor i tunganordning, korsning samt där moträler finns."
],
[
"etikett",
"Råd"
],
[
"p",
"Sänkning av ballastnivå under tunganordning och korsningsparti skapar utrymme som ger möjlighet att magasinera snö och is mellan snöröjningsinsatser. Se figurer i TDOK 2021:0284 Spårväxel vinterhandbok."
]
]
},
"00012-8-1-1-15": {
"dok": "TRVINFRA-00012 Banöverbyggnad Spårsystem",
"rubrik": "8.1.1.15 Ballast och ballastsektion (skarvspår)",
"block": [
[
"h",
"8.1.1.15. Ballast och ballastsektion"
],
[
"k",
"K35590"
],
[
"p",
"Makadamballast ska uppfylla krav enligt dokument TRVINFRA-00019 Banöverbyggnad Makadamballast."
],
[
"k",
"K36141"
],
[
"p",
"Makadamballast klass I ska användas i spår om någon av nedanstående punkter är uppfyllda"
],
[
"li",
1,
"1.",
"STAX högre än 20 ton"
],
[
"li",
1,
"2.",
"rällängd över 20 m"
],
[
"p",
"Undantag gäller på bangårdar där växlingsarbete förekommer samt gångytor på bangårdar där makadamballast klass II respektive finmakadam kan användas enligt avsnitt 6.1 Ballastlager i TDOK 2015:0198 Typsektioner för banan."
],
[
"k",
"K36142"
],
[
"p",
"Makadamballast av lägst klass II ska användas i spår om båda nedanstående punkter är uppfyllda"
],
[
"li",
1,
"1.",
"STAX 20 ton eller lägre"
],
[
"li",
1,
"2.",
"rällängd 20 m eller kortare"
],
[
"k",
"K36143"
],
[
"p",
"Ballastsektion ska anordnas enligt nedanstående punkter:"
],
[
"li",
1,
"1.",
"Ballastskuldrans bredd från slipersände ska uppfylla nedanstående krav:"
],
[
"li",
3,
"1.",
"minsta bredd ska vara 40 cm"
],
[
"li",
3,
"2.",
"minsta bredd ska vara 55 cm i kurvor med en horisontalradie mindre än 500 m"
],
[
"li",
1,
"2.",
"I kurvor med en horisontalradie mindre än 400 m ska ballastskuldran i yttersträng överhöjas med minst 10 cm."
],
[
"li",
1,
"3.",
"Ballastlagrets överyta ska vara i nivå med sliper överkant med undantag för kurvor med radie under 400 m."
],
[
"li",
1,
"4.",
"Sliprarnas ovansida ska vara fria från ballast."
],
[
"li",
1,
"5.",
"Ballastlagrets tjocklek under slipers underkant ska vara minst 30 cm. Vid rälsförhöjning gäller måttet under innerrälen."
],
[
"li",
1,
"6.",
"På broar, betongdäck och liknande \"hårt\" underlag ska ballastlagrets tjocklek under slipers underkant vara minst 40 cm."
],
[
"li",
1,
"7.",
"Ballastens släntlutning ska vara högst 1:1,5 i såväl rakspår som kurvspår."
]
]
},
"00398-7-1": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.1 Normalsektion och minsta sektion",
"block": [
[
"h",
"7.1. Normalsektion och minsta sektion"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Kraven för det fria utrymmet som ska finnas kring alla spår är framtagna i enlighet med den dynamiska beräkningsmetod som finns beskriven i SS-EN 15273. Metoden består dels av en referensprofil som är en gemensam profil för både dimensionering av fordon och fasta installationer längs spåren och dels ett regelverk för vilka rörelser och nödvändiga marginaler som ska tas hänsyn till vid beräkningarna."
],
[
"p",
"Trafikverket har beslutat att bygga nya banor så att de i framtiden kan trafikeras med fordon som uppfyller Dynamisk referensprofil SEc, inte är längre än 24 m samt 18 m mellan boggicentra, det så kallade normalfordonet, se vidare avsnitt 8. Utifrån detta fordon har en normalsektion för det fria utrymmet kring banan konstruerats."
],
[
"p",
"I horisontalkurvor ska tillägg för normalfordonets svepyta göras på insida och utsida i kurvan, så kallat kurvutvidgningstillägg. Vid rälsförhöjning följer normalsektionen spårplanet. Förutom att normalfordonet ska kunna trafikera spåren oinskränkt finns även marginaler tillagda för arbetarskydd samt rörelser i själva spåret."
],
[
"p",
"Vid placering av objekt bör tillägg till gällande infrastruktursektion tillämpas med hänsyn till objektets rörelse under dess livstid för att säkerställa att infrastruktursektionen uppfylls även över tid."
],
[
"p",
"Utöver kraven i detta dokument finns även krav för placering av fasta objekt invid järnväg specificerade i TRVINFRA-00140 Allmänt Tillämpning av starkströmsföreskrifterna vid utformning av Trafikverkets järnvägsanläggningar."
],
[
"k",
"K30144"
],
[
"p",
"Vid nybyggnation ska Normalsektion för fria rummet enligt figur K7.1 användas."
],
[
"etikett",
"Råd"
],
[
"p",
"N3 och N3,5 gäller vid medellånga respektive långa objekt. Detta utrymme är tilltaget på grund av hänsyn till arbetsskyddet. I befintlig anläggning bör dessa mått uppfyllas så långt det är möjligt."
],
[
"etikett",
"Råd"
],
[
"p",
"Vid enkelspår kan det vara tillräckligt med enkelsidigt uppfyllande av N3 respektive N3,5. N3 plus nisch enligt avsnitt 7.2.7 är ett alternativ som kan övervägas."
],
[
"k",
"K217568"
],
[
"p",
"Vid placering av långa objekt mellan två spår med STH > 250 km/h ska avståndet från respektive spår vara N3,5 plus 0,5 meter."
],
[
"k",
"K30147"
],
[
"p",
"Vid förändring i befintlig anläggning ska"
],
[
"li",
1,
"a.",
"i första hand Normalsektion för fria rummet enligt figur K7.1 användas där det är ekonomiskt rimligt"
],
[
"li",
1,
"b.",
"i andra hand Minsta sektion C användas där det är ekonomiskt rimligt"
],
[
"li",
1,
"c.",
"i tredje hand minsta sektion bestämmas av den trafik som ska kunna trafikera spåret dvs. Minsta sektion A och aktuella specialtransporter."
],
[
"etikett",
"Råd"
],
[
"p",
"Trafikverket har som långsiktigt mål att kunna upplåta de flesta banor för trafik med fordon som är konstruerade enligt Dynamisk referensprofil SEc."
],
[
"k",
"K30148"
],
[
"p",
"I de fall måtten för Normalsektion för fria rummet inte uppfylls vid förändring i befintlig anläggning får:"
],
[
"li",
1,
"•",
"aktuellt utrymme inte bli sämre än före förändringen"
],
[
"li",
1,
"•",
"Minsta sektion C respektive Minsta sektion A aldrig underskridas."
],
[
"k",
"K30150"
],
[
"p",
"Vid trång sektion ska det på väl synlig plats finnas tavla ”trång sektion”, enligt avsnitt 10, på vardera sida om trång sektion och på samma sida i förhållande till spåret om denna."
],
[
"k",
"K30151"
],
[
"p",
"I trång sektion får spårläget inte ändras utan särskilt medgivande från förvaltare av regelverk för Infrastruktursektioner."
]
]
},
"00398-7-1-1": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.1.1 Normalsektion för fria rummet ovan 50 mm över RÖK",
"block": [
[
"h",
"7.1.1. Normalsektion för fria rummet ovan 50 mm över RÖK"
],
[
"k",
"K30153"
],
[
"p",
"Normalsektion för fria rummet i figur K7.1 ska tillämpas för rakspår."
],
[
"figur",
"img/tdok/fig/00398-7-1-1-1.png",
"Figur K7.1 Normalsektion för fria rummet [mm]. I vertikalradier mindre än 2000 m ska måtten 5100 mm och 5250 mm ökas till 5150 mm och 5300 mm."
],
[
"etikett",
"Råd"
],
[
"p",
"I Normalsektion för fria rummet har hänsyn tagits till förväntade spårlägesfel i höjd och sida, rälsförhöjningsfel samt antagande om framtida spårjustering som tenderar att lyfta spåret över projekterad profil."
],
[
"k",
"K30154"
],
[
"p",
"Normalsektion för fria rummet, figur K7.1, ska i horisontalkurva ha tillägg för radie och rälsförhöjning, se avsnitt 7.1.5 och avsnitt 7.1.6."
],
[
"k",
"K30157"
],
[
"p",
"Objekt får inte placeras så att det inkräktar på Normalsektion för fria rummet."
],
[
"etikett",
"Råd"
],
[
"p",
"Tillägg till Normalsektion för fria rummet, se figur K7.1, bör ta hänsyn till maximal rörelse av objektet under dess livstid mätt från spårets projekterade läge samt framtida förändring av rälsförhöjning för att t.ex. klara högre hastighet på banan."
],
[
"k",
"K30160"
],
[
"p",
"Sektion N i figur K7.1 ska tillämpas för konstruktioner i allmänhet."
],
[
"k",
"K30161"
],
[
"p",
"Sektion Ne i figur K7.1 ska tillämpas för spänningsförande konstruktioner."
],
[
"k",
"K30162"
],
[
"p",
"Sektion N3 i figur K7.1 ska tillämpas för medellånga objekt."
],
[
"k",
"K30163"
],
[
"p",
"Sektion N3,5 i figur K7.1 ska tillämpas för långa objekt."
],
[
"k",
"K30164"
],
[
"p",
"Sektion K i figur K7.1 ska tillämpas som utrymme för utrustning som är nödvändig för kontaktledningskonstruktion på elektrifierad linje."
],
[
"etikett",
"Råd"
],
[
"p",
"Normalt krävs större höjd under byggnadsverk för att få plats med kontaktledningskonstruktion, se avsnitt 7.1.4. Höjd i tunnlar avgörs från fall till fall."
],
[
"k",
"K30165"
],
[
"p",
"Höjden H' för sektion K i figur K7.1 ska räknas som kontakttrådshöjd +300 mm, där 300 mm är tillägg på grund av isolationsavstånd och upplyft av kontakttråden."
],
[
"etikett",
"Råd"
],
[
"p",
"Måttet 300 mm är till för att överslag inte ska kunna ske mellan jordat föremål och spänningssatt strömavtagare."
],
[
"k",
"K30167"
],
[
"p",
"Inom det streckade området i figur K7.1 får det inte finnas andra objekt än de som är nödvändiga för järnvägsdrift."
],
[
"etikett",
"Råd"
],
[
"p",
"Exempel på föremål nödvändiga för järnvägsdrift är plattform, dvärgsignal, tavlor och skylt, växelklot och värmepost, se särskilda regler i avsnitt 7.2."
],
[
"k",
"K30169"
],
[
"p",
"Inom ej streckade delar av Normalsektion för fria rummet får inte förekomma annat än lastkaj, spärrstaket, rangerbroms och portöppning, se särskilda regler i avsnitt 7.2."
],
[
"k",
"K30170"
],
[
"p",
"Mått till befintlig konstruktion som finns innanför normalsektion för fria rummet får inte försämras genom förändring av spårets läge."
],
[
"k",
"K30171"
],
[
"p",
"Befintligt fast föremål som finns närmare spårmitt än 2,6 m och högre än 760 mm över RÖK ska vara utmärkt med svartgul varningsmarkering om växling förekommer."
],
[
"k",
"K30172"
],
[
"p",
"Möjlighet för genomfart med låg överskridande last ska beaktas på driftplats, se även avsnitt 7.1.5.3."
],
[
"etikett",
"Råd"
],
[
"p",
"En möjlig lösning är till exempel genom att hålla något spår fritt från föremål inom det streckade området i figur K7.1, helst det rakaste spåret genom trafikplatsen."
]
]
},
"00398-7-1-2": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.1.2 Minsta sektion C och Minsta sektion A",
"block": [
[
"h",
"7.1.2. Minsta sektion C och Minsta sektion A ovan 50 mm över RÖK"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Samtliga krav under avsnitt 7.1.2 gäller där det är ekonomiskt orimligt att tillämpa Normalsektion för fria rummet då tillämpas istället Minsta sektion C respektive Minsta sektion A (se K30147)."
],
[
"k",
"K30176"
],
[
"p",
"Vid förändring i anläggningen ska samråd med den organisatoriska enhet som ansvarar för handläggning av specialtransporter för att utreda vilken typ av specialtransport, gällande referensprofil och lastvikt, som framförs på berörd sträcka och säkerställa framkomlighet efter åtgärd. Initiativet till detta samråd ska tas av den som ansvarar för, planerar och utför förändring i anläggningen."
],
[
"k",
"K30178"
],
[
"p",
"Vid förändring i befintlig anläggning får inte Minsta sektion C respektive Minsta sektion A underskridas."
],
[
"etikett",
"Råd"
],
[
"p",
"Vid förändring i befintlig anläggning kan, beroende på vilken trafik som banan upplåts för, Minsta sektion C respektive Minsta sektion A användas."
],
[
"etikett",
"Råd"
],
[
"p",
"Vid förändring i befintlig anläggning bör inte avstånd till objekt inom undersökningssektionen minskas jämfört med befintlig anläggning."
],
[
"k",
"K30181"
],
[
"p",
"Vid förändring i befintlig anläggning ska det undersökas om objekt inom undersökningssektion kan flyttas utanför undersökningssektion alternativt utanför Normalsektion för fria rummet."
],
[
"k",
"K33876"
],
[
"p",
"För medellånga objekt ska Minsta sektion A uppfylla sektion A2,8 enligt figur K7.3 och Minsta sektion C ska uppfylla sektion C2,9 enligt figur K7.2. Undantag medges för skyddsräcke på järnvägsbro, viadukt eller liknande vid ombyggnation av befintliga järnvägsbroar och spår på befintliga järnvägsbroar där avstånd från spårmitt till skyddsräcke tillåts minska med 0,3 m från ovan angivna mått (sektion A2,8 respektive C2,9)."
],
[
"k",
"K33877"
],
[
"p",
"För långa objekt ska Minsta sektion A uppfylla sektion A3,3 enligt figur K7.3 och Minsta sektion C ska uppfylla sektion C3,4 enligt figur K7.2. Undantag medges i följande fall:"
],
[
"li",
1,
"•",
"sektion där krav för långa objekt inte kan uppfyllas på grund av höga kostnader är det tillåtet att sektion för medellånga objekt nyttjas, om denna sektion är kompletterad med skyddsnisch, se avsnitt 7.2.7."
],
[
"li",
1,
"•",
"skyddsräcke på järnvägsbro, viadukt eller liknande vid ombyggnation av befintliga järnvägsbroar och spår på befintliga järnvägsbroar där avstånd från spårmitt till skyddsräcke tillåts minska med 0,3 m från ovan angivna mått (sektion A3,3 respektive C3,4)."
],
[
"h",
"7.1.2.1. Minsta sektion C"
],
[
"k",
"K30184"
],
[
"p",
"Minsta sektion C, se figur K7.2, ska tillämpas för verifikation av minsta tillåtna sektion som ska vara fri från föremål för att klara trafik med fordon som är konstruerade enligt:"
],
[
"li",
1,
"a.",
"Dynamisk referensprofil SEc"
],
[
"li",
1,
"b.",
"internationell profil GC."
],
[
"k",
"K30186"
],
[
"p",
"Minsta sektion C, enligt figur K7.2, ska tillämpas för rakspår."
],
[
"figur",
"img/tdok/fig/00398-7-1-2-1.png",
"Figur K7.2 Minsta sektion C [mm]. I vertikalradier mindre än 2000 m ska måtten 5000 mm och 5150 mm ökas till 5050 mm och 5200 mm."
],
[
"k",
"K30187"
],
[
"p",
"I kurva ska tillägg till Minsta sektion C finnas för radie och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6."
],
[
"k",
"K30188"
],
[
"p",
"Sektion C i figur K7.2 ska tillämpas för konstruktioner i allmänhet."
],
[
"k",
"K30189"
],
[
"p",
"Sektion Ce i figur K7.2 ska tillämpas för spänningsförande konstruktion."
],
[
"k",
"K30190"
],
[
"p",
"Sektion K i figur K7.2 ska tillämpas som utrymme för utrustning som är nödvändig för kontaktledningskonstruktion på elektrifierad linje."
],
[
"etikett",
"Råd"
],
[
"p",
"Se även Normalsektion för fria rummet vid nybyggnation, avsnitt 7.1.1."
],
[
"k",
"K30191"
],
[
"p",
"Höjd H' för sektion K i figur K7.2 ska räknas som kontakttrådshöjd +300 mm, där 300 mm är tillägg på grund av isolationsavstånd och upplyft av kontakttråden."
],
[
"h",
"7.1.2.2. Minsta sektion A"
],
[
"k",
"K30194"
],
[
"p",
"Minsta sektion A, se figur K7.3, ska tillämpas för verifikation av minsta tillåtna sektion som måste vara fri från föremål för att klara trafik med fordon som är konstruerade enligt:"
],
[
"li",
1,
"a.",
"Dynamisk referensprofil SEa"
],
[
"li",
1,
"b.",
"kombitrafikkod P/C 422 enligt ERA/TD/2023-01/CCT ¹⁾"
],
[
"li",
1,
"c.",
"Statisk referensprofil A"
],
[
"li",
1,
"d.",
"fordonsprofil F"
],
[
"li",
1,
"e.",
"internationell profil G1"
],
[
"li",
1,
"f.",
"internationell profil GA"
],
[
"li",
1,
"g.",
"internationell profil GB."
],
[
"p",
"Dokumentet motsvarar IRS 50596-6 och tidigare UIC 596-6. 1)"
],
[
"k",
"K30195"
],
[
"p",
"Minsta tillåtna sektion A enligt figur K7.3 ska tillämpas för rakspår."
],
[
"figur",
"img/tdok/fig/00398-7-1-2-2.png",
"Figur K7.3 Minsta sektion A [mm]. I vertikalradier mindre än 2000 m ska måtten 4800 mm och 4950 mm ökas till 4850 mm och 5000 mm."
],
[
"k",
"K30196"
],
[
"p",
"I kurva ska tillägg till Minsta sektion A finnas för radie och rälsförhöjning enligt avsnitt 7.1.5 och 7.1.6."
],
[
"k",
"K30197"
],
[
"p",
"Sektion A i figur K7.3 ska tillämpas för konstruktioner i allmänhet."
],
[
"k",
"K30198"
],
[
"p",
"Sektion Ae i figur K7.3 ska tillämpas för spänningsförande konstruktion."
],
[
"k",
"K30199"
],
[
"p",
"Sektion K i figur K7.3 ska tillämpas för utrymme för strömavtagare på elektrifierad linje."
],
[
"etikett",
"Råd"
],
[
"p",
"Se även Normalsektion för fria rummet vid nybyggnation, avsnitt 7.1.1."
],
[
"k",
"K30201"
],
[
"p",
"Höjd H' för sektion K i figur K7.3 ska räknas som minsta kontakttrådshöjd +300 mm, där 300 mm är tillägg på grund av isolationsavstånd och upplyft av kontakttråden."
]
]
},
"00398-7-1-3": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.1.3 Fritt utrymme under 50 mm över RÖK",
"block": [
[
"h",
"7.1.3. Fritt utrymme under 50 mm över RÖK"
],
[
"k",
"K30203"
],
[
"p",
"För Normalsektion för fria rummet, Minsta sektion C och Minsta sektion A ska fast anordning:"
],
[
"li",
1,
"•",
"i första hand placeras så att de inte inkräktar på varken snöröjningsmaskiners arbetsutrymme på linje/driftplats enligt figur K7.4 eller fria rummets undre begränsningslinjer enligt Figur K7.5"
],
[
"li",
1,
"•",
"i andra hand placeras så att de inte inkräktar på det fria rummets undre begränsningslinjer enligt Figur K7.5."
],
[
"figur",
"img/tdok/fig/00398-7-1-3-1.png",
""
],
[
"figur",
"img/tdok/fig/00398-7-1-3-2.png",
"Figur K7.4 Snöröjningssektion [mm]."
],
[
"figur",
"img/tdok/fig/00398-7-1-3-3.png",
"Figur K7.5 Fritt utrymme under 50 mm över RÖK [mm]."
],
[
"li",
0,
"1.",
"I vertikalradier mindre än 2000 m gäller 0 mm (RÖK-planet) som undre begränsningslinje. Rangerbromsar"
],
[
"p",
"tillåts gå över 50 mm över RÖK, se avsnitt 7.2.3."
],
[
"etikett",
"Råd"
],
[
"p",
"På linjen är det olämpligt att placera teknisk utrustning som inkräktar på snöröjningssektionen eftersom utrustning då riskerar att köras sönder."
],
[
"k",
"K30204"
],
[
"p",
"Flänsrännans mått i figur K7.5 ska med undantag för spårväxlar beräknas enligt:"
],
[
"p",
"f ≥ Spv-1375¹⁾ mm"
],
[
"p",
"där Spv = aktuell spårvidd i mm."
],
[
"p",
"1)I spårväxlar tillåts mått enligtTSD Infrastruktur avsnitt ₄.₂.₈.₆."
],
[
"k",
"K30205"
],
[
"p",
"Vid moträler och flänsränna i växlar ska minsta tillåtna mått på flänsrännan f = 41 mm tillämpas."
],
[
"k",
"K217700"
],
[
"p",
"Ploglyfttavlor, enligt avsnitt 10, ska användas mellan en driftplats yttersta växel och nästa driftplats yttersta växel."
],
[
"etikett",
"Råd"
],
[
"p",
"Ploglyfttavlor används vid behov även innanför driftplatsens yttersta växel."
],
[
"k",
"K30207"
],
[
"p",
"Ploglyfttavlor med de vita reflexfälten horisontella, enligt avsnitt 10, ska användas vid utsträckta hinder som inkräktar på fritt utrymme enligt figur K7.4."
],
[
"etikett",
"Råd"
],
[
"p",
"Exempel på utsträckt hinder som kan behöva ploglyfttavla är växel, plankorsning, pyramidmatta."
],
[
"k",
"K217702"
],
[
"p",
"Ploglyfttavlor med de vita reflexfälten vertikala, enligt avsnitt 10, ska användas vid punktformiga hinder som inkräktar på fritt utrymme enligt figur K7.4."
],
[
"etikett",
"Råd"
],
[
"p",
"Exempel på punktformigt objekt som kan behöva ploglyfttavla är rälssmörjningsapparat och detektor."
],
[
"k",
"K258667"
],
[
"p",
"På linje ska ploglyftartavlor sättas upp vid obevakade överfarter enligt avsnitt 10."
],
[
"etikett",
"Råd"
],
[
"p",
"Exempel på obevakade överfarter är väg- och skoterövergångar."
]
]
},
"00398-7-1-4": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.1.4 Fri höjd under fast konstruktion",
"block": [
[
"h",
"7.1.4. Fri höjd under fast konstruktion"
],
[
"k",
"K30210"
],
[
"p",
"Under fast konstruktion ska minsta fria höjd finnas enligt tabell K7.1."
],
[
"p",
"Tabell K7.1 Minsta fria höjd under fast konstruktion [m]."
],
[
"tabell",
[
[
[
"Hastighet km/h",
1,
2
],
[
"Fri höjd under fast konstruktion (m) ¹,²⁾",
2
]
],
[
[
"Längd ≤15 m",
1
],
[
"Längd >15 m",
1
]
],
[
[
"≤130",
1
],
[
"6,0 (5,3)³⁾",
1
],
[
"6,2 (5,5)³⁾",
1
]
],
[
[
">130–200",
1
],
[
"6,3",
1
],
[
"6,5",
1
]
],
[
[
">200–360",
1
],
[
"6,7",
1
],
[
"6,7",
1
]
]
]
],
[
"p",
"1) För spår med rälsförhöjning ska höjden räknas från högsta rälen."
],
[
"p",
"2) Finns sektionsutliggare alternativt växelutliggare under fast konstruktion ska höjd i tabellen ökas med 0,3 m."
],
[
"p",
"3) Mått inom parentes ska gälla för oelektrifierad bana som inte planeras att bli elektrifierad."
],
[
"etikett",
"Råd"
],
[
"p",
"Tabellens hastigheter ska inte förväxlas med tillåten/möjlig hastighet under befintliga konstruktioner."
]
]
},
"00398-7-1-5": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.1.5 Utvidgning i kurva",
"block": [
[
"h",
"7.1.5. Utvidgning i kurva"
],
[
"k",
"K30212"
],
[
"p",
"I kurva ska Normalsektion för fria rummet, Minsta sektion C och Minsta sektion A utvidgas för att normalfordon ska kunna framföras utan inskränkning på grund av dess utslag i kurvor."
],
[
"k",
"K30213"
],
[
"p",
"Breddmått över 50 mm över RÖK ska ökas enligt formlerna (7.2), (7.3) och (7.4), där utvidgning erhålls i meter."
],
[
"h",
"7.1.5.1. Normal utvidgning i horisontalkurva"
],
[
"k",
"K30215"
],
[
"p",
"Normalsektion för fria rummet ska utvidgas på innersida (Ui) respektive yttersida (Uy) med beräkning enligt formel (7.2), med undantag för fall som täcks av"
],
[
"li",
1,
"•",
"krav K30216"
],
[
"li",
1,
"•",
"krav K30218"
],
[
"figur",
"img/tdok/fig/00398-7-1-5-1.png",
""
],
[
"p",
"(7.2)"
],
[
"p",
"Där R är horisontalradie i meter och utvidgningen erhålls i meter."
],
[
"k",
"K30216"
],
[
"p",
"I utrymme för kontaktledningsutrustning, sektion K, ska utvidgning beräknas enligt formel (7.3)."
],
[
"figur",
"img/tdok/fig/00398-7-1-5-2.png",
""
],
[
"p",
"(7.3)"
],
[
"p",
"Där R är horisontalradie i meter och utvidgningen erhålls i meter."
],
[
"h",
"7.1.5.2. Utökad utvidgning i horisontalkurva"
],
[
"k",
"K30218"
],
[
"p",
"På spår som frekvent används för långa profilöverskridande laster, till exempel transformatorer, ska utvidgning på insida i kurva ökas enligt formel (7.4)."
],
[
"p",
"(7.4)"
],
[
"p",
"Där R är horisontalradie i meter och utvidgningen erhålls i meter."
],
[
"etikett",
"Råd"
],
[
"p",
"Spår där formel (7.4) ska användas, framgår av indelning kurvutvidgning 200/31 i BIS."
],
[
"etikett",
"Råd"
],
[
"p",
"För utökad utvidgning i horisontalkurva, se även avsnitt 9."
],
[
"k",
"K30221"
],
[
"p",
"För utvidgning på utsidan ska formel (7.2) (Uy) användas, se avsnitt 7.1.5.1."
],
[
"h",
"7.1.5.3. Modifierad sektion på sträckor med utökad utvidgning"
],
[
"k",
"K30223"
],
[
"p",
"Normalsektion för fria rummet, Minsta sektion C och Minsta sektion A:s nedre del ska modifieras enligt figur K7.6 för spår med utökad utvidgning (200/31) enligt indelning kurvutvidgning i BIS."
],
[
"figur",
"img/tdok/fig/00398-7-1-5-3.png",
"Figur K7.6 Modifierad sektion på sträckor med utökad kurvutvidgning [mm]."
],
[
"k",
"K30224"
],
[
"p",
"För spår med utökad utvidgning (200/31) enligt indelning kurvutvidgning i BIS, ska den modifierade sektionen enligt figur K7.6 vara uppfylld på"
],
[
"li",
1,
"•",
"linjen"
],
[
"li",
1,
"•",
"minst ett spår på varje driftplats."
],
[
"etikett",
"Råd"
],
[
"p",
"Spåret med utökad utvidgning bör vara det rakaste spåret genom driftplatsen."
],
[
"k",
"K30226"
],
[
"p",
"Till breddmått enligt figur K7.6 ska kurvutvidgning enligt formel (7.2) (Uy) och formel (7.4) (Ui) läggas."
],
[
"k",
"K30227"
],
[
"p",
"Vid ombyggnad av driftplats och linje på sträcka med utökad kurvutvidgning ska samråd alltid ske med den organisatoriska enhet som ansvarar för handläggning av specialtransporter."
],
[
"etikett",
"Råd"
],
[
"p",
"Samråd för att säkerställa framkomligheten med stor profilöverskridande last."
],
[
"h",
"7.1.5.4. Utspetsning av kurvutvidgning"
],
[
"k",
"K30230"
],
[
"p",
"I kurva med övergångskurva ska kurvutvidgning utspetsas på övergångskurvans längd."
],
[
"k",
"K30231"
],
[
"p",
"I kurva utan övergångskurva ska kurvutvidgning utspetsas rätlinjigt enligt figurerna K7.7–K7.10."
],
[
"figur",
"img/tdok/fig/00398-7-1-5-4.png",
"Figur K7.7 - K7.10 Måttsatta längder på utspetsning i meter. I K7.8 - K7.10 antas R1 vara större än R2. Notera att olika utspetsningslängder kan förekomma på insidan och utsidan av spåret."
],
[
"k",
"K30232"
],
[
"p",
"Utspetsningsmått enligt figur K7.9 ska gälla i det fall utvidgning på insidan i horisontalradie R1 är mindre än utvidgning på utsidan i horisontalradie R2."
],
[
"k",
"K30233"
],
[
"p",
"Utspetsningsmått enligt figur K7.10 ska gälla i det fall utvidgning på insidan i horisontalradie R1 är större än eller lika med utvidgning på utsidan i horisontalradie R2."
]
]
},
"00398-7-1-6": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.1.6 Tillägg för rälsförhöjning",
"block": [
[
"h",
"7.1.6. Tillägg för rälsförhöjning"
],
[
"k",
"K30235"
],
[
"p",
"I rälsförhöjning ska Normalsektion för fria rummet, Minsta sektion C och Minsta sektion A lutas enligt figur K7.11."
],
[
"figur",
"img/tdok/fig/00398-7-1-6-1.png",
"Figur K7.11 Tillägg för rälsförhöjning."
],
[
"k",
"K30236"
],
[
"p",
"Rotationscentrum ska vara innerrälens mitt och överkant."
],
[
"k",
"K30237"
],
[
"p",
"Avvikelserna a, C1 och C2 jämfört med sektion utan rälsförhöjning i figur K7.11 ska beräknas enligt formler (7.5)–(7.7)."
],
[
"figur",
"img/tdok/fig/00398-7-1-6-2.png",
""
],
[
"p",
"(7.5)"
],
[
"figur",
"img/tdok/fig/00398-7-1-6-3.png",
""
],
[
"p",
"(7.6)"
],
[
"figur",
"img/tdok/fig/00398-7-1-6-4.png",
""
],
[
"p",
"(7.7)"
],
[
"p",
"ha = anordnad rälsförhöjning och där alla mått uttrycks i mm."
],
[
"k",
"K30238"
],
[
"p",
"Princip för tillägg för rälsförhöjning ska tillämpas för samtliga sektioner som beskrivs i detta kravdokument."
]
]
},
"00398-7-1-7": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.1.7 Gräns för hinderfrihet",
"block": [
[
"h",
"7.1.7. Gräns för hinderfrihet"
],
[
"k",
"K30244"
],
[
"p",
"Vid nybyggnad eller ombyggnad ska hinderfrihetsgräns beräknas enligt figur K7.12."
],
[
"k",
"K30245"
],
[
"p",
"Hinderfrihetspunkt ska markeras med hinderpåle där hindersfrihetspunkt inte framgår av signal."
],
[
"etikett",
"Råd"
],
[
"p",
"Artikelnummer för hinderpåle är 6491300 hos Trafikverket Logistik."
],
[
"k",
"K242455"
],
[
"p",
"Grundmåttet S definieras som summan av horisontellt vinkelrätt avstånd från varje spårmitt till en punkt mitt mellan spår, se figur K7.12(a)."
],
[
"k",
"K30247"
],
[
"p",
"Beräkning av hinderfrihetspunkt ska ske enligt figur K7.12."
],
[
"figur",
"img/tdok/fig/00398-7-1-7-1.png",
"Figur K7.12 Beräkning av hinderfrihetspunkt."
],
[
"p",
"S = grundmått enligt nedan"
],
[
"p",
"Uy,Ui = utvidgning, se avsnitt 7.1.5.1 Normal utvidgning enligt formel (7.2) ska användas här."
],
[
"p",
"h = rälsförhöjning"
],
[
"p",
"h₁= rälsförhöjning i kurva R1"
],
[
"p",
"h₂= rälsförhöjning i kurva R2"
],
[
"p",
"1)Uttrycket ₃,₂(h₁-h₂) används endast närh₁>h₂"
],
[
"k",
"K267745"
],
[
"p",
"Ifall hinderfrihetspunkten ligger i närheten av en tangeringspunkt, se avstånd i krav K30231, ska spårelementet med störst kurvutvidgningstillägg användas vid beräkning av placering av hinderfrihetspunkt. Alternativt får hinderfrihetsgräns beräknas med utspetsning enligt krav K30231."
],
[
"k",
"K30248"
],
[
"p",
"Grundmått för hinderfrihetspunkt (S) ska vara 4100 mm. Undantag gäller mellan sidospår, där grundmåttet tillåts gå ner till 3900 mm, och mellan riktningsspår på rangerbangård, där grundmåttet tillåts gå ner till 3700 mm."
],
[
"etikett",
"Råd"
],
[
"p",
"Mellan sidospår rekommenderas att grundmåttet (S) sätts till 4100 mm."
],
[
"k",
"K267747"
],
[
"p",
"När hinderfrihetspunkt beräknas vid övergångskurva ska ett utspetsat värde av kurvutvidgningstillägget användas enligt krav K30230. Alternativt får det största kurvutvidgningstillägget längs övergångskurvans längd användas."
]
]
},
"00398-7-2-1": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.1 Lastkaj",
"block": [
[
"h",
"7.2. Särskild regel för objekt invid spår"
],
[
"h",
"7.2.1. Lastkaj"
],
[
"k",
"K30251"
],
[
"p",
"Lastkaj ska tillåtas inkräkta på Normalsektion för fria rummet."
],
[
"etikett",
"Råd"
],
[
"p",
"Lastkaj får inkräkta på fria rummet eftersom vagnar bör stå så nära lastkaj som möjligt för att förebygga olycksfall vid lastning och lossning av gods."
],
[
"etikett",
"Råd"
],
[
"p",
"Normal lastkajshöjd är 1,18 m över RÖK."
],
[
"k",
"K30254"
],
[
"p",
"Lastkaj ska utformas så att gods kan placeras minst 2,6 m från spårmitt."
],
[
"k",
"K30255"
],
[
"p",
"Lastkaj vid sidospår ska placeras med ett avstånd från spårmitt på 1,70 m + kurvtillägg enligt avsnitt 7.1.5."
],
[
"k",
"K30256"
],
[
"p",
"Lastkaj får inte placeras intill huvudspår."
],
[
"k",
"K30257"
],
[
"p",
"Lastkaj får inte placeras vid spår med rälsförhöjning."
],
[
"k",
"K30258"
],
[
"p",
"Skyddsutrymme ska finnas under minst en lastkaj om det finns lastkajer på båda sidor av ett spår."
],
[
"k",
"K30259"
],
[
"p",
"Skyddsutrymme under lastkaj ska vara minst 50 cm djupt med en höjd och längd som möjliggör personal med mindre handhållna redskap att rymmas i skyddsutrymmet."
],
[
"k",
"K30260"
],
[
"p",
"Lastkaj som ligger vid sidan av spåret och är högre än 1,18 m över RÖK ska betecknas som hög lastkaj."
],
[
"etikett",
"Råd"
],
[
"p",
"Hög lastkaj är avsedd för att kunna tippa gods från bil till järnvägsvagn, där aktuell höjd för lastkaj bestäms från fall till fall. En vanlig höjd som är anpassad för O-vagnar är 1,95 m över RÖK."
],
[
"k",
"K30262"
],
[
"p",
"Hög lastkaj ska placeras minst 1,75 m från spårmitt."
],
[
"k",
"K30263"
],
[
"p",
"Hög lastkaj får endast anordnas på rakspår."
],
[
"k",
"K30264"
],
[
"p",
"Hög lastkaj får endast anordnas högst 50 m från ändpunkten på lastspåret."
],
[
"k",
"K30265"
],
[
"p",
"Vid lastkaj ska särskild skyddsföreskrift upprättas där förbud för personal att åka utanpå fordon är angivet."
],
[
"k",
"K30266"
],
[
"p",
"Vid lastkaj ska det på väl synlig plats finnas varningstavlor med texten \"Varning klämrisk\", enligt avsnitt 10."
],
[
"etikett",
"Råd"
],
[
"p",
"Tavla för varning klämrisk bör normalt placeras på halva lastkajshöjden."
],
[
"k",
"K30400"
],
[
"p",
"Lastkajens ände ska målas eller tejpas med gulsvart varningsmarkering."
]
]
},
"00398-7-2-2": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.2 Plattform",
"block": [
[
"h",
"7.2.2. Plattform"
],
[
"k",
"K30293"
],
[
"p",
"Plattformskants läge vid byggande av ny plattform ska placeras utifrån projekterad spårlinje i plan."
],
[
"k",
"K30294"
],
[
"p",
"Plattformskants läge vid byggande av ny plattform ska placeras utifrån projekterad spårlinje i profil."
],
[
"k",
"K30295"
],
[
"p",
"Vid nybyggnation eller ombyggnation av plattform ska alltid god framkomlighet för specialtransporter tillgodoses enligt punkt a. eller b. nedan:"
],
[
"li",
1,
"1.",
"Minst en LÖ-väg fri från plattform på varje station."
],
[
"li",
1,
"2.",
"När inte en LÖ-väg fri från plattform är möjlig att uppfylla ska snarast samråd ske med den organisatoriska enhet som ansvarar för handläggning av specialtransporter."
],
[
"k",
"K30296"
],
[
"p",
"Då plattform anläggs intill huvudspår på linjen ska den organisatoriska enhet som initierar utformningen samråda i ett tidigt skede med den organisatoriska enhet som ansvarar för handläggning av specialtransporter."
],
[
"k",
"K30297"
],
[
"p",
"Vid nybyggnad ska endast någon av följande plattformstyper anläggas:"
],
[
"li",
1,
"a.",
"mellanhög"
],
[
"li",
1,
"b.",
"hög."
],
[
"etikett",
"Råd"
],
[
"p",
"För placering av plattform ska, förutom krav enligt avsnitt 7.2.3, även kraven i ”TDOK 2014:0416 Elkraftanläggning – Jordning – BVS 510: Jordning och skärmning i Trafikverkets järnvägsanläggningar” gälla."
],
[
"h",
"7.2.2.1. Avstånd från spårmitt"
],
[
"k",
"K30299"
],
[
"p",
"På rakspår ska plattform uppfylla tabell K7.2 och figur K7.13."
],
[
"p",
"Tabell K7.2 Placering av plattform, avstånd från spårmitt."
],
[
"tabell",
[
[
[
"Plattformstyp",
1
],
[
"Avstånd B\n(mm)",
1
],
[
"Byggtoleranser ¹⁾\n(mm)",
1
],
[
"Underhållstoleranser ²⁾\n(mm)",
1
]
],
[
[
"Låg",
1
],
[
"1550",
1
],
[
"",
1
],
[
"+30/-10",
1
]
],
[
[
"Mellanhög",
1
],
[
"1700",
1
],
[
"±10",
1
],
[
"±25",
1
]
],
[
[
"Hög",
1
],
[
"1700",
1
],
[
"±10",
1
],
[
"±25",
1
]
]
]
],
[
"p",
"1) Byggtoleranser beskriver plattformskantens tillåtna avvikelse från projekterat läge med utgångspunkt från projekterat läge för spår och gäller vid nybyggnation och ombyggnation av plattform."
],
[
"p",
"2) Underhållstoleranser beskriver tillåtna avvikelser från B-måttet för det faktiska avståndet mellan spårmitt och plattformskant. Underhållstoleranserna ska vara uppfyllda efter alla typer av arbeten som påverkar B-måttet."
],
[
"figur",
"img/tdok/fig/00398-7-2-2-1.png",
"Figur K7.13 Placering av plattform. För information om hur plattformskantens avfasning ska beaktas när B- och H-måtten definieras, se Bilaga 1 i TDOK 2019:0215 Kodning av geografiska objekt – Järnväg."
],
[
"k",
"K260407"
],
[
"p",
"Avstånd till plattform i kurva ska uppfylla toleranser givna i tabell K7.2 med avstånd B beräknat enligt krav K30301."
],
[
"k",
"K30301"
],
[
"p",
"Vid placering av plattform i kurva ska avstånd B, se figur K7.14, beräknas enligt tabell K7.2, med tillägg för kurvradie och anordnad rälsförhöjning enligt tabell K7.3."
],
[
"p",
"Tabell K7.3 Placering av plattform, beräkning av avstånd från spårmitt i kurva."
],
[
"tabell",
[
[
[
"Plattformstyp",
1,
2
],
[
"Ökning av avståndet B pga.\nkurvradie (R i meter)",
2
],
[
"Ökning av avståndet B pga.\nrälsförhöjning (ha)",
2
]
],
[
[
"Utsida (mm)",
1
],
[
"Insida (mm)",
1
],
[
"Utsida (mm)",
1
],
[
"Insida (mm)",
1
]
],
[
[
"Låg",
1
],
[
"31000/R",
1
],
[
"41000/R",
1
],
[
"-ha/4 ¹⁾",
1
],
[
"+ha/4",
1
]
],
[
[
"Mellanhög",
1
],
[
"31000/R",
1
],
[
"41000/R",
1
],
[
"-ha/4 ¹⁾",
1
],
[
"+ha/3",
1
]
],
[
[
"Hög",
1
],
[
"31000/R",
1
],
[
"41000/R",
1
],
[
"-ha/4 ¹⁾",
1
],
[
"+ha/2",
1
]
]
]
],
[
"p",
"1) Avstånd till plattform i utsida av kurva minskas på grund av rälsförhöjning."
],
[
"figur",
"img/tdok/fig/00398-7-2-2-2.png",
"Figur K7.14 Placering av plattform relaterat till beräkning av avstånd från spårmitt i kurva."
],
[
"k",
"K30302"
],
[
"p",
"Där växel ansluter till plattformsspår ska måttet B enligt tabell K7.2 ökas beroende på den radie växeln har i tunganordningen, se figur K7.15."
],
[
"figur",
"img/tdok/fig/00398-7-2-2-3.png",
"Figur K7.15 Placering av plattform relaterat till avstånd från spårmitt vid växel."
],
[
"p",
"1) Kurvtillägg enligt 31000/R, där R är kurvradie i växels tunganordning."
],
[
"h",
"7.2.2.2. Höjd på plattform"
],
[
"k",
"K30304"
],
[
"p",
"På rakspår ska plattform uppfylla tabell K7.4 samt figur K7.13 med undantag för:"
],
[
"li",
1,
"•",
"ombyggnation av mellanhög och hög plattform på rakspår, som inte är lämplig att anpassas till normalhöjd enligt tabell K7.4, där plattformshöjd och toleranser i tabell K7.5 ska följas."
],
[
"li",
1,
"•",
"ombyggnation av låg plattform på rakspår där plattformshöjd och toleranser i tabell K7.6 ska följas."
],
[
"p",
"Tabell K7.4 Tolerans för höjd på plattform byggd med mått enligt Höjd H."
],
[
"tabell",
[
[
[
"Plattformstyp",
1
],
[
"Höjd H (mm)",
1
],
[
"Byggtoleranser ¹⁾ (mm)",
1
],
[
"Underhållstoleranser ²⁾ (mm)",
1
]
],
[
[
"Mellanhög",
1
],
[
"550",
1
],
[
"±10",
1
],
[
"+20/-25",
1
]
],
[
[
"Hög",
1
],
[
"760",
1
],
[
"±10",
1
],
[
"+10/-25",
1
]
]
]
],
[
"p",
"1) Byggtoleranser beskriver plattformshöjdens tillåtna avvikelse från projekterat läge med utgångspunkt från projekterat läge för spår och gäller vid nybyggnation och ombyggnation av plattform."
],
[
"p",
"2) Underhållstoleranser beskriver tillåtna avvikelser från H-måttet för den faktiska plattformshöjden relativt RÖK. Underhållstoleranserna ska vara uppfyllda efter alla typer av arbeten som påverkar H-måttet."
],
[
"p",
"Tabell K7.5 Tolerans för ombyggnad av mellanhög och hög plattform byggd med mått enligt Höjd H."
],
[
"tabell",
[
[
[
"Plattformstyp",
1
],
[
"Höjd H (mm)",
1
],
[
"Byggtoleranser ¹⁾ (mm)",
1
],
[
"Underhållstoleranser ²⁾(mm)",
1
]
],
[
[
"Mellanhög",
1
],
[
"580",
1
],
[
"±10",
1
],
[
"+20/-35",
1
]
],
[
[
"Hög",
1
],
[
"730",
1
],
[
"±10",
1
],
[
"+20/-35",
1
]
]
]
],
[
"p",
"1) Byggtoleranser beskriver plattformshöjdens tillåtna avvikelse från projekterat läge med utgångspunkt från projekterat läge för spår och gäller vid nybyggnation och ombyggnation av plattform."
],
[
"p",
"2) Underhållstoleranser beskriver tillåtna avvikelser från H-måttet för den faktiska plattformshöjden relativt RÖK. Underhållstoleranserna ska vara uppfyllda efter alla typer av arbeten som påverkar H-måttet."
],
[
"p",
"Tabell K7.6 Tolerans för ombyggnad av låg plattform byggd med mått enligt Höjd H."
],
[
"tabell",
[
[
[
"Plattformstyp",
1
],
[
"Höjd H (mm)",
1
],
[
"Underhållstoleranser ¹⁾(mm)",
1
]
],
[
[
"Låg",
1
],
[
"350",
1
],
[
"+10/-35",
1
]
]
]
],
[
"p",
"1) Underhållstoleranser beskriver tillåtna avvikelser från H-måttet för den faktiska plattformshöjden relativt RÖK. Underhållstoleranserna ska vara uppfyllda efter alla typer av arbeten som påverkar H-måttet."
],
[
"k",
"K30306"
],
[
"p",
"För plattform placerad på utsida av kurva ska plattformshöjd beräknas enligt formel (7.13) och med toleranser enligt krav K30304."
],
[
"figur",
"img/tdok/fig/00398-7-2-2-4.png",
""
],
[
"p",
"(7.13)"
],
[
"p",
"där"
],
[
"p",
"H =normal plattformshöjd (mm) enligt tabell K7.4, K7.5 eller K7.6"
],
[
"p",
"Hu= plattformshöjd (mm) på utsida av kurva enligt figur K7.14"
],
[
"p",
"ha = anordnad rälsförhöjning (mm)"
],
[
"p",
"bu =1575 + tillägg för kurvradie och rälsförhöjning (mm) enligt tabell K7.3."
],
[
"k",
"K30307"
],
[
"p",
"För plattform placerad på insida av kurva ska plattformshöjden beräknas enligt formel (7.14) och med toleranser enligt krav K30304."
],
[
"figur",
"img/tdok/fig/00398-7-2-2-5.png",
""
],
[
"p",
"(7.14)"
],
[
"p",
"där"
],
[
"p",
"H = normal plattformshöjd (mm) enligt tabell K7.4, K7.5 eller K7.6"
],
[
"p",
"Hi = plattformshöjd (mm) på insida av kurva enligt figur K7.14"
],
[
"p",
"ha = anordnad rälsförhöjning (mm)"
],
[
"p",
"bi =1575 + tillägg för kurvradie och rälsförhöjning (mm) enligt tabell K7.3."
],
[
"h",
"7.2.2.3. Utformning av utrymningsväg vid mellanhög och hög plattform"
],
[
"k",
"K30309"
],
[
"p",
"Mellanhög och hög plattform ska förses med trappsteg om utrymningsväg från spårområde saknas på motsatt sida om spår."
],
[
"k",
"K30310"
],
[
"p",
"Trappsteg på plattformskant ska:"
],
[
"li",
1,
"•",
"på hög plattform sitta 30–35 cm över RÖK och på mellanhög plattform sitta 15– 20 cm över RÖK."
],
[
"li",
1,
"•",
"maximalt sticka ut 15 cm relativt plattformskant."
],
[
"li",
1,
"•",
"placeras med 20–30 m mellanrum utefter plattform."
],
[
"li",
1,
"•",
"markeras med gul målning ovanpå plattform."
],
[
"h",
"7.2.2.4. Plattformstak"
],
[
"k",
"K30312"
],
[
"p",
"Plattformstak ska placeras utanför Normalsektion för fria rummet, där det i kurva ska finnas tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och 7.1.6."
],
[
"etikett",
"Råd"
],
[
"p",
"Plattformstak bör även placeras utanför U-sektionen."
],
[
"k",
"K30314"
],
[
"p",
"Vid kontaktledning över spår ska horisontellt avstånd från spårmitt till plattformstak vara minst 2,0 m, till detta avstånd ska tillägg för rälsförhöjning finnas, se avsnitt 7.1.6."
],
[
"k",
"K30315"
],
[
"p",
"Vid avstånd mellan plattformstak och spänningsförande ledning på mindre än 3,0 m ska särskild elsäkerhetsåtgärd vidtas enligt TRVINFRA-00140 Elkraftanläggning Högspänning Tillämpning av starkströmsföreskrifterna vid utformning av Trafikverkets järnvägsanläggningar."
]
]
},
"00398-7-2-3": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.3 Rangerbroms",
"block": [
[
"h",
"7.2.3. Rangerbroms"
],
[
"k",
"K30317"
],
[
"p",
"Rangerbroms ska i viloläge (nedfällt läge) gå upp till max 55 mm över RÖK."
],
[
"k",
"K30318"
],
[
"p",
"Rangerbroms ska i arbetsläge (uppfällt läge) gå upp till max 120 mm över RÖK."
]
]
},
"00398-7-2-4": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.4 Tavla, skylt, dvärgsignal och växelklot",
"block": [
[
"h",
"7.2.4. Tavla, skylt, dvärgsignal och växelklot"
],
[
"k",
"K30320"
],
[
"p",
"Tavla och signal ska placeras utanför sektion N och K."
],
[
"etikett",
"Råd"
],
[
"p",
"Tavla, skylt och signal bör placeras utanför U-sektionen om det är möjligt."
],
[
"etikett",
"Råd"
],
[
"p",
"Vid placering av tavla, skylt och signal på kontaktledningsstolpe beaktas även att tillräckligt skydd till spänningsförande anläggningsdel erhålls, se TDOK 2015:0223 Elsäkerhetsföreskrifter för arbete på eller nära järnvägsanknutna högspännings- och tågvärmeanläggningar."
],
[
"k",
"K30323"
],
[
"p",
"Vid val av placering av tavla och signal ska hänsyn tas till snöröjningsmaskin enligt figur K7.4 i avsnitt 7.1.3."
],
[
"k",
"K30324"
],
[
"p",
"Där tavla, skylt och signal måste placeras mellan två spår, där fritt utrymme enligt avsnitt 7.1.1 och avsnitt 7.1.2 saknas, ska det tillåtas att anordning sätts upp i det streckade området i figur K7.1 och enligt figur K7.16."
],
[
"k",
"K30325"
],
[
"p",
"Där tavla, skylt och signal är placerad, enligt figur K7.16, ska det i kurva finnas tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6."
],
[
"figur",
"img/tdok/fig/00398-7-2-4-1.png",
"Figur K7.16 Placering tavla, skylt och signal mellan spår [mm]."
],
[
"k",
"K30326"
],
[
"p",
"Växelklot ska placeras på minsta avstånd från spårmitt på 1,95 m + kurvtillägg."
]
]
},
"00398-7-2-5": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.5 Spärrstaket",
"block": [
[
"h",
"7.2.5. Spärrstaket"
],
[
"k",
"K30328"
],
[
"p",
"När spärrstaket anordnad vid nybyggnation av bana, plattform eller ett nytt spår vid ett befintligt spår ska de hastighetsberoende avstånden enligt figur K7.17 uppfyllas med tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6."
],
[
"figur",
"img/tdok/fig/00398-7-2-5-1.png",
"Figur K7.17 Placering av spärrstaket mellan spår [mm]."
],
[
"k",
"K217562"
],
[
"p",
"Om spärrstaket med en höjd ≥1150 mm krävs ska avstånd till spärrstaket vara >2600 mm."
],
[
"etikett",
"Råd"
],
[
"p",
"Spärrstaket placeras där det är möjligt enligt reglerna för långa objekt, se avsnitt 7.1.1."
],
[
"k",
"K258464"
],
[
"p",
"Vid placering av spärrstaket i befintlig anläggning ska spärrstaket mellan spår:"
],
[
"li",
1,
"•",
"i första hand placeras så att avstånd mellan spårmitt och spärrstaket uppfyller de hastighetsberoende regler enligt figur K7.17 med tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6"
],
[
"li",
1,
"•",
"i andra hand, där det inte är ekonomiskt rimligt att uppnå avstånden i Figur K7.17, tillåts spärrstaket placeras enligt Figur K7.18 med tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6 under villkoret att spärrstaketet inte blir ett hinder för befintliga transformatortransporter på sträckan."
],
[
"figur",
"img/tdok/fig/00398-7-2-5-2.png",
"Figur K7.18 Tillåten placering av spärrstaket mellan spår i befintlig anläggning där avstånden i figur K7.17 inte är ekonomiskt rimliga att uppnå [mm]."
],
[
"etikett",
"Råd"
],
[
"p",
"För information gällande transformatortransporter, kontakta den organisatoriska enhet som ansvarar för handläggning av specialtransporter."
]
]
},
"00398-7-2-6": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.6 Portsektion",
"block": [
[
"h",
"7.2.6. Portsektion"
],
[
"k",
"K30331"
],
[
"p",
"Vid ny- och ombyggnad av godsmagasin, lokstall, vagnhall, verkstad eller liknande ska portsektion enligt figur K7.19 tillämpas."
],
[
"figur",
"img/tdok/fig/00398-7-2-6-1.png",
"Figur K7.19 Portsektioner [mm]."
],
[
"k",
"K30332"
],
[
"p",
"Sektion P1 i figur K7.19 ska tillämpas vid spår som är eller beräknas bli elektrifierad."
],
[
"k",
"K30333"
],
[
"p",
"Sektion P2 i figur K7.19 ska tillämpas vid spår som inte beräknas bli elektrifierad."
],
[
"k",
"K30334"
],
[
"p",
"Nedre begränsningslinje och utrymmet runt rälerna i figur K7.19 ska regleras enligt avsnitt 7.1.3."
],
[
"k",
"K30335"
],
[
"p",
"Vid portsektion, enligt figur K7.19, ska det i kurva finnas tillägg för kurvutvidgning enligt avsnitt 7.1.5."
]
]
},
"00398-7-2-7": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.7 Skyddsnisch",
"block": [
[
"h",
"7.2.7. Skyddsnisch"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"I befintlig anläggning där sektion för långa objekt inte kan utföras på grund av höga kostnader finns det en möjlighet att istället använda sektion för medellånga objekt om denna sektion är kompletterad med skyddsnisch."
],
[
"k",
"K30340"
],
[
"p",
"Avståndet mellan skyddsnischer ska vara maximalt 15 m."
],
[
"etikett",
"Råd"
],
[
"p",
"Skyddsnischens läge vid t.ex. bergskärning bör märkas ut."
],
[
"k",
"K30342"
],
[
"p",
"Vid dubbelspår, eller fler spår, ska avstånd mellan skyddsnischer på samma sida inte överstiga 15 m."
],
[
"etikett",
"Råd"
],
[
"p",
"Vid enkelspår tillåts skyddsnischer att placeras i sicksack eller endast på ena sidan."
],
[
"etikett",
"Råd"
],
[
"p",
"Då långa objekt endast sätts upp på ena sidan av ett enkelspår, och när objekt på andra sidan sätts upp utanför Normalsektion för fria rummet, krävs inte skyddsnischer."
],
[
"k",
"K30343"
],
[
"p",
"Skyddsnischens innerkant ska placeras minst 3,5 m från spårmitt."
],
[
"k",
"K30344"
],
[
"p",
"Skyddsnisch ska vara minst 3 m bred."
],
[
"k",
"K30345"
],
[
"p",
"Skyddsnisch ska vara minst 2,5 m hög."
],
[
"k",
"K30346"
],
[
"p",
"Skyddsnisch ska förses med handledare för fasthållning."
]
]
},
"00398-7-2-8": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.8 Järnväg under bro",
"block": [
[
"h",
"7.2.8. Järnväg under bro"
],
[
"k",
"K30351"
],
[
"p",
"Konstruktionsdel med en utsträckning längs spåret ≤15 m, t.ex. pelare, ska efterleva krav för medellånga objekt enligt avsnitt 7.1 med tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6."
],
[
"k",
"K33880"
],
[
"p",
"Konstruktionsdel parallellt med spår med en utsträckning längs spåret på mer än 15 m, t.ex. brostöd, ska efterleva krav för långa objekt enligt avsnitt 7.1 med tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6. Undantag medges för befintliga brokonstruktioner där sektion för långa objekt inte kan uppfyllas på grund av höga kostnader. I dessa situationer är det tillåtet att sektion för medellånga objekt nyttjas om denna sektion är kompletterad med skyddsnisch enligt avsnitt 7.2.7."
],
[
"etikett",
"Råd"
],
[
"p",
"Fria höjden under broar ges i tabell K7.1, se avsnitt 7.1.4. Ytterligare information finns i TRVINFRA-00227 Bro och broliknande konstruktion Byggande."
],
[
"etikett",
"Råd"
],
[
"p",
"För långt objekt i det fall då landfästet (mellanstödet) bildar en vinkel > 5° med spåret, kan grundavstånd 3,0 m tillämpas."
]
]
},
"00398-7-2-9": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.9 Järnväg på bro",
"block": [
[
"h",
"7.2.9. Järnväg på bro"
],
[
"k",
"K30354"
],
[
"p",
"Vid nybyggnation av järnvägsbro ska brokonstruktion:"
],
[
"li",
1,
"•",
"i första hand placeras utanför Normalsektion för fria rummet, och dess streckade område, enligt avsnitt 7.1 med tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6,"
],
[
"li",
1,
"•",
"i andra hand placeras högst 350 mm över RÖK och minst 2100 mm från spårmitt med tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6."
],
[
"etikett",
"Råd"
],
[
"p",
"Det är eftersträvansvärt att inte någon del av broöverbyggnaden placeras inom Normalsektion för fria rummet eller dess streckade område med tanke på möjlighet till utrymning, underhåll och snöröjning."
],
[
"k",
"K30356"
],
[
"p",
"Vid ombyggnation av befintliga järnvägsbroar och spår på befintliga järnvägsbroar ska brokonstruktion placeras enligt punktlistan nedan, med tillägg för kurvutvidgning och rälsförhöjning enligt avsnitt 7.1.5 och avsnitt 7.1.6:"
],
[
"li",
1,
"•",
"Högst 350 mm över RÖK."
],
[
"li",
1,
"•",
"Minst 2100 mm från spårmitt."
]
]
},
"00398-7-2-10": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.10 Byggnad",
"block": [
[
"h",
"7.2.10. Byggnad"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Det horisontella minimiavståndet mellan spårmitt och byggnad är vid elektrifierad järnväg beroende av elsäkerhetsavståndet. Krav avseende det horisontella elsäkerhetsavståndet framgår av TRVINFRA-00140 Elkraftanläggning Högspänning Tillämpning av starkströms-föreskrifterna vid utformning av Trafikverkets järnvägsanläggningar."
],
[
"k",
"K30358"
],
[
"p",
"Driftsbyggnad vid bana ska uppfylla regler för långt objekt."
],
[
"etikett",
"Råd"
],
[
"p",
"Exempel på driftsplatsbyggnad är ställverk, signalställverk, kopplingsutrustning, hisshus, trapphus, skötselhall, våghus, rastkur m.fl."
],
[
"k",
"K30361"
],
[
"p",
"Byggnad på plattform ska placeras enligt TRVINFRA-00400 Ban- och stationsutformning Stationsutformning."
]
]
},
"00398-7-2-11": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.11 Upplag",
"block": [
[
"h",
"7.2.11. Upplag"
],
[
"k",
"K30363"
],
[
"p",
"Elektrifierad bana ska uppfylla krav enligt TDOK 2016:0289 Säkerhet vid aktiviteter i spårområdet."
],
[
"k",
"K30364"
],
[
"p",
"För upplag invid bana som inte är elektrifierad ska Normalsektion för fria rummet gälla, se avsnitt 7.1.1."
]
]
},
"00398-7-2-12": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.2.12 Rälsmörjsutrustning",
"block": [
[
"h",
"7.2.12. Rälsmörjsutrustning"
],
[
"k",
"K30368"
],
[
"p",
"Rälsmörjning med hjälp av smörjskena ska tillåtas utnyttja det kilformade markerade området intill farkant räl enligt figur K7.20."
],
[
"figur",
"img/tdok/fig/00398-7-2-12-1.png",
"Figur K7.20 Utrymme för placering av rälsmörjsutrustning [mm]."
]
]
},
"00398-7-3": {
"dok": "TRVINFRA-00398 Banutformning",
"rubrik": "7.3 Fritt utrymme mellan väg och järnväg",
"block": [
[
"h",
"7.3. Fritt utrymme mellan väg och järnväg"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Det horisontella minimiavståndet mellan spårmitt och vägkant eller parkering är vid elektrifierad järnväg beroende av elsäkerhetsavståndet mot sidobelägen verksamhet. Krav avseende det horisontella elsäkerhetsavståndet framgår av TRVINFRA-00140 Elkraftanläggning Högspänning Tillämpning av starkströms-föreskrifterna vid utformning av Trafikverkets järnvägsanläggningar."
],
[
"k",
"K30370"
],
[
"p",
"Avstånd mellan väg-, cykel-, gångbana och järnväg ska dimensioneras utifrån följande faktorer:"
],
[
"li",
1,
"•",
"fritt utrymme utmed banan"
],
[
"li",
1,
"•",
"starkströmsföreskrifterna"
],
[
"li",
1,
"•",
"avkörning/urspårning"
],
[
"li",
1,
"•",
"snöröjningsutrymme"
],
[
"li",
1,
"•",
"risk för lossande is från tåg"
],
[
"li",
1,
"•",
"höjdskillnad mellan väg och järnväg"
],
[
"li",
1,
"•",
"hastighet på väg och järnväg."
],
[
"k",
"K30378"
],
[
"p",
"Måttet ska ange horisontellt avstånd från spårmitt till närmaste vägkant, där vägkant avser normal körbanekant, och där väg med asfalterad vägren eller parkering alternativt bussficka avser asfaltskant."
],
[
"k",
"K30380"
],
[
"p",
"Där väg ligger på en högre nivå än järnväg och skyddsanordning saknas, ska avstånd i tabell K7.7 ökas med 1,5 ggr nivåskillnad."
],
[
"k",
"K30381"
],
[
"p",
"Vid ny- och ombyggnation av väg eller järnväg ska minsta mått mellan spårmitt och vägkant uppfylla avstånd givna i tabell K7.7."
],
[
"p",
"Tabell K7.7 Hastighetsberoende avstånd mellan spårmitt och vägkant i meter."
],
[
"tabell",
[
[
[
"Hastighet på\njärnvägen, STH",
1,
2
],
[
"Hastighet på vägen³⁾, km/h",
4
]
],
[
[
"10–60 ¹⁾",
1
],
[
"70–80",
1
],
[
"90–100",
1
],
[
"110–120",
1
]
],
[
[
"<50",
1
],
[
"4²⁾",
1
],
[
"10",
1
],
[
"15",
1
],
[
"20",
1
]
],
[
[
"50–100",
1
],
[
"7 ²⁾",
1
],
[
"15",
1
],
[
"20",
1
],
[
"25",
1
]
],
[
[
">100",
1
],
[
"10",
1
],
[
"15",
1
],
[
"20",
1
],
[
"25",
1
]
]
]
],
[
"p",
"1) Denna hastighetskolumn används även för gång- och cykelvägar samt servicevägar."
],
[
"p",
"2) Större mått kan krävas på grund av elsäkerhetsavstånd enligtTRVINFRA-₀₀₁₄₀ Allmänt Tillämpning av starkströmsföreskrifterna vid utformning av Trafikverkets järnvägsanläggningar."
],
[
"p",
"3)Ifall det inte finns någon beslutad hastighet på vägen ska den hastighet som vägen är utformad för väljas."
],
[
"etikett",
"Råd"
],
[
"p",
"Kravet gäller både elektrifierad och oelektrifierad järnväg."
],
[
"etikett",
"Råd"
],
[
"p",
"Om skyddsåtgärd anordnas kan i vissa fall ett lägre avstånd vara motiverat. Detta hanteras från fall till fall som dispensärenden. Dispensansökan ska innehålla en värdering av avstånd och skydd utifrån de påverkande faktorerna presenterade i krav K30370."
],
[
"etikett",
"Råd"
],
[
"p",
"Exempel på skyddsåtgärder som kan minska risker relaterat till korta avstånd mellan väg och järnväg är"
],
[
"li",
1,
"•",
"stängsel"
],
[
"li",
1,
"•",
"vägräcke"
],
[
"li",
1,
"•",
"skyddsmur"
],
[
"li",
1,
"•",
"skyddsvall"
],
[
"li",
1,
"•",
"järnväg betydligt högre än väg (>2 m)."
]
]
},
"00014-7": {
"dok": "TRVINFRA-00014 Banöverbyggnad Stabilitetspåverkande arbete",
"rubrik": "7 Kategoriindelning stabilitetspåverkande arbete",
"block": [
[
"h",
"7 Kategoriindelning stabilitetspåverkande arbete"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Beroende på hur mycket ett stabilitetspåverkande arbete påverkar spårstabiliteten, främst spårets motstånd mot sidoförskjutning, så indelas arbetena i tre kategorier, enligt avsnitt 7.1 till 7.3. Vilken kategori av arbete som utförs är avgörande för maxiamalt tillåten hastighet som tillåts efter stabilitetspåverkande arbete. Även om arbeten i kategori 3 inte medför krav på hastighetsnedsättning enligt kap 11 gäller krav enligt avsnitt 9.6 Erforderlig stabilisering mellan arbeten och kapitel 10 Åtgärder innan trafikering."
],
[
"k",
"K38689"
],
[
"p",
"Beställaren ska kontaktas när osäkerhet råder beträffande vilken kategori ett arbete tillhör."
],
[
"h",
"7.1. Kategori 1 – medför stor nedsättning av spårstabilitet"
],
[
"k",
"K38691"
],
[
"p",
"Följande arbeten ska klassificeras som kategori 1:"
],
[
"li",
1,
"1.",
"Nybyggnation av spår."
],
[
"li",
1,
"2.",
"Ingrepp i bankropp eller intill bana som medför stor nedsättning av spårstabilitet."
],
[
"li",
1,
"3.",
"Spårbyte."
],
[
"li",
1,
"4.",
"Utbyte av spårväxel."
],
[
"li",
1,
"5.",
"Ballastrening."
],
[
"li",
1,
"6.",
"Spårriktning och spårväxelriktning med bax mer än 30 mm eller med lyft mer än 50 mm (inklusive grundlyft) eller där rälsförhöjning (ha) ändras med mer än 30 mm."
],
[
"li",
1,
"7.",
"Utbyte eller reglering av sliprar som inte uppfyller villkor enligt kategori 3 eller kategori 2. Undantag finns för DEF-sliprar enligt K38692 nedan."
],
[
"li",
1,
"8.",
"Schakt för längsgående kanalisation, schakt för skarvgropar och kabelplöjning som inte uppfyller villkor enligt kategori 3 eller kategori 2."
],
[
"li",
1,
"9.",
"Schakt för tvärkanalisation som inte uppfyller villkor enligt kategori 2."
],
[
"li",
1,
"10.",
"Schakt för kontaktledningsfundament som inte uppfyller villkor enligt kategori 2."
],
[
"etikett",
"Råd"
],
[
"p",
"Exempel på ingrepp i bankropp utöver beskrivna arbeten som kan medföra stor nedsättning av spårstabilitet är rörtryckning, borrning eller annan typ av schakt. I de fallen behöver klassificering göras med en plats- och projektspecifik geoteknisk bedömning som grund."
],
[
"k",
"K38692"
],
[
"p",
"DEF-sliperbyte ska klassificeras som kategori 1 där något av villkor a eller b uppfylls:"
],
[
"li",
1,
"a.",
"Utbyte av 8 eller fler sliprar i följd."
],
[
"li",
1,
"b.",
"Schaktning djupare än 50 mm under sliper underkant."
],
[
"h",
"7.2. Kategori 2 – medför mindre nedsättning av spårstabilitet"
],
[
"k",
"K38694"
],
[
"p",
"Följande arbeten ska klassificeras som kategori 2:"
],
[
"li",
1,
"1.",
"Ingrepp i bankropp eller intill bana som medför mindre nedsättning av spårstabilitet."
],
[
"li",
1,
"2.",
"Spårriktning och spårväxelriktning som inte ingår i kategori 1."
],
[
"li",
1,
"3.",
"Utbyte eller reglering av 3–5 st sliprar i följd med minst 20 st orörda sliprar mellan sliprar som byts eller regleras. Undantag finns för DEF-sliprar enligt K38695 nedan."
],
[
"li",
1,
"4.",
"Schakt för längsgående kanalisation, schakt för skarvgropar och kabelplöjning som påverkar material närmare än 0,4 m utanför slipersände och som helt eller delvis frilägger högst 5 st slipersändar i följd med minst 20 st sliprar orörda sliprar mellan sliprar med helt eller delvis frilagda ändar."
],
[
"li",
1,
"5.",
"Schakt för tvärkanalisation där samtliga villkor a-e uppfylls:"
],
[
"li",
3,
"a.",
"Arbetet utförs så att ballast under eller intill högst 3 st sliprar påverkas."
],
[
"li",
3,
"b.",
"Maximal kabelgravsbredd, underkant sliper, får inte överstiga 1600 mm."
],
[
"li",
3,
"c.",
"Avstånd mellan närliggande schakt för tvärkanalisation ska minst vara 20 st sliperavstånd."
],
[
"li",
3,
"d.",
"Kabelgravar utförs enligt AMA Anläggning 23, CBB.32 med tillhörande standardritning 3-801 623 för kabelrör samt standardritning 3-801 624 för flerfackskanaler."
],
[
"li",
3,
"e.",
"Återfyllning utförs enligt AMA Anläggning 23, CEC.32 och CEC.42 och packas enligt tabell CE/3."
],
[
"li",
1,
"6.",
"Schakt för kontaktledningsfundament där samtliga villkor a-f uppfylls:"
],
[
"li",
3,
"a.",
"Arbetet utförs enligt AMA Anläggning 23, CBB.56."
],
[
"li",
3,
"b.",
"Schakt utförs till maximalt 2900 mm under räls överkant för stolpfundament med fot enligt komponentritning 517 622 och typritning 517 601."
],
[
"li",
3,
"c.",
"Schakt utförs till maximalt 3300 mm under räls överkant för stolpfundament utan fot enligt komponentritning 517 621 och typritning 517 601."
],
[
"li",
3,
"d.",
"Schaktgropens längd utmed spår, uppmätt i nivå med sliper överkant, får inte överstiga 3,5 m."
],
[
"li",
3,
"e.",
"Schakt utförs så att inget material inom 0,4 m utanför sliperände påverkas."
],
[
"li",
3,
"f.",
"Återfyllning utförs enligt AMA Anläggning 23, CEB.53 och packas enligt tabell CE/4."
],
[
"k",
"K38695"
],
[
"p",
"DEF-sliperbyte klassificeras som kategori 2 om samtliga villkor a-b uppfylls:"
],
[
"li",
1,
"a.",
"Utbyte av 3-7 st sliprar i följd med minst 14 st orörda sliprar mellan sliprar som byts."
],
[
"li",
1,
"b.",
"Schaktning ned till maximalt 50 mm under sliper underkant."
],
[
"k",
"K38657"
],
[
"p",
"Vid schakt i samband med DEF-slipersbyte ska schaktredskap vara utrustat med djupbegränsare."
],
[
"h",
"7.3. Kategori 3 – medför obetydlig nedsättning av spårstabilitet"
],
[
"k",
"K38697"
],
[
"p",
"Följande arbeten ska klassificeras som kategori 3:"
],
[
"li",
1,
"1.",
"Lyft eller understoppning av ett spåravsnitt på högst 5 m."
],
[
"li",
1,
"2.",
"Utbyte eller reglering av 1-2 st sliprar i följd med minst 20 st orörda sliprar mellan sliprar som byts eller regleras. Undantag finns för DEF-sliprar enligt K38698 nedan."
],
[
"li",
1,
"3.",
"Schakt för längsgående kanalisation, schakt för skarvgropar och kabelplöjning som inte påverkar material närmare än 0,4 m utanför slipersände."
],
[
"li",
1,
"4.",
"Ballastplogning."
],
[
"k",
"K38698"
],
[
"p",
"DEF-sliperbyte klassificeras som kategori 3 där samtliga villkor a-b uppfylls:"
],
[
"li",
1,
"a.",
"Utbyte av högst 1-2 st sliprar i följd med minst 14 st orörda sliprar mellan sliprar som byts."
],
[
"li",
1,
"b.",
"Schaktning ned till maximalt 50 mm under sliper underkant."
],
[
"k",
"K38657"
],
[
"p",
"Vid schakt i samband med DEF-slipersbyte ska schaktredskap vara utrustat med djupbegränsare."
]
]
},
"00014-9-6": {
"dok": "TRVINFRA-00014 Banöverbyggnad Stabilitetspåverkande arbete",
"rubrik": "9.6 Erforderlig stabilisering mellan arbeten",
"block": [
[
"h",
"9.6. Erforderlig stabilisering mellan arbeten"
],
[
"k",
"K38735"
],
[
"p",
"Där ett stabilitetspåverkande arbete enligt kapitel 7 Kategoriindelning stabilitetspåverkande arbete har utförts ska stabilisering motsvarande en ackumulerad trafikbelastning på 100 000 bruttoton uppnås innan ett nytt arbete får påbörjas på sträckan. Undantag medges enligt följande punkter:"
],
[
"li",
1,
"1.",
"Nytt beslut om kategorisering ska tas vilket inkluderar samtliga arbeten som utförts eller kommer utföras på sträckan innan spåret uppnått en ackumulerad trafikbelastning på 100 000 bruttoton."
],
[
"li",
1,
"2.",
"Ackumulerad trafikbelastning nollställs då nytt arbete påbörjas på sträckan."
],
[
"li",
1,
"3.",
"För DEF-slipersbyten i kategori 2 och 3 tillåts ytterligare DEF-slipersbyten utföras på samma sträcka då ackumulerad trafikbelastning på 50 000 bruttoton uppnåtts utan att ovanstående punkt 1 uppfylls."
]
]
},
"00014-10": {
"dok": "TRVINFRA-00014 Banöverbyggnad Stabilitetspåverkande arbete",
"rubrik": "10 Åtgärder innan trafikering",
"block": [
[
"h",
"10 Åtgärder innan trafikering"
],
[
"k",
"K38737"
],
[
"p",
"Efter stabilitetspåverkande arbete ska nedanstående punkter uppfyllas innan spåret tillåts trafikeras:"
],
[
"li",
1,
"1.",
"Ballastsektion uppfyller krav enligt dokument TRVINFRA-00012 Banöverbyggnad Spårsystem."
],
[
"li",
1,
"2.",
"Spårläget uppfyller krav enligt avsnitt 6.1 Godkännande av spårläge efter arbete, i dokument TRVINFRA-00013 Banöverbyggnad Spårläge."
],
[
"k",
"K219452"
],
[
"p",
"Arbeten som ska godkännas med belastad eller tillåts godkännas med obelastad spårlägesmätning anges i avsnitt 6.1, Tabell K6.1 i dokument TRVINFRA-00013 Banöverbyggnad Spårläge."
],
[
"k",
"K38740"
],
[
"p",
"Vid utbyte av DEF-skadade betongsliprar av kategori 1 eller 2 ska maskinell stabilisering motsvarande minst 25 000 bruttoton utföras innan trafik tillåts."
],
[
"etikett",
"Råd"
],
[
"p",
"Maskinell stabilisering rekommenderas även efter utbyte av DEF-skadade sliprar av kategori 3."
],
[
"etikett",
"Råd"
],
[
"p",
"Maskinell stabilisering i samband med DEF-sliperbyte bör utföras med vibratorplatta eller motsvarande."
],
[
"etikett",
"Råd"
],
[
"p",
"Utförd maskinell stabilisering tillgodoräknas vid beslut om tillåten hastighet, vilket innebär att maximalt tillåten hastighet bestäms från ackumulerad trafikbelastning 25 000 bruttoton och uppåt."
]
]
},
"00014-11": {
"dok": "TRVINFRA-00014 Banöverbyggnad Stabilitetspåverkande arbete",
"rubrik": "11 Tillåtna hastigheter",
"block": [
[
"h",
"11 Tillåtna hastigheter"
],
[
"etikett",
"Förutsättning"
],
[
"p",
"Tabellerna i detta avsnitt skiljer på spårtyp vilken indelas i:"
],
[
"li",
1,
"•",
"Betongsliperspår"
],
[
"li",
1,
"•",
"Träsliperspår i makadamballast"
],
[
"li",
1,
"•",
"Träsliperspår i grusballast"
],
[
"p",
"Indelningen grundar sig på att de tre spårtyperna skiljer sig åt vad gäller sidoförskjutningsmotstånd. Tabellerna anger maximalt tillåten hastighet efter stabilitetspåverkande arbete, men det kan finnas andra restriktioner som begränsar hastigheten ytterligare. Exempelvis banans tillstånd och hur spårläget kontrollerats efter arbete. Banor med låg trafikbelastning kan medföra långvarig hastighetsnedsättning innan full stabilisering uppnås. I dessa fall kan beställaren kontaktas för samråd om eventuella alternativa åtgärder."
],
[
"k",
"K38746"
],
[
"p",
"För att tillämpa maximalt tillåtna hastigheter enligt Tabell K11.1 − K11.3 i detta kapitel ska sträckan där arbetet utförts, förutom packningsgraden, vara normenliga vad gäller ballastsektion, spårläge och befästningar."
],
[
"etikett",
"Råd"
],
[
"p",
"Ballastens sidomotstånd är i allmänhet den viktigaste faktorn för spårets sidostabilitet och har stor betydelse för risken för såväl sidoförskjutning av spåret som uppkomst av solkurva. Sidomotståndet beror i sin tur av följande faktorer:"
],
[
"li",
1,
"•",
"ballastens komprimerings-/packningsgrad till följd av trafikbelastning, spårstabilisator eller ballastkomprimerare"
],
[
"li",
1,
"•",
"typ av ballast (makadam eller grus)"
],
[
"li",
1,
"•",
"ballastsektionens normenlighet (i vilken grad sliprarna omges av ballast)"
],
[
"li",
1,
"•",
"sliprarnas understoppning"
],
[
"li",
1,
"•",
"sliperavstånd."
],
[
"p",
"Sidoförskjutningsmotståndet är betydligt lägre för träsliprar än för betongsliprar. Likaså ger grusballast lägre sidoförskjutningsmotstånd än makadamballast."
],
[
"etikett",
"Råd"
],
[
"p",
"Ensidig baxning i kurva ändrar rälmängd och därmed spänningsfri temperatur."
],
[
"etikett",
"Råd"
],
[
"p",
"Felaktiga skarvöppningar i skarvspår, som bl.a kan bero på rälvandring, kan ge höga axiella spänningar vilket ökar risken för sidoförskjutning av spåret."
],
[
"etikett",
"Råd"
],
[
"p",
"Spårläge, speciellt stora sidolägesfel, ökar risken för uppkomst av solkurva. Storleken på sidolägesfel påverkar också de laterala krafter som uppstår mellan fordon och spår, och ökar därmed risken för sidoförskjutning."
],
[
"k",
"K38753"
],
[
"p",
"För nybyggda banor ska belastad spårlägesmätning utföras med mätfordon innan höjning till hastighet över 100 km/h tillåts."
],
[
"k",
"K38754"
],
[
"p",
"Entreprenör ska efter stabilitetspåverkande arbete, till dess spårsträckan uppnått en ackumulerad trafikbelastning på 100 000 bruttoton, hålla sig informerad om väderprognoser för att kunna ändra maximalt tillåten hastighet om rältemperaturen/temperaturdifferensen ändras."
],
[
"etikett",
"Råd"
],
[
"p",
"Hög rältemperatur har framför allt betydelse för uppkomst av solkurva."
],
[
"etikett",
"Råd"
],
[
"p",
"Anledningen till att entreprenören ska hålla sig informerad om väderprognoser till dess att spårsträckan uppnått en ackumulerad trafikbelastning på 100 000 bruttoton är exempelvis att rältemperaturen kan stiga så att temperaturdifferensen, ΔT, går från Liten till Normal eller Stor."
],
[
"k",
"K243931"
],
[
"p",
"För att Tabell K11.2 ska få tillämpas för spår med träsliprar ska makadamballastlagrets tjocklek under slipers underkant vara minst 10 cm."
],
[
"etikett",
"Råd"
],
[
"p",
"Äldre banor har byggts med mindre tjocklek på ballastlager än vad som gäller idag och det förekommer även att spår med grus har makadamiserats i olika grad."
]
]
},
"00014-11-1": {
"dok": "TRVINFRA-00014 Banöverbyggnad Stabilitetspåverkande arbete",
"rubrik": "11.1 Betongsliperspår",
"block": [
[
"h",
"11.1. Betongsliperspår"
],
[
"k",
"K38758"
],
[
"p",
"Maximalt tillåten hastighet efter stabilitetspåverkande arbete i betongsliperspår ska vara enligt tabell K11.1."
],
[
"p",
"Tabell K11.1 Maximalt tillåten hastighet efter stabilitetspåverkande arbete i betongsliperspår med makadamballast."
],
[
"tabell",
[
[
[
"SPÅRTYP:\nBETONGSLIPERSPÅR\nI MAKADAMBALLAST",
2
],
[
"Ackumulerad trafikbelastning i 1000-tal bruttoton (kbrt)",
5
]
],
[
[
"∆T = Tf - To",
2
],
[
"0–25\nkbrt",
1
],
[
"25–50\nkbrt",
1
],
[
"50–75\nkbrt",
1
],
[
"75–100\nkbrt",
1
],
[
">100 kbrt",
1
]
],
[
[
"STOR\ntemperatur\ndifferens\n(ΔT)",
1,
2
],
[
"",
1
],
[
"ΔT > 35 °C",
1
],
[
"ΔT > 45 °C",
1
],
[
"ΔT > 55 °C",
3
]
],
[
[
"Kategori\n1&2\nHastighet\n(km/h)",
1
],
[
"40",
1
],
[
"40",
1
],
[
"40",
1
],
[
"40",
1
],
[
">200",
1
]
],
[
[
"NORMAL\ntemperatur\ndifferens\n(ΔT)",
1,
3
],
[
"",
1
],
[
"5 °C≤ ΔT ≤35 °C",
1
],
[
"5 °C≤ ΔT ≤45 °C",
1
],
[
"5 °C ≤ ΔT ≤ 55 °C",
3
]
],
[
[
"Kategori 1\nHastighet\n(km/h)",
1
],
[
"80",
1
],
[
"100",
1
],
[
"130",
1
],
[
"200",
1
],
[
">200",
1
]
],
[
[
"Kategori 2\nHastighet\n(km/h)",
1
],
[
"130",
1
],
[
"200",
1
],
[
"200",
1
],
[
"200",
1
],
[
">200",
1
]
],
[
[
"LITEN\ntemperatur\ndifferens\n(ΔT)",
1,
3
],
[
"",
1
],
[
"ΔT < 5 °C",
5
]
],
[
[
"Kategori 1\nHastighet\n(km/h)",
1
],
[
"100",
1
],
[
"130",
1
],
[
"200",
1
],
[
"200",
1
],
[
">200",
1
]
],
[
[
"Kategori 2\nHastighet\n(km/h)",
1
],
[
"200",
1
],
[
"200",
1
],
[
"200",
1
],
[
"200",
1
],
[
">200",
1
]
]
]
],
[
"k",
"K242988"
],
[
"p",
"För att tillåta hastigheter över 200 km/h efter stabilitetspåverkande arbete ska ackumulerad trafikbelastning motsvarande 100 000 bruttoton alltid tillämpas oavsett temperaturdifferens eller stabilitetshöjande åtgärd."
],
[
"etikett",
"Råd"
],
[
"p",
"Det kan finnas restriktioner som begränsar hastigheten ytterligare, exempelvis banans tillstånd och hur spårläget kontrollerats efter arbete."
]
]
},
"00014-11-2": {
"dok": "TRVINFRA-00014 Banöverbyggnad Stabilitetspåverkande arbete",
"rubrik": "11.2 Träsliperspår i makadamballast",
"block": [
[
"h",
"11.2. Träsliperspår i makadamballast"
],
[
"k",
"K38763"
],
[
"p",
"Maximalt tillåten hastighet efter stabilitetspåverkande arbete i träsliperspår med makadamballast ska vara enligt tabell K11.2."
],
[
"p",
"Tabell K11.2 Maximalt tillåten hastighet efter stabilitetspåverkande arbete i Träslipersspår med makadamballast."
],
[
"tabell",
[
[
[
"SPÅRTYP:\nTRÄSLIPERSSPÅR I\nMAKADAMBALLAST ¹⁾",
2
],
[
"Ackumulerad trafikbelastning i 1000-tal bruttoton (kbrt)",
5
]
],
[
[
"∆T = Tf - To",
2
],
[
"0–25\nkbrt",
1
],
[
"25–50\nkbrt",
1
],
[
"50–75\nkbrt",
1
],
[
"75–100\nkbrt",
1
],
[
">100 kbrt",
1
]
],
[
[
"STOR\ntemperatur\ndifferens\n(ΔT)",
1,
2
],
[
"",
1
],
[
"ΔT > 25 °C",
1
],
[
"ΔT > 30 °C",
1
],
[
"ΔT > 35 °C",
1
],
[
"ΔT > 40 °C",
2
]
],
[
[
"Kategori\n1&2\nHastighet\n(km/h)",
1
],
[
"40",
1
],
[
"40",
1
],
[
"40",
1
],
[
"40",
1
],
[
"200",
1
]
],
[
[
"NORMAL\ntemperatur\ndifferens\n(ΔT)",
1,
3
],
[
"",
1
],
[
"0 °C≤ ΔT ≤25°C",
1
],
[
"0 °C≤ ΔT ≤30°C",
1
],
[
"0 °C≤ ΔT ≤35°C",
1
],
[
"0 °C ≤ ΔT ≤ 40°C",
2
]
],
[
[
"Kategori 1\nHastighet\n(km/h)",
1
],
[
"80",
1
],
[
"80",
1
],
[
"100",
1
],
[
"130",
1
],
[
"200",
1
]
],
[
[
"Kategori 2\nHastighet\n(km/h)",
1
],
[
"100",
1
],
[
"130",
1
],
[
"200",
1
],
[
"200",
1
],
[
"200",
1
]
],
[
[
"LITEN\ntemperatur\ndifferens\n(ΔT)",
1,
3
],
[
"",
1
],
[
"ΔT < 0 °C",
5
]
],
[
[
"Kategori 1\nHastighet\n(km/h)",
1
],
[
"80",
1
],
[
"100",
1
],
[
"130",
1
],
[
"200",
1
],
[
"200",
1
]
],
[
[
"Kategori 2\nHastighet\n(km/h)",
1
],
[
"130",
1
],
[
"200",
1
],
[
"200",
1
],
[
"200",
1
],
[
"200",
1
]
]
]
],
[
"p",
"1) Se K243931 i kapitel 11."
],
[
"etikett",
"Råd"
],
[
"p",
"Det kan finnas restriktioner som begränsar hastigheten ytterligare, exempelvis banans tillstånd och hur spårläget kontrollerats efter arbete."
]
]
},
"00014-11-3": {
"dok": "TRVINFRA-00014 Banöverbyggnad Stabilitetspåverkande arbete",
"rubrik": "11.3 Träsliperspår i grusballast",
"block": [
[
"h",
"11.3. Träsliperspår i grusballast"
],
[
"k",
"K38765"
],
[
"p",
"Maximalt tillåten hastighet efter stabilitetspåverkande arbete i träsliperspår med grusballast ska vara enligt tabell K11.3."
],
[
"p",
"Tabell K11.3 Maximalt tillåten hastighet efter stabilitetspåverkande arbete i Träslipersspår med grusballast."
],
[
"tabell",
[
[
[
"SPÅRTYP:\nTRÄSLIPERSSPÅR I\nGRUSBALLAST ¹⁾",
2
],
[
"Ackumulerad trafikbelastning i 1000-tal bruttoton (kbrt)",
5
]
],
[
[
"∆T = Tf - To",
2
],
[
"0–25\nkbrt",
1
],
[
"25–50\nkbrt",
1
],
[
"50–75\nkbrt",
1
],
[
"75–100\nkbrt",
1
],
[
">100 kbrt",
1
]
],
[
[
"STOR\ntemperatur\ndifferens\n(ΔT)",
1,
2
],
[
"",
1
],
[
"ΔT > 20 °C",
1
],
[
"ΔT > 25 °C",
1
],
[
"ΔT > 30 °C",
1
],
[
"ΔT > 35 °C",
2
]
],
[
[
"Kategori\n1&2\nHastighet\n(km/h)",
1
],
[
"40",
1
],
[
"40",
1
],
[
"40",
1
],
[
"40",
1
],
[
"110",
1
]
],
[
[
"NORMAL\ntemperatur\ndifferens\n(ΔT)",
1,
3
],
[
"",
1
],
[
"-10°C≤ ΔT ≤20°C",
1
],
[
"-10°C≤ ΔT ≤25°C",
1
],
[
"-10°C≤ ΔT ≤30°C",
1
],
[
"-10°C ≤ ΔT ≤ 35°C",
2
]
],
[
[
"Kategori 1\nHastighet\n(km/h)",
1
],
[
"40",
1
],
[
"80",
1
],
[
"90",
1
],
[
"110",
1
],
[
"110",
1
]
],
[
[
"Kategori 2\nHastighet\n(km/h)",
1
],
[
"80",
1
],
[
"90",
1
],
[
"110",
1
],
[
"110",
1
],
[
"110",
1
]
],
[
[
"LITEN\ntemperatur\ndifferens\n(ΔT)",
1,
3
],
[
"",
1
],
[
"< -10 °C",
5
]
],
[
[
"Kategori 1\nHastighet\n(km/h)",
1
],
[
"60",
1
],
[
"80",
1
],
[
"110",
1
],
[
"110",
1
],
[
"110",
1
]
],
[
[
"Kategori 2\nHastighet\n(km/h)",
1
],
[
"110",
1
],
[
"110",
1
],
[
"110",
1
],
[
"110",
1
],
[
"110",
1
]
]
]
],
[
"p",
"1) Se K243931 i kapitel 11."
],
[
"etikett",
"Råd"
],
[
"p",
"Det kan finnas restriktioner som begränsar hastigheten ytterligare, exempelvis banans tillstånd och hur spårläget kontrollerats efter arbete."
]
]
},
"0514-5": {
"dok": "TDOK 2014:0514 Spårkomponenter DEF-sliprar Besiktning",
"rubrik": "5 Besiktning",
"block": [
[
"h",
"5 Besiktning"
],
[
"p",
"Sliprar med första bokstaven S och tillverkningsår 1992 - 1996 omfattas av besiktning. Om slipern är märkt med t.ex. S7 93 betyder det enligt följande: S = Strängbetong 7 = Modellbeteckning X = Förstärkt sliper, mer armering (S7X) 93 = Tillverkningsår 1993 OBS! Det kan förekomma skador på sliprar tillverkade före 1992 och efter 1996. Dessa förekommer då i mindre omfattning. Konstateras det sådana skador tas de med i DEF-slipersbesiktningen efter samråd med respektive beställare. Om så sker skall det dock redovisas att besiktningssträckan har ökats. Sliprar i plankorsningar är undantagna från denna besiktning. Om besiktningsmannen bedömer att det kan finnas DEF-sliprar i plankorsningen utifrån status på omkringliggande sliprar, skall detta rapporteras direkt till beställaren."
]
]
},
"0514-6": {
"dok": "TDOK 2014:0514 Spårkomponenter DEF-sliprar Besiktning",
"rubrik": "6 Klassificering av skador på sliprar",
"block": [
[
"h",
"6 Klassificering av skador på sliprar"
],
[
"h",
"6.1 Klass 1 ”röd”"
],
[
"p",
"Slipern klassificeras som röd om spricka/sprickor når närmare än 2 cm från skuldra eller har kraftiga sprickor med flera förgreningar enligt sliper 3 och 4 i bild 2."
],
[
"p",
"Mer bildexempel finns i kapitel 9 och 10."
],
[
"figur",
"img/tdok/fig/0514-6-1.jpg",
"Bild 1 Spricka närmare än 2 cm från skuldra"
],
[
"figur",
"img/tdok/fig/0514-6-2.jpg",
"Bild 2 Exempel på sprickor"
],
[
"h",
"6.2 Klass 2 ”gul”, begynnande nedbrytning"
],
[
"p",
"Slipern klassificeras som gul om spricka/sprickor inte når närmare än 2 cm från skuldra och spricka/sprickors sammanlagda längd överstiger 10 cm."
],
[
"p",
"Mer bildexempel finns i kapitel 9 och 10."
],
[
"figur",
"img/tdok/fig/0514-6-3.jpg",
"Bild 3 Spricka inte närmare än 2 cm från skuldra"
],
[
"figur",
"img/tdok/fig/0514-6-4.png",
"Bild 4 Exempel på sprickor"
],
[
"h",
"6.3 Klass 3 ”grön”, felfri"
],
[
"p",
"Slipern klassificeras som grön om spricka/sprickor inte når närmare än 2 cm från skuldra och om spricka/sprickors sammanlagda längd understiger 10 cm."
],
[
"h",
"6.4 Klass 4 ”blå”, utbytt sliper"
],
[
"p",
"Sliprar som är utbytta sedan tidigare års DEF-besiktning. Årgång -00 och senare, såväl inlagd Abetong och Strängbetong sliper ska registreras som utbytta sliprar klass 4 ”Blå”."
]
]
},
"0514-7": {
"dok": "TDOK 2014:0514 Spårkomponenter DEF-sliprar Besiktning",
"rubrik": "7 Övriga skador",
"block": [
[
"h",
"7 Övriga skador"
],
[
"p",
"I nedanstående punkt 7.1 och 7.2 redovisas andra skador som lätt kan förväxlas med DEF-skador."
],
[
"h",
"7.1 ”Gjuthud”"
],
[
"p",
"Ljusa fält med små ytsprickor som lätt kan sammanblandas med DEF-skador. Dessa sprickor bedöms ej ha någon inverkan på livslängd eller hållfasthet. Sprickorna uppträder tidigt på sliprarna för att med tiden erodera bort. Se bild 28."
],
[
"h",
"7.2 Belastningsskada"
],
[
"p",
"Denna typ av skada beror på en för hög ballastprofil i slipermitt alternativt överbelastning av sliper. Vid denna skadetyp förekommer oftast tvärgående sprickor i slipermitt. Se bild 29."
]
]
},
"0514-8": {
"dok": "TDOK 2014:0514 Spårkomponenter DEF-sliprar Besiktning",
"rubrik": "8 Säkerhetskrav som skall innehållas",
"block": [
[
"h",
"8 Säkerhetskrav som skall innehållas"
],
[
"li",
1,
"•",
"På en sträcka av 20 sliprar får det vara max 4 sliprar av klass 1 (röda). Utav dessa max 2 i följd."
],
[
"li",
1,
"•",
"Ingen sliper får helt sakna klämfjädrar på ena rälen på grund av DEF-skada."
],
[
"li",
1,
"•",
"Om sju eller fler röda sliprar i rad upptäcks eller om tre eller fler grupper med fyra eller fler röda sliprar i rad finns på en sträcka av 100 m är det befogat med en akut åtgärd av något slag. Observera att detta är en grov riktlinje, besiktningspersonalens bedömning av spårets status gäller även om det inte stämmer med ovan."
],
[
"p",
"I de fall besiktningspersonalen noterar anmärkningar som måste åtgärdas omedelbart, ska lämpliga säkerhetsåtgärder (inklusive eventuell avstängning av spår) omedelbart vidtas och besked om detta ofördröjligen lämnas till beställaren."
]
]
},
"0360-2-1": {
"dok": "TDOK 2022:0360 Spårkomponenter Balkbromsar Thyssen TW-4E och TW-5F",
"rubrik": "2.1 Kontrollpunkter balkbroms Thyssen",
"block": [
[
"h",
"2 Kontroll av balkbromssystem"
],
[
"p",
"Nedanstående punkter omfattar vad som ska kontrolleras regelbundet under hela balkbromsens livslängd. Kontrollerna avser endast den mekaniska balkbromsen samt hydrauliksystemet."
],
[
"h",
"2.1. Kontrollpunkter balkbroms Thyssen"
],
[
"p",
"För riktningsbalkbroms Thyssen TW-4E ska kontroll genomföras efter 24 000 axlar dock senast efter ett år."
],
[
"p",
"För dalbalkbroms Thyssen TW-5F ska kontroll genomföras efter 200 000 axlar dock senast efter 6 månader."
],
[
"p",
"Följande kontrollpunkter gäller för både Thyssen TW-4E och TW-5F:"
],
[
"li",
1,
"•",
"Att bredden på den inre och yttre bromsbalken inklusive stödkil ska vara 500 mm +1/-2mm, se Figur 3."
],
[
"figur",
"img/tdok/fig/0360-2-1-1.jpg",
"Figur 3: Balkbromsens bredd"
],
[
"li",
1,
"•",
"Att avståndet mellan rälhuvud och bromsyta ligger på 40 mm +/-2 mm, se Figur 4."
],
[
"figur",
"img/tdok/fig/0360-2-1-4.png",
"Figur 4: Avstånd mellan farkant och bromsblock"
],
[
"li",
1,
"•",
"Att bromsbalkarnas kraftanslag ligger an mot det ställbara kraftanslaget med maximalt 2 mm spelrum, se Figur 5."
],
[
"figur",
"img/tdok/fig/0360-2-1-2.jpg",
"Figur 5: Bromsbalkarnas kraftanslags anliggning"
],
[
"li",
1,
"•",
"Att förspänningen av ytterbalkhållarens returfjäder ska vara 190 mm mätt från flänsens ytterkant till fjäderdragankarets ände, måttet får ej avvika mer än +/-3 mm, se Figur 6."
],
[
"figur",
"img/tdok/fig/0360-2-1-3.jpg",
"Figur 6: Ytterbalkhållarens returfjäder, förspänning"
],
[
"li",
1,
"•",
"Att den tillåtna angreppshöjden på 115/125 mm (inner- respektive ytterbalkmått) över skenans överkant inte överskrids, se Figur 7."
],
[
"figur",
"img/tdok/fig/0360-2-1-5.jpg",
"Figur 7: Angreppshöjd för balkbroms, ytterbalk till vänster och innerbalk till höger."
],
[
"li",
1,
"•",
"För Thyssen TW-4E gäller att fjäderpaketet har en längd på 408 mm vid lokfritt/obelastat läge och en längd på 348 mm i max bromsläge. Kontrollen för bromsat läge görs med hjälp av ett mellanlägg på 135 mm som förs mellan bromsytorna, se Figur 8."
],
[
"figur",
"img/tdok/fig/0360-2-1-6.png",
"Figur 8: Fjäderpaketets längd för Thyssen TW-4E, obelastad till vänster och belastad till höger"
],
[
"li",
1,
"•",
"För Thyssen TW-5F gäller att fjäderpaketet har en längd på 245 mm vid lokfritt/obelastat läge och en längd på 230 mm i max bromsläge. Kontrollen för bromsat läge görs med hjälp av ett mellanlägg på 135 mm som förs mellan bromsytorna, se Figur 9."
],
[
"figur",
"img/tdok/fig/0360-2-1-7.png",
"Figur 9: Fjäderpaketets längd för Thyssen TW-5F, belastad"
]
]
},
"0360-2-2": {
"dok": "TDOK 2022:0360 Spårkomponenter Balkbromsar Thyssen TW-4E och TW-5F",
"rubrik": "2.2 Kontrollpunkter hydraulikanläggning",
"block": [
[
"h",
"2.2. Kontrollpunkter hydraulikanläggning"
],
[
"p",
"Följande kontroller ska göras utifrån behov beroende på den mängd operationer som genomförs och anläggningens utförande. Dock ska följande kontroller genomföras minst en gång per år."
],
[
"p",
"Följande kontroller ska genomföras:"
],
[
"li",
1,
"•",
"Hydrauloljan ska kontrolleras. Förslagsvis genom att ett oljeprov skickas till lämplig hydraulverkstad för bedömning."
],
[
"li",
1,
"•",
"Kontrollera visuellt oljenivån på pumpbehållarens oljenivåglas."
],
[
"li",
1,
"•",
"Kontrollera returmatningsfiltret. Detta görs genom att observera indikeringselementet. Vid 0 mm höjd är filtret rent medan vid 5 mm höjd vid maximal förorening av filtret, se Figur 10."
],
[
"figur",
"img/tdok/fig/0360-2-2-1.jpg",
"Figur 10: Optisk smutsindikering, röd detalj"
],
[
"li",
1,
"•",
"En täthetskontroll ska genomföras okulärt. Detta görs genom att alla anslutna bromsar är i grundläget, ackumulatoraggregatet har föreskriven gasförspänning och är fyllt med max drifttryck. Vid detta driftläge ska oljenivån stämma överens med motsvarande markering på oljenivåglaset."
],
[
"li",
1,
"•",
"Tryckbegränsningsventilerna har ett öppningstryck på 190 bar. Genomförs lämpligen 2 gånger per år."
],
[
"li",
1,
"•",
"Gasförspänningstrycket ska kontrolleras genom att:"
],
[
"li",
3,
"o",
"Tömma ackumulatorn på oljesidan"
],
[
"li",
3,
"o",
"Trycket kan då avläsas på manometern på gassidan. Det ska vara 120 bar."
],
[
"li",
1,
"•",
"Kontrollera att inställning av tryckvakter är enligt de föreskrivna inställningar, se Bilaga 2."
]
]
},
"0448-5-1": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "5.1 Mekanisk del",
"block": [
[
"h",
"5 Balkbroms Thyssen TW5"
],
[
"h",
"5.1 Mekanisk del"
],
[
"h",
"5.1.1 Uppbyggnad"
],
[
"li",
1,
"•",
"Thyssens tvåkrafts balkbromsar i normalutförande som dalbromsar består i huvudsak av:"
],
[
"li",
1,
"•",
"Bromsbalkar (bromsbalk F195 med bromssegment) med kraftanslag och rullyta."
],
[
"li",
1,
"•",
"Lyftaggregat med lyftbalkar, returanordning för ytterbromsbalkar (glidstol, tryckfjäder, spännskruv, anslagsskruv), lyftcylinder och bultar för upphängning av kolvhuvud i lyftbalkar."
],
[
"li",
1,
"•",
"Kraftaggregat med byglar, länkar, bygelrullar, glidstolar, fjäderpaket, utjämningsplåtar, stolar, balkupplag, justerkilar och fästskruvar för bromsbalkar."
],
[
"li",
1,
"•",
"Drivning med drivkammare, balansarm, gejdfäste, gejdstycke, gejdrar, länkstänger, bromscylindrar, bultar för cylinderfäste och kolvstångshuvud."
],
[
"li",
1,
"•",
"Underbyggnad (längsgående balkar, balkar med rälsupplag och bygelhakar) med räler, upphängning för lyftcylinder, upplag för lyftbalkar, kraftanslag, bygelåterföringsanordning (lagerbockar, tryckfjäder, spännskruvar, inställningsskruvar)."
],
[
"li",
1,
"•",
"Oljehydraulisk styrning med styrplatta och rörledning för broms och lyftcylindrar."
],
[
"li",
1,
"•",
"Elektrisk styrning med lägesgivare och ändlägeskontakter."
],
[
"li",
1,
"•",
"Mittre täckplåtar."
],
[
"h",
"5.1.2 Funktionsprincip"
],
[
"p",
"Funktionsprincip och arbetssätt för Thyssens tvåkrafts balkbroms som dalbroms."
],
[
"p",
"Anordning av bromsbalkar"
],
[
"p",
"På båda sidor om båda rälerna är bromsbalkarna anordnade. De yttre bromsbalkarna är fast lagrade i de i lyftbalkarna anordnade glidstolarna och flyttas med speciella stolar i bygelaggregaten. De inre bromsbalkarna ligger med rullytorna löst på lyftbalkarna, medan de är fast förbundna med bygelaggregaten."
],
[
"p",
"Höjningsrörelse/lyftrörelse"
],
[
"p",
"Lyftcylindrarna står på upplag i bromsunderbyggnaden och är med axlar förenade med lyftbalkarna på vilka bromsbalkarna vilar. Bromsbalkarna kan därmed lyftas från grundställning till loss och beredskapsställning. De yttre bromsbalkarna höjs genom plungerkolvarnas rörelse, lodrätt, medan de inre bromsbalkarna med samtliga bygelaggregat svänger runt vridpunkt «D» enligt ovan."
],
[
"p",
"Bromsrörelse"
],
[
"p",
"Inställning av bromsgapet sker genom särskilda länkar. Från bromscylindrarna via gejdstycken får de med länkstängerna förbundna länkarna en samtidig rörelse. Vid minskning av bromsgapet förskjuts länkarna från ett medläge mot dödpunkt. Därmed rör sig de i länkarna lagrade bygelrullarna, stolarna och de på dessa liggande yttre bromsbalkarna mot rälen. Länkarna stöder sig via de i bygelaggregaten lagrade glidstyckena mot fjäderpaketen."
],
[
"p",
"Vid ökning av bromsgapet sörjer de i lyftbalkarna anordnade returfjädrarna för att ytterbromsbalkarna intar loss och beredskapsläge."
],
[
"p",
"För att erhålla parallellrörelse av höger och vänster sida, d v s att båda bromsgapen inställs samtidigt och till samma mått, finns en balansarm. Genom balansarmen är de på båda sidor anbringade gejdstyckena och därmed också bromscylindrarna mekaniskt kopplade med varandra."
],
[
"p",
"Elektriska anordningar i bromsen"
],
[
"p",
"För kontroll av bromsbalkarnas höjdläge i förhållande till rälsen är ändlägesgivare monterade på andra och näst sista lyftbalken. Givarna känner av lägena «Broms uppe» (BKO) och «broms nere» (BKU)."
],
[
"p",
"Bromsgapet övervakas av en lägesgivare."
],
[
"p",
"TW bromsens funktion som dalbroms."
],
[
"p",
"Före rangeringens början höjs bromsen från grundställning till loss och beredskapsläge. De i underbyggnaden anordnade lyftcylindrarna höjer då lyftbalkarna tills ett anslag på dessa når foten på rälerna. Samtidigt förs de i lyftbalkarna lagrade ytterbromsbalkarna och de på lyftbalkarna liggande inre bromsbalkarna till övre ändläget."
],
[
"p",
"En i bromsen inkommande vagn bringar genom påverkan av viktmätanordningen de yttre bromsbalkarna från loss och beredskapsställning till erforderlig bromsställning. Därvid ställs ett bromsgap på mellan 120 mm och 135 mm in som ger den bromskraft som erfordras för motsvarande axel eller vagnvikt."
],
[
"p",
"Vid infarten i bromsen skär hjulen (normal hjulbredd 135 mm) upp det förinställda bromsgapet, d v s de förskjuter ytterbromsbalkarna utåt och för samtidigt genom byglarna de inre bromsbalkarna mot hjulen insidor."
],
[
"p",
"Genom förskjutningen av de yttre bromsbalkarna blir via stolarna, bygelrullarna, länkarna och glidstolarna de i byglarna liggande gummifjäderpaketen sammanpressade och den önskade bromskraften uppnås. De på hjulen verkande bromskrafterna är beroende av det för tillfället inställda bromsgapet och av hjulbredden. När lämplig utgångshastigheten har uppnåtts hos vagnen eller när vagnens sista axel lämnat bromsen, öppnas bromsgapet och bromsbalkarna återgår till loss- och beredskapsläget. De yttre bromsbalkarna, vilka är fästade på glidstolarna, skjuts då utåt av fjädrarna (fjädrarna är genom spännskruvarnas brickfjädrar förbundna med lyftbalkarna). Därefter trycks de inre bromsbalkarna, som är fastskruvade med byglarna, inåt av de i lagerbockarna liggande fjädrarna (i de på underbyggnaden liggande lagerbockarna är byglarna vridbart upphängda) (fjädrarna som likaledes är anordnade i lagerbockarna har genom spännskruvarnas brickfjädrar förbindelse med underbyggnaden)."
],
[
"p",
"Vid ett bromsförlopp pressas inner- och ytterbromsbalkarna genom bygelsystemet mot hjulsidorna. Måttet på gummifjäderpaketens sammantryckning är därmed ett mått på storleken på de bromskrafter som verkar på hjulen. Fjädrarna i glidstolarna motverkar gummifjäderpaketens kraftinriktning, medan fjädrarna i lagerbockarna verkar i gummifjäderpaketens kraftriktning. Med hänsyn till dessa fakta är förspänningen av gummifjäderpaketen och därmed storleken av bromsbalkarnas verksamma klämkraft fastställd."
],
[
"h",
"5.1.3 Bromsbalkarnas driftlägen"
],
[
"p",
"Grundställning"
],
[
"p",
"I grundställning ligger bromsbalkarna max 50 mm över RÖK och bromsen är fri för lokpassage. Måttet mellan de inre bromsbalkarnas bromsytor får då uppgå till 1350 mm, bromsgapet är öppnat till ca 190 mm. Gejdstycket är ca 5 mm framför anslaget. (Se figur 1.)"
],
[
"p",
"Loss och beredskapsläge"
],
[
"p",
"I loss och beredskapsläge är de yttre bromsbalkarna höjda till 115 mm över RÖK och de inre bromsbalkarna till 120 mm över RÖK."
],
[
"p",
"Bromsgapet är inställt på ca 165 mm varvid vagnar passerar igenom obromsade. Gejdstycket är ca 39 mm framför vänster anslag."
],
[
"p",
"Bromsställning"
],
[
"p",
"Vid oförändrad angreppshöjd (115/120 mm) på bromsbalkarna minskas bromsgapet till ett mått för önskad bromsverkan (minsta gap 120 mm = maximal bromsning). Gejdstycket är ca 5 mm framför höger anslag. (Se figur 1)"
],
[
"figur",
"img/tdok/fig/0448-5-1-1.png",
"Figur 1 Inställning av bromsbalkarnas driftläge"
]
]
},
"0448-5-2": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "5.2 Åtgärder",
"block": [
[
"h",
"5.2 Åtgärder"
],
[
"h",
"5.2.1 Ändlägeskontakter"
],
[
"p",
"En ändring av inställningen kan bara uppnås genom omställning av lägesgivarna (elektrisk styrning)."
],
[
"h",
"5.2.2 Bromsbalksbredd"
],
[
"p",
"Justerkilarna förskjuts motsvarande avvikelsen från måttet 500 mm ± 3 mm (Se figur 2). Vid förskjutning av justerkilarna måste först fästskruvarna för bromsbalkarna lossas (1½ - 2 varv) och bromsbalkarna skjutas i riktning mot rälen."
],
[
"figur",
"img/tdok/fig/0448-5-2-1.png",
"Figur 2 Inställning av bromsbalksbredd"
],
[
"p",
"Därefter kan justerkilarna likaledes lossas från sina knaster genom att skjutas mot rälen, varefter de skjuts i kilens riktning motsvarande den uppmätta måttavvikelsen. Förskjutning av en knasterdelning (knasterdelning = 40 mm) medför en måttändring av 4 mm."
],
[
"p",
"För inställning av justerkilar till de yttre bromsbalkarna skall följande åtgärder vidtagas:"
],
[
"li",
1,
"•",
"Höj TW bromsen från grundläge till lossläge"
],
[
"li",
1,
"•",
"För TW bromsen till bromsläge"
],
[
"li",
1,
"•",
"Lägg in distansstycke mellan glidstol och anslagsskruv i lyftbalken; (Se figur 3)"
],
[
"li",
1,
"•",
"Öppna bromsgapet helt"
],
[
"figur",
"img/tdok/fig/0448-5-2-2.png",
"Figur 3 Insättning av ett distansstycke mellan glidstol och anslagsskruv i lyftbalken."
],
[
"h",
"5.2.3 Inre bromsbalkar"
],
[
"p",
"Inställning av inre bromsbalkar utförs med speciella inställningsskruvar i bygelåterföringsanordningen. Inställningen påbörjas i första och sista bygelaggregatet. De däremellan liggande mätpunkterna (mätpunkt = mitten av bygelaggregatet) ställs in jämt däremellan. Till båda sidor av bromsen skall måttet vara 678 -2/+0 mm; (Se figur 4)."
],
[
"figur",
"img/tdok/fig/0448-5-2-3.png",
"Figur 4 Inställning av inre bromsbalkar. Om bromsbalkarnas rörlighet är trög skall man snabbt höjd och sänka dem. Därefter måste inställningsskruvarna ha anliggning när måttet 678 -2/+0 mm uppnås; (Se figur 5 punkt J)."
],
[
"p",
"Överskrides inställningsmåttet 678 -2/+0 mm (t ex är det 680 mm), förorsakar vagnshjulen en tippning av vridpunktslagringen. Denna ligger sedan inte längre an och det blir ett brott i spännskruvarna; (Se figur 6)."
],
[
"figur",
"img/tdok/fig/0448-5-2-4.png",
"Figur 5 Inställning av inre bromsbalkar."
],
[
"figur",
"img/tdok/fig/0448-5-2-5.png",
"Figur 6 Felaktig inställning av inre bromsbalk"
],
[
"h",
"5.2.4 Länkstänger"
],
[
"p",
"Inställningen uppnås genom vridning av de med gänga försedda länkstängerna. Därvid skall ett riktsnöre hållas från rullmittpunkt till rullmittpunkt; (Se figur 8). Mittpunkten för länkarna med bygelrullar skall ligga 30 mm före dödpunkten. Avståndet mellan bygelrullarnas centrum skall då vara 3 400 mm."
],
[
"p",
"Det skall beaktas att först skall de korta stängerna K - N ställas in och därefter de övriga (Se figur 7). Härvid måste först låsmuttrarna lossas."
],
[
"p",
"Observera: Länkstänger och låsmuttrar har höger och vänstergänga."
],
[
"figur",
"img/tdok/fig/0448-5-2-6.png",
"Figur 7 Länkstängernas inställning."
],
[
"figur",
"img/tdok/fig/0448-5-2-7.png",
"Figur 8 Bänkstängernas inställning vid max bromsläge."
],
[
"h",
"5.2.5 Fjäderpaket"
],
[
"p",
"Fjäderpaketen är fabriksprovade och injusterade, ytterligare justering är inte nödvändig."
],
[
"p",
"En fininställning kan dock göras med utjämningsplåtar, vilka läggs in bakom fjäderpaketen till en höjd av 10 mm; (Se figur 9). Kontrollera att det i grundläge och i max bromsläge finns 5 mm luftspalt mellan gejdfäste och gejdstycke; (Se figur 1)."
],
[
"p",
"Fjäderpaketets längd skall efter inläggning av två tryckstycken i det maximala bromssteget i bromsgapet mitt för bygeln vara 230 ±1 mm."
],
[
"figur",
"img/tdok/fig/0448-5-2-8.png",
"Figur 9 Fininställning av fjäderpaketen"
],
[
"h",
"5.2.6 Anslagsbegränsning för yttre bromsbalkar"
],
[
"p",
"Före inställning av anslagsskruvarna måste skyddshylsorna avlägsnas och låsskruvarna lossas; (se figur 10). Därefter kan anslagsskruvarna efterjusteras motsvarande avvikelsen från rätt mått."
],
[
"figur",
"img/tdok/fig/0448-5-2-9.png",
"Figur 10 Inställning av anslagsbegränsning för de yttre bromsbalkarna."
],
[
"p",
"Det skall i TW-bromsens grundinställning finnas 5-8 mm luft mellan bygelrulle och stol; (Se figur 11)"
],
[
"figur",
"img/tdok/fig/0448-5-2-10.png",
"Figur 11 Inställning av anslagsbegränsning för yttre bromsbalkar."
],
[
"h",
"5.2.7 Kraftanslag"
],
[
"p",
"Vid inställning av de förskjutbara kraftanslagen i underbyggnaden måste först fästskruvarna lossas. Därefter skall kilarna förskjutas så att båda kraftarvslagen ligger an lätt; (Se figur 12 och 13). Därefter skall fästskruvarna åter dras åt."
],
[
"p",
"Slutligen skall bromsen flera gånger manövreras till maximalt bromsläge. Därvid skall man observera att bromsbalkarna rör sig utan svårighet."
],
[
"figur",
"img/tdok/fig/0448-5-2-11.png",
"Figur 12 Inställning av kraftanslag."
],
[
"figur",
"img/tdok/fig/0448-5-2-12.png",
"Figur 13 Inställning av kraftanslag."
],
[
"h",
"5.2.8 Bromsdriftlägen"
],
[
"p",
"Om lyftbalkarnas lyftbegränsningsplattor vid höjda bromsbalkar inte ligger an mot rälsfoten eller om lyftbalkarna vid bromsens grundläge inte ligger an på sina stöd skall kontaktgivarna för den elektriska styrningen justeras motsvarande."
],
[
"p",
"Efter justering skall tillåten angreppshöjd - 120 mm för inner- och 115 mm ytterbalkar kontrolleras; (Se figur 14)."
],
[
"figur",
"img/tdok/fig/0448-5-2-13.png",
"Figur 14 Lyftbalkarnas placering i underbyggnaden."
],
[
"h",
"5.2.9 Angreppshöjd"
],
[
"p",
"Om tillåten angreppshöjd (120 mm över RÖK för innerbromsbalkar och 115 mm över RÖK för ytterbromsbalkar) överskrids genom avnötning av rälen, kan det rätta måttet återställas genom att en motsvarande distansplåt sätts in mellan räl och rälsupplag på lyftbalken."
]
]
},
"0448-5-3": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "5.3 Hydraulisk del",
"block": [
[
"h",
"5.3 Hydraulisk del"
],
[
"h",
"5.3.1 Funktionsbeskrivning"
],
[
"p",
"TW- bromsens totala funktion visas i hydraulschemat (Bilaga 1 – Schema oljehydraulisk styplatta)."
],
[
"tabell",
[
[
[
"Funktion \"lyft”",
1
],
[
"Magnet på ventil 10.5, aktiverad = H",
1
]
],
[
[
"Funktion \"sänk\"",
1
],
[
"Magnet på ventil 10.6, aktiverad = S",
1
]
],
[
[
"Funktion \"precisionsstängning\"",
1
],
[
"Magnet på ventil 10.3, aktiverad = FS",
1
]
],
[
[
"Funktion \"precisionsöppning\"",
1
],
[
"Magnet på ventil 10.2, aktiverad = FÖ",
1
]
],
[
[
"Funktion \"grov öppning\"",
1
],
[
"Magnet på ventil 10.3 + 10.1 aktiverad = FÖ och GO",
1
]
]
]
],
[
"p",
"Ventil 10.1 till 10.6 har en manuell nödmanövrering. Detta innebär att de även kan manövreras manuellt. Komponentlista till styrplattans hydraulschema"
],
[
"tabell",
[
[
[
"Pos.",
1
],
[
"Antal",
1
],
[
"Beteckning",
1
]
],
[
[
"1",
1
],
[
"1",
1
],
[
"Påmonterat styrblock",
1
]
],
[
[
"2+3",
1
],
[
"2",
1
],
[
"2/2-vägs inbyggnadsventil ND 25, inkluderande lock med slaglängdsbegränsning",
1
]
],
[
[
"4+5",
1
],
[
"2",
1
],
[
"2/2-vägs inbyggnadsventil NDI6, inkluderande lock med slaglängdsbegränsning",
1
]
],
[
[
"6+7",
1
],
[
"1",
1
],
[
"2/2-vägs inbyggnadsventil ND 25, inkluderande lock (växelventil)",
1
]
],
[
[
"8+9",
1
],
[
"4",
1
],
[
"212-vägs inbyggnadsventil ND 25, inkluderande lock",
1
]
],
[
[
"10",
1
],
[
"6",
1
],
[
"312-vags sätesventil ND &",
1
]
],
[
[
"11",
1
],
[
"4",
1
],
[
"Backventilsinsats",
1
]
],
[
[
"12+13",
1
],
[
"1",
1
],
[
"2/2-vägs inbyggnadsventil ND 25, inkluderande lock med slaglängdsbegränsning",
1
]
],
[
[
"20",
1
],
[
"3",
1
],
[
"Tryckmätanslutning (rnini-nätsystem)",
1
]
],
[
[
"27",
1
],
[
"1",
1
],
[
"Kopplingslåda",
1
]
]
]
],
[
"p",
"De olika komponenternas funktioner"
],
[
"p",
"2/2-vägs inbyggnadsventil pos. 12 med lock pos. 13"
],
[
"p",
"Utförande med slaglängdsbegränsning. Fungerar som spärrventil. Vid reparation är ventilen helt stängd. Vid normal drift är ventilen helt öppen. Manövreringen sker manuellt."
],
[
"p",
"2/2-vägs inbyggnadsventil pos. 14 med lock pos. 15"
],
[
"p",
"Fungerar som spärrventil från anslutning A till B. Detta innebar att det inte kan strömma tillbaka någon olja från tankledningen/yttre rörledningen till styrplattan."
],
[
"p",
"3/2-riktningsventil pos. 10.5"
],
[
"p",
"Används för att manövrera pos. 17 Magnet aktiverad innebär att ventil pos. 16.2 är öppen. Magnet deaktiverad innebär att ventil pos. 16.2 är stängd."
],
[
"p",
"2/2-riktnings-inbyggnadsventil pos. 16.2 med lock pos. 17"
],
[
"p",
"Ventilen används för \"lyftning\" av bromsen. Öppen ventil ger flöde från anslutning B till A. Utförandet av pos 17 som växelventil används som backventil. Härigenom behåller bromsen sitt läge även vid bortfall av systemtrycket. Strypventil pos. 18 Med strypventilen pos. 18 kan lyfthastigheten ställas in. 2/2-riktnings inbyggnadsventil pos. 8 med lock pos. 9"
],
[
"p",
"3/2-riktnings-sätesventil pos. 10.3"
],
[
"p",
"Används för att manövrera pos. 52. Magnet aktiverad innebär att ventil pos. 5.2 ar öppen. Magnet deaktiverad innebär att ventil pos. 5.2 är stängd. 2/2-vägs inbyggnadsventil pos. 4.2 med lock pos. 5.2"
],
[
"p",
"Ventilen används för \"fin stängning” av bromsen. Öppen ventil ger flöde från anslutning B till A. Önskat värde för oljeflödet ställs in med slaglängdsbegränsningen på ventillocket."
],
[
"p",
"3/2-vägs sätesventil pos. 10.4"
],
[
"p",
"Används för manövrering av pos. 3.2. Magnet aktiverad innebär att ventil pos. 3.2 är öppen. Magnet deaktiverad innebär att ventil pos. 3.2 är stängd. Vid funktion \"grov stängning\" strömmar samtidigt ett delflöde genom ventil 3.2 och 5.2."
],
[
"p",
"2/2-vägs inbyggnadsventil pos. 2.2 med lock pos. 3.2"
],
[
"p",
"Ventilen används för \"grov stängning'' av bromsen. Öppen ventil ger flöde från anslutning B till A. Oljeflödet ställs in på önskat varde med slaglängdsbegränsningen på ventillocket."
],
[
"p",
"3/2-vägs sätesventil pos. 10.2"
],
[
"p",
"Används för manövrering av pos. 5.1. Magnet aktiverad innebär att ventil pos. 5.1 är öppen. Magnet deaktiverad innebär att ventil pos. 5.1 är stängd."
],
[
"p",
"2/2-vägs inbyggnadsventil pos. 4.1 med lock pos. 5.1"
],
[
"p",
"Ventilen används för \"fin öppning\" av bromsen. Öppen ventil ger flöde från anslutning A till B. Oljeflödet ställs in på önskat varde genom slaglängdsbegränsningen på ventillocket."
],
[
"p",
"3/2-vägs sätesventil pos. 10.1"
],
[
"p",
"Används för manövrering av pos. 3.1. Magnet aktiverad innebär att ventil pos. 3.1 är öppen. Magnet deaktiverad innebär att ventil pos. 3.1 är stängd. Vid funktion \"grov öppning\" strömmar samtidigt ett delflöde genom ventil 3.1 och 5.1."
],
[
"p",
"2/2-vägs inbyggnadsventil pos. 2.1 med lock pos. 3.1"
],
[
"p",
"Ventilen används för \"grovöppning\" av bromsen. Öppen ventil ger flöde från anslutning A till B. Oljeflödet ställs in på önskat varde genom slaglängdsbegränsningen på ventillocket."
],
[
"p",
"3/2-vägs sätesventil pos. 10.6"
],
[
"p",
"Används för manövrering av pos. 5.3. Magnet aktiverad innebär att ventil pos. 16.1 är öppen. Magnet deaktiverad innebär att ventil pos. 16.1 är stängd. Ventilen används för \"sänkning\" av bromsen. Öppen ventil ger flöde från anslutning B till A."
],
[
"p",
"2/2-vägs inbyggnadsventil pos. 8 med lock pos. 9"
],
[
"p",
"Ventilen används som spärrventil. Grundläge stängd. Vid avlastning på anslutning X genom ventil pos. 10.3 ger flöde från anslutning A till B till tanken. Ventilläget för pos. 3.1, 3.2, 5.1, 5.2 och 5.3 kan avläsas på rattens skala."
],
[
"h",
"5.3.2 Oljecirkulationsstyrplatta"
],
[
"p",
"Funktionssätt och uppbyggnad"
],
[
"p",
"Oljespolningen gör att driftvarm hydraulolja strömmar från maskinanläggningarnas tankar via tillhörande matningsledningar till de olika bromsarna. Detta bidrar till att hålla bromsarnas reaktionstider korta, i synnerhet efter längre driftpauser. För detta ändamål sitter det en oljecirkulationsstyrplatta med strypning och magnetventil i slutet av en stickkanal. Rörledningsnätet kortsluts av magnetventilen så att den kalla oljan i spårutrustningen byts mot varm olja från tankarna."
],
[
"figur",
"img/tdok/fig/0448-5-3-1.jpg",
"Bild 2 Oljecirkulationsstyrplatta Oljecirkulationsplatta"
],
[
"p",
"Inställningar"
],
[
"p",
"Strypningen för den kontrollerade kortslutningen av hydraulsystemet skall ställas in så att tiden i fasen av hydrauloljeförbrukning när oljespolningen pågår mellan trycknivåerna DH och DT2 (se operatörsmanualen för den centrala matningsanläggningen för hydraulolja) är ca 30 till 50 sek. Den efterföljande pumpningstiden tills trycket är lika med DH skall därefter vara ca 15 sek. Denna inställning skall kontrolleras regelbundet."
],
[
"p",
"Förinställningen av de olika spolningstiderna för de enskilda stickkanalerna sker vid driftsättningen. Beroende på rörledningarnas längd ligger spolningstiden ungefär mellan 100 och 200 sek."
],
[
"h",
"5.3.3 Hydraulikens uppbyggnad"
],
[
"p",
"Hydrauliken i TW-F bromsen består huvudsakligen av:"
],
[
"li",
1,
"•",
"De oljehydrauliska styrplattorna"
],
[
"li",
1,
"•",
"Lyftcylindrarna"
],
[
"li",
1,
"•",
"Bromscylindrarna"
],
[
"li",
1,
"•",
"Rörledningarna"
],
[
"p",
"Gränssnittet mellan bromsen och den oljehydrauliska matningsanläggningen är ingången på styrplattan"
],
[
"p",
"(För information om den centrala hydraulanläggningen se den särskilda operatörsmanualen.)"
],
[
"h",
"5.3.4 Oljehydraulisk styrplatta"
],
[
"p",
"Den oljehydrauliska styrplattan (bild 1) består huvudsakligen av:"
],
[
"li",
1,
"•",
"Styrblocken för påmontering av omkopplingskomponenter"
],
[
"li",
1,
"•",
"De elektromagnetiskt manövrerade riktningssätesventilerna."
],
[
"li",
1,
"•",
"De hydrauliskt manövrerade 2-vägs inbyggnadsventilerna (patron) med tillhörande lock som möjliggör olika styrfunktioner."
],
[
"figur",
"img/tdok/fig/0448-5-3-2.jpg",
"Bild 1 Oljehydraulisk styrplatta"
],
[
"p",
"Se Bilaga 1 – Schema oljehydraulisk styrplatta."
],
[
"h",
"5.3.5 Lyftcylinder"
],
[
"p",
"Lyftcylindern utgörs av enkelverkande cylindrar,"
],
[
"h",
"5.3.6 Bromscylinder"
],
[
"p",
"Bromscylindern utgörs av dubbelverkande cylinder (differentialcylinder)"
],
[
"h",
"5.3.7 Rörledningar"
],
[
"p",
"Rörledningen består av precisionsstålrör med förskruvningar och högtrycksslangar med 4 spiraltrådinläggning för utjämning av tryckslag."
],
[
"p",
"Tätningsprincip: Tätningskägla med O-ring."
],
[
"h",
"5.3.8 Service"
],
[
"p",
"Underhåll"
],
[
"p",
"Hydrauliken för TW- bromsen ar underhållsfri."
],
[
"p",
"Inspektion"
],
[
"p",
"Täthetskontroll"
],
[
"p",
"En eventuell hydraulvätskeförlust skall upptäckas genom övervakning av fyllnivån i oljebehållaren (se även operatörsmanualen för den centrala matningsanläggningen för hydraulolja)."
],
[
"p",
"Kontroll av reaktionstider"
],
[
"p",
"Bromsens reaktionstider skall kontrolleras tillsammans med den elektriska styrningen."
],
[
"p",
"Inställning krävs i allmänhet endast vid större avvikelser från de föreskrivna reaktionstiderna."
],
[
"p",
"Reparation"
],
[
"p",
"Åtgärder vid läckage"
],
[
"p",
"Om det föreligger läckage vid förskruvningarna trots ordentligt åtdragna överfallsmuttrar måste man byta tillhörande O-ringar."
],
[
"p",
"Man måste också byta O-ringarna om det lacker ut olja mellan ventilen och styrplattan respektive mellan ventillocket och ventilen trots att styrelementen sitter korrekt monterade."
],
[
"p",
"Härvid skall man beakta att servicearbeten endast får utföras när hydraulsystemet är tryckavlastat."
],
[
"p",
"Inställning av reaktionstider"
],
[
"p",
"Om de föreskrivna reaktionstiderna överskrids eller om det förekommer översvängningar skall man justera den hydrauliska styrningen."
],
[
"p",
"För detta ändamål stänger man först alla ventiler (2/2 riktnings-inbyggnadsventiler) helt. Ventil 3.1 - 3.2 och 5.1 - 5.2 manövreras manuellt."
],
[
"p",
"Därefter öppnas ventilerna ND 16 för precisionsstängning (212-riktningsventil pos. 5.2) och precisionsöppning (2/2-riktningsventil pos. 5.1) så mycket att den önskade reaktionstiden erhålls utan översvängningar."
],
[
"p",
"Sedan öppnas ventilerna ND 25 för grov stängning (2/2- riktningsventil pos. 3.2) och grov öppning (2/2-riktningsventil pos. 3.1) så mycket att den önskade reaktionstiden erhålls utan översvängningar även här."
],
[
"p",
"Som riktvärden gäller följande reaktionstider:"
],
[
"p",
"För kolvarnas slaglängd från lossat läge till bromsläge 15 och vice versa:"
],
[
"p",
"Grov körning: ca 1000 ms"
],
[
"p",
"Precisionskörning: ca 3000 ms"
]
]
},
"0448-5-4": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "5.4 Åtgärder",
"block": [
[
"h",
"5.4 Åtgärder"
],
[
"h",
"5.4.1 Otätheter"
],
[
"p",
"Om länsskruvarna, trots hårt åtdragna fästskruvar, är otäta, måste koppartätningarna bytas ut på dessa ställen."
],
[
"p",
"O ringarna i förskruvningarna måste bytas mot nya om förskruvningarna är otäta trots fastdragen överfallsmutter."
],
[
"p",
"Likaså måste O ringarna förnyas om olja läcker mellan ventil och styrplatta respektive ventil och ventilkåpa, trots lämplig åtdragning."
],
[
"p",
"OBSERVERA: Underhållsarbete endast får utföras med trycklöst hydraulsystem."
],
[
"h",
"5.4.2 Reaktionstider"
],
[
"p",
"Om de angivna ställtiderna överskrids eller om översvängningar uppstår krävs efterjustering varje gång."
],
[
"p",
"Denna efterjustering görs med strypbackventilerna Bild 1."
],
[
"p",
"Härvid öppnas först alla strypbackventiler helt, därefter stängs strypbackventil pos 27 för funktion \"grov stäng\" såpass att erforderlig ställtid uppnås utan översvängning."
],
[
"p",
"Därpå stängs strypningarna på tvilling strypbackventilen pos 24 för funktionerna \"fin öppna\" och \"fin stäng\" såpass att erforderlig ställtid uppnås utan översvängning."
]
]
},
"0448-5-5": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "5.5 Ritningar",
"block": [
[
"h",
"5.5 Ritningar"
],
[
"p",
"Schema. 1 Oljehydraulisk styrplatta Bilaga 1 Schema. 2 Dubbelpumpsaggregat Bilaga 2 Schema. 3 Ackumulator Bilaga 3"
],
[
"p",
"Detaljlista till TW bromsen, mekanik:"
],
[
"tabell",
[
[
[
"Benämning",
1
],
[
"Position på ritn. 1 och 2",
1
]
],
[
[
"Yttre bromsbalk med bromssegment",
1
],
[
"1",
1
]
],
[
[
"Inre bromsbalk med bromssegment",
1
],
[
"2",
1
]
],
[
[
"Kraftanslag",
1
],
[
"3",
1
]
],
[
[
"Rullyta",
1
],
[
"4",
1
]
],
[
[
"Lyftaggregat med lyftbalkar\nReturanordning för yttre bromsbalk\nGlidstol\nTryckfjäder\nSpännskruv\nAnslagsskruv",
1
],
[
"5\n6\n6a\n6b\n6c\n6d",
1
]
],
[
[
"Lyftcylinder",
1
],
[
"7",
1
]
],
[
[
"Bult för upphängning av kolvhuvud i lyftbalk\nKraftaggregat med bygel",
1
],
[
"7a\n8",
1
]
],
[
[
"Länk",
1
],
[
"9",
1
]
],
[
[
"Bygelrulle",
1
],
[
"10",
1
]
],
[
[
"Glidstol",
1
],
[
"11",
1
]
],
[
[
"Läderpaket",
1
],
[
"12",
1
]
],
[
[
"Utjämningsplåtar",
1
],
[
"13",
1
]
],
[
[
"Stol",
1
],
[
"14",
1
]
],
[
[
"Balkupplag\nJusterkil",
1
],
[
"15\n16",
1
]
],
[
[
"Fästskruvar för bromsbalkar",
1
],
[
"17",
1
]
]
]
],
[
"p",
"Drivning med drivkammare 18 Balansarm 19 Gejdfäste 20 Gejdstycke 21 Gejdrar 22 Länkstång 23 Bromscylinder 24 Bultar för cylinderfäste och kolvstångshuvud 24a Underbyggnad 25 Längsgående balk 25a Balk med rälsupplag 25b Bygelbalk 25c Räl 26 Upphängning för lyftcylinder 27 Upplag för lyftbalk 28 Kraftanslag 29 Bygelåterföringsanordning 30 Lagerbock 30a Tryckfjäder 30b Spännskruv 30c Inställningsskruv 30d Styrplatta 31 Rörledning för lyft och bromscylindrar 32 Lägesgivare 33 Ändlägeskontakter 34 Mittre täckplåt 35"
]
]
},
"0448-6-1": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "6.1 Central matningsanläggning för hydraulolja, uppbyggnad",
"block": [
[
"h",
"6 Central matningsanläggning för hydraulolja för dalbromsar"
],
[
"h",
"6.1 Central matningsanläggning för hydraulolja, uppbyggnad"
],
[
"p",
"Matningen av hydraulolja till dalbromsarna sker från den centrala matningsanläggningen för hydraulolja. Denna centrala anläggning består av:"
],
[
"li",
1,
"•",
"En byggnad"
],
[
"li",
1,
"•",
"Ett dubbelpumpaggregat. Se schema Bilaga 2"
],
[
"li",
1,
"•",
"Två tryckvakter"
],
[
"li",
1,
"•",
"Två ackumulatorer"
],
[
"p",
"Ett rörledningssystem (se bild 3 och 4)"
],
[
"figur",
"img/tdok/fig/0448-6-1-1.jpg",
"Bild 3 Dalbromsanläggning Malmö"
],
[
"figur",
"img/tdok/fig/0448-6-1-2.jpg",
"Bild 4 Maskinanläggning"
],
[
"p",
"För funktionsbeskrivningen används bilder och systemritningar."
],
[
"p",
"Detaljerad information finns i dokumentationen."
],
[
"h",
"6.1.1 Dubbelpumpaggregat"
],
[
"p",
"Dubbelpumpaggregatet består av:"
],
[
"li",
1,
"•",
"En oljebehållare, volym ca 650 l med två rengöringsöppningar, oljenivåglas, oljeavtappningsskruv och påmonterade pumphållare."
],
[
"li",
1,
"•",
"Ett påfyllnings- och luftningsfilter."
],
[
"li",
1,
"•",
"Två radialkolvpumpar, kapacitet 50 l/Min vardera, vid 150 bar"
],
[
"li",
1,
"•",
"Två elastiska kopplingar"
],
[
"li",
1,
"•",
"Två El-Motorer, 380 V, 15 KW, 1000 U/Min."
],
[
"li",
1,
"•",
"Två returmatningsfilter"
],
[
"li",
1,
"•",
"En styrplatta med påmonterade återställningsbara backventiler, tryckbegränsningsventiler och riktningsventil. Samt erforderliga rörledningar, kopplingar, förskruvningar och kopplingsbox (se Bild 5)."
],
[
"p",
"På dubbelpumpaggregatet finns en tryck-(P) och en returledning(T)."
],
[
"p",
"Avlastningsledningen från blåsackumulatorn är förbunden med tankledningen."
],
[
"figur",
"img/tdok/fig/0448-6-1-3.jpg",
"Bild 5 Dubbelpumpaggregat Returfilter Riktningsventil (BF)"
],
[
"h",
"6.1.2 Tryckvakt"
],
[
"p",
"Den elektroniska tryckvakten EDS 2000 har en halvledarbaserad kisel-mätsensor som mäter trycket. Den resulterande mätsignalen behandlas så att analog/digitalomvandlaren kan utföra mätningar av tryck- och spetsvärden. Ärvärdet visas digitalt."
],
[
"p",
"Kapslingen för EDS 2000 består av ABS-plast och har skyddsklass IP 65."
],
[
"p",
"Vid anslutning av enheten skruvar man av en täckplatta som skyddar utrymmet med plintarna. Där sitter även mätsensorn monterad."
],
[
"p",
"Anslutningskablarna förs in via PG-förskruvningar. Manövreringen och inställningen sker utan att enheten öppnas. De 2 membranknapparna \"Mode\" och \"Set\" används för detta enligt beskrivningen i avsnittet \"Programmering\". Den hydrauliska anslutningen utförs med en mini-mätanslutning."
],
[
"figur",
"img/tdok/fig/0448-6-1-4.jpg",
"Bild 6 Tryckvakt med vridomkopplare Tryckvakt Vridomkopplare Mini-mätanslutning"
],
[
"h",
"6.1.3 Ackumulator"
],
[
"p",
"Ackumulatorn består av:"
],
[
"li",
1,
"•",
"Fyra ackumulatortankar (nominell volym 50 liter)."
],
[
"li",
1,
"•",
"Tillhörande säkerhets- och spärrblock samt manometrar."
],
[
"li",
1,
"•",
"Påfyllningsanordning för kväve."
],
[
"p",
"Dessa enheter är monterade i ett ackumulatorstativ och sammankopplade med rörledningar. Se Bilaga"
],
[
"li",
0,
"3.",
"Se även bild 7 och 8."
],
[
"figur",
"img/tdok/fig/0448-6-1-5.jpg",
"Bild 7 Ackumulatortankar"
],
[
"figur",
"img/tdok/fig/0448-6-1-6.jpg",
"Bild 8 Detaljbild ackumulatoraggregat"
],
[
"h",
"6.1.4 Rörledningssystem"
],
[
"p",
"Rörledningssystemet består av:"
],
[
"li",
1,
"•",
"Rörledningarna"
],
[
"li",
1,
"•",
"Precisionsstålrören"
],
[
"li",
1,
"•",
"Högtrycksslangarna"
],
[
"li",
1,
"•",
"Tillhörande förskruvningar med tätningskägla och O-ring (förskruvningar) och fästelement"
]
]
},
"0448-6-2": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "6.2 Central matningsanläggning för hydraulolja, funktionsbeskrivning",
"block": [
[
"h",
"6.2 Central matningsanläggning för hydraulolja, funktionsbeskrivning"
],
[
"p",
"Se även hydraulschemat med tillhörande positioner, figur 16."
],
[
"h",
"6.2.1 Dubbelpumpaggregat och tryckvakt"
],
[
"p",
"Pump 1 arbetar kontinuerligt (arbetspump). Den kopplas om till matning vid 144 bar (DM) och tomgång vid 150 bar (DH). Om trycket sjunker ytterligare vid högre förbrukning av hydraulolja kopplas även den andra pumpen 2 (reservpump) in vid 138 bar (DT). Därefter arbetar båda pumpar tills det maximala trycket på 150 bar (DH) har uppnåtts. Arbetspumpen kopplas därefter åter till tomgång och reservpumpen stängs av helt. En elektrisk omkopplingsanordning gör det möjligt att båda pumpar kan köras som arbets- resp reservpump."
],
[
"p",
"Omkopplingen av arbetspump från matning till tomgång och till- resp frånkopplingen av reservpump sker genom en elektronisk tryckvakt som är ansluten till ackumulatoraggregatet via en minimätanslutning."
],
[
"p",
"För omkopplingen av pumparna krävs totalt tre kontaktfunktioner: 1 x 150 bar (DH), 1 x 144 bar (DM), 1 x 138 bar (DT)."
],
[
"p",
"Ytterligare kontaktfunktioner finns för detektion av lågt tryck vid 130 bar (DT2), för automatisk avstängning av bromsarna vid skador på hydraulsystemet vid 125 bar (DN) samt för övervakning av oljecirkulationsstyrplattorna (oljecirkulationsstyrplatta kan levereras som specialutrustning)."
],
[
"p",
"Pilotstyrda tryckbegränsningsventiler med påmonterade elektromagnetiskt manövrerade riktningsventiler (pumpomkopplingsventiler) förhindrar vid fel i de elektriska omkopplingsanordningarna att pumpmotorerna havererar. Dessutom förhindras otillåtna tryckökningar i rörsystemet."
],
[
"p",
"På pumpaggregatet sitter en styrd backventil med elektromagnetiskt direktmanövrerad riktningsventil (BF-ventil). Om backventilen stängs är den yttre rörledningen tryckavlastad. Trycket i spårutrustningen är dock alltid det tryck som förinställs på tryckbegränsningsventilerna (25 bar). Ingen hydraulolja kan läcka ut till spårutrustningen."
],
[
"figur",
"img/tdok/fig/0448-6-2-1.png",
"Figur 16. Tryckpositioner Innan man påbörjar reparationsarbeten i hydraulsystemet skall man tryckavlasta anläggningen."
],
[
"p",
"För att minimera förlusterna av hydraulolja är det viktigt att man bestämmer oljebehovet som krävs för bromsmanövreringen och markerar detta på oljenivåglaset."
],
[
"p",
"Hydrauloljan som kommer i retur från spårutrustningen leds genom filter innan det leds till oljebehållaren. Filtret rengör oljan från föroreningar."
],
[
"h",
"6.2.2 Ackumulatoraggregat"
],
[
"p",
"Oavbruten rangerdrift med korta reaktionstider för bromsningarna förutsätter att det alltid finns hydraulvätska tillgängligt utan hänsyn till pumparnas matning. Ackumulatoraggregatet lagrar därför hydraulvätska och kan alltid tillhandahålla hydraulvätska för att öppna den styrda backventilen och för drift av bromsen. Den lagrade hydraulvätskan fylls på och övervakas kontinuerligt av pumpaggregatet."
],
[
"p",
"Säkerhets- och spärrblocken har tryckbegränsningsventiler. De skall förhindra otillåtna tryckökningar i systemet som beror på en uppvärmning av kvävet."
],
[
"h",
"6.2.3 Säkerhetsanordningar"
],
[
"p",
"Hydrauliken i maskinhuset har ett flertal säkerhetsanordningar:"
],
[
"li",
1,
"•",
"Var och en av pumparna har en pilotstyrd tryckbegränsningsventil (pumpomkopplingsventil). Denna ventil manövreras av styrningen med hänsyn till tryckvaktens omslagspunkter. Vid en tryckökning på mer än 170 bar strömmar oljan via säkerhetsventilen i denna ventil tillbaka till pumpbehållaren."
],
[
"li",
1,
"•",
"Om denna säkerhetsventil inte öppnas aktiveras ytterligare en tryckökning upp till 210 bar och säkerhetsventilerna i säkerhets- och spärrblocken i ackumulatoraggregaten öppnas."
],
[
"li",
1,
"•",
"Denna möjliga störning innebär p.g.a. det högre trycket att drivmotorernas strömförbrukning ökar. Som en extra säkerhetsåtgärd stänger motorskyddsbrytarna av motorerna. En tryckökning över 210 bar är ej möjlig."
],
[
"p",
"De beskrivna säkerhetsanordningarna gäller maskinanläggningen. Via Bf-ventilen som beskrevs tidigare friges trycket via den yttre rörledningen till bromsen. När bromsen stängs av blir Bf-ventilen strömlös. Den automatiska tryckbegränsningsventilen sänker trycket i den yttre rörledningen till 25 bar."
]
]
},
"0448-6-3": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "6.3 Information för drift och underhåll",
"block": [
[
"h",
"6.3 Information för drift och underhåll"
],
[
"h",
"6.3.1 Allmän information"
],
[
"p",
"Vid underhålls- och servicearbeten skall man förebygga att föroreningar och smuts kommer in i systemet. Underhålls- och servicearbeten får endast utföras av fackpersonal med lämpliga kvalifikationer."
],
[
"p",
"Man får aldrig arbeta på enheter som står under tryck. Därför skall man stänga av hydraulanläggningen och tryckavlasta den på följande sätt:"
],
[
"li",
1,
"•",
"Stäng av båda pumpmotorer på styrskåpet."
],
[
"li",
1,
"•",
"Vid arbeten på ackumulatoraggregaten skall en eller två avlastningsventiler på säkerhets- och spärrblocken öppnas. Släpp ut trycket långsamt för att förebygga skador på ackumulatorbehållarna."
],
[
"li",
1,
"•",
"Resttrycket i uterörledningen (ca 25 bar) sänks till 0 genom avlastning av tryckbegränsningsventilen."
],
[
"p",
"Om man inte arbetar på ackumulatoraggregaten kan samtliga tryckackumulatorer kopplas loss från rörnätet genom att man stänger alla ackumulator-, säkerhets- och spärrblock. Därefter tryckavlastar man den yttre rörledningen enligt ovan."
],
[
"p",
"Innan man lossar förskruvningar, rör etc. måste man göra rent runt dem. När man lossar överfallsmuttern för en inskruvningsstos skall stosen hållas fast med en nyckel så att den inte gängas ut. Alla öppningar skall stängas med skyddslock eller gummipluggar så att ingen hydraulvätska går förlorad och så att det inte kan komma in smuts i anläggningen. Skadade rör eller slangar måste omedelbart bytas. Härvid får endast heldragna precisionsstålrör användas. För slangledningar får endast slangar användas som är godkända för det aktuella trycket."
],
[
"p",
"Vid montering av nya eller renoverade enheter måste man följa de åtdragningsmoment som anges i de tillhörande katalogerna. Vid sprutning och pensling av hydraulenheter med färg eller lack (speciellt nitro-baserade) skall alla elastiska tätningar samt lagringar för rörliga delar (t ex kolvstänger) täckas över noggrant. Annars kan dessa delar skadas."
],
[
"h",
"6.3.2 Hydraulvätskor"
],
[
"p",
"I hydrauliska anläggningar får man endast använda hydraulvätskor som inte angriper tätningarna (O-ringar, radial-tätringar, spårringar, manschetter etc.) och skadar dessa. Man får inte heller blanda hydraulvätskan med fotogen eller någon annan tunnflytande olja för att minska viskositeten."
],
[
"p",
"Hydraulolja H-LP 32 enligt DIN 51 525 rekommenderas. Andra hydraulvätskor som t ex biologiskt nedbrytbara vätskor är endast tillåtna enligt särskild överenskommelse och med hänsyn till gällande användningsvillkor."
],
[
"h",
"6.3.3 Driftsättning av hydraulanläggningen"
],
[
"p",
"Påfyllning av hydraulvätska"
],
[
"p",
"Hydraulvätskan måste fyllas på via det befintliga påfyllnings- och luftningsfiltret. Fyll på åtminstone upp till markeringen på oljenivåglaset."
],
[
"p",
"Genom en tryckprovning av rörledningen kan det vid driftsättning uteslutas, om det är ett systemavhängt läckage vid styrplattan. Vid ett läckage skall det grundvattenskadliga vätskan fångas upp i de oljetätar-kanalerna och eller i oljetrågen vid bromsarna. Vidare visas ev. oljeläckage genom kontroll av nivåglaset och tryckvakten."
],
[
"p",
"Luftning av anläggningen"
],
[
"p",
"Vid den första driftsättningen får anläggningen först belastas när den har luftats enligt följande:"
],
[
"p",
"Först skall man kontrollera att pumpen roterar i den riktning som anges med pilen på resp bredvid typskylten."
],
[
"p",
"Därefter skall drivmotorn slås på och anläggningen köras med så lågt tryck som möjligt under några minuter."
],
[
"p",
"Därefter luftas hela rörledningen genom att man gör en kortslutningsförbindelse. För detta ändamål manövrerar man kortvarigt oljecirkulationsstyrplattan som sitter i slutet av de olika kretsarna."
],
[
"p",
"Luftfickor i ledningarna till bromscylindrarna avlägsnas genom att man öppnar luftningsskruvarna på bromscylindrarna. I allmänhet är anläggningen helt luftad efter 10 - 15 minuter."
],
[
"p",
"Detta ser man på följande sätt:"
],
[
"li",
1,
"•",
"Ingen blandning av hydraulvätska och luft (skum) i behållaren."
],
[
"li",
1,
"•",
"Kolvstängerna rör sig inte ryckigt."
],
[
"p",
"Påfyllning av ackumulatorer med kväve"
],
[
"p",
"Nya eller renoverade ackumulatorer levereras förladdade med kväve (t ex 50 bar) för att förebygga korrosionsskador."
],
[
"p",
"Före driftsättning måste de fyllas med kväve till det föreskrivna förspänningstrycket."
],
[
"p",
"För detta ändamål får varken syre eller luft användas."
],
[
"p",
"Explosionsrisk!"
],
[
"p",
"Påfyllning"
],
[
"p",
"Ta loss skyddslocket och hattmuttern från ackumulatorns gasventil. Skruva på fyllanordningen och slangledningen på ackumulatorn och anslut slangen till en kväveflaska."
],
[
"p",
"Genom att vrida in spindeln öppnas gasventilen."
],
[
"p",
"Härvid måste avlastningsventilen vara stängd."
],
[
"p",
"Om avlastningsventilen är öppen läcker kvävet ut i luften."
],
[
"p",
"Därefter öppnar man spärrventilen på kväveflaskan och låter gasen långsamt strömma in i ackumulatorn. Stäng spärrventilen ett par gånger under påfyllningen och kontrollera det erhållna förspänningstrycket."
],
[
"p",
"För högt förspänningstryck kan reduceras genom att man öppnar avlastningsventilen"
],
[
"etikett",
"Observera"
],
[
"p",
"Eftersom förspänningstrycket P1 är beroende av gastemperaturen måste man vänta ca 2 minuter efter det att det önskade förspänningstrycket har erhållits. Efter detta tidsintervall har temperaturen åter stabiliserats varefter man kan mäta förspänningstrycket en gång till och vid behov korrigera. När förspänningstrycket som indikeras av manometern stämmer skall man skruva tillbaka spindeln på fyllanordningen, ta loss fyllanordningen samt skruva på hattmuttern och skyddslocket (åtdragningsmoment 20 - 40 Nm). Kontrollera att det är tätt genom att pensla på en tvållösning."
],
[
"p",
"Läckage måste omedelbart åtgärdas eftersom detta leder till att ackumulatortanken förstörs."
],
[
"p",
"Efterdrag alla förskruvningar."
],
[
"figur",
"img/tdok/fig/0448-6-3-1.png",
""
],
[
"p",
"Dichtkappe = Tätningslock"
],
[
"p",
"Abschlusskappe = Skyddslock"
],
[
"p",
"Haltemutter = Låsmutter"
],
[
"p",
"Blase = Blåsa"
],
[
"p",
"Behalter = Behållare"
],
[
"p",
"Distanzring = Distansring"
],
[
"p",
"Geteiter Ring = Delad ring"
],
[
"p",
"Dichtring = Distansring"
],
[
"p",
"Nutmutter = Flänsmutter"
],
[
"p",
"Ölventil = Oljeventil"
],
[
"p",
"Entluftungsschraube = Avluftningsskruv"
],
[
"p",
"Figur 17 Ackumulatortank"
],
[
"figur",
"img/tdok/fig/0448-6-3-2.jpg",
"Bild 9 Påfyllnings- och kontrollanordning för ackumulatortank Inställning av tryckvakter"
],
[
"p",
"Vid driftsättningen av anläggningen programmeras de föreskrivna omslagspunkterna."
],
[
"figur",
"img/tdok/fig/0448-6-3-3.png",
""
],
[
"p",
"Frontansicht = Framsida"
],
[
"p",
"Bedientasten = Manöverknappar"
],
[
"p",
"Statusanzeige der Schaltrelais = Visning av reläers läge"
],
[
"p",
"Anzeige= Display"
],
[
"p",
"Elektrischer Anlschuss = Elektrisk anslutning"
],
[
"p",
"Druck anschluss = Tryckanslutning"
],
[
"p",
"Anzeige-Modus nach Einschalten = Display vid inkoppling"
],
[
"p",
"Einschalten = Inkoppling"
],
[
"p",
"Druckanzeige des internen sensor = Visning avtryck för den interna sensorn"
],
[
"p",
"Druck-oder temperaturenzeige des extern sensors = Tryck- eller temperaturvisning för den externa sensorn"
],
[
"p",
"Mit SET wird der nicht dauerhalt angezeigte sensor aufgerufen = med SET anropas sensor utan fast visning"
],
[
"p",
"Achtung! = Varning!"
],
[
"p",
"För att göra ändringen i menyn ”Parameter inställning” eller ”omslagspunktinställning” måste följande kriterier vara uppfyllda:"
],
[
"li",
13,
"-",
"Trådförbindning mellan klämma 15 och 21"
],
[
"li",
13,
"-",
"CTS – signal är programmerad i läge ”no”"
],
[
"p",
"Figur 18 Tryckvakt EDS 2000"
],
[
"figur",
"img/tdok/fig/0448-6-3-4.png",
""
],
[
"p",
"Shaltpunkeinstellung = Omslagspunkinställning"
],
[
"p",
"Einschaltpunkt = Inkopplingspunkt"
],
[
"p",
"Ruckschaltpunkt = urkopplingspunkt"
],
[
"p",
"Figur 19 Tryckvakt EDS 2000, inställning omslagspunkter"
],
[
"li",
1,
"•",
"SP 1 = 150 bar (DH) SP = Schaltpunkt"
],
[
"li",
1,
"•",
"rSP 1 = 144 bar (DM) rSP = Rückschaltpunkt"
],
[
"li",
1,
"•",
"SP 2 = 150 bar"
],
[
"li",
1,
"•",
"rSP 2 = 138 bar (DT1)"
],
[
"li",
1,
"•",
"SP 3 = 175 bar"
],
[
"li",
1,
"•",
"rSP 3 = 130 bar (DT2)"
],
[
"li",
1,
"•",
"SP 4 = 140 bar"
],
[
"li",
1,
"•",
"rSP 4 = 125 bar (DN)"
],
[
"p",
"För att undvika onödiga omslag används en fördröjning på 0,1 sek för alla omslagspunkter och kontaktfunktioner (se datablad 'Parameterinställing EDS 2000'). Övriga inställningar genomförs bara för anpassning till den elektriska styrningen."
],
[
"p",
"När programmeringen är genomförd avlägsnas den tillhörande byglingen. Därmed spärras enheten mot obehörig programmering."
],
[
"figur",
"img/tdok/fig/0448-6-3-5.png",
"Figur 20 Tryckvakt EDS 2000, parameterinställning"
]
]
},
"0448-6-4": {
"dok": "TDOK 2014:0448 Balkbromsar Thyssen TW5 (Malmö)",
"rubrik": "6.4 Service",
"block": [
[
"h",
"6.4 Service"
],
[
"h",
"6.4.1 Underhåll"
],
[
"p",
"Byte av hydraulvätska"
],
[
"p",
"Hydraulvätskan måste bytas när den är i dålig kondition. För att kontrollera detta krävs årligen ett oljeprov. För att förlänga intervallerna mellan oljebytena rekommenderas användning av en mobil filteranordning (t ex Wolf, typ MP 5A)."
],
[
"p",
"Kontroll och byte av Högtrycksslangar"
],
[
"p",
"Högtrycksslangar rekommenderas att byta ut vart 8:e år. Ingen högtrycksslang ansluten till systemet får vara äldre än 10 år enl. slangens märkning."
],
[
"p",
"Kontrollera även att samtliga slangar är datummärkta."
],
[
"p",
"Kontroll av oljenivån"
],
[
"p",
"Oljenivån kontrolleras visuellt på pumpbehållarens oljenivåglas. Påfyllning av olja sker via påfyllnings-och luftningsfiltret."
],
[
"p",
"Rengöring av returmatningsfiltren"
],
[
"p",
"Oljan som strömmar in filtret passerar filterpatronen utifrån och in (se bild 10). Alla föroreningar fastnar alltså i den yttre finmaskiga väven och i smutsfångaren."
],
[
"p",
"Den rena oljan trycks genom smutsfångarens öppning in i oljebehållaren."
],
[
"figur",
"img/tdok/fig/0448-6-4-1.jpg",
"Bild 10"
],
[
"p",
"Det rekommenderas att byta ut filterinsatsen var 12:e månad."
],
[
"p",
"Öppningstrycket för bypassventilen är ca 3 bar."
],
[
"p",
"Täthetskontroll"
],
[
"p",
"Hydraulanläggningens täthet kan kontrolleras genom visuell kontroll av nivån i oljebehållarens oljenivåglas. I ett visst läge (t ex alla anslutna bromsar i grundläget, ackumulatoraggregat med föreskriven gasförspänning och fyllda med max drifttryck) måste oljenivån stämma överens med motsvarande markering på oljenivåglaset."
],
[
"p",
"Vid avvikelser måste samtliga röranslutningar och – förbindelser samt de anslutna enheterna kontrolleras."
],
[
"p",
"Täthetskontroll av gasledningen genomförs med tvålskum."
],
[
"h",
"6.4.2 Inspektion"
],
[
"p",
"Kontroll av pumpaggregatets tryckbegränsningsventiler"
],
[
"p",
"För att begränsa systemtrycket sitter det pilotstyrda tryckbegränsningsventiler på pumpaggregatet."
],
[
"figur",
"img/tdok/fig/0448-6-4-2.jpg",
"Bild 11 Tryckbegränsningsventil"
],
[
"p",
"Dessa tryckbegränsningsventiler ställs in så att hydraulvätskan som matas av pumparna strömmar tillbaka till oljebehållaren när trycket överskrider 170 bar."
],
[
"p",
"Inställningen skall kontrolleras varje halvår på följande sätt:"
],
[
"p",
"När pumpen är påslagen skall man manövrera tryckbegränsningsventilen så länge att det föreskrivna öppningstrycket på 170 bar erhålls. Avvikelser kan korrigeras genom att man ställer in reglerskruven. Kontroll av gas-förspänningstrycket sp1"
],
[
"p",
"När ackumulatortanken är felfri och gasventilen är helt stängd är kväveförlusterna mycket låga. Det rekommenderas dock att man varje halvår kontrollerar förspänningstrycket."
],
[
"p",
"Gas-förspänningstrycket mäts med manometrarna som är inbyggda i ackumulatoraggregatet."
],
[
"p",
"Gör på följande sätt:"
],
[
"li",
1,
"•",
"Använd pumpen för att fylla ackumulatorn med hydraulvätska till min. drifttryck. Stäng därefter av pumpen och stäng spärrkranen."
],
[
"li",
1,
"•",
"Låt hydraulvätskan långsamt rinna ut ur ackumulatorn. För detta ändamål öppnar man avlastningsventilen i säkerhets- och spärrblocket."
],
[
"figur",
"img/tdok/fig/0448-6-4-3.jpg",
"Bild 12 Kontroll av gas-förspänningstrycket"
],
[
"p",
"Under tömningen skall man iaktta manometern. När förspänningstrycket p1 i ackumulatorn har erhållits stängs vätskeventilen och manometerns visare återgår mycket snabbt till noll."
],
[
"p",
"Trycket som avlästes innan tryckfallet är förspänningstrycket."
],
[
"p",
"Om förspänningstrycket är för lågt måste ackumulatorn fyllas på med kväve."
],
[
"p",
"För påfyllning se punkt 6.3.3."
],
[
"p",
"Vid mätning av förspänningstrycket med fyllanordningen uppstår alltid en viss kväveförlust jämfört med ovanstående metod. Därför skall man endast använda fyllanordningen för att mäta förspänningstrycket när ovanstående metod inte kan användas om en inbyggd manometer saknas."
]
]
},
"0311-tabell11-skarvoppning": {
"dok": "TDOK 2021:0311 Säkerhetsbesiktning – Banöverbyggnad",
"rubrik": "Tabell 11 Säkerhetsgränsvärden för skarvöppnings storlek",
"block": [
[
"tabell",
[
[
[
"",
1
],
[
"Säkerhetsgränsvärden för skarvöppning (mm)",
8
]
],
[
[
"Rällängd:",
1
],
[
"6 - 15 m",
2
],
[
"16 - 25 m",
2
],
[
"26 - 35 m",
2
],
[
"36 - 40 m",
2
]
],
[
[
"Rältemperatur\no\nC",
1
],
[
"Sä\nmin",
1
],
[
"Sä\nmax",
1
],
[
"Sä\nmin",
1
],
[
"Sä\nmax",
1
],
[
"Sä\nmin",
1
],
[
"Sä\nmax",
1
],
[
"Sä\nmin",
1
],
[
"Sä\nmax",
1
]
],
[
[
"-31 till -29",
1
],
[
"7",
1
],
[
"19",
1
],
[
"13",
1
],
[
"20",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
]
],
[
[
"-28 till -26",
1
],
[
"7",
1
],
[
"19",
1
],
[
"12",
1
],
[
"20",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
]
],
[
[
"-25 till -23",
1
],
[
"7",
1
],
[
"19",
1
],
[
"11",
1
],
[
"20",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
]
],
[
[
"-22 till -20",
1
],
[
"6",
1
],
[
"18",
1
],
[
"11",
1
],
[
"20",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
],
[
"",
1
]
],
[
[
"-19 till -17",
1
],
[
"6",
1
],
[
"18",
1
],
[
"10",
1
],
[
"20",
1
],
[
"12",
1
],
[
"20",
1
],
[
"",
1
],
[
"",
1
]
],
[
[
"-16 till -14",
1
],
[
"6",
1
],
[
"18",
1
],
[
"9",
1
],
[
"20",
1
],
[
"11",
1
],
[
"20",
1
],
[
"11",
1
],
[
"20",
1
]
],
[
[
"-13 till -11",
1
],
[
"5",
1
],
[
"17",
1
],
[
"9",
1
],
[
"20",
1
],
[
"10",
1
],
[
"20",
1
],
[
"10",
1
],
[
"20",
1
]
],
[
[
"-10 till -8",
1
],
[
"5",
1
],
[
"17",
1
],
[
"8",
1
],
[
"20",
1
],
[
"9",
1
],
[
"20",
1
],
[
"9",
1
],
[
"20",
1
]
],
[
[
"-7 till -5",
1
],
[
"5",
1
],
[
"17",
1
],
[
"7",
1
],
[
"20",
1
],
[
"8",
1
],
[
"20",
1
],
[
"7",
1
],
[
"20",
1
]
],
[
[
"-4 till -2",
1
],
[
"4",
1
],
[
"16",
1
],
[
"6",
1
],
[
"20",
1
],
[
"7",
1
],
[
"20",
1
],
[
"6",
1
],
[
"20",
1
]
],
[
[
"-1 till +1",
1
],
[
"4",
1
],
[
"16",
1
],
[
"6",
1
],
[
"20",
1
],
[
"6",
1
],
[
"20",
1
],
[
"4",
1
],
[
"20",
1
]
],
[
[
"+2 till +4",
1
],
[
"4",
1
],
[
"16",
1
],
[
"5",
1
],
[
"19",
1
],
[
"4",
1
],
[
"20",
1
],
[
"3",
1
],
[
"20",
1
]
],
[
[
"+5 till +7",
1
],
[
"3",
1
],
[
"15",
1
],
[
"4",
1
],
[
"18",
1
],
[
"3",
1
],
[
"19",
1
],
[
"2",
1
],
[
"20",
1
]
],
[
[
"+8 till +10",
1
],
[
"3",
1
],
[
"15",
1
],
[
"4",
1
],
[
"18",
1
],
[
"2",
1
],
[
"18",
1
],
[
"0",
1
],
[
"18",
1
]
],
[
[
"+11 till +13",
1
],
[
"3",
1
],
[
"15",
1
],
[
"3",
1
],
[
"17",
1
],
[
"1",
1
],
[
"17",
1
],
[
"0",
1
],
[
"17",
1
]
],
[
[
"+14 till +16",
1
],
[
"2",
1
],
[
"14",
1
],
[
"2",
1
],
[
"16",
1
],
[
"0",
1
],
[
"16",
1
],
[
"0",
1
],
[
"16",
1
]
],
[
[
"+17 till +19",
1
],
[
"2",
1
],
[
"14",
1
],
[
"2",
1
],
[
"16",
1
],
[
"0",
1
],
[
"15",
1
],
[
"0",
1
],
[
"14",
1
]
],
[
[
"+20 till +22",
1
],
[
"2",
1
],
[
"14",
1
],
[
"1",
1
],
[
"15",
1
],
[
"0",
1
],
[
"14",
1
],
[
"0",
1
],
[
"13",
1
]
],
[
[
"+23 till +25",
1
],
[
"1",
1
],
[
"13",
1
],
[
"0",
1
],
[
"14",
1
],
[
"0",
1
],
[
"13",
1
],
[
"0",
1
],
[
"11",
1
]
],
[
[
"+26 till +28",
1
],
[
"1",
1
],
[
"13",
1
],
[
"0",
1
],
[
"14",
1
],
[
"0",
1
],
[
"12",
1
],
[
"0",
1
],
[
"10",
1
]
],
[
[
"+29 till +31",
1
],
[
"1",
1
],
[
"13",
1
],
[
"0",
1
],
[
"13",
1
],
[
"0",
1
],
[
"11",
1
],
[
"0",
1
],
[
"9",
1
]
],
[
[
"+32 till +34",
1
],
[
"0",
1
],
[
"12",
1
],
[
"0",
1
],
[
"12",
1
],
[
"0",
1
],
[
"10",
1
],
[
"",
1
],
[
"",
1
]
],
[
[
"+35 till +37",
1
],
[
"0",
1
],
[
"12",
1
],
[
"0",
1
],
[
"11",
1
],
[
"0",
1
],
[
"9",
1
],
[
"",
1
],
[
"",
1
]
],
[
[
"+38 till +40",
1
],
[
"0",
1
],
[
"11",
1
],
[
"0",
1
],
[
"11",
1
],
[
"0",
1
],
[
"8",
1
],
[
"",
1
],
[
"",
1
]
],
[
[
"",
6
],
[
"",
3
]
]
]
],
[
"p",
"Tabell 11 Säkerhetsgränsvärden för skarvöppnings storlek (mm) vid olika rältemperatur (°C) för olika rällängder"
]
]
},
"0311-tabell49-plattform": {
"dok": "TDOK 2021:0311 Säkerhetsbesiktning – Banöverbyggnad",
"rubrik": "Tabell 49 Säkerhetsgränser för plattform",
"block": [
[
"tabell",
[
[
[
"Plattformstyp",
1
],
[
"Avstånd B (mm)\nspårmitt-plattform⁵,⁶",
1
],
[
"Höjd H (mm) RÖK-plattformsöverkant",
1
]
],
[
[
"Låg",
1
],
[
"1520 ≤ B ≤ 1650",
1
],
[
"H ≤ 380",
1
]
],
[
[
"Mellanhög",
1
],
[
"1650 ≤ B ≤ 1800",
1
],
[
"H ≤ 750",
1
]
],
[
[
"Hög",
1
],
[
"1650 ≤ B ≤ 1800",
1
],
[
"H ≤ 770",
1
]
]
]
],
[
"p",
"Tabell 49 Säkerhetsgränser för plattform"
]
]
},
"0311-tabell50-plattform": {
"dok": "TDOK 2021:0311 Säkerhetsbesiktning – Banöverbyggnad",
"rubrik": "Tabell 50 Ökning/minskning av breddmåttet B mht rälsförhöjning",
"block": [
[
"tabell",
[
[
[
"Plattformstyp",
1,
2
],
[
"Ökning/minskning av avståndet B",
2
]
],
[
[
"Insida (mm)",
1
],
[
"Utsida (mm)",
1
]
],
[
[
"Låg",
1
],
[
"+ha/4",
1
],
[
"-ha/4",
1
]
],
[
[
"Mellanhög",
1
],
[
"+ha/3",
1
],
[
"-ha/4",
1
]
],
[
[
"Hög",
1
],
[
"+ha/2",
1
],
[
"-ha/4",
1
]
]
]
],
[
"p",
"Tabell 50 Ökning/minskning av breddmåttet B mht rälsförhöjning (ha)"
]
]
},
"0311-tabell52-lastkaj": {
"dok": "TDOK 2021:0311 Säkerhetsbesiktning – Banöverbyggnad",
"rubrik": "Tabell 52 Säkerhetsgränser för lastkaj",
"block": [
[
"tabell",
[
[
[
"Lastkajstyp",
1
],
[
"Avstånd B (mm)\nspårmitt-lastkaj⁷",
1
],
[
"Höjd H (mm)\nRÖK-lastkajsöverkant",
1
]
],
[
[
"Ej hög lastkaj",
1
],
[
"B ≥ 1675",
1
],
[
"H ≤ 1190",
1
]
],
[
[
"Hög lastkaj",
1
],
[
"B ≥ 1720",
1
],
[
"-",
1
]
]
]
],
[
"p",
"Tabell 52 Säkerhetsgränser för lastkaj"
]
]
},
"0311-tabell53-lastkaj": {
"dok": "TDOK 2021:0311 Säkerhetsbesiktning – Banöverbyggnad",
"rubrik": "Tabell 53 Utvidgning i cirkulär kurva",
"block": [
[
"tabell",
[
[
[
"Kurvradie (m)",
1
],
[
"Utvidgning på insida U1 (mm)",
1
],
[
"Utvidgning på utsida Uy (mm)",
1
]
],
[
[
"100",
1
],
[
"530",
1
],
[
"570",
1
]
],
[
[
"120",
1
],
[
"340",
1
],
[
"370",
1
]
],
[
[
"140",
1
],
[
"290",
1
],
[
"240",
1
]
],
[
[
"150",
1
],
[
"270",
1
],
[
"210",
1
]
],
[
[
"e",
1
],
[
"230",
1
],
[
"170",
1
]
],
[
[
"200",
1
],
[
"210",
1
],
[
"160",
1
]
],
[
[
"240",
1
],
[
"170",
1
],
[
"130",
1
]
],
[
[
"270",
1
],
[
"150",
1
],
[
"120",
1
]
],
[
[
"300",
1
],
[
"140",
1
],
[
"110",
1
]
],
[
[
"350",
1
],
[
"120",
1
],
[
"90",
1
]
],
[
[
"400",
1
],
[
"100",
1
],
[
"80",
1
]
],
[
[
"500",
1
],
[
"80",
1
],
[
"60",
1
]
],
[
[
"600",
1
],
[
"70",
1
],
[
"50",
1
]
],
[
[
"800",
1
],
[
"50",
1
],
[
"40",
1
]
],
[
[
"1000",
1
],
[
"40",
1
],
[
"30",
1
]
],
[
[
"1500",
1
],
[
"30",
1
],
[
"20",
1
]
],
[
[
"2000",
1
],
[
"20",
1
],
[
"20",
1
]
],
[
[
"3000",
1
],
[
"20",
1
],
[
"10",
1
]
],
[
[
"5000",
1
],
[
"10",
1
],
[
"10",
1
]
]
]
],
[
"p",
"7 Utökas i enlighet med Tabell 53."
],
[
"p",
"Tabell 53 Utvidgning i cirkulär kurva"
]
]
},
"spiral-2-5": {
"dok": "Instruktionsbok spiralbromsar (rangerbroms BZFF), ritning 805970, version 1.4",
"rubrik": "2.5 Räls och vagnshjul",
"block": [
[
"h",
"2.5 Räls och vagnshjul"
],
[
"p",
"Bild 5. Räls och vagnshjul"
],
[
"figur",
"img/tdok/fig/spiral-2-5-1.png",
""
],
[
"p",
"Stativet är anpassat för följande standardräls: SJ50, SJ46, SJ43, S49, K54, DSB V, UJ48. Stativets instyrningslängd och vinkel, är konstruerade för en flänsränna som inte får överstiga 85 mm [Bild 5]."
]
]
},
"spiral-3-7": {
"dok": "Instruktionsbok spiralbromsar (rangerbroms BZFF), ritning 805970, version 1.4",
"rubrik": "3.7 Slutkontroll av bromsen",
"block": [
[
"h",
"3.7 Slutkontroll av bromsen"
],
[
"p",
"För att säkra kvalitén på installationen och undvika misstag bör ett protokoll upprättas, innehållande följande uppgifter:"
],
[
"li",
0,
"-",
"Bromsens individnummer och placering på bangården."
],
[
"li",
0,
"-",
"Höjd över RÖK i uppfällt och nerfällt läge."
],
[
"li",
0,
"-",
"Datum för idrifttagning"
],
[
"p",
"Före idrifttagande skall bromsmontaget kontrolleras och manöverprov genomföras. Här följer ett förslag till checklista:"
],
[
"li",
0,
"1.",
"Kontrollera bromsens infästning i höjd- och sidled."
],
[
"li",
0,
"2.",
"Kontrollera att smörjning av stativlagringarna är utförd."
],
[
"li",
0,
"3.",
"Kontrollera att alla skruvar och muttrar är dragna till rätt moment."
],
[
"ruta",
"Varning",
"Vridning av bromscylindern får ej göras för hand. Stor risk för klämskador mellan spiralkam och räls."
],
[
"li",
0,
"4.",
"Kontrollera att luftcylindern går helt fri från ballasten."
],
[
"li",
0,
"5.",
"Kontrollera att vriddonet spärrar i uppfällt läge. I uppfällt läge skall den med avlastad torsionsfjäder kunna falla in av sig själv mot stoppklackarna från ett avstånd av ca 15 mm från rälshuvudet."
],
[
"li",
0,
"6.",
"Vrid bromsen till rätt utgångsläge."
],
[
"ruta",
"Varning",
"Tryckluften får ej kopplas på och vriddonen manövreras medan monteringsarbete pågår. Risk för klämskador."
]
]
},
"spiral-3-8": {
"dok": "Instruktionsbok spiralbromsar (rangerbroms BZFF), ritning 805970, version 1.4",
"rubrik": "3.8 Åtgärder efter idrifttagning",
"block": [
[
"h",
"3.8 Åtgärder efter idrifttagning"
],
[
"ruta",
"Varning",
"Tryckluften får ej kopplas på och vriddonen manövreras medan monteringsarbete pågår. Risk för klämskador."
],
[
"p",
"Sedan rangerbromsarna tagits i drift skall skruvar och muttrar efterdras, stativens axialspel och bromsspiralens avstånd till räls kontrolleras och justeras enligt följande schema:"
],
[
"p",
"Dagen efter idrifttagning eller sedan bromsen passerats av några vagnar:"
],
[
"li",
0,
"-",
"Efterdrag klämförbandens muttrar."
],
[
"p",
"Efter ca 2000 hjulpassager:"
],
[
"li",
0,
"-",
"Efterdrag stativfästenas muttrar."
],
[
"li",
0,
"-",
"Kontrollera och justera vid behov stativets axialspel enligt avsnitt 3.5, punkt 7."
],
[
"p",
"Efter ca 10 000 hjulpassager:"
],
[
"li",
0,
"-",
"Efterdrag stativfästenas muttrar."
],
[
"li",
0,
"-",
"Efterdrag skruvarna för bromscylinderns infästning."
],
[
"li",
0,
"-",
"Efterdrag skruvarna för vriddonet."
],
[
"li",
0,
"-",
"Kontrollera och justera vid behov stativets axialspel enligt avsnitt 3.5, punkt 7."
],
[
"li",
0,
"-",
"Kontrollera att avståndet mellan räls och spiralkam. Justera vid behov enligt avsnitt 4.4.4"
]
]
},
"spiral-4-4-2": {
"dok": "Instruktionsbok spiralbromsar (rangerbroms BZFF), ritning 805970, version 1.4",
"rubrik": "4.4.2 Åtdragningsmoment",
"block": [
[
"h",
"4.4.2 Åtdragningsmoment"
],
[
"p",
"Bild 13: Åtdragningsmoment"
],
[
"figur",
"img/tdok/fig/spiral-4-4-2-1.png",
""
],
[
"p",
"Kontrollera åtdragningsmomenten för skruvar och muttrar. Kontrollen sker genom stickprov på var tionde broms. Vid vallen kontrolleras var femte broms. Vid behov kontrolleras och justeras åtdragningsmomenten till rekommenderade värden. OBS! Två olika ögleskruvar kan förekomma. Gammal typ (svart) som skall dras med det lägre momentet och ny typ (ljusgrå, färgvariationer kan förekomma) som skall dras med det högre momentet. Blanda aldrig ny och gammal typ av ögleskruv på samma stativ."
]
]
},
"spiral-4-4-4": {
"dok": "Instruktionsbok spiralbromsar (rangerbroms BZFF), ritning 805970, version 1.4",
"rubrik": "4.4.4 Bromsens sidoläge till räls",
"block": [
[
"h",
"4.4.4 Bromsens sidoläge till räls"
],
[
"p",
"Bild 14: Justering av bromsens infästning till räls"
],
[
"figur",
"img/tdok/fig/spiral-4-4-4-1.png",
""
],
[
"p",
"Kontrollera bromsens sidoläge till räls. [Bild 14]. Om avståndet mellan spiralkammen och rälshuvudet är mindre än 1,5 mm eller större än 2,5 mm skall sidoläget justeras. Det sker genom att lägga in, ta bort eller byta shimsbrickor under stoppbulten. När bromsens sidoläge justerats kontrolleras även bromsens höjdläge till RÖK i ut- och ingångsänden enligt avsnitt 4.5.1."
],
[
"p",
"Justering av bromsen läge i förhållande till rälshuvudet sker separat i båda ändarna enligt följande:"
],
[
"ruta",
"Varning",
"Tryckluften får ej kopplas på och vriddonen manövreras medan monteringsarbete pågår. Risk för klämskador."
],
[
"li",
0,
"1.",
"Fäll upp bromsen och stäng av tryckluften."
],
[
"li",
0,
"2.",
"Demontera stoppbulten i utgångsänden."
],
[
"li",
0,
"3.",
"Justera minsta rälsavståndet till 1,5 -2,5 mm för spiralkammens främre halva med shimsbrickor under stoppbulten i ingångsänden."
],
[
"li",
0,
"4.",
"Demontera stoppbult och shimsbrickor vid ingångsänden."
],
[
"li",
0,
"5.",
"Smörj stoppbulten vid utgångsänden med fett och återmontera den. Justera minsta rälsavståndet till 1,5 -2,5 mm för spiralkammens bakre halva med shimsbrickor under stoppbulten i utgångsänden."
],
[
"li",
0,
"6.",
"Smörj stoppbulten vid ingångsänden med fett och återmontera den tillsammans med shimsbrickorna."
],
[
"li",
0,
"7.",
"Koppla på tryckluften."
]
]
},
"spiral-4-5-1": {
"dok": "Instruktionsbok spiralbromsar (rangerbroms BZFF), ritning 805970, version 1.4",
"rubrik": "4.5.1 Bromsens höjdläge till räls",
"block": [
[
"h",
"4.5.1 Bromsens höjdläge till räls"
],
[
"p",
"Kontrollera bromsens höjd över RÖK [Bild 14]. Vid nymontage skall bromsens infästningsmått till räls vara 118-120 mm. Ligger den befintliga bromshöjden utanför 118 -125 mm över RÖK skall infästningsmåttet justeras enligt följande:"
],
[
"ruta",
"Varning",
"Tryckluften får ej kopplas på och vriddonen manövreras medan monteringsarbete pågår. Risk för klämskador."
],
[
"li",
0,
"1.",
"Fäll ned bromsen och stäng av tryckluften."
],
[
"li",
0,
"2.",
"Demontera båda stoppbultarna och shimsbrickorna. Fäll upp bromsen för hand och lägg en 2,5 mm tjock plåt mellan spiralkam och rälshuvud."
],
[
"li",
0,
"3.",
"Lossa stativhållarnas klämförband och släpp ner det inre fästet."
],
[
"li",
0,
"4.",
"Justera med ställskruven bromsens höjd över RÖK vid in- och utgångsändarna till 118 -120 mm. Smörj ögleskruvarnas gängor, brickor och muttrar med olja. Dra åt muttrarna med ett lätt åtdragningsmoment."
],
[
"li",
0,
"5.",
"Justera axialspelet enligt avsnitt 3.5, punkt 7."
],
[
"li",
0,
"6.",
"Fäll ner bromsen och kontrollera att höjdmåttet är max. 55 mm."
],
[
"li",
0,
"7.",
"Koppla på tryckluften."
]
]
}
};
