// Hjälp per sida (2026-10-20): ?-knappen bredvid kugghjulet visar vad sidan är till för,
// hur den fylls i och vad knapparna gör. Varje del är [rubrik, stycken]; ett stycke som är en
// lista blir punkter.

const BLANKETT_ALLMANT = ['Så fungerar alla blanketter', [
  'Allt du skriver sparas direkt i telefonen. Det finns ingen spara-knapp, och du kan gå ifrån blanketten och fortsätta senare.',
  'Grå text i en ruta är ett förval som hämtas från jobbet eller från Inställningar. Den hamnar på blanketten om du inte skriver något eget. Skriver du något gäller det bara den här blanketten.',
  'Tryck på en rubrik för att fälla ihop eller fälla ut ett avsnitt. Ihopfällda avsnitt är inte tomma, de är bara gömda.',
  'En ruta med en kort förklarande text under rubriken talar om varifrån värden hämtas eller vilket regelverk som gäller.',
  'Pilen uppe till vänster går tillbaka till jobbet. Där trycker du Skapa filer när blanketterna är klara.',
]];

const VAXEL = {
  titel: 'Besiktningsrapport spårväxel',
  intro: 'Här fyller du i besiktningsrapporten för växeln. Vilken rapport det blir beror på växeltypen. Normalvärden och toleranser fylls i automatiskt enligt TRVINFRA-00017.',
  delar: [
    ['Besiktningstyp', [
      'Välj vilken besiktning det är och besiktningsklassen. Båda styr vilka toleranser som gäller. Utan besiktningstyp blir det inga toleranser.',
    ]],
    ['Växeldata', [
      'Bandel, Vx.nr och Trafikplats hämtas från jobbet (grått) och går att skriva över för den här rapporten.',
      'Växeltyp och Växelmodell är jobbets. Ändrar du dem här ändras de på jobbet och i Översyn spårväxel också. Byter du växeltyp öppnas rapporten för den nya typen; det du mätt i den gamla finns kvar om du byter tillbaka.',
      'Radien behövs för de toleranser som beror på R ≥ 300 m.',
    ]],
    ['Mått i växeln', [
      'Bilden visar var måtten tas (bilaga 7). Tryck på den för att förstora.',
      'Måttordning: "I växeln" visar måtten i den ordning du går genom växeln. "Besiktningsrapport" visar dem i samma ordning som på blanketten.',
      'Börja mäta från: för växlar med A- och B-ände väljer du vilken ände du börjar i. Ordningen vänds då.',
      'Skriv bara i Uppmätt. När värdet har lika många siffror som normalvärdet hoppar markören till nästa mått. Telefonens pilar går bara mellan Uppmätt-rutorna.',
      'Normal och Tolerans är text. Tryck på ett värde om du behöver skriva ett eget.',
      'Diff räknas ut som uppmätt minus normal. Raden blir röd när måttet ligger utanför toleransen, och du får en varning när du skapar filerna.',
      'Gråa rader är mått som inte tas vid den valda besiktningen. De hoppas över, men du kan fylla i dem ändå.',
      'Grå siffror med snedstreck, t.ex. 43/44, beror på korsningens utförande. Skriv det värde som gäller.',
    ]],
    ['Markeringar och kontroller', [
      'Kryssa i det som gäller för växeln. Det blir kryss på blanketten.',
    ]],
    ['Underskrift', [
      'Datum hämtas från jobbet. Underskriften är ditt namn från Inställningar om du inte skriver något annat.',
    ]],
    BLANKETT_ALLMANT,
  ],
};

