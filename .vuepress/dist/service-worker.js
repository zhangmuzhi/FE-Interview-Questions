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
    "revision": "d399c8c81629530e1bed37c5a4c87dd2"
  },
  {
    "url": "assets/css/0.styles.2d7181d5.css",
    "revision": "b69a51f3969b6b08899d86f44490fe13"
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
    "url": "assets/img/share.edebb8e3.png",
    "revision": "edebb8e345b8783578bfcc9d02bd3245"
  },
  {
    "url": "assets/js/10.b059deb0.js",
    "revision": "3b6ba6a697745fabd8faf25660012a65"
  },
  {
    "url": "assets/js/11.9bd8188b.js",
    "revision": "6e3b38251cf95e6da51c2a95b1c00a86"
  },
  {
    "url": "assets/js/12.486bf216.js",
    "revision": "4bc23276ae1894bd4fbd3208f6b7ab2c"
  },
  {
    "url": "assets/js/13.1549721e.js",
    "revision": "1b99a4964093d414027eb75b1c1fb01c"
  },
  {
    "url": "assets/js/14.2e94d690.js",
    "revision": "6f5c27832898fab9d8318b456bf17cae"
  },
  {
    "url": "assets/js/15.f5c33da8.js",
    "revision": "6ec1f54fdc17925e8d18a79277412d17"
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
    "url": "assets/js/3.3a20433c.js",
    "revision": "76f062885b1b92296de991485a1ec1f3"
  },
  {
    "url": "assets/js/4.14e7763d.js",
    "revision": "3d6259fd3e332210218e2502e200928e"
  },
  {
    "url": "assets/js/5.f918325a.js",
    "revision": "a794ae880f65411f7a44c3176ab7a0f1"
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
    "url": "assets/js/8.f2ff4632.js",
    "revision": "a3a202027c89f8ce6c09e068e4a027ef"
  },
  {
    "url": "assets/js/9.215b996a.js",
    "revision": "bc412ef23010faa6b70137de1de0880b"
  },
  {
    "url": "assets/js/app.d8c22f3b.js",
    "revision": "4033232752bad3b24f60f9dc56a57250"
  },
  {
    "url": "docs/advance.html",
    "revision": "56ee2f218ada2cdbcc3a86f74287667f"
  },
  {
    "url": "docs/base.html",
    "revision": "52fd622b5d84d750d6b27b63b5087f05"
  },
  {
    "url": "docs/comprehensive.html",
    "revision": "cc9efcd67c1870031212678d8792fca6"
  },
  {
    "url": "docs/computed-base.html",
    "revision": "71a69c9f394ed7e8686eb649a2eeac9e"
  },
  {
    "url": "docs/excellent.html",
    "revision": "979ec226121caba46c360d3d81aebc67"
  },
  {
    "url": "docs/improve.html",
    "revision": "6c69a94df1a0d8e330985eb1cbd3f6a1"
  },
  {
    "url": "docs/qa.html",
    "revision": "0ccc5ed069cf3647ce8d9183e458fd75"
  },
  {
    "url": "docs/review.html",
    "revision": "1373204de5268abf6aadc1f4bf7e6157"
  },
  {
    "url": "docs/simply.html",
    "revision": "26f1b4ad0dddb63a083d16843b1bed7e"
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
    "revision": "7f574467fa1bf8968285569d603702e7"
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
