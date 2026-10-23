// Fyller PDF-formulär (AcroForm) med pdf-lib. Fälten adresseras med sina fullständiga namn.

/**
 * values: { [fältnamn]: string | boolean }
 * Returnerar en Blob med en .pdf-fil. Fälten lämnas redigerbara.
 */
export async function fillPdf(templateBuffer, values, { title } = {}) {
  const { PDFDocument, PDFTextField, PDFDropdown, PDFCheckBox, rgb } = PDFLib;
  const pdf = await PDFDocument.load(templateBuffer);
  const form = pdf.getForm();
  const pages = pdf.getPages();
  // Kryssen ritas som linjer efter tillplattningen. Mallens kryss är ett ZapfDingbats-tecken
  // som inte bäddas in och blir ett streck i en del PDF-läsare (2026-10-22).
  const kryss = [];
  const helv = await pdf.embedFont(PDFLib.StandardFonts.Helvetica);
  const sidaFor = widget => {
    const ref = pdf.context.getObjectRef(widget.dict);
    return pages.find(p => (p.node.Annots()?.asArray() || []).some(a => a === ref)) || pages[0];
  };
  for (const [name, value] of Object.entries(values)) {
    const field = form.getFieldMaybe(name);
    if (!field) throw new Error(`Fältet ${name} finns inte i PDF-mallen`);
    if (field instanceof PDFCheckBox) {
      field.uncheck();
      if (value) for (const w of field.acroField.getWidgets()) kryss.push([sidaFor(w), w.getRectangle()]);
    } else if (field instanceof PDFDropdown) {
      const v = value || ' ';
      if (field.getOptions().includes(v)) field.select(v);
    } else if (field instanceof PDFTextField) {
      // Mallen 1481 skriver snedstrecket i DA som \057, som pdf-lib inte läser. Då tappas
      // textstorleken och flerradiga fält får jättestor text.
      const da = field.acroField.getDefaultAppearance() || '';
      if (da.includes('\\057')) field.acroField.setDefaultAppearance(da.replaceAll('\\057', '/'));
      field.setText(value == null ? '' : String(value));
      // Får texten inte plats i fältets storlek krymps den, i stället för att klippas av (2026-10-23).
      const sz = passa(field, value == null ? '' : String(value), helv);
      if (sz) field.setFontSize(sz);
    }
  }
  // Fälten plattas till så att det ifyllda inte går att ändra hos mottagaren, och mallens
  // uppgifter om vem som gjort den byts mot appens (2026-10-21).
  form.flatten();
  for (const [page, { x, y, width: w, height: h }] of kryss) {
    const m = Math.min(w, h) * 0.2;
    const ink = rgb(0, 0, 0);
    page.drawLine({ start: { x: x + m, y: y + m }, end: { x: x + w - m, y: y + h - m }, thickness: 1, color: ink });
    page.drawLine({ start: { x: x + m, y: y + h - m }, end: { x: x + w - m, y: y + m }, thickness: 1, color: ink });
  }
  if (title) pdf.setTitle(title);
  pdf.setSubject('');
  pdf.setAuthor('');
  pdf.setKeywords([]);
  pdf.setProducer('Svetsjobb');
  pdf.setCreator('Svetsjobb');
  const bytes = await pdf.save();
  return new Blob([bytes], { type: 'application/pdf' });
}

// Textstorlek som får plats i fältet, eller null om mallens storlek räcker. Flerradiga fält
// radbryts. Aldrig mindre än 4 pt.
function passa(field, text, helv) {
  if (!text) return null;
  const da = field.acroField.getDefaultAppearance() || '';
  const storlek = Number((/([\d.]+)\s+Tf/.exec(da) || [])[1]) || 0;
  if (!storlek) return null;
  const rect = field.acroField.getWidgets()[0]?.getRectangle();
  if (!rect) return null;
  const bredd = rect.width - 4, hojd = rect.height - 2;
  const multi = field.isMultiline();
  const ryms = sz => {
    if (!multi) return helv.widthOfTextAtSize(text.replace(/\s+/g, ' '), sz) <= bredd && sz <= hojd;
    let rader = 0;
    for (const para of text.split(/\r?\n/)) {
      let line = ''; rader++;
      for (const word of para.split(/\s+/)) {
        const next = line ? `${line} ${word}` : word;
        if (line && helv.widthOfTextAtSize(next, sz) > bredd) { rader++; line = word; } else line = next;
      }
    }
    return rader * sz * 1.16 <= hojd;
  };
  if (ryms(storlek)) return null;
  let sz = storlek;
  while (sz > 4 && !ryms(sz)) sz -= 0.5;
  return sz;
}

// Text som inte får plats i sitt fält i minst 5 pt: [fält, text] (2026-10-23).
export async function pdfForTrangt(templateBuffer, values) {
  const pdf = await PDFLib.PDFDocument.load(templateBuffer);
  const form = pdf.getForm();
  const helv = await pdf.embedFont(PDFLib.StandardFonts.Helvetica);
  const ut = [];
  for (const [name, value] of Object.entries(values)) {
    const field = form.getFieldMaybe(name);
    if (!(field instanceof PDFLib.PDFTextField) || !value) continue;
    const sz = passa(field, String(value), helv);
    if (sz && sz < 5) ut.push([name, String(value)]);
  }
  return ut;
}

export async function pdfInfo(buffer) {
  const pdf = await PDFLib.PDFDocument.load(buffer);
  return { fieldNames: pdf.getForm().getFields().map(f => f.getName()), subject: pdf.getSubject() || '' };
}
