// TMALL 0824 Ibruktagandebesiktning banöverbyggnad utan projektering (Excel-mall, ver 4.0).
// Bladet TMALL0824 skrivs ut till en tom PDF-mall på två sidor och fälten skrivs på cellernas
// platser (ibt-layout.js). Signaturer är initialerna från namnet (2026-10-19).
import LAYOUT from './ibt-layout.js';
import { blankettDatum } from '../datum.js';
import { initialer } from '../initialer.js';
import { AVSNITT, PUNKT } from './tdok0311.js';

// TRVINFRA-00271 bilaga 1, tabell B1.1. sv: får utföras av spårsvetsare.
const ARBETEN = [
  [1, 'Arbeten i kategori 1 enligt TRVINFRA-00014'],
  [2, 'Arbeten i kategori 2 enligt TRVINFRA-00014'],
  [3, 'Arbeten i kategori 3 enligt TRVINFRA-00014'],
  [4, 'Rälbyte, både höger och vänster'],
  [5, 'Ensidigt rälbyte (t.ex. yttersträngsbyte)'],
  [6, 'Neutralisering av skarvfritt spår'],
  [7, 'Genomgående skarvreglering i skarvspår'],
  [8, 'Kontroll av rälsmängd med kapmetoden', 'sv'],
  [9, 'Kontroll av rälsmängd med VERSE-metoden'],
  [10, 'Inläggning av passräl (<12m) efter rälsbrott', 'sv'],
  [11, 'Inläggning av passräl (<12m) efter skador typ OFP-fel, slirsår', 'sv'],
  [12, 'Byte av isolerskarv', 'sv'],
  [13, 'Spårväxelrevision, komponentbyten, exkl. sliprar, och underhåll i spårväxel'],
  [14, 'Kilning (vid uppfrysning, tjäle)'],
  [15, 'Byte av spårkomponenter i ballastfritt spår'],
];
const ARBETE_VAL = ARBETEN.map(([n, text, sv]) => `${n}. ${text}${sv ? ' (spårsvetsare)' : ''}`);
const nummer = val => (val ? String(parseInt(val, 10)) : '');
const arbete = val => ARBETEN.find(([n]) => String(n) === nummer(val))?.[1] || '';

