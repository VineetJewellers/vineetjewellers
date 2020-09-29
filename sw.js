self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vineet-jewellers').then(function(cache) {
     return cache.addAll([
       'https://vineetjewellers.github.io/',
       'index.html',
       'script.js',
       'loader.css',
       'vineetjewellers.png',
       'vineet-jewellers.webmanifest',
      'save.js',
      'whatsapp.png',
      'click.mp3',
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
