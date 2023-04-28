<template>
  <div class="relative overflow-hidden bg-white xs:px-4 sm:px-6 lg:px-8 xs:py-14 lg:pt-[138px] lg:pb-[60px] trusted-by-container">
    <div class="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
      <ArrowImage class="absolute top-1/2 left-1/2 -translate-x-[calc(50%-20px)] -translate-y-[calc(50%+66px)]" />
    </div>
    <div class="relative mx-auto max-w-6.5xl w-full">
      <section class="trusted-by-section">
        <div class="lg:grid lg:grid-cols-12">
          <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h2 class="xs:h3_5 lg:h3 font-alt text-black flex flex-col">
              <span>Trusted by <span class="text-blue-900">16,000+</span></span>
              <span>healthcare professionals</span>
            </h2>
            <p class="xs:text-base lg:text-lg text-gray-600 mt-4" v-if="description" v-html="description" />
            <!--div class="mt-8" v-if="validLink && isDesktop">
              <DecoratedLink type="base" :href="link.href" :text="link.text" icon-name="arrow-up-right" icon="right-icon" weight="semibold" />
            </div-->
          </div>
          <div class="relative mt-8 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-start lg:justify-center xs:text-left sm:text-center lg:text-left">
            <div class="inline-flex items-center xs:space-x-4 lg:space-x-10 lg:translate-x-4 lg:-translate-y-2 self-end">
              <div>
                <div class="w-[196px] flex flex-col xs:px-4 lg:px-6 xs:py-4 lg:py-5 space-y-2 text-center bg-black rounded-xl relative">
                  <span class="xs:text-[26px] lg:text-[30px] leading-[32px] -tracking-[0.4px] xs:font-semibold lg:font-bold text-white">4.9</span>
                  <Rating size="medium" />
                  <span class="text-sm leading-[16px] text-white text-opacity-60">Overall Rating</span>
                  <PlusImage class="absolute -right-[16px] -top-[16px] xs:w-[40px] xs:h-[32px] lg:w-[44px] lg:h-[36px]" />
                </div>
              </div>
              <div class="min-w-0 flex-1">
                <BBBImage class="xs:max-w-full lg:max-w-none xs:h-[92px] lg:h-[105px]" />
              </div>
            </div>
          </div>
        </div>
        <!---div class="mt-8 xs:text-left sm:text-center" v-if="validLink && isPhoneOrTablet">
          <DecoratedLink type="base" :href="link.href" :text="link.text" icon-name="arrow-up-right" icon="right-icon" weight="semibold" />
        </div-->
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { TrustedByLinkType } from '@/types/trustedby-types'

const BBBImage = await import('./svg/BBBImage.svg')
const ArrowImage = await import('./svg/ArrowImage.svg')
const PlusImage = await import('./svg/PlusImage.svg')

const props = defineProps({
  description: {
    type: String,
    default: '',
  },
  link: {
    type: Object as PropType<TrustedByLinkType>,
    default: () => {},
  },
})

// const validLink = computed<boolean>(() => !!props.link && !!props.link.text && !!props.link.href)

// const isPhoneOrTablet = inject('isPhoneOrTablet')
// const isDesktop = inject('isDesktop')
</script>
