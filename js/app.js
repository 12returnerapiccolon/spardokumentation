import * as db from './db.js';
import { fillWord, wordInfo } from './fill-word.js';
import { fillPdf, pdfInfo } from './fill-pdf.js';
import { fillOverlay, isPdf } from './fill-overlay.js';
import { VAXELTYPER, VAXELFORMS, effektiv } from './forms/vaxel.js';
import oversyn1481 from './forms/oversyn1481.js';
import svets from './forms/svets.js';
import MODELLER from './forms/vaxelmodeller.js';
import { blankettDatum } from './datum.js';

const FORMS = [...VAXELFORMS, oversyn1481, svets];
const FORM_BY_KEY = Object.fromEntries(FORMS.map(f => [f.key, f]));

// Ett dokument i jobbet. Växelbesiktningen beror på vilken växeltyp jobbet gäller.
function docForm(job, docKey) {
  return docKey === 'vaxel' ? FORM_BY_KEY[job.vaxeltyp] : FORM_BY_KEY[docKey];
}

const READY = new Set(['vaxel', '1481', 'svets']);

// Jobb från första prototypen hade dokumentet "ev" i stället för växeltyp.
function upgradeJob(job) {
  if (job.docs.includes('ev')) {
    job.docs = job.docs.map(k => (k === 'ev' ? 'vaxel' : k));
    job.vaxeltyp = job.vaxeltyp || 'ev';
  }
  return job;
}

// Alla dokument som ska gå att välja för ett jobb. De utan formulär kommer i senare versioner.
const CATALOG = [
  { key: 'heta', title: 'Heta arbeten, tillstånd och kontrollista' },
  { key: 'svets', title: 'Svetsrapport / egenkontroll' },
  { key: 'skevning', title: 'Spårlägesmätning / skevningsprotokoll' },
  { key: 'vaxel', title: 'Växelbesiktningsrapport (efter växeltyp)' },
  { key: '1481', title: 'Översyn spårväxel (TMALL 1481)' },
  { key: 'ibt', title: 'Ibruktagande, IBT (TMALL 0824)' },
  { key: '0737', title: 'Kontrollplan stabilitetspåverkande arbete (TMALL 0737)' },
  { key: 'kap', title: 'Kapmetoden, spänningsfri temperatur (valfri)' },
];

const SHARED = [
  { key: 'datum', label: 'Datum', type: 'date' },
  { key: 'bandel', label: 'Bandel', inputmode: 'numeric' },
  { key: 'driftplats', label: 'Driftplats / trafikplats' },
  { key: 'spar', label: 'Spår' },
  { key: 'km', label: 'Km', inputmode: 'numeric', half: true },
  { key: 'm', label: 'm', inputmode: 'numeric', half: true },
  { key: 'vaxeltyp', label: 'Växeltyp', kind: 'vaxeltyp' },
  { key: 'vxmodell', label: 'Växelmodell', kind: 'vxmodell' },
  { key: 'vxnr', label: 'Växelnummer' },
  { key: 'namn', label: 'Ditt namn', profile: true },
  { key: 'signatur', label: 'Signatur (initialer)', profile: true, autocapitalize: 'characters' },
  { key: 'svetsid', label: 'Svets-ID', profile: true, autocapitalize: 'characters' },
  { key: 'foretag', label: 'Företag / entreprenör', profile: true },
  { key: 'arbetsledare', label: 'Arbetsledare', profile: true },
  { key: 'platschef', label: 'Platschef', profile: true },
  // Bara under Inställningar. Kopieras till jobbet när det skapas.
  { key: 'enhet', label: 'Företag/enhet (svetsrapport)', profile: true, settingsOnly: true },
  { key: 'svetsansvarig', label: 'Svetsansvarig', profile: true, settingsOnly: true },
  { key: 'svetsansvarig_tel', label: 'Svetsansvarigs telefonnr', profile: true, settingsOnly: true, type: 'tel', inputmode: 'tel' },
];

const PROFILE_KEYS = SHARED.filter(f => f.profile).map(f => f.key);

