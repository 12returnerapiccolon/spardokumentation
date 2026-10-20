// Växelbesiktningsrapporterna (TMALL 0379–0386). Alla är Word-mallar med samma uppbyggnad,
// men fälten ligger på olika platser. Siffrorna är formulärfältens ordning i mallens
// document.xml. Måttabellerna kommer ur vaxel-matt.js.
// Kryssväxlarnas rapporter (TMALL 0393 och 0394) är PDF-formulär. Där är siffrorna appens egna
// och platserna kommer ur kryss-layout.js.
import WORD_MATT from './vaxel-matt.js';
import { blankettDatum } from '../datum.js';
import NORMAL from './vaxel-normal.js';
import WORD_LAYOUT from './vaxel-layout.js';
import { LAYOUT as KRYSS_LAYOUT, MATT as KRYSS_MATT } from './kryss-layout.js';
import { toleranser } from './vaxel-tolerans.js';

const FORBES = ['Säkerhetsbesiktning', 'Underhållsbesiktning', 'Förbesiktning i spår', 'Förbesiktning på byggplats'];

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const LAYOUT = { ...WORD_LAYOUT, ...KRYSS_LAYOUT };
const MATT = { ...WORD_MATT, ...KRYSS_MATT };

// Korsningar och växeldelar för mallarna med flera korsningar (EKV, DKV, 3-vägsväxlar).
function korsningar(names, b, layout) {
  return names.map((name, k) => ({
    title: `Korsning ${name}`,
    items: [
      ['Tillverkare', b + 2 * k],
      ['Tillverkarens namn', b + 2 * k + 1, 'text'],
      ['Rälsstål', b + layout.rals + k],
      ['Manganstål', b + layout.mn + 2 * k],
      ['Expl.härdad', b + layout.mn + 2 * k + 1],
    ],
  }));
}

// EKV och DKV: korsningar EK1, EK2, DK1, DK2. b = första fältet i korsningsdelen.
function korsningsvaxel(b) {
  return {
    markers: [
      { title: 'Markeringar A-ände, övre', items: [['nhsp', 13], ['ahsp', 15], ['ssp', 17]] },
      { title: 'Markeringar B-ände, övre', items: [['nhsp', 14], ['ahsp', 16], ['ssp', 18]] },
      { title: 'Markeringar A-ände, nedre', items: [['nhsp', 19], ['ahsp', 21], ['ssp', 23]] },
      { title: 'Markeringar B-ände, nedre', items: [['nhsp', 20], ['ahsp', 22], ['ssp', 24]] },
    ],
    groups: [
      ...korsningar(['EK1', 'EK2', 'DK1', 'DK2'], b, { rals: 14, mn: 22 }),
      { title: 'Värmebehandlat', items: [['Tungor TA1', b + 8], ['Tungor TA2', b + 9], ['Stödräler TA1', b + 18], ['Stödräler TA2', b + 19]] },
      { title: 'Driv', items: [['Driv 1', b + 10], ['Driv 2', b + 20]] },
      {
        title: 'Övrigt',
        items: [['TKK nhsp', b + 11], ['TKK ahsp', b + 12], ['TKK ssp', b + 13], ['Elektriskt tungspetslås', b + 21],
          ['Växelklot med klykväxellås', b + 30], ['Växelklot', b + 31], ['Uppkörbar omläggningsanordning', b + 32], ['Växelvärme', b + 33]],
      },
      { title: 'Isolerskarvsplacering A-ände (sett från V till H)', items: [1, 2, 3, 4, 5, 6, 7, 8].map(n => [`Position ${n}`, n % 2 ? b + 34 + (n - 1) / 2 : b + 42 + (n / 2 - 1)]) },
      { title: 'Isolerskarvsplacering B-ände (sett från V till H)', items: [1, 2, 3, 4, 5, 6, 7, 8].map(n => [`Position ${n}`, n % 2 ? b + 38 + (n - 1) / 2 : b + 46 + (n / 2 - 1)]) },
    ],
    date: [b + 50, b + 51, b + 52],
    sign: b + 53,
  };
}

