var CACHE_NAME = 'mcache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/style/base.css',
  '/style/bg.png',
  '/script/main.js',
  '/js/app.js',
  '/js/base.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});