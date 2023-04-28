<template>
  <article class="review-item flex flex-col group">
    <header class="space-y-4 bg-white xs:px-6 lg:px-8 py-8 rounded-lg shadow-3 review-item-bubble">
      <p class="font-alt text-black xs:text-base lg:subtitle line-clamp-6 review-item-content group-hover:text-opacity-90" v-text="content" />
      <Rating size="small" :stars="ratingStars" class="review-item-rating" />
    </header>
    <footer class="mt-7">
      <div class="flex ml-8">
        <div>
          <img class="inline-block h-12 w-12 rounded-full" :src="avatarSrc" alt="" />
        </div>
        <div class="ml-5 flex flex-col flex-1">
          <strong class="text-base font-semibold text-black" v-text="doctorName" />
          <span class="text-base text-gray-300 mt-1.5 leading-5.5" v-text="doctorPosition" />
          <span class="text-base text-gray-300 leading-5.5" v-text="doctorProfile" />
        </div>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { RatingStarsType } from '@/types/rating-types'

const props = defineProps({
  content: {
    type: String as PropType<string>,
    required: true,
  },
  ratingStars: {
    type: Number as PropType<RatingStarsType>,
    required: true,
  },
  doctorName: {
    type: String as PropType<string>,
    required: true,
  },
  doctorPosition: {
    type: String as PropType<string>,
    required: true,
  },
  doctorProfile: {
    type: String as PropType<string>,
    required: true,
  },
  avatarSrc: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>

<style lang="scss">
.review-item {
  .review-item-bubble {
    @apply relative;

    &::after {
      content: '';
      @apply w-[16px] h-[16px] absolute top-full left-[38px];
      background: url('./images/bubble-tail.svg') no-repeat;
    }
  }
}
</style>