// Tredelig växel: korsningar EK1–EK3.
function trevagsvaxel(b) {
  return {
    groups: [
      ...korsningar(['EK1', 'EK2', 'EK3'], b, { rals: 12, mn: 19 }),
      { title: 'Värmebehandlat', items: [['Tungor TA1', b + 6], ['Tungor TA2', b + 7], ['Stödräler TA1', b + 15], ['Stödräler TA2', b + 16]] },
      { title: 'Driv', items: [['Driv 1', b + 8], ['Driv 2', b + 17]] },
      {
        title: 'Övrigt',
        items: [['TKK nhsp', b + 9], ['TKK ahsp', b + 10], ['TKK ssp', b + 11], ['Elektriskt tungspetslås', b + 18],
          ['Växelklot med klykväxellås', b + 25], ['Växelklot', b + 26], ['Uppkörbar omläggningsanordning', b + 27], ['Växelvärme', b + 28]],
      },
      { title: 'Isolerskarvsplacering (sett från V till H)', items: [['Position 1', b + 29], ['Position 2', b + 31], ['Position 3', b + 30], ['Position 4', b + 32]] },
    ],
    date: [b + 33, b + 34, b + 35],
    sign: b + 36,
  };
}

const ENKEL_MARKERS = [
  { title: 'Övre gren', items: [['nhsp', 17], ['ahsp', 18], ['ssp', 19]] },
  { title: 'Nedre gren', items: [['nhsp', 20], ['ahsp', 21], ['ssp', 22]] },
];

