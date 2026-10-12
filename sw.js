/* Reef PDF service worker: keeps the app available offline. Build 202610120715. */
const CACHE = 'reef-pdf-202610120715', KEEP = 'reef-pdf-ocr-7cfccb815b';      // KEEP: the text recognition engine, which does not change with every build
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-32.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== KEEP).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  if (/\/ocr-[^/]+$/.test(u.pathname)) {      // large and unchanging: fetched once, then always served from the cache
    e.respondWith(caches.open(KEEP).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; }))));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => { if (r && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; }).catch(() => hit);
    return hit || net;      // answer from the cache at once, refresh it in the background
  }));
});