// Uppgifter som bara finns under Inställningar hämtas därifrån om jobbet saknar dem,
// t.ex. för jobb som skapades innan de fylldes i.
async function fillFromProfile(job) {
  const profile = await db.getSetting('profile', {});
  for (const f of SHARED) if (f.settingsOnly && !job[f.key] && profile[f.key]) job[f.key] = profile[f.key];
}

// "John Glen Jonson" blir "JGJ".
export function initials(name) {
  return (name || '').trim().split(/[\s-]+/).filter(Boolean).map(w => w[0].toUpperCase()).join('');
}

// ---------- Hjälpfunktioner ----------

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
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

const view = () => document.getElementById('view');

function render(...nodes) {
  view().replaceChildren(...nodes.flat().filter(n => n != null && n !== false));
}

function setTitle(text, back) {
  document.getElementById('title').textContent = text;
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

function debounce(fn, ms) {
  let t;
  const wrapped = (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  wrapped.flush = () => { clearTimeout(t); fn(); };
  return wrapped;
}

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

function jobLabel(job) {
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

async function importTemplates(selected) {
  const results = [];
  const files = await unzipTemplates(selected);
  for (const file of files) {
    const { form, buffer, old } = await identify(file);
    if (form) {
      await db.put('templates', { key: form.key, name: file.name, added: new Date().toISOString(), data: buffer });
      results.push(`✓ ${form.title}`);
    } else if (old) {
      results.push(`✗ ${file.name}: Word-mallen används inte längre. Läs in PDF-mallen för ${old.code} ${old.title}.`);
    } else {
      results.push(`✗ ${file.name}: känns inte igen (stöds inte än)`);
    }
  }
  return results;
}

// ---------- Vyer ----------

async function homeView() {
  setTitle('Spårdokumentation');
  const jobs = (await db.getAll('jobs')).sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
  const templates = await db.getAll('templates');
  const missing = FORMS.filter(f => !templates.some(t => t.key === f.key));

  render(
    missing.length ? h('a', { class: 'notice', href: '#/mallar' },
      h('strong', {}, 'Läs in blankettmallarna'),
      h('span', {}, `${missing.length} av ${FORMS.length} mallar saknas i telefonen. Tryck här för att läsa in dem från Filer.`)) : null,
    h('a', { class: 'button primary big', href: '#/nytt' }, '+ Nytt jobb'),
    h('h2', {}, 'Jobb'),
    jobs.length
      ? h('ul', { class: 'list' }, jobs.map(job => h('li', {},
          h('a', { href: `#/jobb/${job.id}` },
            h('span', { class: 'main' }, jobLabel(job)),
            h('span', { class: 'sub' }, [job.datum && (job.natt ? `${job.datum} natt` : job.datum), upgradeJob(job).docs.map(k => docForm(job, k)?.code || '').filter(Boolean).join(', ')].filter(Boolean).join(' · '))))))
      : h('p', { class: 'muted' }, 'Inga jobb än.'),
  );
}

function sharedInputs(values, onChange, opts = {}) {
  const fields = SHARED.filter(f => (opts.only ? opts.only.includes(f.key) : !f.settingsOnly));
  const out = [];
  const inputs = {};
  // Signaturen följer namnets initialer tills man skriver en egen.
  const change = (key, value) => {
    if (key === 'namn' && inputs.signatur) {
      const sig = values.signatur || '';
      if (!sig || sig === initials(values.namn)) {
        inputs.signatur.value = initials(value);
        onChange('signatur', inputs.signatur.value);
      }
    }
    onChange(key, value);
  };
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
    const input = (field) => h('label', { class: 'field' + (field.half ? ' half' : '') },
      h('span', {}, field.label),
      inputs[field.key] = h('input', {
        type: field.type || 'text', inputmode: field.inputmode, value: values[field.key] || '',
        autocomplete: 'off', autocapitalize: field.autocapitalize || 'sentences', name: field.key,
        list: field.list ? `list-${field.key}` : null,
        oninput: e => change(field.key, e.target.value),
      }),
      field.list ? h('datalist', { id: `list-${field.key}` }, field.list.map(v => h('option', { value: v }))) : null);
    if (f.key === 'datum') {
      // Nattarbete: blanketterna får nästa dags datum.
      const hint = h('p', { class: 'muted note' });
      const showHint = () => {
        hint.textContent = values.natt && values.datum ? `Blanketterna får datum ${blankettDatum(values)}.` : '';
        hint.hidden = !hint.textContent;
      };
      const field = input(f);
      inputs.datum.addEventListener('input', () => setTimeout(showHint));
      out.push(h('div', { class: 'row datum' }, field,
        h('label', { class: 'check natt' },
          h('input', { type: 'checkbox', name: 'natt', checked: !!values.natt, onchange: e => { change('natt', e.target.checked); showHint(); } }),
          h('span', {}, 'Nattarbete'))), hint);
      showHint();
      continue;
    }
    if (f.half && fields[i + 1]?.half) {
      out.push(h('div', { class: 'row' }, input(f), input(fields[i + 1])));
      i++;
    } else {
      out.push(input(f));
    }
  }
  return out;
}

async function newJobView() {
  setTitle('Nytt jobb', '#/');
  const profile = await db.getSetting('profile', {});
  const job = { datum: today() };
  for (const k of PROFILE_KEYS) job[k] = profile[k] || '';
  if (!job.signatur) job.signatur = initials(job.namn);
  const chosen = new Set((await db.getSetting('lastDocs', ['vaxel', '1481'])).map(k => (k === 'ev' ? 'vaxel' : k)));

  render(
    h('form', {
      onsubmit: async e => {
        e.preventDefault();
        const docs = CATALOG.map(d => d.key).filter(k => chosen.has(k) && READY.has(k));
        if (!docs.length) { alert('Välj minst ett dokument.'); return; }
        if (docs.includes('vaxel') && !job.vaxeltyp) { alert('Välj växeltyp, så att rätt besiktningsrapport används.'); return; }
        const now = new Date().toISOString();
        const record = { ...job, id: uid(), docs, forms: {}, created: now, updated: now };
        await db.put('jobs', record);
        await db.setSetting('lastDocs', docs);
        await db.setSetting('profile', Object.fromEntries(PROFILE_KEYS.map(k => [k, job[k] || ''])));
        location.hash = `#/jobb/${record.id}`;
      },
    },
      h('h2', {}, 'Vilka dokument ska fyllas i?'),
      h('div', { class: 'card' }, CATALOG.map(d => {
        const ready = READY.has(d.key);
        return h('label', { class: 'check' + (ready ? '' : ' disabled') },
          h('input', {
            type: 'checkbox', checked: ready && chosen.has(d.key), disabled: !ready,
            onchange: e => e.target.checked ? chosen.add(d.key) : chosen.delete(d.key),
          }),
          h('span', {}, d.title, ready ? null : h('small', {}, ' kommer senare')));
      })),
      h('h2', {}, 'Gemensamma uppgifter'),
      h('p', { class: 'muted' }, 'Fylls i en gång och används i alla dokument för jobbet.'),
      h('div', { class: 'card' }, sharedInputs(job, (k, v) => { job[k] = v; })),
      h('button', { class: 'button primary big', type: 'submit' }, 'Skapa jobb'),
    ),
  );
}

function formProgress(form, data) {
  const filled = Object.entries(data || {}).filter(([k, v]) => k !== 'matt' && !Array.isArray(v) && v !== '' && v !== false && v != null).length
    + Object.values(data || {}).filter(Array.isArray).reduce((n, rows) => n + rows.length, 0)
    + Object.values((data && data.matt) || {}).filter(r => r.uppmatt).length;
  return filled ? `${filled} uppgifter ifyllda` : 'Inte påbörjad';
}

async function jobView(id) {
  const job = await db.get('jobs', id);
  if (!job) { location.hash = '#/'; return; }
  upgradeJob(job);
  await fillFromProfile(job);
  setTitle(jobLabel(job), '#/');
  const save = debounce(async () => { job.updated = new Date().toISOString(); await db.put('jobs', job); }, 300);
  window.onpagehide = () => save.flush();
  const exportArea = h('div', { class: 'export' });
  const docItems = () => job.docs.map(k => {
    const form = docForm(job, k);
    if (!form) {
      return h('li', {}, h('div', { class: 'item' },
        h('span', { class: 'main' }, 'Växelbesiktningsrapport'),
        h('span', { class: 'sub' }, 'Välj växeltyp under Gemensamma uppgifter')));
    }
    return h('li', {}, h('a', { href: `#/jobb/${id}/${k}` },
      h('span', { class: 'main' }, `${form.title}`),
      h('span', { class: 'sub' }, `${form.code} · ${formProgress(form, job.forms[form.key])}`)));
  });
  const docList = h('ul', { class: 'list' }, docItems());

  render(
    h('h2', {}, 'Dokument'),
    docList,
    h('button', { class: 'button primary big', type: 'button', onclick: () => buildFiles(job, exportArea) }, 'Skapa filer'),
    exportArea,
    h('details', { class: 'card' },
      h('summary', {}, 'Gemensamma uppgifter'),
      sharedInputs(job, (k, v) => { job[k] = v; save(); if (k === 'vaxeltyp') docList.replaceChildren(...docItems()); })),
    h('button', {
      class: 'button danger', type: 'button',
      onclick: async () => {
        if (!confirm('Ta bort jobbet från telefonen? Det går inte att ångra.')) return;
        await db.del('jobs', id);
        location.hash = '#/';
      },
    }, 'Ta bort jobbet'),
  );
}

async function buildFiles(job, area) {
  area.replaceChildren(h('p', { class: 'muted' }, 'Skapar filer …'));
  const files = [];
  const problems = [];
  for (const key of job.docs) {
    const form = docForm(job, key);
    if (!form) { problems.push('Välj växeltyp för växelbesiktningsrapporten.'); continue; }
    const tpl = await db.get('templates', form.key);
    if (!tpl || (form.format === 'overlay' && !isPdf(tpl.data))) {
      problems.push(`PDF-mallen för ${form.title} saknas. Läs in den under Mallar.`); continue;
    }
    try {
      const values = form.toValues(job, job.forms[form.key] || {}, { diff });
      const blob = form.format === 'overlay'
        ? await fillOverlay(tpl.data, form.layout, values, { title: `${form.code} ${form.title}` })
        : form.format === 'word' ? await fillWord(tpl.data, values) : await fillPdf(tpl.data, values);
      files.push(new File([blob], fileName(form, job), { type: blob.type }));
    } catch (e) {
      console.error(e);
      problems.push(`${form.title}: ${e.message}`);
    }
  }

  const canShare = files.length && navigator.canShare && navigator.canShare({ files });
  area.replaceChildren(...[
    ...problems.map(p => h('p', { class: 'error' }, p)),
    canShare ? h('button', {
      class: 'button primary big', type: 'button',
      onclick: async () => {
        try { await navigator.share({ files, title: jobLabel(job) }); }
        catch (e) { if (e.name !== 'AbortError') alert('Kunde inte dela: ' + e.message); }
      },
    }, 'Dela filerna (Mail, Teams, OneDrive …)') : null,
    files.length ? h('ul', { class: 'files' }, files.map(f => h('li', {},
      h('a', { href: URL.createObjectURL(f), download: f.name }, f.name)))) : null,
  ].filter(Boolean));
}

function renderItem(item, data, onChange, job) {
  switch (item.type) {
    case 'label':
      return h('p', { class: 'sublabel' }, item.label);
    case 'shared':
      return h('div', { class: 'field shared' }, h('span', {}, item.label),
        h('output', {}, item.value ? item.value(job) || '–' : item.from === 'datum'
          ? (blankettDatum(job) ? blankettDatum(job) + (job.natt ? ' (nattarbete)' : '') : '–')
          : job[item.from] || '–'));
    case 'text': {
      // list: förslag att välja bland (man kan ändå skriva något annat).
      // placeholder: förval från jobbet, visas grått och används om rutan är tom.
      const listId = item.list ? `list-${item.key}-${Math.random().toString(36).slice(2, 8)}` : null;
      return h('label', { class: 'field' + (item.half ? ' half' : '') }, h('span', {}, item.label),
        h('input', { type: 'text', inputmode: item.inputmode, value: data[item.key] || '', autocomplete: 'off', list: listId,
          placeholder: item.placeholder ? item.placeholder(job) : null,
          oninput: e => onChange(item.key, e.target.value) }),
        item.list ? h('datalist', { id: listId }, item.list.map(v => h('option', { value: v }))) : null);
    }
    case 'textarea':
      return h('label', { class: 'field' }, h('span', {}, item.label),
        h('textarea', { rows: 3, oninput: e => onChange(item.key, e.target.value) }, data[item.key] || ''));
    case 'check':
      return h('label', { class: 'check' },
        h('input', { type: 'checkbox', checked: data[item.key], onchange: e => onChange(item.key, e.target.checked) }),
        h('span', {}, item.label));
    case 'radio': {
      const name = `r_${item.key}`;
      return h('fieldset', { class: 'segmented' },
        item.label ? h('legend', {}, item.label) : null,
        [...item.options, ''].map(opt => h('label', {},
          h('input', { type: 'radio', name, value: opt, checked: (data[item.key] || '') === opt,
            onchange: () => onChange(item.key, opt) }),
          h('span', {}, opt || 'Inget'))));
    }
    case 'plus':
      // Två sifferrutor med + emellan, t.ex. km + m.
      return h('div', { class: 'field plus' }, h('span', {}, item.label),
        h('div', { class: 'plus-row' }, item.keys.map((key, i) => [
          i ? h('span', { class: 'plus-sign' }, '+') : null,
          h('input', {
            type: 'text', inputmode: 'numeric', value: data[key] || '', autocomplete: 'off', 'aria-label': i ? 'm' : 'km',
            placeholder: item.placeholders?.[i] ? item.placeholders[i](job) : null,
            oninput: e => onChange(key, e.target.value),
          }),
        ]).flat()));
    case 'select':
      return h('label', { class: 'field' + (item.half ? ' half' : '') }, h('span', {}, item.label),
        h('select', { onchange: e => onChange(item.key, e.target.value) },
          ['', ...item.options].map(opt => h('option', { value: opt, selected: (data[item.key] || '') === opt }, opt || '–'))));
    case 'group': {
      const body = h('div', { class: 'group-body' }, item.items.map(i => renderItem(i, data, onChange, job)));
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

// Upprepade rader, t.ex. svetsar. Varje rad har samma fält. En ny rad får innehållet från
// raden före (eller den senaste raden från ett tidigare jobb) via item.newRow.
function rowsEditor(item, data, onChange, job) {
  const list = data[item.key] = data[item.key] || [];
  const wrap = h('div', { class: 'rows' });
  const fields = row => {
    const out = [];
    for (let i = 0; i < item.fields.length; i++) {
      const f = item.fields[i];
      const one = x => renderItem(x, row, (k, v) => { row[k] = v; onChange(item.key, list); }, job);
      // row: antal fält bredvid varandra, half: två.
      const n = f.row || (f.half && item.fields[i + 1]?.half ? 2 : 1);
      if (n > 1) { out.push(h('div', { class: 'row' }, item.fields.slice(i, i + n).map(one))); i += n - 1; } else out.push(one(f));
    }
    return out;
  };
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
            list.push(item.newRow(list[list.length - 1] || remembered[`${item.form}.${item.key}`]));
            onChange(item.key, list); draw();
            wrap.querySelectorAll('.rowcard')[list.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
          },
        }, item.addLabel)
      : h('p', { class: 'muted note' }, `Blanketten har plats för ${item.max}. Gör ett nytt jobb för fler.`));
  draw();
  return wrap;
}

// Senast använda värden för fält med remember, se formView.
let remembered = {};

// Visar en bild i helskärm. Den går att rulla i sidled och nypa för att zooma.
function showImage(src, alt) {
  const close = () => overlay.remove();
  const overlay = h('div', { class: 'overlay', role: 'dialog', 'aria-label': alt },
    h('button', { type: 'button', class: 'close', onclick: close, 'aria-label': 'Stäng' }, '✕'),
    h('div', { class: 'overlay-scroll' }, h('img', { src, alt })));
  document.body.append(overlay);
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
      if (col === 'uppmatt') uppInputs.push({ input, tas: tas(m) });
      return input;
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
        item.keys.map(m => {
          const row = data.matt[m] || {};
          const out = h('output', {}, diff(effektiv(row, 'normal', auto.normal[m]), row.uppmatt));
          return h('div', { class: tas(m) ? 'mrow' : 'mrow skip' }, h('span', { class: 'mname' }, m), cell(m, 'normal', out), cell(m, 'tolerans', out), cell(m, 'uppmatt', out), out);
        })));
  };
  draw();
  wrap.refresh = draw;
  return wrap;
}

