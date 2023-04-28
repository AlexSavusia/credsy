import svgLoader from 'vite-svg-loader'

const year = 31536000

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // script: [
      //   {
      //     type: 'text/partytown',
      //     innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NH59KVL');`,
      //   },
      //   // {
      //   //   type: 'text/partytown',
      //   //   innerHTML:
      //   //     '(function(){const script = document.createElement(\'script\'); script.src = \'https://js-eu1.hsforms.net/forms/embed/v2.js\'; script.defer = true; body?.appendChild(script); script.addEventListener(\'load\', () => {window.hbsptFormsCreate = (info) => window.hbspt.forms.create(info) })})()',
      //   // },
      // ],
    },
  },
  // partytown: {
  //   forward: ['dataLayer.push'],
  // },
  css: ['aos/dist/aos.css', '@/assets/scss/main.scss'],
  ssr: true,
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
    routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': `public,max-age=${year},s-maxage=${year}` } },
      '/~partytown/**': { headers: { 'cache-control': `public,max-age=${year},s-maxage=${year}` } },
    },
  },
  build: {
    transpile: ['mosha-vue-toastify'],
  },
  modules: [
    '@nuxtjs/sanity',
    // '@nuxtjs/html-validator',
    'nuxt-delay-hydration',
    'nuxt-simple-robots',
    '@nuxtjs/partytown',
  ],
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === 'development',
    mode: 'init',
  },
  sourcemap: {
    server: true,
    client: true,
  },
  sanity: {
    projectId: 'u5lfqron',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-100vh-fix': {},
      'postcss-pxtorem': {},
    },
  },
  vite: {
    build: {
      sourcemap: true,
      minify: 'terser',
      rollupOptions: {
        // external: [new RegExp('swiper/modules/zoom/zoom.js')],
        treeshake: {
          preset: 'smallest',
          annotations: true,
          moduleSideEffects: true,
          tryCatchDeoptimization: true,
          correctVarValueBeforeDeclaration: true,
        },
        output: {
          manualChunks(id) {
            const chunks = [
              '@headlessui',
              'runtime-dom',
              'runtime-core',
              // 'swiper/modules/zoom/zoom.js',
              'swiper/vue',
              'swiper',
              'vue-router',
              '@vue',
              'vue3-scroll-spy',
              'aos',
              'vue-social-sharing',
              'vue',
              'lodash-es',
              'transliteration',
            ]
            if (id.includes('/node_modules/')) {
              for (const chunkName of chunks) {
                if (id.includes(chunkName)) {
                  return chunkName
                }
              }
            }
          },
        },
      },
    },
    plugins: [svgLoader()],
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    },
  },
})
