// Fyller äldre Word-formulärfält (FORMTEXT/FORMCHECKBOX) i en .dotx/.docx-mall.
// Fältnamnen i mallarna är inte unika, så fälten adresseras efter ordning (0, 1, 2 ...)
// i word/document.xml.
const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
const XML_NS = 'http://www.w3.org/XML/1998/namespace';

// Hitta alla formulärfält i dokumentordning.
function formFields(doc) {
  const runs = Array.from(doc.getElementsByTagNameNS(W, 'r'));
  const fields = [];
  runs.forEach((run, i) => {
    const fc = firstChild(run, 'fldChar');
    if (!fc || fc.getAttributeNS(W, 'fldCharType') !== 'begin') return;
    const ff = firstChild(fc, 'ffData');
    if (!ff) return;
    const checkBox = firstChild(ff, 'checkBox');
    const textInput = firstChild(ff, 'textInput');
    if (checkBox) fields.push({ type: 'check', checkBox });
    else if (textInput) fields.push({ type: 'text', runs, start: i, textInput });
  });
  return fields;
}

function firstChild(el, localName) {
  for (const c of el.childNodes) if (c.nodeType === 1 && c.localName === localName && c.namespaceURI === W) return c;
  return null;
}

function setCheck(field, on) {
  const cb = field.checkBox;
  const old = firstChild(cb, 'checked');
  if (old) cb.removeChild(old);
  if (on) cb.appendChild(cb.ownerDocument.createElementNS(W, 'w:checked'));
}

function setText(field, value) {
  const { runs, start } = field;
  // Resultatet ligger mellan fldChar separate och fldChar end.
  let i = start + 1;
  while (i < runs.length) {
    const fc = firstChild(runs[i], 'fldChar');
    i++;
    if (fc && fc.getAttributeNS(W, 'fldCharType') === 'separate') break;
  }
  const resultRuns = [];
  for (; i < runs.length; i++) {
    const fc = firstChild(runs[i], 'fldChar');
    if (fc && fc.getAttributeNS(W, 'fldCharType') === 'end') break;
    resultRuns.push(runs[i]);
  }
  if (!resultRuns.length) throw new Error('Formulärfältet saknar resultat');
  const target = resultRuns[0];
  for (const r of resultRuns) {
    for (const t of Array.from(r.getElementsByTagNameNS(W, 't'))) t.textContent = '';
  }
  let t = target.getElementsByTagNameNS(W, 't')[0];
  if (!t) {
    t = target.ownerDocument.createElementNS(W, 'w:t');
    target.appendChild(t);
  }
  t.setAttributeNS(XML_NS, 'xml:space', 'preserve');
  t.textContent = value;
}

/**
 * values: { [fältindex]: string | boolean }
 * Returnerar en Blob med en .docx-fil.
 */
export async function fillWord(templateBuffer, values) {
  const zip = await JSZip.loadAsync(templateBuffer);
  const xml = await zip.file('word/document.xml').async('string');
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  if (doc.getElementsByTagName('parsererror').length) throw new Error('Kunde inte läsa Word-mallen');
  const fields = formFields(doc);
  for (const [key, value] of Object.entries(values)) {
    const field = fields[Number(key)];
    if (!field) throw new Error(`Fält ${key} finns inte i mallen`);
    if (field.type === 'check') setCheck(field, !!value);
    // Tomma fält lämnas som i mallen, så att tabellernas bredd inte ändras.
    else if (value != null && value !== '') setText(field, String(value));
  }
  zip.file('word/document.xml', new XMLSerializer().serializeToString(doc));
  // En mall (.dotx) blir ett vanligt dokument (.docx).
  const ct = await zip.file('[Content_Types].xml').async('string');
  zip.file('[Content_Types].xml', ct.replace('wordprocessingml.template.main+xml', 'wordprocessingml.document.main+xml'));
  return zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  });
}

// Används när en mall läses in: kontrollera att det är rätt blankett.
export async function wordInfo(buffer) {
  const zip = await JSZip.loadAsync(buffer);
  const file = zip.file('word/document.xml');
  if (!file) throw new Error('Filen är inte ett Word-dokument');
  const xml = await file.async('string');
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const text = Array.from(doc.getElementsByTagNameNS(W, 't')).map(t => t.textContent).join('');
  return { text, fieldCount: formFields(doc).length };
}
