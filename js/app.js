import * as db from './db.js';
import { fillWord, wordInfo } from './fill-word.js';
import { fillPdf, pdfInfo } from './fill-pdf.js';
import { fillOverlay, isPdf } from './fill-overlay.js';
import { VAXELTYPER, VAXELFORMS, effektiv } from './forms/vaxel.js';
import oversyn1481 from './forms/oversyn1481.js';
import svets from './forms/svets.js';
import heta from './forms/heta.js';
import ibt from './forms/ibt.js';
import k0737 from './forms/k0737.js';
import kap from './forms/kap.js';
import skev from './forms/skev.js';
import MODELLER from './forms/vaxelmodeller.js';
import { blankettDatum } from './datum.js';
import { minPosition, adress, koordinater, valjPaKarta } from './plats.js';
import { BILDTYPER, laggTill, jobbetsBilder, taBortAlla, bildfiler, bildtypUrNamn, laggTillImporterade } from './bilder.js';
import { ARBETEN, BEHORIGHET, SPARLAGE, bedomning, foreslagnaDokument, jobbnamn } from './jobb.js';
import { skapaKopia, lasInKopia } from './backup.js';
import { jobbText, laggIJobb, lasJobb } from './jobbfil.js';
import MALLVERSIONER from './mallversioner.js';
import { HJALP, blankettHjalp } from './hjalp.js';
import { klassificera } from './ralsfel.js';
import { svetsstodRad } from './svetsstod.js';

// Samma ordning som dokumenten i jobbet (CATALOG).
const FORMS = [heta, svets, ibt, ...VAXELFORMS, oversyn1481, skev, k0737, kap];
const FORM_BY_KEY = Object.fromEntries(FORMS.map(f => [f.key, f]));

// Ett dokument i jobbet. Växelbesiktningen beror på vilken växeltyp jobbet gäller.
function docForm(job, docKey) {
  return docKey === 'vaxel' ? FORM_BY_KEY[job.vaxeltyp] : FORM_BY_KEY[docKey];
}

const READY = new Set(['heta', 'vaxel', '1481', 'svets', 'ibt', '0737', 'kap', 'skevning']);

// Jobb från första prototypen hade dokumentet "ev" i stället för växeltyp.
function upgradeJob(job) {
  if (job.docs.includes('ev')) {
    job.docs = job.docs.map(k => (k === 'ev' ? 'vaxel' : k));
    job.vaxeltyp = job.vaxeltyp || 'ev';
  }
  return job;
}

// Alla dokument som ska gå att välja för ett jobb. De utan formulär kommer i senare versioner.
// Ordning 2026-10-19.
const CATALOG = [
  { key: 'heta', title: 'Heta arbeten, tillstånd och kontrollista' },
  { key: 'svets', title: 'Svetsrapport / egenkontroll' },
  { key: 'ibt', title: 'Ibruktagande, IBT (TMALL 0824)' },
  { key: 'vaxel', title: 'Växelbesiktningsrapport (efter växeltyp)' },
  { key: '1481', title: 'Översyn spårväxel (TMALL 1481)' },
  { key: 'skevning', title: 'Spårlägesmätning / skevningsprotokoll (TMALL 1605)' },
  { key: '0737', title: 'Kontrollplan stabilitetspåverkande arbete (TMALL 0737)' },
  { key: 'kap', title: 'Spänningsfri temperatur SFT, Kapmetoden (TMALL 0844)' },
];

const SHARED = [
  { key: 'datum', label: 'Datum', type: 'date' },
  // row: fält med samma värde står på en rad; flex: hur stor del av raden fältet tar.
  { key: 'bandel', label: 'Bandel', inputmode: 'numeric', row: 'plats', flex: 1 },
  { key: 'driftplats', label: 'Driftplats/Sträcka', row: 'plats', flex: 2 },
  { key: 'spar', label: 'Spår', row: 'plats', flex: 1 },
  // Km + m som två sifferrutor med + emellan (2026-10-19). km/m är från, km2/m2 till.
  { key: 'km', label: 'Från km+m', kind: 'kmm', keys: ['km', 'm'] },
  { key: 'km2', label: 'Till km+m', kind: 'kmm', keys: ['km2', 'm2'] },
  { key: 'vaxeltyp', label: 'Växeltyp', kind: 'vaxeltyp' },
  { key: 'vxmodell', label: 'Växelmodell', kind: 'vxmodell' },
  { key: 'vxnr', label: 'Växelnummer' },
  // Fyller i Eget Ao nr (svetsrapport) och Beställningsnr (IBT, TMALL 0737).
  { key: 'ao', label: 'Ao nr', inputmode: 'numeric', kopiera: true },
  // Står i jobbnamnet efter vecka och dag (2026-10-20). Förvalt från förra jobbet.
  { key: 'arbetslag', label: 'Arbetslag', placeholder: 'T.ex. Lena & Per' },
  // Personuppgifterna finns bara under Inställningar och kan ändras i de enskilda blanketterna.
  // group: rubriken de står under i Inställningar. Namn och telefon står på samma rad (2026-10-20).
  { key: 'namn', label: 'Namn', profile: true, settingsOnly: true, group: 'Om dig', row: 'du', flex: 3 },
  { key: 'namn_tel', label: 'Telefon', profile: true, settingsOnly: true, group: 'Om dig', row: 'du', flex: 2, type: 'tel', inputmode: 'tel' },
  { key: 'svetsid', label: 'Svets-ID', profile: true, settingsOnly: true, group: 'Om dig', autocapitalize: 'characters' },
  // Kopieras till jobbet när det skapas.
  { key: 'foretag', label: 'Företag/entreprenör', profile: true, settingsOnly: true, group: 'Företag' },
  { key: 'enhet', label: 'Företag/enhet på svetsrapporten', profile: true, settingsOnly: true, group: 'Företag' },
  { key: 'arbetsledare', label: 'Arbetsledare', profile: true, settingsOnly: true, group: 'Kontaktpersoner', row: 'al', flex: 3 },
  { key: 'arbetsledare_tel', label: 'Telefon', profile: true, settingsOnly: true, group: 'Kontaktpersoner', row: 'al', flex: 2, type: 'tel', inputmode: 'tel' },
  { key: 'platschef', label: 'Platschef', profile: true, settingsOnly: true, group: 'Kontaktpersoner', row: 'pc', flex: 3 },
  { key: 'platschef_tel', label: 'Telefon', profile: true, settingsOnly: true, group: 'Kontaktpersoner', row: 'pc', flex: 2, type: 'tel', inputmode: 'tel' },
  { key: 'svetsansvarig', label: 'Svetsansvarig', profile: true, settingsOnly: true, group: 'Kontaktpersoner', row: 'sa', flex: 3 },
  { key: 'svetsansvarig_tel', label: 'Telefon', profile: true, settingsOnly: true, group: 'Kontaktpersoner', row: 'sa', flex: 2, type: 'tel', inputmode: 'tel' },
  { key: 'projektledare', label: 'TRV projektledare', profile: true, settingsOnly: true, group: 'Kontaktpersoner', row: 'pl', flex: 3 },
  { key: 'projektledare_tel', label: 'Telefon', profile: true, settingsOnly: true, group: 'Kontaktpersoner', row: 'pl', flex: 2, type: 'tel', inputmode: 'tel' },
];

const PROFILE_KEYS = SHARED.filter(f => f.profile).map(f => f.key);

// Uppgifter som bara finns under Inställningar hämtas därifrån om jobbet saknar dem,
// t.ex. för jobb som skapades innan de fylldes i.
async function fillFromProfile(job) {
  const profile = await db.getSetting('profile', {});
  for (const f of SHARED) if (f.settingsOnly && !job[f.key] && profile[f.key]) job[f.key] = profile[f.key];
}

// ---------- Hjälpfunktioner ----------

// Km- och m-rutor tar bara siffror.
const siffror = v => v.replace(/\D/g, '');

function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'class') el.className = v;
    else if (k === 'value') el.value = v;
    else if (k === 'checked') el.checked = !!v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

const view = () => document.getElementById('view');

function render(...nodes) {
  view().replaceChildren(...nodes.flat().filter(n => n != null && n !== false));
}

// Hjälpen för sidan som visas (?-knappen uppe till höger, 2026-10-20).
let hjalpNyckel = 'start';
function visaHjalp() {
  const hj = HJALP[hjalpNyckel] || HJALP.start;
  const stycke = t => (Array.isArray(t) ? h('ul', {}, t.map(x => h('li', {}, x))) : h('p', {}, t));
  const stang = () => { overlay.remove(); document.removeEventListener('keydown', esc); };
  const esc = e => { if (e.key === 'Escape') stang(); };
  const overlay = h('div', { class: 'hjalp-overlay', role: 'dialog', 'aria-modal': 'true', 'aria-label': `Hjälp: ${hj.titel}` },
    h('div', { class: 'hjalp-huvud' },
      h('h2', {}, `Hjälp: ${hj.titel}`),
      h('button', { type: 'button', class: 'hjalp-stang', 'aria-label': 'Stäng hjälpen', onclick: stang }, '✕')),
    h('div', { class: 'hjalp-text' },
      h('p', { class: 'hjalp-intro' }, hj.intro),
      hj.delar.map(([rubrik, stycken]) => h('section', {}, h('h3', {}, rubrik), stycken.map(stycke))),
      hjalpNyckel !== 'kom-igang' ? h('p', { class: 'muted' }, h('a', { href: '#/kom-igang', onclick: stang }, 'Ny i appen? Se Kom igång, steg för steg.')) : null));
  document.addEventListener('keydown', esc);
  document.body.append(overlay);
}

// kopiera: visa knappen som kopierar titeln, t.ex. jobbnamnet till mejlets ämnesrad (2026-10-20).
function setTitle(text, back, { kopiera = false } = {}) {
  document.getElementById('title').textContent = text;
  document.getElementById('kopiera').hidden = !kopiera;
  // Loggan bara på startsidan.
  document.getElementById('logo').style.display = !back && text === 'Svetsjobb' ? '' : 'none';
  const b = document.getElementById('back');
  b.hidden = !back;
  if (back) b.href = back;
}