export const VAXELTYPER = [
  {
    key: 'ev', short: 'EV', code: 'TMALL 0379', title: 'Besiktningsrapport Enkel växel',
    fieldCount: 152, match: 'Besiktningsrapport Enkel växel',
    typ: FORBES.slice(0, 2).concat(['Förbesiktning på byggplats', 'Förbesiktning i spår']),
    data: { usp: [4, 5], inlaggningsar: 6, ritnr: 7, ybv: 8, radie: 9, bandel: 10, vxnr: 11, trafikplats: 12, vxmodell: 13, besiktningsklass: 14, driftplats_v: 15, driftplats_h: 16 },
    markers: ENKEL_MARKERS,
    groups: [
      { title: 'Korsning', items: [['Tillverkare', 119], ['Tillverkarens namn', 120, 'text'], ['Rälsstål', 127], ['Manganstål', 132], ['Expl.härdad', 133]] },
      { title: 'Värmebehandlat', items: [['Tungor', 121], ['Stödräler', 128], ['Mellanräl 1', 122], ['Mellanräl 2', 129], ['Mellanräl 3', 134], ['Mellanräl 4', 137]] },
      { title: 'Driv', items: [['Driv 1', 123], ['Driv 2', 130], ['Driv 3', 135], ['Driv 4', 138], ['Driv 5', 140], ['Driv 6', 142]] },
      {
        title: 'Övrigt',
        items: [['TKK nhsp', 124], ['TKK ahsp', 125], ['TKK ssp', 126], ['Elektriskt tungspetslås', 131],
          ['Växelklot med klykväxellås', 136], ['Växelklot', 139], ['Uppkörbar omläggningsanordning', 141], ['Växelvärme', 143]],
      },
      { title: 'Isolerskarvsplacering (sett från V till H)', items: [['Position 1', 144], ['Position 2', 146], ['Position 3', 145], ['Position 4', 147]] },
    ],
    date: [148, 149, 150], sign: 151,
  },
  {
    key: 'evr', short: 'EVR', code: 'TMALL 0380', title: 'Besiktningsrapport Enkel växel med rörlig korsningsspets',
    fieldCount: 140, match: 'rörlig korsningsspets',
    typ: ['Säkerhetsbesiktning', 'Underhållsbesiktning', 'Slutbesiktning i spår', 'Slutbesiktning på byggplats'],
    data: { usp: [4, 5], inlaggningsar: 6, ritnr: 7, ybv: 8, radie: 9, bandel: 10, vxnr: 11, trafikplats: 12, vxmodell: 13, driftplats_v: 14, besiktningsklass: 15, driftplats_h: 16 },
    markers: ENKEL_MARKERS,
    groups: [
      { title: 'Korsning', items: [['Tillverkare', 111], ['Tillverkarens namn', 112, 'text'], ['Rälsstål', 119], ['Manganstål', 124], ['Expl.härdad', 125]] },
      { title: 'Värmebehandlat', items: [['Tungor', 113], ['Stödräler', 120], ['Mellanräl 1', 114], ['Mellanräl 2', 121], ['Mellanräl 3', 126], ['Mellanräl 4', 128]] },
      { title: 'Driv', items: [['Driv 1', 115], ['Driv 2', 122], ['Driv 3', 127], ['Driv 4', 129], ['Driv 5', 130], ['Driv 6', 131]] },
      { title: 'Övrigt', items: [['TKK nhsp', 116], ['TKK ahsp', 117], ['TKK ssp', 118], ['Växelvärme', 123]] },
      { title: 'Isolerskarvsplacering (sett från V till H)', items: [['Position 1', 132], ['Position 2', 134], ['Position 3', 133], ['Position 4', 135]] },
    ],
    date: [136, 137, 138], sign: 139,
  },
  {
    key: 'ekv', short: 'EKV', code: 'TMALL 0381', title: 'Besiktningsrapport Enkel korsningsväxel',
    fieldCount: 231, match: 'Enkel korsningsväxel',
    typ: FORBES,
    data: { inlaggningsar: 4, ritnr: 5, bandel: 6, vxnr: 7, trafikplats: 8, vxmodell: 9, driftplats_v: 10, besiktningsklass: 11, driftplats_h: 12 },
    ...korsningsvaxel(177),
  },
  {
    key: 'dkv', short: 'DKV', code: 'TMALL 0382', title: 'Besiktningsrapport Dubbel korsningsväxel',
    fieldCount: 255, match: 'dubbel korsningsväxel',
    typ: FORBES,
    data: { inlaggningsar: 4, ritnr: 5, bandel: 6, vxnr: 7, trafikplats: 8, vxmodell: 9, driftplats_v: 10, besiktningsklass: 11, driftplats_h: 12 },
    ...korsningsvaxel(201),
  },
  {
    key: 'v3o', short: '3V olika håll', code: 'TMALL 0384', title: 'Besiktningsrapport Tredelig växel, olika håll',
    fieldCount: 202, match: 'avviker åt olika håll',
    typ: FORBES,
    data: { inlaggningsar: 4, ritnr: 5, bandel: 6, vxnr: 7, trafikplats: 8, vxmodell: 9, besiktningsklass: 10, driftplats_v: 11, driftplats_h: 12 },
    ...trevagsvaxel(165),
  },
  {
    key: 'v3s', short: '3V samma håll', code: 'TMALL 0385', title: 'Besiktningsrapport Tredelig växel, samma håll',
    fieldCount: 206, match: 'avviker åt samma håll',
    typ: FORBES,
    data: { inlaggningsar: 4, ritnr: 5, bandel: 6, vxnr: 7, trafikplats: 8, vxmodell: 9, driftplats_v: 10, besiktningsklass: 11, driftplats_h: 12 },
    ...trevagsvaxel(169),
  },
  {
    key: 'spk', short: 'SPK', code: 'TMALL 0386', title: 'Växelbesiktningsrapport Spårkorsning',
    fieldCount: 157, match: 'Växelbesiktningsrapport Spårkorsning',
    typ: FORBES,
    data: { inlaggningsar: 4, ritnr: 5, bandel: 6, vxnr: 7, trafikplats: 8, vxmodell: 9, besiktningsklass: 10, driftplats_v: 11, driftplats_h: 12 },
    groups: [
      ...korsningar(['EK1', 'EK2', 'DK1', 'DK2'], 125, { rals: 8, mn: 12 }),
      { title: 'Isolerskarvsplacering A-ände (sett från V till H)', items: [['Position 1', 145], ['Position 2', 149], ['Position 3', 146], ['Position 4', 150]] },
      { title: 'Isolerskarvsplacering B-ände (sett från V till H)', items: [['Position 1', 147], ['Position 2', 151], ['Position 3', 148], ['Position 4', 152]] },
    ],
    date: [153, 154, 155], sign: 156,
  },
  {
    key: 'evk', short: 'EV KRYSSVX', code: 'TMALL 0394', title: 'Besiktningsrapport EV tillhörande KRYSSVX',
    // Blankettens växelbild visar var måtten tas, så den används i stället för bilaga 7.
    bild: 'img/vaxelbild/evk.png',
    typ: ['Säkerhetsbesiktning', 'Underhållsbesiktning', 'Förbesiktning på byggplats', 'Förbesiktning i spår'],
    // Upp-/Nedspår är en textruta på blanketten.
    data: { usp: 4, inlaggningsar: 5, ritnr: 6, ybv: 7, radie: 8, bandel: 9, vxnr: 10, trafikplats: 11, vxmodell: 12, driftplats_v: 13, besiktningsklass: 14, driftplats_h: 15 },
    groups: [
      { title: 'Korsning', items: [['Tillverkare', 110], ['Tillverkarens namn', 111, 'text'], ['Rälsstål', 112], ['Manganstål', 113], ['Manganstål, explosionshärdad', 114]] },
      { title: 'Isolerskarvsplacering', items: [1, 2, 3, 4].map(n => [`Position ${n}`, 114 + n]) },
      {
        title: 'Värmebehandlad',
        items: [['Tunga V', 119], ['Tunga H', 120], ['Stödräl V', 121], ['Stödräl H', 122], ['Farräl V', 123], ['Mellanräl V', 124], ['Mellanräl H', 125], ['Farräl H', 126]],
      },
      { title: 'Driv', items: [['T1', 127], ['T2', 128]] },
      { title: 'TKK', items: [1, 2, 3, 4].map(n => [`TKK ${n}`, 128 + n]) },
      {
        title: 'Övrigt',
        items: [['Elektriskt tungspetslås', 133], ['Växelklot med klykväxellås', 134], ['Växelklot utan klykväxellås', 135],
          ['Uppkörbar omläggningsanordning', 136], ['Växelvärme', 137]],
      },
    ],
    date: 138, sign: 139,
  },
  {
    key: 'spkk', short: 'SPK KRYSSVX', code: 'TMALL 0393', title: 'Besiktningsrapport SPK tillhörande KRYSSVX',
    bild: 'img/vaxelbild/spkk.png',
    typ: ['Säkerhetsbesiktning', 'Underhållsbesiktning', 'Förbesiktning på byggplats', 'Förbesiktning i spår'],
    data: { inlaggningsar: 4, ritnr: 5, ybv: 6, radie: 7, bandel: 8, vxnr: 9, trafikplats: 10, vxmodell: 11, driftplats_v: 12, besiktningsklass: 13, driftplats_h: 14 },
    groups: [
      ...['EK1', 'EK2', 'DK1', 'DK2'].map((name, k) => ({
        title: `Korsning ${name}`,
        items: [['Tillverkare', 120 + 5 * k], ['Tillverkarens namn', 121 + 5 * k, 'text'], ['Rälsstål', 122 + 5 * k],
          ['Manganstål', 123 + 5 * k], ['Manganstål, explosionshärdad', 124 + 5 * k]],
      })),
      { title: 'Isolerskarv A-ände', items: [1, 2, 3, 4].map(n => [`Position ${n}`, 139 + n]) },
      { title: 'Isolerskarv B-ände', items: [1, 2, 3, 4].map(n => [`Position ${n}`, 143 + n]) },
    ],
    date: 148, sign: 149,
  },
];

