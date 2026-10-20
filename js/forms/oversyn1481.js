// TMALL 1481 Översyn spårväxel (PDF-formulär, 2 sidor).
// Fältnamnen är PDF-mallens egna. Ordningen följer raderna på blanketten.
import { blankettDatum } from '../datum.js';

const KONTROLL = ['Kontr.', 'Kontr. & justerat'];
const OK_JUST = ['Ok', 'Justerat'];
const PROFIL = ['Kontrollerat', 'Slipat', 'Påsvetsat & slipat'];
const HV = ['Höger', 'Vänster', 'Höger och vänster'];

// Sida 1: kontrollmoment. h saknas där blanketten bara har en åtgärdsruta.
const MOMENT = [
  { label: 'Kontroll och justering av mätvärden', v: 'Dropdown1.0.0', anm: 'Text9.0', options: KONTROLL },
  { label: 'Åtdragning befästning, bult mm', v: 'Dropdown1.1.0', anm: 'Text9.1', options: ['Ok', 'Åtdragning'] },
  { label: 'Utbyte / komplettering befästning', v: 'Dropdown1.2.0', anm: 'Text9.2', options: ['Ok', 'Utbyte', 'Komplettering'] },
  { label: 'Riktning (växeltunga H, växeltunga V)', v: 'Dropdown1.3.0.0', h: 'Dropdown1.3.0.1', anm: 'Text9.3', options: OK_JUST },
  { label: 'Smörjning växeltunga (ej lager, endast SJ43 och SJ50)', v: 'Dropdown1.4.0.0.0', h: 'Dropdown1.4.0.0.1', anm: 'Text9.4.0', options: ['Ok', 'Smörjt'] },
  { label: 'Kontroll / justering / byte defekt rull- och kullager', v: 'Dropdown1.4.1.0.0', h: 'Dropdown1.4.1.0.1', anm: 'Text9.4.1', options: ['Ok', 'Justerat', 'Bytt'] },
  { label: 'Justering av flänsrännevidd (moträl, skruvad korsning)', v: 'Dropdown1.4.3.0.0', h: 'Dropdown1.4.3.0.1', anm: 'Text9.4.2', options: ['Ok', 'Justering moträl', 'Justering korsning', 'Justering moträl & korsning'] },
  { label: 'Påsvetsning och slipning rätt profil, rälkorsning', v: 'Dropdown1.4.4.0.0', anm: 'Text9.4.3', options: PROFIL },
  { label: 'Påsvetsning och slipning rätt profil, mangankorsning', v: 'Dropdown1.4.5.0.0.0', anm: 'Text9.4.4', options: PROFIL },
  { label: 'Påsvetsning och slipning (växeltunga H, växeltunga V)', v: 'Dropdown1.4.5.1.0.0', h: 'Dropdown1.4.5.1.0.1', anm: 'Text9.4.5.0', options: PROFIL },
  { label: 'Påsvetsning och slipning, stödräl', v: 'Dropdown1.4.5.2.0.0', h: 'Dropdown1.4.5.2.0.1', anm: 'Text9.4.5.1', options: PROFIL },
  { label: 'Jordförbindning och spårledning', v: 'Dropdown1.4.5.3.0.0', h: 'Dropdown1.4.5.3.0.1', anm: 'Text9.4.5.2', options: ['Ok', 'Åtgärdat', 'Anmäld'] },
  { label: 'Slipning och rengöring, isolerskarv', v: 'Dropdown1.4.5.4.0.0', h: 'Dropdown1.4.5.4.0.1', anm: 'Text9.4.5.3', options: ['Ok', 'Rengöring', 'Slip & rengöring', 'Vidare anmäld'] },
  // Mallen stavar "kompletterat" med liten bokstav i just de här rutorna.
  { label: 'Snöskydd, räthet mm', v: 'Dropdown1.4.5.5.0.0', h: 'Dropdown1.4.5.5.0.1', anm: 'Text9.4.5.4', options: ['Ok', 'kompletterat', 'Vidareanmält'] },
  { label: 'Växelvärme', v: 'Dropdown1.4.5.6.0.0', h: 'Dropdown1.4.5.6.0.1', anm: 'Text9.4.5.5', options: ['Ok', 'Kompletterat', 'Vidareanmält'], hOptions: ['Ok', 'kompletterat', 'Vidareanmält'] },
];

// Sida 2: komponentbyten. Samma suffix används för kryss, val, artikelnr och anmärkning.
const KOMPONENTER = [
  { label: 'Tunghalva', s: '0', options: HV },
  { label: 'Växeltunga', s: '1', options: HV },
  { label: 'Stödräl', s: '2', options: HV },
  { label: 'Korsning mangan/räl', s: '3', options: ['Mangan', 'Rälsstål'] },
  { label: 'Moträl', s: '4.0', options: HV },
  { label: 'Mellanräl', s: '4.1', options: HV },
  { label: 'Farräl', s: '4.2', options: HV },
  { label: 'Befästning (komplett utbyte)', s: '4.3', options: HV },
  { label: 'Isolerskarv', s: '4.4', options: ['1', '2', '3', '4'] },
  { label: 'Inpassare', s: '4.5.0', options: ['Framför FSK höger', 'Framför FSK vänster', 'Bakom BKS1 höger', 'Bakom BKS1 vänster', 'Bakom BKS2 höger', 'Bakom BKS2 vänster', 'Mellanräl höger', 'Mellanräl vänster'] },
  { label: 'Slipers (ange slipersnummer i anmärkning)', s: '4.5.1', options: ['Bytt'] },
  { label: 'Glidplatta/lager (komplett utbyte)', s: '4.5.2', options: HV },
  { label: 'Stoppning (maskinell)', s: '4.5.4', options: ['Stoppad'] },
  { label: 'Bytt underlägg mellan stål och sliper', s: '4.5.5', select: 'Dropdown3.4.5.5.0', check: 'Check Box3.4.5.5.0', options: HV },
];