function today() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function uid() {
  return (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
}

const num = s => {
  if (s == null || String(s).trim() === '') return null;
  const n = Number(String(s).replace(',', '.').replace('−', '-'));
  return Number.isFinite(n) ? n : null;
};

// Differens = uppmätt − normalvärde, högst 4 tecken som i mallen.
export function diff(normal, uppmatt) {
  const n = num(normal), u = num(uppmatt);
  if (n == null || u == null) return '';
  let d = Math.round((u - n) * 10) / 10;
  let s = String(d).replace('.', ',');
  if (s.length > 4) s = String(Math.round(d));
  return s;
}

// flush sparar direkt, men bara om något väntar på att sparas.
function debounce(fn, ms) {
  let t, vantar = false;
  const wrapped = (...a) => { vantar = true; clearTimeout(t); t = setTimeout(() => { vantar = false; fn(...a); }, ms); };
  wrapped.flush = () => { clearTimeout(t); if (vantar) { vantar = false; fn(); } };
  return wrapped;
}

// Det som väntar på att sparas sparas också när appen läggs undan och när en ruta lämnas
// (2026-10-21), inte bara när sidan stängs. Varje vy sätter window.onpagehide.
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') window.onpagehide?.(); });
document.addEventListener('focusout', () => window.onpagehide?.(), true);

function safeName(s) {
  return s.replace(/[\\/:*?"<>|]+/g, '-').replace(/\s+/g, ' ').trim();
}

function fileName(form, job) {
  const parts = [form.code, form.title];
  if (job.vxnr) parts.push(`Vx ${job.vxnr}`);
  if (job.driftplats) parts.push(job.driftplats);
  if (job.datum) parts.push(blankettDatum(job));
  return safeName(parts.join(' ')) + '.' + form.ext;
}

// Jobbnamnet: eget namn, annars vecka-dag-driftplats-arbetsbeskrivning (2026-10-19).
function jobLabel(job) {
  if (job.namnEget) return job.namnEget;
  if (job.arbete) return jobbnamn(job);
  const place = [job.driftplats, job.vxnr && `vx ${job.vxnr}`].filter(Boolean).join(', ');
  return place || 'Jobb utan plats';
}

// ---------- Mallar ----------

async function identify(file) {
  const buffer = await file.arrayBuffer();
  const info = {};
  try { info.word = await wordInfo(buffer); } catch (e) { /* inte Word */ }
  if (!info.word) {
    try { info.pdf = await pdfInfo(buffer); } catch (e) { /* inte PDF */ }
  }
  for (const form of FORMS) {
    if (await form.matches(info)) return { form, buffer };
  }
  const old = FORMS.find(form => form.matchesWord && form.matchesWord(info));
  return { form: null, buffer, old };
}

// En zip-fil med mallar packas upp i appen. Word- och Excel-filer är också zip,
// men känns igen på att de har [Content_Types].xml.
async function unzipTemplates(files) {
  const out = [];
  for (const file of files) {
    if (!/\.zip$/i.test(file.name)) { out.push(file); continue; }
    const zip = await JSZip.loadAsync(await file.arrayBuffer());
    if (zip.file('[Content_Types].xml')) { out.push(file); continue; }
    for (const entry of Object.values(zip.files)) {
      const name = entry.name.split('/').pop();
      if (entry.dir || !name || name.startsWith('.') || entry.name.startsWith('__MACOSX/')) continue;
      out.push(new File([await entry.async('arraybuffer')], name));
    }
  }
  return out;
}

// Versionskontroll av mallarna (2026-10-20): mallens SHA-256 jämförs med den senaste
// versionen i mallversioner.js. Summan sparas med mallen första gången den räknas ut.
// Utan crypto.subtle (sidan öppnad utan https) går det inte att kontrollera.
async function mallSha(t) {
  if (!t.sha && crypto.subtle) {
    t.sha = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', t.data)), b => b.toString(16).padStart(2, '0')).join('');
    await db.put('templates', t);
  }
  return t.sha;
}
async function gammalMall(t) {
  const senaste = MALLVERSIONER[t.key];
  const sha = senaste && await mallSha(t);
  return !!sha && sha !== senaste.sha;
}

async function importTemplates(selected) {
  const results = [];
  const files = await unzipTemplates(selected);
  for (const file of files) {
    const { form, buffer, old } = await identify(file);
    if (form) {
      const t = { key: form.key, name: file.name, added: new Date().toISOString(), data: buffer };
      await db.put('templates', t);
      results.push(await gammalMall(t) ? `⚠ ${form.title}: gammal version av mallen. Läs in den senaste.` : `✓ ${form.title}`);
    } else if (old) {
      results.push(`✗ ${file.name}: Word-mallen används inte längre. Läs in PDF-mallen för ${old.code} ${old.title}.`);
    } else {
      results.push(`✗ ${file.name}: känns inte igen (stöds inte än)`);
    }
  }
  return results;
}

// ---------- Vyer ----------

// Kom igång (2026-10-20): stegen för en ny svetsare. Ett steg som redan är gjort får en bock.
async function komIgangView() {
  setTitle('Kom igång', '#/');
  const profile = await db.getSetting('profile', {});
  const templates = await db.getAll('templates');
  const missing = FORMS.filter(f => !templates.some(t => t.key === f.key));
  const jobs = await db.getAll('jobs');
  const senasteKopia = await db.getSetting('senasteKopia', null);
  // Öppnad från hemskärmen eller som installerad app.
  const installerad = navigator.standalone === true || window.matchMedia?.('(display-mode: standalone)').matches;
  // Instruktioner för en enhet i taget, förvald efter den som sidan öppnats på (2026-10-20).
  // iPad säger sig vara Mac men har pekskärm, och räknas som iPhone.
  const ua = navigator.userAgent;
  const gissad = /Android/i.test(ua) ? 'Android' : /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? 'iPhone'
    : /Macintosh/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : 'iPhone';
  const ENHETER = ['iPhone', 'Android', 'Mac', 'Windows'];
  const dator = e => e === 'Mac' || e === 'Windows';
  const TEXT = {
    installera: {
      iPhone: ['Öppna sidan i Safari, tryck på Dela (fyrkanten med pilen) och välj Lägg till på hemskärmen.', 'Öppna sedan appen från ikonen. Då fungerar den utan täckning och jobben rensas inte lika lätt.'],
      Android: ['Öppna sidan i Chrome, tryck på menyn ⋮ uppe till höger och välj Installera app eller Lägg till på startskärmen.', 'Öppna sedan appen från ikonen. Då fungerar den utan täckning och jobben rensas inte lika lätt.'],
      Mac: ['I Safari: välj Arkiv och Lägg till i Dock. I Chrome: tryck på installera-ikonen till höger i adressfältet.', 'Det är frivilligt. Sidan fungerar även i en vanlig flik, men öppna den alltid i samma webbläsare, för jobben sparas i webbläsaren.'],
      Windows: ['I Chrome eller Edge: tryck på installera-ikonen till höger i adressfältet, eller välj Installera i webbläsarens meny.', 'Det är frivilligt. Sidan fungerar även i en vanlig flik, men öppna den alltid i samma webbläsare, för jobben sparas i webbläsaren.'],
    },
    spara: { iPhone: 'i Filer', Android: 'i Filer eller Hämtade filer', Mac: 'i en mapp på datorn, t.ex. Hämtade filer', Windows: 'i en mapp på datorn, t.ex. Hämtade filer' },
    dela: {
      iPhone: 'Tryck Skicka in jobb och skicka filerna till arbetsledaren med Mail eller Teams.',
      Android: 'Tryck Skicka in jobb och skicka filerna till arbetsledaren med Mail eller Teams.',
      Mac: 'I Safari fungerar Skicka in jobb. I Chrome på Mac går det inte att dela filer: ladda ned dem via länkarna under knapparna, bifoga dem i mejlet och tryck Jag har skickat filerna. Bilder väljs som filer från datorn.',
      Windows: 'Skicka in jobb fungerar via Windows delning. Du kan också ladda ned filerna via länkarna under knapparna, bifoga dem i mejlet och trycka Jag har skickat filerna. Bilder väljs som filer från datorn.',
    },
  };
  let enhet = gissad;
  const lista = h('ol', { class: 'steg' });
  const visa = () => {
    const d = dator(enhet);
    const steg = [
      [d ? 'Installera appen (frivilligt)' : 'Lägg appen på hemskärmen', TEXT.installera[enhet], installerad && enhet === gissad, null],
      ['Läs in blankettmallarna',
        `Mallarna finns inte i appen. Du får zip-filen "Svetsjobb blankettmallar" av arbetsledaren eller en kollega. Spara den ${TEXT.spara[enhet]} och läs in den under Blankettmallar. Det behövs bara en gång, och igen om appen säger att en mall är gammal.`,
        missing.length === 0, ['#/mallar', missing.length ? `Läs in mallarna (${missing.length} saknas)` : 'Visa mallarna']],
      ['Fyll i dina uppgifter',
        'Ditt namn står som underskrift på blanketterna. Fyll också i telefon, svets-ID, företag och kontaktpersoner, så fylls de i automatiskt i varje jobb.',
        !!profile.namn, ['#/installningar', 'Öppna Inställningar']],
      ['Skapa ditt första jobb',
        ['Fyll i uppgifterna om jobbet. Appen väljer blanketterna efter dina svar. Fyll i blanketterna och lägg till bilder. När inget saknas är filerna klara när du öppnar jobbet; annars trycker du Skapa filer.', TEXT.dela[enhet]],
        jobs.length > 0, ['#/nytt', '+ Nytt jobb']],
      ['Spara en säkerhetskopia',
        [`Jobben finns bara ${d ? 'i webbläsaren på den här datorn' : 'i telefonen'}. Spara en kopia ${TEXT.spara[enhet]} då och då under Inställningar, så kan du läsa tillbaka allt om något försvinner.`,
          'Ett enskilt jobb flyttas till en annan enhet med Överför jobbet längst ned i jobbet. På den andra enheten trycker du Läs in överfört jobb på startsidan och väljer filen.'],
        !!senasteKopia, ['#/installningar', 'Till säkerhetskopian']],
    ];
    lista.replaceChildren(...steg.map(([rubrik, text, klar, lank]) => h('li', { class: 'card' + (klar ? ' klar' : '') },
      h('strong', {}, (klar ? '✓ ' : '') + rubrik),
      [text].flat().map(t => h('p', { class: 'muted' }, t)),
      lank && !klar ? h('a', { class: 'button', href: lank[0] }, lank[1]) : null)));
  };
  visa();
  render(
    h('p', { class: 'muted' }, 'Så kommer du igång med appen. Steg med bock är redan gjorda.'),
    h('fieldset', { class: 'segmented enhet' },
      h('legend', {}, 'Instruktioner för'),
      ENHETER.map(e => h('label', {},
        h('input', { type: 'radio', name: 'enhet', value: e, checked: e === enhet, onchange: () => { enhet = e; visa(); } }),
        h('span', {}, e)))),
    lista,
  );
}

async function homeView() {
  setTitle('Svetsjobb');
  const jobs = (await db.getAll('jobs')).sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
  const templates = await db.getAll('templates');
  const missing = FORMS.filter(f => !templates.some(t => t.key === f.key));
  const gamla = (await Promise.all(templates.map(async t => (await gammalMall(t)) && t))).filter(Boolean);
  const senasteKopia = await db.getSetting('senasteKopia', null);
  const kopiaGammal = jobs.length && (!senasteKopia || Date.now() - new Date(senasteKopia) > 7 * 864e5);
  // Avslutade jobb ligger i arkivet (2026-10-20).
  const arkiverat = job => jobStatus(job) === 'Avslutat';
  // Jobb som varit Skickat i två veckor föreslås bli Avslutade, så att listan inte växer (2026-10-21).
  const lange = jobs.filter(j => jobStatus(j) === 'Skickat' && Date.now() - new Date(j.skickad || j.updated || 0) > 14 * 864e5);
  const avslutaRuta = lange.length ? h('div', { class: 'notice' },
    h('strong', {}, `${lange.length === 1 ? 'Ett jobb' : `${lange.length} jobb`} skickades in för mer än två veckor sedan`),
    h('span', {}, lange.length === 1 ? jobLabel(lange[0]) : lange.map(jobLabel).join(', ')),
    h('button', {
      class: 'button', type: 'button',
      onclick: async () => {
        for (const j of lange) { j.status = 'Avslutat'; await db.put('jobs', j); }
        route();
      },
    }, lange.length === 1 ? 'Markera som Avslutat' : 'Markera alla som Avslutade')) : null;
  const lista = list => h('ul', { class: 'list' }, list.map(job => h('li', {},
    h('a', { href: `#/jobb/${job.id}` },
      h('span', { class: 'main' }, jobLabel(job), ' ', h('span', { class: `status-tag s-${STATUSAR.indexOf(jobStatus(job))}` }, jobStatus(job))),
      h('span', { class: 'sub' }, [
        job.datum && (job.natt ? `${job.datum} natt` : job.datum),
        upgradeJob(job).docs.map(k => docForm(job, k)?.code || '').filter(Boolean).join(', '),
        jobStatus(job) === 'Skickat' && job.skickad && `skickat ${new Date(job.skickad).toLocaleDateString('sv-SE')}`,
      ].filter(Boolean).join(' · '))))));
  // Sök på namn, plats, växel, Ao nr, arbetslag eller datum (2026-10-20). Träffar i
  // arkivet visas direkt under de pågående.
  const sokText = job => [jobLabel(job), job.datum, job.driftplats, job.vxnr && `vx ${job.vxnr}`, job.vxnr, job.ao, job.arbetslag, job.bandel, job.spar, job.arbete, jobStatus(job)]
    .filter(Boolean).join(' ').toLowerCase();
  const jobbDel = h('div', {});
  const visaJobb = (fraga = '') => {
    const ord = fraga.toLowerCase().split(/\s+/).filter(Boolean);
    const traff = j => ord.every(o => sokText(j).includes(o));
    const aktiva = jobs.filter(j => !arkiverat(j) && traff(j));
    const arkiv = jobs.filter(j => arkiverat(j) && traff(j));
    jobbDel.replaceChildren(...[
      aktiva.length ? lista(aktiva) : h('p', { class: 'muted' }, ord.length ? 'Inga pågående jobb matchar.' : arkiv.length ? 'Inga pågående jobb.' : 'Inga jobb än.'),
      arkiv.length ? h('details', { class: 'card', open: ord.length > 0 },
        h('summary', {}, `Arkiv (${arkiv.length})`),
        h('p', { class: 'muted note' }, 'Avslutade jobb.'),
        lista(arkiv)) : null,
    ].filter(Boolean));
  };
  visaJobb();

  const profil = await db.getSetting('profile', {});
  render(
    // Ny i appen: inget namn och inga jobb än.
    !profil.namn && !jobs.length ? h('a', { class: 'notice', href: '#/kom-igang' },
      h('strong', {}, 'Ny i appen?'),
      h('span', {}, 'Tryck här för att komma igång, steg för steg.')) : null,
    missing.length ? h('a', { class: 'notice', href: '#/mallar' },
      h('strong', {}, 'Läs in blankettmallarna'),
      h('span', {}, `${missing.length} av ${FORMS.length} mallar saknas i telefonen. Tryck här för att läsa in dem från Filer.`)) : null,
    gamla.length ? h('a', { class: 'notice', href: '#/mallar' },
      h('strong', {}, 'Nya versioner av blankettmallarna'),
      h('span', {}, `${gamla.length === 1 ? 'En mall är en gammal version' : `${gamla.length} mallar är gamla versioner`}. Tryck här och läs in de senaste mallarna.`)) : null,
    kopiaGammal ? h('a', { class: 'notice', href: '#/installningar' },
      h('strong', {}, 'Spara en säkerhetskopia'),
      h('span', {}, senasteKopia
        ? `Senaste kopian är från ${new Date(senasteKopia).toLocaleDateString('sv-SE')}. Tryck här för att spara en ny i Filer.`
        : 'Jobben finns bara i telefonen och kan försvinna om Safari rensar sin lagring. Tryck här för att spara en kopia i Filer.')) : null,
    // navigator.standalone finns bara i Safari på iPhone och är sant när appen öppnas från hemskärmen.
    avslutaRuta,
    navigator.standalone === false ? h('p', { class: 'muted note' },
      'Tips: Lägg appen på hemskärmen (Dela > Lägg till på hemskärmen). Då rensar Safari inte jobben lika lätt.') : null,
    h('a', { class: 'button primary big', href: '#/nytt' }, '+ Nytt jobb'),
    importKnapp(),
    h('h2', {}, 'Jobb'),
    jobs.length > 1 ? h('input', { class: 'sok', type: 'search', placeholder: 'Sök jobb (plats, vx nr, Ao nr, datum …)', 'aria-label': 'Sök jobb', autocomplete: 'off', oninput: e => visaJobb(e.target.value) }) : null,
    jobbDel,
  );
}

function sharedInputs(values, onChange, opts = {}) {
  const fields = SHARED.filter(f => (opts.only ? opts.only.includes(f.key) : !f.settingsOnly));
  const out = [];
  const inputs = {};
  const change = (key, value) => onChange(key, value);
  let modellBox;
  const renderModell = () => {
    if (!modellBox) return;
    const list = MODELLER[values.vaxeltyp] || [];
    const current = values.vxmodell || '';
    const known = list.some(([m]) => m === current);
    const other = h('input', {
      type: 'text', value: known ? '' : current, placeholder: 'Skriv växelmodell', autocomplete: 'off', autocapitalize: 'characters',
      hidden: known || (!current && list.length > 0), oninput: e => change('vxmodell', e.target.value),
    });
    const groups = ['Standard', 'Förvaltning', 'Avveckling'].map(s => [s, list.filter(x => x[1] === s)]).filter(([, l]) => l.length);
    const select = h('select', {
      name: 'vxmodell',
      onchange: e => {
        const v = e.target.value;
        other.hidden = v !== '__annan';
        if (v === '__annan') { other.value = ''; other.focus(); change('vxmodell', ''); } else change('vxmodell', v);
      },
    },
      h('option', { value: '' }, values.vaxeltyp ? '– välj –' : 'Välj växeltyp först'),
      groups.map(([s, l]) => h('optgroup', { label: `${s}sortiment` },
        l.map(([m]) => h('option', { value: m, selected: m === current }, m)))),
      h('option', { value: '__annan', selected: !!current && !known }, 'Annan (skriv själv)'));
    modellBox.replaceChildren(select, other);
  };
  const special = (field) => {
    if (field.kind === 'kmm') {
      return h('div', { class: 'field plus' }, h('span', {}, field.label),
        h('div', { class: 'plus-row' }, field.keys.map((key, i) => [
          i ? h('span', { class: 'plus-sign' }, '+') : null,
          inputs[key] = h('input', {
            type: 'text', inputmode: 'numeric', pattern: '[0-9]*', name: key, value: values[key] || '', autocomplete: 'off', 'aria-label': i ? 'm' : 'km',
            oninput: e => { e.target.value = siffror(e.target.value); change(key, e.target.value); },
          }),
        ])));
    }
    if (field.kind === 'vaxeltyp') {
      return h('label', { class: 'field' }, h('span', {}, field.label),
        h('select', {
          name: 'vaxeltyp',
          onchange: e => { change('vaxeltyp', e.target.value); renderModell(); },
        },
          h('option', { value: '' }, '– välj –'),
          VAXELTYPER.map(t => h('option', { value: t.key, selected: values.vaxeltyp === t.key }, `${t.short}, ${t.title.replace(/^.*?(Besiktningsrapport|Växelbesiktningsrapport) /, '')}`))));
    }
    modellBox = h('div', { class: 'stack' });
    const el = h('div', { class: 'field' }, h('span', {}, field.label), modellBox);
    renderModell();
    return el;
  };
  for (let i = 0; i < fields.length; i++) {
    const f = fields[i];
    if (f.kind) { out.push(special(f)); continue; }
    const input = (field) => h('label', { class: 'field' + (field.half ? ' half' : ''), style: field.flex ? `flex: ${field.flex} 1 0` : null },
      h('span', {}, field.label),
      inputs[field.key] = h('input', {
        type: field.type || 'text', inputmode: field.inputmode, value: values[field.key] || '',
        autocomplete: 'off', autocapitalize: field.autocapitalize || 'sentences', name: field.key,
        list: field.list ? `list-${field.key}` : null, placeholder: field.placeholder,
        oninput: e => change(field.key, e.target.value),
      }),
      field.list ? h('datalist', { id: `list-${field.key}` }, field.list.map(v => h('option', { value: v }))) : null,
      // Kopieraknapp i rutan, t.ex. för Ao nr (2026-10-20).
      field.kopiera ? kopieraKnapp(() => inputs[field.key].value, `Kopiera ${field.label}`) : null);
    if (f.key === 'datum') {
      // Nattarbete: blanketterna får nästa dags datum (ingen förklaring visas, 2026-10-20).
      out.push(h('div', { class: 'row datum' }, input(f),
        h('label', { class: 'check natt' },
          h('input', { type: 'checkbox', name: 'natt', checked: !!values.natt, onchange: e => change('natt', e.target.checked) }),
          h('span', {}, 'Nattarbete'))));
      continue;
    }
    if (f.row) {
      const group = [];
      while (fields[i]?.row === f.row) group.push(fields[i++]);
      i--;
      out.push(h('div', { class: 'row' }, group.map(input)));
    } else if (f.half && fields[i + 1]?.half) {
      out.push(h('div', { class: 'row' }, input(f), input(fields[i + 1])));
      i++;
    } else {
      out.push(input(f));
    }
  }
  return out;
}

// Uppgifterna om jobbet i ordningen datum/Ao, plats, arbetsbeskrivning och jobbnamn, km, frågor,
// typ av arbete och växel (2026-10-19). Används både för nytt jobb och i ett befintligt jobb.
// visaVaxel(job): om växeldelen ska visas. Anropar change(nyckel, värde) vid varje ändring.
function jobInputs(job, change, { visaVaxel }) {
  const andrat = [];
  const onChange = (k, v) => { job[k] = v; change(k, v); andrat.forEach(f => f()); };

  const namn = h('input', {
    type: 'text', name: 'jobbnamn', value: job.namnEget || '', autocomplete: 'off',
    oninput: e => onChange('namnEget', e.target.value.trim() ? e.target.value : ''),
  });
  andrat.push(() => { namn.placeholder = jobbnamn(job) || 'V01 Mån Lnk Isolbyte'; });

  const fraga = (key, label) => h('label', { class: 'check' },
    h('input', { type: 'checkbox', name: `q_${key}`, checked: !!job[key], onchange: e => onChange(key, e.target.checked) }),
    h('span', {}, label));

  const resultat = h('div', { class: 'note info' });
  andrat.push(() => {
    const b = bedomning(job.arbeten);
    if (!b.valda.length) { resultat.hidden = true; return; }
    resultat.hidden = false;
    resultat.replaceChildren(...[
      h('p', {}, b.ibt ? BEHORIGHET[b.ibt] : 'Beställaren avgör vem som får ibruktaga.', ' ', h('small', {}, '(TRVINFRA-00271 tabell B1.1)')),
      h('p', {}, SPARLAGE[b.sparlage], ' ', h('small', {}, `(TRVINFRA-00013 tabell K6.1 rad ${b.valda.map(a => a.k61).join(', ')})`)),
      ...b.valda.filter(a => a.not).map(a => h('p', { class: 'muted' }, a.not)),
    ]);
  });

  const vaxel = h('div', { class: 'card' }, h('h3', {}, 'Växel'), sharedInputs(job, onChange, { only: ['vaxeltyp', 'vxmodell', 'vxnr'] }));
  andrat.push(() => { vaxel.hidden = !visaVaxel(job); });

  const out = [
    // Rubriker på rutorna (2026-10-20).
    h('div', { class: 'card' }, h('h3', {}, 'Datum och order'), sharedInputs(job, onChange, { only: ['datum', 'ao', 'arbetslag'] })),
    h('div', { class: 'card' }, h('h3', {}, 'Plats'), sharedInputs(job, onChange, { only: ['bandel', 'driftplats', 'spar', 'km', 'km2'] })),
    h('div', { class: 'card' }, h('h3', {}, 'Arbete'),
      h('label', { class: 'field' }, h('span', {}, 'Arbetsbeskrivning'),
        h('input', { type: 'text', name: 'arbete', value: job.arbete || '', autocomplete: 'off', placeholder: 'T.ex. Isolbyte', oninput: e => onChange('arbete', e.target.value) })),
      h('label', { class: 'field' }, h('span', {}, 'Jobbnamn'), namn),
      fraga('hett', 'Hett arbete'),
      fraga('svetsning', 'Svetsning'),
      fraga('ivaxel', 'Arbete i växel'),
      fraga('vxrevision', 'Växelrevision'),
      h('label', { class: 'field' }, h('span', {}, 'Typ av arbete (TRVINFRA-00271 bilaga 1)'),
        h('select', { name: 'arbetstyp', onchange: e => onChange('arbeten', e.target.value ? [e.target.value] : []) },
          h('option', { value: '' }, '– välj –'),
          ARBETEN.map(a => h('option', { value: a.id, selected: (job.arbeten || [])[0] === a.id }, a.label)))),
      resultat),
    vaxel,
  ];
  andrat.forEach(f => f());
  return out;
}

// Dokumenten som kryssrutor. checked(key) och onToggle(key, på). Föreslagna dokument märks.
// Kort namn som sidtiteln, mallnummer och hela namnet i liten text under (2026-10-20).
function dokNamn(job, d, foreslas) {
  const form = docForm(job, d.key);
  const kort = form ? form.kort || form.title : 'Besiktningsrapport växel';
  const hel = form ? `${form.code} ${form.title}` : 'Mallen väljs efter växeltyp';
  return h('span', { class: 'doknamn' },
    kort, foreslas ? h('small', { class: 'forslag' }, ' föreslås') : null,
    h('small', { class: 'hel' }, hel));
}

// last(key): en låst blankett i jobbet går inte att kryssa ur, så att en blankett som skickats
// inte försvinner av misstag (2026-10-21). Nya blanketter går alltid att lägga till.
function docChecks(job, checked, onToggle, { last = () => false } = {}) {
  const box = h('div', { class: 'card' });
  const draw = () => {
    const forslag = foreslagnaDokument(job);
    box.replaceChildren(...CATALOG.map(d => h('label', { class: 'check' + (last(d.key) ? ' last' : '') },
      h('input', { type: 'checkbox', name: `doc_${d.key}`, checked: checked(d.key), disabled: last(d.key), onchange: e => { onToggle(d.key, e.target.checked); draw(); } }),
      dokNamn(job, d, forslag.has(d.key)))));
  };
  draw();
  box.refresh = draw;
  return box;
}

async function newJobView() {
  setTitle('Nytt jobb', '#/');
  const profile = await db.getSetting('profile', {});
  const job = { datum: today(), arbetslag: await db.getSetting('arbetslag', '') };
  for (const k of PROFILE_KEYS) job[k] = profile[k] || '';
  // Förval efter frågorna tills svetsaren kryssar i eller ur själv.
  const manuellt = new Map();
  const valt = k => (manuellt.has(k) ? manuellt.get(k) : foreslagnaDokument(job).has(k));
  const docs = docChecks(job, valt, (k, on) => manuellt.set(k, on));

  render(
    h('form', {
      onsubmit: async e => {
        e.preventDefault();
        const valda = CATALOG.map(d => d.key).filter(k => valt(k) && READY.has(k));
        if (!valda.length) { alert('Välj minst en blankett.'); return; }
        if (valda.includes('vaxel') && !job.vaxeltyp) { alert('Välj växeltyp, så att rätt besiktningsrapport används.'); return; }
        const now = new Date().toISOString();
        const record = { ...job, id: uid(), docs: valda, forms: {}, created: now, updated: now };
        await db.put('jobs', record);
        await db.setSetting('profile', Object.fromEntries(PROFILE_KEYS.map(k => [k, job[k] || ''])));
        await db.setSetting('arbetslag', job.arbetslag || '');
        location.hash = `#/jobb/${record.id}`;
      },
    },
      jobInputs(job, () => docs.refresh(), { visaVaxel: j => j.ivaxel === true || j.vxrevision === true || valt('vaxel') }),
      h('h2', {}, 'Blanketter'),
      h('p', { class: 'muted' }, 'Förvalda efter svaren ovan. Du kan kryssa i fler eller färre, och lägga till eller ta bort blanketter senare.'),
      docs,
      h('button', { class: 'button primary big', type: 'submit' }, 'Skapa jobb'),
    ),
  );
}

// Status per blankett i jobbet (2026-10-20). form.status ger egen text, t.ex. antal mått.
function formProgress(form, data, job) {
  if (form.status && data && Object.keys(data).length) return form.status(job, data);
  const filled = Object.entries(data || {}).filter(([k, v]) => k !== 'matt' && !Array.isArray(v) && v !== '' && v !== false && v != null).length
    + Object.values(data || {}).filter(Array.isArray).reduce((n, rows) => n + rows.length, 0)
    + Object.values((data && data.matt) || {}).filter(r => r.uppmatt).length;
  return filled ? `${filled} uppgifter ifyllda` : 'Inte påbörjad';
}

async function jobView(id) {
  const job = await db.get('jobs', id);
  if (!job) { location.hash = '#/'; return; }
  upgradeJob(job);
  job.docs = CATALOG.map(d => d.key).filter(k => job.docs.includes(k));
  await fillFromProfile(job);
  setTitle(jobLabel(job), '#/', { kopiera: true });
  const save = debounce(async () => { job.updated = new Date().toISOString(); await db.put('jobs', job); }, 300);
  window.onpagehide = () => save.flush();
  const exportArea = h('div', { class: 'export' });
  const docItems = () => job.docs.map(k => {
    const form = docForm(jobbFor(job, k), k);
    if (!form) {
      return h('li', {}, h('div', { class: 'item' },
        h('span', { class: 'main' }, 'Besiktningsrapport växel'),
        h('span', { class: 'sub' }, 'Välj växeltyp under Uppgifter om jobbet')));
    }
    const last = !!(job.last && job.last[k]);
    return h('li', { class: 'med-las' }, h('a', { href: `#/jobb/${id}/${k}` },
      // Samma korta namn som sidtiteln (2026-10-20).
      h('span', { class: 'main' }, form.kort || form.title),
      (p => h('span', { class: 'sub' + (p.varning ? ' varn' : '') }, `${form.code} · ${p.text || p}`))(formProgress(form, job.forms[form.key], jobbFor(job, k)))),
      // Hänglås: en låst blankett går att läsa men inte ändra (2026-10-21).
      lasKnapp(last, () => {
        if (last && !bekraftaUpplasning(form.kort || form.title)) return;
        satLas(job, k, !last); save(); docList.replaceChildren(...docItems()); docBox.refresh();
      }));
  });
  const docList = h('ul', { class: 'list' }, docItems());
  // Status (2026-10-20). Blir Skickat när filerna delas.
  const statusRad = h('div', { class: 'status-val' });
  statusRad.refresh = () => statusRad.replaceChildren(...[renderItem(
    { type: 'radio', key: 'status', label: 'Status', options: STATUSAR, noEmpty: true, defaultValue: jobStatus },
    job, async (k, v) => {
      job.status = v;
      if (v === 'Skickat' && !job.skickad) job.skickad = new Date().toISOString();
      if (v === 'Skickat') lasAlla(job);
      await db.put('jobs', job);
      docList.replaceChildren(...docItems());
      docBox.refresh();
      document.querySelectorAll('.lasbar').forEach(b => b.lasRefresh?.());
    }, job)].flat().filter(Boolean));
  statusRad.refresh();
  // Senaste Skicka in: när, vilka filer och om något ändrats efter det (2026-10-21).
  const inskickatRad = h('div', { class: 'inskickat' });
  inskickatRad.refresh = async () => {
    const s = job.inskickat;
    if (!s) { inskickatRad.replaceChildren(); return; }
    const andrat = (await avtryck(job)) !== s.avtryck;
    inskickatRad.replaceChildren(h('details', {},
      h('summary', {}, `Senast inskickat ${new Date(s.datum).toLocaleString('sv-SE', { dateStyle: 'short', timeStyle: 'short' })}, ${s.filer.length} ${s.filer.length === 1 ? 'fil' : 'filer'}`,
        andrat ? h('span', { class: 'varn' }, ' · ändrat efter det') : null),
      h('ul', { class: 'files' }, s.filer.map(f => h('li', {}, f.namn, h('span', { class: 'storlek' }, ` · ${storlek(f.storlek)}`)))),
      andrat ? h('p', { class: 'muted note' }, 'Något i jobbet har ändrats efter att det skickades in. Skicka in jobbet igen om arbetsledaren ska få ändringen.') : null));
  };
  inskickatRad.refresh();
  let andraBlanketter;
  const skapaKnapp = h('button', { class: 'button primary big', type: 'button', onclick: () => kontrollera(job, exportArea, efterSkickat) }, 'Skapa filer');
  const efterSkickat = () => { statusRad.refresh(); inskickatRad.refresh(); docList.replaceChildren(...docItems()); docBox.refresh(); document.querySelectorAll('.lasbar').forEach(b => b.lasRefresh?.()); };
  const bildDel = bildSektion(id);
  const docBox = docChecks(job, k => job.docs.includes(k), (k, on) => {
    const docs = new Set(job.docs);
    on ? docs.add(k) : docs.delete(k);
    job.docs = CATALOG.map(d => d.key).filter(key => docs.has(key));
    save(); docList.replaceChildren(...docItems());
  }, { last: k => job.docs.includes(k) && !!job.last?.[k] });

  render(
    statusRad,
    inskickatRad,
    // Uppgifter om jobbet ligger överst, ihopfällt (2026-10-21).
    lasbar(h('details', { class: 'card' },
      h('summary', {}, 'Uppgifter om jobbet'),
      jobInputs(job, k => {
        save(); docBox.refresh();
        if (k === 'vaxeltyp') docList.replaceChildren(...docItems());
        setTitle(jobLabel(job), '#/', { kopiera: true });
      }, { visaVaxel: j => j.ivaxel === true || j.vxrevision === true || j.docs.includes('vaxel') })), job, '_uppgifter', 'uppgifterna om jobbet', save),
    h('h2', {}, 'Blanketter'),
    andraBlanketter = h('details', { class: 'andra-blanketter' },
      h('summary', {}, 'Lägg till/ta bort blanketter'),
      h('p', { class: 'muted note' }, 'Kryssa i blanketter att lägga till eller ta bort. Det du fyllt i finns kvar om du tar bort en blankett och lägger till den igen. En låst blankett går inte att ta bort.'),
      docBox,
      h('button', { class: 'button', type: 'button', onclick: () => { andraBlanketter.open = false; } }, 'Klar')),
    docList,
    // Bilder före Skapa filer, så att de inte glöms (2026-10-21).
    lasbar(bildDel, job, '_bilder', 'bilderna', save),
    skapaKnapp,
    exportArea,
    h('button', {
      class: 'button big', type: 'button',
      onclick: async () => {
        save.flush();
        const kopia = nyttFranJobb(job);
        await db.put('jobs', kopia);
        location.hash = `#/jobb/${kopia.id}`;
      },
    }, 'Nytt jobb med samma uppgifter'),
    h('p', { class: 'muted note' }, 'Skapar ett jobb med dagens datum och samma uppgifter om jobbet och samma blanketter. Blanketterna börjar tomma.'),
    overforJobb(job, save),
    h('button', {
      class: 'button danger', type: 'button',
      onclick: async () => {
        if (!confirm('Ta bort jobbet från telefonen? Det går inte att ångra.')) return;
        await db.del('jobs', id);
        await taBortAlla(id);
        location.hash = '#/';
      },
    }, 'Ta bort jobbet'),
  );
  // Filerna förbereds när jobbsidan öppnas, så att Skicka in jobb finns direkt när inget
  // saknas (2026-10-21). Bara för pågående jobb; annars trycker man Skapa filer.
  if (jobStatus(job) === 'Pågående' && job.docs.length && !(await varningar(job)).length) {
    // Är filerna klara blir Skapa filer en vanlig knapp, så att Skicka in jobb är den som syns.
    buildFiles(job, exportArea, efterSkickat, { forberedd: true })
      .then(() => { if (exportArea.querySelector('button')) { skapaKnapp.className = 'button big'; skapaKnapp.textContent = 'Skapa filerna igen'; } })
      .catch(() => {});
  }
}

// Bilder i jobbet: en rad per grupp med miniatyrer och en knapp för att lägga till från kameran
// eller bildbiblioteket. Tryck på en bild för att se den större, × tar bort den.
function bildSektion(jobId) {
  const box = h('details', { class: 'card bilder' });
  const urls = [];
  const draw = async () => {
    urls.splice(0).forEach(u => URL.revokeObjectURL(u));
    const bilder = await jobbetsBilder(jobId);
    box.replaceChildren(
      h('summary', {}, bilder.length ? `Bilder (${bilder.length})` : 'Bilder'),
      ...BILDTYPER.map(t => {
        const egna = bilder.filter(b => b.typ === t.key);
        const val = h('input', {
          type: 'file', accept: 'image/*', multiple: true, hidden: true,
          onchange: async e => {
            const files = [...e.target.files];
            if (!files.length) return;
            status.textContent = 'Sparar …';
            try { await laggTill(jobId, t.key, files); } catch (err) { alert('Kunde inte spara bilden: ' + err.message); }
            box.open = true; draw();
          },
        });
        const status = h('span', { class: 'muted' });
        return h('div', { class: 'bildgrupp' },
          h('div', { class: 'bildrubrik' }, h('strong', {}, t.label), status),
          h('div', { class: 'miniatyrer' },
            egna.map(b => {
              const url = URL.createObjectURL(b.data); urls.push(url);
              return h('div', { class: 'miniatyr' },
                h('button', { type: 'button', class: 'visa', onclick: () => showImage(url, t.label) }, h('img', { src: url, alt: t.label })),
                h('button', { type: 'button', class: 'bort', 'aria-label': 'Ta bort bilden', onclick: async () => {
                  if (confirm('Ta bort bilden?')) { await db.del('bilder', b.id); draw(); }
                } }, '×'));
            }),
            h('button', { type: 'button', class: 'miniatyr ny', onclick: () => val.click() }, '+'), val));
      }),
      h('p', { class: 'muted note' }, 'Bilderna följer med som JPEG-filer när du skapar filerna.'));
  };
  draw();
  return box;
}

// Importera ett jobb ur PDF-filer som appen skapat, t.ex. från arbetsledaren (2026-10-20).
function importKnapp() {
  const val = h('input', {
    type: 'file', multiple: true, hidden: true,
    onchange: async e => {
      const files = [...e.target.files];
      e.target.value = '';
      // Bilder följer med som JPEG-filer bredvid PDF:erna, eller som sidor i den sammanslagna PDF:en.
      let job = null, bilder = [];
      for (const f of files.filter(f => !/\.jpe?g$/i.test(f.name))) {
        const r = await lasJobb(f);
        if (!r || !r.job.id) continue;
        if (!job || r.bilder.length > bilder.length) ({ job, bilder } = r);
      }
      if (!job) { alert('Filen innehåller inget jobb. Välj PDF:en som gjorts med Överför jobbet i appen.'); return; }
      const jpg = files.filter(f => /\.jpe?g$/i.test(f.name)).sort((a, b) => a.name.localeCompare(b.name, 'sv', { numeric: true }));
      if (jpg.length) bilder = jpg.map(f => ({ typ: bildtypUrNamn(f.name), data: f }));
      const finns = await db.get('jobs', job.id);
      if (finns && !confirm(`Jobbet ${jobLabel(finns)} finns redan i telefonen. Ersätta uppgifterna med de importerade? Bilderna läggs till bland dem som redan finns.`)) return;
      const now = new Date().toISOString();
      await db.put('jobs', { ...job, forms: job.forms || {}, docs: job.docs || [], importerad: now, updated: now });
      if (bilder.length) await laggTillImporterade(job.id, bilder);
      location.hash = `#/jobb/${job.id}`;
    },
  });
  return h('div', {},
    h('button', { class: 'button big', type: 'button', onclick: () => val.click() }, 'Läs in överfört jobb'),
    h('p', { class: 'muted note' }, 'Från en kollega eller en annan enhet.'),
    val);
}

// Jobbets status (2026-10-20). Jobb från före statusen räknas som skickade om de delats.
const STATUSAR = ['Pågående', 'Skickat', 'Avslutat'];
const jobStatus = job => job.status || (job.skickad ? 'Skickat' : 'Pågående');
// När jobbet skickas låses alla blanketter; de går att låsa upp en och en (2026-10-21).
// Avsnitten på jobbsidan har egna nycklar med _ först.
const LASBARA_DELAR = ['_bilder', '_uppgifter'];
const lasAlla = job => {
  for (const k of job.docs) if (!job.last?.[k]) satLas(job, k, true);
  job.last = Object.fromEntries([...job.docs, ...LASBARA_DELAR].map(k => [k, true]));
};
// En låst blankett behåller jobbets uppgifter som de var när den låstes, så att ändringar under
// Uppgifter om jobbet inte slår igenom i det som redan skickats (2026-10-21).
const EJ_I_OGONBLICK = ['forms', 'docs', 'last', 'lastJobb', 'status', 'skickad', 'updated'];
function satLas(job, k, las) {
  job.last = { ...job.last, [k]: las };
  const ogon = { ...job.lastJobb };
  if (las) ogon[k] = structuredClone(Object.fromEntries(Object.entries(job).filter(([n]) => !EJ_I_OGONBLICK.includes(n))));
  else delete ogon[k];
  job.lastJobb = ogon;
}
// Jobbet som en blankett ska fyllas med: för en låst blankett uppgifterna från när den låstes.
const jobbFor = (job, k) => (job.last?.[k] && job.lastJobb?.[k] ? { ...job, ...job.lastJobb[k] } : job);
// Upplåsning kräver en bekräftelse (2026-10-21).
const bekraftaUpplasning = namn => confirm(`Är du säker på att du vill låsa upp ${namn}? Det som är låst har oftast redan skickats in.`);
// Ett avsnitt (details) på jobbsidan som går att låsa: hänglås i rubriken, och när det är låst
// stängs rutor och knappar av. Bilder går fortfarande att titta på. Avsnitt som ritas om,
// som Bilder, får låset igen via en MutationObserver.
function lasbar(box, job, nyckel, namn, spara) {
  let obs;
  const tillampa = () => {
    obs.disconnect();
    const last = !!(job.last && job.last[nyckel]);
    box.classList.add('lasbar');
    box.classList.toggle('last', last);
    const sum = box.querySelector(':scope > summary');
    if (sum) {
      sum.querySelector('.las')?.remove();
      sum.append(lasKnapp(last, e => {
        e.preventDefault();
        if (last && !bekraftaUpplasning(namn)) return;
        job.last = { ...job.last, [nyckel]: !last };
        spara(); tillampa();
      }, namn));
    }
    box.querySelectorAll('input, select, textarea, button').forEach(el => {
      if (el.classList.contains('las') || el.classList.contains('visa') || el.classList.contains('kopiera')) return;
      if (last && !el.disabled) { el.disabled = true; el.dataset.lasavst = ''; }
      if (!last && 'lasavst' in el.dataset) { el.disabled = false; delete el.dataset.lasavst; }
    });
    obs.observe(box, { childList: true, subtree: true });
  };
  obs = new MutationObserver(tillampa);
  box.lasRefresh = tillampa;
  tillampa();
  return box;
}
function lasIkon(last) {
  const ns = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs) => { const e = document.createElementNS(ns, tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); return e; };
  const svg = el('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true' });
  // Öppet lås: bygeln är uppfälld åt höger.
  svg.append(el('rect', { x: 4, y: 11, width: 16, height: 10, rx: 2 }), el('path', { d: last ? 'M8 11V7a4 4 0 0 1 8 0v4' : 'M8 11V7a4 4 0 0 1 7.9-.9' }));
  return svg;
}
function lasKnapp(last, onToggle, vad = 'blanketten') {
  return h('button', { class: 'las' + (last ? ' last' : ''), type: 'button', 'aria-label': last ? `Lås upp ${vad}` : `Lås ${vad}`, 'aria-pressed': last ? 'true' : 'false', onclick: onToggle }, lasIkon(last));
}

// Nytt jobb med samma uppgifter och dokument, t.ex. nästa skift på samma plats (2026-10-20).
// Blanketterna börjar tomma; det som ska följa med fylls i av sig själv (profil, sparade val).
function nyttFranJobb(job) {
  const now = new Date().toISOString();
  const { id, created, updated, skickad, status, importerad, namnEget, forms, last, lastJobb, inskickat, ...uppgifter } = job;
  return { ...uppgifter, id: uid(), datum: today(), forms: {}, created: now, updated: now };
}

// Det som troligen saknas innan filerna skapas (2026-10-20). Bara varningar; man kan skapa ändå.
function saknas(job) {
  const out = [];
  if (!job.namn) out.push('Ditt namn saknas under Inställningar, så blanketterna blir utan underskrift.');
  for (const key of job.docs) {
    const j = jobbFor(job, key);
    const form = docForm(j, key);
    if (!form) continue;
    const data = job.forms[form.key] || {};
    if (!Object.keys(data).length) { out.push(`${form.title}: inte påbörjad.`); continue; }
    for (const section of form.sections || []) {
      for (const item of section.items || []) {
        if (item.type !== 'measures') continue;
        const keys = typeof item.keys === 'function' ? item.keys(data) : item.keys;
        const tomma = keys.filter(k => !data.matt?.[k]?.uppmatt).length;
        if (tomma) out.push(`${form.title}: ${tomma} av ${keys.length} mått saknar uppmätt värde.`);
      }
    }
    if (form.saknas) out.push(...form.saknas(j, data).map(t => `${form.title}: ${t}`));
    if (form.rimlighet) out.push(...form.rimlighet(j, data).map(t => `${form.title}: ${t}`));
  }
  return out;
}

// Dela bara en blankett inifrån blanketten, t.ex. en rättad svetsrapport som arbetsledaren ber
// om (2026-10-21). Två steg som Överför jobbet, och jobbets status ändras inte.
function delaBlankett(job, key, form, save) {
  const ruta = h('div', { class: 'dela-blankett' });
  const knapp = h('button', {
    class: 'button big', type: 'button',
    onclick: async () => {
      save.flush();
      knapp.disabled = true;
      knapp.textContent = 'Skapar filen …';
      const { files, problems } = await skapaFiler({ ...job, docs: [key] }, { bilder: false });
      const lankar = h('ul', { class: 'files' }, files.map(filLank));
      ruta.replaceChildren(...[...problems.map(p => h('p', { class: 'error' }, p)),
        files.length ? h('button', { class: 'button big', type: 'button', onclick: () => delaFiler(files, lankar) },
          `Dela ${form.kort || form.title} (${files.length === 1 ? '1 fil' : `${files.length} filer`})`) : null,
        lankar].filter(Boolean));
    },
  }, 'Dela bara den här blanketten');
  ruta.append(knapp, h('p', { class: 'muted note' }, 'Gör en PDF av bara den här blanketten. Jobbets status ändras inte.'));
  return ruta;
}

// Allt som Skapa filer varnar för: det som saknas, mått, bilder och gamla mallar.
async function varningar(job) {
  const lista = saknas(job);
  // Efter-bilder och rälsmärkning ska finnas, Före är frivilligt (2026-10-20).
  const typer = new Set((await jobbetsBilder(job.id)).map(b => b.typ));
  for (const t of BILDTYPER.filter(t => ['efter', 'markning'].includes(t.key))) {
    if (!typer.has(t.key)) lista.push(`Bilder: inga bilder under ${t.label}.`);
  }
  for (const key of job.docs) {
    const form = docForm(jobbFor(job, key), key);
    const t = form && await db.get('templates', form.key);
    if (t && await gammalMall(t)) lista.push(`${form.title}: mallen är en gammal version. Läs in den senaste under Inställningar > Blankettmallar.`);
  }
  return lista;
}

async function kontrollera(job, area, onSent) {
  const lista = await varningar(job);
  if (!lista.length) { buildFiles(job, area, onSent); return; }
  area.replaceChildren(
    h('div', { class: 'card varning' },
      h('strong', {}, 'Kontrollera innan du skapar filerna'),
      h('ul', {}, lista.map(t => h('li', {}, t))),
      h('button', { class: 'button primary big', type: 'button', onclick: () => buildFiles(job, area, onSent) }, 'Skapa filerna ändå')));
}

// Jobbets blanketter och bilder i en PDF: blanketterna i ordning, sedan en sida per bild (2026-10-20).
async function enPdf(files, namn, job) {
  const bildsidor = [];
  const { PDFDocument, PageSizes } = PDFLib;
  const out = await PDFDocument.create();
  for (const f of files) {
    const bytes = await f.arrayBuffer();
    if (f.type === 'application/pdf') {
      const src = await PDFDocument.load(bytes);
      (await out.copyPages(src, src.getPageIndices())).forEach(p => out.addPage(p));
    } else if (f.type === 'image/jpeg') {
      const img = await out.embedJpg(bytes);
      const [w, hgt] = PageSizes.A4;
      const page = out.addPage([w, hgt]);
      const s = Math.min((w - 40) / img.width, (hgt - 40) / img.height);
      bildsidor.push(bildtypUrNamn(f.name));
      page.drawImage(img, { x: (w - img.width * s) / 2, y: (hgt - img.height * s) / 2, width: img.width * s, height: img.height * s });
    }
  }
  out.setTitle(namn);
  const blob = await laggIJobb(new Blob([await out.save()], { type: 'application/pdf' }), jobbText(job, bildsidor));
  return new File([blob], `${namn}.pdf`, { type: 'application/pdf' });
}

// Överför jobbet (2026-10-21): alla blanketter och bilder i en PDF som bär jobbet, så att en
// kollega eller en annan enhet kan läsa in det med Läs in överfört jobb. Arbetsledarna vill ha
// separata filer, så överföringen sätter inte jobbet som Skickat. Två steg: första trycket gör
// PDF:en, andra delar den, så att delningen startar direkt av ett tryck. PDF:en kontrolleras
// också innan den delas.
function overforJobb(job, save) {
  const ruta = h('div', { class: 'overfor' });
  const knapp = h('button', {
    class: 'button big', type: 'button',
    onclick: async () => {
      save.flush();
      knapp.disabled = true;
      knapp.textContent = 'Gör överföringsfilen …';
      try {
        const { files, problems } = await skapaFiler(job);
        const pdf = await enPdf(files, safeName(`${jobLabel(job)} ${blankettDatum(job)}`), job);
        const bytes = new Uint8Array(await pdf.arrayBuffer());
        const sidor = (await PDFLib.PDFDocument.load(bytes)).getPageCount();
        if (bytes.length < 2000 || !sidor) throw new Error('PDF:en blev tom.');
        const fil = await iMinnet(new Blob([bytes]), pdf.name, 'application/pdf');
        const lank = h('ul', { class: 'files' }, filLank(fil));
        ruta.replaceChildren(...problems.map(p => h('p', { class: 'error' }, p)),
          h('button', { class: 'button big', type: 'button', onclick: () => delaFiler([fil], lank) }, `Dela överföringsfilen (${sidor} sidor, ${storlek(fil.size)})`),
          lank);
      } catch (err) {
        alert('Kunde inte göra överföringsfilen: ' + err.message);
        knapp.disabled = false;
        knapp.textContent = 'Överför jobbet';
      }
    },
  }, 'Överför jobbet');
  ruta.append(knapp, h('p', { class: 'muted note' }, 'Till en kollega eller en annan enhet, som läser in det med Läs in överfört jobb på startsidan. Filen innehåller alla uppgifter i jobbet, så skicka den bara till kollegor. Jobbet blir inte Skickat.'));
  return ruta;
}

// Filer som ska delas byggs om från bytes i minnet (2026-10-21). En File som bara pekar på en
// annan Blob kom fram som en tom bilaga på 301 byte när den mejlades från iPhone.
// Filstorlek som i Mail, t.ex. 57 kB eller 1,2 MB (2026-10-21).
const storlek = b => (b < 1048576 ? `${b ? Math.max(1, Math.round(b / 1024)) : 0} kB`
  : `${(b / 1048576).toLocaleString('sv-SE', { maximumFractionDigits: 1 })} MB`);
// En länk till en skapad fil, med storleken efter så att den går att jämföra med bilagan.
const filLank = f => h('li', {}, h('a', { href: URL.createObjectURL(f), download: f.name }, f.name), h('span', { class: 'storlek' }, ` · ${storlek(f.size)}`));

async function iMinnet(data, namn, typ) {
  return new File([new Uint8Array(await data.arrayBuffer())], namn, { type: typ });
}

// Ett kort avtryck av allt som hamnar i filerna: blanketterna, uppgifterna och bilderna
// (2026-10-21). Ändras det har jobbet ändrats sedan filerna gjordes eller skickades in.
const EJ_I_AVTRYCK = ['status', 'skickad', 'updated', 'last', 'lastJobb', 'inskickat'];
async function avtryck(job) {
  const innehall = Object.fromEntries(Object.entries(job).filter(([k]) => !EJ_I_AVTRYCK.includes(k)).sort(([a], [b]) => a.localeCompare(b)));
  const bilder = (await jobbetsBilder(job.id)).map(b => b.id).sort();
  const text = JSON.stringify([innehall, bilder]);
  let x = 2166136261;
  for (let i = 0; i < text.length; i++) { x ^= text.charCodeAt(i); x = Math.imul(x, 16777619); }
  return (x >>> 0).toString(16);
}

// Blanketterna och bilderna som filer. problems: det som inte gick. bilder: false ger bara
// blanketterna, t.ex. när en enskild blankett delas.
async function skapaFiler(job, { bilder = true } = {}) {
  const files = [];
  const problems = [];
  for (const key of job.docs) {
    const j = jobbFor(job, key);
    const form = docForm(j, key);
    if (!form) { problems.push('Välj växeltyp för växelbesiktningsrapporten.'); continue; }
    const tpl = await db.get('templates', form.key);
    if (!tpl || (form.format === 'overlay' && !isPdf(tpl.data))) {
      problems.push(`PDF-mallen för ${form.title} saknas. Läs in den under Inställningar > Blankettmallar.`); continue;
    }
    try {
      // form.sidor: fler ifyllda blanketter när en inte räcker, t.ex. fler än 10 svetsar.
      const data = job.forms[form.key] || {};
      const antal = form.sidor ? form.sidor(j, data) : 1;
      for (let sida = 0; sida < antal; sida++) {
        const values = form.toValues(j, data, { diff, sida });
        const blob = form.format === 'overlay'
          ? await fillOverlay(tpl.data, form.layout, values, { title: `${form.code} ${form.title}` })
          : form.format === 'word' ? await fillWord(tpl.data, values) : await fillPdf(tpl.data, values, { title: `${form.code} ${form.title}` });
        // Bara den sammanslagna PDF:en bär jobbet, så att de enskilda blanketterna inte innehåller
        // dolda uppgifter från andra blanketter.
        const ut = blob;
        const namn = fileName(form, j);
        files.push(await iMinnet(ut, antal > 1 ? namn.replace(/(\.\w+)$/, ` del ${sida + 1}$1`) : namn, ut.type));
      }
    } catch (e) {
      console.error(e);
      problems.push(`${form.title}: ${e.message}`);
    }
  }

  if (bilder) try { for (const f of await bildfiler(job.id, safeName(jobLabel(job)))) files.push(await iMinnet(f, f.name, f.type)); } catch (e) { problems.push('Bilderna: ' + e.message); }
  // En fil som blivit tom stoppas här i stället för att komma fram trasig hos mottagaren.
  for (const f of files.filter(f => f.size < 1000)) problems.push(`${f.name} blev tom. Försök skapa filerna igen.`);
  return { files, problems };
}

// forberedd: filerna görs när jobbsidan öppnas och inget varnar (2026-10-21). Då visas de
// bara om allt gick bra. notis: en rad överst, t.ex. att filerna gjorts om.
async function buildFiles(job, area, onSent, { forberedd = false, notis = '' } = {}) {
  if (!forberedd) area.replaceChildren(h('p', { class: 'muted' }, 'Skapar filer …'));
  const fore = await avtryck(job);
  const { files, problems } = await skapaFiler(job);
  if (forberedd && (problems.length || !files.length)) return;
  const lankar = h('ul', { class: 'files' }, files.map(filLank));
  // Delade filer markerar jobbet som skickat. Har jobbet ändrats sedan filerna gjordes, t.ex.
  // en ny bild, görs de om först och man trycker igen.
  const dela = async list => {
    if (await avtryck(job) !== fore) {
      buildFiles(job, area, onSent, { notis: 'Jobbet hade ändrats sedan filerna gjordes, så de är gjorda på nytt. Tryck Skicka in jobb igen.' });
      return;
    }
    if (!(await delaFiler(list, lankar))) return;
    // Senaste inskicket sparas, så att jobbsidan kan visa om något ändrats efter det (2026-10-21).
    const skickat = async () => {
      job.inskickat = { datum: new Date().toISOString(), filer: list.map(f => ({ namn: f.name, storlek: f.size })), avtryck: fore };
      if (jobStatus(job) === 'Pågående') {
        job.status = 'Skickat';
        job.skickad = job.inskickat.datum;
        lasAlla(job);
      }
      await db.put('jobs', job);
      onSent && onSent();
    };
    // På en dator laddas filerna ned i stället för att delas. Då markerar man själv att de är
    // skickade, så att jobbet blir Skickat och låses som på telefonen (2026-10-22).
    if (!(navigator.canShare && navigator.canShare({ files: list }))) {
      lankar.append(h('li', {}, h('button', { class: 'button primary', type: 'button', onclick: skickat }, 'Jag har skickat filerna')),
        h('li', { class: 'muted note' }, 'Ladda ned filerna, skicka dem med mail eller lägg dem i Teams eller OneDrive, och tryck sedan Jag har skickat filerna. Jobbet blir då Skickat och låses.'));
      return;
    }
    await skickat();
  };
  area.replaceChildren(...[
    notis ? h('p', { class: 'notis' }, notis) : forberedd ? h('p', { class: 'muted note' }, 'Filerna är klara. Inget saknas.') : null,
    ...problems.map(p => h('p', { class: 'error' }, p)),
    files.length ? h('button', { class: 'button primary big', type: 'button', onclick: () => dela(files) },
      `Skicka in jobb (${files.length === 1 ? '1 fil' : `${files.length} filer`})`) : null,
    files.length ? h('p', { class: 'muted note' }, 'Med Mail, Teams eller OneDrive. Jobbet blir Skickat och låses.') : null,
    lankar,
  ].filter(Boolean));
}

function renderItem(item, data, onChange, job) {
  switch (item.type) {
    case 'label':
      return h('p', { class: 'sublabel' }, item.label);
    // Jobbets växeltyp och växelmodell, ändringsbara i växelblanketterna (2026-10-20).
    // Ändringen sparas på jobbet och syns därför i alla blanketter.
    case 'vaxelval':
      return h('div', {}, sharedInputs(job, (k, v) => onChange(`job.${k}`, v), { only: ['vaxeltyp', 'vxmodell'] }));
    case 'shared':
      return h('div', { class: 'field shared' }, h('span', {}, item.label),
        h('output', {}, item.value ? item.value(job) || '–' : item.from === 'datum'
          ? blankettDatum(job) || '–'
          : job[item.from] || '–'));
    case 'info': {
      // Text ur regelverket som fälls ut när man trycker på rubriken. summary: [vad, värde]
      // som tabell, images: [text, bild] som knappar som visar bilden i helskärm.
      const stycke = t => (/^K\d+$/.test(t) ? h('p', { class: 'kid' }, t)
        : /^(Råd|Förutsättning)$/.test(t) ? h('p', { class: 'rad' }, t)
        : /^\d+(\.\d+)* [A-ZÅÄÖ]/.test(t) ? h('h4', {}, t)
        : h('p', { class: /^\d+[a-z]?\.\s/.test(t) ? 'pkt' : null }, t));
      return h('details', { class: 'info-block' },
        h('summary', {}, item.label),
        h('div', { class: 'tdok' },
          item.intro ? h('p', { class: 'muted' }, item.intro) : null,
          item.summary ? h('table', { class: 'info-summary' }, item.summary.map(([a, b]) => h('tr', {}, h('th', {}, a), h('td', {}, b)))) : null,
          (item.images || []).map(([text, src]) => h('button', { type: 'button', class: 'button info-image', onclick: () => showImage(src, text) }, `📋 ${text}`)),
          (item.text || []).map(stycke)));
    }
    case 'matrix': {
      // Tabell med ett fast antal rader, t.ex. mätpunkter. cols: rutor att skriva i, calc:
      // uträknade kolumner { label, value(list, i, data), warn(list, i, data) }. En ruta med warn
      // blir röd. Rutorna fylls rad för rad: Enter, eller klar(värde, data) när värdet är
      // komplett, går till nästa ruta på raden och sedan till första rutan på raden under.
      // sign: knapp ± bredvid rutan, eftersom telefonens sifferknappsats saknar minustecken.
      // span: de uträknade kolumnerna gäller punkt i till i + span och står förskjutna mellan dem.
      const list = data[item.key] = data[item.key] || [];
      const cells = [];
      const refresh = () => cells.forEach(({ el, c, i }) => {
        if (c.value) el.textContent = c.value(list, i, data) || '';
        el.classList.toggle('warn', !!c.warn?.(list, i, data));
      });
      const nasta = (ci, i, input) => {
        const [nc, ni] = ci + 1 < item.cols.length ? [ci + 1, i] : [0, i + 1];
        const el = table.querySelector(`input[data-col="${nc}"][data-row="${ni}"]`);
        if (el) el.focus(); else input.blur();
      };
      const inputCell = (c, ci, i, attrs = {}) => {
        const spara = value => { list[i] = { ...(list[i] || {}), [c.key]: value }; onChange(item.key, list); };
        const input = h('input', {
          type: 'text', inputmode: c.inputmode || 'decimal', enterkeyhint: 'next', autocomplete: 'off',
          value: list[i]?.[c.key] ?? '', 'aria-label': `${c.label} ${item.rowLabel(i)}`, 'data-col': ci, 'data-row': i,
          oninput: e => { spara(e.target.value); if (c.klar?.(e.target.value, data)) nasta(ci, i, e.target); },
          onkeydown: e => { if (e.key === 'Enter') { e.preventDefault(); nasta(ci, i, e.target); } },
        });
        cells.push({ el: input, c: { warn: c.warn }, i });
        const tecken = c.sign ? h('button', {
          type: 'button', class: 'sign', 'aria-label': 'Byt tecken',
          onclick: () => { input.value = input.value.startsWith('-') ? input.value.slice(1) : `-${input.value}`; spara(input.value); },
        }, '±') : null;
        return h('td', attrs, c.sign ? h('div', { class: 'with-sign' }, input, tecken) : input);
      };
      const head = h('thead', {}, h('tr', {}, h('th', {}, item.rowHead), item.cols.map(c => h('th', {}, c.label)), (item.calc || []).map(c => h('th', { class: 'calc' }, c.label))));
      let body;
      if (item.span) {
        // Som på blanketten: varje punkt är två halvrader och de uträknade kolumnerna är
        // förskjutna en halv rad. Värdet för punkt k (k till k + span) står mitt emellan de två
        // mittersta punkterna. Tryck på ett värde för att se vilka punkter det räknas från.
        const rader = [];
        const markera = k => table.querySelectorAll('tbody th').forEach((th, p) => {
          th.classList.toggle('mark', k != null && (p === k || p === k + item.span));
          th.classList.toggle('dim', k != null && p > k && p < k + item.span);
        });
        let vald = null;
        for (let i = 0; i < item.rows; i++) {
          rader.push(h('tr', { class: 'top' },
            h('th', { rowspan: 2 }, item.rowLabel(i)),
            item.cols.map((c, ci) => inputCell(c, ci, i, { rowspan: 2 })),
            i === 0 ? (item.calc || []).map(() => h('td', { class: 'calc tom' })) : null));
          const k = i - Math.floor(item.span / 2);
          const giltig = k >= 0 && k + item.span < item.rows;
          rader.push(h('tr', { class: 'bottom' }, (item.calc || []).map(c => {
            const td = h('td', { class: 'calc' + (giltig ? '' : ' tom'), rowspan: i < item.rows - 1 ? 2 : 1 });
            if (giltig) {
              cells.push({ el: td, c, i: k });
              td.onclick = () => { vald = vald === k ? null : k; markera(vald); };
            }
            return td;
          })));
        }
        body = h('tbody', { class: 'span' }, rader);
      } else {
        body = h('tbody', {}, Array.from({ length: item.rows }, (_, i) => h('tr', {},
          h('th', {}, item.rowLabel(i)),
          item.cols.map((c, ci) => inputCell(c, ci, i)),
          (item.calc || []).map(c => { const td = h('td', { class: 'calc' }); cells.push({ el: td, c, i }); return td; }))));
      }
      const table = h('table', { class: 'matrix' }, head, body);
      refresh();
      // Räknas om när något ändras, även fält utanför tabellen (se formView).
      const wrap = h('div', { class: 'matrix-wrap' }, table);
      wrap.refreshMatrix = refresh;
      return wrap;
    }
    // Lathund och Börja svetsa under en svets med WPS TDOK 2014:0664 (2026-10-22).
    case 'svetsstod':
      return svetsstodRad(h, { row: data, onChange, pa: svetsstodPa, avslutat: jobStatus(job) === 'Avslutat', showImage });
    case 'calc': {
      // Uträknat värde som inte går att skriva i, t.ex. SFT. Räknas om när något ändras.
      const out = h('output', { 'data-calc': '' }, item.value(data, job) || '–');
      out.refreshCalc = () => { out.textContent = item.value(data, job) || '–'; };
      return h('div', { class: 'field shared' }, h('span', {}, item.label), out);
    }
    case 'text': {
      // list: förslag att välja bland (man kan ändå skriva något annat).
      // placeholder: förval från jobbet, visas grått och används om rutan är tom.
      // Förvalet kan bero på andra fält och räknas om när något ändras (se formView).
      // names: förslag från namn som skrivits i tidigare jobb.
      const options = item.names ? remembered.namn || [] : item.list;
      const listId = options ? `list-${item.key}-${Math.random().toString(36).slice(2, 8)}` : null;
      const input = h('input', { type: item.inputType || 'text', inputmode: item.inputmode, value: data[item.key] ?? (item.defaultValue ? item.defaultValue(job) : ''), autocomplete: 'off', list: listId,
        placeholder: item.placeholder ? item.placeholder(job, data) : null, 'data-ph': item.placeholder ? '' : null,
        oninput: e => onChange(item.key, e.target.value),
        onchange: item.names ? e => kommIhagNamn(e.target.value) : null });
      if (item.placeholder) input.refreshPh = () => { input.placeholder = item.placeholder(job, data); };
      // geo: knappar som lägger till adress och koordinater efter texten, från telefonens
      // position eller en plats som väljs på kartan. Det som lades till sist byts ut.
      let geo = null;
      if (item.geo) {
        const status = h('p', { class: 'muted note', hidden: true });
        const suffixKey = `${item.key}_geo`;
        const apply = async (pos, kalla) => {
          status.hidden = false;
          status.textContent = 'Söker adress …';
          const adr = await adress(pos.lat, pos.lon);
          const suffix = [adr, koordinater(pos.lat, pos.lon)].filter(Boolean).join(', ');
          let base = input.value || input.placeholder || '';
          const old = data[suffixKey];
          if (old && base.endsWith(old)) base = base.slice(0, -old.length).replace(/,\s*$/, '');
          input.value = base ? `${base}, ${suffix}` : suffix;
          onChange(suffixKey, suffix);
          onChange(item.key, input.value);
          status.textContent = `${kalla}${pos.accuracy ? ` (±${Math.round(pos.accuracy)} m)` : ''}.${adr ? '' : navigator.onLine ? ' Ingen adress eller ort hittades, bara koordinater.' : ' Ingen täckning, bara koordinater.'}`;
        };
        const egen = h('button', {
          type: 'button', class: 'button',
          onclick: async () => {
            status.hidden = false; status.textContent = 'Hämtar position …';
            try { await apply(await minPosition(), 'Telefonens position'); } catch (e) { status.textContent = e.message; }
          },
        }, '📍 Min position');
        const karta = h('button', {
          type: 'button', class: 'button',
          onclick: async () => {
            const m = (input.value || '').match(/N (\d+\.\d+) E (\d+\.\d+)/);
            try {
              const pos = await valjPaKarta(m ? { lat: Number(m[1]), lon: Number(m[2]) } : null);
              if (pos) await apply(pos, 'Plats vald på kartan');
            } catch (e) { alert(e.message); }
          },
        }, '🗺 Välj på karta');
        geo = h('div', {}, h('div', { class: 'row geo' }, egen, karta), status);
      }
      const field = h('label', { class: 'field' + (item.half ? ' half' : '') }, h('span', {}, item.label),
        input, geo,
        options ? h('datalist', { id: listId }, options.map(v => h('option', { value: v }))) : null);
      // hideIf: döljs när andra fält gör det onödigt. Räknas om när något ändras.
      if (item.hideIf) {
        field.dataset.hideif = '';
        field.refreshHide = () => { field.hidden = !!item.hideIf(job, data); };
        field.refreshHide();
      }
      return field;
    }
    case 'textarea':
      return h('label', { class: 'field' }, h('span', {}, item.label),
        h('textarea', { rows: 3, oninput: e => onChange(item.key, e.target.value) }, data[item.key] || ''));
    case 'check': {
      // defaultValue: ikryssad tills man ändrar den (värde eller funktion av jobbet).
      // isChecked: tolkar sparade värden från äldre versioner av blanketten. sub: hör till punkten ovanför.
      // help: förklaring under rutan, t.ex. säkerhetsregeln för en kontrollpunkt.
      // details: { intro, blocks } fälls ut när man trycker på texten, t.ex. kraven i en TDOK.
      // Rutan kryssas då bara i när man trycker på själva rutan.
      const current = data[item.key] ?? (typeof item.defaultValue === 'function' ? item.defaultValue(job) : item.defaultValue);
      const checked = !!(item.isChecked ? item.isChecked(current) : current);
      if (item.details) {
        return h('div', { class: 'check punkt' },
          h('label', { class: 'punkt-box' },
            h('input', { type: 'checkbox', name: item.key, 'aria-label': item.label, checked, onchange: e => onChange(item.key, e.target.checked) })),
          h('details', {},
            h('summary', {}, item.label),
            h('div', { class: 'tdok' },
              (item.details.intro || []).filter(Boolean).map(t => h('p', { class: 'muted' }, t)),
              (item.details.blocks || []).map(([rubrik, stycken, figurer, bedomning, verktyg]) => [
                h('h4', {}, rubrik),
                stycken.map(t => medFigurer(t, figurer, /^\d+[a-z]?\.\s/.test(t) ? 'pkt' : null)),
                // Bedömningsstödet visas först när man trycker (2026-10-22).
                bedomning ? h('button', { type: 'button', class: 'button info-image', onclick: () => showImage(...bedomning) }, '📋 Bedömningsstöd') : null,
                verktyg === 'ralsfel' ? h('button', { type: 'button', class: 'button info-image', onclick: () => klassificera(h, showImage, ralsfelSomAnm(data)) }, '🔎 Klassificera rälsfel') : null,
              ]))));
      }
      return [h('label', { class: 'check' + (item.sub ? ' sub' : '') },
        h('input', { type: 'checkbox', name: item.key, checked, onchange: e => onChange(item.key, e.target.checked) }),
        h('span', {}, item.label)),
        item.help ? h('p', { class: 'muted note rule' }, item.help) : null];
    }
    case 'radio': {
      // defaultValue: förval tills man väljer själv. help: förklaring under valen.
      // noEmpty: inget val "Inget", bara alternativen.
      const name = `r_${item.key}`;
      const current = data[item.key] ?? (item.defaultValue ? item.defaultValue(job) : '') ?? '';
      const set = h('fieldset', { class: 'segmented' + (item.sub ? ' sub' : '') },
        item.label ? h('legend', {}, item.label) : null,
        [...item.options, ...(item.noEmpty ? [] : [''])].map(opt => h('label', {},
          h('input', { type: 'radio', name, value: opt, checked: (current || '') === opt,
            onchange: () => onChange(item.key, opt) }),
          h('span', {}, opt || 'Inget'))));
      // hideIf som för textrutor.
      if (item.hideIf) {
        set.dataset.hideif = '';
        set.refreshHide = () => { set.hidden = !!item.hideIf(job, data); };
        set.refreshHide();
      }
      return [set, item.help ? h('p', { class: 'muted note rule radio' }, item.help) : null];
    }
    case 'plus':
      // Två sifferrutor med + emellan, t.ex. km + m.
      // image: en del av rubriken öppnar en bild, t.ex. växelbilden.
      return h('div', { class: 'field plus' }, h('span', {}, item.image
        ? item.label.split(item.image.text).flatMap((part, i) => (i ? [h('button', { type: 'button', class: 'link inline', onclick: () => showImage(item.image.src, item.image.alt) }, item.image.text), part] : [part]))
        : item.label),
        h('div', { class: 'plus-row' }, item.keys.map((key, i) => [
          i ? h('span', { class: 'plus-sign' }, '+') : null,
          h('input', {
            type: 'text', inputmode: 'numeric', pattern: '[0-9]*', value: data[key] || '', autocomplete: 'off', 'aria-label': i ? 'm' : 'km',
            placeholder: item.placeholders?.[i] ? item.placeholders[i](job) : null,
            oninput: e => { e.target.value = siffror(e.target.value); onChange(key, e.target.value); },
          }),
        ]).flat()));
    case 'select': {
      // options: värden, eller [värde, text i listan]. info: stycken som visas när man trycker
      // på rubriken, t.ex. vad alternativen betyder.
      const info = item.info ? h('div', { class: 'note info', hidden: true }, item.info.map(t => h('p', {}, t))) : null;
      const label = item.info
        ? h('button', { type: 'button', class: 'link inline', onclick: e => { e.preventDefault(); info.hidden = !info.hidden; } }, `${item.label} ⓘ`)
        : item.label;
      return h('label', { class: 'field' + (item.half ? ' half' : '') }, h('span', {}, label),
        info,
        // noEmpty: inget tomt val; utan värde visas "– välj –", som inte går att välja tillbaka.
        h('select', { 'data-key': item.key, onchange: e => onChange(item.key, e.target.value) },
          item.noEmpty && !data[item.key] ? h('option', { value: '', selected: true, disabled: true }, '– välj –') : null,
          (item.noEmpty ? item.options : ['', ...item.options]).map(opt => {
            const [value, text] = Array.isArray(opt) ? opt : [opt, opt];
            return h('option', { value, selected: (data[item.key] || '') === value }, text || '–');
          })));
    }
    case 'group': {
      const body = h('div', { class: 'group-body' }, renderItems(item.items, data, onChange, job));
      if (item.toggle) {
        body.hidden = !data[item.toggle];
        return h('div', { class: 'group' },
          h('label', { class: 'check' },
            h('input', { type: 'checkbox', checked: data[item.toggle], onchange: e => { onChange(item.toggle, e.target.checked); body.hidden = !e.target.checked; } }),
            h('span', {}, item.label)),
          body);
      }
      return h('div', { class: 'group' }, h('p', { class: 'grouplabel' }, item.label), body);
    }
    case 'measures':
      return measureTable(item, data, onChange, job);
    case 'rows':
      return rowsEditor(item, data, onChange, job);
    case 'image':
      return h('button', { type: 'button', class: 'figure', onclick: () => showImage(item.src, item.alt) },
        h('img', { src: item.src, alt: item.alt, loading: 'lazy' }),
        h('span', { class: 'muted' }, 'Tryck för att förstora'));
    default:
      return null;
  }
}

// Fält efter varandra. row: antal fält bredvid varandra, half: två.
function renderItems(items, data, onChange, job) {
  const out = [];
  for (let i = 0; i < items.length; i++) {
    const f = items[i];
    const n = f.row || (f.half && items[i + 1]?.half ? 2 : 1);
    if (n > 1) {
      // flex: hur stor del av raden fältet tar (standard 1).
      out.push(h('div', { class: 'row' }, items.slice(i, i + n).map(x => {
        const el = renderItem(x, data, onChange, job);
        // Kryssrutor ger [ruta, hjälptext]; flex gäller rutan.
        const ruta = Array.isArray(el) ? el[0] : el;
        if (x.flex && ruta) ruta.style.flex = x.flex;
        return el;
      })));
      i += n - 1;
    } else out.push(renderItem(f, data, onChange, job));
  }
  return out;
}

// Upprepade rader, t.ex. svetsar. Varje rad har samma fält. En ny rad får innehållet från
// raden före (eller den senaste raden från ett tidigare jobb) via item.newRow. Tredje argumentet
// säger att raden kommer från ett tidigare jobb.
function rowsEditor(item, data, onChange, job) {
  const list = data[item.key] = data[item.key] || [];
  const wrap = h('div', { class: 'rows', 'data-key': item.key });
  // Lägger till en färdig rad utifrån, t.ex. ett rälsfel från guiden (2026-10-22).
  wrap.laggTill = row => {
    if (wrap.closest('fieldset.last')) return 'last';
    if (list.length >= item.max) return 'full';
    list.push(row); onChange(item.key, list); draw();
    return list.length;
  };
  const fields = row => renderItems(item.fields, row, (k, v) => { row[k] = v; onChange(item.key, list); }, job);
  const draw = () => wrap.replaceChildren(
    ...list.map((row, i) => h('div', { class: 'rowcard' },
      h('div', { class: 'rowhead' },
        h('strong', {}, `${item.rowLabel} ${i + 1}`),
        h('button', {
          type: 'button', class: 'link danger',
          onclick: () => {
            if (!confirm(`Ta bort ${item.rowLabel.toLowerCase()} ${i + 1}?`)) return;
            list.splice(i, 1); onChange(item.key, list); draw();
          },
        }, 'Ta bort')),
      fields(row))),
    list.length < item.max
      ? h('button', {
          type: 'button', class: 'button big',
          onclick: () => {
            list.push(item.newRow(list[list.length - 1] || remembered[`${item.form}.${item.key}`], job, !list.length));
            onChange(item.key, list); draw();
            wrap.querySelectorAll('.rowcard')[list.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
          },
        }, item.addLabel)
      : h('p', { class: 'muted note' }, `Blanketten har plats för ${item.max}. Gör ett nytt jobb för fler.`));
  draw();
  return wrap;
}

// Rälsfelsguidens "Lägg till som anmärkning" i IBT: texten "Rälsfel 227 Squat", anläggning Räl
// och km från första objektet (2026-10-22). null när blanketten saknar anmärkningsrader.
function ralsfelSomAnm(data) {
  const rader = () => document.querySelector('.rows[data-key="anm"]');
  if (!rader()) return null;
  return (nr, namn) => {
    const o = data.objekt?.[0] || {};
    const km = Object.fromEntries(['franKm', 'franM', 'tillKm', 'tillM'].filter(k => o[k]).map(k => [k, o[k]]));
    return rader()?.laggTill({ text: `Rälsfel ${nr} ${namn}`, ...km, anl: 'Räl' }) ?? 'full';
  };
}

// Senast använda värden för fält med remember, se formView.
let remembered = {};
// Svetsstöd på eller av (Inställningar), läses i formView.
let svetsstodPa = true;

// Namn som skrivits i fält med names sparas som förslag, de senaste först.
function kommIhagNamn(value) {
  const namn = value.split(',').map(n => n.trim()).filter(n => n.length > 1);
  if (!namn.length) return;
  remembered.namn = [...new Set([...namn, ...(remembered.namn || [])])].slice(0, 30);
  db.setSetting('remember', remembered);
}

// Visar en bild i helskärm. Hela bilden syns först; nyp eller dubbeltryck för att zooma
// och dra med fingret för att flytta. Sidans egen zoom används inte, den flyttar även knapparna.
// Stycke där t.ex. "figur 1" blir en knapp som visar figuren (2026-10-22). figurer: text → [bild, beskrivning],
// eller en lista [rubrik, bild, beskrivning] (hänvisning till ett annat dokument) som fälls ut under stycket.
function medFigurer(t, figurer, klass) {
  if (!figurer) return h('p', { class: klass }, t);
  const namn = Object.keys(figurer).sort((a, b) => b.length - a.length).map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const listor = [];
  const delar = t.split(new RegExp(`(${namn.join('|')})`)).map(del => {
    const f = figurer[del];
    if (!f) return del;
    // span i stället för knapp: en knapp blir inline-block och bryter raden i Safari och Chrome.
    const lank = (onclick, text, extra = {}) => h('span', { class: 'ref', role: 'button', tabindex: '0', onclick, onkeydown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onclick(e); } }, ...extra }, text);
    if (!Array.isArray(f[0])) return lank(() => showImage(...f), del);
    // En post är [rubrik, bild, alt] eller en grupp [rubrik, [poster]] som fälls ut i sin tur.
    const poster = lista => h('div', { class: 'hanvisning', hidden: true }, lista.map(([rubrik, src, alt]) => {
      if (!Array.isArray(src)) return h('button', { type: 'button', class: 'button info-image', onclick: () => showImage(src, alt) }, `📄 ${rubrik}`);
      const under = poster(src);
      return [h('button', { type: 'button', class: 'button info-image grupp', 'aria-expanded': 'false', onclick: e => {
        under.hidden = !under.hidden; e.currentTarget.setAttribute('aria-expanded', String(!under.hidden));
      } }, `📁 ${rubrik} ▾`), under];
    }));
    const lista = poster(f);
    listor.push(lista);
    return lank(e => { lista.hidden = !lista.hidden; e.currentTarget.setAttribute('aria-expanded', String(!lista.hidden)); }, `${del} ▾`, { 'aria-expanded': 'false' });
  });
  return [h('p', { class: klass }, ...delar), ...listor];
}

