// Bedömningsstöden ur TDOK 2021:0311 och 0334 som kort i telefonformat (2026-10-22): en
// fällbar rad per besiktningspunkt med Råd och Akut/V/M/B under varandra i stället för en
// bred tabell. Texterna är avskrivna från tabellerna (js/forms/bedomning-kort.js), och
// tabellen finns kvar som bild längst ned.

const NIVAER = [['akut', 'Akut', 'A-anm'], ['v', 'V', 'V-anm'], ['m', 'M', 'M-anm'], ['b', 'B', 'B-anm']];
const tom = t => !t || /^inte aktuellt\.?$/i.test(t.trim());
// Besiktningspunkten utan numrering, t.ex. "1, 2 - a. Slirsår" → "Slirsår".
export const punktNamn = p => p.replace(/^[\d\s,a-z.–-]*?(?=[A-ZÅÄÖ])/, '').trim() || p;
const stycken = (h, t) => t.split('\n').map(s => h('p', {}, s));

// kort: { namn, intro, rader: [{ punkt, rad, akut, v, m, b, tabell? }] }. bild: [src, alt] för
// showImage. anm(rad): lägger en anmärkning i IBT och svarar med radens nummer, 'full' eller
// 'last'; saknas den visas inga knappar. anl: anläggningen, t.ex. avsnittets rubrik.
export function visaBedomning(h, { kort, bild, showImage, anm, anl }) {
  const close = () => overlay.remove();
  const knapp = (rad, [key, , prio]) => anm && !tom(rad[key]) ? h('button', {
    type: 'button', class: 'button liten',
    onclick: e => {
      const svar = anm({ text: punktNamn(rad.punkt), anl, prio });
      e.target.replaceWith(h('p', { class: 'muted note' }, svar === 'last' ? 'Blanketten är låst.'
        : svar === 'full' ? 'Blanketten har plats för 4 anmärkningar och alla är använda.'
        : `Tillagd som anmärkning ${svar} med ${prio}.`));
    },
  }, `＋ Anmärkning ${prio[0]}`) : null;
  const overlay = h('div', { class: 'overlay guide bedomning', role: 'dialog', 'aria-label': kort.namn },
    h('button', { type: 'button', class: 'close', onclick: close, 'aria-label': 'Stäng' }, '✕'),
    h('h2', {}, kort.namn.replace(/^Bedömningsstöd /, 'Bedömningsstöd: ')),
    kort.intro ? h('div', { class: 'notis' }, stycken(h, kort.intro)) : null,
    h('p', { class: 'muted note' }, 'Tryck på en punkt för att se råd och vad som är Akut, V, M och B.' + (anm ? ' ＋ Anmärkning lägger punkten under Noterade anmärkningar med den prioriteten.' : '')),
    kort.rader.map(rad => h('details', { class: 'bed-punkt' },
      h('summary', {}, rad.punkt),
      rad.rad ? h('div', { class: 'bed-rad' }, h('strong', {}, 'Råd'), stycken(h, rad.rad)) : null,
      NIVAER.map(niva => {
        const [key, namn] = niva;
        return h('div', { class: `bed-niva bed-${key}` + (tom(rad[key]) ? ' tom' : '') },
          h('strong', {}, namn),
          h('div', {}, rad[key] ? stycken(h, rad[key]) : h('p', { class: 'muted' }, '–')),
          knapp(rad, niva));
      }),
      rad.tabell ? h('p', { class: 'muted note' }, 'Raden har en liten tabell; jämför med bilden nedan.') : null)),
    bild ? h('button', { type: 'button', class: 'button', onclick: () => showImage(...bild) }, '🖼 Visa tabellen som bild') : null);
  document.body.append(overlay);
}