async function formView(id, key) {
  const job = await db.get('jobs', id);
  const form = job && docForm(upgradeJob(job), key);
  if (!job || !form) { location.hash = '#/'; return; }
  await fillFromProfile(job);
  setTitle(form.title, `#/jobb/${id}`);
  const data = job.forms[form.key] = job.forms[form.key] || {};
  const save = debounce(async () => { job.updated = new Date().toISOString(); await db.put('jobs', job); }, 300);
  // Fält med remember får förra jobbets värde, t.ex. enhet och svetsansvarig.
  remembered = await db.getSetting('remember', {});
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
  const onChange = (k, v) => {
    data[k] = v; save();
    if (remember.has(k)) {
      remembered[`${form.key}.${k}`] = Array.isArray(v) ? v[v.length - 1] : v;
      if (remembered[`${form.key}.${k}`] === undefined) delete remembered[`${form.key}.${k}`];
      saveRemembered();
    }
    if (['typ', 'besiktningsklass', 'radie'].includes(k)) document.querySelectorAll('.measures-wrap').forEach(w => w.refresh());
  };

  render(
    h('p', { class: 'muted' }, `${form.code}. Uppgifter i grått hämtas från jobbet.`),
    ...form.sections.map(section => h('section', { class: 'card' },
      h('h2', {}, section.title),
      section.help ? h('p', { class: 'muted' }, section.help) : null,
      section.items.map(item => renderItem(item, data, onChange, job)))),
    h('a', { class: 'button primary big', href: `#/jobb/${id}`, onclick: () => save.flush() }, 'Klar'),
  );
}

