// Fyller PDF-formulär (AcroForm) med pdf-lib. Fälten adresseras med sina fullständiga namn.

/**
 * values: { [fältnamn]: string | boolean }
 * Returnerar en Blob med en .pdf-fil. Fälten lämnas redigerbara.
 */
export async function fillPdf(templateBuffer, values) {
  const { PDFDocument, PDFTextField, PDFDropdown, PDFCheckBox } = PDFLib;
  const pdf = await PDFDocument.load(templateBuffer);
  const form = pdf.getForm();
  for (const [name, value] of Object.entries(values)) {
    const field = form.getFieldMaybe(name);
    if (!field) throw new Error(`Fältet ${name} finns inte i PDF-mallen`);
    if (field instanceof PDFCheckBox) {
      value ? field.check() : field.uncheck();
    } else if (field instanceof PDFDropdown) {
      const v = value || ' ';
      if (field.getOptions().includes(v)) field.select(v);
    } else if (field instanceof PDFTextField) {
      field.setText(value == null ? '' : String(value));
    }
  }
  const bytes = await pdf.save();
  return new Blob([bytes], { type: 'application/pdf' });
}

export async function pdfInfo(buffer) {
  const pdf = await PDFLib.PDFDocument.load(buffer);
  return { fieldNames: pdf.getForm().getFields().map(f => f.getName()) };
}
