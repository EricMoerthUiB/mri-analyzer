importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({clientsClaim: true})
workboxSW.precache([
  {
    "url": "f3e03688349fb4c74feffa72b74d14c1.png",
    "revision": "f3e03688349fb4c74feffa72b74d14c1"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c0cef3b49c40bc4d9cad6d6499cfe6f7"
  },
  {
    "url": "index.html",
    "revision": "076a32d16c50b012aab0be29d567160d"
  },
  {
    "url": "mriAnalyzer.js",
    "revision": "fc7302a8ada4f2ad8eea146900b06c3f"
  }
])

workboxSW.router.registerRoute(
  /\.js|\.png|\.wasm$/,
  workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'staleWhileRevalidateContent',
  cacheExpiration: {
    maxEntries: 50,
    maxAgeSeconds: 7 * 24 * 60 * 60 * 26,
    }
  })
);
