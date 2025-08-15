const CACHE_NAME = 'dziennik-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './service-worker.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => k !== CACHE_NAME && caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Network-first for index.html to ease updates, cache-first for others.
  if (req.mode === 'navigate' || (req.destination === 'document')) {
    event.respondWith(
      fetch(req).then(resp => {
        const respClone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./index.html', respClone));
        return resp;
      }).catch(() => caches.match('./index.html'))
    );
  } else {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(resp => {
        // Cache new assets on the fly
        const respClone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, respClone));
        return resp;
      }).catch(() => cached))
    );
  }
});