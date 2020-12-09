export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "pencil-task",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/storeData.js",],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    [
      "@nuxtjs/firebase",
      {
        config: {
          // apiKey: "AIzaSyAP1eubtqll7tIeWp4MsMyhXkL3W_F1AyA",
          // authDomain: "pencil-886c6.firebaseapp.com",
          // databaseURL: "https://pencil-886c6.firebaseio.com",
          // projectId: "pencil-886c6",
          // storageBucket: "pencil-886c6.appspot.com",
          // messagingSenderId: "578537090931",
          // appId: "1:578537090931:web:253ad24581211e0b1c1f06",
          // measurementId: "G-3GTJ84DHBZ"
          apiKey: "AIzaSyCVbp7etHe5voE7ktlmIjLxkHs8q75IBWc",
          authDomain: "pencil-1c1fe.firebaseapp.com",
          databaseURL: "https://pencil-1c1fe.firebaseio.com",
          projectId: "pencil-1c1fe",
          storageBucket: "gs://pencil-1c1fe.appspot.com",
          messagingSenderId: "739325633580",
          appId: "1:739325633580:web:c025868d054e2e07d31d89",
          measurementId: "G-5SLGG0F2R2"
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        },
        database: {
          emulatorPort: 3000,
          emulatorHost: "localhost"
        }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
