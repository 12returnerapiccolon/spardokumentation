// Jobb i PDF-filerna (2026-10-20): appen lägger jobbets uppgifter i varje PDF den skapar,
// så att t.ex. en arbetsledare kan förbereda ett jobb och skicka filerna till en tekniker som
// importerar dem i appen. Uppgifterna ligger i PDF:ens dokumentinformation och syns inte när
// filen öppnas eller skrivs ut, så den som saknar appen kan fylla i blanketterna på papper.
const NYCKEL = 'SpardokumentationJobb';
// Avsändarens egna uppgifter följer inte med; mottagaren har sina egna under Inställningar.
const EGNA = ['namn', 'namn_tel', 'svetsid'];

// bildsidor: bildgruppen för varje bildsida sist i den sammanslagna PDF:en.
export function jobbText(job, bildsidor) {
  const kopia = { ...job };
  for (const k of [...EGNA, 'skickad', 'status', 'importerad']) delete kopia[k];
  return JSON.stringify({ version: 1, job: kopia, ...(bildsidor?.length ? { bildsidor } : {}) });
}

export async function laggIJobb(blob, text) {
  const { PDFDocument, PDFName, PDFHexString } = PDFLib;
  const doc = await PDFDocument.load(await blob.arrayBuffer(), { updateMetadata: false });
  doc.getInfoDict().set(PDFName.of(NYCKEL), PDFHexString.fromText(text));
  return new Blob([await doc.save()], { type: 'application/pdf' });
}

// Jobbet i en PDF, eller null om filen inte kommer från appen. I den sammanslagna PDF:en
// ligger bilderna som de sista sidorna; bildsidor i jobbet säger vilken grupp varje sida är.
export async function lasJobb(file) {
  const { PDFDocument, PDFName, PDFRawStream, PDFDict } = PDFLib;
  let doc;
  try { doc = await PDFDocument.load(await file.arrayBuffer(), { updateMetadata: false, ignoreEncryption: true }); } catch { return null; }
  const varde = doc.getInfoDict().get(PDFName.of(NYCKEL));
  if (!varde || !varde.decodeText) return null;
  let data;
  try { data = JSON.parse(varde.decodeText()); } catch { return null; }
  if (!data.job) return null;
  const bilder = [];
  const typer = data.bildsidor || [];
  if (typer.length) {
    doc.getPages().slice(-typer.length).forEach((sida, i) => {
      const xo = sida.node.Resources()?.lookup(PDFName.of('XObject'), PDFDict);
      const ref = xo && xo.values()[0];
      const strom = ref && doc.context.lookup(ref);
      if (strom instanceof PDFRawStream) bilder.push({ typ: typer[i], data: new Blob([strom.contents], { type: 'image/jpeg' }) });
    });
  }
  return { job: data.job, bilder };
}
