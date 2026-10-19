// TMALL 0737 Kontrollplan stabilitetspåverkande arbete, v2.0 (Excel-mall, enligt TRVINFRA-00014).
// Bladet skrivs ut till en tom PDF-mall på en sida och fälten skrivs på cellernas platser
// (k0737-layout.js). Hänvisningarna gäller TRVINFRA-00014 version 5.0 (2026-10-19).
import LAYOUT from './k0737-layout.js';
import { blankettDatum } from '../datum.js';

const SPARTYP = [['grus', 'Träsliper i grus', 'D15'], ['tramak', 'Träsliper i makadam', 'G15'], ['betong', 'Betongsliper i makadam', 'L15']];
const KATEGORI = [['1', 'Kategori 1 – stor påverkan', 'B18'], ['2', 'Kategori 2 – mindre påverkan', 'G18'], ['3', 'Kategori 3 – obetydlig påverkan', 'K18']];
const KONTROLL = [['ballast', 'Ballastsektion', 'D21'], ['befastning', 'Befästning', 'D22'], ['sparlage', 'Spårläge', 'D23']];
const HASTIGHETER = 4; // rad 37–40

// Sammanfattning av TRVINFRA-00014 kap 7. Visas när man trycker på rubriken.
const KATEGORI_INFO = [
  'Kategori 1 (stor nedsättning av spårstabiliteten), TRVINFRA-00014 kap 7.1: nybyggnad av spår, spårbyte, byte av spårväxel, ballastrening, ingrepp i bankropp med stor påverkan, spår- eller växelriktning med bax över 30 mm, lyft över 50 mm eller ändrad rälsförhöjning över 30 mm, samt slipersbyten och schakt som inte uppfyller villkoren för kategori 2 eller 3. DEF-slipersbyte är kategori 1 vid 8 eller fler sliprar i följd eller schakt djupare än 50 mm under sliperns underkant.',
  'Kategori 2 (mindre nedsättning), kap 7.2: spår- eller växelriktning som inte är kategori 1, byte eller reglering av 3–5 sliprar i följd med minst 20 orörda sliprar emellan, schakt som frilägger högst 5 slipersändar i följd, samt tvärkanalisation och kontaktledningsfundament enligt villkoren i kapitlet. DEF-slipersbyte: 3–7 sliprar i följd med minst 14 orörda emellan och schakt högst 50 mm under sliperns underkant.',
  'Kategori 3 (obetydlig nedsättning), kap 7.3: lyft eller understoppning av högst 5 m spår, byte eller reglering av 1–2 sliprar i följd med minst 20 orörda emellan, schakt som inte påverkar material närmare än 0,4 m utanför slipersänden, samt ballastplogning. DEF-slipersbyte: 1–2 sliprar i följd med minst 14 orörda emellan.',
  'Kontakta beställaren om det är osäkert vilken kategori arbetet tillhör (K38689). Kategori 3 ger ingen hastighetsnedsättning, men kraven i avsnitt 9.6 och kap 10 gäller ändå.',
];

const tal = v => (v == null || String(v).trim() === '' ? null : Number(String(v).replace(',', '.').replace('−', '-')));
// ΔT = Tf − To (TRVINFRA-00014 kap 8, K38701).
const deltaT = data => {
  const tf = tal(data.tf); const to = tal(data.to);
  if (tf == null || to == null || Number.isNaN(tf) || Number.isNaN(to)) return '';
  return String(Math.round((tf - to) * 10) / 10).replace('.', ',');
};
// Blanketten vill ha datum som åå-mm-dd i punkt 10.
const kort = d => (d ? d.slice(2) : '');

