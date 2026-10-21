// TMALL 0844 Rapport från kontroll av spänningsfri temperatur enligt kapmetoden, v1.0
// (Excel-mall med makron). Bladet Kapmetoden skrivs ut till en tom PDF-mall och fälten skrivs
// på cellernas platser (kap-layout.js). e, ΔT och SFT räknas som i mallen.
import LAYOUT from './kap-layout.js';
import { blankettDatum } from '../datum.js';
import { initialer } from '../initialer.js';

// Mallens rader 6–16.
const RADER = 11;
const COLS = { bandel: 'B', stracka: 'C', spar: 'D', sparnr: 'E', ral: 'F', km: 'G', m: 'H', t: 'I', lf: 'J', le: 'K', e: 'L', dt: 'M', sft: 'N', typ: 'O', datum: 'P', svetsnr: 'Q', sign: 'R', anm: 'S' };

// Rälsbrottsöppning e (mm) → temperaturavvikelse ΔT (°C), mallens bladet Admin
// (TRVINFRA-00012 bilaga 2, tabell B2.1). ΔT går från −20 till +20 i steg om 1 °C.
const OPPNING = [-13.8, -12.7, -11.7, -10.8, -9.9, -9, -8.3, -7.5, -6.8, -6.1, -5.5, -4.9, -4.4, -3.8, -3.3, -2.8, -2.3, -1.9, -1.4, -1, -0.6,
  -0.1, 0.3, 0.7, 1.2, 1.6, 2, 2.5, 3, 3.5, 4, 4.6, 5.1, 5.7, 6.4, 7.1, 7.8, 8.5, 9.3, 10.2, 11.1];

const tal = v => (v == null || String(v).trim() === '' ? null : Number(String(v).replace(',', '.').replace('−', '-')));
const komma = (x, dec) => String(Math.round(x * 10 ** dec) / 10 ** dec).replace('.', ',').replace('-', '−');

// e = Le − Lf.
function oppning(row) {
  const lf = tal(row.lf); const le = tal(row.le);
  return lf == null || le == null || Number.isNaN(lf) || Number.isNaN(le) ? null : Math.round((le - lf) * 10) / 10;
}
// ΔT interpoleras linjärt mellan tabellens värden, som formeln i mallen. Utanför tabellen: null.
function avvikelse(e) {
  if (e == null || e < OPPNING[0] || e > OPPNING[OPPNING.length - 1]) return null;
  let i = OPPNING.findLastIndex(x => x <= e);
  if (i === OPPNING.length - 1) return 20;
  return -20 + i + (e - OPPNING[i]) / (OPPNING[i + 1] - OPPNING[i]);
}
// Blankettens värden för e, ΔT och SFT. ΔT och SFT avrundas till hela grader som i mallen.
export function berakna(row) {
  const e = oppning(row);
  if (e == null) return { e: '', dt: '', sft: '' };
  const dt = avvikelse(e);
  if (dt == null) return { e: komma(e, 1), dt: 'Utanför', sft: '' };
  const t = tal(row.t);
  return { e: komma(e, 1), dt: komma(dt, 0), sft: t == null || Number.isNaN(t) ? '' : komma(t + dt, 0) };
}

// Förval från jobbet och Inställningar.
const auto = job => ({
  bandel: job.bandel || '', stracka: job.driftplats || '', spar: job.spar || '',
  km: job.km || '', m: job.m || '', svetsnr: job.svetsid || '', sign: initialer(job.namn),
});

// Nästa kapställe kopierar det förra utom mätvärdena. Rälen byts, så att höger och vänster
// räl kommer efter varandra.
const KOPIERAS_INTE = ['m', 't', 'lf', 'le', 'anm'];

