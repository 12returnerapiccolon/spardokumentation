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
