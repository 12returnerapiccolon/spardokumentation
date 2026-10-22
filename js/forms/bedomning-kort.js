// Bedömningsstöden som text, avskrivna från tabellerna i TDOK 2021:0311 och 0334.
// Genereras med tools/bedomning_kort.py. Nyckel: tabellnummer, eller 0334-vag.
export default {
 "0334-vag": {
  "namn": "Bedömningsstöd Väg-/gångbana",
  "rader": [
   {
    "punkt": "1. Vägbeläggningens höjd över RÖK",
    "rad": "Kontrollera att vägbeläggningen inte är lägre än RÖK, vilket medför risk att vägfordon kör sönder spåret.\nB4-B5: Kontrollera att vägbeläggningen inte når högre än 30 mm över RÖK, vilket medför risk att vägtrafik fastnar eller skadas.\nB1-B3: Kontrollera att vägbeläggningen inte når högre än 50 mm över RÖK, vilket medför risk att vägtrafik fastnar eller skadas.",
    "v": "Vägbeläggning är lägre än spår.",
    "m": "B4-B5: Vägbeläggningen når högre än 30 mm över RÖK.\nB1-B3: Vägbeläggningen når högre än 50 mm över RÖK."
   },
   {
    "punkt": "2a. Plattor: Små betongplattor",
    "rad": "Kontrollera att plattor inte glidit isär, är trasiga eller saknas.",
    "akut": "Platta i mitten av plankorsningen saknas.",
    "v": "Platta i någon ände saknas.",
    "m": "Trasiga eller glidit isär.\nExempel 1a\nExempel 1b\nExempel 1c\nExempel 1d"
   },
   {
    "punkt": "2b. Plattor: Stora betongplattor",
    "rad": "Kontrollera att plattan inte är trasig.\nOm plankorsningen har gång-, cykel- eller mopedtrafik så beakta speciellt synliga armeringsjärn.",
    "m": "Trasig.\nExempel 1\nExempel 2\nExempel 3\nÄndstopp saknas."
   },
   {
    "punkt": "2c. Plattor: Gummiplattor",
    "rad": "Kontrollera att plattor inte glidit isär, är trasiga eller saknas.",
    "akut": "Platta i mitten av plankorsningen saknas.",
    "v": "Platta i någon ände saknas.",
    "m": "Trasiga eller glidit isär.\nÄndstopp saknas."
   },
   {
    "punkt": "3. Plankor",
    "rad": "Kontrollera att plankor inte är ruttna, trasiga, ligger löst eller saknas.",
    "v": "Saknas eller ruttna.",
    "m": "Trasiga eller ligger löst."
   },
   {
    "punkt": "4. Nedtrampningsskydd",
    "rad": "Kontrollera att eventuella nedtrampningsskydd är intakta. Beakta särskilt risken för att cyklister eller rullstolsburna fastnar eller trillar. Risken är större om vägen inte är vinkelrät mot järnvägen.",
    "v": "Saknas helt.\nDet är risk för att cyklister eller rullstolsburna fastnar eller trillar.",
    "m": "Saknas delvis. Det är inte risk för att cyklister eller rullstolsburna fastnar eller trillar."
   },
   {
    "punkt": "5. Beläggningen vid plankorsningen",
    "rad": "Kontrollera att vägbeläggning är intakt 5 meter från räls utsida.",
    "v": "Stora skador, exempelvis potthål eller trasig vägren.",
    "m": "Mindre skador på vägbeläggningen."
   },
   {
    "punkt": "6. Vägbeläggning inkräktar på utrymmet för järnvägshjulet",
    "rad": "Kontrollera att inga islag från järnvägshjul förekommer på vägbeläggningen. Titta särskilt i ingång och utgång av plankorsningen.",
    "akut": "Stora islag, vilket medför risk för tågurspårning: omedelbar trafikal åtgärd.",
    "v": "Mindre islag, vilket medför risk för sönderkörning av vägbana.",
    "m": "Märken på vägbanan av järnvägshjul."
   },
   {
    "punkt": "7. Flänsrännas bredd",
    "rad": "Kontrollera att flänsrännas bredd är max 80 mm och minst aktuell spårvidd minus 1375 mm. För bred flänsränna medför risk att vägtrafik fastnar eller skadas. För smal flänsränna medför risk att vägbanan blir sönderkörd av spårfordon.",
    "v": "Flänsränna bredare än 80 mm.\nFlänsränna smalare än aktuell spårvidd minus 1375 mm."
   },
   {
    "punkt": "8. Spårvidd",
    "rad": "Kontrollera att spårvidden inte överstiger 1455 mm på någon del av vägbanan.",
    "akut": "Spårvidd mer än 1455 mm. Omedelbar trafikal åtgärd.\nExempel 1a\nExempel 1b",
    "v": "Spårvidd 1445 - 1455 mm."
   },
   {
    "punkt": "9. Flänsrännor",
    "rad": "Kontrollera att inga föremål ligger i flänsrännorna. Föremål som når RÖK är allvarligare än föremål i botten på flänsrännan. Stora föremål är allvarligare än små föremål.",
    "v": "Stora föremål.\nExempel 1\nExempel 2",
    "m": "Små föremål.\nExempel",
    "b": "Mindre föremål.\nExempel"
   }
  ]
 },
 "10": {
  "namn": "Bedömningsstöd Rälskarv i skarvspår",
  "rader": [
   {
    "punkt": "1. Skarvskruv och mutter",
    "rad": "Kontrollera att skruvar och muttrar inte saknas eller sitter löst",
    "akut": "Alla skruvar saknas/ är lösa på ena sidan om skarven.",
    "v": "Max 2 eller 3 skruvar/ muttrar saknas/ är lösa beroende på typ av skarvjärn.\n*4-hålsjärn: 2 skruvar/muttrar saknas/ är lösa, dock inte på samma sida om skarv.\n*6-hålsjärn: 3 skruvar/muttrar saknas/ är lösa, dock inte på samma sida om skarv.",
    "m": "Max 1 eller 2 skruvar/ muttrar saknas/ är lösa beroende på typ av skarvjärn.\n*4-hålsjärn: 1 skruv/mutter saknas.\n*6-hålsjärn: 2 skruv/mutter saknas/ är lösa.",
    "b": "1 skruv är lös."
   },
   {
    "punkt": "2. Skarvjärn",
    "rad": "Kontrollera okulärt att det inte finns sprickor eller brott.",
    "akut": "Synlig spricka/brott i båda skarvjärnen.",
    "v": "Synlig spricka/brott i ett skarvjärn.",
    "m": "Annan defekt i skarvjärn än synlig spricka/brott.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Slitage",
    "rad": "Kontrollera okulärt om påkörningsmärken eller slitage finns på ovansida skarvjärn.",
    "akut": "Kraftigt slitage ovanpå skarvjärnet som kan riskera klättring av fordon.",
    "v": "Tydliga påkörningsmärken ovanpå skarvjärnet.",
    "m": "Antydan till påkörningsmärken ovanpå skarvjärnet.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "12": {
  "namn": "Bedömningsstöd Skarvöppning",
  "rader": [
   {
    "punkt": "1. Skarvöppning",
    "rad": "Observera att medelvärdesberäkning inte får användas vid jämförelse mot säkerhetsgränsvärden.\nOm skarvöppningarna ligger i en kurva, så överväg högre prioritet.",
    "akut": "Om fler än sex skarvöppningar i följd avviker från säkerhetsgränsvärdena enligt ovan.",
    "v": "Om fler än tre skarvöppningar i följd avviker från säkerhetsgränsvärdena enligt ovan.",
    "m": "Om tre eller färre skarvöppningar i följd avviker från säkerhetsgränsvärdena enligt ovan.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "13": {
  "namn": "Bedömningsstöd Rälvandringshinder/Heyback i skarvspår",
  "rader": [
   {
    "punkt": "1, 2, 3, 4",
    "rad": "Endast skarvspår med spikbefästning behöver kontrolleras."
   },
   {
    "punkt": "1, 3. Rällängder 31–40 m",
    "rad": "Kontrollera okulärt att rälvandring inte har skett.\nKontrollera okulärt att rälvandringshinder ligger an mot slipers (motsvarar saknat rälvandringshinder).\nRälvandringshinder kan ersättas av sliprar med Heybackbefästning och då ska antal och placering av dessa sliprar vara detsamma som rälvandringshinder.",
    "akut": "Alla rälvandringshinder, eller Heyback- befästningar, per räl saknas.",
    "v": "4 st eller fler, men inte alla, rälvandringshinder eller Heyback- befästningar per räl saknas.",
    "m": "1 - 3 st rälvandringshinder eller Heyback- befästningar per räl saknas.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2, 3. Rällängder 21–30 m",
    "rad": "Kontrollera okulärt att rälvandring inte har skett.\nKontrollera okulärt att rälvandringshinder ligger an mot slipers (motsvarar saknat rälvandringshinder).\nRälvandringshinder kan ersättas av sliprar med Heybackbefästning och då ska antal och placering av dessa sliprar vara detsamma som rälvandringshinder.",
    "akut": "Alla rälvandringshinder eller Heyback- befästningar, per räl, saknas.",
    "v": "3 st eller fler, men inte alla, rälvandringshinder eller Heyback- befästningar per räl saknas.",
    "m": "1 - 2 st rälvandringshinder eller Heyback- befästningar per räl saknas.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Avstånd från skarv",
    "rad": "Kontrollera att inga rälvandringshinder eller sliprar med Heybackbefästning sitter inom 5 sliperavstånd från rälskarv.",
    "akut": "Inte aktuellt.",
    "v": "Rälvandringshinder eller sliprar med Heybackbefästning sitter inom 5 sliperavstånd från rälskarv.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "14": {
  "namn": "Bedömningsstöd Skyddsräler",
  "rader": [
   {
    "punkt": "1a. Rätt läge höjd",
    "rad": "Skyddsrälernas överkant ska ligga på samma höjd som farrälernas eller som mest 40 mm under.",
    "akut": "Skyddsrälernas överkant ligger högre än farrälerna.",
    "v": "Skyddsrälernas överkant ligger lägre än 40 mm under farrälernas överkant.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1b. Rätt läge sida, till farräl, gällande byggmått eller bristfällig befästning",
    "rad": "På bro med direkt spåruppläggning: 250 mm. Dock ska, på en sträcka av minst ca. 4 meter, skyddsrälerna föras in mot spårmitt så att avståndet mellan skyddsräl och farräl blir 450 mm vid broöverbyggnaden.\nI övriga fall: 450 mm.",
    "akut": "Skyddsrälerna ligger i ett sådant läge i förhållande till farrälerna att det finns risk för urspårning.",
    "v": "Inte aktuellt.\nSkyddsrälerna är inte befästa på rätt sätt så att det finns risk för att de lossnar.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Skarvöppningar mellan skyddsrälerna",
    "rad": "Minst 30 mm skarvöppning.",
    "akut": "Skarvöppning är tät.",
    "v": "Skarvöppning <10 mm.",
    "m": "10 mm ≤ Skarvöppning < 30 mm.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Skarvöppningar mitt för baliser",
    "rad": "Minst 30 mm skarvöppning i båda skyddsrälerna mitt för balis.",
    "akut": "Skarvöppning är tät.",
    "v": "Skarvöppning <10 mm.",
    "m": "10 mm ≤ Skarvöppning < 30 mm.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Tillräckligt utrymme mellan rälfot och balis",
    "rad": "Skyddsräler får inte ha metallisk kontakt med I-rälen.",
    "akut": "Skyddsrälens rälfot har kontakt med balis.",
    "v": "Skyddsrälens rälfot riskerar att komma i kontakt med balis.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "15": {
  "namn": "Bedömningsstöd Ballastsektion",
  "intro": "För att man ska sätta en besiktningsanmärkning ska bristen eller överskottet gälla minst tre sliprar i följd.\nVid mått från slipers överkant gäller måttet för det vertikalt högsta eller lägsta värdet.",
  "rader": [
   {
    "punkt": "1a Ballastskuldra – Bredd från slipersände, R ≥ 500 m och STH ≤ 200 km/h (Brist)",
    "rad": "40 cm",
    "akut": "Bredd = 0 cm",
    "v": "Bredd ≤ 20 cm",
    "m": "20 < Bredd ≤ 30 cm",
    "b": "30 < Bredd < 40 cm"
   },
   {
    "punkt": "1a Ballastskuldra – Bredd från slipersände, STH > 200 km/h (Brist)",
    "rad": "50 cm",
    "akut": "Bredd = 0 cm",
    "v": "Bredd ≤ 20 cm",
    "m": "20 < Bredd ≤ 40 cm",
    "b": "40 < Bredd < 50 cm"
   },
   {
    "punkt": "1a Ballastskuldra – Bredd från slipersände, R < 500 m (Brist)",
    "rad": "55 cm",
    "akut": "Bredd = 0",
    "v": "Bredd ≤ 30 cm",
    "m": "30 < Bredd ≤ 45 cm",
    "b": "45 <Bredd < 55 cm"
   },
   {
    "punkt": "1a Ballastskuldra – Höjdskillnad mellan ballastnivå och slipers överkant vid slipersände, Alla radier och hastigheter. (Brist)",
    "rad": "I nivå med överkant slipersände",
    "akut": "Betong: nivå > 14 cm\nTrä: nivå > 12 cm",
    "v": "Betong: 10 < nivå ≤ 14 cm\nTrä: 8 < nivå ≤ 12 cm",
    "m": "Betong: 5 < nivå ≤ 10 cm\nTrä: 4 < nivå ≤ 8 cm",
    "b": "Betong: 2 < nivå ≤ 5 cm\nTrä: 2 < nivå ≤ 4 cm"
   },
   {
    "punkt": "1a Ballastskuldra – Höjdskillnad mellan ballastnivå och slipers överkant vid slipersände, Alla radier och hastigheter. (Överskott)",
    "rad": "I nivå med överkant slipersände",
    "akut": "Inte aktuellt",
    "v": "Inte aktuellt",
    "m": "Ballastnivå över överkant sliperände > 7 cm eller riskerar att hamna på slipern",
    "b": "4 ≤ nivå ≤ 7 cm"
   },
   {
    "punkt": "1a Ballastskuldra – Överhöjning av yttre skuldra, R < 400 m (Brist)",
    "rad": "Yttre skuldra: Överhöjning 10 cm",
    "m": "Överhöjning ≤ 5 cm",
    "b": "5 < överhöjning < 8 cm"
   },
   {
    "punkt": "1a Ballastskuldra – Överhöjning av yttre skuldra, R < 400 m (Överskott)",
    "rad": "Yttre skuldra: Överhöjning 10 cm",
    "b": "Överhöjning > 14 cm"
   },
   {
    "punkt": "1b Ballastnivå mellan räler, STH ≤ 160 km/h – Höjdskillnad mellan ballastnivå och slipers överkant mätt mellan räler (Brist)",
    "rad": "I nivå med slipers överkant (sliperslångsidan mellan räler inte är synlig)",
    "akut": "Betong: nivå > 14 cm\nTrä: nivå > 12 cm",
    "v": "Betong: 10 < nivå ≤ 14 cm\nTrä: 8 < nivå ≤ 12 cm",
    "m": "Betong: 5 < nivå ≤ 10 cm\nTrä: 4 < nivå ≤ 8 cm",
    "b": "Betong: 2 < nivå ≤ 5 cm\nTrä: 2 < nivå ≤ 4 cm"
   },
   {
    "punkt": "1b Ballastnivå mellan räler, STH ≤ 160 km/h – Höjdskillnad mellan ballastnivå och slipers överkant mätt mellan räler (Överskott)",
    "rad": "I nivå med slipers överkant",
    "m": "Nivå över överkant > 3 cm",
    "b": "1 < nivå över överkant ≤ 3 cm"
   },
   {
    "punkt": "2 Ballastnivå mellan räler, STH > 160 km/h – Höjdskillnad mellan ballastnivå och slipers överkant mätt mellan räler (Brist)",
    "rad": "3 – 4 cm under slipers överkant",
    "akut": "Betong: nivå > 14 cm",
    "v": "Betong: 10 < nivå ≤ 14 cm",
    "m": "Betong: 6 < nivå ≤ 10 cm",
    "b": "Betong: 5 < nivå ≤ 6 cm"
   },
   {
    "punkt": "2 Ballastnivå mellan räler, STH > 160 km/h – Höjdskillnad mellan ballastnivå och slipers överkant mätt mellan räler (Överskott)",
    "rad": "3 – 4 cm under slipers överkant",
    "v": "nivå över överkant > 3 cm",
    "m": "0 ≤ nivå över överkant < 3 cm",
    "b": "0 < nivå under överkant < 3 cm"
   },
   {
    "punkt": "3 Ballast på sliper – Ballast på slipers ovansida (Överskott)",
    "rad": "Ballast på slipers ovansida (både mellan räler och utanför)",
    "akut": "Kontinuerlig förekomst av ballast på slipers ovansida\nSTH > 160 km/h",
    "v": "Kontinuerlig förekomst av ballast på slipers ovansida",
    "m": "Förekomst av ballast på slipers ovansida i mer än enstaka fall",
    "b": "Förekomst av ballast på slipers ovansida i enstaka fall"
   }
  ]
 },
 "16": {
  "namn": "Bedömningsstöd Tunganordning",
  "rader": [
   {
    "punkt": "1. Stödknapar",
    "rad": "Kontrollera att stödknapar inte saknas eller sitter löst.",
    "akut": "Stödknap saknas.",
    "v": "Stödknap sitter lös.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Tungor och stödräler",
    "rad": "Kontrollera att slitage på tungor och stödräler vid tungspets och inne på tungan är inom tillåtna gränser.",
    "akut": "Slitaget på tunga eller stödräl vid tungspets eller inne på tungan är utanför tillåtna gränser.",
    "v": "Slitaget på tunga eller stödräl vid tungspets eller inne på tungan är nära tillåtna gränser.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Tungspets och stödräl",
    "rad": "Kontrollera att glapp mellan tungspets och stödräl är max 2 mm.",
    "akut": "Glapp > 2 mm mellan tungspets och stödräl.\nExempel:\nBild 2. Glapp > 2 mm",
    "v": "Inte aktuellt.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Skyddsklotsning",
    "rad": "Kontrollera att skyddsklotsning inte saknas eller sitter löst (Arb). Gäller för spårväxlar som ska vara utrustade med skyddsklotsning enligt uppgift från beställare eller anläggningsregister.\nExempel:\nBild 3. Monterad skyddsklots",
    "akut": "Skyddsklotsning saknas.",
    "v": "Skyddsklotsning defekt eller lös.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "17": {
  "namn": "Bedömningsstöd Korsning (generellt)",
  "rader": [
   {
    "punkt": "1. Skruvar och muttrar",
    "rad": "Kontrollera att skruvar och muttrar inte saknas eller sitter löst.",
    "akut": "Två eller fler skruvar / muttrar saknas eller sitter löst.\nExempel:\nBild 4. Lösa skruvar.",
    "v": "En skruv / mutter saknas eller sitter löst.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Sprickor eller skador",
    "rad": "Kontrollera att synliga sprickor eller skador inte förekommer.",
    "akut": "Synlig spricka, skador som lösa bitar eller materialbortfall.\nSpricka upp från foten L>130mm eller L>100 som viker av i annan riktning.\nExempel:\nBild 5. Spricka upp från foten på korsningen.\nBild 6. Skador på spets och vingräl.\nBild 7. Material borta från vingräl.\nBild 8. Tvärspricka vingräl, materialbortfall inom kort.\nBild 9. Sprickor vingräl material håller på att lossna.\nBild 10. Skada vingräl.\nBild 11. Tvärspricka spets.",
    "v": "Mindre ytliga skador.\nSpricka upp från foten L>85mm.\nExempel: Slagmärken eller utvalsning.\nBild 12. Övervalsning spets.\nBild 13. Övervalsning skarp kant på vingräl.\nBild 14. Mindre skada på vingräl.\nBild 15. Ytdefekter spets och övervalsning vingräl.\nBild 16. Mindre skador spets och vingräl (spalling).",
    "m": "Mindre ytliga defekter.\nSpricka upp från foten.\nExempel:\nBild 17. Övervalsning mellan spetsräler.\nBild 18. Farkantsprickor där material släppt från korsningsben.\nBild 19. Små defekter på korsningsspets.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Flänsrännor",
    "rad": "Kontrollera att flänsrännor är fria från föroreningar.",
    "akut": "Inte aktuellt.",
    "v": "Föroreningar i flänsrännor.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "18": {
  "namn": "Bedömningsstöd Korsning med fast spets",
  "rader": [
   {
    "punkt": "1. Skyddsklotsning",
    "rad": "Kontrollera att skyddsklotsning inte saknas eller sitter löst (Arb). Gäller för spårväxlar som ska vara utrustade med skyddsklotsning enligt uppgift från beställare eller anläggningsregister.",
    "akut": "Skyddsklotsning saknas.",
    "v": "Skyddsklotsning defekt eller lös.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "19": {
  "namn": "Bedömningsstöd Korsning med rörlig spets",
  "rader": [
   {
    "punkt": "1. Plattan, där drag- och kontrollstänger är infästa",
    "rad": "Kontrollera att plattan, där drag- och kontrollstänger är infästa, är väl fastskruvad och att skruvarna är låsta. (Gäller inte ES)",
    "akut": "Skruv är lös eller inte låst.",
    "v": "Defekt låsbleck.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Korsningsspetsen",
    "rad": "Kontrollera okulärt att korsningsspetsen ligger an mot vingrälen i såväl höger- som vänsterläge.",
    "akut": "Glapp > 3 mm.",
    "v": "Glapp 2-3 mm.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Slitage på korsningsspets och vingräler",
    "rad": "Kontrollera med mall TRVINFRA- 00017 Banöverbyggnad Spårväxel, kapitel 9.3 Säkerhetsbesiktning.",
    "akut": "Utanför tillåtna gränsvärden.",
    "v": "På gränsen till tillåtna gränsvärden.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "20": {
  "namn": "Bedömningsstöd Moträl",
  "rader": [
   {
    "punkt": "1. Fastsättning",
    "rad": "Kontrollera att moträlen sitter fast.",
    "akut": "Skruv lös eller saknas.",
    "v": "Inte aktuellt.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Sprickor eller skador",
    "rad": "Kontrollera att synliga sprickor eller skador inte förekommer.",
    "akut": "Synlig spricka, skador som lösa bitar eller materialbortfall.",
    "v": "Större ytliga defekter",
    "m": "Mindre ytliga defekter.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Flänsränna",
    "rad": "Kontrollera att flänsrännor är fria från föroreningar.",
    "akut": "Inte aktuellt.",
    "v": "Föroreningar finns.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Skyddsklotsning",
    "rad": "Kontrollera att skyddsklotsning inte saknas eller sitter löst (Arb). Gäller för spårväxlar som ska vara utrustade med skyddsklotsning enligt uppgift från beställare eller anläggningsregister.",
    "akut": "Skyddsklotsning saknas.",
    "v": "Skyddsklotsning defekt eller lös.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "21": {
  "namn": "Bedömningsstöd Snöskydd",
  "rader": [
   {
    "punkt": "1. Fastsättning",
    "rad": "Kontrollera att snöskyddens fastsättning är utan anmärkning, avser alla ingående detaljer.",
    "akut": "Detaljer i snöskydd saknas eller sitter löst på ett sådant sätt de riskerar att fastna i tåg.",
    "v": "Detaljer i snöskydd saknas eller sitter löst",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Stångkåpa",
    "rad": "Kontrollera att stångkåpa i växlar med staggrop inte saknas eller är defekt så att det finns risk att någon trampar i.",
    "akut": "Stångkåpa sitter löst och riskerar att fastna i tåg.",
    "v": "Stångkåpa saknas eller är defekt.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "3": {
  "namn": "Bedömningsstöd Okulär kontroll",
  "rader": [
   {
    "punkt": "1, 2 - a. Slirsår",
    "rad": "Stora slirsår kan leda till rälsbrott. Allvarligare vid kall väderlek, vintertid.",
    "akut": "Stora slirsår (flera) som har tendens till sprickor som kan leda rälsbrott.",
    "v": "Stora slirsår (flera) Ingen tendens till synliga sprickor.",
    "m": "Slirsår (enstaka).",
    "b": "Mindre slirsår."
   },
   {
    "punkt": "1, 2 - b. Head checks",
    "rad": "I kurvor med spårlägesfel (sidoläge) samt på sträckor med saknade befästningar eller brister på befästningar, bör head checks bedömas som allvarligare då konsekvenserna kan bli allvarligare.",
    "akut": "Head checks i kurva med materialbortfall i kombination med saknade befästningar och spårlägesfel.",
    "v": "Head checks i rakspår med materialbortfall i kombination med saknade befästningar och spårlägesfel.",
    "m": "Head checks med enstaka materialbortfall.",
    "b": "Head checks utan materialbortfall."
   },
   {
    "punkt": "1, 2 - c. Sprickor",
    "rad": "Viss hjälp med åtgärdsprioritet, se riktlinjer för bedömning som finns i kapitel 10, TRVINFRA-00015 Banöverbyggnad Oförstörande provning.",
    "akut": "Rälsbrott och mycket allvarligt spruckna räler, t.ex. vertikalsprickor.",
    "v": "Allvarliga men inte akuta fel.",
    "m": "Fel som kan växa till allvarliga sprickor inom snar framtid.",
    "b": "Fel som kan växa till på längre sikt.\nBesiktningen omfattar även grupp 2-fel enl. OFP."
   },
   {
    "punkt": "1,2 - d. Rälhuvudslitage",
    "rad": "Räler med huvudslitage ska bytas om spårviddens minimivärde underskrids och graderna inte kan bearbetas bort i spåret.\nRäler med huvudslitage ska bytas om slitaget överskrider värden enligt nedan.\nJämförbart slitage\nH = h + s/2\növerskrider värden (mm):\n60E1: ≥30 ton 14, 25 ton 16, ≤22,5 ton 16\n50E3: ≥30 ton 11, 25 ton 13, ≤22,5 ton 13\nSJ43: ≥30 ton -, 25 ton -, ≤22,5 ton 13\nSidoslitaget överskrider:\n1. 16 mm vid STAX ≥ 30 ton\n2. 18 mm vid STAX ≤ 25 ton.",
    "akut": "Spårviddens minimivärde underskrids p.g.a. utvalsad farkant.\nDär isolerskarv/rälskarv finns och sidoslitaget överskrider:\n1. 16 mm vid STAX ≥ 30 ton\n2. 18 mm vid STAX ≤ 25 ton.\nRisk för klättring är uppenbar.",
    "v": "Spårviddens minimivärde riskerar att underskridas om inte åtgärd genomförs inom två veckor.\nDär isolerskarv/rälskarv finns och sidoslitaget tangerar:\n1. 16 mm vid STAX ≥ 30 ton\n2. 18 mm vid STAX ≤ 25 ton.\nRisk för klättring inom snar framtid.",
    "m": "Spårviddens minimivärde riskerar att underskridas om inte åtgärd genomförs inom tre månader.\nJämförbart slitage, H, eller sidoslitage, s, överskrider tillåtet slitage.",
    "b": "Sakta ökande huvudbredd som kontrolleras vid nästa besiktningstillfälle för ny bedömning.",
    "tabell": true
   },
   {
    "punkt": "5. Vita markeringar",
    "rad": "Kontrollera att vita markeringar på räl är registrerade i underhållssystemet som anmärkning (felgrupp 1 och 2).",
    "akut": "Inte aktuellt.",
    "v": "Vit markering finns på rälen men inte i besiktningssystemet.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "4": {
  "namn": "Bedömningsstöd Gaturäl",
  "rader": [
   {
    "punkt": "1. Ledskena",
    "rad": "Kontrollera om det finns skador eller sprickor.",
    "akut": "Stora skador som påverkar spårvidden eller utrymmet för hjulets fläns.",
    "v": "Medelstora skador som kan leda till onormalt slitage.",
    "m": "Mindre skador som kan leda till onormalt slitage.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Anslutande material/ ytlager",
    "rad": "Kontrollera om omkringliggande material och ytlager har sprickor eller saknar material.",
    "akut": "Stor avsaknad av anslutande material eller ytlager som kan leda till att rälen förlorar sitt sidostöd.",
    "v": "Stor mängd sprickor i anslutande material eller ytlager som kan leda till att rälen förlorar sitt sidostöd.",
    "m": "Mindre mängd sprickor i anslutande material eller ytlager.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Beläggning",
    "rad": "Kontrollera att beläggningen ligger nära rälen på både ut- och insida och inte ligger över RÖK.",
    "akut": "Stor avsaknad av beläggning som kan leda till att rälen förlorar stöd, i kombination med att beläggningen ligger högre än RÖK.",
    "v": "Stor avsaknad av anslutande beläggning som kan leda till att rälen förlorar stöd.",
    "m": "Mindre mängd sprickor i anslutande beläggning.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Dränering",
    "rad": "Kontrollera att vatten inte samlats i flänsrännan och att flänsrännan kan dränera. Beakta detta särskilt under vinterhalvåret när is kan bildas i flänsrännan.",
    "akut": "Daglig trafikering.",
    "v": "Trafikering varje vecka.",
    "m": "Trafikering varje månad.",
    "b": "Trafikering 1-2 ggr/år."
   },
   {
    "punkt": "5. Flänsrännor",
    "rad": "Kontrollera att flänsrännor är fria från främmande föremål. Beakta detta särskilt om rälen är placerad i kurva.",
    "akut": "Flänsränna är helt fylld av främmande föremål. Detta ger stor risk för urspårning.",
    "v": "Flänsränna är till hälften fylld av främmande föremål. Detta ger ökad risk för urspårning.",
    "m": "Flänsrännan är till mindre än hälften fylld av främmande föremål.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "6. Slitage",
    "rad": "Gäller för följande gaturälprofil: GATU 56, ny benämning 57R1",
    "akut": "h >13 mm\ns >14 mm\nf >7 mm",
    "v": "12 < h ≤ 13 mm\n13 < s ≤ 14 mm\n6 < f ≤ 7 mm",
    "m": "11 < h ≤ 12 mm\n12 < s ≤ 13 mm\n5 < f ≤ 6 mm",
    "b": "Inte aktuellt"
   },
   {
    "punkt": "7. Spårvidd",
    "rad": "Manuell mätning med typ SOLA-pass.",
    "akut": "1470 mm < Spårvidd ≤ 1472 mm: STH 40\nSpårvidd >1472 mm: Trafikstopp\nSpårvidd < 1425 mm: Trafikstopp",
    "v": "1465 mm < Spårvidd ≤1470 mm\n1425 ≤ Spårvidd < 1430 mm",
    "m": "1457 < Spårvidd ≤1465 mm\n1430 ≤ Spårvidd < 1431 mm",
    "b": "Inte aktuellt"
   }
  ]
 },
 "5": {
  "namn": "Bedömningsstöd Sliprar",
  "rader": [
   {
    "punkt": "1a. Sliperbrott Betongsliprar",
    "rad": "Brott vid befästning eller i kurva är allvarligare.",
    "akut": "Så många sliprar, i följd eller nära varandra, är av/spruckna, att det finns risk för urspårning.",
    "v": "Tre sliprar i rad är av/spruckna, dock utan att det finns risk för urspårning.",
    "m": "Två sliprar i rad är av/spruckna.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1b. Sliperbrott Träsliprar",
    "rad": "Brott vid befästning eller i kurva är allvarligare.",
    "akut": "Så många sliprar, i rad eller nära varandra, är av eller så drabbade av röta att de tappat sin funktion, att det finns risk för urspårning.",
    "v": "Tre sliprar i rad är av eller så drabbade av röta att de tappat sin funktion, dock utan att det finns risk för urspårning.",
    "m": "Två sliprar i rad är av eller så drabbade av röta att de tappat sin funktion.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "51": {
  "namn": "Bedömningsstöd Plattform",
  "rader": [
   {
    "punkt": "1a. Plattformens gränsvärde i rakspår (låg)",
    "rad": "Kontrollera att värdena för plattformen är inom säkerhetstoleranserna.",
    "akut": "Avstånd från spårmitt till plattformskant är kortare än 1510 mm.\nAvstånd från plattformskant är större än 1700 mm.\nHöjdavstånd från RÖK till plattformskant är högre än 385 mm.",
    "v": "Inte aktuellt.",
    "m": "Avstånd från spårmitt till plattformskant är 1510–1520 mm.\nAvstånd från spårmitt till plattformskant är 1650-1700 mm.\nHöjdavstånd från RÖK till plattformskant är 380-385 mm.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1b. Plattformens gränsvärde i rakspår (mellanhög)",
    "rad": "Kontrollera att värdena för plattformen är inom säkerhetstoleranserna.",
    "akut": "Avstånd från spårmitt till plattformskant är kortare än 1635 mm.\nAvstånd från plattformskant är större än 1850.\nHöjdavstånd från RÖK till plattformskant är högre än 800 mm.",
    "v": "Inte aktuellt.",
    "m": "Avstånd från spårmitt till plattformskant är 1635–1650 mm.\nAvstånd från spårmitt till plattformskant är 1800-1850 mm.\nHöjdavstånd från RÖK till plattformskant är 750-800 mm.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1c. Plattformens gränsvärde i rakspår (hög)",
    "rad": "Kontrollera att värdena för plattformen är inom säkerhetstoleranserna.",
    "akut": "Avstånd från spårmitt till plattformskant är kortare än 1635 mm.\nAvstånd från plattformskant är större än 1850 mm.\nHöjdavstånd från RÖK till plattformskant är högre än 800 mm.",
    "v": "Inte aktuellt.",
    "m": "Avstånd från spårmitt till plattformskant är 1635–1650 mm.\nAvstånd från spårmitt till plattformskant är 1800-1850 mm.\nHöjdavstånd från RÖK till plattformskant är 780-800 mm.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1d. Plattformens gränsvärde i kurva",
    "rad": "Kontrollera att värdena för plattformen är inom säkerhetstoleranserna.",
    "akut": "Samma gränser som på rakspår fast med tillägg för radie och utvidgning vid rälsförhöjning enligt Tabell 54 och Tabell 57.",
    "v": "Samma gränser som på rakspår fast med tillägg för radie och utvidgning vid rälsförhöjning enligt Tabell 54 och Tabell 57.",
    "m": "Samma gränser som på rakspår fast med tillägg för radie och utvidgning vid rälsförhöjning enligt Tabell 54 och Tabell 57.",
    "b": "Samma gränser som på rakspår fast med tillägg för radie och utvidgning vid rälsförhöjning enligt Tabell 54 och Tabell 57."
   },
   {
    "punkt": "2. Rakhet",
    "rad": "Kontrollera att plattformens kant är tillfredställande i rakhet mot spåret.",
    "akut": "Plattformskanten har sprickor som lett till eller kan leda till att material trillar ut i spår eller träffar fordon.",
    "v": "Stora skrapmärken på plattformen.\nDet har skett en stor förflyttning som man kan se okulärt.",
    "m": "Mindre skrapmärken på plattformen.\nDet har skett en mindre förflyttning som man kan se okulärt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Plattformsutrustning",
    "rad": "Kontrollera att plattformsutrustningen är väl fastsatt och att det inte finns risk att något lossnar på grund av vindlast från tåg.\nKontrollera att plattformsutrustningen inte ligger innanför banans infrastruktursektion.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "akut": "Plattformsutrustning sitter inte alls fast.",
    "v": "Fastsättningen av plattformsutrustning är till stor del lös.",
    "m": "Fastsättningen av plattformsutrustning är till viss del lös.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Brunnar och lock",
    "rad": "Kontrollera att brunnar, lock, täckplåtar och dräneringsgaller på och i anslutning till plattformen är intakta och fastsatta och ligger i samma marknivå och lutning som övriga plattformen.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "akut": "Snubbelrisk på grund av att brunnslock, täckplåt eller dräneringsgaller saknas.",
    "v": "Snubbelrisk på grund av skadad täckplåt, dräneringsgaller eller annat objekt som sticker upp.",
    "m": "Snubbelrisk på grund av att brunnslock eller dräneringsgaller avviker från omkringliggande nivå.\nFästdetalj på täckplåt, dräneringsgaller eller annat objekt har skadats eller saknas.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "5. Skyddsräcken",
    "rad": "Kontrollera att eventuella skyddsräcken är intakta och sitter fast.\nKontrollera att de inte ligger innanför banans infrastrukturprofil.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "v": "Skyddsräcke vid perrongavslut saknas.",
    "m": "Skyddsräcke på plattformsområdet eller vid perrongavslut är defekt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "6. Eftergivliga hinder",
    "rad": "Kontrollera att eftergivliga hinder, exempelvis elefantöra och hajtänder, är intakta och sitter fast.\nKontrollera avstånd från spårmitt.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "akut": "Inte aktuellt",
    "v": "Eftergivligt hinder saknas.",
    "m": "Eftergivligt hinder, eller dess infästning, är defekt.\nAvstånd från spårmitt till eftergivligt hinder, h, är kortare än 1870 mm eller längre än 1950 mm.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "7a. Skyddszon",
    "rad": "Kontrollera att skyddszonslinje är intakt och tydlig. Plattformar som saknar målad skyddslinje kan istället ha plattor i avvikande färg.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "akut": "Inte aktuellt.",
    "v": "Stora delar av skyddszonslinjen har lossnat eller är inte intakt.",
    "m": "Små delar av skyddszonslinjen har lossnat eller är inte intakt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "7b. Taktilplattor och andra beläggningsplattor",
    "rad": "Kontrollera att taktilplattor och övriga plattor är hela och ligger i jämn nivå på plattformen, och att plattorna inte glappar vid belastning.\nKanterna på taktilplattor får sticka upp högst 3 mm från närmaste yta.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "akut": "Taktilplatta eller annan beläggningsplatta saknas.",
    "v": "Större områden på plattformen har ojämn beläggning eller glappar.\nSprickbildning och söndriga plattor i större antal eller inom ett koncentrerat område på plattformen.\nTaktilplattor har mycket grus på sig eller är av annan anledning svåra att känna med vit käpp.",
    "m": "Mindre områden på plattformen har ojämn beläggning eller glappar.\nViss sprickbildning eller enstaka bitar borta från plattor.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "7c. Varningsskyltar",
    "rad": "Kontrollera att varningsskyltar, till exempel ”LIVSFARA förbjudet att beträda spårområdet”, är rätt placerade, har rätt beteckningar, är läsbara och oskadda samt är korrekt monterade.\nKontrollera att inga tavlor och skyltar saknas.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "akut": "Inte aktuellt.",
    "v": "Varningsskylt saknas.\nVarningsskylt är oläslig.",
    "m": "Varningsskylt är svårläslig.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "54": {
  "namn": "Bedömningsstöd Lastkaj",
  "rader": [
   {
    "punkt": "1a. Avstånd spårmitt-lastkaj: Hög lastkaj\nI rakspår:",
    "rad": "Kontrollera att värdena ligger inom säkerhetstoleranserna.",
    "akut": "Inte aktuellt",
    "v": "Inte aktuellt",
    "m": "Avstånd från spårmitt till lastkajskant är kortare än 1720 mm på någon del.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1a. Avstånd spårmitt-lastkaj: Hög lastkaj\nI kurva:",
    "rad": "Kontrollera att värdena ligger inom säkerhetstoleranserna.",
    "akut": "Inte aktuellt",
    "v": "Inte aktuellt",
    "m": "Samma gränser som på rakspår fast med tillägg för radie enligt Tabell 57 Utvidgning i cirkulär kurva.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1b. Avstånd spårmitt-lastkaj och rök-lastkajsöverkant: Ej hög lastkaj\nI rakspår:",
    "rad": "Kontrollera att värdena ligger inom säkerhetstoleranserna.",
    "akut": "Inte aktuellt",
    "v": "Inte aktuellt",
    "m": "Sidoavstånd från spårmitt till lastkajskant är kortare än 1675 mm på någon del.\nHöjdavstånd rök-lastkajsöverkant är större än 1190 mm på någon del.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1b. Avstånd spårmitt-lastkaj och rök-lastkajsöverkant: Ej hög lastkaj\nI kurva:",
    "rad": "Kontrollera att värdena ligger inom säkerhetstoleranserna.",
    "akut": "Inte aktuellt",
    "v": "Inte aktuellt",
    "m": "Samma gränser som på rakspår fast med tillägg för radie enligt Tabell 57 Utvidgning i cirkulär kurva.",
    "b": "Inte aktuellt"
   },
   {
    "punkt": "2a. Rakhet",
    "rad": "Kontrollera okulärt att lastkajsstödens kanter är tillfredsställande i rakhet mot spåret samt att stöden ligger mot varandra och saknar skrapmärken och sprickor.",
    "akut": "Sprickor i stöd eller i anslutning mellan stöd.\nMassor från lastkaj ligger i spåret.",
    "v": "Stora skrapmärken på stöd.\nI anslutning mellan stöd har det skett en stor förflyttning.",
    "m": "Små skrapmärken på stöd.\nI anslutning mellan stöd har det skett en liten förflyttning.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2b. Tavla på lastkaj t.ex. ”Varning klämrisk”",
    "rad": "Kontrollera att tavla är rätt placerad, har rätt beteckning, är läsbar och oskadda samt monterade på rätt sätt. Kontrollera att inga tavlor och skyltar saknas.",
    "akut": "Inte aktuellt.",
    "v": "Varningstavla saknas.",
    "m": "Varningstavla är otydlig.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3.Tavla på lastkaj t.ex. ”Varning klämrisk”",
    "rad": "Kontrollera att tavla är rätt placerad, har rätt beteckning, är läsbar och oskadda samt monterade på rätt sätt. Kontrollera att inga tavlor och skyltar saknas.",
    "akut": "Inte aktuellt.",
    "v": "Varningstavla saknas.",
    "m": "Varningstavla är otydlig."
   },
   {
    "punkt": "4. Brunnar och lock",
    "rad": "Kontrollera att brunnar, lock, täckplåtar och dräneringsgaller på och i anslutning till lastkajen är intakta och fastsatta och ligger i samma marknivå och lutning som övriga lastkajen.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "akut": "Snubbelrisk på grund av att brunnslock, täckplåt eller dräneringsgaller saknas.",
    "v": "Snubbelrisk på grund av skadad täckplåt, dräneringsgaller eller annat objekt som sticker upp.",
    "m": "Snubbelrisk på grund av att brunnslock eller dräneringsgaller avviker från omkringliggande nivå.\nFästdetalj på täckplåt, dräneringsgaller eller annat objekt har skadats eller saknas."
   },
   {
    "punkt": "5. Skyddsräcken",
    "rad": "Kontrollera att skyddsräcken är intakta och sitter fast.\nKontrollera att de inte ligger innanför banans infrastruktursektion.\nFotografera besiktningsanmärkningen så att man lätt hittar det som behöver åtgärdas.",
    "akut": "Inte aktuellt.",
    "v": "Skyddsräcke vid perrongavslut saknas.",
    "m": "Skyddsräcke på plattformsområdet eller vid perrongavslut är defekt."
   }
  ]
 },
 "6": {
  "namn": "Bedömningsstöd Befästning",
  "rader": [
   {
    "punkt": "1. Saknade klämfjädrar/skuldror/isloatorer",
    "rad": "En befästning som kan lossas med handkraft ska likställas med saknad befästning.\nGrovt rostangripen klämma/skuldra ska likställas med saknad befästning.\nSaknade befästningar eller skadade befästningar i spår som ligger i kurva eller tunganordning ska bedömas som allvarligare.",
    "akut": "≥9 klämfjädrar, skuldror eller isolatorer saknas eller är skadade på en sträcka av 20 sliprar.\nSamma räl saknar klämfjädrar, skuldror eller isolatorer på 4 sliprar i följd.",
    "v": "6-8 klämfjädrar, skuldror eller isolatorer saknas eller är skadade på en sträcka av 20 sliprar.\nSamma räl saknar klämfjädrar, skuldror eller isolatorer på 3 sliprar i följd.",
    "m": "5 klämfjädrar, skuldror eller isolatorer saknas eller är skadade på en sträcka av 20 sliprar.\nSamma räl saknar klämfjädrar, skuldror eller isolatorer på 2 sliprar i följd.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. att max 3 st underläggsplattor/10 sliprar får vara ur bruk (= fler än 2 skruvar alt. rälspik/UPL ur bruk), dock inte efter varandra.",
    "akut": "≥5 st underläggsplattor/10 sliprar eller 4 st efter varandra är ur bruk",
    "v": "4 st underläggsplattor/10 sliprar eller 3 st efter varandra är ur bruk",
    "m": "3 st underläggsplattor/10 sliprar är ur bruk",
    "b": "Enstaka slipersskruvar/rälspikar saknas."
   }
  ]
 },
 "64": {
  "namn": "Bedömningsstöd Stoppbock",
  "rader": [
   {
    "punkt": "1. Stoppbock, skydd i spårslut",
    "rad": "Kontrollera stoppbockens funktion genom att kontrollera placering och bärande delar.\nExempel:\nKontrollera att stoppbockens placering genom att kontrollera att dess främre kant är vid det gula strecket i rällivet.\nKontrollera funktion utifrån modell.",
    "akut": "Funktionen saknas helt eller till stor del.\nStoppbockens bärande delar har tappat sin bärförmåga.\nStoppbock lös/spännclip saknas.\nDel av stoppbock är utanför spårslut.",
    "v": "Funktion nedsatt\nFörskjuten längre än 2 m.\nSpricka/skada på spännclip.\nBetong skadad.",
    "m": "Funktion påverkad.\nSkruv/mutter saknas.\nFörskjuten längre än 1m.",
    "b": "Information om placering eller funktion saknas/otydligt.\nGula sträck i rälens liv saknas/otydligt"
   },
   {
    "punkt": "2. Hydrauliska buffertar",
    "rad": "Kontrollera att bufferten är i yttersta läget, att den inte är skadad och att det inte finns oljeläckage.",
    "akut": "Inte aktuellt.",
    "v": "Läcker olja.\nBuffertar fastnat i intryckt läge.",
    "m": "Infästning lös/skadad.\nBuffertar återgår ej till yttersta läget.",
    "b": "Kolvstångs ytskikt rostigt/skadat."
   },
   {
    "punkt": "3. Bromselement",
    "rad": "Kontrollera att alla Bromselement sitter på rätt ställe och inte är lösa.",
    "akut": "Inte aktuellt.",
    "v": "Bromselement saknas eller sitter löst.",
    "m": "Förskjutna mer än 1m.\nBromselement har spricka.\nSkruv/mutter saknas eller sitter löst.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Banöverbyggnad",
    "rad": "Kontrollera spåret längs hela installationslängden, från spårslut till minst 5m framför stoppbocken.",
    "akut": "Inte aktuellt.",
    "v": "Inte aktuellt.",
    "m": "Banöverbyggnad skadad/lös.\nFörstärkningsräler lösa/saknas.\nSpåret framför stoppbocken har lyfts ur läge.\nRäler lösa/skadade.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "65": {
  "namn": "Bedömningsstöd Hägnad exklusive grind",
  "rader": [
   {
    "punkt": "1. Nät, stolpar, infästning och taggtråd",
    "rad": "Kontrollera att nät, stolpar infästningar och taggtråd är hela och intakta.",
    "akut": "Nät/stolpe inkräktar på det fria rummet eller kommer att göra det vid fordonspassage, exempelvis därför att nät är löst.",
    "v": "Nät/stolpar kan komma att inkräkta på det fria rummet, exempelvis därför att nät är löst.",
    "m": "Defekter på nät, stolpar, infästning eller taggtråd som påverkar hägnadens funktion i stadsbebyggt område.",
    "b": "Defekter på nät, stolpar, infästning eller taggtråd som påverkar hägnadens funktion utanför stadsbebyggt område."
   },
   {
    "punkt": "2. Sträckt kanttråd",
    "rad": "Kontrollera att kanttråd är tillräckligt sträckt.",
    "akut": "Inte aktuellt.",
    "v": "Inte aktuellt.",
    "m": "Inte aktuellt.",
    "b": "Kanttråd i överkant på nätet är inte tillräckligt sträckt."
   },
   {
    "punkt": "3. Raka stolpar",
    "rad": "Kontrollera stolparnas lutning.\nLutningen för en 2 meter hög stolpe får vara max 35 cm mätt från lodlinjen. Motsvarande gäller för lägre och högre stolpar, så för exempelvis en 1 m hög stolpe får den vara max 17,5 cm.\nOm det är svårt att avgöra lutningen okulärt kan man använda ett lod som man fäster på två meters höjd.",
    "akut": "Lutande stolpe inkräktar på det fria rummet.",
    "v": "Lutande stolpe som kan komma att inkräkta på det fria rummet.",
    "m": "Stolpe lutar> 35 cm från lodlinjen (gäller 2 m hög stolpe).",
    "b": "Stolpe lutar 17–35 cm från lodlinjen (gäller 2 m hög stolpe)."
   },
   {
    "punkt": "4. Avstånd mellan mark och nät",
    "rad": "Kontrollera avståndet mellan mark och nät.",
    "akut": "Inte aktuellt.",
    "v": "Inte aktuellt.",
    "m": "> 2 dm mellan mark och nät inom stadsbebyggt område.",
    "b": "> 2 dm mellan mark och nät utanför stadsbebyggt område."
   },
   {
    "punkt": "5. Grundläggning",
    "rad": "Kontrollera att stolpar står stadigt och sitter fast enligt tillverkarens anvisningar.",
    "akut": "Stolpe sitter snett eller löst och inkräktar därför på det fria rummet.",
    "v": "Stolpe kan komma att inkräkta på fria rummet.",
    "m": "2 eller fler intilligande stolpar är inte tillräckligt förankrad i mark.\nStolpe förflyttas vid lätt belastning, till exempel vind, luftdraget från passerande tåg eller lätt tryck med handen.",
    "b": "Stolpe är inte tillräckligt förankrad i mark.\nStolpe förflyttas vid lätt belastning, till exempel vind, luftdraget från passerande tåg eller lätt tryck med handen"
   },
   {
    "punkt": "6. Fri från funktionshindrande vegetation",
    "rad": "Kontrollera att buskar eller träd inte tynger ner hägnaden.",
    "akut": "Inte aktuellt.",
    "v": "Inte aktuellt.",
    "m": "Buskar eller träd tynger ner hägnaden.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "8. Skyltar",
    "rad": "Kontrollera att skyltar är intakta och läsbara, samt sitter fast på avsett sätt.",
    "akut": "Inte aktuellt.",
    "v": "Inte aktuellt.",
    "m": "Inte aktuellt.",
    "b": "Skylt saknas, är defekt, inte läsbar eller sitter så löst att den riskerar att falla ner."
   }
  ]
 },
 "66": {
  "namn": "Bedömningsstöd Stålnätspanel",
  "rader": [
   {
    "punkt": "1a. Stolplutning",
    "rad": "Kontrollera lutning på stolpar.",
    "akut": "Inte aktuellt.",
    "v": "Inte aktuellt.",
    "m": "Stolpar lutar > 15 cm per meter.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "1b. Panelen sitter fast i stolparna",
    "rad": "Kontrollera att panelen sitter fast i stolparna.",
    "akut": "Inte aktuellt.",
    "v": "Panelen sitter inte fast i stolpen på grund av sabotage.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Avstånd mellan mark och nät",
    "rad": "Kontrollera avstånd mellan mark och nät.",
    "akut": "Inte aktuellt.",
    "v": "Inte aktuellt.",
    "m": "Avstånd mellan mark och nät > 15 cm.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "67": {
  "namn": "Bedömningsstöd Grind",
  "rader": [
   {
    "punkt": "1. Låsning och upplåsning",
    "rad": "Kontrollera att låsning och upplåsning fungerar felfritt.",
    "akut": "Låsning eller upplåsning fungerar inte som avsett.",
    "v": "Inte aktuellt.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Passagekontroll",
    "rad": "Kontrollera att passagekontroll fungerar felfritt och att larm- och passageskåp är inte defekt och blockerad.",
    "akut": "Bedömningsstöd saknas",
    "v": "Bedömningsstöd saknas",
    "m": "Bedömningsstöd saknas",
    "b": "Bedömningsstöd saknas"
   },
   {
    "punkt": "2. Grinden stänger utan hinder",
    "rad": "Kontrollera att stängning fungerar som avsett.",
    "akut": "Går inte att stänga som avsett.",
    "v": "Inte aktuellt.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Avstånd mellan mark och grind",
    "rad": "Kontrollera att avstånd mellan mark och grind är tillräckligt litet för att förhindra passage under grind.",
    "akut": "Inte aktuellt.",
    "v": "Avstånd mellan mark och grind möjliggör passage vid stängd grind.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "5. Skyltar",
    "rad": "Kontrollera att skyltar är intakta och läsbara, samt sitter fast på avsett sätt.",
    "akut": "Inte aktuellt.",
    "v": "Inte aktuellt.",
    "m": "Inte läsbara, defekta eller defekt fastsättning.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "6. Spärranordning",
    "rad": "Kontrollera grinden inte kan inskränka det fria rummet utmed banan. För grindar som ligger nära spåret innebär det att kontrollera att det finns en spärranordning som hindrar grinden från öppnas in i det fria rummet.",
    "akut": "Grind utan fungerande lås:\nGrind kan inskränka det fria rummet.",
    "v": "Grind med fungerande lås:\nGrind kan inskränka det fria rummet.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "7. Grundläggning",
    "rad": "Kontrollera att grundläggning är stabil. Känn efter att det är stabilt.",
    "akut": "Inte aktuellt.",
    "v": "Risk för delar lossnar och inkräktar på fria rummet.",
    "m": "Delar går att ta loss.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "8. Grind",
    "rad": "Kontrollera att grind, gångjärn och låsinfästning är hela och intakta.",
    "akut": "Grind inkräktar på det fria rummet eller kommer att göra det vid fordonspassage.",
    "v": "Grind kan komma att inkräkta på det fria rummet.",
    "m": "Defekter på grind, gångjärn och låsinfästning som påverkar grindens funktion i stadsbebyggt område.",
    "b": "Defekter på grind, gångjärn och låsinfästning som påverkar grindens funktion utanför stadsbebyggt område."
   }
  ]
 },
 "68": {
  "namn": "Bedömningsstöd Manuell slaggrind fotgängare",
  "rader": [
   {
    "punkt": "1. Dörrstängare fungerar",
    "rad": "Kontrollera att slaggrind fungerar som avsett och stänger felfritt.",
    "akut": "Inte aktuellt.",
    "v": "Stänger inte felfritt.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "7": {
  "namn": "Bedömningsstöd Isolerskarv",
  "rader": [
   {
    "punkt": "1. Skarvskruv och mutter",
    "rad": "Kontrollera att skruvar och muttrar inte saknas eller sitter löst",
    "akut": "Alla skruvar saknas/ är lösa på minst den ena sidan om skarven.",
    "v": "Max 2 eller 3 skruvar/ muttrar saknas/ är lösa beroende på typ av skarvjärn.\n*4-hålsjärn: 2 skruvar/muttrar saknas/ är lösa, dock inte på samma sida om skarv.\n*6-hålsjärn: 3 skruvar/muttrar saknas/ är lösa, dock inte på samma sida om skarv.",
    "m": "Max 1 eller 2 skruvar/ muttrar saknas/ är lösa beroende på typ av skarvjärn.\n*4-hålsjärn: 1 skruv/mutter saknas.\n*6-hålsjärn: 2 skruv/mutter saknas/ är lösa.",
    "b": "1 skruv är lös."
   },
   {
    "punkt": "2. Skarvjärn",
    "rad": "Kontrollera okulärt om sprickor eller brott finns.",
    "akut": "Spricka eller brott i något av skarvjärnen.",
    "v": "Delaminering",
    "m": "Andra defekter, mindre ytliga skador.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Slitage",
    "rad": "Kontrollera okulärt om påkörningsmärken eller slitage finns på ovansida skarvjärn.",
    "akut": "Kraftigt slitage ovanpå skarvjärnet som kan riskera klättring av fordon. Se bild 1",
    "v": "Tydliga påkörningsmärken ovanpå skarvjärnet.",
    "m": "Antydan till påkörningsmärken ovanpå skarvjärnet.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "8": {
  "namn": "Bedömningsstöd Dilatationsanordning - okulär kontroll",
  "rader": [
   {
    "punkt": "1. Skarvens läge",
    "rad": "Kontrollera att skarvens läge är rätt i förhållande till vilken typ av skarv, neutralläge och rådande temperatur vid besiktningstillfället.\nSkarven får inte ligga i något ändläge.\nDilatationsskarvens läge ska övervakas regelbundet efter inläggningen eller om neutralisering eller spårriktning har skett i närhet till skarv (inte närmare än 50 m från skarv)\nTRVINFRA-00018 Spårkomponenter beskriver dom olika förekommande typerna och rörelselängder.",
    "akut": "Skarven ligger i något av ändlägena i förhållande till neutralläge och rådande temperatur vid besiktningstillfället: ny inställning av nolläge ska genomföras snarast.",
    "v": "Asymmetriska rörelser i förhållande till nolläget på skarven.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Befästning",
    "rad": "Kontrollera att de rörliga respektive fasta befästningarnas infästning är tillfredsställande.\nEn löst befästning som med handkraft kan skruvas loss är att likställa med en saknad befästning.\nRostangripen klämma ska likställas med saknad befästning.",
    "akut": "Flera befästningar/ skruvförband saknas eller är lösa.",
    "v": "Enstaka befästning/ skruvförband saknas eller är lös.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Glapp",
    "rad": "Kontrollera att glappet mellan tunga och stödräl vid tungspets är max 3 mm.",
    "akut": "Glapp >3 mm.",
    "v": "Inte aktuellt.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "7. Underläggsplatta",
    "rad": "Kontrollera att underläggsplattor är fria från skador.",
    "akut": "Flera underlagsplattor har förlorat sin funktion",
    "v": "Enstaka underlagsplattor har förlorat sin funktion",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 },
 "9": {
  "namn": "Bedömningsstöd Bladskarv – okulär kontroll",
  "rader": [
   {
    "punkt": "1. Läge i sidled och längsled",
    "rad": "Kontrollera att skarvens glapp är lika stora på vänster och höger sida (detta kan bero på att spår på land och spår på bro inte är i linje med varandra).\nKontrollera att skarven inte ligger i eller nära något ändläge.\nKontrollera att rälvandring inte har skett.",
    "akut": "Skarv ligger i/nära maximalt öppet ändläge.\nSkarv ligger i/nära slutet läge.\nRörelse i bladskarv ≥ 20 mm.",
    "v": "Glappen i skarven är olika på vänster och höger sida.\n15 ≤ Rörelse i bladskarv < 20 mm.",
    "m": "10 ≤ Rörelse i bladskarv < 15 mm.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "2. Sidostödklackar",
    "rad": "Kontrollera att det inte finns sprickor eller brott.",
    "akut": "Synligt brott.",
    "v": "Synlig spricka.",
    "m": "Andra defekter än synlig spricka/brott, till exempel ytliga mindre skador.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "3. Sliprar",
    "rad": "Kontrollera att inte det finns sprickor eller röta i sliprarna (eller betongplattor) samt att fastsättning är intakt.",
    "akut": "Fastsättning saknas, vilket leder till större rörelser.",
    "v": "Rörelser i fastsättning.",
    "m": "Sprickor eller röta i sliper.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "4. Underläggsplattor, befästningar och skruvförband",
    "rad": "Kontrollera att underläggsplattor, befästningar och skruvförband är intakta.",
    "akut": "Flera befästningar/ skruvförband defekta, saknas eller är lösa.",
    "v": "Enstaka befästning/ skruvförband defekta, saknas eller är lös.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   },
   {
    "punkt": "5. Skarvens lägesindikering",
    "rad": "Kontakten ska slutas när bron intagit nedläge för bärande av tåglast. Kontakten ska brytas då bron lyfts från sitt nedläge.\nKontrollera fastsättningen av lägesindikering, inklusive eventuell vinkelprofil/linjal.",
    "akut": "När bron intagit nedläge sluts inte kontakten.\nNär bron lyfts från nedläge bryts inte kontakten.\nLägesindikering sitter löst eller har lossnat.",
    "v": "Inte aktuellt.",
    "m": "Inte aktuellt.",
    "b": "Inte aktuellt."
   }
  ]
 }
};
