const CACHE = "voach-v19";
const ASSETS = ["/voach/", "/voach/index.html", "/voach/manifest.json"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {}))
  );
});
self.addEventListener("activate", e => {
  self.clients.claim();
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});
self.addEventListener("fetch", e => {
  // Never cache Apps Script calls
  if (e.request.url.includes("script.google.com")) return;
});