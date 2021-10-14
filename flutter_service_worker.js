'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "83fc1b2a0223a46d232622518e8deaf7",
"assets/assets/fonts/Changa-Bold.ttf": "759829f5318e2dbcddff9ddc7bd1143b",
"assets/assets/fonts/Changa-Regular.ttf": "da1e017d2a26efb3e6f77a1837f913eb",
"assets/assets/fonts/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/images/about.png": "f79fca7cba8d6506d2cfd6b34a35e399",
"assets/assets/images/as.png": "b4656379b41c2338453bee7fc35dc063",
"assets/assets/images/blank.png": "2d815ccfb9dbf66adf5fed7887b10715",
"assets/assets/images/Boxing.jfif": "bf22d21ec3b423a20a198afa22cf4b71",
"assets/assets/images/branch.jfif": "2c81838631ce226775e664aa3309b191",
"assets/assets/images/branch.png": "543f0378a692dbee438c02c60d57a3c9",
"assets/assets/images/circle.png": "8dcd159f577f79f92df5f9aab9bb6ec9",
"assets/assets/images/class-others.jpg": "2f7ca237d11e6d04420014168cd4e65d",
"assets/assets/images/details.png": "be1e9f284a6fc851f0496b1aac8763ec",
"assets/assets/images/dumbbell.png": "3db389c3b498e071aa9716a9d8c7d7ea",
"assets/assets/images/event.jpeg": "2293826df73a2221d556a6a0c641d166",
"assets/assets/images/feed1.png": "1482a9d0f5ad96d32aefe9ddd679f612",
"assets/assets/images/feed2.png": "0f52911a11b1f157b66baf207a4c7861",
"assets/assets/images/feed3.png": "ff334cca63ed1563486bd278caba69e1",
"assets/assets/images/feed4.jpg": "f75a6786ddd667d2223de122b7ebdde9",
"assets/assets/images/home.jpg": "ad36ff7ee7eb25a7c8ffd46e05612f1f",
"assets/assets/images/ht.png": "a7e6be286a1d9b0b26a079ed28419cbd",
"assets/assets/images/ht1.png": "1c6524ea1e5d1322d9d80680d25b725a",
"assets/assets/images/ht2.png": "55fe94130cce82345d91efa313bb899e",
"assets/assets/images/ht3.png": "2e8c36313512affcef6c72b9657e0632",
"assets/assets/images/invite.png": "d54e551c8bb0e8d33169975f8a787b91",
"assets/assets/images/login.png": "21c7a5b4a9c86170fb606836c93e4b3a",
"assets/assets/images/logo.png": "7ea6e659a9bc72109340f63efba94831",
"assets/assets/images/meal_image.jpg": "0ca65743659012d3509d133265c90068",
"assets/assets/images/membership-others.jpg": "e074b8a5a79afca2f94adc2139ee6e27",
"assets/assets/images/membership.jfif": "697ed08acaf4cc3f7eda5015c77b4a00",
"assets/assets/images/membership.png": "52a2baca5ba34b2b91f4b28e9a06fa4a",
"assets/assets/images/OIP.jfif": "230edf62e3710ded1f8a411fad4dcd97",
"assets/assets/images/others-aboutus.png": "97a9a2aa92e3e05e2eebb9b7ab4887a3",
"assets/assets/images/others-announcements.png": "9b21fdc9dce1e80d7cb38ae2340c8f18",
"assets/assets/images/others-branches.png": "3039c15e11335611ef5c7e74ceb14334",
"assets/assets/images/others-create.png": "fefceac8fe424efbe1171e503e3d7a55",
"assets/assets/images/others-crowdmeter.png": "fd34a847c34f9060a4dc231145bbc5c6",
"assets/assets/images/others-events.png": "d648afac51bf4c50d977a93c3a484caf",
"assets/assets/images/others-inventory.png": "5355e5c0b74d179c98c3a733634f4951",
"assets/assets/images/others-invite.jpg": "912c5330321e642ce6225fb4de20bce6",
"assets/assets/images/others-plans.jpg": "3630c50a3e655ddf8e70462119f20702",
"assets/assets/images/others-questions.png": "b83b76a70f03ef499bfe75e1b4dcc06e",
"assets/assets/images/others-schedule.png": "2cc146191fdfc688ecfd050317815521",
"assets/assets/images/others-supplements.png": "59b38a42ae0aac58987ba1d17c85c748",
"assets/assets/images/Rectangle.png": "356a22d937e70d0f9b5a7054fa69fb62",
"assets/assets/images/session.jpg": "63a9a24482ea81e9c5d18ec565992c70",
"assets/assets/images/supp.jpg": "1cfcb22de6245436378f9e1ef5cf5727",
"assets/assets/images/treadmill.png": "edc4e3df0ea831aeb5c36736b357f1ae",
"assets/assets/images/user_icon.png": "8e4dc286569e2fa86b37dff112686f5e",
"assets/assets/images/web-background.jpg": "f36cef464b8c132f8bfc080fe4df3563",
"assets/assets/images/welcome.png": "eaa9d230affffdf25007becf7a0712ff",
"assets/FontManifest.json": "ffb52d681d2e5b05332cdea4e87a65f3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a52a6b34e10261d15c5ee7575a3e9eef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "35b9e65dedc6efe983c9fc6d1d215cf0",
"/": "35b9e65dedc6efe983c9fc6d1d215cf0",
"main.dart.js": "6cab6a9da353deb05a74f71cce284bca",
"manifest.json": "bcd92b9ed86c90b108b52b61f5cceea0",
"version.json": "0e2c366357a886537a9d6a3015422ffd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