// Kontrollpunkter: rad i mallen, kontrollpunkt, utförs enligt, kontrollmoment.
const PUNKTER = [
  ['Allmänt', [
    [17, 'Krav för placering av fasta objekt utmed spåret', 'TRVINFRA-00398 – Banutformning', 'Inmätning med tumstock/ mätband'],
    [18, 'Arbeten i kategori 1, 2 eller 3 enligt TRVINFRA-00014', 'Bilaga kontrollplan TMALL0737', 'Kontroll av GO ifylld kontrollplan och bedömning av ev. hastighetsnedsättning görs och ev. restriktion införs. (E ansvarar för upprättande av kontrollplan)'],
  ]],
  ['Spår (TDOK 2021:0311 kap. 4.1)', [
    [21, 'Spårläge', 'Kap 4.1.1 – Att spårläge är inom tillåtna säkerhetsgränsvärden i enl. med TRVINFRA-00013 Banöverbyggnad spårläge, som redovisar vilka spårlägesparametrar och gränsvärden som föranleder anm. K38355 – Tillfällig hastighetsnedsättning ska inte ändra spårsträckas hastighetsklass.', 'GO utför uppmätning av spårläget genom belastad eller obelastad mätning, redovisning av mätning genom spårlägesdiagram eller skevningsprotokoll. Besiktningsman ansvar för kontroll av spårlägesdiagram, uppmätningsprotokoll och/eller nivellerareintyg.'],
    [22, 'Räl / gaturäl', 'Kap 4.1.2.2 / 4.1.2.3', 'Räl pkt 1-6, gaturäl pkt 1-7'],
    [23, 'Sliper', 'Kap. 4.1.3', 'Pkt 1'],
    [24, 'Befästning', 'Kap. 4.1.4', 'Pkt 1 - 3'],
    [25, 'Isolerskarv', 'Kap. 4.1.5', 'Pkt 1 - 2'],
    [26, 'Dilatationsanordning', 'Kap 4.1.6.2', 'Pkt 1 - 9'],
    [27, 'Skarv (olika typer)', 'Kap 4.1.7.2 / 4.1.7.3 / 4.1.7.4 / 4.1.8', 'Pkt, se respektive skarvtyp'],
    [28, 'Skarvöppning', 'Kap 4.1.8.1', 'Pkt 1'],
    [29, 'Rälsvandringshinder i skarvspår', 'Kap 4.1.9', 'Pkt 1 - 4'],
    [30, 'Heyback som ers. för rälsvandringshinder', 'Kap 4.1.9.1', 'Pkt 1 - 3'],
    [31, 'Skyddsräl', 'Kap 4.1.10', 'Pkt 1 - 4'],
    [32, 'Ballastsektion', 'Kap 4.1.11', 'Pkt 1 - 3'],
  ]],
  ['Växel (TDOK 2021:0311 kap. 4.2)', [
    [34, 'Spårläge', 'Kap 4.2.1, se kap 4.1.1', 'Kap 4.1.1 pkt 1'],
    [35, 'Spårväxel, spår- och styrviddsmått', 'Kap 4.2.1 – Spår- och styrviddsmått enl. TRVINFRA-00017 Spårväxel', 'Pkt 2'],
    [36, 'Räl', 'Kap 4.2.2.2, se kap 4.1.2.2', 'Kap 4.1.2.2 pkt 1 - 6'],
    [37, 'Sliper', 'Kap. 4.2.3', 'Pkt 1'],
    [38, 'Befästning', 'Kap. 4.2.4', 'Pkt 1 - 3'],
    [39, 'Skarv', 'Kap. 4.2.5', 'Kap 4.1.5 pkt 1-2, Kap 4.1.8 pkt 1-2'],
    [40, 'Ballastsektion', 'Kap. 4.2.6 se kap 4.1.11', 'Kap 4.1.11 pkt 1 - 3'],
    [41, 'Tunganordning', 'Kap. 4.2.7', 'Pkt 1 - 4'],
    [42, 'Korsning (generellt)', 'Kap. 4.2.8.1', 'Pkt 1 - 3'],
    [43, 'Korsning fastspets', 'Kap. 4.2.8.2', 'Pkt 1'],
    [44, 'Korsning rörlig spets', 'Kap. 4.2.8.3', 'Pkt 1 - 3'],
    [45, 'Moträl', 'Kap. 4.2.9', 'Pkt 1 - 4'],
    [46, 'Snöskydd', 'Kap. 4.2.10', 'Pkt 1 - 2'],
  ]],
  ['Övriga anläggningar (TDOK 2021:0311 kap. 4)', [
    [48, 'Plattform & lastkaj', 'Kap. 4.3.1 / 4.3.2', 'plf. pkt 1-7, lastkaj pkt 1-5'],
    [49, 'Plankorsning', 'Kap 4.1.21 Väg- och gångbana', 'Pkt 1 till 9'],
    [50, 'Kolvbroms', 'Kap. 4.4.1', 'Enl. instruktion'],
    [51, 'Spiralbroms', 'Kap. 4.4.2', 'Enl. instruktion'],
    [52, 'Balkbroms', 'Kap. 4.4.3', 'Enl. TDOK 2022:0360 / 2014:0448'],
    [53, 'Stoppbock', 'Kap 4.6', 'Pkt 1 - 4'],
    [54, 'Hägnad', 'Kap 4.7', 'Samtl. pkt under respektive obj.'],
  ]],
];
const UTFORD = 'Kontrollerad';
const EJ = 'Inte aktuellt';
// Kontrollpunkterna är en kryssruta (2026-10-19). Äldre jobb sparade Kontrollerad/Inte aktuellt.
const kontrollerad = v => v === true || v === UTFORD;

