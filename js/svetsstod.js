// Svetsstöd för termitsvetsning med SkV-Elite enligt TDOK 2014:0664 version 3.0 (2026-10-22).
// Visas under en svets i svetsrapporten när WPS är TDOK 2014:0664 och svetsstöd är påslaget i
// Inställningar. Lathund: portion, faktablad och varningar före svetsningen (kap 4.1–4.2).
// Börja svetsa: stora klockor för förvärmning, formhållarplåtar och avskrotning.
import * as db from './db.js';

export const WPS_0664 = 'TDOK 2014:0664';

// Tabell 1: portion per stålsort. Vid olika stålsorter gäller den med lägre hårdhet (först i listan).
const PORTION = [['R200', '70'], ['R220', '70 alt. 80'], ['R260', '90'], ['R260Mn', '90'], ['R320 Cr', '110'], ['R350 HT', '120'], ['R350 LHT', '120'], ['R370CrHT', '120'], ['R400HT', '140+']];
const STALSORTER = PORTION.map(([s]) => s);
// Svetsrapportens Tillsatsmaterial för respektive portion.
const TILLSATS = { 70: 'SKV  Z 70/80', '70 alt. 80': 'SKV  Z 70/80', 90: 'SKV  Z 90', 120: 'SKV Z 120', '140+': 'SKV Z 140' };
// Tabell 2: profiler med portionsbeteckningens profilnummer. Större profil först vid övergångar.
const PROFIL = { '60 E1': '60', '54 E3': '54', '50 E3': '50', 'SJ 43': '43' };
const PROFILER = Object.keys(PROFIL);

// Faktabladen kap 4.2.2 (L25) och 4.2.3 (L50). Tider i sekunder.
const FAKTA = {
  L25: {
    namn: 'Standardspalt L25', spalt: '24–26 mm', overhojning: '1,2–1,8 mm på båda sidor, på 0,5 m (rekommenderad)',
    brannarhojd: '30–35 mm', sliprar: 3, tider: { forvarm: 120, platar: 210, avskrot: 300 },
    tidtext: ['Förvärmning 2,0 min enligt Tabell 2', 'Formhållarplåtar tidigast 3,5 min efter tappning', 'Formhuvud tidigast 4,5 min efter tappning', 'Avskrotning 5,0 min efter tappning (Tabell 2), med Euro-degel upp till 1 min senare. Z120 så sent som möjligt.'],
  },
  L50: {
    namn: 'Lucka L50', spalt: '40–50 mm', overhojning: '1,8–2,2 mm på båda sidor, på 0,5 m (rekommenderad)',
    brannarhojd: '30–45 mm, minsta möjliga', sliprar: 4, tider: { forvarm: 120, platar: 300, avskrot: 480 },
    tidtext: ['Förvärmning 2,0 min enligt Tabell 2', 'Formhållarplåtar tidigast 5 min efter tappning', 'Formhuvud tidigast 8 min efter tappning', 'Avskrotning tidigast 8,0–9,0 min efter tappning, med Euro-degel upp till 0,5 min senare. Z120 så sent som möjligt.'],
  },
};
// Tabellerna går att öppna genom att trycka på "Tabell 1" eller "Tabell 2" i texten (2026-10-22).
const TABELL = {
  'Tabell 1': ['img/tdok/0664-tabell1-portion.png', 'TDOK 2014:0664 Tabell 1 Val av termitportion'],
  'Tabell 2': ['img/tdok/0664-tabell2-l25.png', 'TDOK 2014:0664 Tabell 2 Svetsparametrar för SkV-Elite L25 standardlucka'],
};
const medTabell = (h, showImage, text) => text.split(/(Tabell [12])/).map(del => (TABELL[del]
  ? h('span', { class: 'ref', role: 'button', tabindex: '0', onclick: () => showImage(...TABELL[del]), onkeydown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showImage(...TABELL[del]); } } }, del)
  : del));
const lucka = row => (/L50/.test(row.metod || '') ? 'L50' : 'L25');
const grader = t => Number(String(t ?? '').replace('−', '-'));

