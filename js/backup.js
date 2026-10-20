// Säkerhetskopia (2026-10-20): alla jobb, inställningar, mallar och bilder i en zip-fil som
// svetsaren sparar i Filer. Safari kan rensa en webbsidas lagring, så kopian är enda sättet
// att få tillbaka jobben. Filen stannar hos svetsaren; inget skickas någonstans.
import * as db from './db.js';

const VERSION = 1;

export async function skapaKopia() {
  const zip = new JSZip();
  const [jobs, settings, templates, bilder] = await Promise.all(['jobs', 'settings', 'templates', 'bilder'].map(s => db.getAll(s)));
  const data = {
    version: VERSION, skapad: new Date().toISOString(), jobs, settings,
    templates: templates.map(({ data: buf, ...t }) => { zip.file(`mallar/${t.key}`, buf); return t; }),
    bilder: bilder.map(({ data: blob, ...b }) => { zip.file(`bilder/${b.id}.jpg`, blob); return b; }),
  };
  zip.file('data.json', JSON.stringify(data));
  const blob = await zip.generateAsync({ type: 'blob' });
  const datum = new Date().toLocaleDateString('sv-SE');
  return new File([blob], `Spårdokumentation säkerhetskopia ${datum}.zip`, { type: 'application/zip' });
}

// Läser in en kopia. Jobb, mallar och bilder med samma id skrivs över, övrigt i telefonen
// ligger kvar.
export async function lasInKopia(file) {
  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  const json = zip.file('data.json');
  if (!json) throw new Error('Filen är ingen säkerhetskopia från appen.');
  const data = JSON.parse(await json.async('string'));
  for (const job of data.jobs || []) await db.put('jobs', job);
  for (const s of data.settings || []) await db.put('settings', s);
  for (const t of data.templates || []) {
    const f = zip.file(`mallar/${t.key}`);
    if (f) await db.put('templates', { ...t, data: await f.async('arraybuffer') });
  }
  for (const b of data.bilder || []) {
    const f = zip.file(`bilder/${b.id}.jpg`);
    if (f) await db.put('bilder', { ...b, data: new Blob([await f.async('arraybuffer')], { type: 'image/jpeg' }) });
  }
  return { jobb: (data.jobs || []).length, skapad: data.skapad };
}
