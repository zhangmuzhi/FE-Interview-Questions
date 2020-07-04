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
    "revision": "22292c344de99745e7c8ac022b416bab"
  },
  {
    "url": "assets/css/0.styles.116ca05d.css",
    "revision": "2d802acc915735e40acf24570e41da45"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/share.0534d0da.png",
    "revision": "0534d0da9764404e68636f63f6a83b3c"
  },
  {
    "url": "assets/js/10.d63ea200.js",
    "revision": "34987fd5cbb448b1776331dc9be1f3c0"
  },
  {
    "url": "assets/js/11.ec5cba20.js",
    "revision": "925de72fa251a148a0f882b8cc246cac"
  },
  {
    "url": "assets/js/12.486bf216.js",
    "revision": "4bc23276ae1894bd4fbd3208f6b7ab2c"
  },
  {
    "url": "assets/js/13.9814bdd7.js",
    "revision": "958b856ec386a3816e209969681211d9"
  },
  {
    "url": "assets/js/14.2e94d690.js",
    "revision": "6f5c27832898fab9d8318b456bf17cae"
  },
  {
    "url": "assets/js/15.40999c7c.js",
    "revision": "987987eecd061cec1fb96f8547dd8904"
  },
  {
    "url": "assets/js/16.5778dd2e.js",
    "revision": "bfa655ffa2e12d8f53e47b857226b0a0"
  },
  {
    "url": "assets/js/17.72b01be2.js",
    "revision": "e1d65c0cd405e3f06c4a358e1795c33b"
  },
  {
    "url": "assets/js/18.fcd9f343.js",
    "revision": "cc0ea554c0d48b725fd57861da3e188d"
  },
  {
    "url": "assets/js/2.9a89f989.js",
    "revision": "51ca6feff9f54036997090dcc3b26742"
  },
  {
    "url": "assets/js/3.dbae7c5a.js",
    "revision": "d96b04762d2b87ce818fc717b4c7a493"
  },
  {
    "url": "assets/js/4.14e7763d.js",
    "revision": "3d6259fd3e332210218e2502e200928e"
  },
  {
    "url": "assets/js/5.06e5f1df.js",
    "revision": "05513e1dbe8d12b1f1c7e263d73303f2"
  },
  {
    "url": "assets/js/6.692eb0bb.js",
    "revision": "6126db35c50f1e62b582584fb10330a2"
  },
  {
    "url": "assets/js/7.9a2ece35.js",
    "revision": "05886d81371702f52f9731916b3f6222"
  },
  {
    "url": "assets/js/8.c21423ba.js",
    "revision": "f34453fae7dfd1b9f924d8f03c2f4681"
  },
  {
    "url": "assets/js/9.215b996a.js",
    "revision": "bc412ef23010faa6b70137de1de0880b"
  },
  {
    "url": "assets/js/app.6e6c536f.js",
    "revision": "28af3308083057d1418336bcbd634ec1"
  },
  {
    "url": "docs/advance.html",
    "revision": "e06e994767783d837ab0c4b82d5799ba"
  },
  {
    "url": "docs/base.html",
    "revision": "a1afaf58355ec7460076f6f67b59d054"
  },
  {
    "url": "docs/comprehensive.html",
    "revision": "aae249f368fa53c93a0753d50a72447b"
  },
  {
    "url": "docs/computed-base.html",
    "revision": "8312aa277495a9c8e84307592df4264d"
  },
  {
    "url": "docs/excellent.html",
    "revision": "f5730ac06b09e589cd385f9afa10a53c"
  },
  {
    "url": "docs/improve.html",
    "revision": "e5c1813a59d24d8053da3803675c3d1f"
  },
  {
    "url": "docs/qa.html",
    "revision": "b68b814706259597a74d76c9bb6e4d53"
  },
  {
    "url": "docs/review.html",
    "revision": "7963fc1739b3a06a9cb69601d8a0ab65"
  },
  {
    "url": "docs/simply.html",
    "revision": "1e0e8cdc1c252c86842701edea82b4e4"
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
    "revision": "d43ac7f701ef6c73c345aa8ec1ba958a"
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
