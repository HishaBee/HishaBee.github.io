'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "24db04cf9442a83efeb465453b8b8ae5",
"version.json": "555f401091b404cdad1bd05fa1bdf257",
"index.html": "175bb6819fbcd695f244f2634ee37c79",
"/": "175bb6819fbcd695f244f2634ee37c79",
"main.dart.js": "7c3fffb851ca91238fef63c7ad46ecea",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2f5b054fc981dc5e5592db07a125254a",
"assets/AssetManifest.json": "78ef613faee35f2209ccb38fad922053",
"assets/NOTICES": "4f76fb327d7bebac515edbbb37f6c4fb",
"assets/FontManifest.json": "27a31bc42c0ca307507c0b9baca36ab3",
"assets/AssetManifest.bin.json": "e30c7a9728c235509f0487531e4da6ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "43061f3c0f8d9c6bd835ab49face1057",
"assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/fonts/SuperDiscount-GOyjZ.ttf": "d9284d5316c981f64e6d804fe638f87c",
"assets/fonts/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"assets/fonts/MaterialIcons-Regular.otf": "a0d93f749dab605d850f32e043204d22",
"assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/fonts/BalooDa2-VariableFont_wght.ttf": "dfa231d84e2ea142d929fd9b7245a268",
"assets/assets/demo_product/vacuumcleaner.jpg": "b508f7dae716e11b9354da8a1b112375",
"assets/assets/demo_product/piano.jpg": "4c823d3a312eaf59dfa10a5d7540a3cc",
"assets/assets/demo_product/cowfood.jpg": "704f83127a2088b5f12c5474a220f915",
"assets/assets/demo_product/nekless.jpg": "6b9cf293f900f92e7e65fa41534be545",
"assets/assets/demo_product/keyboard.jpg": "54f083fd92722e4069f6311bc9415ee8",
"assets/assets/demo_product/perfume.jpg": "aa21d22ad24b301a051921daae8ff194",
"assets/assets/demo_product/coffemaker.jpg": "98e27aff4f194ca9e79b86f0a3030d46",
"assets/assets/demo_product/microphone.jpg": "a462823e6b2d6e42252fb8f68b3aeab1",
"assets/assets/demo_product/lipstik.jpg": "725a145d20bd80ea01680ff8b0b42648",
"assets/assets/demo_product/rabitfood.jpg": "ea3568f5f389fa6ba8b2c59c70759107",
"assets/assets/demo_product/overcoat.jpg": "9e38d7c497f9ee02439b63d43a13e0fc",
"assets/assets/demo_product/tomato.jpg": "4760ae7b23422aff6ce067db3a7233b7",
"assets/assets/demo_product/bed.jpg": "9e5af3bdfb0c298fb8512171a11a8182",
"assets/assets/demo_product/washingmachine.jpg": "b0b016e361f31e64ad736a49ecd0b76e",
"assets/assets/demo_product/sofa.jpg": "141b2a380de9a22d753590fdf7fb3adb",
"assets/assets/demo_product/dogfood.jpg": "5a2041ccbec9e2d96630ed1acaccceb3",
"assets/assets/demo_product/catfood.jpg": "e025c2379ef59e5b9667ddfe63480489",
"assets/assets/demo_product/zaromaz.jpg": "f2208b913fb4db8ec71a9103764291c6",
"assets/assets/demo_product/ring.jpg": "56203f0606a0e78440d61a8a55c9491f",
"assets/assets/demo_product/azithromyi.jpg": "0996e46bc55e0d8f498ec070fbde28a8",
"assets/assets/demo_product/shoes.jpg": "8e3424e3b9275a95e5942a338dd2ac32",
"assets/assets/demo_product/chair.jpg": "5921defa867b3dbb256960113f89bb72",
"assets/assets/demo_product/biotine.jpg": "585524228e4af1ff8d4eb8bdb75cafb7",
"assets/assets/demo_product/garlic.jpg": "6a3f888c6d0f9db26d77573ee7cd4c9d",
"assets/assets/demo_product/amoxillin.jpg": "9ed748ce1165b02aa6ebd0beb8bc0694",
"assets/assets/demo_product/headphone.jpg": "55a5ea069ac9366e1a3bc394e7bd0b0f",
"assets/assets/demo_product/phone.jpg": "a0639f919507f36438aa74743efec2d0",
"assets/assets/demo_product/cucumber.jpg": "5c3a1a0ee740ecb309a77d910de84c07",
"assets/assets/demo_product/womendress.jpg": "e3767e9d38afe4f23b4205fa1c521127",
"assets/assets/demo_product/camera.jpg": "e29cf24fa1bbd205a46a10a14da9280e",
"assets/assets/demo_product/bag.jpg": "17167f249e4071ba7ec9e71436d75c39",
"assets/assets/demo_product/broccoli.jpg": "e53118f321ccb499ebab5813c00cd16f",
"assets/assets/icons_svg/pay_amount.svg": "3b0a5811f3093107f4eb7afc95fd92a4",
"assets/assets/icons_svg/cash_on_delivery.svg": "ba73b7ef21c1720ff5437207f225f758",
"assets/assets/placeholders/theme_selected.png": "4ed75f0c5d8bde5b94603814b1b1680f",
"assets/assets/placeholders/call_center.png": "e214cf2e686f18bbd4eb6cde1f6f4063",
"assets/assets/placeholders/otp_image.png": "af558689fdcffd35185981e4838029a0",
"assets/assets/placeholders/business-manager-log-banner.png": "16a90dca2dd09b84e41acd32e46e930c",
"assets/assets/placeholders/App-Builder-Banner.jpg": "332d73ea51b0da34c857d257a88118f3",
"assets/assets/placeholders/bee.png": "eaadd5d1d2d1941904e0c6447ff8ba72",
"assets/assets/placeholders/playstore.jpeg": "f2e031e22716ae6964339acdf7649322",
"assets/assets/placeholders/mobile.png": "4a0e79734a49d12daa587c63aa9c2813",
"assets/assets/placeholders/phone.png": "e10b33cba9ea955555bae632ea96db7a",
"assets/assets/placeholders/emptyImage.png": "159a3639b2c4323cc59eeae9f6755c04",
"assets/assets/placeholders/bee_with_playstore.png": "8714610f1d195364d09d5a7cc43d54bd",
"assets/assets/placeholders/check_circle.png": "6aff92933dff2b3bb7456785f5fdeb8a",
"assets/assets/icons/appstore_playstore.png": "ad3da2a9a94a99a5eafd132a581e0ce1",
"assets/assets/icons/email.png": "2a23a5cb1d2b3b3b930b8c90ab6f99c7",
"assets/assets/icons/category.png": "ebd7eb2e890e70fe4f4ffacea99191a6",
"assets/assets/icons/tick.png": "4351b06966fcef51c3bc2efe5278953f",
"assets/assets/icons/heart_border.png": "46966c4f8267d8498c581157cc921fd3",
"assets/assets/icons/instagram.png": "b17d99ac2b6dfe78563b73a1b12a057b",
"assets/assets/icons/live_chat.png": "847fb6f7c838f6731058d0b340d9b882",
"assets/assets/icons/heart_half.png": "e1e8b6bcc6a3128ec8d8a17838f18ac2",
"assets/assets/icons/theme.png": "c701414919e9b338b29f8c9a7be42f71",
"assets/assets/icons/payment.png": "936a00b0c2d01b122679673d2113724e",
"assets/assets/icons/loader.gif": "d6c2ae5a4e9d84e8c072f92702a5bb60",
"assets/assets/icons/heart.png": "88ec9c55b5c84bfdefcf78694a41a16a",
"assets/assets/icons/customer.png": "5c798b09014a805238c33f188690d87c",
"assets/assets/icons/tiktok.png": "b2ef560c70a2c646c66ea6c6bd50860b",
"assets/assets/icons/blank_person.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/assets/icons/twitter.png": "9cfeee7054b3f11667985e56a6e5e7db",
"assets/assets/icons/add_a_photo.png": "01af9f5679f4c7e2696f015b4ff6fe8e",
"assets/assets/icons/phone.png": "b271240ea03dedf3ef8d4684eea4ef64",
"assets/assets/icons/Frame.png": "cb2b242e8c48a490d41a7b9a3aae349e",
"assets/assets/icons/youtube.png": "de3cc3a83a7c94323e7499237d451ba6",
"assets/assets/icons/facebook.png": "f907784683c9efb4fbccf5665463d87b",
"assets/assets/icons/badge.png": "2fb735c88f7782ce86c3cd5f1980cc13",
"assets/assets/splash_screen/hijab_wali.png": "73f169e1a57d1a2abdcede9390540143",
"assets/assets/splash_screen/beauty_fun.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/loader.json": "0681f14d391e3d993f4f3822fc312db8",
"assets/assets/splash_screen/launcher_icon.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/load.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/splash_screen/torofdar.jpg": "18099727a2bc77498277e27d4d1d2f5d",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
