// Avsnitt ur regelverken som text och riktiga tabeller i telefonformat (2026-10-22), i stället för
// en bild av sidan. Originalet går att visa som bild. Texten ligger i js/forms/regelverk-text.js
// (tools/regelverk_text.py) och hämtas först när ett avsnitt öppnas.

let data = null;
const hamta = async () => (data ||= (await import('./forms/regelverk-text.js')).default);

// Visar avsnittet som text om det finns avskrivet, annars originalbilden.
// src: originalbilden img/tdok/<namn>.png, alt: dess beskrivning.
export async function visaAvsnitt(h, showImage, src, alt) {
  const namn = (src.match(/img\/tdok\/([^/]+)\.png$/) || [])[1];
  let a;
  try { a = namn && (await hamta())[namn]; } catch { a = null; }
  if (!a) return showImage(src, alt);
  const close = () => overlay.remove();
  const original = () => h('button', { type: 'button', class: 'button info-image', onclick: () => showImage(src, alt) }, '🖼 Visa originalet som bild');
  const overlay = h('div', { class: 'overlay guide regelverk', role: 'dialog', 'aria-label': `${a.dok} ${a.rubrik}` },
    h('button', { type: 'button', class: 'close', onclick: close, 'aria-label': 'Stäng' }, '✕'),
    h('h2', {}, a.rubrik),
    h('p', { class: 'muted note' }, a.dok),
    original(),
    h('div', { class: 'rv-text' }, block(h, a.block, showImage)),
    original());
  document.body.append(overlay);
}

function block(h, lista, showImage) {
  const ut = [];
  let rad = null; // Råd, Förutsättning m.m. samlas i en ruta tills nästa krav eller rubrik
  const lagg = el => (rad ? rad.append(el) : ut.push(el));
  for (const b of lista) {
    const [typ] = b;
    if (typ === 'h' || typ === 'k' || typ === 'etikett') rad = null;
    if (typ === 'h') ut.push(h('h3', {}, b[1]));
    else if (typ === 'k') ut.push(h('p', { class: 'rv-krav' }, b[1]));
    else if (typ === 'etikett') { rad = h('div', { class: 'rv-rad' }, h('strong', {}, b[1])); ut.push(rad); }
    else if (typ === 'p') {
      const t = b[1];
      const klass = /^Tabell\s/.test(t) ? 'rv-tabelltitel' : /^([¹²³⁴⁵⁶⁷⁸⁹\d]\)|\*)/.test(t) ? 'rv-fotnot' : null;
      lagg(h('p', { class: klass }, t));
    } else if (typ === 'li') {
      const [, niva, mark, t] = b;
      lagg(h('div', { class: 'rv-li', style: `margin-left: ${Math.max(0, niva - 1) * 1.2}em` },
        h('span', { class: 'rv-mark' }, /^[o•–-]$/.test(mark) ? '•' : mark), h('span', {}, t)));
    } else if (typ === 'tabell') {
      // Rubrikrader: första raden och raderna efter den utan siffervärden.
      let rubrik = true;
      lagg(h('div', { class: 'rv-tabell' }, h('table', {}, b[1].map((r, i) => {
        rubrik = rubrik && (i === 0 || !r.some(([t]) => /^[\d+\-–±≤≥<>]/.test(t.trim())));
        return h('tr', {}, r.map(([t, cs, rs]) => h(rubrik ? 'th' : 'td', { colspan: cs > 1 ? cs : null, rowspan: rs > 1 ? rs : null }, t)));
      }))));
    } else if (typ === 'figur') {
      const [, src, text] = b;
      lagg(h('figure', { class: 'rv-figur' },
        h('button', { type: 'button', class: 'visa', onclick: () => showImage(src, text || 'Figur'), 'aria-label': 'Förstora bilden' }, h('img', { src, alt: text || 'Figur', loading: 'lazy' })),
        text ? h('figcaption', {}, text) : null));
    }
  }
  return ut;
}
