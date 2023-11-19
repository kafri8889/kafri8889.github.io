'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4aab836ffca0f582e8a563ce916f1701",
"assets/AssetManifest.json": "e322a8d4409053827b7367fae6434ce1",
"assets/assets/images/android.png": "29f15bec3b7552f3508e18e25ee4e39b",
"assets/assets/images/bookman.png": "b9d73f759125c357c476532ef7ccba92",
"assets/assets/images/calculator.png": "33845c5a3ba4210c673030da4a6ac558",
"assets/assets/images/csnake.png": "d4561d1bef3a3fa2172467b977b75ab0",
"assets/assets/images/dicoding_android_pemula.jpg": "7bb2b0cf82da4a77c195e9c2ff21966b",
"assets/assets/images/dicoding_kotlin.jpg": "e490cf557037d00c27cefe70055c2900",
"assets/assets/images/dujer.png": "06de3d13a0fae7fb6fb61d4c7fdcc6d3",
"assets/assets/images/jetpack_compose.png": "0185b491c2c275060d654b5b88b06abc",
"assets/assets/images/mathq.png": "6885e0a6f30568100a038e9af5b4c118",
"assets/assets/images/md2compose.png": "8ac509c4cb335b03aa75f0bff2283588",
"assets/assets/images/md3android.png": "497d872ba46cf918a373ff2c5b1b7ae1",
"assets/assets/images/md3compose.png": "52a3d504b8ef434391e27b6909d29947",
"assets/assets/images/musicompose.png": "a348d078420680251373ca4ddb335ed8",
"assets/assets/images/npuzzle.png": "fc7fb639429d81926f46f8946684e373",
"assets/assets/images/projman.png": "4c40568608e78707cddddf5fc82c7784",
"assets/assets/images/remindme.png": "e0e5472266c31a76e7404cca1b0e5c1b",
"assets/assets/images/saku.png": "3b0a5879e79485002a7aef932287706c",
"assets/assets/images/skill_item_android.png": "afac1e91965d9c714ee9d48908c6dae4",
"assets/assets/images/skill_item_jc.png": "49f5a4fb1b5ec43c7e4fa07e4342fdd6",
"assets/assets/images/skill_item_kotlin.png": "b58eeb1fcb41aea895160f63cb39abc2",
"assets/assets/images/staver.png": "be886d9d70e267ece467e3631288b7ad",
"assets/assets/images/tictactoe.png": "71d2e8b1cdf4cb5984458aa725c45a1e",
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
"assets/fonts/MaterialIcons-Regular.otf": "ecba3901e36888e54ce4231a4c2f98d2",
"assets/NOTICES": "cabdcc53147a6d0280e8b027182961f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "743696bd1b596a389a98c67c88bcf0b8",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "de3634ed441f2de3c89f5691ffe1921c",
"/": "de3634ed441f2de3c89f5691ffe1921c",
"main.dart.js": "0282c2ca69b86d99077824039234d5ce",
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
