<template>
  <div class="relative bg-white xs:py-10 lg:py-18 xs:px-4 sm:px-6 lg:px-8">
    <section class="relative mx-auto max-w-6.5xl service-section-carousel">
      <SectionHeader
        :title="title"
        :subtitle="description"
        type="service"
      />
      <div class="flex">
        <Tabs class="mt-16 sm:mx-auto" :tabs="tabs" v-if="isDesktop" v-model="selectedTab" />
      </div>
      <div class="bg-sand-100 rounded-lg py-1.5 px-3.5 h-14 mt-8" v-if="isPhoneOrTablet">
        <SelectCustom :items="tabs" v-model="selectedTab" />
      </div>
      <p v-if="intro" class="xs:text-sm lg:text-base text-gray-600 xs:mt-6 lg:mt-10 sm:max-w-4xl sm:mx-auto xs:text-left sm:text-center" v-text="intro" />
      <client-only>
      <Carousel
        class="service-container-outer xs:mt-8 lg:mt-16"
        wrapper-classes="service-container-wrapper"
        :slides-per-view="slidesPerView"
      >
        <SwiperSlide class="flex self-stretch !h-auto carousel-slide" v-for="{ title, description, items, href } in services" :key="title">
          <ServiceCard
            :title="title"
            :description="description"
            :items="items"
            :href="href"
            :color="isPhoneOrTablet ? 'dark' : 'light'"
          />
        </SwiperSlide>
      </Carousel>
      </client-only>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ServicesType } from '@/types/service-types'
import { TabsType, TabType } from '@/types/tabs-types'
import { CarouselSlidesPerViewType } from '@/types/carousel-types'

const { nanoid } = await import('nanoid')
const { SwiperSlide } = await import('swiper/vue')

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  services: {
    type: Array as PropType<ServicesType>,
    default: () => [],
  }
})

const slidesPerView = computed<CarouselSlidesPerViewType>(() => ({
  mobile: '1',
  tablet: '2',
  desktop: '3'
}))

const isPhoneOrTablet = inject('isPhoneOrTablet')
const isDesktop = inject('isDesktop')

const tabs: TabsType = [
  { id: nanoid(), name: 'Licensing services' },
  { id: nanoid(), name: 'Payer Enrollment' },
  { id: nanoid(), name: 'Privileging/Credentialing' },
]

const selectedTab = ref<TabType>(tabs[0])
</script>