// Kontrollerade och bifogade egenkontroller. doc: förvalt Kontrollerad när jobbet har dokumentet.
const EGEN = [
  [57, '0737', 'Kontrollplan stabilitetspåverkande arbete', '0737'],
  [58, '0394', 'Spårväxel, besiktningsrapport', 'vaxel'],
  [59, '0846', 'Neutraliseringsrapport enl. beräkningsmetoden'],
  [60, '0391', 'Skarvspår, skarvöppningar'],
  [61, '-', 'Spårlägesdiagram belastad spårlägesmätning'],
  [62, '-', 'Spårlägesprotokoll obelastad spårlägesmätning', 'skevning'],
  [63, '0377 C³', 'Intyg belastad spårlägesmätning'],
  [64, '0435', 'Svetsrapport', 'svets'],
  [65, '-', 'Plattform, B- och H-mått'],
];

const ROLLER = [
  ['projektledare', 'TRV Projektledare', 4, job => job.projektledare || '', job => job.projektledare_tel || ''],
  ['platschef', 'Entreprenör Platschef', 5, job => job.platschef || ''],
  ['arbetsledare', 'Ibruktagande-/arbetsledare', 6, job => job.arbetsledare || ''],
  ['besiktningsman', 'Ibruktagandebesiktningsman', 7],
  ['bankontrollant', 'Bankontrollant', 8, job => job.namn || ''],
];
// Bankontrollanten besiktigar och signerar. Finns en besiktningsman på jobbet tas
// bankontrollanten bort och besiktningsmannen signerar i stället (2026-10-19).
const besiktningsman = data => (data.besiktningsman || '').trim();

const km = job => (job.km ? `${job.km}+${String(job.m || 0).padStart(3, '0')}` : '');
const dpl = job => [job.driftplats, job.vxnr ? `vxl ${job.vxnr}` : '', job.spar ? `sp ${job.spar}` : ''].filter(Boolean).join(' / ');
const bankontrollant = (job, data) => (besiktningsman(data) ? '' : data.bankontrollant ?? job.namn ?? '');
const signerar = (job, data) => besiktningsman(data) || bankontrollant(job, data);

