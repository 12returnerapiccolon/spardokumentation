// Fyller en tom PDF-mall (en Word-blankett utskriven till PDF) genom att skriva text och
// kryss på fältens platser. Platserna kommer ur en layout som tagits fram ur Word-mallen:
// text: fältindex → [sida, x, baslinje, teckenstorlek, justering, största bredd?, höjd?]
// Med höjd radbryts texten inom rutan, uppifrån (baslinjen är då rutans nederkant). Med
// layout.mittHojd står de radbrutna raderna i stället mitt i rutan i höjdled.
// check: fältindex → [sida, x, y, bredd, höjd]
// skala: { s, x, y } förstorar mallens sidor med s och flyttar dem x, y pt på utskriften, och
// fälten följer med. IBT blev annars smalare än originalet i Excel (2026-10-22).

let fontBytes;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error(`Kunde inte läsa ${src}`));
    document.head.append(s);
  });
}

// Typsnittet behövs för tecken som ≥ och −, som PDF:ens standardtypsnitt saknar.
async function font(pdf) {
  if (!window.fontkit) await loadScript('vendor/fontkit.min.js');
  if (!fontBytes) fontBytes = await (await fetch('vendor/LiberationSans-Regular.ttf')).arrayBuffer();
  pdf.registerFontkit(window.fontkit);
  return pdf.embedFont(fontBytes, { subset: true });
}

// Radbryter text inom en ruta. Får den inte plats krymps texten.
function drawWrapped(page, value, { x, base, size, maxWidth, height, align, font, color, mitt }) {
  const lines = s => {
    const out = [];
    for (const para of value.split(/\r?\n/)) {
      let line = '';
      for (const word of para.split(/\s+/)) {
        const next = line ? `${line} ${word}` : word;
        if (line && font.widthOfTextAtSize(next, s) > maxWidth) { out.push(line); line = word; } else line = next;
      }
      out.push(line);
    }
    return out;
  };
  let s = size, l = lines(s);
  const forBred = () => l.some(t => font.widthOfTextAtSize(t, s) > maxWidth);
  while (s > 4 && (l.length * s * 1.15 > height - 1 || forBred())) { s -= 0.5; l = lines(s); }
  const top = base + height - 1.5;
  const mid = base + height / 2;
  l.forEach((line, i) => {
    const w = font.widthOfTextAtSize(line, s);
    const left = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
    const y = mitt ? mid + ((l.length - 1) / 2 - i) * s * 1.15 - s * 0.36 : top - s * (1 + i * 1.15);
    page.drawText(line, { x: left, y, size: s, font, color });
  });
}

export function isPdf(buffer) {
  const head = new Uint8Array(buffer, 0, 5);
  return String.fromCharCode(...head) === '%PDF-';
}

/**
 * values: { [fältindex]: string | boolean }, samma som för Word-mallen.
 * Returnerar en Blob med en .pdf-fil.
 */
export async function fillOverlay(blankBuffer, layout, values, { title } = {}) {
  const { PDFDocument, rgb } = PDFLib;
  const pdf = await PDFDocument.load(blankBuffer);
  const f = await font(pdf);
  let pages = pdf.getPages();
  if (layout.skala) {
    const { s, x: dx, y: dy } = layout.skala;
    const sidor = await pdf.embedPages(pages);
    const storlek = pages.map(p => p.getSize());
    pages.forEach(() => pdf.removePage(0));
    pages = sidor.map((sida, i) => {
      const p = pdf.addPage([storlek[i].width, storlek[i].height]);
      p.drawPage(sida, { x: dx, y: dy, xScale: s, yScale: s });
      return p;
    });
    const ruta = ([p, x, y, w, h]) => [p, s * x + dx, s * y + dy, w * s, h * s];
    layout = {
      ...layout,
      text: Object.fromEntries(Object.entries(layout.text).map(([k, [p, x, base, size, align, maxW, h]]) =>
        [k, [p, s * x + dx, s * base + dy, size * s, align, maxW && maxW * s, h && h * s]])),
      check: Object.fromEntries(Object.entries(layout.check || {}).map(([k, v]) => [k, ruta(v)])),
      tack: layout.tack && Object.fromEntries(Object.entries(layout.tack).map(([k, v]) => [k, ruta(v)])),
    };
  }
  const ink = rgb(0, 0, 0);

  for (const [key, value] of Object.entries(values)) {
    const box = layout.check[key];
    if (box) {
      if (!value) continue;
      const [p, x, y, w, h] = box;
      const page = pages[p];
      const m = Math.min(w, h) * 0.15;
      page.drawLine({ start: { x: x + m, y: y + m }, end: { x: x + w - m, y: y + h - m }, thickness: 0.7, color: ink });
      page.drawLine({ start: { x: x + m, y: y + h - m }, end: { x: x + w - m, y: y + m }, thickness: 0.7, color: ink });
      continue;
    }
    const pos = layout.text[key];
    if (!pos) throw new Error(`Fält ${key} finns inte i mallen`);
    if (value == null || value === '' || value === true || value === false) continue;
    const [p, x, base, fullSize, align, maxWidth, height] = pos;
    // layout.tack: mallens egen text på platsen täcks först, t.ex. radnumren på svetsrapportens
    // andra blankett (2026-10-21).
    const tack = layout.tack?.[key];
    if (tack) pages[tack[0]].drawRectangle({ x: tack[1], y: tack[2], width: tack[3], height: tack[4], color: rgb(1, 1, 1) });
    if (height) {
      drawWrapped(pages[p], String(value), { x, base, size: fullSize, maxWidth, height, align, font: f, color: ink, mitt: layout.mittHojd });
      continue;
    }
    const text = String(value).replace(/\s+/g, ' ');
    // Krymp texten om den inte får plats i rutan.
    let size = fullSize;
    let width = f.widthOfTextAtSize(text, size);
    if (maxWidth && width > maxWidth) {
      size = Math.max(4, size * maxWidth / width);
      width = f.widthOfTextAtSize(text, size);
    }
    const left = align === 'center' ? x - width / 2 : align === 'right' ? x - width : x;
    // På prickade linjer täcks prickarna under texten så att den inte ser överstruken ut.
    if (layout.tackPrickar?.includes(key)) {
      pages[p].drawRectangle({ x: left - 2, y: base - 1.5, width: width + 4, height: size * 0.9 + 1.5, color: rgb(1, 1, 1) });
    }
    pages[p].drawText(text, { x: left, y: base, size, font: f, color: ink });
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
