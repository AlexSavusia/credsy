<template>
  <div class="flex">
    <div class="flex items-center" v-for="({ text, href }, number) in items" :key="text">
      <span :class="sepClasses" aria-hidden="true" v-if="number !== 0">•</span>
      <RouterLink v-if="href" :to="href" :class="linkClasses" v-text="text" />
      <span
        v-else
        :class="textClasses"
        v-text="text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { MetaItemsType, MetaSizeType, MetaColorType } from '@/types/meta-types'
import { useMetaClasses } from '@/composables/useMetaClasses'

const props = defineProps({
  items: {
    type: Array as PropType<MetaItemsType>,
    required: true,
  },
  size: {
    type: String as PropType<MetaSizeType>,
    default: 'small',
  },
  color: {
    type: String as PropType<MetaColorType>,
    default: 'light',
  }
})

const { size, color } = toRefs(props)

const {
  linkClasses,
  textClasses,
  sepClasses
} = useMetaClasses({ size, color })
</script>
