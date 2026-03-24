const CACHE="voach-v5";
self.addEventListener("install",e=>{self.skipWaiting();});
self.addEventListener("activate",e=>{self.clients.claim();});
self.addEventListener("fetch",e=>{if(e.request.url.includes("script.google.com"))return;});