function showImage(src, alt) {
  const img = h('img', { src, alt, draggable: false });
  const stage = h('div', { class: 'zoom-stage' }, img);
  let s = 1, x = 0, y = 0, fit = 1;
  const apply = () => { img.style.transform = `translate(${x}px, ${y}px) scale(${s})`; };
  // Bilden hålls inom skärmen, och står i mitten när den är mindre än skärmen.
  const clamp = () => {
    const W = stage.clientWidth, H = stage.clientHeight, w = img.naturalWidth * s, ht = img.naturalHeight * s;
    x = w <= W ? (W - w) / 2 : Math.min(0, Math.max(W - w, x));
    y = ht <= H ? (H - ht) / 2 : Math.min(0, Math.max(H - ht, y));
  };
  const zoomAt = (ns, cx, cy) => {
    ns = Math.max(fit, Math.min(fit * 10, ns));
    x = cx - (cx - x) * ns / s; y = cy - (cy - y) * ns / s; s = ns;
    clamp(); apply();
  };
  const refit = () => {
    if (!img.naturalWidth) return;
    fit = Math.min(stage.clientWidth / img.naturalWidth, stage.clientHeight / img.naturalHeight);
    s = fit; clamp(); apply();
  };
  img.onload = refit;
  const punkt = e => { const r = stage.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const pekare = new Map();
  let senastTryck = 0, flyttat = false;
  stage.onpointerdown = e => { try { stage.setPointerCapture(e.pointerId); } catch { /* syntetiska händelser */ } pekare.set(e.pointerId, punkt(e)); flyttat = false; };
  stage.onpointermove = e => {
    if (!pekare.has(e.pointerId)) return;
    const [px, py] = punkt(e);
    if (pekare.size === 1) {
      const [ox, oy] = pekare.get(e.pointerId);
      if (Math.abs(px - ox) + Math.abs(py - oy) > 2) flyttat = true;
      x += px - ox; y += py - oy; clamp(); apply();
    } else if (pekare.size === 2) {
      const [a, b] = [...pekare.values()];
      const annan = [...pekare.keys()].find(k => k !== e.pointerId);
      const [qx, qy] = pekare.get(annan);
      const fore = Math.hypot(a[0] - b[0], a[1] - b[1]) || 1;
      const efter = Math.hypot(px - qx, py - qy) || 1;
      const [ox, oy] = pekare.get(e.pointerId);
      x += (px - ox) / 2; y += (py - oy) / 2;
      zoomAt(s * efter / fore, (px + qx) / 2, (py + qy) / 2);
      flyttat = true;
    }
    pekare.set(e.pointerId, [px, py]);
  };
  stage.onpointerup = stage.onpointercancel = e => {
    pekare.delete(e.pointerId);
    if (e.type !== 'pointerup' || flyttat || pekare.size) return;
    // Dubbeltryck: zooma in där man trycker, eller tillbaka till hela bilden.
    const nu = Date.now();
    if (nu - senastTryck < 350) { const [px, py] = punkt(e); zoomAt(s > fit * 1.5 ? fit : fit * 3, px, py); senastTryck = 0; } else senastTryck = nu;
  };
  stage.onwheel = e => { e.preventDefault(); const [px, py] = punkt(e); zoomAt(s * Math.exp(-e.deltaY / 300), px, py); };
  const knapp = (text, label, f) => h('button', { type: 'button', 'aria-label': label, onclick: () => f(stage.clientWidth / 2, stage.clientHeight / 2) }, text);
  const close = () => { overlay.remove(); window.removeEventListener('resize', refit); };
  const overlay = h('div', { class: 'overlay', role: 'dialog', 'aria-label': alt },
    h('button', { type: 'button', class: 'close', onclick: close, 'aria-label': 'Stäng' }, '✕'),
    stage,
    h('div', { class: 'zoom-tools' },
      knapp('−', 'Zooma ut', (cx, cy) => zoomAt(s / 1.6, cx, cy)),
      knapp('Hela', 'Visa hela bilden', () => refit()),
      knapp('+', 'Zooma in', (cx, cy) => zoomAt(s * 1.6, cx, cy))));
  document.body.append(overlay);
  window.addEventListener('resize', refit);
  if (img.complete) refit();
}

// Måttabell. Normalvärde och tolerans fylls i automatiskt (grå text) tills svetsaren skriver
// något eget. Efter ett uppmätt värde hoppar markören till nästa uppmätt-ruta.
function measureTable(item, data, onChange, job) {
  data.matt = data.matt || {};
  const wrap = h('div', { class: 'measures-wrap' });
  const draw = () => {
    const auto = item.auto ? item.auto(job, data) : { normal: {}, forslag: {}, tol: {}, tabeller: [], saknas: [] };
    const uppInputs = [];
    const next = input => {
      // Nästa mått som tas, även när man skrivit i ett grått mått.
      const i = uppInputs.findIndex(u => u.input === input);
      const nasta = uppInputs.slice(i + 1).find(u => u.tas);
      if (nasta) nasta.input.focus(); else input.blur();
    };
    const tas = m => !auto.matpunkter || auto.matpunkter.has(m);
    // Rödmarkera raden när uppmätt ligger utanför toleransen (2026-10-20).
    const markera = (m, out) => {
      const r = data.matt[m] || {};
      const ute = !!item.utanfor?.(effektiv(r, 'tolerans', auto.tol[m]), effektiv(r, 'normal', auto.normal[m]), r.uppmatt);
      out.closest('.mrow')?.classList.toggle('ute', ute);
      out.title = ute ? 'Utanför toleransen' : '';
      return ute;
    };
    const cell = (m, col, out) => {
      const row = data.matt[m] || {};
      const own = Object.prototype.hasOwnProperty.call(row, col);
      const autoValue = col === 'normal' ? auto.normal[m] : col === 'tolerans' ? auto.tol[m] : undefined;
      const input = h('input', {
        type: 'text', inputmode: col === 'tolerans' ? 'text' : 'decimal',
        maxlength: col === 'tolerans' ? 7 : 4,
        enterkeyhint: col === 'uppmatt' ? 'next' : 'done',
        class: !own && autoValue ? 'auto' : null,
        value: own ? row[col] : (autoValue || ''),
        placeholder: col === 'normal' && auto.forslag[m] ? auto.forslag[m] : '',
        'aria-label': `${m} ${col}`,
        tabindex: tas(m) ? null : -1,
        oninput: e => {
          const r = data.matt[m] = data.matt[m] || {};
          r[col] = e.target.value;
          e.target.classList.remove('auto');
          out.value = diff(effektiv(r, 'normal', auto.normal[m]), r.uppmatt);
          markera(m, out);
          onChange('matt', data.matt);
          if (col === 'uppmatt') {
            const siffror = e.target.value.replace(/\D/g, '').length;
            const normal = effektiv(r, 'normal', auto.normal[m]) || auto.forslag[m] || '';
            const behov = (String(normal).split('/')[0].match(/\d+/) || ['0000'])[0].length;
            if (siffror >= behov && !/[,.]$/.test(e.target.value)) next(e.target);
          }
        },
        onkeydown: e => { if (e.key === 'Enter' && col === 'uppmatt') { e.preventDefault(); next(e.target); } },
      });
      if (col === 'uppmatt') { uppInputs.push({ input, tas: tas(m) }); return input; }
      // Normalvärde och tolerans är text, inte rutor, så att telefonens nästa-/föregående-pilar
      // bara går mellan Uppmätt (2026-10-20). Tryck på värdet för att skriva ett eget.
      const visa = h('button', { type: 'button', class: 'mval' + (input.classList.contains('auto') ? ' auto' : ''), 'aria-label': `${m} ${col}, tryck för att ändra` });
      const text = () => {
        visa.textContent = input.value || input.placeholder || '–';
        visa.classList.toggle('tom', !input.value);
        visa.classList.toggle('auto', input.classList.contains('auto'));
      };
      text();
      visa.onclick = () => { visa.replaceWith(input); input.focus(); input.select(); };
      input.addEventListener('blur', () => { text(); input.replaceWith(visa); });
      input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } });
      return visa;
    };
    const notes = [];
    const modell = job.vxmodell;
    if (!modell) notes.push('Välj växelmodell på jobbet för att få normalvärden.');
    else if (!auto.harNormal) notes.push(`${modell} finns inte i bilaga 8, fyll i normalvärden själv.`);
    if (item.auto) {
      if (!data.typ) notes.push('Välj besiktningstyp för att få toleranser.');
      else if (auto.tabeller.length) notes.push(`Toleranser enligt tabell ${auto.tabeller.join(' / ')}.`);
      else if (modell) notes.push('Bilagan har ingen toleranstabell för den här modellen och besiktningen.');
      if (auto.saknas.includes('besiktningsklass')) notes.push('Välj besiktningsklass under Växeldata för att få alla toleranser.');
      if (auto.saknas.includes('radie')) notes.push('Fyll i radie under Växeldata för att få toleranserna som beror på R ≥ 300 m.');
      if (auto.matpunkter) notes.push('Gråa mått tas inte vid säkerhetsbesiktning och hoppas över. Du kan ändå fylla i dem.');
      if (Object.keys(auto.forslag).length) notes.push('Grå siffror med snedstreck (t.ex. 43/44) beror på korsningens utförande. Skriv rätt värde.');
    }
    wrap.replaceChildren(
      ...notes.map(n => h('p', { class: 'muted note' }, n)),
      h('div', { class: 'measures' },
        h('div', { class: 'mrow head' }, h('span', {}, 'Mått'), h('span', {}, 'Normal'), h('span', {}, 'Tolerans'), h('span', {}, 'Uppmätt'), h('span', {}, 'Diff')),
        (typeof item.keys === 'function' ? item.keys(data) : item.keys).map(m => {
          const row = data.matt[m] || {};
          const out = h('output', {}, diff(effektiv(row, 'normal', auto.normal[m]), row.uppmatt));
          const rad = h('div', { class: tas(m) ? 'mrow' : 'mrow skip' }, h('span', { class: 'mname' }, m), cell(m, 'normal', out), cell(m, 'tolerans', out), cell(m, 'uppmatt', out), out);
          markera(m, out);
          return rad;
        })));
  };
  draw();
  wrap.refresh = draw;
  return wrap;
}

