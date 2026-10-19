// TMALL 0379 Besiktningsrapport Enkel växel (Word-mall, .dotx).
// Siffrorna är formulärfältens ordning i mallens document.xml (0–151).

const TYPER = ['Säkerhetsbesiktning', 'Underhållsbesiktning', 'Förbesiktning på byggplats', 'Förbesiktning i spår'];
const MATT = ['a', 'b', 'c', 'c1', 'e', 'e1', 'y', 'y1', 'i', 'i1', 'g', 'g1', 'h', 'h1', 'x', 'x1', 'r', 'r1', 't', 't1', 'u', 'u1', 'd', 'd1'];
const NORMAL = 23, TOLERANS = 47, UPPMATT = 71, DIFFERENS = 95;

const checks = {
  // Markeringar i växelbilden
  ovre_nhsp: 17, ovre_ahsp: 18, ovre_ssp: 19,
  nedre_nhsp: 20, nedre_ahsp: 21, nedre_ssp: 22,
  // Korsning
  tillverkare_x: 119, ralsstal: 127, manganstal: 132, explhardad: 133,
  // Värmebehandlat
  tungor: 121, stodraler: 128,
  mellanral1: 122, mellanral2: 129, mellanral3: 134, mellanral4: 137,
  // Driv
  driv1: 123, driv2: 130, driv3: 135, driv4: 138, driv5: 140, driv6: 142,
  // Övrigt
  tkk_nhsp: 124, tkk_ahsp: 125, tkk_ssp: 126, tungspetslas: 131,
  vaxelklot_klyk: 136, vaxelklot: 139, uppkorbar: 141, vaxelvarme: 143,
  // Isolerskarvsplacering
  isol1: 144, isol2: 146, isol3: 145, isol4: 147,
};

const check = (key, label) => ({ type: 'check', key, label });

export default {
  key: 'ev',
  code: 'TMALL 0379',
  title: 'Besiktningsrapport Enkel växel',
  format: 'word',
  ext: 'docx',
  templateHint: 'Besiktningsrapport Enkel växel (.dotx)',

  async matches({ word }) {
    return !!word && word.fieldCount === 152 && word.text.includes('Besiktningsrapport Enkel växel');
  },

  sections: [
    {
      title: 'Besiktningstyp',
      items: [{ type: 'radio', key: 'typ', options: TYPER }],
    },
    {
      title: 'Växeldata',
      items: [
        { type: 'shared', label: 'Bandel', from: 'bandel' },
        { type: 'shared', label: 'Vx.nr', from: 'vxnr' },
        { type: 'shared', label: 'Trafikplats', from: 'driftplats' },
        { type: 'shared', label: 'Växelmodell', from: 'vxmodell' },
        { type: 'text', key: 'inlaggningsar', label: 'Inläggningsår', inputmode: 'numeric' },
        { type: 'text', key: 'ritnr', label: 'Ritn.nr' },
        { type: 'text', key: 'ybv', label: 'YBV/IBV' },
        { type: 'text', key: 'radie', label: 'Radie/Ök' },
        { type: 'radio', key: 'usp', label: 'Spår', options: ['USP', 'NSP'] },
        { type: 'text', key: 'besiktningsklass', label: 'Besiktningsklass' },
        { type: 'text', key: 'driftplats_v', label: 'Driftplats åt spetsen (vänster i växelbilden)' },
        { type: 'text', key: 'driftplats_h', label: 'Driftplats åt korsningen (höger i växelbilden)' },
      ],
    },
    {
      title: 'Mått i växeln',
      help: 'Fyll i normalvärde, tolerans och uppmätt. Differensen räknas ut. Max 4 tecken per ruta.',
      items: [{ type: 'measures', keys: MATT }],
    },
    {
      title: 'Markeringar i växelbilden',
      items: [
        { type: 'label', label: 'Övre gren' },
        check('ovre_nhsp', 'nhsp'), check('ovre_ahsp', 'ahsp'), check('ovre_ssp', 'ssp'),
        { type: 'label', label: 'Nedre gren' },
        check('nedre_nhsp', 'nhsp'), check('nedre_ahsp', 'ahsp'), check('nedre_ssp', 'ssp'),
      ],
    },
    {
      title: 'Korsning',
      items: [
        check('tillverkare_x', 'Tillverkare'),
        { type: 'text', key: 'tillverkare', label: 'Tillverkarens namn' },
        check('ralsstal', 'Rälsstål'), check('manganstal', 'Manganstål'), check('explhardad', 'Expl.härdad'),
      ],
    },
    {
      title: 'Värmebehandlat',
      items: [
        check('tungor', 'Tungor (tunganordning)'), check('stodraler', 'Stödräler (tunganordning)'),
        check('mellanral1', 'Mellanräl 1'), check('mellanral2', 'Mellanräl 2'),
        check('mellanral3', 'Mellanräl 3'), check('mellanral4', 'Mellanräl 4'),
      ],
    },
    {
      title: 'Driv',
      items: [1, 2, 3, 4, 5, 6].map(n => check(`driv${n}`, `Driv ${n}`)),
    },
    {
      title: 'Övrigt',
      items: [
        check('tkk_nhsp', 'TKK nhsp'), check('tkk_ahsp', 'TKK ahsp'), check('tkk_ssp', 'TKK ssp'),
        check('tungspetslas', 'Elektriskt tungspetslås'),
        check('vaxelklot_klyk', 'Växelklot med klykväxellås'), check('vaxelklot', 'Växelklot'),
        check('uppkorbar', 'Uppkörbar omläggningsanordning'), check('vaxelvarme', 'Växelvärme'),
      ],
    },
    {
      title: 'Isolerskarvsplacering (sett från V till H)',
      items: [1, 2, 3, 4].map(n => check(`isol${n}`, `Position ${n}`)),
    },
    {
      title: 'Spårväxeln kontrollerad',
      items: [
        { type: 'shared', label: 'Datum', from: 'datum' },
        { type: 'shared', label: 'Underskrift', from: 'signatur' },
      ],
    },
  ],

  // Översätt jobbets data till mallens fält.
  toValues(job, data, { diff }) {
    const v = {};
    TYPER.forEach((t, i) => { v[i] = data.typ === t; });
    v[4] = data.usp === 'USP';
    v[5] = data.usp === 'NSP';
    Object.assign(v, {
      6: data.inlaggningsar, 7: data.ritnr, 8: data.ybv, 9: data.radie,
      10: job.bandel, 11: job.vxnr, 12: job.driftplats, 13: job.vxmodell,
      14: data.besiktningsklass, 15: data.driftplats_v, 16: data.driftplats_h,
      120: data.tillverkare,
    });
    MATT.forEach((m, k) => {
      const row = (data.matt && data.matt[m]) || {};
      v[NORMAL + k] = row.normal;
      v[TOLERANS + k] = row.tolerans;
      v[UPPMATT + k] = row.uppmatt;
      v[DIFFERENS + k] = diff(row.normal, row.uppmatt);
    });
    for (const [key, index] of Object.entries(checks)) v[index] = !!data[key];
    const [yyyy, mm, dd] = (job.datum || '').split('-');
    Object.assign(v, { 148: yyyy, 149: mm, 150: dd, 151: job.signatur || job.namn });
    for (const k of Object.keys(v)) if (v[k] == null) v[k] = '';
    return v;
  },
};
