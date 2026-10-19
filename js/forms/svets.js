// Svetsrapport med egenkontroll (Excel-mall, dokumentnummer 2630). Excel-bladet skrivs ut
// till en tom PDF-mall och fälten skrivs på cellernas platser (svets-layout.js).
// Värdelistorna är mallens egna rullistor.
import LAYOUT from './svets-layout.js';
import { blankettDatum } from '../datum.js';

const MANADER = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
// Mallens lista går från 30 till −10 (och saknar −7). Här finns fler grader åt båda hållen.
const TEMP = Array.from({ length: 81 }, (_, i) => String(50 - i).replace('-', '−'));
const MODELL = ['60 E1', '50 E3', '54 E3', '49 E1', 'SJ 43', 'SJ 41', 'SJ 32', 'Gatu 56', 'Kranräl'];
const MATERIAL = ['Mn', 'R200', 'R220', 'R260', 'R320 Cr', 'R350 HT', 'R350 LHT', 'R400HT', 'R260Mn'];
const ARBETE = ['Skarvsvets', 'Korsning', 'Tunghalva', 'Passräl', 'Passräl / isol', 'Vingräl', 'Spetsräl', 'Tunga', 'Stödräl', 'Slirsår', 'Rälsände', 'Rep vinge', 'Rep spets', 'Rep stödräl', 'Rep tunga', 'Rep kross-skada', 'Rep flänrännespricka', 'Rep inox', 'Rep formsvets', 'Rep termit', 'Bladskarv', 'Dilatation', 'Neutralisering O', 'Neutralisering B'];
const METOD = ['SkV Elite L25', 'SkV Salino L25', 'SkV L50', 'SkV Stegform', 'Påsvets 111', 'Påsvets114 1,6', 'Påsvets 114 1,2', 'Formsvets 5mm', 'Formsvets 4mm', 'PLA', 'PLA L68'];
const TILLSATS = ['SKV  Z 70/80', 'SKV  Z 90', 'SKV Z 120', 'SKV Z 140', 'Oerlikon citorail', 'Oerlikon tubealloy', 'Castoline 3205', 'OK Weartrode 30', 'OK Weartrode 30 HD', 'OK 83.27', 'OK 74.78', 'OK 68.82', 'OK 14MnNi', 'OK 55.00', 'OK 48.00', 'OK 48.30', 'OK 38.65', 'OK Tubrodur 35 O M', 'OK Tubrodur15CrMnO/G', 'PLA Std D', 'PLA HT'];
const WPS = ['001:05', '3-11:04', '3-12:05', '3-13:06', '3-14:04', '3-15:04', '3-16:04', '3-17:04', '3-18:04', '3-20:04', '3-21:02', 'TDOK 2014:0664', 'DOK 5821'];

// Svetsraderna på blanketten: rad 6, 8 … 24.
const RADER = 10;
const COLS = { dag: 'C', plats: 'E', km: 'G', fore: 'I', efter: 'K', temp: 'M', modell: 'O', material: 'Q', hv: 'S', typ: 'U', metod: 'W', tillsats: 'Y', batch: 'AA', wps: 'AC' };

const EGENKONTROLL = [
  ['idmarkt', 'Idmärkt svets', 'G27'],
  ['geometri', 'Kontroll av geometri', 'G28'],
  ['stadat', 'Städat arbetsplats', 'G29'],
  ['ralsmangd', 'Återställd rälsmängd', 'G30'],
  ['kallt', 'Svetsad i kallt klimat', 'G31'],
  ['gasflode', 'Säkerställt gasflödet', 'G32'],
  ['svalning', 'Skyddad svalning av svetsobjekt', 'G33'],
  ['penetrant', 'Utfört penetrantprovning', 'K29'],
];

// Förval som hämtas från jobbet när svetsaren inte skrivit något eget.
const dag = job => (blankettDatum(job) ? String(Number(blankettDatum(job).slice(8))) : '');
const plats = job => [job.bandel, job.driftplats, job.vxnr || (job.spar && `spår ${job.spar}`)].filter(Boolean).join('-');
const kmm = (km, m) => `${km}+${String(m || 0).padStart(3, '0')}`;
const jobKmm = job => (job.vxnr || !job.km ? '' : kmm(job.km, job.m));
// Läget skrivs som km + m. Utan meter är första rutan svetsens nummer på växelbilden (1–14).
// row.nr och row.km (fritext) kommer från tidigare versioner.
const lage = (row, job) => (row.lagekm ? (row.lagem ? kmm(row.lagekm, row.lagem) : row.lagekm) : '') || row.nr || row.km || jobKmm(job);

// Rader som läggs till kopierar föregående svets, utom det som skiljer mellan svetsar.
const KOPIERAS_INTE = ['dag', 'plats', 'km', 'lagekm', 'lagem', 'nr', 'fore', 'efter'];

