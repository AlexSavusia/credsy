<template>
  <div class="relative bg-white px-4 xs:py-10 lg:py-18 xs:px-4 sm:px-6 lg:px-8">
    <section class="relative mx-auto max-w-6.5xl review-section">
      <SectionHeader
        :title="title"
        :subtitle="description"
        :type="'review'"
      />
      <client-only>
      <Carousel
        class="review-container-outer xs:py-8 lg:py-16"
        wrapper-classes="review-container-wrapper"
        :slides-per-view="slidesPerView"
      >
        <SwiperSlide class="flex carousel-slide" v-for="{ id, content, ratingStars, doctorName, doctorPosition, doctorProfile, avatarSrc } in reviews" :key="id">
          <ReviewItem
            :content="content"
            :rating-stars="ratingStars"
            :doctor-name="doctorName"
            :doctor-position="doctorPosition"
            :doctor-profile="doctorProfile"
            :avatar-src="avatarSrc"
          />
        </SwiperSlide>
      </Carousel>
      </client-only>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { nanoid } from 'nanoid'
import { getImageUrl } from '@/utils'
import { ReviewsType } from '@/types/review-types'
import { CarouselSlidesPerViewType } from '@/types/carousel-types'

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
})

const slidesPerView = computed<CarouselSlidesPerViewType>(() => ({ mobile: '1', tablet: '2', desktop: '3' }))

const reviews: ReviewsType = [
  {
    id: nanoid(),
    content: 'I needed to get a medical license quickly to work for the civilian government job once I found out that my Indiana license did not allow me to register controlled substances outside of the state. It took about a week to do the paperwork, then 2 weeks to get a new state license. I can\'t imagine getting my license any faster.',
    ratingStars: 5,
    doctorName: 'Brian L',
    doctorPosition: 'BBB',
    // doctorProfile: 'Cardiovascular Disease',
    avatarSrc: getImageUrl('no-avatar.svg'),
  },
  {
    id: nanoid(),
    content: 'This service was very helpful in navigating the many forms, tracking the process, and checking progress as needed with the state licensing board. I highly recommend this service!',
    ratingStars: 5,
    doctorName: 'Heidi H',
    doctorPosition: 'BBB',
    // doctorProfile: 'Cardiovascular Disease',
    avatarSrc: getImageUrl('no-avatar.svg'),
  },
  {
    id: nanoid(),
    content: 'I am so glad I used this service! Outstanding group of professionals, especially ******* ****** Organized, attentive, they go above and beyond. Can\'t recommend any organization or person higher.',
    ratingStars: 5,
    doctorName: 'Joseph S',
    doctorPosition: 'Facebook',
    // doctorProfile: 'Cardiovascular Disease',
    avatarSrc: getImageUrl('no-avatar.svg'),
  },
  {
    id: nanoid(),
    content: 'Medical Licensing, LLC did a great job helping me get medical licenses in 3 other states. The process was easy and painless. Thank you!',
    ratingStars: 5,
    doctorName: 'John H',
    doctorPosition: 'Google',
    // doctorProfile: 'Cardiovascular Disease',
    avatarSrc: getImageUrl('no-avatar.svg'),
  },
  {
    id: nanoid(),
    content: 'Well worth the money, and Fred kept me informed all the way through. I would do it again in a heartbeat. All of the staff were very helpful. I am very satisfied!',
    ratingStars: 5,
    doctorName: 'Marion C',
    doctorPosition: 'Trustpilot',
    // doctorProfile: 'Cardiovascular Disease',
    avatarSrc: getImageUrl('no-avatar.svg'),
  },
  {
    id: nanoid(),
    content: 'I would absolutely recommend Medical Licensing to all doctors. I had the pleasure of working with ******** ****** who is a phenomenal professional and was incredibly helpful and involved throughout the entire process.',
    ratingStars: 5,
    doctorName: 'Chen P',
    doctorPosition: 'Google',
    // doctorProfile: 'Cardiovascular Disease',
    avatarSrc: getImageUrl('no-avatar.svg'),
  },
]
</script>

<style lang="scss">
.carousel-container-outer.review-container-outer {
  .swiper-pagination {
    @apply mt-8;

    @screen lg {
      @apply mt-16;
    }
  }
}
</style>
