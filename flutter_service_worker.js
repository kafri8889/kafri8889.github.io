'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ba2eda9fd02dcbe0a6a872ce091792d5",
"assets/AssetManifest.bin.json": "8d455d879c8172386c971df7543f9e51",
"assets/AssetManifest.json": "84465aeffee18dd4596e20a711217215",
"assets/assets/images/android.png": "29f15bec3b7552f3508e18e25ee4e39b",
"assets/assets/images/jetpack_compose.png": "0185b491c2c275060d654b5b88b06abc",
"assets/assets/images/skill_item_android.png": "afac1e91965d9c714ee9d48908c6dae4",
"assets/assets/images/skill_item_jc.png": "49f5a4fb1b5ec43c7e4fa07e4342fdd6",
"assets/assets/images/skill_item_kotlin.png": "b58eeb1fcb41aea895160f63cb39abc2",
"assets/assets/svg/anafthdev_logo.svg": "6c43e8a0da5324ce823b895bf8b4a613",
"assets/assets/svg/android.svg": "4e9e3b230a12ebe8d70d8486dfebf54d",
"assets/assets/svg/arrow_left_new.svg": "e10b5b9608d3f356b72afac21b076655",
"assets/assets/svg/arrow_right_new.svg": "d479863e09b4873b24f109306a5cfd04",
"assets/assets/svg/github.svg": "8421d22812b704f07102b3075d0099a7",
"assets/assets/svg/kotlin_icon.svg": "5a2fc2101d0a1b5b15d8588bb385bce6",
"assets/assets/svg/linkedin.svg": "f72c6098cc4f0ea55696e086c4170abb",
"assets/assets/svg/telegram.svg": "68f24350029312a0518aa17710343ad4",
"assets/assets/svg/twitter.svg": "adb8db1276a2d663d01072c3332ccd4d",
"assets/FontManifest.json": "7a83a91a991a845da70aa9e2059e81ec",
"assets/fonts/inter_bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/fonts/inter_extra_bold.ttf": "82c8c1cf127220ccd9914e5dc739de28",
"assets/fonts/inter_extra_light.ttf": "819a76705047d6474cb529a319e74bbc",
"assets/fonts/inter_light.ttf": "d4be01c95657978131342b1dcf829a45",
"assets/fonts/inter_medium.ttf": "1aa99aa25c72307cb7f16fae35e8c9d1",
"assets/fonts/inter_regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/fonts/inter_semi_bold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/fonts/inter_thin.ttf": "f482d38d962b4d95853bef956ff6dd83",
"assets/fonts/MaterialIcons-Regular.otf": "0be3ca82a8629c1acd0b2ff1d9840cb0",
"assets/NOTICES": "f2c977da1ce4f057af3f8ae9c1bd1b9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "743696bd1b596a389a98c67c88bcf0b8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f34f36d4ec3e597b778d25c4cf3a1ef0",
"icons/Icon-192.png": "8e8831ccca99df413d78504b3492c44d",
"icons/Icon-512.png": "8e8831ccca99df413d78504b3492c44d",
"icons/Icon-maskable-192.png": "8e8831ccca99df413d78504b3492c44d",
"icons/Icon-maskable-512.png": "8e8831ccca99df413d78504b3492c44d",
"index.html": "d73bc4f3729801d7fadcda1013543ad5",
"/": "d73bc4f3729801d7fadcda1013543ad5",
"main.dart.js": "8867ffe17f60da101e98babf87b20ee3",
"manifest.json": "90728fb0606177611c36aaa01b25117d",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
