<template>
  <div :class="['bg-white lg:overflow-hidden feature-container relative', {
    'xs:px-4 sm:px-6 lg:px-12 xs:py-8 lg:py-18 feature-container-primary': isPrimary,
    'xs:px-4 sm:px-6 xs:py-8 lg:pt-[120px] lg:pb-18 feature-container-secondary': isSecondary,
  }]">
    <section class="mx-auto max-w-6.5xl feature-section relative">
      <SectionHeader
        v-if="title || description"
        :title="title"
        :subtitle="description"
        :type="'feature'"
      />
      <div v-if="isSecondary" class="feature-items xs:mt-8 lg:mt-16 xs:space-y-8 lg:space-y-16">
        <FeatureItem v-for="({ title, description, items, imageName, bgName, colorClasses }, index) in items" :title="title" :description="description" :items="items" :image-name="imageName" :bg-name="bgName" :color-classes="colorClasses" :type="'secondary'" :reverse="(index % 2) !== 0" />
      </div>
      <FeatureItem v-if="isPrimary" v-for="{ title, description, items, imageName, bgName, colorClasses } in items.slice(0, 1)" :title="title" :description="description" :items="items" :image-name="imageName" :bg-name="bgName" :color-classes="colorClasses" :type="'primary'" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { FeatureItemsType, FeatureType } from '@/types/feature-types'

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  items: {
    type: Array as PropType<FeatureItemsType>,
    default: () => [],
  },
  type: {
    type: String as PropType<FeatureType>,
    default: 'primary',
  },
})

const isPrimary = computed<boolean>(() => props.type === 'primary')
const isSecondary = computed<boolean>(() => props.type === 'secondary')
</script>