async function formView(id, key) {
  const lagrat = await db.get('jobs', id);
  // En låst blankett visas med jobbets uppgifter från när den låstes, och sparas aldrig.
  const job = lagrat && jobbFor(upgradeJob(lagrat), key);
  const form = job && docForm(job, key);
  if (!job || !form) { location.hash = '#/'; return; }
  hjalpNyckel = blankettHjalp(form.key, VAXELTYPER.map(t => t.key));
  await fillFromProfile(job);
  // Kort titel överst så att den inte klipps; hela namnet står på raden under (2026-10-20).
  setTitle(form.kort || form.title, `#/jobb/${id}`);
  const data = job.forms[form.key] = job.forms[form.key] || {};
  const save = debounce(async () => { if (job !== lagrat) return; job.updated = new Date().toISOString(); await db.put('jobs', job); }, 300);
  // Fält med remember får förra jobbets värde, t.ex. enhet och svetsansvarig.
  remembered = await db.getSetting('remember', {});
  svetsstodPa = await db.getSetting('svetsstod', true);
  const remember = new Set();
  const walk = items => items.forEach(i => { if (i.remember) { remember.add(i.key); i.form = form.key; } if (i.items) walk(i.items); });
  form.sections.forEach(s => walk(s.items));
  for (const k of remember) {
    const r = remembered[`${form.key}.${k}`];
    if (data[k] === undefined && r !== undefined && !(typeof r === 'object')) data[k] = r;
  }
  const saveRemembered = debounce(() => db.setSetting('remember', remembered), 300);
  window.onpagehide = () => { save.flush(); saveRemembered.flush(); };
  // Tabellen räknas om när något som styr normalvärden och toleranser ändras.
  const last = !!(job.last && job.last[key]);
  let blankettRuta;
  const onChange = (k, v) => {
    if (last) return;
    if (k.startsWith('job.')) {
      job[k.slice(4)] = v;
      // En modell som inte finns för den nya växeltypen tas bort, så att man väljer om.
      if (k === 'job.vaxeltyp' && !(MODELLER[v] || []).some(([m]) => m === job.vxmodell)) job.vxmodell = '';
      // Ny växeltyp ger en annan besiktningsrapport: visa den.
      if (k === 'job.vaxeltyp' && key === 'vaxel') {
        job.updated = new Date().toISOString();
        db.put('jobs', job).then(route);
        return;
      }
      save();
      document.querySelectorAll('.measures-wrap').forEach(w => w.refresh());
    } else { data[k] = v; save(); }
    document.querySelectorAll('input[data-ph]').forEach(el => el.refreshPh?.());
    document.querySelectorAll('[data-hideif]').forEach(el => el.refreshHide?.());
    document.querySelectorAll('output[data-calc]').forEach(el => el.refreshCalc?.());
    document.querySelectorAll('.matrix-wrap').forEach(el => el.refreshMatrix?.());
    if (remember.has(k)) {
      remembered[`${form.key}.${k}`] = Array.isArray(v) ? v[v.length - 1] : v;
      if (remembered[`${form.key}.${k}`] === undefined) delete remembered[`${form.key}.${k}`];
      saveRemembered();
    }
    if (['typ', 'besiktningsklass', 'radie', 'start', 'ordning'].includes(k)) document.querySelectorAll('.measures-wrap').forEach(w => w.refresh());
  };

  render(
    h('p', { class: 'muted' }, `${form.code} ${form.title}. Uppgifter i grått hämtas från jobbet.`),
    last ? h('div', { class: 'card las-note' }, lasIkon(true), h('span', {}, 'Blanketten är låst och kan inte ändras.'),
      h('button', { class: 'button', type: 'button', onclick: async () => { if (!bekraftaUpplasning(form.kort || form.title)) return; satLas(lagrat, key, false); await db.put('jobs', lagrat); route(); } }, 'Lås upp')) : null,
    // Sektionerna går att fälla ihop för överblick och är öppna varje gång blanketten öppnas.
    // En låst blankett visas i en avstängd fieldset: allt syns men inget går att ändra.
    blankettRuta = h('fieldset', { class: 'blankett' + (last ? ' last' : '') },
      ...form.sections.map(section => h('details', { class: 'card section', open: !section.closed },
        h('summary', {}, h('h2', {}, section.title)),
        section.help ? h('p', { class: 'muted' }, section.help) : null,
        renderItems(section.items, data, onChange, job)))),
    h('a', { class: 'button primary big', href: `#/jobb/${id}`, onclick: () => save.flush() }, 'Klar'),
    delaBlankett(lagrat, key, form, save),
  );
  // Låst: rutor och knappar stängs av, men bilder, ⓘ-texter och avsnitt går att öppna.
  if (last) {
    const stang = () => blankettRuta.querySelectorAll('input, select, textarea, button:not(.figure):not(.info-image):not(.link.inline):not(.oppnas)').forEach(el => { el.disabled = true; });
    stang(); setTimeout(stang, 0);
  }
}