export default {
  key: 'kap',
  code: 'TMALL 0844',
  title: 'Spänningsfri temperatur SFT, Kapmetoden',
  kort: 'SFT Kapmetoden',
  format: 'overlay',
  ext: 'pdf',
  layout: LAYOUT,
  templateHint: 'TMALL 0844 Spänningsfri temperatur SFT, Kapmetoden (PDF-mall)',

  async matches({ pdf }) {
    return !!pdf && pdf.subject === 'Spårdokumentation mall kap';
  },

  sections: [
    {
      title: 'Kapställen',
      help: `Blanketten har plats för ${RADER} kapställen. e, ΔT och SFT räknas ut som i mallen, enligt TRVINFRA-00012 bilaga 2 tabell B2.1. Grå text hämtas från jobbet och Inställningar.`,
      items: [{
        type: 'rows',
        key: 'kap',
        max: RADER,
        rowLabel: 'Kapställe',
        addLabel: '+ Lägg till kapställe',
        fields: [
          { type: 'text', key: 'bandel', label: 'Bandel', inputmode: 'numeric', placeholder: job => job.bandel || '', half: true },
          { type: 'text', key: 'stracka', label: 'Stationssträcka', placeholder: job => job.driftplats || '', half: true },
          { type: 'text', key: 'spar', label: 'Spår (U/N/E)', placeholder: job => job.spar || '', half: true },
          { type: 'text', key: 'sparnr', label: 'Spårnummer', half: true },
          { type: 'select', key: 'ral', label: 'Räl', options: ['Höger', 'Vänster'], half: true },
          { type: 'select', key: 'typ', label: 'Mätning', options: [['Första kap', 'Första kap'], ['Kontrollm.', 'Kontrollmätning']], half: true },
          { type: 'plus', label: 'Kapställe km+m', keys: ['km', 'm'], placeholders: [job => job.km || '', job => job.m || ''] },
          { type: 'text', key: 't', label: 'T rältemperatur (°C)', inputmode: 'decimal' },
          { type: 'text', key: 'lf', label: 'Lf före kap (mm)', inputmode: 'decimal', half: true },
          { type: 'text', key: 'le', label: 'Le efter kap (mm)', inputmode: 'decimal', half: true },
          { type: 'calc', label: 'e (mm)', value: row => berakna(row).e, row: 3 },
          { type: 'calc', label: 'ΔT (°C)', value: row => berakna(row).dt },
          { type: 'calc', label: 'SFT (°C)', value: row => berakna(row).sft },
          { type: 'text', key: 'datum', label: 'Datum', inputType: 'date', defaultValue: job => blankettDatum(job) },
          { type: 'text', key: 'svetsnr', label: 'Svetsarnummer', placeholder: job => job.svetsid || '', half: true },
          { type: 'text', key: 'sign', label: 'Sign.', placeholder: job => initialer(job.namn), half: true },
          { type: 'text', key: 'anm', label: 'Anmärkning' },
        ],
        newRow(previous) {
          const row = Object.fromEntries(Object.entries(previous || {}).filter(([k]) => !KOPIERAS_INTE.includes(k)));
          if (row.ral) row.ral = row.ral === 'Höger' ? 'Vänster' : 'Höger';
          return row;
        },
      }],
    },
    {
      title: 'Underskrift',
      help: 'Grå text hämtas från Inställningar. Skriv här om det ska vara något annat i den här rapporten.',
      items: [
        { type: 'text', key: 'entreprenor', label: 'Entreprenör', placeholder: job => job.foretag || '' },
        { type: 'text', key: 'namn', label: 'Namn', placeholder: job => job.namn || '' },
        { type: 'text', key: 'datum', label: 'Datum', inputType: 'date', defaultValue: job => blankettDatum(job) },
        { type: 'text', key: 'bestallare', label: 'Rapporten delges beställare på Trafikverket (namn/org)', names: true },
      ],
    },
  ],

  // Rimlighetskontroll före Skapa filer (2026-10-21).
  rimlighet: (job, data) => (data.kap || []).flatMap((row, i) => {
    const t = tal(row.t);
    return [
      ...(berakna(row).dt === 'Utanför' ? [`kapställe ${i + 1}: e ligger utanför tabellen, kontrollera Lf och Le.`] : []),
      ...(t != null && (t < -40 || t > 70) ? [`kapställe ${i + 1}: rältemperaturen ${row.t} °C ser felskriven ut.`] : []),
    ];
  }),

  toValues(job, data) {
    const datum = blankettDatum(job);
    const v = {
      K26: data.entreprenor || job.foretag || '',
      K27: data.namn || job.namn || '',
      K28: data.datum !== undefined ? data.datum : datum,
      I31: data.bestallare || '',
    };
    const forval = { ...auto(job), datum };
    (data.kap || []).slice(0, RADER).forEach((row, i) => {
      const r = { ...row, ...berakna(row) };
      for (const [k, col] of Object.entries(COLS)) {
        // Meter följer bara med förvalet om km också är förvalet.
        const def = k === 'm' && row.km ? '' : forval[k];
        v[`${col}${6 + i}`] = (r[k] !== undefined && r[k] !== '' ? r[k] : def) || '';
      }
    });
    return v;
  },
};
