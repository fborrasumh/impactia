/* ImpactIA · service worker: guarda la aplicación (no los datos, que viven en IndexedDB) para que funcione sin conexión.
   Las peticiones a los proveedores de IA no pasan por aquí (POST) y nunca se guardan. */
const CACHE = 'impactia-1.0.0';
const CORE = ['./', './index.html', './manifest.json', './icon.svg', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url), guarda = r => { if (r && r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); } return r; };
  if (u.origin === location.origin) e.respondWith(fetch(e.request).then(guarda).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('./index.html'))));
  else if (/^(cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(u.host)) e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(guarda)));
});
