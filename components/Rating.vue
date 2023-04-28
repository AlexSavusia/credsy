<template>
  <div :class="containerClasses">
    <Icon name="star" :key="number" :class="starClasses" aria-hidden="true" v-for="number in stars" />
  </div>
</template>

<script setup lang="ts">
import { RatingSizeType, RatingStarsType } from '@/types/rating-types'

const props = defineProps({
  size: {
    type: String as PropType<RatingSizeType>,
    default: 'small',
  },
  stars: {
    type: Number as PropType<RatingStarsType>,
    default: 5,
  },
})

const { size } = toRefs(props)

const { containerClasses, starClasses } = useRatingClasses({ size })
</script>
