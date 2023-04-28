<template>
  <div :class="outerClasses" :style="getStyleObject">
    <Swiper
      refs="mySwiper"
      :modules="modules"
      :class="containerClasses"
      :loop="options.loop"
      :loopedSlides="options.loopedSlides"
      :navigation="options.navigation"
      :pagination="options.pagination"
      :slides-per-view="options.slidesPerView"
      :space-between="options.spaceBetween"
      :breakpoints="options.breakpoints"
      :auto-height="options.autoHeight"
    >
      <slot />
    </Swiper>
    <div class="flex items-center justify-between h-[1px] -mt-4 w-[240px] mx-auto inset-x-0">
      <Button
        slot="button-prev"
        :class="prevClasses"
        :icon="'only-icon'"
        :size="'small'"
        icon-name="arrow-left"
        title="Назад"
        radius="pill"
        :type="'transparent'"
      />
      <Button
        slot="button-next"
        :class="nextClasses"
        :icon="'only-icon'"
        :size="'small'"
        icon-name="arrow-right"
        title="Вперед"
        radius="pill"
        :type="'transparent'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef, PropType } from "vue";
import {
  CarouselBreakpointsEnum,
  CarouselBreakpointWidthType,
  CarouselCommonSwiperOptionsType,
  CarouselResponsiveSwiperOptionsType,
  CarouselSlidesPerViewType,
  CarouselSwiperOptionsType,
} from '@/types/carousel-types'
import classNames from 'classnames'

const { Pagination, Navigation } = await import('swiper')
const { Swiper } = await import('swiper/vue')
const { merge } = await import('lodash-es')

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  wrapperClasses: {
    type: String as PropType<string>,
    default: '',
  },
  slidesPerView: {
    type: Object as PropType<CarouselSlidesPerViewType>,
    required: true,
  },
})

const { slidesPerView } = toRefs(props)

const screen = inject('screen')
const isDesktop = inject('isDesktop')

const modules = [Pagination, Navigation]

const outerClasses = computed<string>(() => classNames('carousel-container-outer carousel-container-custom full-width xs:px-4 sm:px-6 lg:px-8 pb-3 -mb-3 overflow-hidden'))
const containerClasses = computed<string>(() => classNames('carousel-container mx-auto sm:max-w-6.5xl !overflow-visible'))
const wrapperClasses = computed<string>(() => classNames('carousel-wrapper'))
const prevClasses = computed<string>(() => classNames('carousel-prev swiper-button-prev-custom shrink-0 relative z-10 focus:!ring-0 focus:!ring-offset-0'))
const nextClasses = computed<string>(() => classNames('carousel-next swiper-button-next-custom shrink-0 relative z-10 focus:!ring-0 focus:!ring-offset-0'))

const commonSwiperOptions: CarouselCommonSwiperOptionsType = {
  loop: true,
  loopedSlides: 10,
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  pagination: { clickable: true },
}

const extraSwiperOptions = computed<CarouselResponsiveSwiperOptionsType>(() => ({
  slidesPerView: slidesPerView.value.mobile,
  spaceBetween: 16,
  breakpoints: {
    [CarouselBreakpointsEnum.desktop]: {
      slidesPerView: slidesPerView.value.desktop,
      spaceBetween: 32,
    },
    [CarouselBreakpointsEnum.tablet]: {
      slidesPerView: slidesPerView.value.tablet,
      spaceBetween: 24,
    },
    [CarouselBreakpointsEnum.mobile]: {
      slidesPerView: slidesPerView.value.mobile,
      spaceBetween: 16,
    },
  },
}))

// @ts-ignore
const breakpointsWidth = computed<CarouselBreakpointWidthType>(() => CarouselBreakpointsEnum[screen.value])

const options = computed<CarouselSwiperOptionsType>(() => merge(
  commonSwiperOptions,
  extraSwiperOptions.value,
))

function getSlidesPerView(swiperOptions: CarouselResponsiveSwiperOptionsType): string|number|undefined {
  const width: ComputedRef<CarouselBreakpointWidthType> = breakpointsWidth

  return swiperOptions.breakpoints[width.value].slidesPerView
}

function getSpaceBetween(swiperOptions: CarouselResponsiveSwiperOptionsType): number|undefined {
  const width: ComputedRef<CarouselBreakpointWidthType> = breakpointsWidth

  return swiperOptions.breakpoints[width.value].spaceBetween
}

function getStyleObject(): any {
  return {
    '--slides-per-view': getSlidesPerView(options.value),
    '--space-between': getSpaceBetween(options.value) + 'px',
  }
}

watchEffect(() => console.log(breakpointsWidth.value, options.value))
</script>

<style lang="scss">
.carousel-container-outer {
  --slides-per-view: 1;
  --space-between: 16px;

  .carousel-slide {
    width: calc(
      100% / var(--slides-per-view) - (var(--slides-per-view) - 1) *
        var(--space-between) / var(--slides-per-view)
    );
    margin-right: var(--space-between);

    &.swiper-slide {
      @apply opacity-50;
    }

    &.swiper-slide-active {
      @screen xs {
        @apply opacity-100;
      }
    }

    &.swiper-slide-active,
    &.swiper-slide-active + .swiper-slide {
      @screen air {
        @apply opacity-100;
      }
    }

    &.swiper-slide-active,
    &.swiper-slide-active + .swiper-slide,
    &.swiper-slide-active + .swiper-slide + .swiper-slide {
      @screen lg {
        @apply opacity-100;
      }
    }

    &.swiper-slide-active,
    &.swiper-slide-active + .swiper-slide,
    &.swiper-slide-active + .swiper-slide + .swiper-slide {
      @screen lg {
        @apply opacity-100;
      }
    }
  }

  //.carousel-prev,
  //.carousel-next {
  //  top: 50%;
  //
  //  &::after {
  //    display: none;
  //  }
  //
  //  &.swiper-button-disabled {
  //    display: none;
  //  }
  //}
}
</style>

<style lang="scss">
.carousel-container-outer.carousel-container-custom {
  --slides-per-view: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-size: 16px;
  --swiper-pagination-bullet-width: 16px;

  .swiper-pagination {
    @apply static bottom-auto;

    @screen xs {
      @apply mt-8;
    }

    @screen lg {
      @apply mt-16;
    }
  }

  .swiper-pagination-bullet {
    @apply bg-white relative;

    &::before {
      content: '';
      @apply absolute inset-0 w-2 h-2 m-auto rounded-full bg-blue-400;
    }
  }

  .swiper-pagination-bullet-active {
    @apply bg-gray-600;

    &::before {
      content: '';
      @apply absolute inset-0 w-2 h-2 bg-white;
    }
  }
}
</style>
