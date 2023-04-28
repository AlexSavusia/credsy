import { defineNuxtPlugin } from '#app'
import SocialSharing from 'vue-social-sharing'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SocialSharing)
})
