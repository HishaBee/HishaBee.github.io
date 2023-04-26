'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d004b02c1f163521025c51bd92663a0a",
"assets/assets/demo_product/amoxillin.jpg": "9ed748ce1165b02aa6ebd0beb8bc0694",
"assets/assets/demo_product/azithromyi.jpg": "0996e46bc55e0d8f498ec070fbde28a8",
"assets/assets/demo_product/bag.jpg": "17167f249e4071ba7ec9e71436d75c39",
"assets/assets/demo_product/bed.jpg": "9e5af3bdfb0c298fb8512171a11a8182",
"assets/assets/demo_product/biotine.jpg": "585524228e4af1ff8d4eb8bdb75cafb7",
"assets/assets/demo_product/broccoli.jpg": "e53118f321ccb499ebab5813c00cd16f",
"assets/assets/demo_product/camera.jpg": "e29cf24fa1bbd205a46a10a14da9280e",
"assets/assets/demo_product/catfood.jpg": "e025c2379ef59e5b9667ddfe63480489",
"assets/assets/demo_product/chair.jpg": "5921defa867b3dbb256960113f89bb72",
"assets/assets/demo_product/coffemaker.jpg": "98e27aff4f194ca9e79b86f0a3030d46",
"assets/assets/demo_product/cowfood.jpg": "704f83127a2088b5f12c5474a220f915",
"assets/assets/demo_product/cucumber.jpg": "5c3a1a0ee740ecb309a77d910de84c07",
"assets/assets/demo_product/dogfood.jpg": "5a2041ccbec9e2d96630ed1acaccceb3",
"assets/assets/demo_product/garlic.jpg": "6a3f888c6d0f9db26d77573ee7cd4c9d",
"assets/assets/demo_product/headphone.jpg": "55a5ea069ac9366e1a3bc394e7bd0b0f",
"assets/assets/demo_product/keyboard.jpg": "54f083fd92722e4069f6311bc9415ee8",
"assets/assets/demo_product/lipstik.jpg": "725a145d20bd80ea01680ff8b0b42648",
"assets/assets/demo_product/microphone.jpg": "a462823e6b2d6e42252fb8f68b3aeab1",
"assets/assets/demo_product/nekless.jpg": "6b9cf293f900f92e7e65fa41534be545",
"assets/assets/demo_product/overcoat.jpg": "9e38d7c497f9ee02439b63d43a13e0fc",
"assets/assets/demo_product/perfume.jpg": "aa21d22ad24b301a051921daae8ff194",
"assets/assets/demo_product/phone.jpg": "a0639f919507f36438aa74743efec2d0",
"assets/assets/demo_product/piano.jpg": "4c823d3a312eaf59dfa10a5d7540a3cc",
"assets/assets/demo_product/rabitfood.jpg": "ea3568f5f389fa6ba8b2c59c70759107",
"assets/assets/demo_product/ring.jpg": "56203f0606a0e78440d61a8a55c9491f",
"assets/assets/demo_product/shoes.jpg": "8e3424e3b9275a95e5942a338dd2ac32",
"assets/assets/demo_product/sofa.jpg": "141b2a380de9a22d753590fdf7fb3adb",
"assets/assets/demo_product/tomato.jpg": "4760ae7b23422aff6ce067db3a7233b7",
"assets/assets/demo_product/vacuumcleaner.jpg": "b508f7dae716e11b9354da8a1b112375",
"assets/assets/demo_product/washingmachine.jpg": "b0b016e361f31e64ad736a49ecd0b76e",
"assets/assets/demo_product/womendress.jpg": "e3767e9d38afe4f23b4205fa1c521127",
"assets/assets/demo_product/zaromaz.jpg": "f2208b913fb4db8ec71a9103764291c6",
"assets/assets/icons/add_a_photo.png": "01af9f5679f4c7e2696f015b4ff6fe8e",
"assets/assets/icons/appstore_playstore.png": "ad3da2a9a94a99a5eafd132a581e0ce1",
"assets/assets/icons/badge.png": "2fb735c88f7782ce86c3cd5f1980cc13",
"assets/assets/icons/blank_person.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/assets/icons/category.png": "ebd7eb2e890e70fe4f4ffacea99191a6",
"assets/assets/icons/customer.png": "5c798b09014a805238c33f188690d87c",
"assets/assets/icons/email.png": "2a23a5cb1d2b3b3b930b8c90ab6f99c7",
"assets/assets/icons/facebook.png": "f907784683c9efb4fbccf5665463d87b",
"assets/assets/icons/Frame.png": "cb2b242e8c48a490d41a7b9a3aae349e",
"assets/assets/icons/heart.png": "88ec9c55b5c84bfdefcf78694a41a16a",
"assets/assets/icons/heart_border.png": "46966c4f8267d8498c581157cc921fd3",
"assets/assets/icons/heart_half.png": "e1e8b6bcc6a3128ec8d8a17838f18ac2",
"assets/assets/icons/instagram.png": "b17d99ac2b6dfe78563b73a1b12a057b",
"assets/assets/icons/live_chat.png": "847fb6f7c838f6731058d0b340d9b882",
"assets/assets/icons/loader.gif": "d6c2ae5a4e9d84e8c072f92702a5bb60",
"assets/assets/icons/payment.png": "936a00b0c2d01b122679673d2113724e",
"assets/assets/icons/phone.png": "b271240ea03dedf3ef8d4684eea4ef64",
"assets/assets/icons/theme.png": "c701414919e9b338b29f8c9a7be42f71",
"assets/assets/icons/tick.png": "4351b06966fcef51c3bc2efe5278953f",
"assets/assets/icons/tiktok.png": "b2ef560c70a2c646c66ea6c6bd50860b",
"assets/assets/icons/twitter.png": "9cfeee7054b3f11667985e56a6e5e7db",
"assets/assets/icons/youtube.png": "de3cc3a83a7c94323e7499237d451ba6",
"assets/assets/icons_svg/cash_on_delivery.svg": "f1f04369ad29c0eb38f14ecfff400c86",
"assets/assets/icons_svg/pay_amount.svg": "b86601956e67174acfdf4bafee68f7e5",
"assets/assets/placeholders/20945385.jpg": "f7c41b8084d3601a5ea8bd4204ced351",
"assets/assets/placeholders/App-Builder-Banner.jpg": "332d73ea51b0da34c857d257a88118f3",
"assets/assets/placeholders/bee.png": "eaadd5d1d2d1941904e0c6447ff8ba72",
"assets/assets/placeholders/bee_with_playstore.png": "8714610f1d195364d09d5a7cc43d54bd",
"assets/assets/placeholders/business-manager-log-banner.png": "16a90dca2dd09b84e41acd32e46e930c",
"assets/assets/placeholders/call_center.png": "e214cf2e686f18bbd4eb6cde1f6f4063",
"assets/assets/placeholders/check_circle.png": "6aff92933dff2b3bb7456785f5fdeb8a",
"assets/assets/placeholders/emptyImage.png": "159a3639b2c4323cc59eeae9f6755c04",
"assets/assets/placeholders/mobile.png": "4a0e79734a49d12daa587c63aa9c2813",
"assets/assets/placeholders/otp_image.png": "af558689fdcffd35185981e4838029a0",
"assets/assets/placeholders/phone.png": "e10b33cba9ea955555bae632ea96db7a",
"assets/assets/placeholders/playstore.jpeg": "f2e031e22716ae6964339acdf7649322",
"assets/assets/placeholders/theme_selected.png": "4ed75f0c5d8bde5b94603814b1b1680f",
"assets/assets/splash_screen/beauty_fun.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/hijab_wali.png": "73f169e1a57d1a2abdcede9390540143",
"assets/assets/splash_screen/launcher_icon.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/load.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/loader.json": "0681f14d391e3d993f4f3822fc312db8",
"assets/assets/splash_screen/torofdar.jpg": "18099727a2bc77498277e27d4d1d2f5d",
"assets/FontManifest.json": "27a31bc42c0ca307507c0b9baca36ab3",
"assets/fonts/BalooDa2-VariableFont_wght.ttf": "dfa231d84e2ea142d929fd9b7245a268",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/fonts/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/SuperDiscount-GOyjZ.ttf": "d9284d5316c981f64e6d804fe638f87c",
"assets/NOTICES": "eb8bc80b8ff1948223ecf37d96000687",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4aac01fd8e8224ed858e021360051b96",
"/": "4aac01fd8e8224ed858e021360051b96",
"main.dart.js": "ed0a40dc129e5ac7383d07e6ce7d2fe3",
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
