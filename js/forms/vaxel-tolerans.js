// Toleranser ur TRVINFRA-00017 Spårväxel v5.0, bilaga 9 (nybyggnad), 10 (säkerhet) och 11 (underhåll).
// Varje tabell gäller en besiktning, en eller flera växeltyper, en modellfamilj och ibland
// besiktningsklass (B1–B2 eller B3–B5) och radie (R ≥ 300 m eller R < 300 m).
// 'max 1398/min 1392' räknas om till +/− mot normalvärdet. '≥59/55' blir ≥59 för S54, BV50,
// UIC60, UIC60/60E och 60E och ≥55 för övriga.

// 'c..7' blir c c1 c2 … c7.
function t(...pairs) {
  const out = {};
  for (let i = 0; i < pairs.length; i += 2) {
    for (const tok of pairs[i].split(' ')) {
      const m = tok.match(/^([a-z])\.\.(\d+)$/);
      const names = m ? [m[1], ...Array.from({ length: +m[2] }, (_, k) => m[1] + (k + 1))] : [tok];
      for (const n of names) out[n] = pairs[i + 1];
    }
  }
  return out;
}

const MM = (max, min) => ({ max, min });
const X = '≥59/55';

export const TABELLER = [
  // Bilaga 9 Nybyggnad
  { id: 'B9.1', typ: 'ny', vx: ['ev'], fam: '60E', tol: t('a b c c1 r r1 t t1 u u1 y y1 d d1 e e1', '±4', 'i i1', '+2/-1', 'g g1', '±1,5', 'h h1', '±1', 'x x1', '≥59') },
  { id: 'B9.2', typ: 'ny', vx: ['evr'], fam: '60E', tol: t('a b c c1 r r1 d d1 t t1 u u1 y y1 e e1 z z1', '±4', 'x x1 q q1', '≥59') },
  { id: 'B9.3', typ: 'ny', vx: ['ev'], fam: 'BV50', variant: 'trä', tol: t('a b c c1 r r1 t t1 u u1 y y1 d e e1', '±2', 'd1', '+3/-2', 'i i1', '+3/-1', 'g g1', '±1,5', 'h h1', '±1', 'x x1', '≥59') },
  { id: 'B9.4', typ: 'ny', vx: ['ev'], fam: 'BV50', variant: 'betong', tol: t('a b c c1 r r1 t t1 u u1 y y1 d d1 e e1', '±4', 'i i1', '+3/-1', 'g g1', '±1,5', 'h h1', '±1', 'x x1', '≥59') },
  { id: 'B9.5', typ: 'ny', vx: ['dkv'], fam: '60E', tol: t('e..3 b..3 c..7', '±3', 'g..3', '±1,5', 'h..7', '±1', 'i..3', '+2/-1', 'k..3', '±2', 'x..7', '≥57') },
  { id: 'B9.6', typ: 'ny', vx: ['dkv'], fam: 'S54', tol: t('e..3 b..3 c..7', '±3', 'g..3', '±1,5', 'h..7', '±1', 'i..3', '+3/-1', 'k..3', '±2', 'x..7', '≥59') },
  { id: 'B9.7', typ: 'ny', vx: ['ekv'], fam: 'S54', tol: t('e..3 b..3 c c1 c2 c5 c6 c7', '±3', 'g..3', '±1,5', 'h..7', '±1', 'i..3', '+3/-1', 'k..3', '±2', 'x..3', '≥59') },
  { id: 'B9.12', typ: 'ny', vx: ['spk'], fam: '60E', tol: t('e..3 b..3', '±2', 'g..3', '±1,5', 'h..7', '±1', 'i..3', '+3/-1', 'k..3', '±2') },
  { id: 'B9.13', typ: 'ny', vx: ['spk'], fam: 'BV50', tol: t('e..3 b..3', '±2', 'g..3', '±1,5', 'h..7', '±1', 'i..3', '+3/-1', 'k..3', '±2') },

  // Bilaga 10 Säkerhet
  { id: 'B10.1', typ: 'sak', vx: ['ev'], fam: '60E', klass: '35', tol: t('a c c1 t t1', '±6', 'd d1 e e1', '+4/-6', 'i i1', '+2/-4', 'h h1', '±3') },
  { id: 'B10.2', typ: 'sak', vx: ['ev'], fam: 'ovr', klass: '35', radie: 'ge300', tol: t('a c c1 t t1', '+8/-4', 'd d1 e e1', '+6/-4', 'i i1', MM(1398, 1392), 'h h1', '±3') },
  { id: 'B10.3', typ: 'sak', vx: ['ev'], fam: 'ovr', klass: '35', radie: 'lt300', tol: t('a c t', '+8/-4', 'c1 t1', '+15/-5', 'd e', '+6/-4', 'd1 e1', '+8/-5', 'i i1', MM(1398, 1392), 'h', '±3', 'h1', '±4') },
  { id: 'B10.4', typ: 'sak', vx: ['ev'], fam: '60E', klass: '12', tol: t('a c c1 t t1', '+13/-7', 'd d1 e e1', '+6/-7', 'i i1', '+4/-7', 'h h1', '±4') },
  { id: 'B10.5', typ: 'sak', vx: ['ev'], fam: 'ovr', klass: '12', tol: t('a c c1 t t1', '+15/-5', 'd d1 e e1', '+8/-5', 'i i1', MM(1400, 1389), 'h h1', '±4') },
  { id: 'B10.6', typ: 'sak', vx: ['evr'], fam: '60E', tol: t('a c c1 t t1 d d1 e e1 z z1', '±6') },
  { id: 'B10.7', typ: 'sak', vx: ['evr'], fam: 'ovr', tol: t('a c c1 t t1 d d1 e e1 z z1', '+8/-4') },
  { id: 'B10.8', typ: 'sak', vx: ['v3s'], tol: t('a c..3', '+15/-5', 'd..4', '+8/-5', 'i..5', '+6/-5', 'h..5', '±4') },
  { id: 'B10.9', typ: 'sak', vx: ['v3o'], tol: t('a c b1 c1', '+15/-5', 'd..4', '+8/-5', 'i..5', '+6/-5', 'h..5', '±4') },
  { id: 'B10.10', typ: 'sak', vx: ['dkv'], fam: '60E', klass: '35', tol: t('b..3 c..7', '±6', 'i..3', '+2/-4', 'h h1 h6 h7', '±3') },
  { id: 'B10.11', typ: 'sak', vx: ['dkv'], fam: 'ovr', klass: '35', tol: t('b..3 c..7', '+8/-4', 'i..3', '+4/-2', 'h h1 h6 h7', '±3') },
  { id: 'B10.12', typ: 'sak', vx: ['dkv'], fam: '60E', klass: '12', tol: t('b..3 c..7', '+13/-7', 'i..3', '+4/-7', 'h h1 h6 h7', '±4') },
  { id: 'B10.13', typ: 'sak', vx: ['dkv'], fam: 'ovr', klass: '12', tol: t('b..3 c..7', '+15/-5', 'i..3', '+6/-5', 'h h1 h6 h7', '±4') },
  { id: 'B10.14', typ: 'sak', vx: ['ekv'], klass: '35', tol: t('b..3 c c1 c2 c5 c6 c7', '+8/-4', 'i..3', '+4/-2', 'h h1 h6 h7', '±3') },
  { id: 'B10.15', typ: 'sak', vx: ['ekv'], klass: '12', tol: t('b..3 c c1 c2 c5 c6 c7', '+15/-5', 'i..3', '+6/-5', 'h h1 h6 h7', '±4') },
  { id: 'B10.25', typ: 'sak', vx: ['spk'], tol: t('i..3', '+6/-5', 'h h1 h6 h7', '±4') },

  // Bilaga 11 Underhåll
  { id: 'B11.1', typ: 'und', vx: ['ev'], fam: '60E', klass: '35', tol: t('a b c c1 r r1 t t1 u u1 y y1', '+6/-4', 'd d1 e e1', '±4', 'i i1', '±2', 'g g1 h h1', '±3', 'x x1', '≥59') },
  { id: 'B11.2', typ: 'und', vx: ['ev'], fam: 'ovr', klass: '35', radie: 'ge300', tol: t('a b c c1 r r1 t t1 u u1 y y1', '+8/-4', 'd d1 e e1', '+6/-4', 'i i1', MM(1398, 1392), 'g g1 h h1', '±3', 'x x1', X) },
  { id: 'B11.3', typ: 'und', vx: ['ev'], fam: 'ovr', klass: '35', radie: 'lt300', tol: t('a b c r t u y', '+8/-4', 'c1 r1 t1 u1', '+15/-5', 'y1', '+10/-5', 'd e', '+6/-4', 'd1 e1', '+8/-5', 'i i1', MM(1398, 1392), 'g g1 h', '±3', 'h1', '±4', 'x x1', X) },
  { id: 'B11.4', typ: 'und', vx: ['ev'], fam: '60E', klass: '12', tol: t('a b y y1 c r t u', '+8/-5', 'c1 r1 t1 u1', '+13/-5', 'd d1 e e1', '+6/-5', 'i i1', '+2/-3', 'g g1', '±3', 'h h1', '±4', 'x x1', '≥59') },
  { id: 'B11.5', typ: 'und', vx: ['ev'], fam: 'ovr', klass: '12', tol: t('a b y y1 c r t u', '+10/-5', 'c1 r1 t1 u1', '+15/-5', 'd d1 e e1', '+8/-5', 'i i1', MM(1398, 1392), 'g g1', '±3', 'h h1', '±4', 'x x1', X) },
  { id: 'B11.6', typ: 'und', vx: ['evr'], fam: '60E', tol: t('a b c c1 r r1 d d1 t t1 u u1 y y1 e e1 z z1', '+6/-4', 'x x1 q q1', '≥59') },
  { id: 'B11.7', typ: 'und', vx: ['evr'], fam: 'ovr', tol: t('a b c c1 r r1 d d1 t t1 u u1 y y1 e e1 z z1', '+8/-4', 'x x1 q q1', '≥59') },
  { id: 'B11.8', typ: 'und', vx: ['v3s'], tol: t('a b c', '+10/-5', 'b1 c1 c2 c3 t t1', '+15/-5', 'd..4 e..2', '+8/-5', 'g..5', '±3', 'h..5', '±4', 'i..5', '+4/-2', 'x..3', X) },
  { id: 'B11.9', typ: 'und', vx: ['v3o'], tol: t('a b c t', '+10/-5', 'b1 c1 t1 t2', '+15/-5', 'd..4 e..2', '+8/-5', 'g..5', '±3', 'h..5', '±4', 'i..5', '+4/-2', 'x..3', X) },
  { id: 'B11.10', typ: 'und', vx: ['dkv'], fam: '60E', klass: '35', tol: t('e..3 b..3 c..7', '+6/-4', 'g..3 h..7', '±3', 'i..3', '+2/-2', 'k..3', '+6/-4', 'x..7', '≥59') },
  { id: 'B11.11', typ: 'und', vx: ['dkv'], fam: 'ovr', klass: '35', tol: t('e..3 b..3 c..7', '+8/-4', 'g..3 h..7', '±3', 'i..3', '+4/-2', 'k..3', '+8/-4', 'x..7', X) },
  { id: 'B11.12', typ: 'und', vx: ['dkv'], fam: '60E', klass: '12', tol: t('e..3 b..3 c1 c2 c5 c6', '+8/-5', 'c c3 c4 c7', '+13/-5', 'g..3', '±3', 'h..7', '±4', 'i..3', '+2/-3', 'k..3', '+8/-5', 'x..7', '≥59') },
  { id: 'B11.13', typ: 'und', vx: ['dkv'], fam: 'ovr', klass: '12', tol: t('e..3 b..3 c1 c2 c5 c6', '+10/-5', 'c c3 c4 c7', '+15/-5', 'g..3', '±3', 'h..7', '±4', 'i..3', '+4/-2', 'k..3', '+10/-5', 'x..7', X) },
  { id: 'B11.14', typ: 'und', vx: ['ekv'], klass: '35', tol: t('e..3 b..3 c c1 c2 c5 c6 c7', '+8/-4', 'g..3 h..7', '±3', 'i..3', '+4/-2', 'k..3', '+8/-4', 'x..3', X) },
  { id: 'B11.15', typ: 'und', vx: ['ekv'], klass: '12', tol: t('e..3 b..3 c1 c2 c5 c6', '+10/-5', 'c c7', '+15/-5', 'g..3', '±3', 'h..7', '±4', 'i..3', '+4/-2', 'k..3', '+10/-5', 'x..3', X) },
  { id: 'B11.25', typ: 'und', vx: ['spk'], klass: '35', tol: t('e..3 b..3', MM(1441, 1431), 'g..3 h..7', '±3', 'i..3', MM(1398, 1392), 'k..3', MM(1443, 1431)) },
  { id: 'B11.26', typ: 'und', vx: ['spk'], klass: '12', tol: t('e..3 b..3', MM(1443, 1430), 'g..3', '±3', 'h..7', '±4', 'i..3', MM(1398, 1392), 'k..3', MM(1445, 1430)) },
];