async function templatesView() {
  setTitle('Blankettmallar', '#/installningar');
  const templates = await db.getAll('templates');
  const gamla = new Set((await Promise.all(templates.map(async t => (await gammalMall(t)) && t.key))).filter(Boolean));
  const status = h('div', { class: 'status' });
  const input = h('input', {
    // Ingen accept-lista: iPhone låter annars inte alla filtyper väljas (t.ex. zip).
    // Appen kontrollerar själv varje fil när den läses in.
    type: 'file', multiple: true, hidden: true,
    onchange: async e => {
      status.replaceChildren(h('p', { class: 'muted' }, 'Läser in …'));
      const results = await importTemplates(Array.from(e.target.files));
      e.target.value = '';
      await templatesView();
      document.querySelector('.status').replaceChildren(...results.map(r => h('p', {}, r)));
    },
  });

  render(
    h('p', {}, 'Blankettmallarna finns inte i appen. Läs in dem från Filer en gång, så sparas de i telefonen. Du kan välja flera filer samtidigt eller en zip-fil med alla mallar.'),
    h('ul', { class: 'list' }, FORMS.map(form => {
      const found = templates.find(x => x.key === form.key);
      // En gammal Word-mall räknas inte när blanketten fylls som PDF.
      const t = found && (form.format !== 'overlay' || isPdf(found.data)) ? found : null;
      return h('li', {}, h('div', { class: 'item' },
        h('span', { class: 'main' }, `${!t ? '○' : gamla.has(t.key) ? '⚠' : '✓'} ${form.title}`),
        h('span', { class: 'sub' }, !t ? `Saknas: ${form.templateHint}`
          : gamla.has(t.key) ? `Gammal version: ${t.name}. Läs in den senaste.`
          : `Inläst: ${t.name}${MALLVERSIONER[t.key] ? ` · version ${MALLVERSIONER[t.key].datum}` : ''}`)));
    })),
    h('button', { class: 'button primary big', type: 'button', onclick: () => input.click() }, 'Läs in mallar från Filer'),
    input,
    status,
  );
}

