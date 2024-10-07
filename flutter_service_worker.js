'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7af0d29011a4462a38cdbe7e51deefb2",
"version.json": "24c7db82a8518bb91b5f0387b79d8aa8",
"index.html": "58bc19e9a3e0df8f5f9b8f90df178ecd",
"/": "58bc19e9a3e0df8f5f9b8f90df178ecd",
"main.dart.js": "7ea195a7dfad4d4fa9f06afa7256dc64",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d9371722347e12d289d202884a75babd",
"assets/AssetManifest.json": "0c95cb1c8b9418e3e9c3088c9dc00a78",
"assets/NOTICES": "61f7a562d9ec7049ba54c2ec1e26776c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b039160779e67215674c9e84e06a8adb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "999ad5a794a130ba6eb0486de50a8802",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/question_image/soalno64.png": "ad1415f0bc3799dc6bb7bece6babc41d",
"assets/assets/question_image/soalno59.png": "071bbbcd84a393710d016c6e893c1efb",
"assets/assets/question_image/soalno65.png": "da609e3df873811c30ea00e19e329b1c",
"assets/assets/question_image/soalno61.png": "3ea12d2a43f0359269088101845ca69f",
"assets/assets/question_image/soalno60.png": "9639350cb882839a1937d9a692c63b94",
"assets/assets/question_image/soalno62.png": "c770cc44d4ca51b342af59f6aa39a325",
"assets/assets/question_image/soalno63.png": "f892d92d1a65abc135b4d42069acaace",
"assets/assets/question_image/soalno52.png": "ac1f44f7d9efad550e78526534830cf8",
"assets/assets/question_image/soalno53.png": "8dcd923be9f8a667bc4aa5b802e1a87d",
"assets/assets/question_image/soalno51.png": "d20f94c02379b37ce6a5ee47e6d5378d",
"assets/assets/question_image/soalno54.png": "d179bee93411065f771a443cc3ac2fc9",
"assets/assets/display_ilustration.svg": "f9b65c6211885888e91c166dd6763a82",
"assets/assets/disable_access.png": "d430cc2b80547fb920c292ad582b455a",
"assets/assets/question.json": "92b8b13492367ca99aae1f7b28472fe3",
"assets/assets/answer_image/answerAsoal63.png": "1958f5a746d54b18c4baab36536c1d0a",
"assets/assets/answer_image/answerAsoal65.png": "ace42b07ac688ebeefd0555cadaf55e8",
"assets/assets/answer_image/answerAsoal64.png": "05fe3fbcd7b4f3f87bafbde6ad3db08f",
"assets/assets/answer_image/answerDsoal65.png": "e51c01bf6b6b31fa6be9336be597d613",
"assets/assets/answer_image/answerBsoal63.png": "92ea53f9b17fbc185753bdd5c7ced084",
"assets/assets/answer_image/answerDsoal64.png": "72df852e8cc6c9a73e298808d4aeb4a8",
"assets/assets/answer_image/answerDsoal63.png": "f389ae047e30c374a271787227b42793",
"assets/assets/answer_image/answerBsoal64.png": "23443a0f6fa29809ab734814db3db8a5",
"assets/assets/answer_image/answerBsoal65.png": "3a4d04bd3b54e86e9ce48bf562d9323e",
"assets/assets/answer_image/answerEsoal65.png": "d6edbef2b2a9309b129edd966d0ba33a",
"assets/assets/answer_image/answerEsoal64.png": "50372b1ff85f1712d164dc0ff429670b",
"assets/assets/answer_image/answerCsoal63.png": "3bd668e7975a96e126549e6e9df77211",
"assets/assets/answer_image/answerCsoal64.png": "dcf8f7d1263ad471768f0547d414df88",
"assets/assets/answer_image/answerEsoal63.png": "1dcb73f9d2633418570a52092b3037f9",
"assets/assets/answer_image/answerCsoal65.png": "caf6d577a9a40ebad12f4d637b44a9c6",
"assets/assets/answers.json": "5fb05b887bc74e6bf4d0a93a8271c12f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
