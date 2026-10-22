// Rälsfel enligt TDOK 2014:0598 Katalog över rälsfel (2026-10-22): namn per felnummer, grupperna
// för listan under Räl i IBT, och frågorna i guiden Klassificera rälsfel.
// Namnen följer bladen, som skiljer sig från förteckningen i kapitel 9 på några ställen.

// Kort namn för anmärkningsrutan på IBT, som är liten (2026-10-22). Fullt namn i guiden och katalogen.
export const KORTNAMN = {
  100: 'Sprödbrott', 111: 'Njurbrott', 113: 'Vertikal spricka', 133: 'Pipe', 135: 'Spricka skarvskruvhål',
  153: 'Vertikal fotspricka', 200: 'Sprödbrott', 211: 'Njurbrott', 213: 'Vertikal spricka', 227: 'Squat', 233: 'Pipe',
  235: 'Spricka från hål', 236: 'Sned spricka', 253: 'Fotspricka', 303: 'Krökt räl',
  412: 'Livspricka, brännsvets', 422: 'Livspricka, termitsvets', 432: 'Livspricka, ljusbågssvets',
  471: 'Tvärspricka, påsvetsning', 472: 'Avskalning, påsvetsning', 481: 'Spricka kontaktförbindning',
  1321: 'Spricka liv–huvud', 1322: 'Spricka liv–fot', 2321: 'Spricka liv–huvud', 2322: 'Spricka liv–fot',
  2222: 'Shelling', 2223: 'Head checking', 2251: 'Slirsår, enstaka', 2252: 'Slirsår, flera',
};
export const NAMN = {
  100: 'Sprödbrott utan synbar orsak', 111: 'Tvärspricka av inre ursprung (njurbrott)', 112: 'Vågrät spricka',
  113: 'Vertikalt längsgående spricka', 121: 'Ytfel', 122: 'Avskalning', 123: 'Utplattning', 124: 'Svacka', 125: 'Slirsår',
  1321: 'Vågrät spricka mellan liv och huvud', 1322: 'Vågrät spricka mellan liv och fot',
  133: 'Vertikal längsgående spricka i livet (pipe)', 134: 'Korrosion i livet', 135: 'Sprickor från skarvskruvhålen',
  139: 'Valsveck', 153: 'Vertikal längsgående spricka i foten', 154: 'Korrosion i foten',
  200: 'Sprödbrott utan synbar orsak', 211: 'Tvärspricka av inre ursprung (njurbrott)', 212: 'Vågrät spricka',
  213: 'Vertikalt längsgående spricka', 2201: 'Räfflor', 2202: 'Vågor', 2203: 'Stort sidoslitage', 2204: 'Stort höjdslitage',
  221: 'Ytfel', 2221: 'Avskalning på farbanan', 2222: 'Avskalning på farkanten (shelling)',
  2223: 'Farkantsprickor (head checking)', 223: 'Utplattning', 224: 'Svacka', 2251: 'Slirsår av enstaka slirning',
  2252: 'Slirsår av flera slirningar', 227: 'Sprickor och lokal nedtryckning på farbanan (squat)',
  2321: 'Vågrät spricka mellan liv och huvud', 2322: 'Vågrät spricka mellan liv och fot',
  233: 'Vertikal längsgående spricka i livet (pipe)', 234: 'Korrosion i livet', 235: 'Sprickor från andra hål än skarvskruvhål',
  236: 'Sned spricka, inte från borrat hål', 239: 'Valsveck', 253: 'Vertikal längsgående spricka i foten (fotspricka)',
  254: 'Korrosion i foten', 301: 'Slag och yttre påverkan', 302: 'Felaktig bearbetning',
  303: 'Kvarstående deformation (krökt räl)', 411: 'Tvärspricka, brännsvets', 412: 'Vågrät spricka i liv, brännsvets',
  421: 'Tvärspricka, termitsvets', 422: 'Vågrät spricka i liv, termitsvets', 431: 'Tvärspricka, ljusbågssvets',
  432: 'Vågrät spricka i liv, ljusbågssvets', 471: 'Tvärspricka i rälshuvudet, påsvetsning',
  472: 'Avskalning på påsvetsad farbana', 481: 'Tvärspricka av fastsättning av kontaktförbindning',
};

