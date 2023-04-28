<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import classNames from 'classnames'
// import SimplebarVue from 'simplebar-vue'
import { ScrollContainerDirectionEnum, ScrollContainerDirectionType } from '@/types/scroll-container-types'

// import 'simplebar/dist/simplebar.css'

const props = defineProps({
  direction: {
    type: String as PropType<ScrollContainerDirectionType>,
    default: 'vertical',
  },
})

const containerClasses = computed<string>(() => classNames('scroll-container', {
  'is-horizontal w-auto': props.direction === ScrollContainerDirectionEnum.horizontal,
  'is-vertical': props.direction === ScrollContainerDirectionEnum.vertical,
}))
</script>
