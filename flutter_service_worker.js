'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "7bb0d7a2df98afee1a3a3a8047d0776e",
"assets/AssetManifest.smcbin": "4cb314435fdf272095e9d0c1f9c13ba0",
"assets/assets/resimler/gelecekfilmler/fastx.jpg": "6a228b8f22e8882120e405098f0449b1",
"assets/assets/resimler/gelecekfilmler/guardiansofgalaxy.jpg": "9b7f23dc469f536806d12e82a0a9a33f",
"assets/assets/resimler/gelecekfilmler/mario.jpg": "e92bac9893e8e27aae0dc44df6c6119d",
"assets/assets/resimler/gelecekfilmler/marvels.jpg": "53882dd86fc40362dd797f15ede73898",
"assets/assets/resimler/gelecekfilmler/spiderman.jpg": "de0559fe1ffd4f26b02dd01748ce8580",
"assets/assets/resimler/populerfilmler/blackadam.jpg": "07cc46b057229bd18ba6ccde226c7785",
"assets/assets/resimler/populerfilmler/moonfall.jpg": "91424b20d7e1bf8901969e57ab28e6cf",
"assets/assets/resimler/populerfilmler/ripd2.jpg": "694705b15983f8a1929aa51c815f6e1a",
"assets/assets/resimler/populerfilmler/venom.jpg": "c96d14b6867b26c05d59e5eca7593aee",
"assets/assets/resimler/yenifilmler/killboksoon.jpg": "3c7fa4acae6b5c66668a67b5875cef4c",
"assets/assets/resimler/yenifilmler/kimbuaile.jpg": "4c2a57650ffad9604da34cdfb77547a3",
"assets/assets/resimler/yenifilmler/luther.jpg": "2f239d7ca3ceed82ac1d6d94f5429cb5",
"assets/assets/resimler/yenifilmler/magicianselephant.jpg": "80d85980e2cfb1df030706ec10719499",
"assets/assets/resimler/yenifilmler/murdermystery.jpg": "307e9d2a7ee937623bf7c48eef8d1275",
"assets/assets/resimler/yenifilmler/oldway.jpg": "5b578e2559e8c332637134e61805b850",
"assets/assets/videolar/blackadam.mp4": "497088c94b022b1d37cfe7c5d3d73c14",
"assets/assets/videolar/moonfall.mp4": "0565d9fd76c39df690c362db07351295",
"assets/assets/videolar/ripd2.mp4": "5d951ef78037753cdcec76902b0db897",
"assets/assets/videolar/venom.mp4": "020d58e637f19c45c7c34729d1dfa748",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0183d5d7c216ce006fc90f7ea360c688",
"assets/NOTICES": "769bd633e1cd38bd4268d39856876b9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "60114762957c6a50d2e0cd7d2c5b7b98",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e86a8aec81d6b42daec8cf65b9d8218",
"/": "5e86a8aec81d6b42daec8cf65b9d8218",
"main.dart.js": "7b5f70b70132127c4c86294090b241ef",
"manifest.json": "2e96812903e5ff9b2925386ae6e0e66f",
"version.json": "65fca48063dcf81105a899ed9e74bece"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