// Normalvärdena för en kryssväxels EV står i bilaga 8 som KRYSSVX-EV-…, medan växelmodellen heter KRYSSVX-….
function normalModell(vaxeltyp, modell) {
  if (vaxeltyp === 'evk' && /^KRYSSVX-(?!EV-)/i.test(modell)) return modell.replace(/^KRYSSVX-/i, 'KRYSSVX-EV-');
  return modell;
}

// Måtten i den ordning de tas när man går från framkant stödräl (FSK) till bakkant korsning (BKS).
// Rak väg först, sedan läggs växeln om (x1, y1). I korsningen i och g före h (2026-10-19).
// Växlar med A- och B-ände: grupperna (|) tas från A-änden som standard och vänds när man börjar
// från B-änden. Ordningen följer måttens placering i blankettens växelbild (2026-10-20).
const ORDNING = {
  ev: 'a b x y x1 y1 c c1 r r1 t t1 u u1 d d1 i g h i1 g1 h1 e e1',
  evr: 'a b x y x1 y1 c c1 r r1 t t1 u u1 d d1 z q z1 q1 e e1',
  evk: 'a b x y x1 y1 c c1 r r1 t t1 u u1 d d1 i g h i1 g1 e',
  v3o: 'a b x x1 c c1 b1 t1 x2 x3 d1 d2 i1 g1 h i2 g h2 d i3 g3 h1 i g2 h3 e1 t t2 d3 d4 i4 g4 h4 i5 g5 h5 e e2',
  v3s: 'a b x x1 c c1 b1 x2 x3 c2 c3 d d1 i g h i1 g1 h2 d2 i2 g2 h1 i3 g3 h3 e t t1 d3 d4 i4 g4 h4 i5 g5 h5 e1 e2',
  ekv: 'e e1 | i g h i1 g1 h1 | b b1 | x x1 | c c1 c2 | k k1 h3 h2 | k2 k3 h4 h5 | c5 c6 c7 | x2 x3 | b2 b3 | i2 g2 h6 i3 g3 h7 | e2 e3',
  dkv: 'e e1 | i g h i1 g1 h1 | b b1 | x x1 x2 x3 | c c1 c2 c3 | k k1 h3 h2 | k2 k3 h4 h5 | c4 c5 c6 c7 | x4 x5 x6 x7 | b2 b3 | i2 g2 h6 i3 g3 h7 | e2 e3',
  spk: 'e e1 | i g h i1 g1 h1 | b b1 | k k1 h3 h2 | k2 k3 h4 h5 | b2 b3 | i2 g2 h6 i3 g3 h7 | e2 e3',
  spkk: 'g5 i2 g3 g4 i3 g6 | b b1 | k k1 h3 h2 | k2 k3 h4 h5 | b2 b3 | g7 i4 g9 g10 i5 g8',
};
// Växlarna där man kan välja vilken ände man börjar mäta från.
const I_VAXELN = 'I växeln';
const RAPPORTEN = 'Besiktningsrapport';
const AENDE = 'A-änden';
const BENDE = 'B-änden';
const harAnde = key => (ORDNING[key] || '').includes('|');

