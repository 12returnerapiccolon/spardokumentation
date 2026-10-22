// Gör appen körbar offline. Höj VERSION när filerna ändras.
const VERSION = 'v166';
const FILES = [
  './',
  'index.html',
  'css/app.css',
  'js/app.js',
  'js/db.js',
  'js/fill-word.js',
  'js/fill-pdf.js',
  'js/fill-overlay.js',
  'js/datum.js',
  'js/plats.js',
  'js/initialer.js',
  'js/forms/vaxel-layout.js',
  'js/forms/vaxel.js',
  'js/forms/vaxel-matt.js',
  'js/forms/vaxelmodeller.js',
  'js/forms/vaxel-normal.js',
  'js/forms/vaxel-tolerans.js',
  'js/forms/kryss-layout.js',
  'js/jobb.js',
  'js/bilder.js',
  'js/backup.js',
  'js/jobbfil.js',
  'js/mallversioner.js',
  'js/hjalp.js',
  'img/vaxelbild/evk.png',
  'img/vaxelbild/spkk.png',
  'img/vaxelbild/ev.png',
  'img/vaxelbild/evr.png',
  'img/vaxelbild/ekv.png',
  'img/vaxelbild/dkv.png',
  'img/vaxelbild/v3o.png',
  'img/vaxelbild/v3s.png',
  'img/vaxelbild/spk.png',
  'img/placering/ev.png',
  'img/placering/evr.png',
  'img/placering/ekv.png',
  'img/placering/dkv.png',
  'img/placering/v3o.png',
  'img/placering/v3s.png',
  'img/placering/spk.png',
  'js/forms/oversyn1481.js',
  'js/forms/svets.js',
  'js/forms/svets-layout.js',
  'js/forms/heta.js',
  'js/forms/heta-layout.js',
  'js/forms/ibt.js',
  'js/forms/tdok0311.js',
  'img/tdok/0334-fritt-utrymme.png',
  'img/tdok/0311-figur1-gatural.png',
  'img/tdok/0311-tabell10-bedomning.png',
  'img/tdok/0311-tabell11-skarvoppning.png',
  'img/tdok/0311-tabell12-bedomning.png',
  'img/tdok/0311-tabell13-bedomning.png',
  'img/tdok/0311-tabell14-bedomning.png',
  'img/tdok/0311-tabell15-bedomning.png',
  'img/tdok/0311-tabell16-bedomning.png',
  'img/tdok/0311-tabell17-bedomning.png',
  'img/tdok/0311-tabell18-bedomning.png',
  'img/tdok/0311-tabell19-bedomning.png',
  'img/tdok/0311-tabell20-bedomning.png',
  'img/tdok/0311-tabell21-bedomning.png',
  'img/tdok/0311-tabell3-bedomning.png',
  'img/tdok/0311-tabell4-bedomning.png',
  'img/tdok/0311-tabell49-plattform.png',
  'img/tdok/0311-tabell5-bedomning.png',
  'img/tdok/0311-tabell50-plattform.png',
  'img/tdok/0311-tabell51-bedomning.png',
  'img/tdok/0311-tabell52-lastkaj.png',
  'img/tdok/0311-tabell53-lastkaj.png',
  'img/tdok/0311-tabell54-bedomning.png',
  'img/tdok/0311-tabell6-bedomning.png',
  'img/tdok/0311-tabell64-bedomning.png',
  'img/tdok/0311-tabell65-bedomning.png',
  'img/tdok/0311-tabell66-bedomning.png',
  'img/tdok/0311-tabell67-bedomning.png',
  'img/tdok/0311-tabell68-bedomning.png',
  'img/tdok/0311-tabell7-bedomning.png',
  'img/tdok/0311-tabell8-bedomning.png',
  'img/tdok/0311-tabell9-bedomning.png',
  'img/tdok/0334-bedomning-vag.png',
  'js/forms/k0737.js',
  'js/forms/k0737-layout.js',
  'js/forms/trvinfra0737.js',
  'img/0737/k11-1.png',
  'img/0737/k11-2.png',
  'img/0737/k11-3.png',
  'js/forms/kap.js',
  'js/forms/skev.js',
  'js/forms/skev-layout.js',
  'js/forms/kap-layout.js',
  'js/forms/ibt-layout.js',
  'img/svets/vaxelbild.jpg',
  'vendor/jszip.min.js',
  'vendor/pdf-lib.min.js',
  'vendor/fontkit.min.js',
  'vendor/LiberationSans-Regular.ttf',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/icon-180.png',
  'icons/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// Nätet först så att uppdateringar syns direkt. Vid dålig eller ingen täckning
// används cachen efter tre sekunder.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== location.origin) return;
  // no-cache: fråga alltid servern, så att webbläsarens cache inte ger en gammal version.
  const network = fetch(event.request.url, { cache: 'no-cache' }).then(response => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(VERSION).then(cache => cache.put(event.request, copy));
    }
    return response;
  });
  const cached = () => caches.match(event.request, { ignoreSearch: true });
  const timeout = new Promise(resolve => setTimeout(resolve, 3000)).then(cached);
  event.respondWith(
    Promise.race([network, timeout])
      .then(r => r || network)
      .catch(() => cached().then(r => r || network)),
  );
});
