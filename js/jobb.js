// Uppgifter om jobbet som styr vilka dokument som föreslås: jobbnamn, typ av arbete och vem som
// får ibruktaga (TRVINFRA-00271 v2.0 bilaga 1 tabell B1.1) samt belastad eller obelastad
// spårlägesmätning (TRVINFRA-00013 v2.0 tabell K6.1).

// Vem som får göra ibruktagandebesiktningen, från lägsta behörighet.
export const BEHORIGHET = {
  sv: 'Spårsvetsaren får ibruktaga.',
  bk: 'Bankontrollant krävs för ibruktagandet (spårsvetsare får inte).',
  sbm: 'Säkerhetsbesiktningsman krävs för ibruktagandet.',
};
// Spårlägesmätning efter arbetet för spårsträckans STH.
export const SPARLAGE = {
  obelastad: 'Obelastad spårlägesmätning räcker.',
  belastadX: 'Belastad spårlägesmätning, men beställaren får besluta att obelastad räcker.',
  belastad: 'Belastad spårlägesmätning krävs.',
};

// id = radnumret i tabell B1.1. k61 = raden i tabell K6.1.
export const ARBETEN = [
  { id: '1', label: 'Arbete i kategori 1 enligt TRVINFRA-00014', ibt: 'sbm', sparlage: 'belastad', k61: '5, 8, 11–14', stab: true },
  { id: '2', label: 'Arbete i kategori 2 enligt TRVINFRA-00014', ibt: 'bk', sparlage: 'belastadX', k61: '6, 9, 15–18', stab: true,
    not: 'Slipers och riktning i kategori 2 kräver belastad mätning. Ingrepp i bankropp och schakt i kategori 2: beställaren får besluta om obelastad.' },
  { id: '3', label: 'Arbete i kategori 3 enligt TRVINFRA-00014', ibt: 'bk', sparlage: 'obelastad', k61: '7, 10, 31', stab: true,
    not: 'Schakt i kategori 3 som inte påverkar material närmare än 0,4 m utanför slipersände: beställaren beslutar om spårlägesmätning ska göras.' },
  { id: '4', label: 'Rälbyte, både höger och vänster', ibt: 'sbm', sparlage: 'belastad', k61: '19' },
  { id: '5', label: 'Ensidigt rälbyte (t.ex. yttersträngsbyte)', ibt: 'bk', sparlage: 'obelastad', k61: '20' },
  { id: '6', label: 'Neutralisering av skarvfritt spår', ibt: 'sbm', sparlage: 'belastad', k61: '21' },
  { id: '7', label: 'Genomgående skarvreglering i skarvspår', ibt: 'sbm', sparlage: 'belastad', k61: '22' },
  { id: '8', label: 'Kontroll av rälsmängd med kapmetoden', ibt: 'sv', sparlage: 'obelastad', k61: '23', kap: true },
  { id: '9', label: 'Kontroll av rälsmängd med VERSE-metoden', ibt: 'bk', sparlage: 'obelastad', k61: '24' },
  { id: '10', label: 'Inläggning av passräl (< 12 m) efter rälsbrott', ibt: 'sv', sparlage: 'obelastad', k61: '25' },
  { id: '11', label: 'Inläggning av passräl (< 12 m) efter skador typ OFP-fel, slirsår', ibt: 'sv', sparlage: 'obelastad', k61: '26' },
  { id: '12', label: 'Byte av isolerskarv', ibt: 'sv', sparlage: 'obelastad', k61: '27' },
  { id: '13', label: 'Spårväxelrevision, komponentbyten (exkl. sliprar) och underhåll i spårväxel', ibt: 'bk', sparlage: 'obelastad', k61: '29' },
  { id: '14', label: 'Kilning (vid uppfrysning, tjäle)', ibt: 'sbm', sparlage: 'obelastad', k61: '30' },
  { id: '15', label: 'Byte av spårkomponenter i ballastfritt spår', ibt: 'bk', sparlage: 'obelastad', k61: '33' },
  { id: 'pa', label: 'Påläggssvetsning', ibt: null, sparlage: 'obelastad', k61: '28',
    not: 'Finns inte i tabell B1.1. Ibruktagandebesiktning krävs ändå om komponenter monteras, lossas eller ändras så att trafiksäkerheten kan påverkas (K118347).' },
];
const BY_ID = Object.fromEntries(ARBETEN.map(a => [a.id, a]));
const RANG = { sv: 0, bk: 1, sbm: 2 };
const SPAR_RANG = { obelastad: 0, belastadX: 1, belastad: 2 };

// Det strängaste kravet bland de valda arbetena.
export function bedomning(ids = []) {
  const valda = ids.map(id => BY_ID[id]).filter(Boolean);
  const max = (list, rang) => list.reduce((a, b) => (a == null || rang[b] > rang[a] ? b : a), null);
  return {
    valda,
    ibt: max(valda.map(a => a.ibt).filter(Boolean), RANG),
    sparlage: max(valda.map(a => a.sparlage), SPAR_RANG),
  };
}

// Dokumenten som jobbet troligen behöver, utifrån frågorna och typen av arbete.
export function foreslagnaDokument(job) {
  const { valda, sparlage } = bedomning(job.arbeten);
  const ja = k => job[k] === 'Ja';
  const docs = new Set();
  if (ja('hett') || ja('svetsning')) docs.add('heta');
  if (ja('svetsning')) docs.add('svets');
  if (ja('ivaxel')) { docs.add('vaxel'); docs.add('1481'); }
  if (valda.some(a => a.ibt)) docs.add('ibt');
  if (valda.some(a => a.stab)) docs.add('0737');
  if (valda.some(a => a.kap)) docs.add('kap');
  // Skevningsprotokollet är den manuella, obelastade mätningen.
  if (sparlage === 'obelastad') docs.add('skevning');
  return docs;
}

// ISO-vecka för ett datum 'yyyy-mm-dd'.
function vecka(datum) {
  const [y, m, d] = datum.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d));
  const dag = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - dag);
  const forsta = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t - forsta) / 864e5 + 1) / 7);
}

const DAGAR = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'];

// V01 Mån Lnk Isolbyte, eller V01 NmTis Lnk Isolbyte för natt mot tisdag. Veckan räknas på
// skiftets startdag.
export function jobbnamn(job) {
  const delar = [];
  if (/^\d{4}-\d{2}-\d{2}$/.test(job.datum || '')) {
    const [y, m, d] = job.datum.split('-').map(Number);
    const dag = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
    delar.push(`V${String(vecka(job.datum)).padStart(2, '0')}`, job.natt ? `Nm${DAGAR[(dag + 1) % 7]}` : DAGAR[dag]);
  }
  if (job.driftplats) delar.push(job.driftplats.trim());
  if (job.arbete) delar.push(job.arbete.trim());
  return delar.filter(Boolean).join(' ');
}