export default {
  key: '0737',
  code: 'TMALL 0737',
  title: 'Kontrollplan stabilitetspåverkande arbete',
  format: 'overlay',
  ext: 'pdf',
  layout: LAYOUT,
  templateHint: 'TMALL 0737 Kontrollplan stabilitetspåverkande arbete (PDF-mall)',

  async matches({ pdf }) {
    return !!pdf && pdf.subject === 'Spårdokumentation mall 0737';
  },

  sections: [
    {
      title: 'Arbete',
      help: 'Kontrollplanen upprättas av utförande entreprenör före arbetets start och revideras om förutsättningarna ändras (TRVINFRA-00014 kap 6). Grå text hämtas från jobbet och Inställningar.',
      items: [
        { type: 'text', key: 'arende', label: 'Ärendenummer' },
        { type: 'text', key: 'bestallare', label: 'Beställare' },
        { type: 'text', key: 'entreprenor', label: 'Utförande entreprenör', placeholder: job => job.foretag || '' },
        { type: 'text', key: 'bestnr', label: 'Beställningsnummer', placeholder: job => job.ao || '' },
        { type: 'text', key: 'arbete', label: 'Arbete som ska utföras', placeholder: () => 't.ex. Byte av isolerskarv' },
      ],
    },
    {
      title: '1. Plats',
      items: [
        { type: 'text', key: 'bandel', label: 'Bandel nr', inputmode: 'numeric', placeholder: job => job.bandel || '', half: true },
        { type: 'text', key: 'spar', label: 'Spår U/N/E/nr', placeholder: job => job.spar || '', half: true },
        { type: 'plus', label: 'Från km+m', keys: ['franKm', 'franM'], placeholders: [job => job.km || '', job => job.m || ''] },
        { type: 'plus', label: 'Till km+m', keys: ['tillKm', 'tillM'], placeholders: [job => job.km2 || job.km || '', job => (job.km2 ? job.m2 : job.m) || ''] },
      ],
    },
    {
      title: '2. Trafikbelastning per dygn',
      help: 'Uppgiften lämnas av beställaren.',
      items: [
        { type: 'text', key: 'kbrtBandel', label: 'Bandel (kbrt/dygn)', inputmode: 'decimal', half: true },
        { type: 'text', key: 'kbrtSpar', label: 'Spår (kbrt/dygn)', inputmode: 'decimal', half: true },
      ],
    },
    {
      title: '3–4. Spårtyp och kategori',
      items: [
        { type: 'select', key: 'spartyp', label: 'Spårtyp', options: SPARTYP.map(([k, t]) => [k, t]) },
        { type: 'select', key: 'kategori', label: 'Kategori', options: KATEGORI.map(([k, t]) => [k, t]), info: KATEGORI_INFO },
      ],
    },
    {
      title: '5. Utförd kontroll',
      help: 'Stabilitetspåverkande arbete är avslutat enligt TRVINFRA-00014. Se även trafikering på arbetsplats enligt TRVINFRA-00012 avsnitt 7.3.11, 7.3.12, 8.2.8 och 8.2.9.',
      items: KONTROLL.map(([key, label]) => ({ type: 'check', key, label })),
    },
    {
      title: '6. Temperaturer',
      help: 'Tf är förväntad högsta rältemperatur under hela perioden tills spåret har fått 100 kbrt. To (spänningsfri temperatur) lämnas av beställaren. Saknas uppgift om To används högst +5 °C i skarvfritt spår och +10 °C i skarvspår (TRVINFRA-00014 kap 8).',
      items: [
        { type: 'text', key: 'tf', label: 'Tf (°C)', inputmode: 'decimal', half: true },
        { type: 'text', key: 'to', label: 'To (°C)', inputmode: 'decimal', half: true },
        { type: 'text', key: 'dt', label: 'ΔT = Tf − To (°C)', inputmode: 'decimal', placeholder: (job, data) => deltaT(data) },
      ],
    },
    {
      title: '7–8. Stabilisering och Sth',
      help: 'Stabilitetshöjande åtgärder, t.ex. trafikbelastning, DSS, vibratorplatta eller BKM, finns i TRVINFRA-00014 kap 9. Sth enligt Underlag till linjeboken där arbetet utförs.',
      items: [
        { type: 'text', key: 'kbrt', label: 'Stabilitetshöjande åtgärd (kbrt)', inputmode: 'decimal', half: true },
        { type: 'text', key: 'sth', label: 'Sth (km/h)', inputmode: 'numeric', half: true },
      ],
    },
    {
      title: '9. Tillåten hastighet',
      help: 'Beräknas med uppgifterna i punkt 1–8 och TRVINFRA-00014 kap 11, tabell K11.1–K11.3 (betongsliper, träsliper i makadam och träsliper i grus). Mallen hänvisar till de äldre tabellnumren K10.1–K10.3.',
      items: [
        { type: 'text', key: 'direkt', label: 'Direkt efter avslutat arbete (km/h)', inputmode: 'numeric' },
        {
          type: 'rows', key: 'efter', max: HASTIGHETER, rowLabel: 'Efter', addLabel: '+ Lägg till hastighet efter ett antal dygn',
          fields: [
            { type: 'text', key: 'dygn', label: 'Efter (dygn)', inputmode: 'numeric', half: true },
            { type: 'text', key: 'kmh', label: 'Tillåten (km/h)', inputmode: 'numeric', half: true },
          ],
          newRow: () => ({}),
        },
      ],
    },
    {
      title: '10–11. Datum och upprättad av',
      items: [
        { type: 'text', key: 'avslutat', label: 'Datum för avslutat arbete', inputType: 'date', defaultValue: job => blankettDatum(job) },
        { type: 'text', key: 'stabil', label: 'Datum då spåret är fullt stabiliserat (100 000 brt)', inputType: 'date' },
        { type: 'text', key: 'upprattad', label: 'Kontrollplanen upprättad av', placeholder: job => job.namn || '', names: true },
        { type: 'text', key: 'upprattadDatum', label: 'Datum', inputType: 'date', defaultValue: job => blankettDatum(job) },
      ],
    },
  ],

  toValues(job, data) {
    const val = (key, def) => (data[key] !== undefined ? data[key] : def);
    const datum = blankettDatum(job);
    const v = {
      H1: data.arende || '',
      D3: data.bestallare || '',
      I3: data.entreprenor || job.foretag || '',
      D4: datum,
      I4: data.bestnr || job.ao || '',
      D5: data.arbete || '',
      F7: data.bandel || job.bandel || '',
      I7: data.franKm || job.km || '',
      K7: data.franKm ? data.franM || '' : job.m || '',
      I8: data.tillKm || job.km2 || job.km || '',
      K8: data.tillKm ? data.tillM || '' : (job.km2 ? job.m2 : job.m) || '',
      F9: data.spar || job.spar || '',
      B12: data.kbrtBandel || '',
      I12: data.kbrtSpar || '',
      B27: data.tf || '',
      G27: data.to || '',
      L27: data.dt || deltaT(data),
      H29: data.kbrt || '',
      H31: data.sth || '',
      H35: data.direkt || '',
      B43: kort(val('avslutat', datum)),
      I43: kort(data.stabil || ''),
      B46: data.upprattad || job.namn || '',
      I46: val('upprattadDatum', datum) || '',
    };
    for (const [k, , cell] of SPARTYP) v[cell] = data.spartyp === k ? 'X' : '';
    for (const [k, , cell] of KATEGORI) v[cell] = data.kategori === k ? 'X' : '';
    for (const [k, , cell] of KONTROLL) v[cell] = data[k] ? 'X' : '';
    (data.efter || []).slice(0, HASTIGHETER).forEach((row, i) => {
      v[`E${37 + i}`] = row.dygn || '';
      v[`H${37 + i}`] = row.kmh || '';
    });
    return v;
  },
};
