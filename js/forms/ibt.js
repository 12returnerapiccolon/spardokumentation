// TMALL 0824 Ibruktagandebesiktning banöverbyggnad utan projektering (Excel-mall, ver 4.0).
// Bladet TMALL0824 skrivs ut till en tom PDF-mall på två sidor och fälten skrivs på cellernas
// platser (ibt-layout.js). Signaturer är initialerna från namnet (2026-10-19).
import LAYOUT from './ibt-layout.js';
import { blankettDatum } from '../datum.js';
import { initialer } from '../initialer.js';
import { AVSNITT, PUNKT } from './tdok0311.js';

// Datum och klockslag, underskrift och namnförtydligande står mitt i sina rutor, både i
// höjd och sidled (2026-10-19). Raden går från y 67,3 till 95,8 på sidan 2. Läggs
// ovanpå den genererade layouten så att det finns kvar när mallen görs om.
const MITT = { A78: [95.1, 86], C78: [229.4, 175], G78: [386, 130] };
// Rutorna för UH-kontrakt och projekt får namnet på två rader (2026-10-19).
const KONTRAKT = { C2: 162.27, E2: 251.8 };
// Utskriften förstoras 5 % och centreras i sidled så att tabellen blir lika bred som
// originalet i Excel och sidfoten får plats (2026-10-22).
const layout = {
  ...LAYOUT,
  skala: { s: 1.05, x: 33.3, y: -3.3 },
  text: { ...LAYOUT.text, ...Object.fromEntries(Object.entries(MITT).map(([cell, [x, maxW]]) => [cell, [1, x, 77.7, 11, 'center', maxW]])),
    ...Object.fromEntries(Object.entries(KONTRAKT).map(([cell, x]) => [cell, [0, x, 748.4, 9, 'center', 44, 21.7]])) },
};

// TRVINFRA-00271 bilaga 1, tabell B1.1. sv: får utföras av spårsvetsare.
const ARBETEN = [
  [1, 'Arbeten i kategori 1 enligt TRVINFRA-00014'],
  [2, 'Arbeten i kategori 2 enligt TRVINFRA-00014'],
  [3, 'Arbeten i kategori 3 enligt TRVINFRA-00014'],
  [4, 'Rälbyte, både höger och vänster'],
  [5, 'Ensidigt rälbyte (t.ex. yttersträngsbyte)'],
  [6, 'Neutralisering av skarvfritt spår'],
  [7, 'Genomgående skarvreglering i skarvspår'],
  [8, 'Kontroll av rälsmängd med kapmetoden', 'sv'],
  [9, 'Kontroll av rälsmängd med VERSE-metoden'],
  [10, 'Inläggning av passräl (<12m) efter rälsbrott', 'sv'],
  [11, 'Inläggning av passräl (<12m) efter skador typ OFP-fel, slirsår', 'sv'],
  [12, 'Byte av isolerskarv', 'sv'],
  [13, 'Spårväxelrevision, komponentbyten, exkl. sliprar, och underhåll i spårväxel'],
  [14, 'Kilning (vid uppfrysning, tjäle)'],
  [15, 'Byte av spårkomponenter i ballastfritt spår'],
];
const ARBETE_VAL = ARBETEN.map(([n, text, sv]) => `${n}. ${text}${sv ? ' (spårsvetsare)' : ''}`);
const nummer = val => (val ? String(parseInt(val, 10)) : '');
const arbete = val => ARBETEN.find(([n]) => String(n) === nummer(val))?.[1] || '';