export const bild = nr => `img/tdok/0598-${nr}.jpg`;
const post = nr => [`${nr} ${NAMN[nr]}`, bild(nr), `TDOK 2014:0598 ${nr} ${NAMN[nr]}`];
// Sorterat som text så att t.ex. 2201–2204 hamnar före 221 (Object.keys sorterar heltal numeriskt).
const forsta = s => Object.keys(NAMN).filter(nr => nr[0] === s).sort().map(post);

// Listan under Räl. En grupp är [rubrik, [poster]].
export const KATALOG = [
  ['Omfattning, definitioner och klassificering', bild('intro'), 'TDOK 2014:0598 kapitel 1–8'],
  ['Indelning och numrering av rälsfel', bild('indelning'), 'TDOK 2014:0598 kapitel 9'],
  ['1 Fel vid rälsänden', forsta('1')],
  ['2 Fel inne på rälen', forsta('2')],
  ['3 Fel genom åverkan', forsta('3')],
  ['4 Svetsfel', forsta('4')],
];

// Frågorna. Ett val är [svar, förklaring, nästa fråga eller felnummer].
const huvudSpricka = s => ({
  fraga: 'Hur går sprickan?',
  val: [
    ['Tvärs över rälen', 'Tvärspricka inifrån huvudet, njurformad brottyta. Leder till brott.', `${s}11`],
    ['Vågrät, parallellt med farbanan', 'Huvudets övre del spjälkas loss. Kan ge svacka eller mörk fläck på farbanan.', `${s}12`],
    ['Lodrät, längs rälen', 'Spjälkar huvudet i två delar. Mörk linje på farbanan, huvudet breddas.', `${s}13`],
  ],
});
const huvud = s => ({
  fraga: 'Är det en spricka inne i huvudet eller ett fel på farbanan?',
  val: [
    ['Spricka i huvudet', 'Tvär, vågrät eller lodrät spricka som syns på sidan, i ändytan eller med ultraljud.', huvudSpricka(s)],
    ['Fel på farbanan eller farkanten', 'Slitage, avskalning, utplattning, svacka, slirsår och liknande.', s === '1' ? YTA_ANDE : YTA_INNE],
  ],
});
const YTA_ANDE = {
  fraga: 'Hur ser felet på farbanan ut?',
  val: [
    ['Ytfel', 'Fel av metallurgiskt ursprung som först är osynligt och visar sig efter en tid i trafik.', '121'],
    ['Avskalning', 'Liten spricka några mm ned i ändytan, ofta med lätt utplattning och övervalsning i skarvöppningen.', '122'],
    ['Utplattning', 'Fördjupning i farbanan, bredare blank yta. Materialet pressas ut åt sidan, ibland "skägg".', '123'],
    ['Svacka', 'En lokal svacka i farbanan vid rälsänden.', '124'],
    ['Slirsår', 'Fläck efter slirande drivhjul.', '125'],
  ],
};
const YTA_INNE = {
  fraga: 'Hur ser felet på farbanan ut?',
  val: [
    ['Förslitning', 'Räfflor, vågor, stort sidoslitage eller stort höjdslitage.', {
      fraga: 'Vilken sorts förslitning?',
      val: [
        ['Räfflor', 'Nästan regelbundna blanka vågberg och mörka vågdalar, våglängd 3–8 cm. Tjutande ljud.', '2201'],
        ['Vågor', 'Oregelbundna ojämnheter i farbanan, våglängd 8–30 cm.', '2202'],
        ['Stort sidoslitage', 'På yttersträngen i kurvor, ofta sinusformat med minst slitage vid skarven.', '2203'],
        ['Stort höjdslitage', 'Höjdslitaget är påtagligt större än på närliggande räler.', '2204'],
      ],
    }],
    ['Avskalning', 'Material lossnar från farbanan eller farkanten, eller hårfina sprickor på farkanten.', {
      fraga: 'Var sitter avskalningen?',
      val: [
        ['På farbanan', 'Först en vågformig deformation, sedan avskalningar som kan bli flera mm tjocka.', '2221'],
        ['På farkanten (shelling)', 'Avlånga svarta fläckar utmed farkanten, sedan avskalning.', '2222'],
        ['Hårfina sprickor på farkanten (head checking)', 'Små parallella sprickor med jämnt avstånd, på ytterrälen i kurvor.', '2223'],
      ],
    }],
    ['Ytfel', 'Först osynligt fel av metallurgiskt ursprung som visar sig efter en tid i trafik, t.ex. valsflagor.', '221'],
    ['Utplattning', 'Materialet manglas ut i sidled, läppformig kant, "skägg" som kan lossna.', '223'],
    ['Svacka', 'En enstaka, relativt kort svacka, ofta med bredare farbana.', '224'],
    ['Slirsår', 'Ovala fläckar efter slirande eller låsta hjul.', {
      fraga: 'En slirning eller flera?',
      val: [
        ['Enstaka slirning', 'En oval fläck där ett drivhjul har slirat.', '2251'],
        ['Flera slirningar', 'Regelbundna slirsår där tåg slirar eller bromsar, ofta nät av fina sprickor.', '2252'],
      ],
    }],
    ['Squat', 'Lokal nedtryckning och breddning av kontaktbandet med mörk fläck och V-formade eller runda sprickor.', '227'],
  ],
};
const liv = s => ({
  fraga: 'Hur ser felet i livet ut?',
  val: [
    ['Vågrät spricka i övergången mot huvud eller fot', 'Spricka parallellt med hålkälet som kan växa uppåt eller nedåt.', {
      fraga: 'Var sitter sprickan?',
      val: [
        ['Mellan liv och huvud', 'Spjälkar huvudet från livet.', `${s}321`],
        ['Mellan liv och fot', 'Spjälkar foten från livet.', `${s}322`],
      ],
    }],
    ['Lodrät spricka längs livet (pipe)', 'Längsgående spricka mitt i livet, ibland utbuktning på båda sidor.', `${s}33`],
    ['Korrosion', 'Rostflagor lossnar och livet blir tunnare, t.ex. i tunnlar och vägkorsningar.', `${s}34`],
    s === '1'
      ? ['Sprickor från skarvskruvhålen', 'Sprickor som strålar ut från hålen, ofta i 45°. Syns när skarvjärnen är borta.', '135']
      : ['Sprickor från andra hål än skarvskruvhål', 'Sprickor från hålkanter i livet, ofta i 45°.', '235'],
    ...(s === '2' ? [['Sned spricka, inte från borrat hål', 'Spjälkar huvud eller fot från livet, kan komma från märkningen vid valsningen.', '236']] : []),
    ['Valsveck', 'Sällsynt linje längs valsriktningen på sidan av rälen, ofta på livet.', `${s}39`],
  ],
});
const fot = s => ({
  fraga: 'Hur ser felet i foten ut?',
  val: [
    ['Lodrät spricka längs foten', 'Fina sprickor mitt på fotens undersida som kan ge plötsligt brott vid kyla.', `${s}53`],
    ['Korrosion', 'Rostflagor lossnar och foten blir tunnare.', `${s}54`],
  ],
});
const profil = s => ({
  fraga: 'Var i rälsprofilen sitter felet?',
  val: [
    ['Hela tvärsnittet, brott utan synbar orsak', 'Brott tvärs igenom rälen där orsak och utgångspunkt inte går att se. Ofta vid sträng kyla.', `${s}00`],
    ['Huvudet', 'Rälshuvudet med farbana och farkant.', huvud(s)],
    ['Livet', 'Mellan huvud och fot, även övergångarna (hålkälen).', liv(s)],
    ['Foten', 'Rälsfoten.', fot(s)],
  ],
});
const svetsSpricka = m => ({
  fraga: 'Hur går sprickan?',
  val: [
    ['Tvärs över rälen', 'Tvärspricka i svetsen som leder till brott.', `4${m}1`],
    ['Vågrät i livet', 'Spricka i livet genom svetsen, ofta mot närmaste skarvskruvhål.', `4${m}2`],
  ],
});
export const START = {
  fraga: 'Var sitter felet och vad har orsakat det?',
  val: [
    ['Yttre åverkan', 'Urspårning, slag, ljusbåge, felaktig borrning eller skärning, krökt räl. Gäller även i svetszonen.', {
      fraga: 'Vilken sorts åverkan?',
      val: [
        ['Slag och yttre påverkan', 'Urspårning, nedhängande delar, skadade hjul, slägga, mejsel, ljusbåge mot rälen.', '301'],
        ['Felaktig bearbetning', 'Felaktig borrning eller skärning, hål för nära skarvskruvhål.', '302'],
        ['Kvarstående deformation (krökt räl)', 'Rälen är böjd efter olycka, urspårning eller felaktig hantering.', '303'],
      ],
    }],
    ['I svetszonen', 'Inom 10 cm på var sida om svetsens mitt, eller i en påsvetsning.', {
      fraga: 'Hur är rälen svetsad?',
      val: [
        ['Brännsvets', 'Abbrännsstumsvets.', svetsSpricka('1')],
        ['Termitsvets', '', svetsSpricka('2')],
        ['Ljusbågssvets (formsvetsning)', '', svetsSpricka('3')],
        ['Påsvetsning', 'Uppbyggd farbana.', {
          fraga: 'Hur ser felet ut?',
          val: [
            ['Tvärspricka i rälshuvudet', 'Utmattningsspricka tvärs genom påsvetsningen.', '471'],
            ['Avskalning', 'Det påsvetsade partiet lossnar eller skalas av.', '472'],
          ],
        }],
        ['Svetsad eller lödd kontaktförbindning', 'Tvärspricka från stället där kontaktförbindningen sitter.', '481'],
        ['Gas-, gaspress- eller induktionssvets', 'Katalogen har inga feltyper för dessa (44–46).', 'saknas'],
      ],
    }],
    ['Vid rälsänden', 'Där skarvjärnen sitter.', profil('1')],
    ['Inne på rälen', 'Mellan rälsändar och svetszoner.', profil('2')],
  ],
};

