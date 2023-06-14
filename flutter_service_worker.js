'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a1f03f9a25831f4a80a366195eca16ac",
".git/config": "6ee5df7978fb938b771d24fb2a20ac9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d5db0d4af6bb94714730696ed34c7dbf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e6745436ffadad64b7b240506e13cd3",
".git/logs/refs/heads/main": "220d87f4e6f9b7924a8160b84fd13a18",
".git/objects/01/fa668ed2dc9d1431ebf78ad7d204d7d9181991": "83b2f679ed90acbaf202a708619ab273",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/19feac381763727d6cf5009783c71b79cf4ac7": "53d66e89b0eac6363e1dd1bda81f6553",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/123c23896786db6a786c4cb4aca4dd8b0e6d69": "b37baef46ec2bed590552d5c217fb389",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/28/468683821d7db692cc73c327dcc8b43d2c1462": "4a6ab9cbd55b1e5487af9b0edb1ebf5a",
".git/objects/29/3c67a220019d5f871f8f8445f23d02a544d1b2": "9cff2d99b1a411d80f556636630e65d3",
".git/objects/2c/0f397c41e86f6bde28a1002b1f582efe135d68": "575a9500adc1fb6248066b1b15c50630",
".git/objects/30/75e867b10b60739f20bca659b2901724d82775": "b2a2c5f04ac095f808012c81f6b43b97",
".git/objects/34/ac452fa70646e12fe64ed541a40cc0d83acd5b": "3f0a8759a88ba582448b95c19cd1fc30",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e702d525f6c5ec4da29ce12df69242ff5fc454": "56bc8c4770e5fe12a3e3052f1f231a55",
".git/objects/47/26485b83d924006d05bafc727f7952dfb5afb3": "b1d2d91be48e21d828d93503f632b1ca",
".git/objects/4a/1d02477a611886178f41d152b3af25f984b517": "f489f2803baa244f04c3f3bfdabf298a",
".git/objects/4b/9e95ee05a3939862965b7b1a44a25f914a5481": "dbf3f5a50c9cc5b767deeb7facef6165",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/8f28b60e0bdb60c7625cb24aafb7be2f33e338": "21333e2554d1d72793c08ee0a11ef29f",
".git/objects/5a/949d49e06abf062d542d9c7809a3034d33841a": "e21763274240753f922b775475991b02",
".git/objects/5b/1a3d8ecf1ffb64a23d2050d3d15d2ee9b5ddac": "b38dda5e34a66af14088785416d6db4b",
".git/objects/5d/c196927a2599932e93e3f62664c58827c75087": "a9afec4534d130df00e2af25407d2adf",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6e/41e1ce24441b78901589599eea2d3b39c43cde": "e6b409ecc67eee36e9e4daf7f529e4d9",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7a/9ca7256e08f7a41da19ded04f53670477b5053": "31d13eb686c1b5fee6f96220f3a4e0bb",
".git/objects/7b/c9587d2dfa16360b7f4e6f01570a945df57df7": "28f053e77479c1a486c11f3e61ecfb2f",
".git/objects/7c/3f1fa0b18d9b621a3e23f0dd0613df4b693048": "14bd7c80f1c8947eef06c9d4c383ecc4",
".git/objects/7c/93d3bdf44d606077023b820d3f39210e83da90": "b10c157cae58d3f47537e97895b158b3",
".git/objects/83/ffeed3063aec79b65162a690b622649876c341": "1d2953d24e3c51424b39566ae5058b9d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/225624802e0da36ea16bffc5d8fb854b337ba1": "87e77441725c3a8b175d032a7e1dd28f",
".git/objects/93/8af876a74f687ed050f7e1574a0f6460ce90cf": "f9ee36183afe89598ffe25b479c66a6f",
".git/objects/94/9c01ca522153aa9c94b8b2e10175ba4070d74d": "9b412ed837aff0eb2a09a4990aa888f1",
".git/objects/99/7e23dacef3a4eba95d8ebb8b00998a45d8ae70": "4baaa87fa07aa53e23bd25df66bb4617",
".git/objects/9a/f9359db5278a83d42c63768961a1495f66a71a": "5d30fa30aef213ce290c8bada3916c5a",
".git/objects/9d/f3befb78cd510ca904af58799e5cda78fd205b": "5d04768086b1a3fceeb94ec77dfa7b84",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/23efdc651d4e171896cd4a3d50e5564a4e0b81": "21cfa07df33df21232e7fd410c00d11a",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/cfe3e51a9f8e23052ffb1ef96478650db98bb2": "d5ee71568ecd4d2c77d19ef75d2a2a0a",
".git/objects/b6/514809e464344a4731e33708bbb0acca51f8fc": "8ad3e3c7b1c615aefaa45c2b91827b01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/00416eecb5bc44ad51182d042b77d316ef1d76": "6b686593f8d4da6655a91e56e17152b6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/348f29809db02001fddf9efb592aa4a76f419e": "1b00e73d3adaab4d5a7c0162d34259af",
".git/objects/da/86fd007f2ca3c7cfbefd6c13f41a716a6b51c5": "6fbd52ea75909671aa5ed491f98e44c2",
".git/objects/da/e38d82f92676b9e7c9520f467c1322daa73508": "7e26d6ac4aa2b030c3c5c3062e74d1ad",
".git/objects/dc/edb21e7381cfc1685d390cbbb1ce3be8238af7": "d58e159c21979b5ef2be84d0aaaf0fc3",
".git/objects/de/af2728c2795e311dcfc169fb248363d1589433": "8a032690ee082d6b6a92291fb2fcd667",
".git/objects/e0/1862b1cddd7d963478bd57586b6fec63be8ed4": "5be72ded26e1058736aaac6224701ed7",
".git/objects/e1/d1cf9691c4f3bb89c19b55e80b0ebea9966b44": "51fcf99453ff30238419ae387a1ccc30",
".git/objects/e3/2ae6eabca997572c57fc947c8d33d6b1c27050": "52de0bfa3fa5571b62d158d56571a923",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d4b22b04d770c727692f2053796dfca1eb86e7": "2055c042f125651f065b0afcb6bc7548",
".git/objects/f3/ec4c9c43e19a430b2abfecc92133b9faaa115f": "fb23b0656583cfde2ec94280a542335f",
".git/objects/f5/982075aad7da9f650449ab545f472472d6b2d0": "f98f8156ac232e99dd9134068c97286b",
".git/refs/heads/main": "29366d39053f34cffb334daed8de5648",
"assets/AssetManifest.json": "7bb0d7a2df98afee1a3a3a8047d0776e",
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
"index.html": "07c2809da439dfe13635e3e3f14877c1",
"/": "07c2809da439dfe13635e3e3f14877c1",
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