export const HJALP = {
  start: {
    titel: 'Startsidan',
    intro: 'Startsidan visar dina jobb. Ett jobb är ett arbetstillfälle, t.ex. ett isolbyte en natt, med alla blanketter och bilder som hör till det.',
    delar: [
      ['Rutorna överst', [
        'Gula rutor visar när något behöver göras: mallar som saknas eller är gamla, en säkerhetskopia som bör sparas, eller att du är ny i appen. Tryck på rutan för att åtgärda.',
      ]],
      ['Knapparna', [[
        '+ Nytt jobb: skapar ett jobb. Du fyller i uppgifterna en gång, och appen föreslår vilka blanketter som behövs.',
        'Importera jobb från PDF: läser in ett jobb från en PDF som skapats med Dela allt som en PDF, t.ex. från en kollega eller från en annan telefon. Bilderna följer med. Avsändarens namn, telefon och svets-ID följer inte med. De enskilda blanketterna bär inte jobbet och går inte att importera.',
      ]]],
      ['Jobblistan', [
        'Varje jobb visar namn, status, datum och blanketterna. Tryck på ett jobb för att öppna det.',
        [
          'Pågående: du arbetar med jobbet.',
          'Skickat: filerna är delade. Det blir automatiskt när du delar.',
          'Avslutat: jobbet är klart och flyttas till Arkiv längst ner.',
        ],
        'Sökrutan söker på plats, vx nr, Ao nr, arbetslag, bandel, datum och status. Träffar i arkivet visas direkt.',
      ]],
      ['Uppe till höger', [[
        '? visar den här hjälpen. Den finns på alla sidor och förklarar just den sidan.',
        'Kugghjulet öppnar Inställningar: dina uppgifter, blankettmallarna och säkerhetskopian.',
      ]]],
    ],
  },

  nytt: {
    titel: 'Nytt jobb',
    intro: 'Här skapar du ett jobb. Uppgifterna fylls i automatiskt på alla blanketter, så du skriver dem bara en gång.',
    delar: [
      ['Datum och order', [
        'Datum är dagen skiftet börjar. Kryssa i Nattarbete om du jobbar natt; då får blanketterna nästa dags datum.',
        'Ao nr blir förval för Eget Ao nr på svetsrapporten och Beställningsnr på IBT och kontrollplanen.',
        'Arbetslag förvalt från förra jobbet och kommer med i jobbnamnet.',
      ]],
      ['Plats', [
        'Bandel, Driftplats/Sträcka och Spår hamnar på alla blanketter.',
        'Från och Till km+m: läget för arbetet. Till behövs bara om arbetet går över en sträcka.',
      ]],
      ['Arbete', [
        'Arbetsbeskrivning, t.ex. Isolbyte, blir en del av jobbnamnet. Jobbnamnet skapas av vecka, dag, arbetslag, plats och arbetsbeskrivning, och visas grått. Skriv ett eget namn om du vill.',
        'Kryssa i det som gäller: Hett arbete, Svetsning, Arbete i växel och Växelrevision. Svaren styr vilka blanketter som föreslås.',
        'Typ av arbete väljs enligt TRVINFRA-00271 bilaga 1. Appen visar då vem som får ibruktaga och om spårlägesmätningen ska vara belastad eller obelastad.',
      ]],
      ['Växel', [
        'Visas när arbetet är i en växel. Välj växeltyp först; den bestämmer vilken besiktningsrapport som används. Välj sedan växelmodell ur listan, eller Annan om den saknas. Modellen ger normalvärden och toleranser.',
      ]],
      ['Blanketter och Skapa jobb', [
        'Blanketterna som behövs är förkryssade och märkta "föreslås". Kryssa i fler eller färre. Du kan ändra det i jobbet senare också.',
        'Skapa jobb sparar jobbet och öppnar det.',
      ]],
    ],
  },

  jobb: {
    titel: 'Jobbet',
    intro: 'Här samlas allt som hör till jobbet: status, blanketterna, bilderna och uppgifterna om jobbet. Härifrån skapar och delar du filerna.',
    delar: [
      ['Status', [
        'Pågående, Skickat eller Avslutat. Statusen blir Skickat när du delar filerna, och då låses alla blanketter. Välj Avslutat när jobbet är klart, så flyttas det till arkivet.',
      ]],
      ['Kopiera jobbnamn och Ao nr', [
        'Knappen bredvid jobbnamnet överst kopierar namnet. Klistra in det på ämnesraden när du mejlar filerna; telefonen kan inte fylla i ämnesraden själv.',
        'Rutan Ao nr under Uppgifter om jobbet har en likadan knapp som kopierar numret.',
      ]],
      ['Blanketter', [
        'Tryck på en blankett för att fylla i den. Under namnet står hur långt den har kommit, t.ex. antal svetsar eller "18 av 24 mått". Rött betyder att något ligger utanför toleransen.',
        'Överst på blanketten står ett kort namn, t.ex. Besiktningsrapport EV eller SFT Kapmetoden. Hela namnet och mallnumret står på raden under.',
        'Hänglåset till höger låser blanketten, så att den går att läsa men inte ändra. Tryck igen, eller på Lås upp inne i blanketten, för att låsa upp. När jobbet blir Skickat låses alla blanketter. Uppgifter om jobbet som ändras i efterhand, t.ex. Ao nr, syns ändå på en låst blankett.',
      ]],
      ['Skapa filer', [
        'Fyller i blankettmallarna med det du skrivit och gör PDF-filer. Först visas en lista över det som verkar saknas, t.ex. mått, bilder eller mått utanför tolerans. Du kan rätta till det eller trycka Skapa filerna ändå.',
        [
          'Dela de … filerna: öppnar telefonens delning, så att du kan skicka filerna med Mail, Teams eller spara dem i OneDrive. Ämnesraden i Mail fyller du i själv: tryck på kopieraknappen bredvid jobbnamnet överst och klistra in.',
          'Dela allt som en PDF: slår ihop alla blanketter och bilder till en fil. Bra när mottagaren vill ha allt samlat. Den här filen bär också hela jobbet, så att det kan importeras i en annan telefon. Skicka den bara till den som får se alla jobbets uppgifter.',
          'Länkarna under knapparna öppnar eller laddar ned en fil i taget.',
        ],
        'Har svetsrapporten fler än 10 svetsar blir det flera svetsrapporter, del 1, del 2 och så vidare.',
      ]],
      ['Bilder', [
        'Tre grupper: Före, Efter och Rälsmärkning/bricka. Tryck på + i gruppen för att ta en bild eller välja bilder. Tryck på en bild för att se den större, och på × för att ta bort den.',
        'Bilderna följer med när du delar filerna. Saknas Efter-bilder eller rälsmärkning får du en påminnelse.',
      ]],
      ['Längre ner', [[
        'Lägg till eller ta bort blanketter: kryssa i fler blanketter eller ta bort en. Det du fyllt i finns kvar om du lägger till den igen.',
        'Uppgifter om jobbet: samma uppgifter som när jobbet skapades. Ändringar här syns på alla blanketter.',
        'Nytt jobb från detta: gör ett nytt jobb med dagens datum och samma uppgifter och blanketter, men tomma blanketter. Bra när du jobbar på samma ställe flera dagar.',
        'Ta bort jobbet: tar bort jobbet, blanketterna och bilderna från telefonen. Det går inte att ångra.',
      ]]],
    ],
  },

  mallar: {
    titel: 'Blankettmallar',
    intro: 'Appen fyller i de riktiga blankettmallarna. Mallarna finns inte i appen, utan läses in från telefonens filer en gång och sparas sedan i telefonen.',
    delar: [
      ['Läs in mallar', [
        'Tryck Läs in mallar från Filer och välj zip-filen "Alla PDF-mallar", eller en eller flera mallar. Appen känner själv igen vilken blankett varje fil är.',
        'Efter inläsningen visas en rad per mall: bock om den lästes in, varning om den är en gammal version.',
      ]],
      ['Listan', [
        'Visar varje blankett och om dess mall finns i telefonen. En mall som är en gammal version märks; läs då in den senaste från arbetsledaren eller en kollega.',
      ]],
    ],
  },

  installningar: {
    titel: 'Inställningar',
    intro: 'Här fyller du i det som är samma i alla jobb. Uppgifterna fylls i automatiskt på blanketterna, och kan skrivas över i en enskild blankett.',
    delar: [
      ['Om dig', [
        'Ditt namn står som underskrift och namnförtydligande. Där bara initialer får plats, t.ex. på IBT, räknas de ut från namnet. Telefon och svets-ID används på svetsrapporten och IBT.',
      ]],
      ['Företag och kontaktpersoner', [
        'Företag/entreprenör används på flera blanketter. Företag/enhet används på svetsrapporten.',
        'Arbetsledare, platschef, svetsansvarig och TRV projektledare med telefon fylls i på svetsrapporten, IBT och heta arbeten.',
      ]],
      ['Blankettmallar', [
        'Visar vilka mallar som finns i telefonen och läser in nya.',
      ]],
      ['Säkerhetskopia', [
        'Jobben finns bara i telefonen. Spara säkerhetskopia gör en zip-fil med alla jobb, bilder, mallar och inställningar som du sparar i Filer, t.ex. i iCloud Drive eller OneDrive.',
        'Läs in säkerhetskopia läser tillbaka en sådan fil, t.ex. efter byte av telefon. Jobb som redan finns skrivs över med kopians version, övriga jobb ligger kvar.',
      ]],
      ['Om appen', [
        'Kom igång visar stegen för att börja använda appen. Versionen längst ner visar vilken version telefonen har.',
      ]],
    ],
  },

  'kom-igang': {
    titel: 'Kom igång',
    intro: 'Stegen för att börja använda appen. Välj din telefon eller dator överst, så visas bara de instruktionerna. Steg med bock är redan gjorda.',
    delar: [],
  },

  vaxel: VAXEL,

  1481: {
    titel: 'Översyn spårväxel',
    intro: 'Rapporten för växelrevision (TMALL 1481). Den följer blanketten uppifrån och ned.',
    delar: [
      ['Rapportuppgifter', [
        'Entreprenör, datum, bandel, driftplats och växelnummer hämtas från jobbet och Inställningar. Godkänd av förvalt till arbetsledaren eller platschefen.',
        'Växeltyp och växelmodell är jobbets. Ändrar du dem här ändras de på jobbet och i besiktningsrapporten också.',
      ]],
      ['Kontrollmoment', [
        'För varje moment väljer du vad som gjordes, för vänster och höger där blanketten har båda, och skriver en anmärkning vid behov. Lämna tomt det som inte gäller.',
      ]],
      ['Maskinell stoppning', [
        'Svara om det behövs maskinell stoppning senare, och skriv förslag på komponentbyten eller annat i anmärkningen.',
      ]],
      ['Komponentbyten', [
        'Kryssa i de komponenter som byttes. Då visas rutor för position eller modell, artikelnummer och anmärkning.',
        'Efter utfört komponentbyte fyller du i kontrollerna som gjordes efteråt.',
      ]],
      BLANKETT_ALLMANT,
    ],
  },

  svets: {
    titel: 'Svetsrapport',
    intro: 'Rapporten över dagens svetsar (DOK 2630). En rad per svets.',
    delar: [
      ['Rapportuppgifter', [
        'Företag/enhet, svetsansvarig och ditt namn och svets-ID hämtas från Inställningar. Eget Ao nr hämtas från jobbet. Kundens Ao nr och Bessy/Ofelia skriver du själv.',
      ]],
      ['Svetsar', [
        'Tryck + Lägg till svets för varje svets. En ny svets får samma uppgifter som den förra, utom läge och kapmått, så du behöver oftast bara ändra några rutor.',
        'SFT bredvid Rältemp räknas ut som på SFT Kapmetoden när Före kap, Efter kap och Rältemp är ifyllda. Den är bara till för dig och kommer inte med på svetsrapporten.',
        'Dag och plats hämtas från jobbet. Km + m är svetsens läge; i en växel kan du i stället skriva svetsens nummer på växelbilden (1–14) i första rutan och lämna meter tom.',
        'Fyll i före och efter kap, rältemperatur, rälsmodell, material, typ av arbete, svetsmetod, tillsatsmaterial, batch och WPS.',
        'En blankett har plats för 10 svetsar. Fler svetsar ger fler blanketter när du skapar filerna.',
      ]],
      ['Egenkontroll och kommentarer', [
        'Kryssa i det som är utfört; det blir X på blanketten. Avvikelser skriver du sist.',
      ]],
      BLANKETT_ALLMANT,
    ],
  },

  heta: {
    titel: 'Tillstånd heta arbeten',
    intro: 'Tillstånd och kontrollista för heta arbeten på tillfällig arbetsplats. Fyll i före arbetet och skriv avslutet när efterbevakningen är klar.',
    delar: [
      ['Tillståndet gäller', [
        'Från och till med klockslag. Förval är jobbets datum, och vid nattarbete till dagen efter. Tillståndet ska gälla så kort tid som möjligt.',
      ]],
      ['Arbetsplats och arbetsmetod', [
        'Larmadress: skriv adressen, eller tryck Min position för närmaste adress, eller Välj på karta. Positionen skickas bara när du trycker på knapparna.',
        'Kryssa i arbetsmetoderna och svara om arbetet är brandfarligt.',
      ]],
      ['Underskrifter', [
        'Tillståndsansvarig med telefon. Hetarbetare och brandvakter: namn, om certifikatet är kontrollerat, och om personen är hetarbetare och/eller brandvakt.',
        'Tillståndsansvarig vid avslut är förvald till samma person. Namnen skrivs som namnförtydligande och initialerna på raden för namnteckning.',
      ]],
      ['Kontrollpunkter', [
        'Kryssa i varje punkt som är uppfylld. Under punkten står säkerhetsregeln den bygger på. Brandvaktens namn hämtas från den som är kryssad som brandvakt.',
      ]],
      BLANKETT_ALLMANT,
    ],
  },

  ibt: {
    titel: 'Ibruktagandebesiktning (IBT)',
    intro: 'Ibruktagandebesiktning banöverbyggnad (TMALL 0824). Du är bankontrollant och signerar, om ingen besiktningsman är med.',
    delar: [
      ['Kontaktpersoner', [
        'Projektledare, platschef, arbetsledare, besiktningsman och bankontrollant med telefon. Hämtas från Inställningar. Fyller du i en besiktningsman är det den som signerar, och bankontrollanten tas bort.',
      ]],
      ['Rapportuppgifter och objekt', [
        'Kontrakt eller projekt, bandel, datum, beställningsnr och arbetet. Under Objekt anger du var och vad som kontrollerats, med arbete enligt TRVINFRA-00271 bilaga 1. Km från och till hämtas från svetsrapportens svetsar.',
      ]],
      ['Kontrollpunkter', [
        'Kryssa i det som är kontrollerat; det blir dina initialer på blanketten. Tryck på texten för att läsa kraven ur TDOK 2021:0311.',
        'Egenkontroller som hör till jobbets blanketter är förkryssade som bifogade.',
      ]],
      ['Anmärkningar och godkännande', [
        'Skriv eventuella anmärkningar med prioritet. Under Godkänd för spårbunden trafik anges sträckorna; för STH är Full förval.',
        'Underskrift: datum och, om du vill, klockslag.',
      ]],
      BLANKETT_ALLMANT,
    ],
  },

  '0737': {
    titel: 'Kontrollplan stabilitetspåverkande arbete (BASTAB)',
    intro: 'Kontrollplanen (TMALL 0737) räknar fram tillåten hastighet efter ett stabilitetspåverkande arbete enligt TRVINFRA-00014. Punkterna har samma nummer som på blanketten.',
    delar: [
      ['Så fylls den i', [
        'Gå igenom punkt 1 till 11. Trafikbelastning och To lämnas av beställaren. ΔT räknas ut från Tf och To.',
        'Under varje punkt finns en kort förklaring, och regelverket kan fällas ut genom att trycka på rubriken.',
      ]],
      BLANKETT_ALLMANT,
    ],
  },

  kap: {
    titel: 'Spänningsfri temperatur SFT, Kapmetoden',
    intro: 'Protokollet för kapmetoden (TMALL 0844). Appen räknar ut e, ΔT och SFT som i mallen, enligt TRVINFRA-00012 bilaga 2.',
    delar: [
      ['Kapställen', [
        'Ett kapställe per rad. Fyll i läge, rältemperatur T och längden före (Lf) och efter (Le) kap. e, ΔT och SFT räknas ut direkt.',
      ]],
      ['Underskrift', [
        'Entreprenör och namn hämtas från Inställningar. Skriv vem på Trafikverket rapporten delges.',
      ]],
      BLANKETT_ALLMANT,
    ],
  },

  skevning: {
    titel: 'Skevningsprotokoll spårläge',
    intro: 'Protokoll för spårvidd och rälsförhöjning (TMALL 1605). Appen räknar ut skevning och ramptal och visar rött det som ligger utanför UH2.',
    delar: [
      ['Rapportuppgifter', [
        'Välj hastighetsklass; den styr gränsvärdena. Fyll i nominell spårvidd, anordnad rälsförhöjning, mätutrustning (Spårpass om du inte skriver något annat) och km+m för första mätpunkten.',
      ]],
      ['Mätpunkter', [
        'En mätpunkt varannan meter, 0–36 m. Skriv spårvidd och rälsförhöjning; rutan hoppar vidare när värdet är komplett. Knappen ± ger minustecken.',
        'Ändring per 6 m och ramptal räknas ut. Tryck på en ändring för att se vilka punkter den räknas från.',
      ]],
      BLANKETT_ALLMANT,
    ],
  },
};

// Nyckeln för en blankett: alla växelrapporter har samma hjälp.
export const blankettHjalp = (formKey, vaxelKeys) => (vaxelKeys.includes(formKey) ? 'vaxel' : formKey);
