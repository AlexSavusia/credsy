<template>
  <div class="relative bg-white xs:py-10 lg:py-18 xs:px-4 sm:px-6 lg:px-8">
    <section class="relative mx-auto max-w-6.5xl service-section-tale">
      <SectionHeader
        :title="title"
        :subtitle="description"
        type="service"
      />
      <div v-if="intro" class="xs:text-sm lg:text-base text-gray-600 xs:mt-6 lg:mt-10 sm:max-w-4xl sm:mx-auto xs:text-left sm:text-center" v-html="intro" />
      <div :class="`tale xs:mt-8 lg:mt-16 grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xs:gap-4 md:gap-8 lg:gap-8`">
        <ServiceCard
          v-for="({ title, description, items, href }, index) in services.slice(0, 3)"
          :key="title"
          :title="title"
          :description="description"
          :items="items"
          :href="href"
          :color="(index === 1) ? 'dark' : 'light'"
          :scale="!!(isDesktop && index === 1)"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ServicesType } from '@/types/service-types'
// import SectionHeader from '@/components/section/SectionHeader'
// import ServiceCard from '@/components/service/ServiceCard'

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
  },
})

const isPhoneOrTablet = inject('isPhoneOrTablet')
const isDesktop = inject('isDesktop')
</script>
