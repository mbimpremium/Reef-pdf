/* Reef PDF service worker: keeps the app available offline. Build 202610301037. */
const CACHE = 'reef-pdf-202610301037', KEEP = 'reef-pdf-ocr-7cfccb815b';      // KEEP: the text recognition engine, which does not change with every build
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-32.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting())); });      // fresh copies, not the browser's HTTP cache
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== KEEP).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  if (/\/ocr-[^/]+$/.test(u.pathname)) {      // large and unchanging: fetched once, then always served from the cache
    e.respondWith(caches.open(KEEP).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; }))));
    return;
  }
  /* the app itself: from the network first (checked against the server, cheap when nothing changed), so a new version shows on the first
     visit after an update; the copy in the cache is used offline, or when the network takes longer than a few seconds */
  const req = e.request.mode === 'navigate' ? new Request(e.request.url, { cache: 'no-cache', credentials: 'same-origin' }) : new Request(e.request, { cache: 'no-cache' });
  const net = fetch(req).then(r => { if (r && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; });
  const cached = () => caches.match(e.request, { ignoreSearch: true });
  e.respondWith(new Promise(res => {
    let done = false; const give = r => { if (!done && r) { done = true; res(r); } };
    const slow = setTimeout(() => cached().then(give), 5000);
    net.then(r => { clearTimeout(slow); give(r); }).catch(() => { clearTimeout(slow); cached().then(hit => give(hit || Response.error())); });
  }));
});
