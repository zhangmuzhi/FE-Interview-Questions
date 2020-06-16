/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "34d884964bfe47bdd1770934c032b8f6"
  },
  {
    "url": "assets/css/0.styles.9fe9b7c8.css",
    "revision": "7df21c95719f98ea24fa71d3738105ce"
  },
  {
    "url": "assets/img/logo.b8798990.png",
    "revision": "b8798990e94475af8351c61ec4d5762f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5a7fc4f.js",
    "revision": "24db0fac1d561487cab4c43c5ca49b04"
  },
  {
    "url": "assets/js/11.285712b3.js",
    "revision": "3b869a2f8f6fe8382070d726a1da5cb5"
  },
  {
    "url": "assets/js/12.c4f3f190.js",
    "revision": "56c9ea15e06d1a0a105d60f82cb33377"
  },
  {
    "url": "assets/js/13.2e1b34bb.js",
    "revision": "41ddd3c4f6144bfab1438c79ed094ad3"
  },
  {
    "url": "assets/js/14.fb0d0d4a.js",
    "revision": "6a29f8b68561fdf15df2fc9a92c30268"
  },
  {
    "url": "assets/js/15.712d207b.js",
    "revision": "5cb096085853b2ee65c9b887272ac60e"
  },
  {
    "url": "assets/js/16.e26dbdc8.js",
    "revision": "42226e8a6488f4699057a26ba9cd5cf0"
  },
  {
    "url": "assets/js/17.7134c322.js",
    "revision": "c979429f4f17977e73bfde9498855279"
  },
  {
    "url": "assets/js/2.b2a2fa4e.js",
    "revision": "c5f7e75aa99ebeb7a9ff7b9e9618d2bf"
  },
  {
    "url": "assets/js/3.ab9c95d9.js",
    "revision": "06fee7c5f598e1c6a126b0513333926d"
  },
  {
    "url": "assets/js/4.f95ee26a.js",
    "revision": "7e0f61ac815e854d27eae1697adcf463"
  },
  {
    "url": "assets/js/5.1dccf461.js",
    "revision": "4a61d197b48419d0c8b0fe085599ed68"
  },
  {
    "url": "assets/js/6.b7460dcb.js",
    "revision": "19307aed6c076095da31339b18ab2a45"
  },
  {
    "url": "assets/js/7.90df91ca.js",
    "revision": "1d115aa59eff2476805de3ccbc2ffe91"
  },
  {
    "url": "assets/js/8.ad553f8d.js",
    "revision": "424f63f9b3620989b9a8a63285c4e31d"
  },
  {
    "url": "assets/js/9.31e92875.js",
    "revision": "c25fdd7a07ef6775dab8b392476e9947"
  },
  {
    "url": "assets/js/app.a981d541.js",
    "revision": "5608f82caf419b205ec5f15cea016f0f"
  },
  {
    "url": "docs/advance.html",
    "revision": "e111785f3b882f1af8127f24007ed703"
  },
  {
    "url": "docs/base.html",
    "revision": "009f579b81cea9fc112c0ed6aa5391f0"
  },
  {
    "url": "docs/comprehensive.html",
    "revision": "182fb4a6e66ed9b6c32b1be73122ad41"
  },
  {
    "url": "docs/computed-base.html",
    "revision": "fbfbd393cfedaea7360f5e857edc6a63"
  },
  {
    "url": "docs/excellent.html",
    "revision": "57984b7ae613691f3d7a36ad846df52f"
  },
  {
    "url": "docs/improve.html",
    "revision": "8bd5140ba8ab48acb58d0b75f289c2ec"
  },
  {
    "url": "docs/qa.html",
    "revision": "f522cfa3b35d92f1f8a4d8fbaf8f57c7"
  },
  {
    "url": "docs/review.html",
    "revision": "f196b3cf253c85d404f0e69708a6b1e1"
  },
  {
    "url": "docs/simply.html",
    "revision": "83b4ef4d9605b6e5e534bda54bbe9abd"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "218713b717840242d4c962d88938f03d"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "qrcode.jpg",
    "revision": "ee193d2841cd47e179326d50d67312f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