async function templatesView() {
  setTitle('Mallar', '#/installningar');
  const templates = await db.getAll('templates');
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
        h('span', { class: 'main' }, `${t ? '✓' : '○'} ${form.title}`),
        h('span', { class: 'sub' }, t ? `Inläst: ${t.name}` : `Saknas: ${form.templateHint}`)));
    })),
    h('button', { class: 'button primary big', type: 'button', onclick: () => input.click() }, 'Läs in mallar från Filer'),
    input,
    status,
  );
}

async function settingsView() {
  setTitle('Inställningar', '#/');
  const profile = await db.getSetting('profile', {});
  // Uppgifterna låg först i svetsrapporten; ta med dem som redan skrivits där.
  const rem = await db.getSetting('remember', {});
  for (const [k, r] of [['enhet', 'svets.enhet'], ['svetsansvarig', 'svets.ansvarig'], ['svetsansvarig_tel', 'svets.telefon']]) {
    if (!profile[k] && rem[r]) profile[k] = rem[r];
  }
  const save = debounce(() => db.setSetting('profile', profile), 300);
  render(
    h('a', { class: 'button big', href: '#/mallar' }, 'Blankettmallar'),
    h('h2', {}, 'Förval för nya jobb'),
    h('div', { class: 'card' }, sharedInputs(profile, (k, v) => { profile[k] = v; save(); }, { only: PROFILE_KEYS })),
    h('h2', {}, 'Om appen'),
    h('p', { class: 'muted' }, 'Allt du fyller i och alla mallar sparas bara i den här telefonen. Inget skickas till någon server. Filerna lämnar telefonen först när du delar dem.'),
  );
}

// ---------- Routning ----------

async function route() {
  window.onpagehide = null;
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  try {
    if (parts[0] === 'nytt') await newJobView();
    else if (parts[0] === 'jobb' && parts[2]) await formView(parts[1], parts[2]);
    else if (parts[0] === 'jobb') await jobView(parts[1]);
    else if (parts[0] === 'mallar') await templatesView();
    else if (parts[0] === 'installningar') await settingsView();
    else await homeView();
  } catch (e) {
    console.error(e);
    render(h('p', { class: 'error' }, 'Något gick fel: ' + e.message));
  }
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => {
  db.persist();
  route();
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js');
  }
});