// Kontrollpunkter: rad i mallen, kontrollpunkt, utförs enligt, kontrollmoment.
const PUNKTER = [
  ['Allmänt', [
    [17, 'Krav för placering av fasta objekt utmed spåret', 'TRVINFRA-00398 – Banutformning', 'Inmätning med tumstock/ mätband'],
    [18, 'Arbeten i kategori 1, 2 eller 3 enligt TRVINFRA-00014', 'Bilaga kontrollplan TMALL0737', 'Kontroll av GO ifylld kontrollplan och bedömning av ev. hastighetsnedsättning görs och ev. restriktion införs. (E ansvarar för upprättande av kontrollplan)'],
  ]],
  ['Spår (TDOK 2021:0311 kap. 4.1)', [
    [21, 'Spårläge', 'Kap 4.1.1 – Att spårläge är inom tillåtna säkerhetsgränsvärden i enl. med TRVINFRA-00013 Banöverbyggnad spårläge, som redovisar vilka spårlägesparametrar och gränsvärden som föranleder anm. K38355 – Tillfällig hastighetsnedsättning ska inte ändra spårsträckas hastighetsklass.', 'GO utför uppmätning av spårläget genom belastad eller obelastad mätning, redovisning av mätning genom spårlägesdiagram eller skevningsprotokoll. Besiktningsman ansvar för kontroll av spårlägesdiagram, uppmätningsprotokoll och/eller nivellerareintyg.'],
    [22, 'Räl / gaturäl', 'Kap 4.1.2.2 / 4.1.2.3', 'Räl pkt 1-6, gaturäl pkt 1-7'],
    [23, 'Sliper', 'Kap. 4.1.3', 'Pkt 1'],
    [24, 'Befästning', 'Kap. 4.1.4', 'Pkt 1 - 3'],
    [25, 'Isolerskarv', 'Kap. 4.1.5', 'Pkt 1 - 2'],
    [26, 'Dilatationsanordning', 'Kap 4.1.6.2', 'Pkt 1 - 9'],
    [27, 'Skarv (olika typer)', 'Kap 4.1.7.2 / 4.1.7.3 / 4.1.7.4 / 4.1.8', 'Pkt, se respektive skarvtyp'],
    [28, 'Skarvöppning', 'Kap 4.1.8.1', 'Pkt 1'],
    [29, 'Rälsvandringshinder i skarvspår', 'Kap 4.1.9', 'Pkt 1 - 4'],
    [30, 'Heyback som ers. för rälsvandringshinder', 'Kap 4.1.9.1', 'Pkt 1 - 3'],
    [31, 'Skyddsräl', 'Kap 4.1.10', 'Pkt 1 - 4'],
    [32, 'Ballastsektion', 'Kap 4.1.11', 'Pkt 1 - 3'],
  ]],
  ['Växel (TDOK 2021:0311 kap. 4.2)', [
    [34, 'Spårläge', 'Kap 4.2.1, se kap 4.1.1', 'Kap 4.1.1 pkt 1'],
    [35, 'Spårväxel, spår- och styrviddsmått', 'Kap 4.2.1 – Spår- och styrviddsmått enl. TRVINFRA-00017 Spårväxel', 'Pkt 2'],
    [36, 'Räl', 'Kap 4.2.2.2, se kap 4.1.2.2', 'Kap 4.1.2.2 pkt 1 - 6'],
    [37, 'Sliper', 'Kap. 4.2.3', 'Pkt 1'],
    [38, 'Befästning', 'Kap. 4.2.4', 'Pkt 1 - 3'],
    [39, 'Skarv', 'Kap. 4.2.5', 'Kap 4.1.5 pkt 1-2, Kap 4.1.8 pkt 1-2'],
    [40, 'Ballastsektion', 'Kap. 4.2.6 se kap 4.1.11', 'Kap 4.1.11 pkt 1 - 3'],
    [41, 'Tunganordning', 'Kap. 4.2.7', 'Pkt 1 - 4'],
    [42, 'Korsning (generellt)', 'Kap. 4.2.8.1', 'Pkt 1 - 3'],
    [43, 'Korsning fastspets', 'Kap. 4.2.8.2', 'Pkt 1'],
    [44, 'Korsning rörlig spets', 'Kap. 4.2.8.3', 'Pkt 1 - 3'],
    [45, 'Moträl', 'Kap. 4.2.9', 'Pkt 1 - 4'],
    [46, 'Snöskydd', 'Kap. 4.2.10', 'Pkt 1 - 2'],
  ]],
  ['Övriga anläggningar (TDOK 2021:0311 kap. 4)', [
    [48, 'Plattform & lastkaj', 'Kap. 4.3.1 / 4.3.2', 'plf. pkt 1-7, lastkaj pkt 1-5'],
    [49, 'Plankorsning', 'Kap 4.1.21 Väg- och gångbana', 'Pkt 1 till 9'],
    [50, 'Kolvbroms', 'Kap. 4.4.1', 'Enl. instruktion'],
    [51, 'Spiralbroms', 'Kap. 4.4.2', 'Enl. instruktion'],
    [52, 'Balkbroms', 'Kap. 4.4.3', 'Enl. TDOK 2022:0360 / 2014:0448'],
    [53, 'Stoppbock', 'Kap 4.6', 'Pkt 1 - 4'],
    [54, 'Hägnad', 'Kap 4.7', 'Samtl. pkt under respektive obj.'],
  ]],
];
// Prioritet på besiktningsanmärkningar enligt TDOK 2021:0299 Säkerhetsbesiktning – genomföra
// (v 3.0, kap 5.4.2; oförändrat mot v 2.0, kontrollerat 2026-10-22) och TDOK 2021:0303 Underhållsbesiktning – genomföra (v 2.0, kap 5.4.2).
const PRIO = [
  ['A-anm', 'A – akut, åtgärdas omedelbart'],
  ['V-anm', 'V – inom 14 dagar'],
  ['M-anm', 'M – inom 90 dagar'],
  ['B-anm', 'B – före nästa besiktning'],
  ['Å-anm', 'Å – inom tre år (underhållsbesiktning)'],
  ['Ö-anm', 'Ö – vid lämpligt tillfälle (underhållsbesiktning)'],
];
const PRIO_INFO = [
  'A: akut anmärkning som medför en omedelbar risk för olycka. Kan den inte åtgärdas direkt ska trafikledningen informeras omedelbart och nödvändiga åtgärder vidtas, inklusive eventuell avstängning av spår. Kontakta tågklareraren för avspärrning av spårområdet. Befintligt skydd får inte avslutas innan felet är åtgärdat. Rapportera enligt TDOK 2013:0143.',
  'V: ska åtgärdas inom 14 dagar från besiktningsdatum. Vid underhållsbesiktning gäller V bara vid risk för driftsäkerhetsfel.',
  'M: ska åtgärdas inom 90 dagar från besiktningsdatum.',
  'B: ska åtgärdas före nästa besiktningstillfälle, eller i undantagsfall enligt andra tider i styrande dokument för komponenten.',
  'Å (bara underhållsbesiktning): ska åtgärdas inom tre år från besiktningsdatum.',
  'Ö (bara underhållsbesiktning): övrigt, åtgärdas vid lämpligt tillfälle (arbetsbank).',
  'Bedömningsstödet för varje besiktningspunkt anger vilken prioritet anmärkningen bör ha, men det är besiktningsmannen som gör bedömningen. Källa: TDOK 2021:0299 och TDOK 2021:0303, kap 5.4.2.',
];