function ordna(key, namn, start) {
  const o = ORDNING[key];
  if (!o) return namn;
  let grupper = o.split('|').map(g => g.trim().split(/\s+/));
  if (start === BENDE) grupper = grupper.reverse();
  const pos = new Map(grupper.flat().map((m, i) => [m, i]));
  return [...namn].sort((a, b) => (pos.get(a) ?? 99) - (pos.get(b) ?? 99));
}

// Normalvärden (bilaga 8) och toleranser (bilaga 9–11) för vald modell och besiktning.
// Ett värde med snedstreck (43/44) beror på korsningen och visas bara som förslag.
export function autoVarden(vaxeltyp, job, data) {
  const modell = job.vxmodell || '';
  const nyckel = normalModell(vaxeltyp, modell);
  const normal = {}, forslag = {};
  for (const [m, v] of Object.entries(NORMAL[nyckel] || {})) {
    if (v.includes('/')) forslag[m] = v; else normal[m] = v;
  }
  const t = toleranser({ vaxeltyp, modell, typ: data.typ, besiktningsklass: data.besiktningsklass, radiefalt: data.radie, normal });
  return { normal, forslag, tol: t.tol, tabeller: t.tabeller, saknas: t.saknas, matpunkter: t.matpunkter, harNormal: nyckel in NORMAL };
}