export const klocka = sek => {
  const s = Math.max(0, Math.round(sek));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}` : `${m}:${String(r).padStart(2, '0')}`;
};
const tidSedan = iso => {
  const min = Math.floor((Date.now() - new Date(iso)) / 60000);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  return h < 48 ? `${h} h ${min % 60} min` : `${Math.floor(h / 24)} dygn`;
};

// Raden under en svets: knapparna och tiden sedan tappning.
export function svetsstodRad(h, { row, onChange, pa, avslutat, showImage }) {
  const knappar = h('div', { class: 'svetsstod' },
    h('button', { type: 'button', class: 'button', onclick: () => lathund(h, row, satt, showImage) }, '📋 Lathund'),
    h('button', { type: 'button', class: 'button primary', onclick: () => borjaSvetsa(h, row, onChange) }, '🔥 Börja svetsa'));
  const tappning = h('p', { class: 'muted note tappning' });
  const visa = () => {
    knappar.hidden = !pa || row.wps !== WPS_0664;
    tappning.hidden = !pa || !row.tappning || avslutat;
    if (!tappning.hidden) tappning.textContent = `Tappning ${new Date(row.tappning).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}, ${tidSedan(row.tappning)} sedan`;
  };
  const wrap = h('div', { 'data-hideif': '' }, knappar, tappning);
  // Ändrar ett fält i svetsen och rullisten på sidan.
  const satt = (k, v) => {
    onChange(k, v);
    const s = wrap.closest('.rowcard')?.querySelector(`select[data-key="${k}"]`);
    if (s) s.value = v;
  };
  wrap.refreshHide = visa;
  visa();
  // Tiden räknas fram så länge raden syns.
  const t = setInterval(() => { if (!wrap.isConnected) clearInterval(t); else visa(); }, 30000);
  return wrap;
}

// Lathund före svetsningen.
function lathund(h, row, satt, showImage) {
  const t = text => medTabell(h, showImage, text);
  const val = { profil: PROFIL[row.modell] ? row.modell : '60 E1', profil2: '', stal: STALSORTER.includes(row.material) ? row.material : 'R260', stal2: '', lucka: lucka(row), temp: row.temp ?? '' };
  const innehall = h('div', { class: 'guide-body' });
  const select = (key, label, options, tom) => h('label', { class: 'field' }, h('span', {}, label),
    h('select', { onchange: e => { val[key] = e.target.value; rita(); } },
      [...(tom ? [['', tom]] : []), ...options.map(o => [o, o])].map(([v, t]) => h('option', { value: v, selected: val[key] === v }, t))));
  const rita = () => {
    const f = FAKTA[val.lucka];
    // Lägre hårdhet vid olika stålsorter, större profil vid övergångar (Tabell 1 och not 2 till Tabell 2).
    const stal = [val.stal, val.stal2].filter(Boolean).sort((a, b) => STALSORTER.indexOf(a) - STALSORTER.indexOf(b))[0];
    const profil = [val.profil, val.profil2].filter(Boolean).sort((a, b) => PROFILER.indexOf(a) - PROFILER.indexOf(b))[0];
    const z = PORTION.find(([s]) => s === stal)[1];
    const nr = PROFIL[profil];
    const portion = val.lucka === 'L50'
      ? [`Grundportion ${nr} Z${z} SkV-Elite-L25`, `och tillsatsportion 412 Z${z} 412 SkV-Elite-E-L50`]
      : [`${nr} Z${z} SkV-Elite-E-L25`];
    const tillsats = TILLSATS[z];
    const temp = grader(val.temp);
    const varningar = [
      val.temp !== '' && temp < 0 ? 'Rältemp under 0 °C: svetsa enligt reglerna för kallt klimat i TRVINFRA-00016. Avlastningsvärme ca 1 m på båda sidor tills avskrotningen börjar, säkerställ gastryck och gasflöde och skydda svetsen mot hastig avkylning.' : null,
      'Vid risk för fallande temperatur ska avlastningsvärme eller rälsträckare alltid användas. Dragkrafter får inte belasta svetsen förrän den är under 500 °C.',
      stal === 'R320 Cr' || [val.stal, val.stal2].includes('R320 Cr') ? 'R320Cr: sänk avkylningen. Täck svetsen med värmehuv eller glasullsmatta efter avskrotningen tills den är under 500 °C (kap 4.1.13).' : null,
      val.stal2 && val.stal2 !== val.stal ? `Olika stålsorter: portionen för den med lägre hårdhet (${stal}) används.` : null,
      val.profil2 && val.profil2 !== val.profil ? `Profilövergång: portion och tider för den större profilen (${profil}). Övergångsformar är bara tillåtna i sidospår.` : null,
      val.lucka === 'L50' && !['60 E1', '54 E3', '50 E3'].includes(profil) ? 'L50 finns för 50E3, 54E3 och 60E1.' : null,
    ].filter(Boolean);
    innehall.replaceChildren(...[
      h('div', { class: 'row' }, select('profil', 'Rälsprofil', PROFILER), select('profil2', 'Andra sidan', PROFILER, 'Samma')),
      h('div', { class: 'row' }, select('stal', 'Stålsort (rälsmärkning)', STALSORTER), select('stal2', 'Andra sidan', STALSORTER, 'Samma')),
      h('div', { class: 'row' }, select('lucka', 'Spalt', ['L25', 'L50']), select('temp', 'Rältemp °C', Array.from({ length: 71 }, (_, i) => String(40 - i).replace('-', '−')), '–')),
      h('h3', {}, 'Svetsportion'),
      h('p', { class: 'muted note' }, t('Enligt Tabell 1 och Tabell 2.')),
      h('p', { class: 'guide-namn' }, portion.map(p => h('span', { class: 'rad' }, p))),
      tillsats && row.tillsats !== tillsats ? h('button', { type: 'button', class: 'button', onclick: e => { satt('tillsats', tillsats); e.currentTarget.replaceWith(h('p', { class: 'muted note' }, `Tillsatsmaterial är satt till ${tillsats.replace(/\s+/g, ' ')}.`)); } }, `Sätt Tillsatsmaterial till ${tillsats.replace(/\s+/g, ' ')}`) : null,
      varningar.length ? h('div', { class: 'varningar' }, varningar.map(v => h('p', { class: 'notis' }, v))) : null,
      h('h3', {}, `Faktablad ${f.namn}`),
      h('ul', {},
        h('li', {}, 'Brännare 55.502. Gastryck vid flaska: oxygen 5 bar, propan 1,5 bar.'),
        h('li', {}, `Spaltöppning ${f.spalt}. Rälsände minst 29 mm från närmaste borrhålskant.`),
        h('li', {}, `Överhöjning ${f.overhojning}. Farkanten rak, +0,0/−0,3 mm.`),
        h('li', {}, `Brännarhöjd ${f.brannarhojd}.`),
        h('li', {}, `Lossa befästningen på minst ${f.sliprar} sliprar på varje sida.`),
        f.tidtext.map(x => h('li', {}, t(x)))),
      h('h3', {}, 'Efter svetsningen'),
      h('ul', {},
        h('li', {}, 'Kilarna sitter kvar tills svetsen är under 150 °C.'),
        h('li', {}, 'Inga fordonsrörelser förrän skarven är under 150 °C.'),
        h('li', {}, 'Finslipning när svetsen är under 150 °C och spåret körbart: farbana ±0,3 mm, farkant +0,0/−0,3 mm.'),
        h('li', {}, 'Besikta svetsen före du lämnar platsen och märk med ditt svetsarnummer mitt över fogen på rälhuvudets yttersida.')),
      h('h3', {}, 'Före du börjar'),
      h('p', { class: 'muted note' }, 'Bockarna sparas inte, de är bara till hjälp nu.'),
      [
        'Portioner och Euro-deglar torra och oskadade (fuktiga får inte användas, inte ens torkade)',
        'Formar som passar profil och spalt, utan skador och sandgrader',
        'Tätningssand jordfuktig och knådbar',
        'Termittändare förvarade skilt från portionerna',
        'Propanflaska minst 19 kg, utan inbyggd regulator',
        'Backventiler för oxygen och propan, tvillingslang',
        'Skyddskläder, svetsskyddsfilter och skyddsglasögon',
        'Regn: svetstält eller stort parasoll, våt räl torkad',
        'Gasskärning: R260, R260Mn och värmebehandlad förvärms 10 cm till minst 400 °C (R320Cr 500 °C), 50 cm till ca 50 °C',
      ].map(t => h('label', { class: 'check' }, h('input', { type: 'checkbox' }), h('span', {}, t))),
      h('p', { class: 'muted note' }, 'Ur TDOK 2014:0664 Arbetsinstruktioner för termitsvetsning, version 3.0, kap 4.1–4.2.'),
    ].flat(2).filter(Boolean));
  };
  oppna(h, 'Lathund SkV-Elite', innehall);
  rita();
}

function oppna(h, titel, innehall, vidStang) {
  const overlay = h('div', { class: 'overlay guide', role: 'dialog', 'aria-label': titel },
    h('button', { type: 'button', class: 'close', 'aria-label': 'Stäng', onclick: () => { if (vidStang && vidStang() === false) return; overlay.remove(); } }, '✕'),
    h('h2', {}, titel), innehall);
  document.body.append(overlay);
  return overlay;
}

// Signal vid varje moment: pip, vibration (inte på iPhone) och en blinkande skärm.
let ljud;
function signal(overlay) {
  try {
    ljud = ljud || new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.35, 0.7].forEach(t => {
      const o = ljud.createOscillator(), g = ljud.createGain();
      o.frequency.value = 1760; o.connect(g); g.connect(ljud.destination);
      g.gain.setValueAtTime(0.5, ljud.currentTime + t); g.gain.setValueAtTime(0, ljud.currentTime + t + 0.25);
      o.start(ljud.currentTime + t); o.stop(ljud.currentTime + t + 0.3);
    });
  } catch { /* utan ljud */ }
  navigator.vibrate?.([300, 150, 300, 150, 300]);
  overlay.classList.remove('blink'); void overlay.offsetWidth; overlay.classList.add('blink');
}

// Börja svetsa: först tiderna, sedan förvärmning, tappning, formhållarplåtar och avskrotning.
async function borjaSvetsa(h, row, onChange) {
  const l = lucka(row);
  const sparade = await db.getSetting('svetstider', {});
  const tider = { ...FAKTA[l].tider, ...(sparade[l] || {}) };
  const innehall = h('div', { class: 'guide-body svetsa' });
  let timer, las, fas = 'tider';
  const stang = () => {
    if (['forvarm', 'tappning', 'efter'].includes(fas) && !confirm('Avsluta klockorna?')) return false;
    clearInterval(timer); las?.release?.().catch(() => {});
    return true;
  };
  const overlay = oppna(h, `Börja svetsa, ${l}`, innehall, stang);
  // Skärmen ska inte slockna medan klockorna går.
  const vaken = async () => { try { las = await navigator.wakeLock?.request('screen'); } catch { /* inte alla webbläsare */ } };
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && fas !== 'tider' && overlay.isConnected) vaken(); });

  const visaTider = () => {
    const rad = (key, label) => h('div', { class: 'tidrad' },
      h('span', {}, label),
      h('button', { type: 'button', class: 'button', 'aria-label': `${label} kortare`, onclick: () => { tider[key] = Math.max(15, tider[key] - 15); spara(); } }, '−'),
      h('output', {}, klocka(tider[key])),
      h('button', { type: 'button', class: 'button', 'aria-label': `${label} längre`, onclick: () => { tider[key] += 15; spara(); } }, '+'));
    const spara = () => { sparade[l] = { ...tider }; db.setSetting('svetstider', sparade); visaTider(); };
    innehall.replaceChildren(
      h('p', { class: 'muted' }, `Tiderna gäller ${FAKTA[l].namn} enligt faktabladet. Ändra dem vid behov, de sparas till nästa svets.`),
      rad('forvarm', 'Förvärmning'),
      rad('platar', 'Formhållarplåtar efter tappning'),
      rad('avskrot', 'Avskrotning efter tappning'),
      tider.avskrot <= tider.platar ? h('p', { class: 'notis' }, 'Avskrotningen ska komma efter formhållarplåtarna.') : null,
      h('button', { type: 'button', class: 'button', onclick: () => { tider.forvarm = FAKTA[l].tider.forvarm; tider.platar = FAKTA[l].tider.platar; tider.avskrot = FAKTA[l].tider.avskrot; spara(); } }, 'Återställ till faktabladet'),
      h('p', { class: 'muted note' }, 'Starta förvärmningen när lågorna är fullt utbildade över luftkanalerna. Ljudet hörs inte om telefonen står på ljudlöst.'),
      h('button', { type: 'button', class: 'button primary big', onclick: () => { signalFörbered(); startaForvarmning(); } }, 'Starta förvärmning'),
      h('button', { type: 'button', class: 'button', onclick: () => { signalFörbered(); tappa(); } }, 'Hoppa till tappning'));
  };
  // Ljudet måste startas av ett tryck på iPhone.
  const signalFörbered = () => { try { ljud = ljud || new (window.AudioContext || window.webkitAudioContext)(); ljud.resume(); } catch { /* utan ljud */ } vaken(); };

  const stor = h('div', { class: 'storklocka' });
  const rubrik = h('p', { class: 'fasrubrik' });
  const besked = h('p', { class: 'fasbesked' });
  const sma = h('div', { class: 'smaklockor' });
  const knapp = h('div');
  const liten = (label, sek) => h('div', {}, h('span', {}, label), h('strong', {}, klocka(sek)));
  const visaKlockor = () => innehall.replaceChildren(rubrik, stor, besked, sma, knapp);

  let forvarmStart, forvarmKlar, tappning, senaste;
  const startaForvarmning = () => {
    fas = 'forvarm'; forvarmStart = Date.now(); senaste = forvarmStart;
    let paminnelse = false, klar = false;
    visaKlockor();
    knapp.replaceChildren(h('button', { type: 'button', class: 'button primary big', onclick: tappa }, 'Tappning'));
    clearInterval(timer);
    timer = setInterval(tick, 250);
    function tick() {
      const gatt = (Date.now() - forvarmStart) / 1000;
      const kvar = tider.forvarm - gatt;
      if (!paminnelse && gatt >= 30) { paminnelse = true; signal(overlay); }
      if (!klar && kvar <= 0) { klar = true; forvarmKlar = Date.now(); senaste = forvarmKlar; signal(overlay); }
      rubrik.textContent = klar ? 'Förvärmningen klar' : 'Förvärmning';
      stor.textContent = klar ? `+${klocka(-kvar)}` : klocka(kvar);
      stor.classList.toggle('over', klar);
      besked.textContent = klar
        ? 'Ta bort brännaren, sätt in regeln, ställ degeln och tänd. Tryck Tappning när degeln tappar.'
        : gatt >= 30 && gatt < 45 ? 'Kontrollera lågan: knatter, sedan precis tyst. Håll trycken konstanta.' : 'Kontrollera formens tätning under förvärmningen.';
      sma.replaceChildren(liten(klar ? 'Sedan förvärmningen' : 'Sedan start', (Date.now() - senaste) / 1000));
    }
    tick();
  };

  const tappa = () => {
    fas = 'efter'; tappning = Date.now(); senaste = tappning;
    row.tappning = new Date(tappning).toISOString();
    onChange('tappning', row.tappning);
    visaKlockor();
    const steg = [
      ['platar', 'Formhållarplåtar', 'Ta försiktigt bort formhållarplåtarna.'],
      ['avskrot', 'Avskrotning', 'Börja avskrota. Tippa formhuvudet först och kontrollera att svetsgodset inte är flytande.'],
    ];
    const signalerat = new Set();
    // Klart visas först när avskrotningen är nådd; ✕ avbryter före dess.
    const klarKnapp = h('button', { type: 'button', class: 'button primary big', hidden: true, onclick: klart }, 'Klart');
    knapp.replaceChildren(klarKnapp);
    clearInterval(timer);
    timer = setInterval(tick, 250);
    function tick() {
      const gatt = (Date.now() - tappning) / 1000;
      for (const [key] of steg) if (gatt >= tider[key] && !signalerat.has(key)) { signalerat.add(key); senaste = tappning + tider[key] * 1000; signal(overlay); }
      const nasta = steg.find(([key]) => gatt < tider[key]);
      const forra = [...steg].reverse().find(([key]) => gatt >= tider[key]);
      if (nasta) {
        rubrik.textContent = `${nasta[1]} om`;
        stor.textContent = klocka(tider[nasta[0]] - gatt);
        stor.classList.remove('over');
        besked.textContent = forra ? forra[2] : 'Väntar efter tappningen.';
      } else {
        rubrik.textContent = 'Avskrotning';
        stor.textContent = `+${klocka(gatt - tider.avskrot)}`;
        stor.classList.add('over');
        klarKnapp.hidden = false;
        besked.textContent = `${steg[1][2]} Kilarna sitter kvar och inga fordon passerar förrän skarven är under 150 °C.`;
      }
      sma.replaceChildren(liten('Sedan förra momentet', (Date.now() - senaste) / 1000), liten('Sedan tappning', gatt));
    }
    tick();
  };

  function klart() {
    fas = 'klar'; clearInterval(timer); las?.release?.().catch(() => {});
    innehall.replaceChildren(
      h('p', { class: 'guide-namn' }, 'Svetsen är klar'),
      h('p', {}, `Tappning ${new Date(tappning).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}. Tiden sedan tappningen står under svetsen i svetsrapporten tills jobbet är avslutat.`),
      h('ul', {},
        h('li', {}, 'Kilarna sitter kvar tills svetsen är under 150 °C.'),
        h('li', {}, 'Inga fordonsrörelser förrän skarven är under 150 °C.'),
        h('li', {}, 'Grovslipa utan att slipa grundrälen. Finslipa under 150 °C: farbana ±0,3 mm, farkant +0,0/−0,3 mm.'),
        h('li', {}, 'Besikta svetsen och märk med ditt svetsarnummer.')),
      h('button', { type: 'button', class: 'button primary big', onclick: () => overlay.remove() }, 'Stäng'));
  }

  visaTider();
}
