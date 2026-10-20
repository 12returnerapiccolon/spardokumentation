// Bilder i ett jobb: före, efter samt rälsmärkning och komponentbrickor (2026-10-19). Bilderna görs om
// till JPEG i telefonen när de läggs till (iPhone tar HEIC) och sparas bara i telefonen.
import * as db from './db.js';

export const BILDTYPER = [
  { key: 'fore', label: 'Före' },
  { key: 'efter', label: 'Efter' },
  // Snedstreck går inte i filnamn, därför ett eget filnamn.
  { key: 'markning', label: 'Rälsmärkning/bricka', fil: 'Rälsmärkning-bricka' },
];
const STORSTA = 2400; // längsta sida i pixlar
const KVALITET = 0.85;

async function avkoda(file) {
  if (window.createImageBitmap) {
    try { return await createImageBitmap(file, { imageOrientation: 'from-image' }); } catch { /* prova img */ }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  } finally { URL.revokeObjectURL(url); }
}

export async function tillJpeg(file) {
  const bild = await avkoda(file);
  const w0 = bild.width || bild.naturalWidth, h0 = bild.height || bild.naturalHeight;
  const skala = Math.min(1, STORSTA / Math.max(w0, h0));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(w0 * skala); canvas.height = Math.round(h0 * skala);
  canvas.getContext('2d').drawImage(bild, 0, 0, canvas.width, canvas.height);
  if (bild.close) bild.close();
  return new Promise((resolve, reject) => canvas.toBlob(b => (b ? resolve(b) : reject(new Error('Kunde inte göra om bilden till JPEG'))), 'image/jpeg', KVALITET));
}

export async function laggTill(jobId, typ, files) {
  for (const file of files) {
    const data = await tillJpeg(file);
    await db.put('bilder', { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random(), jobId, typ, data, added: new Date().toISOString() });
  }
}

export async function jobbetsBilder(jobId) {
  return (await db.getAllBy('bilder', 'jobId', jobId)).sort((a, b) => a.added.localeCompare(b.added));
}

export async function taBortAlla(jobId) {
  for (const b of await jobbetsBilder(jobId)) await db.del('bilder', b.id);
}

// Filerna som skickas med: "<jobbnamn> Före 1.jpg" osv.
export async function bildfiler(jobId, namn) {
  const bilder = await jobbetsBilder(jobId);
  return BILDTYPER.flatMap(t => bilder.filter(b => b.typ === t.key)
    .map((b, i, list) => new File([b.data], `${namn} ${t.fil || t.label}${list.length > 1 ? ` ${i + 1}` : ''}.jpg`, { type: 'image/jpeg' })));
}

// Bildgrupp ur ett filnamn som bildfiler gjort, t.ex. "… Efter 2.jpg". Okänt namn blir Före.
export function bildtypUrNamn(namn) {
  const t = BILDTYPER.find(t => new RegExp(` ${(t.fil || t.label).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}( \\d+)?\\.jpe?g$`, 'i').test(namn));
  return t ? t.key : 'fore';
}

// Bildens innehåll som text, för att känna igen samma bild igen.
async function fingeravtryck(blob) {
  const buf = await blob.arrayBuffer();
  if (crypto.subtle) return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', buf)), b => b.toString(16).padStart(2, '0')).join('');
  return `${buf.byteLength}:${Array.from(new Uint8Array(buf, 0, Math.min(4096, buf.byteLength))).join(',')}`;
}

// Bilder från ett importerat jobb läggs till bland jobbets bilder (2026-10-20). De är
// redan JPEG och sparas som de är. En bild som redan finns i jobbet, eller två gånger i
// importen, hoppas över. Svarar med antalet nya bilder.
export async function laggTillImporterade(jobId, bilder) {
  const finns = new Set(await Promise.all((await jobbetsBilder(jobId)).map(b => fingeravtryck(b.data))));
  const start = Date.now();
  let nya = 0;
  for (const [i, b] of bilder.entries()) {
    const fa = await fingeravtryck(b.data);
    if (finns.has(fa)) continue;
    finns.add(fa);
    await db.put('bilder', { id: crypto.randomUUID ? crypto.randomUUID() : String(start + i) + Math.random(), jobId, typ: b.typ, data: b.data, added: new Date(start + i).toISOString() });
    nya++;
  }
  return nya;
}