const EFTER = [
  { key: 'efter_matvarden', label: 'Kontroll/justering av mätvärden efter komponentbyte', field: 'Dropdown3.4.5.5.1', options: OK_JUST },
  { key: 'efter_stoppning', label: 'Kontroll behov stoppning (maskinell)', field: 'Dropdown3.4.5.5.2', options: ['Ok', 'Planerat'] },
  { key: 'efter_bis', label: 'Inrapporterat i BIS', field: 'Dropdown3.4.5.5.3', options: ['Ja'] },
];

const k = (i) => `m${i}`;
const c = (i) => `k${i}`;

export default {
  key: '1481',
  code: 'TMALL 1481',
  title: 'Översyn spårväxel',
  format: 'pdf',
  ext: 'pdf',
  templateHint: 'Översyn spårväxel (PDF)',

  async matches({ pdf }) {
    if (!pdf) return false;
    const names = new Set(pdf.fieldNames);
    return ['Dropdown1.4.5.6.0.1', 'Dropdown3.4.5.5.3', 'Text14', 'Text11.3.1'].every(n => names.has(n));
  },

  sections: [
    {
      title: 'Rapportuppgifter',
      items: [
        // Förval från Inställningar (grått). Det som skrivs här gäller bara den här blanketten.
        { type: 'text', key: 'foretag', label: 'Entreprenörens namn', placeholder: job => job.foretag || '' },
        { type: 'shared', label: 'Kontroll utförd av', from: 'namn' },
        { type: 'shared', label: 'Datum', from: 'datum' },
        { type: 'text', key: 'godkand', label: 'Godkänd platschef/arb.ledare', placeholder: job => job.arbetsledare || job.platschef || '', names: true },
        // Bandel och växelnummer ändras på jobbet och syns i alla blanketter (2026-10-20).
        { type: 'jobtext', key: 'bandel', label: 'Bandel', inputmode: 'numeric', row: 2 },
        { type: 'jobtext', key: 'vxnr', label: 'Växel nr' },
        { type: 'shared', label: 'Driftplats', from: 'driftplats' },
        { type: 'vaxelval' },
      ],
    },
    {
      title: 'Kontrollmoment',
      items: MOMENT.map((m, i) => ({
        type: 'group',
        label: m.label,
        items: [
          { type: 'select', key: `${k(i)}_v`, label: m.h ? 'Åtgärd vänster' : 'Åtgärd', options: m.options },
          ...(m.h ? [{ type: 'select', key: `${k(i)}_h`, label: 'Åtgärd höger', options: m.hOptions || m.options }] : []),
          { type: 'text', key: `${k(i)}_anm`, label: 'Anmärkning' },
        ],
      })),
    },
    {
      title: 'Maskinell stoppning',
      items: [
        { type: 'radio', key: 'stoppning', label: 'Behov av maskinell stoppning (planera och utför senare)', options: ['Ja', 'Nej'] },
        { type: 'textarea', key: 'anmarkning1', label: 'Anmärkning (förslag på komponentbyte, tidsbrist osv)' },
      ],
    },
    {
      title: 'Genomförda komponentbyten',
      items: KOMPONENTER.map((m, i) => ({
        type: 'group',
        label: m.label,
        toggle: `${c(i)}_x`,
        items: [
          { type: 'select', key: `${c(i)}_val`, label: 'Position / modell / åtgärd', options: m.options },
          { type: 'text', key: `${c(i)}_art`, label: 'Artikel nr' },
          { type: 'text', key: `${c(i)}_anm`, label: 'Anmärkning' },
        ],
      })),
    },
    {
      title: 'Efter utfört komponentbyte',
      items: [
        ...EFTER.map(e => ({ type: 'select', key: e.key, label: e.label, options: e.options })),
        { type: 'textarea', key: 'anmarkning2', label: 'Förslag på komponentbyte / anmärkning' },
      ],
    },
  ],

  toValues(job, data) {
    const v = {};
    const head = [data.foretag || job.foretag, job.namn, blankettDatum(job), data.godkand || job.arbetsledare || job.platschef];
    const side = [job.bandel, job.driftplats, job.vxnr, job.vxmodell];
    head.forEach((x, i) => { v[`Text${i + 1}`] = x; v[`Text11.${i}.0`] = x; });
    side.forEach((x, i) => { v[`Text${i + 5}`] = x; v[`Text11.${i}.1`] = x; });
    MOMENT.forEach((m, i) => {
      v[m.v] = data[`${k(i)}_v`];
      if (m.h) v[m.h] = data[`${k(i)}_h`];
      v[m.anm] = data[`${k(i)}_anm`];
    });
    v['Check Box3.4.5.5.1.0.0'] = data.stoppning === 'Ja';
    v['Check Box3.4.5.5.1.1.0'] = data.stoppning === 'Nej';
    v.Text10 = data.anmarkning1;
    KOMPONENTER.forEach((m, i) => {
      v[m.check || `Check Box3.${m.s}`] = !!data[`${c(i)}_x`];
      v[m.select || `Dropdown3.${m.s}`] = data[`${c(i)}_val`];
      v[`Text12.${m.s}`] = data[`${c(i)}_art`];
      v[`Text13.${m.s}`] = data[`${c(i)}_anm`];
    });
    EFTER.forEach(e => { v[e.field] = data[e.key]; });
    v.Text14 = data.anmarkning2;
    for (const key of Object.keys(v)) if (v[key] == null) v[key] = '';
    return v;
  },
};