export default {
  key: 'ibt',
  code: 'TMALL 0824',
  title: 'Ibruktagandebesiktning banöverbyggnad',
  format: 'overlay',
  ext: 'pdf',
  layout: LAYOUT,
  templateHint: 'TMALL 0824 Ibruktagandebesiktning banöverbyggnad (PDF-mall)',

  async matches({ pdf }) {
    return !!pdf && pdf.subject === 'Spårdokumentation mall ibt';
  },

  sections: [
    {
      title: 'Arbete',
      help: 'Grå text hämtas från jobbet.',
      items: [
        { type: 'radio', key: 'kontrakt', label: 'Arbete i', options: ['UH-kontrakt', 'Projekt'], defaultValue: () => 'UH-kontrakt' },
        { type: 'shared', label: 'Datum för besiktning', from: 'datum' },
        { type: 'text', key: 'arbete', label: 'Arbete', placeholder: () => 't.ex. Byte av isolerskarv vxl 12' },
        { type: 'text', key: 'bestnr', label: 'Beställningsnr' },
        // Besiktningsmannen gäller bara jobbet och sparas inte till nästa (namnet föreslås ändå).
        ...ROLLER.flatMap(([key, label, , def, defTfn]) => {
          const hideIf = key === 'bankontrollant' ? (job, data) => besiktningsman(data) : null;
          const remember = key !== 'besiktningsman';
          return [
            { type: 'text', key, label, defaultValue: def, remember: remember && !def, names: true, hideIf },
            { type: 'text', key: `${key}Tfn`, label: 'Tfn', inputType: 'tel', inputmode: 'tel', defaultValue: defTfn, remember: remember && !defTfn, hideIf },
          ];
        }),
        { type: 'text', key: 'bandel', label: 'Bandel', inputmode: 'numeric', defaultValue: job => job.bandel || '' },
      ],
    },
    {
      title: 'Objekt som ska kontrolleras',
      help: 'Arbeten enligt TRVINFRA-00271 bilaga 1. De som är märkta (spårsvetsare) får du som spårsvetsare besiktiga.',
      items: [{
        type: 'rows', key: 'objekt', max: 3, rowLabel: 'Objekt', addLabel: '+ Lägg till objekt',
        fields: [
          { type: 'text', key: 'dpl', label: 'Dpl/Sträcka/Spår' },
          { type: 'text', key: 'kmFran', label: 'Km från', half: true },
          { type: 'text', key: 'kmTill', label: 'Km till', half: true },
          { type: 'select', key: 'nr', label: 'Arbete enligt TRVINFRA-00271 bilaga 1', options: ARBETE_VAL },
          { type: 'text', key: 'atgard', label: 'Åtgärd' },
        ],
        newRow(previous, job) {
          return previous ? { dpl: previous.dpl, kmFran: previous.kmFran, kmTill: previous.kmTill } : { dpl: dpl(job), kmFran: km(job), kmTill: km(job) };
        },
      }],
    },
    {
      title: 'Hastighet',
      items: [
        { type: 'text', key: 'sth', label: 'STH (km/h)', inputmode: 'numeric', half: true },
        { type: 'text', key: 'tillaten', label: 'Tillåten hastighet vid ibruktagning (km/h)', inputmode: 'numeric', half: true },
      ],
    },
    ...PUNKTER.map(([title, rows]) => ({
      title: `Kontrollpunkter: ${title}`,
      help: title === 'Allmänt' ? 'Kryssa i punkterna som är kontrollerade. De signeras med dina initialer, eller besiktningsmannens om en sådan är ifylld, och övriga lämnas tomma. Tryck på en punkt för att se vad som ska kontrolleras enligt TDOK 2021:0311. A- och V-anmärkningar ska vara åtgärdade före trafikupplåtelse, annars ska hastighetsnedsättning införas tills de är åtgärdade.' : null,
      items: rows.map(([r, label, enligt, moment]) => ({
        type: 'check', key: `k${r}`, label, isChecked: kontrollerad,
        details: { intro: [`Utförs enligt: ${enligt}`, `Kontrollmoment: ${moment}`], blocks: (PUNKT[r] || []).map(n => AVSNITT[n]) },
      })),
    })),
    {
      title: 'Kontrollerade och bifogade egenkontroller',
      help: 'Kryssa i det som är kontrollerat och bifogas. Dokument som ingår i jobbet är ikryssade från början.',
      items: EGEN.map(([, tmall, label, doc], i) => (
        { type: 'check', key: `e${i}`, label: `${tmall === '-' ? '' : `TMALL ${tmall} `}${label}`, defaultValue: job => !!doc && !!job.docs?.includes(doc), isChecked: kontrollerad }
      )),
    },
    {
      title: 'Noterade anmärkningar',
      items: [{
        type: 'rows', key: 'anm', max: 4, rowLabel: 'Anmärkning', addLabel: '+ Lägg till anmärkning',
        fields: [
          { type: 'text', key: 'text', label: 'Besiktningsanmärkning' },
          { type: 'text', key: 'kmFran', label: 'Km från', half: true },
          { type: 'text', key: 'kmTill', label: 'Km till', half: true },
          { type: 'text', key: 'anl', label: 'Anläggning', half: true },
          { type: 'text', key: 'prio', label: 'Prioritet', list: ['A-anm', 'V-anm', 'M-anm', 'B-anm'], half: true },
          { type: 'text', key: 'atgardad', label: 'Anm. åtgärdad dat/sign' },
        ],
        newRow(previous, job) {
          return { kmFran: previous?.kmFran ?? km(job), kmTill: previous?.kmTill ?? km(job) };
        },
      }],
    },
    {
      title: 'Godkänd för spårbunden trafik',
      help: 'På rubricerad sträcka/anläggning intygas att banan är byggd och ibruktagandebesiktigad, enligt gällande normer och föreskrifter och kan därmed upplåtas för spårbunden trafik.',
      items: [{
        type: 'rows', key: 'godkand', max: 2, rowLabel: 'Sträcka', addLabel: '+ Lägg till sträcka',
        fields: [
          { type: 'text', key: 'kmFran', label: 'Km från', half: true },
          { type: 'text', key: 'kmTill', label: 'Km till', half: true },
          { type: 'text', key: 'spar', label: 'Spår', half: true },
          { type: 'text', key: 'sth', label: 'För STH', inputmode: 'numeric', half: true },
          { type: 'text', key: 'kommentar', label: 'Övrig kommentar' },
        ],
        newRow(previous, job) {
          return { kmFran: previous?.kmFran ?? km(job), kmTill: previous?.kmTill ?? km(job), spar: previous?.spar ?? (job.spar || '') };
        },
      }],
    },
    {
      title: 'Underskrift',
      help: 'Underskriften blir initialerna och namnförtydligandet hela namnet. Det är bankontrollanten som signerar, eller besiktningsmannen om en sådan är ifylld.',
      items: [
        { type: 'text', key: 'klockslag', label: 'Klockslag', inputType: 'time' },
      ],
    },
  ],

  toValues(job, data) {
    const val = (key, def) => (data[key] !== undefined ? data[key] : def);
    const datum = blankettDatum(job);
    const namn = signerar(job, data);
    const sign = initialer(namn);
    const kontrakt = val('kontrakt', 'UH-kontrakt');
    const v = {
      C2: kontrakt === 'UH-kontrakt' ? 'X' : '-',
      E2: kontrakt === 'Projekt' ? 'X' : '-',
      H2: datum,
      B3: data.arbete || '',
      I3: data.bestnr || '',
      I9: val('bandel', job.bandel || ''),
      C15: data.sth || '',
      I15: data.tillaten || '',
      A78: [datum, data.klockslag].filter(Boolean).join(' '),
      C78: sign,
      G78: namn,
    };
    for (const [key, , r, def, defTfn] of ROLLER) {
      v[`D${r}`] = val(key, def ? def(job) : '') || '';
      v[`H${r}`] = val(`${key}Tfn`, defTfn ? defTfn(job) : '') || '';
      if (key === 'bankontrollant' && besiktningsman(data)) v[`D${r}`] = v[`H${r}`] = '';
    }
    (data.objekt || []).slice(0, 3).forEach((o, i) => {
      const r = 12 + i;
      Object.assign(v, { [`A${r}`]: o.dpl || '', [`C${r}`]: o.kmFran || '', [`D${r}`]: o.kmTill || '', [`E${r}`]: nummer(o.nr), [`F${r}`]: arbete(o.nr), [`H${r}`]: o.atgard || '' });
    });
    for (const [, rows] of PUNKTER) {
      for (const [r] of rows) {
        v[`I${r}`] = kontrollerad(data[`k${r}`]) ? sign : '';
      }
    }
    EGEN.forEach(([r, , , doc], i) => {
      const har = doc && job.docs?.includes(doc);
      // Ikryssad = kontrollerad och bifogad (2026-10-19).
      if (kontrollerad(val(`e${i}`, !!har))) Object.assign(v, { [`F${r}`]: datum, [`H${r}`]: 'Ja', [`I${r}`]: sign });
    });
    (data.anm || []).slice(0, 4).forEach((a, i) => {
      const r = 68 + i;
      Object.assign(v, { [`A${r}`]: a.text || '', [`C${r}`]: a.kmFran || '', [`D${r}`]: a.kmTill || '', [`E${r}`]: a.anl || '', [`G${r}`]: a.prio || '', [`H${r}`]: a.atgardad || '' });
    });
    (data.godkand || []).slice(0, 2).forEach((g, i) => {
      const r = 75 + i;
      Object.assign(v, { [`A${r}`]: g.kmFran || '', [`C${r}`]: g.kmTill || '', [`E${r}`]: g.spar || '', [`F${r}`]: g.sth || '', [`G${r}`]: g.kommentar || '' });
    });
    return v;
  },
};
