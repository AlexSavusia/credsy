import { defineNuxtPlugin } from '#app'
import imageUrlBuilder from '@sanity/image-url'

export default defineNuxtPlugin(() => {
  const builder = imageUrlBuilder(useSanity().config)

  const urlFor = (source) => builder.image(source).auto('format')

  return {
    provide: { urlFor },
  }
})
