<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <div class="flex-1">
      <Header />
      <main>
        <HeroBlogSection :title="title" :date="'Last Updated: Jan 07, 2023'" :type="'owner'" />
        <div class="mx-auto xs:px-4 sm:px-6 lg:px-28 w-full grid xs:grid-cols-[1fr] lg:grid-cols-[280px_1fr] gap-8 lg:py-18">
          <Sidebar data-aos="fade-in" data-aos-once="true" />
          <article data-aos="fade-in" data-aos-once="true" class="prose xs:prose-xs lg:prose-lg max-w-[800px]">
            <slot></slot>
          </article>
        </div>
        <BookConsultationShortSection data-aos="fade-up" data-aos-once="true" :title="bookShort.title" :description="bookShort.description" :button-text="bookShort.buttonText" />
        <BlogSection data-aos="fade-up" data-aos-once="true" :title="blog.title" :description="blog.description" />
      </main>
    </div>
    <div class="mt-8" />
    <!--SubscribeSection data-aos="fade-in" data-aos-once="true" /-->
    <Footer data-aos="fade-in" data-aos-once="true" />
  </div>
  <Dialog v-if="store.state.openHubspotPopup" />
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
// import Header from '@/components/Header'
// import Footer from '@/components/footer/Footer'
// import Dialog from '@/components/Dialog'
// import HeroBlogSection from '@/components/hero/HeroBlogSection'
// import Sidebar from '@/components/sidebar/Sidebar'
// import BookConsultationShortSection from '@/components/book/BookConsultationShortSection'
// import BlogSection from '@/components/blog/BlogSection'

// import SubscribeSection from '@/components/SubscribeSection'

const store = useStore()
const route = useRoute()

const title = computed<string>(() => {
  const routeTitleMap = {
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Use',
    'default': 'Title',
  }

  // @ts-ignore
  return routeTitleMap[route.name] || routeTitleMap.default
})

const hero: {
  title: string,
} = {
  title: `How Physicians Can Benefit from Uniform Application by FSMB`,
}

const bookShort: {
  title: string,
  description: string,
  buttonText: string,
} = {
  title: `Book your Free Consultation&nbsp;Today`,
  description: 'And pick our brain for free. Zero commitments.',
  buttonText: 'Book a Consultation',
}

const blog: {
  title: string,
  description: string,
  // items: any[],
} = {
  title: `Most popular`,
  description: 'Most popular news, reading resources and articles about medical licensing and payors',
  // items: () => [],
}
</script>