const UTFORD = 'Kontrollerad';
const EJ = 'Inte aktuellt';
// Kontrollpunkterna är en kryssruta (2026-10-19). Äldre jobb sparade Kontrollerad/Inte aktuellt.
const kontrollerad = v => v === true || v === UTFORD;

// Kontrollerade och bifogade egenkontroller. doc: förvalt Kontrollerad när jobbet har dokumentet.
const EGEN = [
  [57, '0737', 'Kontrollplan stabilitetspåverkande arbete', '0737'],
  [58, '0394', 'Spårväxel, besiktningsrapport', 'vaxel'],
  [59, '0846', 'Neutraliseringsrapport enl. beräkningsmetoden'],
  [60, '0391', 'Skarvspår, skarvöppningar'],
  [61, '-', 'Spårlägesdiagram belastad spårlägesmätning'],
  [62, '-', 'Spårlägesprotokoll obelastad spårlägesmätning', 'skevning'],
  [63, '0377 C³', 'Intyg belastad spårlägesmätning'],
  [64, '0435', 'Svetsrapport', 'svets'],
  [65, '-', 'Plattform, B- och H-mått'],
];

const ROLLER = [
  ['projektledare', 'TRV projektledare', 4, job => job.projektledare || '', job => job.projektledare_tel || ''],
  ['platschef', 'Platschef', 5, job => job.platschef || '', job => job.platschef_tel || ''],
  ['arbetsledare', 'Arbetsledare', 6, job => job.arbetsledare || '', job => job.arbetsledare_tel || ''],
  ['besiktningsman', 'Besiktningsman', 7],
  ['bankontrollant', 'Bankontrollant', 8, job => job.namn || '', job => job.namn_tel || ''],
];
// Bankontrollanten besiktigar och signerar. Finns en besiktningsman på jobbet tas
// bankontrollanten bort och besiktningsmannen signerar i stället (2026-10-19).
const besiktningsman = data => (data.besiktningsman || '').trim();

