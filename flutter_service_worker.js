'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9fb8f87dc5c09b7ece830a37abd4e53e",
"assets/assets/icons/blank_person.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/assets/icons/email.png": "2a23a5cb1d2b3b3b930b8c90ab6f99c7",
"assets/assets/icons/facebook.png": "f907784683c9efb4fbccf5665463d87b",
"assets/assets/icons/heart.png": "88ec9c55b5c84bfdefcf78694a41a16a",
"assets/assets/icons/heart_border.png": "46966c4f8267d8498c581157cc921fd3",
"assets/assets/icons/heart_half.png": "e1e8b6bcc6a3128ec8d8a17838f18ac2",
"assets/assets/icons/instagram.png": "b17d99ac2b6dfe78563b73a1b12a057b",
"assets/assets/icons/loader.gif": "d6c2ae5a4e9d84e8c072f92702a5bb60",
"assets/assets/icons/phone.png": "b271240ea03dedf3ef8d4684eea4ef64",
"assets/assets/icons/tick.png": "4351b06966fcef51c3bc2efe5278953f",
"assets/assets/icons/tiktok.png": "b2ef560c70a2c646c66ea6c6bd50860b",
"assets/assets/icons/twitter.png": "9cfeee7054b3f11667985e56a6e5e7db",
"assets/assets/icons/youtube.png": "de3cc3a83a7c94323e7499237d451ba6",
"assets/assets/icons_svg/cash_on_delivery.svg": "f1f04369ad29c0eb38f14ecfff400c86",
"assets/assets/icons_svg/pay_amount.svg": "b86601956e67174acfdf4bafee68f7e5",
"assets/assets/placeholders/App-Builder-Banner.jpg": "332d73ea51b0da34c857d257a88118f3",
"assets/assets/placeholders/bee.png": "eaadd5d1d2d1941904e0c6447ff8ba72",
"assets/assets/placeholders/business-manager-log-banner.png": "16a90dca2dd09b84e41acd32e46e930c",
"assets/assets/placeholders/emptyImage.png": "159a3639b2c4323cc59eeae9f6755c04",
"assets/assets/placeholders/otp_image.png": "af558689fdcffd35185981e4838029a0",
"assets/assets/placeholders/playstore.jpeg": "f2e031e22716ae6964339acdf7649322",
"assets/assets/placeholders/theme_selected.png": "4ed75f0c5d8bde5b94603814b1b1680f",
"assets/assets/splash_screen/beauty_fun.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/hijab_wali.png": "73f169e1a57d1a2abdcede9390540143",
"assets/assets/splash_screen/launcher_icon.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/load.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/loader.json": "0681f14d391e3d993f4f3822fc312db8",
"assets/assets/splash_screen/torofdar.jpg": "18099727a2bc77498277e27d4d1d2f5d",
"assets/FontManifest.json": "bf1f3bbb9837f066748c76f4ca32159b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/fonts/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/SuperDiscount-GOyjZ.ttf": "d9284d5316c981f64e6d804fe638f87c",
"assets/NOTICES": "745716befaa6da2ae9222fbcc73b15c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "161e5b03f4edd107b3b061f7d495e72d",
"/": "161e5b03f4edd107b3b061f7d495e72d",
"main.dart.js": "b34b17dc62c859c2fc71901b4d6d07c2",
"manifest.json": "86d1b0846067918db9f8093fd20b4a1a",
"version.json": "555f401091b404cdad1bd05fa1bdf257"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
