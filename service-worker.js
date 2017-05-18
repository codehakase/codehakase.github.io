/**
 * Author @codehakase
 * Service Worker to cache resources
 */

// register the files for caching
var _cacheFiles = [
    './',
    './assets/images/bg.jpg',
    './assets/css/style.css',
    'https://fonts.googleapis.com/css?family=Dosis:200,300,400,500|Lato:300,400,700,900,300italic,400italic,700italic,900italic|Raleway:400,200,300,500,100|Titillium+Web:400,200,300italic,300,200italic',
    './assets/js/app.js'
]
var _cacheName = 'v1';

self.addEventListener('install', function(e) {
    console.log("[ServiceWorker] Installed")

    e.waitUntil(
        caches.open(_cacheName).then(function(cache) {
            console.log("[serviceWorker] Caching files...");
            return cache.addAll(_cacheFiles);
        })
    )
})

self.addEventListener('activate', function(e) {
    console.log("[ServiceWorker] Activated")
})

self.addEventListener('fetch', function(e) {
    console.log("[ServiceWorker] Fecting", e.request.url);
    e.respondWith(
        caches.match(e.request)
            .then(function(resp) {
                return resp || fetch(e.request).then(function(response) {
                    caches.open('v1')
                        .then(function(cache) {
                            cache.put(e.request, response.clone());
                            return response;
                        });
                }).catch(function() {
                    return caches.match('./assets/images/bg.jpg');
                })
            })
    );
});