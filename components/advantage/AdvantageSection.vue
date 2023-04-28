<template>
  <div :class="['relative bg-white xs:px-4 sm:px-6 lg:px-8', {
    'xs:py-14 lg:pt-18 lg:pb-18': spaceY === 1,
    'xs:py-14 lg:pt-36 lg:pb-18': spaceY === 2,
    'xs:py-14 lg:pt-25 lg:pb-50': spaceY === 3,
  }]">
    <!--div class="absolute inset-0">
      <div class="h-1/3 bg-white sm:h-2/3" />
    </div-->
    <section class="relative mx-auto max-w-6.5xl">
      <SectionHeader
        :title="title"
        :subtitle="description"
        type="advantage"
      />
      <dl class="grid xs:gap-8 lg:gap-12 xs:grid-cols-1 lg:grid-cols-3 xs:mt-8 lg:mt-16">
        <AdvantageItem
          v-for="{ iconName, name, description } in items"
          :key="name"
          :icon-name="iconName"
          :name="name"
          :description="description"
          :icon-size="iconSize"
        />
      </dl>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { AdvantageIconSizeType, AdvantageItemsType, AdvantageSpaceYType } from '@/types/advantage-types'

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
    type: Array as PropType<AdvantageItemsType>,
    default: () => [],
  },
  spaceY: {
    type: Number as PropType<AdvantageSpaceYType>,
    default: 1,
  },
  iconSize: {
    type: String as PropType<AdvantageIconSizeType>,
    default: 'medium',
  },
})
</script>
