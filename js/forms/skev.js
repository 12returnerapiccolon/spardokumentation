// TMALL 1605 Skevningsprotokoll spårläge v2.0 (Excel-mall). Bladet "Mall för utskrift" skrivs
// ut till en tom PDF-mall och fälten skrivs på cellernas platser (skev-layout.js).
// Rälsförhöjningens ändring per 6 m och ramptalet räknas som på bladet "Digital".
import LAYOUT from './skev-layout.js';
import { blankettDatum } from '../datum.js';

// Mätpunkt varannan meter, 0–36 m: rad 7, 9 … 43.
const PUNKTER = 19;
const meter = i => String(2 * i);

const tal = v => (v == null || String(v).trim() === '' ? null : Number(String(v).replace(',', '.').replace('−', '-')));
const komma = x => String(Math.round(x * 10) / 10).replace('.', ',').replace('-', '−');

// Ändringen per 6 m från mätpunkt i (rälsförhöjningen 6 m längre fram minus den i punkt i).
function andring(list, i) {
  const a = tal(list[i]?.rf); const b = tal(list[i + 3]?.rf);
  return a == null || b == null || Number.isNaN(a) || Number.isNaN(b) ? null : b - a;
}
// Ramptal = 6000 / ändringen (mm/m), utan tecken. Ingen ändring ger inget ramptal.
function ramptal(list, i) {
  const d = andring(list, i);
  return d == null || d === 0 ? null : Math.abs(6000 / d);
}
// UH2-gränser vid obelastad mätning, TRVINFRA-00013 v2.0 avsnitt 11.3: spårvidd (+max/−min mot
// nominell) tabell K11.15, rälsförhöjningens avvikelse från anordnad K11.18, skevning 6 m K11.19.
const KLASSER = {
  H5: { sth: '200 < V ≤ 250', sv: [15, 4], rf: 6, skev: 10 },
  H4: { sth: '160 < V ≤ 200', sv: [20, 5], rf: 7, skev: 12 },
  H3: { sth: '120 < V ≤ 160', sv: [20, 5], rf: 8, skev: 14 },
  H2: { sth: '80 < V ≤ 120', sv: [25, 5], rf: 10, skev: 17 },
  H1: { sth: '40 < V ≤ 80', sv: [30, 5], rf: 13, skev: 20 },
  H0: { sth: 'V ≤ 40', sv: [30, 5], rf: 16, skev: 20 },
};
const klass = data => KLASSER[data.klass || 'H1'];
const nominell = data => tal(data.nominell) ?? 1435;
const anordnad = data => tal(data.anordnad) ?? 0;
const utanforSv = (list, i, data) => {
  const v = tal(list[i]?.sv); if (v == null || Number.isNaN(v)) return false;
  const [plus, minus] = klass(data).sv; const d = v - nominell(data);
  return d > plus || d < -minus;
};
const utanforRf = (list, i, data) => {
  const v = tal(list[i]?.rf); if (v == null || Number.isNaN(v)) return false;
  return Math.abs(v - anordnad(data)) > klass(data).rf;
};
const utanforSkev = (list, i, data) => { const d = andring(list, i); return d != null && Math.abs(d) > klass(data).skev; };
// Hoppa vidare när värdet är komplett: spårvidden har fyra siffror. Rälsförhöjningen har minst två
// siffror (lika många som den anordnade om den är större), och 0 är komplett direkt.
const siffror = v => String(v).replace(/\D/g, '').length;
const klarSv = v => siffror(v) >= 4 && !/[,.]$/.test(v);
const klarRf = (v, data) => /^-?0$/.test(v) || (siffror(v) >= Math.max(2, siffror(Math.abs(anordnad(data)))) && !/[,.]$/.test(v));

