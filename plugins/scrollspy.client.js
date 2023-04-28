import { defineNuxtPlugin } from '#app'
import { registerScrollSpy, Easing } from 'vue3-scroll-spy'

export default defineNuxtPlugin((nuxtApp) => {
  registerScrollSpy(nuxtApp.vueApp, { easing: Easing.Cubic.InOut })
})
