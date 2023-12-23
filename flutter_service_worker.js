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
"assets/assets/svg/anafthdev_logo.svg": "3844b7c5e9bd07be037b48e032a9bdc2",
"assets/assets/svg/android.svg": "a092ec74f475e29e82b9c37bffb122b6",
"assets/assets/svg/arrow_left_new.svg": "7c9ce953246400ff5eed938cdda9db11",
"assets/assets/svg/arrow_right_new.svg": "a777db8e309b92f9b1f1ec75b88c1cda",
"assets/assets/svg/github.svg": "8421d22812b704f07102b3075d0099a7",
"assets/assets/svg/kotlin_icon.svg": "b14816ed440dc7cf413cdf0309731fff",
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
"assets/fonts/MaterialIcons-Regular.otf": "f6d713c43940c168e1bf5f1ae216b879",
"assets/NOTICES": "a7d5493ff1440a4c48078f73e3564eb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "743696bd1b596a389a98c67c88bcf0b8",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f5703ae9922b1c22e28796e15d87285d",
"/": "f5703ae9922b1c22e28796e15d87285d",
"main.dart.js": "2846d7d112ad21ad7e78c63f1b9d6d48",
"manifest.json": "90728fb0606177611c36aaa01b25117d",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