// Besiktningstypen i blanketten → bilaga.
export function besiktning(typ) {
  if (/^Säkerhet/.test(typ || '')) return 'sak';
  if (/^Underhåll/.test(typ || '')) return 'und';
  if (/^(För|Slut)besiktning/.test(typ || '')) return 'ny';
  return null;
}

// Modellfamiljer som tabellerna skiljer på.
function familjer(modell) {
  const m = (modell || '').toUpperCase();
  const f = new Set();
  if (/-60E-/.test(m) && !/UIC60\/60E/.test(m)) f.add('60E'); else f.add('ovr');
  if (/-BV50-/.test(m)) f.add('BV50');
  if (/-S54-/.test(m)) f.add('S54');
  return f;
}

// Radien ur radiefältet, annars ur modellnamnet (t.ex. EV-60E-760-1:15 eller EV-BV50-225/190-1:9).
export function radie(modell, radiefalt) {
  const egen = String(radiefalt || '').match(/\d+/);
  if (egen && +egen[0] >= 100) return +egen[0];
  const m = (modell || '').match(/^[A-Z0-9]+-[^-]+-(\d+(?:\/\d+)*)-/i);
  if (!m) return null;
  const r = Math.min(...m[1].split('/').map(Number));
  return r >= 100 ? r : null;
}

