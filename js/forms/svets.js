// Svetsrapport med egenkontroll (Excel-mall, dokumentnummer 2630). Excel-bladet skrivs ut
// till en tom PDF-mall och fälten skrivs på cellernas platser (svets-layout.js).
// Värdelistorna är mallens egna rullistor.
import LAYOUT from './svets-layout.js';
import { blankettDatum } from '../datum.js';
import { berakna } from './kap.js';

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
// Förval: Ditt namn och svets-ID från Inställningar.
const namnId = job => [job.namn, job.svetsid].filter(Boolean).join(' ');
const kmm = (km, m) => `${km}+${String(m || 0).padStart(3, '0')}`;
const jobKmm = job => (job.vxnr || !job.km ? '' : kmm(job.km, job.m));
// Läget skrivs som km + m. Utan meter är första rutan svetsens nummer på växelbilden (1–14).
// row.nr och row.km (fritext) kommer från tidigare versioner.
const lage = (row, job) => (row.lagekm ? (row.lagem ? kmm(row.lagekm, row.lagem) : row.lagekm) : '') || row.nr || row.km || jobKmm(job);

// Rader som läggs till kopierar föregående svets, utom det som skiljer mellan svetsar.
const KOPIERAS_INTE = ['dag', 'plats', 'km', 'lagekm', 'lagem', 'nr', 'fore', 'efter'];

