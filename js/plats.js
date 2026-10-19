// Plats för larmadress: telefonens position, närmaste adress och val på karta.
// Koordinaterna tas fram i telefonen. Adressen och kartan hämtas från OpenStreetMap och
// kräver täckning; då skickas positionen dit (beslut 2026-10-19).

export const koordinater = (lat, lon) => `N ${lat.toFixed(5)} E ${lon.toFixed(5)}`;

// Telefonens position. Avvisas med ett meddelande som kan visas för svetsaren.
export function minPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) { reject(new Error('Telefonen kan inte ge någon position här.')); return; }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude, accuracy: pos.coords.accuracy }),
      err => reject(new Error(err.code === 1
        ? 'Appen fick inte använda platstjänster. Tillåt det för Safari under Inställningar > Integritet och säkerhet > Platstjänster.'
        : 'Kunde inte hämta positionen. Försök igen.')),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 },
    );
  });
}

// Närmaste adress, t.ex. "Stationsgatan 2, Testby". Finns ingen gatuadress (ofta vid spåret)
// blir det bara orten. null utan täckning eller träff.
async function reverse(lat, lon, zoom, signal) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=${zoom}&addressdetails=1&accept-language=sv`;
  const r = await fetch(url, { signal });
  if (!r.ok) return {};
  return (await r.json()).address || {};
}
const ORT = ['town', 'city', 'village', 'hamlet', 'isolated_dwelling', 'locality', 'suburb', 'neighbourhood', 'municipality'];
const ortAv = a => ORT.map(k => a[k]).find(Boolean);

export async function adress(lat, lon) {
  if (!navigator.onLine) return null;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 10000);
  try {
    const a = await reverse(lat, lon, 18, ctrl.signal);
    const gata = a.road ? [a.road, a.house_number].filter(Boolean).join(' ') : '';
    // Ingen ort i svaret: fråga efter närmaste ort (zoomnivå 14 ger by eller stadsdel).
    const ort = ortAv(a) || ortAv(await reverse(lat, lon, 14, ctrl.signal));
    return [gata, ort].filter(Boolean).join(', ') || null;
  } catch (e) {
    return null;
  } finally {
    clearTimeout(t);
  }
}

let leaflet;
function loadLeaflet() {
  if (!leaflet) {
    leaflet = new Promise((resolve, reject) => {
      const css = document.createElement('link');
      css.rel = 'stylesheet'; css.href = 'vendor/leaflet/leaflet.css';
      document.head.append(css);
      const s = document.createElement('script');
      s.src = 'vendor/leaflet/leaflet.js';
      s.onload = () => resolve(window.L);
      s.onerror = () => { leaflet = null; reject(new Error('Kunde inte ladda kartan.')); };
      document.head.append(s);
    });
  }
  return leaflet;
}

// Visar en karta i helskärm med ett sikte i mitten. Ger { lat, lon } för platsen under
// siktet, eller null om svetsaren avbryter.
export async function valjPaKarta(start) {
  if (!navigator.onLine) throw new Error('Kartan kräver täckning.');
  const L = await loadLeaflet();
  return new Promise(resolve => {
    const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };
    const overlay = el('div', 'overlay map-overlay');
    const mapEl = el('div', 'map');
    const sikte = el('div', 'map-crosshair');
    const bar = el('div', 'map-bar');
    const hint = el('p', 'map-hint', 'Flytta kartan så att siktet hamnar på arbetsplatsen.');
    const avbryt = el('button', 'button', 'Avbryt');
    const ok = el('button', 'button primary', 'Använd platsen');
    const minPos = el('button', 'button', '📍');
    minPos.setAttribute('aria-label', 'Gå till min position');
    avbryt.type = ok.type = minPos.type = 'button';
    bar.append(avbryt, minPos, ok);
    overlay.append(mapEl, sikte, hint, bar);
    document.body.append(overlay);

    const map = L.map(mapEl, { zoomControl: false }).setView(start ? [start.lat, start.lon] : [62, 15], start ? 17 : 5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const close = value => { map.remove(); overlay.remove(); resolve(value); };
    avbryt.onclick = () => close(null);
    ok.onclick = () => { const c = map.getCenter(); close({ lat: c.lat, lon: c.lng }); };
    minPos.onclick = () => minPosition().then(p => map.setView([p.lat, p.lon], 17)).catch(e => alert(e.message));
    // Utan tidigare plats börjar kartan över Sverige och flyttar till telefonens position.
    if (!start) minPosition().then(p => map.setView([p.lat, p.lon], 17)).catch(() => {});
  });
}