// Det svetsaren skrivit gäller före det automatiska, även en tömd ruta.
export function effektiv(row, col, auto) {
  return row && Object.prototype.hasOwnProperty.call(row, col) ? row[col] : (auto || '');
}

// Ligger uppmätt utanför toleransen (2026-10-20)? Toleransen är '±4', '+3/-2', '≥59' eller
// '≤3', egen eller ur bilagan. Okänd form eller saknat värde räknas inte som utanför.
const tal = s => {
  const n = Number(String(s).replace(',', '.').replace('−', '-').trim());
  return String(s).trim() !== '' && Number.isFinite(n) ? n : null;
};
export function utanforTol(tol, normal, uppmatt) {
  const u = tal(uppmatt ?? '');
  // Normalvärdet kan självt vara ett gränsvärde (x ≥59) när tabellen saknar tolerans.
  const t = String(tol || (/^\s*[≥≤]/.test(normal || '') ? normal : '')).replace(/\s+/g, '').replace(/−/g, '-');
  if (u == null || !t) return false;
  let m = t.match(/^(≥|>=)(\d+(?:[.,]\d+)?)$/);
  if (m) return u < tal(m[2]);
  m = t.match(/^(≤|<=)(\d+(?:[.,]\d+)?)$/);
  if (m) return u > tal(m[2]);
  const n = tal(normal ?? '');
  if (n == null) return false;
  const d = Math.round((u - n) * 10) / 10;
  m = t.match(/^±(\d+(?:[.,]\d+)?)$/);
  if (m) return Math.abs(d) > tal(m[1]);
  let plus = null, minus = null;
  for (const del of t.split('/')) {
    const k = del.match(/^([+-])(\d+(?:[.,]\d+)?)$/);
    if (!k) return false;
    if (k[1] === '+') plus = tal(k[2]); else minus = tal(k[2]);
  }
  return (plus != null && d > plus) || (minus != null && d < -minus);
}

// Mått utanför toleransen i en ifylld rapport, i tabellens ordning.
export function mattUtanfor(vaxeltyp, job, data) {
  const auto = autoVarden(vaxeltyp, job, data);
  return (MATT[vaxeltyp] || []).map(r => r[0]).filter(m => {
    const row = data.matt?.[m];
    return row?.uppmatt && utanforTol(effektiv(row, 'tolerans', auto.tol[m]), effektiv(row, 'normal', auto.normal[m]), row.uppmatt);
  });
}

const DATA_LABELS = {
  inlaggningsar: ['Inläggningsår', 'numeric'],
  ritnr: ['Ritn.nr'],
  ybv: ['YBV/IBV'],
  radie: ['Radie/Ök'],
  besiktningsklass: ['Besiktningsklass'],
  driftplats_v: ['Driftplats åt vänster i växelbilden (A-ände)'],
  driftplats_h: ['Driftplats åt höger i växelbilden (B-ände)'],
};

// Måtten i besiktningsrapportens ordning: efter var Uppmätt-rutan står på blanketten,
// uppifrån och ned och från vänster till höger.
function rapportOrdning(key, matt) {
  const pos = idx => LAYOUT[key]?.text?.[idx] || [0, 0, 0];
  return [...matt].sort((a, b) => {
    const [pa, xa, ya] = pos(a[3]), [pb, xb, yb] = pos(b[3]);
    return pa - pb || (Math.abs(ya - yb) > 2 ? yb - ya : xa - xb);
  }).map(m => m[0]);
}