export function klass(text) {
  const m = String(text || '').match(/[1-5]/);
  return m ? (+m[0] <= 2 ? '12' : '35') : null;
}

function relativ(tol, normal, modell) {
  if (tol === X) return /-(S54|BV50|UIC60|60E)-/i.test(modell) || /UIC60\/60E/i.test(modell) ? '≥59' : '≥55';
  if (typeof tol === 'string') return tol;
  const n = Number(normal);
  if (!Number.isFinite(n) || !normal) return null;
  return `+${tol.max - n}/-${n - tol.min}`;
}

/**
 * Toleranser för en växel. Okänd klass, radie eller (för BV50 nybyggnad) slipertyp ger flera
 * möjliga tabeller; då fylls bara de mått i där alla tabellerna är överens.
 * Returnerar { tol: {mått: värde}, tabeller: ['B10.2', …], saknas: ['besiktningsklass', 'radie'] }.
 */
export function toleranser({ vaxeltyp, modell, typ, besiktningsklass, radiefalt, normal = {} }) {
  const b = besiktning(typ);
  if (!b || !modell) return { tol: {}, tabeller: [], saknas: [] };
  const fam = familjer(modell);
  let kandidater = TABELLER.filter(tab => tab.typ === b && tab.vx.includes(vaxeltyp) && (!tab.fam || fam.has(tab.fam)));
  const saknas = [];

  if (kandidater.some(tab => tab.klass)) {
    const k = klass(besiktningsklass);
    const medKlass = kandidater.filter(tab => tab.klass === k);
    if (k && medKlass.length) kandidater = medKlass;
    else if (!k) saknas.push('besiktningsklass');
  }
  if (kandidater.some(tab => tab.radie)) {
    const r = radie(modell, radiefalt);
    if (r) kandidater = kandidater.filter(tab => !tab.radie || tab.radie === (r >= 300 ? 'ge300' : 'lt300'));
    else saknas.push('radie');
  }

  const tol = {};
  if (kandidater.length) {
    for (const [matt, v] of Object.entries(kandidater[0].tol)) {
      const varden = kandidater.map(tab => tab.tol[matt] == null ? null : relativ(tab.tol[matt], normal[matt], modell));
      if (varden[0] != null && varden.every(x => x === varden[0])) tol[matt] = varden[0];
    }
  }
  return { tol, tabeller: kandidater.map(tab => tab.id), saknas };
}