export default {
  key: 'skevning',
  code: 'TMALL 1605',
  title: 'Skevningsprotokoll spårläge',
  kort: 'Skevningsprotokoll',
  format: 'overlay',
  ext: 'pdf',
  layout: LAYOUT,
  templateHint: 'TMALL 1605 Skevningsprotokoll spårläge (PDF-mall)',

  async matches({ pdf }) {
    return !!pdf && pdf.subject === 'Spårdokumentation mall skevning';
  },

  sections: [
    {
      title: 'Rapportuppgifter',
      help: 'Grå text hämtas från jobbet och Inställningar.',
      items: [
        {
          type: 'select', key: 'klass', label: 'Hastighetsklass (STH)', remember: true,
          options: Object.entries(KLASSER).reverse().map(([k, v]) => [k, `${k}, ${v.sth} km/h`]),
          info: ['Väljer vilka UH2-gränser som gäller för de röda markeringarna, enligt TRVINFRA-00013 v2.0 avsnitt 11.3 (obelastad mätning). Utan val används H1 (40 < V ≤ 80 km/h).',
            ...Object.entries(KLASSER).reverse().map(([k, v]) => `${k} (${v.sth} km/h): spårvidd +${v.sv[0]}/−${v.sv[1]} mm, rälsförhöjning ±${v.rf} mm, skevning 6 m ${v.skev} mm.`)],
        },
        { type: 'text', key: 'nominell', label: 'Nominell spårvidd (mm)', inputmode: 'decimal', placeholder: () => '1435', half: true },
        { type: 'text', key: 'anordnad', label: 'Anordnad rälsförhöjning (mm)', inputmode: 'decimal', placeholder: () => '0', half: true },
        { type: 'text', key: 'protokollforare', label: 'Protokollförare', placeholder: job => job.namn || '' },
        { type: 'text', key: 'datum', label: 'Datum', inputType: 'date', defaultValue: job => blankettDatum(job) },
        { type: 'text', key: 'plats', label: 'Bandel/driftplats', placeholder: job => [job.bandel, job.driftplats].filter(Boolean).join(' ') },
        { type: 'text', key: 'spar', label: 'Spår', placeholder: job => job.spar || '' },
        // Spårpass om inget annat anges (2026-10-20).
        { type: 'text', key: 'utrustning', label: 'Mätutrustning', remember: true, placeholder: () => 'Spårpass' },
        { type: 'plus', label: 'Km+m första mätpunkt', keys: ['km', 'm'], placeholders: [job => job.km || '', job => job.m || ''] },
      ],
    },
    {
      title: 'Mätpunkter',
      help: 'Mätpunkt varannan meter, 0–36 m. Ändring per 6 m = rälsförhöjningen 6 m längre fram minus den i punkten (skevning), ramptal = 6000 / ändringen. Rött är utanför UH2 för vald hastighetsklass. Som på blanketten står ändringen mitt emellan de två mittersta punkterna; tryck på den för att se vilka punkter den räknas från. Rutan hoppar vidare när spårvidden har fyra siffror och rälsförhöjningen två; annars trycker du Nästa.',
      items: [{
        type: 'matrix', key: 'punkter', rows: PUNKTER, rowHead: 'm', rowLabel: meter, span: 3,
        cols: [
          { key: 'sv', label: 'Spårvidd (mm)', warn: utanforSv, klar: klarSv },
          { key: 'rf', label: 'Rälsförh. (mm)', sign: true, warn: utanforRf, klar: klarRf },
        ],
        calc: [
          { label: 'Ändr. 6 m', value: (list, i) => (andring(list, i) == null ? '' : komma(andring(list, i))), warn: utanforSkev },
          { label: 'Ramptal', value: (list, i) => (ramptal(list, i) == null ? '' : String(Math.round(ramptal(list, i)))), warn: utanforSkev },
        ],
      }],
    },
    {
      title: 'Anmärkningar',
      items: [{
        type: 'rows', key: 'anm', max: PUNKTER, rowLabel: 'Anmärkning', addLabel: '+ Lägg till anmärkning',
        fields: [
          { type: 'select', key: 'punkt', label: 'Mätpunkt (m)', options: Array.from({ length: PUNKTER }, (_, i) => meter(i)) },
          { type: 'text', key: 'text', label: 'Anmärkning' },
        ],
        newRow: () => ({}),
      }],
    },
  ],

  toValues(job, data) {
    const datum = blankettDatum(job);
    const km = data.km || job.km || '';
    const m = data.km ? data.m || '' : job.m || '';
    const v = {
      C2: data.protokollforare || job.namn || '',
      G2: data.datum !== undefined ? data.datum : datum,
      C3: data.plats || [job.bandel, job.driftplats].filter(Boolean).join(' '),
      G3: data.spar || job.spar || '',
      C4: data.utrustning || 'Spårpass',
      G4: km ? `${km}+${String(m || 0).padStart(3, '0')}` : '',
    };
    const list = data.punkter || [];
    for (let i = 0; i < PUNKTER; i++) {
      const r = 7 + 2 * i;
      v[`A${r}`] = meter(i);
      v[`B${r}`] = list[i]?.sv || '';
      v[`C${r}`] = list[i]?.rf || '';
    }
    // Ändring och ramptal för punkt 0–30 m står mellan punkterna, rad 10 … 40.
    for (let i = 0; i < 16; i++) {
      const d = andring(list, i); const rt = ramptal(list, i);
      v[`D${10 + 2 * i}`] = d == null ? '' : komma(d);
      v[`E${10 + 2 * i}`] = rt == null ? '' : String(Math.round(rt));
    }
    // Anmärkningsrutorna ligger en halv rad ned: punkt i får rad 8 + 2i, sista punkten delar med punkten före.
    const anm = {};
    for (const a of data.anm || []) {
      if (!a.text) continue;
      const i = Math.min(Number(a.punkt || 0) / 2, PUNKTER - 2);
      const cell = `F${8 + 2 * i}`;
      const text = Number(a.punkt) === 2 * (PUNKTER - 1) ? `${a.punkt} m: ${a.text}` : a.text;
      anm[cell] = anm[cell] ? `${anm[cell]}; ${text}` : text;
    }
    return { ...v, ...anm };
  },
};
