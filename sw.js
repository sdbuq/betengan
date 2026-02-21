const CACHE_NAME = 'buqis-cache-v1';

// Saat proses instalasi PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Saat PWA diaktifkan
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Menipu Chrome agar menganggap kita punya offline support
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Anda sedang offline.');
    })
  );
});
