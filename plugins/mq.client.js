import { defineNuxtPlugin } from '#app'
import { Vue3Mq } from 'vue3-mq'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Mq, {
    breakpoints: {
      xs: 0,
      sm: 640,
      md: 768,
      air: 912,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  })
})
