<template>
  <component
    :class="badgeClasses"
    :is="tag"
    v-bind="attrs"
    :style="color ? { backgroundColor: color }: {}"
  >
    {{text}}
  </component>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { BadgeSizeType, BadgeRadiusType } from '@/types/badge-types'
import { useBadgeClasses } from '@/composables/useBadgeClasses'

const props = defineProps({
  size: {
    type: String as PropType<BadgeSizeType>,
    default: 'medium',
  },
  color: {
    type: String as PropType<string>,
    default: '',
  },
  radius: {
    type: String as PropType<BadgeRadiusType>,
    default: 'semi-rounded',
  },
  text: {
    type: String as PropType<string>,
    default: '',
  },
  tag: {
    type: String as PropType<string>,
    default: 'span',
  },
})

const { text, radius, color, size } = toRefs(props)

const { isSemiRounded, isPill } = useBadge({ radius })

const { badgeClasses } = useBadgeClasses({ size, color, isSemiRounded, isPill })

const attrs = useAttrs()
</script>