async function settingsView() {
  setTitle('Inställningar', '#/');
  const profile = await db.getSetting('profile', {});
  // Uppgifterna låg först i blanketterna; ta med dem som redan skrivits där.
  const rem = await db.getSetting('remember', {});
  for (const [k, r] of [['enhet', 'svets.enhet'], ['svetsansvarig', 'svets.ansvarig'], ['svetsansvarig_tel', 'svets.telefon'], ['projektledare', 'ibt.projektledare'], ['projektledare_tel', 'ibt.projektledareTfn'], ['platschef_tel', 'ibt.platschefTfn'], ['arbetsledare_tel', 'ibt.arbetsledareTfn'], ['namn_tel', 'ibt.bankontrollantTfn']]) {
    if (!profile[k] && rem[r]) profile[k] = rem[r];
  }
  const save = debounce(() => db.setSetting('profile', profile), 300);
  window.onpagehide = () => save.flush();
  // Versionen är namnet på cachen i sw.js, så att man kan se om telefonen har den senaste.
  const version = h('p', { class: 'muted' });
  if ('caches' in window) caches.keys().then(k => { const v = k.filter(x => /^v\d+$/.test(x)).sort((a, b) => a.slice(1) - b.slice(1)).pop(); if (v) version.textContent = `Version ${v}`; }).catch(() => {});
  const onChange = (k, v) => { profile[k] = v; save(); };
  const GRUPPER = [
    ['Om dig', 'Ditt namn står som underskrift på blanketterna.'],
    ['Företag', null],
    ['Kontaktpersoner', 'Svetsansvarig står på svetsrapporten och TRV projektledare på IBT.'],
  ];
  render(
    h('p', { class: 'muted' }, 'Uppgifterna här fylls i automatiskt i nya jobb och blanketter. I en blankett kan du skriva något annat som bara gäller den.'),
    ...GRUPPER.flatMap(([namn, hjalp]) => [
      h('h2', {}, namn),
      h('div', { class: 'card' },
        hjalp ? h('p', { class: 'muted note' }, hjalp) : null,
        sharedInputs(profile, onChange, { only: SHARED.filter(f => f.group === namn).map(f => f.key) })),
    ]),
    h('h2', {}, 'Blankettmallar'),
    h('a', { class: 'button big', href: '#/mallar' }, 'Blankettmallar'),
    h('h2', {}, 'Svetsstöd'),
    svetsstodKort(),
    h('h2', {}, 'Säkerhetskopia'),
    kopiaKort(),
    h('h2', {}, 'Lagring'),
    lagringKort(),
    h('h2', {}, 'Om appen'),
    h('a', { class: 'button', href: '#/kom-igang' }, 'Kom igång, steg för steg'),
    h('p', { class: 'muted' }, 'Allt du fyller i och alla mallar sparas bara i den här telefonen. Inget skickas till någon server, utom när du använder Min position eller kartan: då skickas positionen eller kartutsnittet till OpenStreetMap för att hitta platsen. Filerna lämnar telefonen först när du delar dem.'),
    version,
  );
}