// Guiden: en fråga i taget med Tillbaka, och till sist felnumret med knapp till bladet.
// somAnm(nr, namn): lägger felet som anmärkning i IBT och svarar med radens nummer,
// 'full' eller 'last' (2026-10-22). Saknas den visas ingen knapp.
export function klassificera(h, showImage, somAnm) {
  const vag = []; // [nod, valt svar]
  const innehall = h('div', { class: 'guide-body' });
  const close = () => overlay.remove();
  const satt = (...delar) => innehall.replaceChildren(...delar.flat(2).filter(Boolean));
  const visa = nod => {
    const spar = vag.length ? h('p', { class: 'muted guide-spar' }, vag.map(([, s]) => s).join(' › ')) : null;
    const tillbaka = vag.length ? h('button', { type: 'button', class: 'button', onclick: () => visa(vag.pop()[0]) }, '← Tillbaka') : null;
    if (typeof nod === 'string') {
      const nr = nod;
      satt(spar, nr === 'saknas'
        ? h('p', {}, 'Katalogen har inga feltyper för gas-, gaspress- eller induktionssvets. Ange svetsmetoden (44 gassvets, 45 gaspressvets, 46 induktionssvets) och beskriv felet.')
        : [h('p', { class: 'guide-nr' }, nr), h('p', { class: 'guide-namn' }, NAMN[nr]),
          h('p', { class: 'muted' }, 'Jämför med bladet i katalogen, där står också vad felet inte får förväxlas med.'),
          h('button', { type: 'button', class: 'button primary', onclick: () => showImage(bild(nr), `TDOK 2014:0598 ${nr} ${NAMN[nr]}`) }, `📄 Visa bladet ${nr}`),
          somAnm ? h('button', {
            type: 'button', class: 'button',
            onclick: e => {
              const svar = somAnm(nr, KORTNAMN[nr] || NAMN[nr]);
              e.target.replaceWith(h('p', { class: 'muted' }, svar === 'last' ? 'Blanketten är låst, lås upp den för att lägga till anmärkningar.'
                : svar === 'full' ? 'Blanketten har plats för 4 anmärkningar och alla är använda.'
                : `Tillagd som anmärkning ${svar}. Välj prioritet under Noterade anmärkningar.`));
            },
          }, '＋ Lägg till som anmärkning') : null],
        tillbaka, h('button', { type: 'button', class: 'button', onclick: () => { vag.length = 0; visa(START); } }, 'Börja om'));
      return;
    }
    satt(spar, h('h3', {}, nod.fraga),
      nod.val.map(([svar, forklaring, nasta]) => h('button', { type: 'button', class: 'button guide-val', onclick: () => { vag.push([nod, svar]); visa(nasta); } },
        h('strong', {}, svar), forklaring ? h('span', {}, forklaring) : null)),
      tillbaka);
    overlay.scrollTop = 0;
  };
  const overlay = h('div', { class: 'overlay guide', role: 'dialog', 'aria-label': 'Klassificera rälsfel' },
    h('button', { type: 'button', class: 'close', onclick: close, 'aria-label': 'Stäng' }, '✕'),
    h('h2', {}, 'Klassificera rälsfel'),
    innehall);
  document.body.append(overlay);
  visa(START);
}
