// Gör appen körbar offline. Höj VERSION när filerna ändras.
const VERSION = 'v174';
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
  'js/ralsfel.js',
  'js/svetsstod.js',
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
  'img/tdok/00012-7-1-1-7.png',
  'img/tdok/00012-8-1-1-15.png',
  'img/tdok/00013-11-1.png',
  'img/tdok/00013-11-2-1.png',
  'img/tdok/00013-11-2-2.png',
  'img/tdok/00013-11-2-3.png',
  'img/tdok/00013-11-2-4.png',
  'img/tdok/00013-11-2-5.png',
  'img/tdok/00013-11-2-6.png',
  'img/tdok/00013-11-2-7.png',
  'img/tdok/00013-11-3.png',
  'img/tdok/00013-11-4.png',
  'img/tdok/00013-13.png',
  'img/tdok/00015-7.png',
  'img/tdok/00017-10-6.png',
  'img/tdok/00017-10-8.png',
  'img/tdok/00017-9-3.png',
  'img/tdok/00018-10.png',
  'img/tdok/00018-11.png',
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
  'img/tdok/0664-tabell1-portion.png',
  'img/tdok/0664-tabell2-l25.png',
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

// Katalogen över rälsfel (TDOK 2014:0598, ca 7 MB) ligger i en egen cache som inte töms vid
// varje ny version. Den hämtas en gång och byter namn bara om bilderna ändras.
const RALSFEL = 'ralsfel-1';
const RALSFEL_FILES = [
  'img/tdok/0598-intro.jpg',
  'img/tdok/0598-indelning.jpg',
  'img/tdok/0598-100.jpg',
  'img/tdok/0598-111.jpg',
  'img/tdok/0598-112.jpg',
  'img/tdok/0598-113.jpg',
  'img/tdok/0598-121.jpg',
  'img/tdok/0598-122.jpg',
  'img/tdok/0598-123.jpg',
  'img/tdok/0598-124.jpg',
  'img/tdok/0598-125.jpg',
  'img/tdok/0598-1321.jpg',
  'img/tdok/0598-1322.jpg',
  'img/tdok/0598-133.jpg',
  'img/tdok/0598-134.jpg',
  'img/tdok/0598-135.jpg',
  'img/tdok/0598-139.jpg',
  'img/tdok/0598-153.jpg',
  'img/tdok/0598-154.jpg',
  'img/tdok/0598-200.jpg',
  'img/tdok/0598-211.jpg',
  'img/tdok/0598-212.jpg',
  'img/tdok/0598-213.jpg',
  'img/tdok/0598-2201.jpg',
  'img/tdok/0598-2202.jpg',
  'img/tdok/0598-2203.jpg',
  'img/tdok/0598-2204.jpg',
  'img/tdok/0598-221.jpg',
  'img/tdok/0598-2221.jpg',
  'img/tdok/0598-2222.jpg',
  'img/tdok/0598-2223.jpg',
  'img/tdok/0598-223.jpg',
  'img/tdok/0598-224.jpg',
  'img/tdok/0598-2251.jpg',
  'img/tdok/0598-2252.jpg',
  'img/tdok/0598-227.jpg',
  'img/tdok/0598-2321.jpg',
  'img/tdok/0598-2322.jpg',
  'img/tdok/0598-233.jpg',
  'img/tdok/0598-234.jpg',
  'img/tdok/0598-235.jpg',
  'img/tdok/0598-236.jpg',
  'img/tdok/0598-239.jpg',
  'img/tdok/0598-253.jpg',
  'img/tdok/0598-254.jpg',
  'img/tdok/0598-301.jpg',
  'img/tdok/0598-302.jpg',
  'img/tdok/0598-303.jpg',
  'img/tdok/0598-411.jpg',
  'img/tdok/0598-412.jpg',
  'img/tdok/0598-421.jpg',
  'img/tdok/0598-422.jpg',
  'img/tdok/0598-431.jpg',
  'img/tdok/0598-432.jpg',
  'img/tdok/0598-471.jpg',
  'img/tdok/0598-472.jpg',
  'img/tdok/0598-481.jpg',
];

self.addEventListener('install', event => {
  // Bara de blad som saknas hämtas. Går det inte nu hämtas bladet när det öppnas.
  const ralsfel = caches.open(RALSFEL).then(async cache => {
    const har = new Set((await cache.keys()).map(r => new URL(r.url).pathname));
    await Promise.all(RALSFEL_FILES.filter(f => !har.has(new URL(f, self.location).pathname)).map(f => cache.add(f).catch(() => {})));
  });
  event.waitUntil(Promise.all([caches.open(VERSION).then(cache => cache.addAll(FILES)), ralsfel]).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== RALSFEL).map(k => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// Nätet först så att uppdateringar syns direkt. Vid dålig eller ingen täckning
// används cachen efter tre sekunder.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== location.origin) return;
  // Rälsfelsbladen ändras inte: cachen först.
  if (event.request.url.includes('/img/tdok/0598-')) {
    event.respondWith(caches.open(RALSFEL).then(cache => cache.match(event.request, { ignoreSearch: true })
      .then(r => r || fetch(event.request).then(response => { if (response.ok) cache.put(event.request, response.clone()); return response; }))));
    return;
  }
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