const kmm = (k, m) => (k ? `${k}+${String(m || 0).padStart(3, '0')}` : '');
// Km från/till hämtas från svetsrapportens svetsar med km+m (första och sista läget),
// annars från jobbet (2026-10-20). Utan till-värde gäller från-värdet. Visas grått och kan skrivas över.
// Bara svetsar med både km och m räknas; km utan m är ett nummer på växelbilden. En kilometer
// kan vara längre än 1000 m (123+1500), så km och m jämförs var för sig (2026-10-22).
const kmTal = (k, m) => [Number(k), Number(m || 0)];
const kmJamfor = ([k1, m1], [k2, m2]) => k1 - k2 || m1 - m2;
function svetsKm(job) {
  const lagen = (job.forms?.svets?.svetsar || [])
    .filter(r => r.lagekm && r.lagem)
    .map(r => [kmTal(r.lagekm, r.lagem), [r.lagekm, r.lagem]])
    .filter(([n]) => n.every(Number.isFinite))
    .sort((a, b) => kmJamfor(a[0], b[0]));
  if (lagen.length) return [lagen[0][1], lagen[lagen.length - 1][1]];
  const fran = [job.km || '', job.km ? job.m || '' : ''];
  return [fran, job.km2 ? [job.km2, job.m2 || ''] : fran];
}
// Km + m i två rutor, som i jobbet och svetsrapporten (2026-10-22). kmFran/kmTill (fritext)
// kommer från tidigare versioner.
const kmFalt = () => [
  { type: 'plus', label: 'Km från (km + m)', keys: ['franKm', 'franM'], placeholders: [job => svetsKm(job)[0][0], job => svetsKm(job)[0][1]] },
  { type: 'plus', label: 'Km till (km + m)', keys: ['tillKm', 'tillM'], placeholders: [job => svetsKm(job)[1][0], job => svetsKm(job)[1][1]] },
];
const KM_NYCKLAR = ['franKm', 'franM', 'tillKm', 'tillM', 'kmFran', 'kmTill'];
const kopieraKm = row => Object.fromEntries(KM_NYCKLAR.filter(k => row?.[k] !== undefined).map(k => [k, row[k]]));
// Blankettens km från/till för en rad. Utan eget till-värde gäller radens eget från-värde.
function radKm(row, job) {
  const [fPh, tPh] = svetsKm(job).map(([k, m]) => kmm(k, m));
  const fran = row.franKm ? kmm(row.franKm, row.franM) : row.kmFran || '';
  const till = row.tillKm ? kmm(row.tillKm, row.tillM) : row.kmTill || '';
  return [fran || fPh, till || fran || tPh];
}
const dpl = job => [job.driftplats, job.vxnr ? `vxl ${job.vxnr}` : '', job.spar ? `sp ${job.spar}` : ''].filter(Boolean).join(' / ');
const bankontrollant = (job, data) => (besiktningsman(data) ? '' : data.bankontrollant ?? job.namn ?? '');
const signerar = (job, data) => besiktningsman(data) || bankontrollant(job, data);