// Svetsstöd på eller av (2026-10-22): Lathund och Börja svetsa under svetsar med WPS TDOK 2014:0664.
function svetsstodKort() {
  const ruta = h('div', { class: 'card' });
  db.getSetting('svetsstod', true).then(pa => ruta.replaceChildren(
    h('label', { class: 'check' },
      h('input', { type: 'checkbox', checked: pa, onchange: e => db.setSetting('svetsstod', e.target.checked) }),
      h('span', {}, 'Visa svetsstöd')),
    h('p', { class: 'muted note' }, 'Knapparna Lathund och Börja svetsa under varje svets i svetsrapporten när WPS är TDOK 2014:0664 (SkV-Elite). Lathunden visar portion, faktablad och varningar, och Börja svetsa har klockor för förvärmning, formhållarplåtar och avskrotning.')));
  return ruta;
}

// Hur mycket appen använder av telefonens lagring, och rensning av bilder i gamla avslutade
// jobb (2026-10-21). Blanketterna finns kvar; bara bilderna tas bort.
const GAMMALT = 90 * 864e5; // ungefär tre månader
function lagringKort() {
  const ruta = h('div', { class: 'card' }, h('p', { class: 'muted' }, 'Räknar …'));
  const visa = async () => {
    const [jobs, bilder] = await Promise.all([db.getAll('jobs'), db.getAll('bilder')]);
    const gamla = new Set(jobs.filter(j => jobStatus(j) === 'Avslutat' && Date.now() - new Date(j.updated || j.datum || 0) > GAMMALT).map(j => j.id));
    const rensas = bilder.filter(b => gamla.has(b.jobId));
    const bildMb = bilder.reduce((n, b) => n + (b.data?.size || 0), 0);
    const est = await navigator.storage?.estimate?.().catch(() => null);
    ruta.replaceChildren(...[
      h('p', {}, est?.usage != null
        ? `Appen använder ${storlek(est.usage)}${est.quota ? ` av ${storlek(est.quota)} som webbläsaren tillåter` : ''}.`
        : 'Webbläsaren visar inte hur mycket lagring appen använder.'),
      h('p', { class: 'muted note' }, `${jobs.length} jobb och ${bilder.length} bilder (${storlek(bildMb)}). Bilderna tar mest plats.`),
      rensas.length ? h('button', {
        class: 'button big', type: 'button',
        onclick: async () => {
          if (!confirm(`Ta bort ${rensas.length} bilder (${storlek(rensas.reduce((n, b) => n + (b.data?.size || 0), 0))}) i ${gamla.size} avslutade jobb som är äldre än tre månader? Blanketterna finns kvar. Det går inte att ångra.`)) return;
          for (const b of rensas) await db.del('bilder', b.id);
          visa();
        },
      }, `Ta bort bilder i gamla avslutade jobb (${rensas.length})`) : h('p', { class: 'muted note' }, 'Inga bilder i avslutade jobb äldre än tre månader.'),
    ]);
  };
  visa();
  return ruta;
}

