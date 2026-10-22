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

export async function pdfInfo(buffer) {
  const pdf = await PDFLib.PDFDocument.load(buffer);
  return { fieldNames: pdf.getForm().getFields().map(f => f.getName()), subject: pdf.getSubject() || '' };
}