export default {
  key: 'ibt',
  code: 'TMALL 0824',
  title: 'Ibruktagandebesiktning banöverbyggnad',
  kort: 'IBT',
  format: 'overlay',
  ext: 'pdf',
  layout,
  templateHint: 'TMALL 0824 Ibruktagandebesiktning banöverbyggnad (PDF-mall)',

  async matches({ pdf }) {
    return !!pdf && pdf.subject === 'Spårdokumentation mall ibt';
  },

  sections: [
    // Kontaktpersonerna i ett eget avsnitt överst, minimerat från start (2026-10-20).
    {
      title: 'Kontaktpersoner',
      closed: true,
      help: 'Namn och telefon hämtas från Inställningar och går att ändra här.',
      items: [
        // Besiktningsmannen gäller bara jobbet och sparas inte till nästa (namnet föreslås ändå).
        ...ROLLER.flatMap(([key, label, , def, defTfn]) => {
          const hideIf = key === 'bankontrollant' ? (job, data) => besiktningsman(data) : null;
          const remember = key !== 'besiktningsman';
          return [
            // Namn och telefon på samma rad (2026-10-20).
            { type: 'text', key, label, defaultValue: def, remember: remember && !def, names: true, hideIf, row: 2 },
            { type: 'text', key: `${key}Tfn`, label: 'Telefon', inputType: 'tel', inputmode: 'tel', defaultValue: defTfn, remember: remember && !defTfn, hideIf },
          ];
        }),
      ],
    },
    {
      title: 'Rapportuppgifter',
      help: 'Grå text hämtas från jobbet.',
      items: [
        { type: 'radio', key: 'kontrakt', label: 'Arbete i', options: ['UH-kontrakt', 'Projekt'], noEmpty: true, remember: true, defaultValue: () => 'UH-kontrakt' },
        // Bandel är ett tresiffrigt nummer och får plats bredvid namnet (2026-10-20).
        { type: 'text', key: 'kontraktNamn', label: 'UH-kontrakt eller projekt (namn)', remember: true, row: 2, flex: 3 },
        { type: 'text', key: 'bandel', label: 'Bandel', inputmode: 'numeric', defaultValue: job => job.bandel || '', flex: 1 },
        // Datum och beställningsnr på samma rad (2026-10-20).
        { type: 'shared', label: 'Datum för besiktning', from: 'datum', row: 2 },
        { type: 'text', key: 'bestnr', label: 'Beställningsnr', placeholder: job => job.ao || '' },
        { type: 'text', key: 'arbete', label: 'Arbete', placeholder: () => 't.ex. Byte av isolerskarv vxl 12' },
      ],
    },
    {
      title: 'Objekt som ska kontrolleras',
      help: 'Arbeten enligt TRVINFRA-00271 bilaga 1. De som är märkta (spårsvetsare) får du som spårsvetsare besiktiga.',
      items: [{
        type: 'rows', key: 'objekt', max: 3, rowLabel: 'Objekt', addLabel: '+ Lägg till objekt',
        fields: [
          { type: 'text', key: 'dpl', label: 'Dpl/Sträcka/Spår' },
          ...kmFalt(),
          { type: 'select', key: 'nr', label: 'Arbete enligt TRVINFRA-00271 bilaga 1', options: ARBETE_VAL },
          { type: 'text', key: 'atgard', label: 'Åtgärd' },
        ],
        newRow(previous, job) {
          return previous ? { dpl: previous.dpl, ...kopieraKm(previous) } : { dpl: dpl(job) };
        },
      }],
    },
    {
      title: 'Hastighet',
      items: [
        { type: 'text', key: 'sth', label: 'STH (km/h)', inputmode: 'numeric', half: true },
        { type: 'text', key: 'tillaten', label: 'Tillåten hastighet vid ibruktagning (km/h)', inputmode: 'numeric', half: true },
      ],
    },
    ...PUNKTER.map(([title, rows]) => ({
      title: `Kontrollpunkter: ${title}`,
      // Kontrollpunkterna är minimerade från start (2026-10-20).
      closed: true,
      help: title === 'Allmänt' ? 'Kryssa i punkterna som är kontrollerade. De signeras med dina initialer, eller besiktningsmannens om en sådan är ifylld, och övriga lämnas tomma. Tryck på en punkt för att se vad som ska kontrolleras enligt TDOK 2021:0311. A- och V-anmärkningar ska vara åtgärdade före trafikupplåtelse, annars ska hastighetsnedsättning införas tills de är åtgärdade.' : null,
      items: rows.map(([r, label, enligt, moment]) => ({
        type: 'check', key: `k${r}`, label, isChecked: kontrollerad,
        details: { intro: [`Utförs enligt: ${enligt}`, `Kontrollmoment: ${moment}`], blocks: (PUNKT[r] || []).map(n => AVSNITT[n]) },
      })),
    })),
    {
      title: 'Kontrollerade och bifogade egenkontroller',
      help: 'Kryssa i det som är kontrollerat och bifogas. Dokument som ingår i jobbet är ikryssade från början.',
      items: EGEN.map(([, tmall, label, doc], i) => (
        { type: 'check', key: `e${i}`, label: `${tmall === '-' ? '' : `TMALL ${tmall} `}${label}`, defaultValue: job => !!doc && !!job.docs?.includes(doc), isChecked: kontrollerad }
      )),
    },
    {
      title: 'Noterade anmärkningar',
      help: 'Rutorna på blanketten är små. En lång anmärkning bryts på två eller tre rader och skrivs mindre, så skriv så kort som möjligt.',
      items: [{
        type: 'rows', key: 'anm', max: 4, rowLabel: 'Anmärkning', addLabel: '+ Lägg till anmärkning',
        fields: [
          { type: 'text', key: 'text', label: 'Besiktningsanmärkning' },
          ...kmFalt(),
          { type: 'text', key: 'anl', label: 'Anläggning' },
          { type: 'select', key: 'prio', label: 'Prioritet', options: PRIO, info: PRIO_INFO },
          { type: 'text', key: 'atgardad', label: 'Anm. åtgärdad dat/sign' },
        ],
        newRow(previous, job) {
          return kopieraKm(previous);
        },
      }],
    },
    {
      title: 'Godkänd för spårbunden trafik',
      help: 'På rubricerad sträcka/anläggning intygas att banan är byggd och ibruktagandebesiktigad, enligt gällande normer och föreskrifter och kan därmed upplåtas för spårbunden trafik.',
      items: [{
        type: 'rows', key: 'godkand', max: 2, rowLabel: 'Sträcka', addLabel: '+ Lägg till sträcka',
        fields: [
          ...kmFalt(),
          { type: 'text', key: 'spar', label: 'Spår', half: true },
          // Tom ruta blir Full (2026-10-20).
          { type: 'text', key: 'sth', label: 'För STH', inputmode: 'numeric', half: true, placeholder: () => 'Full' },
          { type: 'text', key: 'kommentar', label: 'Övrig kommentar' },
        ],
        newRow(previous, job) {
          return { ...kopieraKm(previous), spar: previous?.spar ?? (job.spar || '') };
        },
      }],
    },
    {
      title: 'Underskrift',
      help: 'Underskriften blir initialerna och namnförtydligandet hela namnet. Det är bankontrollanten som signerar, eller besiktningsmannen om en sådan är ifylld.',
      items: [
        // Datum och klockslag kan bli bara datum (2026-10-19).
        { type: 'text', key: 'signDatum', label: 'Datum', inputType: 'date', defaultValue: job => blankettDatum(job) },
        { type: 'check', key: 'medKlockslag', label: 'Skriv även klockslag', defaultValue: true },
        { type: 'text', key: 'klockslag', label: 'Klockslag', inputType: 'time', hideIf: (job, data) => data.medKlockslag === false },
      ],
    },
  ],

  // Varning innan filerna skapas (2026-10-20).
  saknas: (job, data) => (PUNKTER.some(([, rows]) => rows.some(([r]) => kontrollerad(data[`k${r}`]))) ? [] : ['inga kontrollpunkter ikryssade.']),

  // Rimlighetskontroller före Skapa filer (2026-10-22). Meter över 999 är tillåtna.
  rimlighet(job, data) {
    const out = [];
    const radTal = row => {
      const tal = (k, m) => (k ? kmTal(k, m) : null);
      const fran = tal(row.franKm, row.franM);
      const till = tal(row.tillKm, row.tillM);
      return fran && till && fran.every(Number.isFinite) && till.every(Number.isFinite) ? [fran, till] : null;
    };
    for (const [key, namn] of [['objekt', 'objekt'], ['anm', 'anmärkning'], ['godkand', 'sträcka']]) {
      (data[key] || []).forEach((row, i) => {
        const t = radTal(row);
        if (t && kmJamfor(t[1], t[0]) < 0) out.push(`${namn} ${i + 1}: Km till är mindre än Km från.`);
      });
    }
    const sth = Number(data.sth), tillaten = Number(data.tillaten);
    if (data.sth && data.tillaten && tillaten > sth) out.push('tillåten hastighet vid ibruktagning är högre än STH.');
    (data.anm || []).forEach((row, i) => {
      if (['A-anm', 'V-anm'].includes(row.prio) && !(row.atgardad || '').trim()) out.push(`anmärkning ${i + 1} är en ${row.prio[0]}-anmärkning som inte är markerad som åtgärdad. Den ska vara åtgärdad före trafikupplåtelse, annars ska hastighetsnedsättning införas.`);
    });
    return out;
  },

  toValues(job, data) {
    const val = (key, def) => (data[key] !== undefined ? data[key] : def);
    const datum = blankettDatum(job);
    const namn = signerar(job, data);
    const sign = initialer(namn);
    const kontrakt = val('kontrakt', 'UH-kontrakt');
    const v = {
      // Namnet skrivs i rutan för det som är valt. Utan namn blir det ett X.
      C2: kontrakt === 'UH-kontrakt' ? data.kontraktNamn || 'X' : '',
      E2: kontrakt === 'Projekt' ? data.kontraktNamn || 'X' : '',
      H2: datum,
      B3: data.arbete || '',
      I3: data.bestnr || job.ao || '',
      I9: val('bandel', job.bandel || ''),
      C15: data.sth || '',
      I15: data.tillaten || '',
      A78: [val('signDatum', datum), data.medKlockslag === false ? '' : data.klockslag].filter(Boolean).join(' '),
      C78: sign,
      G78: namn,
    };
    for (const [key, , r, def, defTfn] of ROLLER) {
      v[`D${r}`] = val(key, def ? def(job) : '') || '';
      v[`H${r}`] = val(`${key}Tfn`, defTfn ? defTfn(job) : '') || '';
      if (key === 'bankontrollant' && besiktningsman(data)) v[`D${r}`] = v[`H${r}`] = '';
    }
    (data.objekt || []).slice(0, 3).forEach((o, i) => {
      const r = 12 + i;
      const [fran, till] = radKm(o, job);
      Object.assign(v, { [`A${r}`]: o.dpl || '', [`C${r}`]: fran, [`D${r}`]: till, [`E${r}`]: nummer(o.nr), [`F${r}`]: arbete(o.nr), [`H${r}`]: o.atgard || '' });
    });
    for (const [, rows] of PUNKTER) {
      for (const [r] of rows) {
        v[`I${r}`] = kontrollerad(data[`k${r}`]) ? sign : '';
      }
    }
    EGEN.forEach(([r, , , doc], i) => {
      const har = doc && job.docs?.includes(doc);
      // Ikryssad = kontrollerad och bifogad (2026-10-19).
      if (kontrollerad(val(`e${i}`, !!har))) Object.assign(v, { [`F${r}`]: datum, [`H${r}`]: 'Ja', [`I${r}`]: sign });
    });
    (data.anm || []).slice(0, 4).forEach((a, i) => {
      const r = 68 + i;
      const [fran, till] = radKm(a, job);
      Object.assign(v, { [`A${r}`]: a.text || '', [`C${r}`]: fran, [`D${r}`]: till, [`E${r}`]: a.anl || '', [`G${r}`]: a.prio || '', [`H${r}`]: a.atgardad || '' });
    });
    (data.godkand || []).slice(0, 2).forEach((g, i) => {
      const r = 75 + i;
      const [fran, till] = radKm(g, job);
      Object.assign(v, { [`A${r}`]: fran, [`C${r}`]: till, [`E${r}`]: g.spar || '', [`F${r}`]: g.sth || 'Full', [`G${r}`]: g.kommentar || '' });
    });
    return v;
  },
};