function buildForm(t) {
  const matt = MATT[t.key];
  const iRapporten = rapportOrdning(t.key, matt);
  const d = t.data;
  const checkItems = g => g.items.map(([label, idx, kind]) => kind === 'text'
    ? { type: 'text', key: `t${idx}`, label }
    : { type: 'check', key: `c${idx}`, label });

  return {
    key: t.key,
    code: t.code,
    title: t.title,
    // Word-mallen skrivs ut till en tom PDF en gång. Appen skriver sedan i den på fältens platser.
    format: 'overlay',
    ext: 'pdf',
    layout: LAYOUT[t.key],
    templateHint: `${t.code} ${t.short} (PDF-mall)`,

    async matches({ pdf }) {
      return !!pdf && pdf.subject === `Spårdokumentation mall ${t.key}`;
    },

    // Den gamla Word-mallen känns igen så att appen kan be om PDF-mallen i stället.
    matchesWord({ word }) {
      return !!word && !!t.fieldCount && word.fieldCount === t.fieldCount && word.text.includes(t.match);
    },

    sections: [
      // Rullgardin utan Inget, med besiktningsklassen bredvid (2026-10-20).
      { title: 'Besiktningstyp', items: [
        { type: 'select', key: 'typ', label: 'Besiktningstyp', options: t.typ, noEmpty: true, row: 2, flex: 3 },
        { type: 'select', key: 'besiktningsklass', label: 'Besiktningsklass', options: ['B1', 'B2', 'B3', 'B4', 'B5'], noEmpty: true, flex: 2 },
      ] },
      {
        title: 'Växeldata',
        items: [
          // Förval från jobbet (grått) som går att skriva över, på en rad (2026-10-20).
          { type: 'text', key: 'bandel', label: 'Bandel', inputmode: 'numeric', placeholder: job => job.bandel || '', row: 3, flex: 2 },
          { type: 'text', key: 'vxnr', label: 'Vx.nr', placeholder: job => job.vxnr || '', flex: 2 },
          { type: 'text', key: 'trafikplats', label: 'Trafikplats', placeholder: job => job.driftplats || '', flex: 3 },
          { type: 'shared', label: 'Växelmodell', from: 'vxmodell' },
          ...['inlaggningsar', 'ritnr', 'ybv', 'radie'].filter(k => k in d)
            // Inläggningsår och Ritn. nr på samma rad (2026-10-20).
            .map(k => ({ type: 'text', key: k, label: DATA_LABELS[k][0], inputmode: DATA_LABELS[k][1], row: k === 'inlaggningsar' && 'ritnr' in d ? 2 : undefined })),
          ...(d.usp != null ? [{ type: 'radio', key: 'usp', label: 'Spår', options: ['USP', 'NSP'] }] : []),
          ...['driftplats_v', 'driftplats_h']
            .map(k => ({ type: 'text', key: k, label: DATA_LABELS[k][0] })),
        ],
      },
      ...(t.bild ? [] : [{
        title: t.markers ? 'Markeringar i växelbilden' : 'Växelbild',
        items: [
          { type: 'image', src: `img/vaxelbild/${t.key}.png`, alt: `Växelbild ${t.short}` },
          ...(t.markers || []).flatMap(g => [{ type: 'label', label: g.title.replace(/^Markeringar (i växelbilden, )?/, '') }, ...checkItems(g)]),
        ],
      }]),
      {
        title: 'Mått i växeln',
        help: 'Normalvärde och tolerans fylls i efter växelmodell och besiktning (TRVINFRA-00017 bilaga 8–11) och går att ändra. Fyll i uppmätt, så hoppar markören vidare och differensen räknas ut.',
        items: [
          t.bild
            ? { type: 'image', src: t.bild, alt: `Växelbild ${t.short}` }
            : { type: 'image', src: `img/placering/${t.key}.png`, alt: `Placering mått ${t.short}, TRVINFRA-00017 bilaga 7` },
          // Måtten i den ordning de tas i växeln eller som de står i besiktningsrapporten (2026-10-20).
          { type: 'radio', key: 'ordning', label: 'Måttordning', options: [I_VAXELN, RAPPORTEN], noEmpty: true, remember: true, defaultValue: () => I_VAXELN },
          ...(harAnde(t.key) ? [{ type: 'radio', key: 'start', label: 'Börja mäta från', options: [AENDE, BENDE], noEmpty: true, defaultValue: () => AENDE, hideIf: (job, data) => data.ordning === RAPPORTEN }] : []),
          { type: 'measures', utanfor: utanforTol, keys: data => (data.ordning === RAPPORTEN ? iRapporten : ordna(t.key, matt.map(m => m[0]), data.start)), auto: (job, data) => autoVarden(t.key, job, data) },
        ],
      },
      ...t.groups.map(g => ({ title: g.title, items: checkItems(g) })),
      {
        title: 'Spårväxeln kontrollerad',
        items: [
          { type: 'shared', label: 'Datum', from: 'datum' },
          // Förval: Ditt namn från Inställningar (grått). Går att skriva något annat.
          { type: 'text', key: 'underskrift', label: 'Underskrift', placeholder: job => job.namn || '', names: true },
        ],
      },
    ],

    saknas: (job, data) => {
      const ute = mattUtanfor(t.key, job, data);
      return ute.length ? [`${ute.length === 1 ? 'måttet' : 'måtten'} ${ute.join(', ')} ligger utanför toleransen.`] : [];
    },

    toValues(job, data, { diff }) {
      const v = {};
      t.typ.forEach((label, i) => { v[i] = data.typ === label; });
      if (Array.isArray(d.usp)) { v[d.usp[0]] = data.usp === 'USP'; v[d.usp[1]] = data.usp === 'NSP'; } else if (d.usp != null) v[d.usp] = data.usp || '';
      // Eget värde i blanketten går före jobbets.
      const fromJob = { bandel: job.bandel, vxnr: job.vxnr, trafikplats: job.driftplats, vxmodell: job.vxmodell };
      for (const [k, idx] of Object.entries(d)) {
        if (k === 'usp') continue;
        v[idx] = data[k] || fromJob[k];
      }
      const auto = autoVarden(t.key, job, data);
      for (const [m, n, tol, upp, dif] of matt) {
        const row = (data.matt && data.matt[m]) || {};
        const normal = effektiv(row, 'normal', auto.normal[m]);
        v[n] = normal; v[tol] = effektiv(row, 'tolerans', auto.tol[m]); v[upp] = row.uppmatt;
        v[dif] = diff(normal, row.uppmatt);
      }
      for (const g of [...(t.markers || []), ...t.groups]) {
        for (const [, idx, kind] of g.items) v[idx] = kind === 'text' ? data[`t${idx}`] : !!data[`c${idx}`];
      }
      const datum = blankettDatum(job);
      if (Array.isArray(t.date)) {
        const [yyyy, mm, dd] = datum.split('-');
        v[t.date[0]] = yyyy; v[t.date[1]] = mm; v[t.date[2]] = dd;
      } else v[t.date] = datum;
      v[t.sign] = data.underskrift || job.namn;
      for (const k of Object.keys(v)) if (v[k] == null) v[k] = '';
      return v;
    },
  };
}

// Bara de här delarna är öppna från start i växelrapporterna, resten är minimerade (2026-10-20).
const OPPNA = ['Besiktningstyp', 'Växeldata', 'Mått i växeln', 'Spårväxeln kontrollerad'];

export const VAXELFORMS = VAXELTYPER.map(t => {
  const form = buildForm(t);
  form.sections.forEach(s => { s.closed = !OPPNA.includes(s.title); });
  return form;
});
