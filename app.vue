<template>
  <Head>
    <Meta charset="utf-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
    <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="preconnect" as="style" />
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#ffffff" />
  </Head>

  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import AOS from 'aos'
import useMq from '@/composables/useMq'

// const route = useRoute()
// const canonicalHref = ref<string>('')

// watch(
//   () => route.path,
//   (path) => {
//     canonicalHref.value = `https://credsy.netlify.app${path}`
//   },
//   { immediate: true }
// )

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'bg-white'
  },
  title: 'Credsy - An easy way to get licensed and credentialed',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Get licensed and credentialed with ease using our simple and straightforward process. Join our platform today and simplify your professional certification journey',
    }
  ],
  // link: [{ rel: 'canonical', href: canonicalHref.value }],
})

const {
  screen,
  isPhone,
  isShortTablet,
  isWideTablet,
  isTablet,
  isDesktop,
  isPhoneOrTablet,
  isTabletOrDesktop,
  isXs,
  isSm,
  isMd,
  isAir,
  isLg,
  isXl,
  is2Xl,
} = useMq()

provide('screen', screen)
provide('isPhone', isPhone)
provide('isShortTablet', isShortTablet)
provide('isWideTablet', isWideTablet)
provide('isTablet', isTablet)
provide('isDesktop', isDesktop)
provide('isPhoneOrTablet', isPhoneOrTablet)
provide('isTabletOrDesktop', isTabletOrDesktop)
provide('isXs', isXs)
provide('isSm', isSm)
provide('isMd', isMd)
provide('isAir', isAir)
provide('isLg', isLg)
provide('isXl', isXl)
provide('is2Xl', is2Xl)

onMounted(() => {
  AOS.init()
})
</script>
