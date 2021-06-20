let version = "v1::";

self.addEventListener("install", function onInstall(event) {
  event.waitUntil(
    caches.open(version + "offline").then(function prefill(cache) {
      return cache.addAll([
        "/offline.html",
        // etc
      ]);
    })
  );
});

// var version = "v2::";

self.addEventListener("activate", function onActivate(event) {
  event.waitUntil(
    caches.keys().then(function deleteOldCache(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return key.indexOf(version) !== 0;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener("fetch", function onFetch(event) {
  let request = event.request;

  if (!request.url.match(/^https?:\/\/example.com/)) {
    return;
  }
  if (request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(request) // first, the network
      .catch(function fallback() {
        caches.match(request).then(function (response) {
          // then, the cache
          response || caches.match("/offline.html"); // then, /offline cache
        });
      })
  );
});

// var version = "v2::";

self.addEventListener("activate", function onActivate(event) {
  event.waitUntil(
    caches.keys().then(function deleteOldCache(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return key.indexOf(version) !== 0;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/serviceworker.js", { scope: "./" })
    .then(function (reg) {
      console.log("[Companion]", "Service worker registered!");
    });
}