export default {
  key: 'svets',
  code: 'DOK 2630',
  title: 'Svetsrapport',
  format: 'overlay',
  ext: 'pdf',
  layout: LAYOUT,
  templateHint: 'DOK 2630 Svetsrapport (PDF-mall)',

  async matches({ pdf }) {
    return !!pdf && pdf.subject === 'Spårdokumentation mall svets';
  },

  sections: [
    {
      title: 'Huvud',
      items: [
        // Förval från Inställningar (grått). Det som skrivs här gäller bara den här rapporten.
        { type: 'text', key: 'enhet', label: 'Företag/enhet', placeholder: job => job.enhet || '' },
        { type: 'text', key: 'ao', label: 'Eget Ao nr', inputmode: 'numeric' },
        { type: 'text', key: 'kundao', label: 'Kundens Ao nr' },
        { type: 'text', key: 'bessy', label: 'Bessy anm/Ofelia' },
        { type: 'shared', label: 'Namn och svets-ID', value: job => [job.namn, job.svetsid].filter(Boolean).join(' ') },
        { type: 'shared', label: 'År och månad', value: job => (blankettDatum(job) ? `${blankettDatum(job).slice(0, 4)} ${MANADER[Number(blankettDatum(job).slice(5, 7)) - 1]}` : '') },
      ],
    },
    {
      title: 'Svetsar',
      help: `Blanketten har plats för ${RADER} svetsar. En ny svets får samma uppgifter som den förra, utom läge och kapmått. Grå text hämtas från jobbet.`,
      items: [{
        type: 'rows',
        key: 'svetsar',
        max: RADER,
        rowLabel: 'Svets',
        addLabel: '+ Lägg till svets',
        remember: true,
        fields: [
          { type: 'text', key: 'dag', label: 'Dag', inputmode: 'numeric', placeholder: dag, half: true },
          { type: 'select', key: 'hv', label: 'H/V räl', options: ['H', 'V'], half: true },
          { type: 'text', key: 'plats', label: 'Bandel-ort-växelnummer / spår', placeholder: plats },
          {
            type: 'plus', label: 'Km + m (utan meter: nr på växelbilden)', keys: ['lagekm', 'lagem'],
            image: { text: 'växelbilden', src: 'img/svets/vaxelbild.jpg', alt: 'Växelbild med svetsarnas nummer 1–14' },
            placeholders: [job => (job.vxnr ? '' : job.km || ''), job => (job.vxnr || !job.km ? '' : job.m || '')],
          },
          { type: 'text', key: 'fore', label: 'Före kap mm', inputmode: 'decimal', half: true },
          { type: 'text', key: 'efter', label: 'Efter kap mm', inputmode: 'decimal', half: true },
          { type: 'select', key: 'temp', label: 'Rältemp °C', options: TEMP, half: true },
          { type: 'select', key: 'modell', label: 'Rälsmodell', options: MODELL, half: true },
          { type: 'select', key: 'material', label: 'Rälsmaterial', options: MATERIAL },
          { type: 'select', key: 'typ', label: 'Typ av arbete', options: ARBETE },
          { type: 'select', key: 'metod', label: 'Svetsmetod', options: METOD },
          { type: 'select', key: 'tillsats', label: 'Tillsatsmaterial', options: TILLSATS },
          { type: 'text', key: 'batch', label: 'Batch nr', half: true },
          { type: 'select', key: 'wps', label: 'WPS nr', options: WPS, half: true },
        ],
        newRow(previous) {
          return Object.fromEntries(Object.entries(previous || {}).filter(([k]) => !KOPIERAS_INTE.includes(k)));
        },
      }],
    },
    {
      title: 'Egenkontroll',
      help: 'X = utfört, -- = inte aktuellt.',
      items: EGENKONTROLL.map(([key, label]) => ({ type: 'radio', key, label, options: ['X', '--'] })),
    },
    {
      title: 'Svetsansvarig och kommentarer',
      help: 'Grå text hämtas från Inställningar. Skriv här om det ska vara något annat i den här rapporten.',
      items: [
        { type: 'text', key: 'ansvarig', label: 'Svetsansvarig', placeholder: job => job.svetsansvarig || '' },
        { type: 'text', key: 'telefon', label: 'Telefonnr', inputmode: 'tel', placeholder: job => job.svetsansvarig_tel || '' },
        { type: 'textarea', key: 'kommentar', label: 'Avvikelser eller kommentarer' },
      ],
    },
  ],

  toValues(job, data) {
    const datum = blankettDatum(job);
    const v = {
      // Det som skrivits i rapporten går före Inställningar.
      C2: data.enhet || job.enhet || '',
      H2: data.ao || '',
      P2: data.kundao || '',
      C4: [job.namn, job.svetsid].filter(Boolean).join(' '),
      H4: datum.slice(0, 4),
      K4: datum ? MANADER[Number(datum.slice(5, 7)) - 1] : '',
      P4: data.bessy || '',
      R26: data.ansvarig || job.svetsansvarig || '',
      R27: data.telefon || job.svetsansvarig_tel || '',
      O29: data.kommentar || '',
    };
    const auto = { dag: dag(job), plats: plats(job) };
    (data.svetsar || []).slice(0, RADER).forEach((row, i) => {
      for (const [k, col] of Object.entries(COLS)) v[`${col}${6 + 2 * i}`] = (k === 'km' ? lage(row, job) : row[k] || auto[k]) || '';
    });
    for (const [key, , cell] of EGENKONTROLL) v[cell] = data[key] || '';
    return v;
  },
};