// SFT ur före/efter kap och rältemp, som på Spänningsfri temperatur SFT, Kapmetoden.
function sft(row) {
  const r = berakna({ lf: row.fore, le: row.efter, t: row.temp });
  return r.dt === 'Utanför' ? 'Utanför' : r.sft;
}

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
      title: 'Rapportuppgifter',
      items: [
        // Förval från Inställningar (grått). Det som skrivs här gäller bara den här rapporten.
        { type: 'text', key: 'enhet', label: 'Företag/enhet', placeholder: job => job.enhet || '' },
        // Svetsansvarig och eget namn under enheten, Ao-numren på en rad (2026-10-20).
        { type: 'text', key: 'ansvarig', label: 'Svetsansvarig', placeholder: job => job.svetsansvarig || '', row: 2, flex: 3 },
        { type: 'text', key: 'telefon', label: 'Telefonnr', inputmode: 'tel', placeholder: job => job.svetsansvarig_tel || '', flex: 2 },
        { type: 'text', key: 'namnId', label: 'Namn och svets-ID', placeholder: job => namnId(job) },
        { type: 'text', key: 'ao', label: 'Eget Ao nr', inputmode: 'numeric', placeholder: job => job.ao || '', row: 2 },
        { type: 'text', key: 'kundao', label: 'Kundens Ao nr' },
        { type: 'text', key: 'bessy', label: 'Bessy anm/Ofelia' },
        { type: 'shared', label: 'År och månad', value: job => (blankettDatum(job) ? `${blankettDatum(job).slice(0, 4)} ${MANADER[Number(blankettDatum(job).slice(5, 7)) - 1]}` : '') },
      ],
    },
    {
      title: 'Svetsar',
      help: `Blanketten har plats för ${RADER} svetsar; fler svetsar hamnar på en blankett till (del 2, 3 …). En ny svets får samma uppgifter som den förra, utom läge och kapmått. Grå text hämtas från jobbet. SFT räknas ut som på kapmetoden när före kap, efter kap och rältemp är ifyllda; den visas bara här och kommer inte med på blanketten.`,
      items: [{
        type: 'rows',
        key: 'svetsar',
        max: RADER * 5,
        rowLabel: 'Svets',
        addLabel: '+ Lägg till svets',
        remember: true,
        // Smala Dag och H/V bredvid platsen, rullgardinerna parvis (2026-10-20).
        fields: [
          { type: 'text', key: 'dag', label: 'Dag', inputmode: 'numeric', placeholder: dag, row: 3, flex: 1 },
          { type: 'select', key: 'hv', label: 'H/V', options: ['H', 'V'], flex: 1 },
          { type: 'text', key: 'plats', label: 'Bandel-ort-vxnr / spår', placeholder: plats, flex: 4 },
          {
            type: 'plus', label: 'Km + m (utan meter: nr på växelbilden)', keys: ['lagekm', 'lagem'],
            image: { text: 'växelbilden', src: 'img/svets/vaxelbild.jpg', alt: 'Växelbild med svetsarnas nummer 1–14' },
            placeholders: [job => (job.vxnr ? '' : job.km || ''), job => (job.vxnr || !job.km ? '' : job.m || '')],
          },
          { type: 'text', key: 'fore', label: 'Före kap mm', inputmode: 'decimal', half: true },
          { type: 'text', key: 'efter', label: 'Efter kap mm', inputmode: 'decimal', half: true },
          // SFT räknas som på kapmetoden och visas bara i appen, inte på blanketten (2026-10-20).
          { type: 'select', key: 'temp', label: 'Rältemp °C', options: TEMP, row: 3, flex: 1 },
          { type: 'calc', label: 'SFT °C', value: sft, flex: 1 },
          { type: 'select', key: 'modell', label: 'Rälsmodell', options: MODELL, flex: 1 },
          { type: 'select', key: 'material', label: 'Rälsmaterial', options: MATERIAL, half: true },
          { type: 'select', key: 'typ', label: 'Typ av arbete', options: ARBETE, half: true },
          { type: 'select', key: 'metod', label: 'Svetsmetod', options: METOD, half: true },
          { type: 'select', key: 'tillsats', label: 'Tillsatsmaterial', options: TILLSATS, half: true },
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
      help: 'Kryssa i det som är utfört. Det blir X på blanketten, och det som inte är ikryssat lämnas tomt.',
      // En kryssruta per egenkontroll (2026-10-19). Äldre jobb sparade X eller --.
      items: EGENKONTROLL.map(([key, label]) => ({ type: 'check', key, label, isChecked: v => v === true || v === 'X' })),
    },
    {
      title: 'Avvikelser och kommentarer',
      items: [
        { type: 'textarea', key: 'kommentar', label: 'Avvikelser eller kommentarer' },
      ],
    },
  ],

  // Varning innan filerna skapas (2026-10-20).
  // Fler än 10 svetsar ger fler blanketter (2026-10-20).
  sidor: (job, data) => Math.max(1, Math.ceil((data.svetsar || []).length / RADER)),
  status: (job, data) => {
    const n = (data.svetsar || []).length;
    const sidor = Math.ceil(n / RADER);
    return n ? `${n} ${n === 1 ? 'svets' : 'svetsar'}${sidor > 1 ? `, ${sidor} blanketter` : ''}` : 'Inga svetsar ännu';
  },
  saknas: (job, data) => ((data.svetsar || []).length ? [] : ['inga svetsar ifyllda.']),

  toValues(job, data, { sida = 0 } = {}) {
    const datum = blankettDatum(job);
    const v = {
      // Det som skrivits i rapporten går före Inställningar.
      C2: data.enhet || job.enhet || '',
      H2: data.ao || job.ao || '',
      P2: data.kundao || '',
      C4: data.namnId || namnId(job),
      H4: datum.slice(0, 4),
      K4: datum ? MANADER[Number(datum.slice(5, 7)) - 1] : '',
      P4: data.bessy || '',
      R26: data.ansvarig || job.svetsansvarig || '',
      R27: data.telefon || job.svetsansvarig_tel || '',
      O29: data.kommentar || '',
    };
    const auto = { dag: dag(job), plats: plats(job) };
    (data.svetsar || []).slice(sida * RADER, (sida + 1) * RADER).forEach((row, i) => {
      for (const [k, col] of Object.entries(COLS)) v[`${col}${6 + 2 * i}`] = (k === 'km' ? lage(row, job) : row[k] || auto[k]) || '';
    });
    for (const [key, , cell] of EGENKONTROLL) v[cell] = data[key] === true || data[key] === 'X' ? 'X' : '';
    return v;
  },
};
