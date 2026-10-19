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
// TRVINFRA-00012 7.3.13 råd: skevning 20 mm på 6 m (ramptal 300) är UH2-gränsen för STH ≤ 80 km/h.
const UH2_RAMPTAL = 300;

export default {
  key: 'skevning',
  code: 'TMALL 1605',
  title: 'Skevningsprotokoll spårläge',
  format: 'overlay',
  ext: 'pdf',
  layout: LAYOUT,
  templateHint: 'TMALL 1605 Skevningsprotokoll spårläge (PDF-mall)',

  async matches({ pdf }) {
    return !!pdf && pdf.subject === 'Spårdokumentation mall skevning';
  },

  sections: [
    {
      title: 'Protokoll',
      help: 'Grå text hämtas från jobbet och Inställningar.',
      items: [
        { type: 'text', key: 'protokollforare', label: 'Protokollförare', placeholder: job => job.namn || '' },
        { type: 'text', key: 'datum', label: 'Datum', inputType: 'date', defaultValue: job => blankettDatum(job) },
        { type: 'text', key: 'plats', label: 'Bandel/driftplats', placeholder: job => [job.bandel, job.driftplats].filter(Boolean).join(' ') },
        { type: 'text', key: 'spar', label: 'Spår', placeholder: job => job.spar || '' },
        { type: 'text', key: 'utrustning', label: 'Mätutrustning', remember: true },
        { type: 'plus', label: 'Km+m första mätpunkt', keys: ['km', 'm'], placeholders: [job => job.km || '', job => job.m || ''] },
      ],
    },
    {
      title: 'Mätpunkter',
      help: `Mätpunkt varannan meter, 0–36 m. Ändring per 6 m = rälsförhöjningen 6 m längre fram minus den i punkten, ramptal = 6000 / ändringen. Rött ramptal är under ${UH2_RAMPTAL}, dvs. skevning över 20 mm på 6 m, som är UH2-gränsen för STH ≤ 80 km/h (TRVINFRA-00012 7.3.13). Enter går till raden under.`,
      items: [{
        type: 'matrix', key: 'punkter', rows: PUNKTER, rowHead: 'm', rowLabel: meter,
        cols: [
          { key: 'sv', label: 'Spårvidd (mm)' },
          { key: 'rf', label: 'Rälsförh. (mm)', sign: true },
        ],
        calc: [
          { label: 'Ändr. 6 m', value: (list, i) => (andring(list, i) == null ? '' : komma(andring(list, i))) },
          { label: 'Ramptal', value: (list, i) => (ramptal(list, i) == null ? '' : String(Math.round(ramptal(list, i)))), warn: (list, i) => ramptal(list, i) != null && ramptal(list, i) < UH2_RAMPTAL },
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
      C4: data.utrustning || '',
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
