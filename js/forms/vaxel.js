// Växelbesiktningsrapporterna (TMALL 0379–0386). Alla är Word-mallar med samma uppbyggnad,
// men fälten ligger på olika platser. Siffrorna är formulärfältens ordning i mallens
// document.xml. Måttabellerna kommer ur vaxel-matt.js.
import MATT from './vaxel-matt.js';

const FORBES = ['Säkerhetsbesiktning', 'Underhållsbesiktning', 'Förbesiktning i spår', 'Förbesiktning på byggplats'];

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

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
];

const DATA_LABELS = {
  inlaggningsar: ['Inläggningsår', 'numeric'],
  ritnr: ['Ritn.nr'],
  ybv: ['YBV/IBV'],
  radie: ['Radie/Ök'],
  besiktningsklass: ['Besiktningsklass'],
  driftplats_v: ['Driftplats åt vänster i växelbilden (A-ände)'],
  driftplats_h: ['Driftplats åt höger i växelbilden (B-ände)'],
};

function buildForm(t) {
  const matt = MATT[t.key];
  const d = t.data;
  const checkItems = g => g.items.map(([label, idx, kind]) => kind === 'text'
    ? { type: 'text', key: `t${idx}`, label }
    : { type: 'check', key: `c${idx}`, label });

  return {
    key: t.key,
    code: t.code,
    title: t.title,
    format: 'word',
    ext: 'docx',
    templateHint: `${t.title} (Word)`,

    async matches({ word }) {
      return !!word && word.fieldCount === t.fieldCount && word.text.includes(t.match);
    },

    sections: [
      { title: 'Besiktningstyp', items: [{ type: 'radio', key: 'typ', options: t.typ }] },
      {
        title: 'Växeldata',
        items: [
          { type: 'shared', label: 'Bandel', from: 'bandel' },
          { type: 'shared', label: 'Vx.nr', from: 'vxnr' },
          { type: 'shared', label: 'Trafikplats', from: 'driftplats' },
          { type: 'shared', label: 'Växelmodell', from: 'vxmodell' },
          ...['inlaggningsar', 'ritnr', 'ybv', 'radie'].filter(k => k in d)
            .map(k => ({ type: 'text', key: k, label: DATA_LABELS[k][0], inputmode: DATA_LABELS[k][1] })),
          ...(d.usp ? [{ type: 'radio', key: 'usp', label: 'Spår', options: ['USP', 'NSP'] }] : []),
          ...['besiktningsklass', 'driftplats_v', 'driftplats_h']
            .map(k => ({ type: 'text', key: k, label: DATA_LABELS[k][0] })),
        ],
      },
      {
        title: t.markers ? 'Markeringar i växelbilden' : 'Växelbild',
        items: [
          { type: 'image', src: `img/vaxelbild/${t.key}.png`, alt: `Växelbild ${t.short}` },
          ...(t.markers || []).flatMap(g => [{ type: 'label', label: g.title.replace(/^Markeringar (i växelbilden, )?/, '') }, ...checkItems(g)]),
        ],
      },
      {
        title: 'Mått i växeln',
        help: 'Fyll i normalvärde, tolerans och uppmätt. Differensen räknas ut. Max 4 tecken per ruta.',
        items: [
          { type: 'image', src: `img/placering/${t.key}.png`, alt: `Placering mått ${t.short}, TRVINFRA-00017 bilaga 7` },
          { type: 'measures', keys: matt.map(m => m[0]) },
        ],
      },
      ...t.groups.map(g => ({ title: g.title, items: checkItems(g) })),
      {
        title: 'Spårväxeln kontrollerad',
        items: [
          { type: 'shared', label: 'Datum', from: 'datum' },
          { type: 'shared', label: 'Underskrift', from: 'signatur' },
        ],
      },
    ],

    toValues(job, data, { diff }) {
      const v = {};
      t.typ.forEach((label, i) => { v[i] = data.typ === label; });
      if (d.usp) { v[d.usp[0]] = data.usp === 'USP'; v[d.usp[1]] = data.usp === 'NSP'; }
      const fromJob = { bandel: job.bandel, vxnr: job.vxnr, trafikplats: job.driftplats, vxmodell: job.vxmodell };
      for (const [k, idx] of Object.entries(d)) {
        if (k === 'usp') continue;
        v[idx] = k in fromJob ? fromJob[k] : data[k];
      }
      for (const [m, n, tol, upp, dif] of matt) {
        const row = (data.matt && data.matt[m]) || {};
        v[n] = row.normal; v[tol] = row.tolerans; v[upp] = row.uppmatt;
        v[dif] = diff(row.normal, row.uppmatt);
      }
      for (const g of [...(t.markers || []), ...t.groups]) {
        for (const [, idx, kind] of g.items) v[idx] = kind === 'text' ? data[`t${idx}`] : !!data[`c${idx}`];
      }
      const [yyyy, mm, dd] = (job.datum || '').split('-');
      v[t.date[0]] = yyyy; v[t.date[1]] = mm; v[t.date[2]] = dd;
      v[t.sign] = job.signatur || job.namn;
      for (const k of Object.keys(v)) if (v[k] == null) v[k] = '';
      return v;
    },
  };
}

export const VAXELFORMS = VAXELTYPER.map(buildForm);
