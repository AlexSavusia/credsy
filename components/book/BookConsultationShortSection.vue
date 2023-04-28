<template>
  <div class="book-consultation-short-container xs:px-4 sm:px-6 lg:py-18">
    <div class="mx-auto max-w-6.5xl w-full">
      <section class="rounded-lg xs:py-8 sm:py-[80px] xs:px-6 sm:px-12 lg:px-25 lg:flex lg:items-center lg:gap-8 book-consultation-short-section bg-gradient-dark relative">
        <div class="book-consultation-img-round" />
        <div class="lg:w-0 lg:flex-1 relative">
          <h2 v-if="title" class="font-alt xs:h3_5 lg:h3 -tracking-wide text-white xs:max-w-xs sm:max-w-lg flex flex-col" v-html="title" />
          <p v-if="description" class="xs:text-base lg:text-lg -tracking-[0.1px] text-gray-200 sm:max-w-lg xs:mt-2 sm:mt-4 line-clamp-2" v-text="description" />
        </div>
        <div class="xs:mt-15 lg:mt-0 sm:w-full sm:max-w-lg lg:flex-1 relative" v-if="isBook">
          <div class="flex xs:flex-col sm:flex-row sm:items-center lg:justify-end gap-8">
            <a class="xs:text-blue-400 lg:text-white lg:hover:text-blue-100 xs:h4 lg:h3_75 !font-medium whitespace-nowrap xs:order-2 sm:order-none xs:text-center book-consultation-phone" v-text="phone.number" :href="`tel:${phone.parsedNumber}`" />
            <Button :decor="'right-decor'" class="shrink-0 xs:-order-1 sm:order-none book-consultation-action" :text="buttonText ?? 'Book a Consultation'" type="yellow" :size="'medium'" icon="right-icon" icon-name="arrow-up-right" @click="store.dispatch('openHubspotPopup')" />
          </div>
        </div>
        <div class="xs:mt-12 sm:mt-15 xs:mb-3.5 sm:mb-0 lg:mt-0 sm:w-full sm:max-w-sm lg:ml-25 lg:flex-1" v-else-if="isSubscribe">
          <InputGroupSubscribe :button-decor="'right-decor'" button-classes="book-consultation-action" :button-text="buttonText ?? 'Request Demo'" :border="'dark'" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useStore } from 'vuex'
import { BookType } from '@/types/book-types'

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  type: {
    type: String as PropType<BookType>,
    default: 'book',
  },
  buttonText: {
    type: String as PropType<string>,
    default: '',
  },
})

const isBook = computed<boolean>(() => ['book'].includes(props.type))
const isSubscribe = computed<boolean>(() => ['subscribe'].includes(props.type))

const { phone } = useContact()

const store = useStore()
</script>

<style lang="scss">
.book-consultation-short-container {
  //.book-consultation-img-1 {
  //  background: url('./svg/book-hand-drawn-accents-1.svg') no-repeat;
  //  @apply absolute right-full bottom-full w-[70px] h-[43px] translate-x-[19px] -translate-y-[8px];
  //}
  //
  //.book-consultation-img-2 {
  //  background: url('./svg/book-hand-drawn-accents-2.svg') no-repeat;
  //  @apply absolute right-full w-[32px] h-[36px] -translate-x-[20px] translate-y-[12px];
  //}
  //
  //.book-consultation-bg {
  //  background: url('./svg/book-bg.svg') repeat;
  //  @apply absolute -top-8 -right-8 bottom-31 w-[360px] rounded-lg -z-1;
  //}

  .book-consultation-img-round {
    background: url('./svg/book-short-round.svg') no-repeat;
    @apply absolute left-0 top-0 w-[268px] h-[319px];
  }

  .book-consultation-phone {
    &::after {
      @screen xs {
        content: '';
        background: url('./svg/book-short-phone.svg') no-repeat;
        @apply block relative mx-auto w-[156px] h-[33px] -mt-[9px] mb-3.5;
      }

      @screen sm {
        @apply hidden;
      }
    }
  }

  .book-consultation-action {
    @screen xs {
      @apply mr-[30px];
    }

    @screen sm {
      @apply mr-0;
    }
  }
}
</style>