// Spara alla jobb, inställningar, mallar och bilder i en fil, och läsa tillbaka dem.
function kopiaKort() {
  const status = h('p', { class: 'muted note' });
  const visaSenaste = () => db.getSetting('senasteKopia', null).then(d => {
    status.textContent = d ? `Senaste kopian sparades ${new Date(d).toLocaleDateString('sv-SE')}.` : 'Ingen kopia sparad än.';
  });
  visaSenaste();
  const filer = h('ul', { class: 'files' });
  const val = h('input', {
    type: 'file', hidden: true,
    onchange: async e => {
      const file = e.target.files[0];
      e.target.value = '';
      if (!file) return;
      // Val för jobb som finns både i telefonen och i kopian (2026-10-21).
      valRuta.replaceChildren(h('div', { class: 'card varning' },
        h('strong', {}, 'Läsa in säkerhetskopian?'),
        h('p', {}, 'Inställningarna och blankettmallarna ersätts med kopians. Jobb som bara finns i telefonen ligger kvar. Vad ska hända med jobb som finns både i telefonen och i kopian?'),
        h('button', { class: 'button primary big', type: 'button', onclick: () => lasIn(file, (lokalt, kopia) => (kopia.updated || '') > (lokalt.updated || '')) }, 'Behåll den nyare versionen av varje jobb'),
        h('button', { class: 'button big', type: 'button', onclick: () => lasIn(file, (lokalt, kopia) => confirm(
          `${jobLabel(lokalt)} finns både i telefonen (ändrat ${datumTid(lokalt.updated)}) och i kopian (ändrat ${datumTid(kopia.updated)}).\n\nOK: använd kopians version.\nAvbryt: behåll telefonens.`)) }, 'Fråga för varje jobb'),
        h('button', { class: 'button', type: 'button', onclick: () => valRuta.replaceChildren() }, 'Avbryt')));
    },
  });
  const valRuta = h('div', {});
  const datumTid = d => (d ? new Date(d).toLocaleString('sv-SE', { dateStyle: 'short', timeStyle: 'short' }) : 'okänt');
  const lasIn = async (file, ersatt) => {
    valRuta.replaceChildren(h('p', { class: 'muted' }, 'Läser in …'));
    try {
      const r = await lasInKopia(file, ersatt);
      alert(`Klart. ${r.jobb} jobb lästes in${r.behallna ? `, ${r.behallna} behölls som de var i telefonen` : ''}.`);
      route();
    } catch (err) { alert('Kunde inte läsa in kopian: ' + err.message); valRuta.replaceChildren(); }
  };
  return h('div', { class: 'card' },
    h('p', { class: 'muted note' }, 'Allt finns bara i telefonen. Spara en kopia i Filer (t.ex. iCloud Drive eller OneDrive) ibland, så kan du läsa tillbaka jobben om de försvinner eller om du byter telefon. Kopian är en vanlig zip-fil som inte är krypterad: den som får tag i filen kan läsa allt i den, så spara den bara där andra inte kommer åt den.'),
    status,
    h('button', {
      class: 'button primary big', type: 'button',
      onclick: async e => {
        const knapp = e.currentTarget;
        knapp.disabled = true;
        try {
          const file = await skapaKopia();
          if (await delaFiler([file], filer)) { await db.setSetting('senasteKopia', new Date().toISOString()); visaSenaste(); }
        } catch (err) { alert('Kunde inte skapa kopian: ' + err.message); }
        knapp.disabled = false;
      },
    }, 'Spara säkerhetskopia'),
    filer,
    h('button', { class: 'button big', type: 'button', onclick: () => val.click() }, 'Läs in säkerhetskopia'),
    valRuta,
    val);
}

// Dela filer via iOS delningsmeny. Sant om de delades. Utan delning (t.ex. på en dator)
// visas länkar att ladda ner i stället, och det räknas som delat.
async function delaFiler(files, area) {
  if (navigator.canShare && navigator.canShare({ files })) {
    // Bara filerna: med title eller text lägger iOS till en textfil, och Mail tar ändå inte
    // titeln som ämnesrad (testat 2026-10-20). Jobbnamnet kopieras i stället med knappen överst.
    try { await navigator.share({ files }); return true; }
    catch (e) { if (e.name !== 'AbortError') alert('Kunde inte dela: ' + e.message); return false; }
  }
  area.replaceChildren(...files.map(filLank));
  return true;
}

// ---------- Routning ----------

async function route() {
  window.onpagehide = null;
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  document.querySelector('.hjalp-overlay')?.remove();
  hjalpNyckel = parts[0] === 'jobb' ? 'jobb' : HJALP[parts[0]] ? parts[0] : 'start';
  try {
    if (parts[0] === 'nytt') await newJobView();
    else if (parts[0] === 'jobb' && parts[2]) await formView(parts[1], parts[2]);
    else if (parts[0] === 'jobb') await jobView(parts[1]);
    else if (parts[0] === 'mallar') await templatesView();
    else if (parts[0] === 'installningar') await settingsView();
    else if (parts[0] === 'kom-igang') await komIgangView();
    else await homeView();
  } catch (e) {
    console.error(e);
    render(h('p', { class: 'error' }, 'Något gick fel: ' + e.message));
  }
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
document.addEventListener('click', e => { if (e.target.closest('#hjalp')) { e.preventDefault(); visaHjalp(); } });

// Kopiera till urklipp. Bocken visar att det gick.
async function kopieraText(text, knapp) {
  try { await navigator.clipboard.writeText(text); } catch {
    const t = h('textarea', { readonly: true, style: 'position:fixed;opacity:0' }, text);
    document.body.append(t); t.select(); document.execCommand('copy'); t.remove();
  }
  knapp.classList.add('klar');
  setTimeout(() => knapp.classList.remove('klar'), 1500);
}
function kopieraKnapp(text, etikett) {
  const knapp = h('button', {
    class: 'kopiera', type: 'button', 'aria-label': etikett,
    onclick: e => { e.preventDefault(); e.stopPropagation(); kopieraText(text(), knapp); },
  });
  knapp.append(document.querySelector('#kopiera svg').cloneNode(true));
  return knapp;
}
// Titeln (jobbnamnet) på jobbsidan.
document.getElementById('kopiera').addEventListener('click', e => kopieraText(document.getElementById('title').textContent, e.currentTarget));
window.addEventListener('DOMContentLoaded', () => {
  db.persist();
  route();
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    // En ny version tar över direkt (skipWaiting i sw.js). Ladda då om sidan så att den
    // inte fortsätter med gamla filer. Första installationen laddar inte om.
    if (navigator.serviceWorker.controller) {
      let reloaded = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => { if (!reloaded) { reloaded = true; location.reload(); } });
    }
    navigator.serviceWorker.register('sw.js').then(reg => {
      // En app på hemskärmen laddas sällan om; leta efter uppdateringar när den öppnas igen.
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') reg.update().catch(() => {}); });
    });
  }
});
