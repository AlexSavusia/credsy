<template>
  <div class="book-consultation-container xs:px-4 sm:px-6 xs:py-0 lg:pt-[114px] lg:pb-[66px]">
    <div class="relative mx-auto max-w-6.5xl w-full">
      <div class="book-consultation-bg xs:hidden lg:block" />
      <section class="rounded-lg xs:py-8 xs:px-6 sm:px-12 lg:px-8 lg:pl-18.5 lg:flex lg:items-stretch book-consultation-section bg-gradient-dark">
        <div class="book-consultation-img-round" />
        <div class="lg:w-0 lg:flex-1 lg:pt-[3.7rem] relative">
          <h2 v-if="title" class="font-alt xs:h3_5 lg:h3 -tracking-wide text-white sm:max-w-[640px] flex flex-col lg:-mr-4" v-html="title" />
          <p v-if="description" class="xs:text-base lg:text-lg -tracking-[0.1px] text-gray-200 sm:max-w-[490px] mt-4" v-text="description" />
          <ul v-if="items" class="book-consultation-list space-y-4 mt-8 lg:pl-3">
            <li class="book-consultation-item flex space-x-3" v-for="text in items" :key="text">
              <Icon name="check-circle" class="text-yellow-600 w-6 h-[1.5rem]" aria-hidden="true" />
              <span class="text-base text-white" v-text="text" />
            </li>
          </ul>
        </div>
        <div class="mt-12 sm:w-full sm:max-w-sm lg:mt-0 lg:ml-25 lg:flex-1 lg:flex relative">
          <div class="book-consultation-decor-1 xs:hidden lg:block" />
          <section class="bg-white xs:py-8 lg:py-12 xs:px-6 lg:px-8 rounded-lg lg:w-full flex flex-col">
            <h2 class="h4 !font-semibold text-black" v-text="'Schedule a consultation:'" />
            <div class="mt-3 min-h-[320px] flex items-center justify-center" v-if="!store.getters.loadedHubspotScript" v-text="'Loading...'" />
            <div id="ctaForm" v-once class="mt-3 min-h-[320px] book-consultation-form" v-else />
            <!--div class="space-y-3 mt-3 flex-1">
              <InputGroup label="Name *" type="text" v-model="name" :model-value="fieldName" @update:model-value="fieldName = $event" :state="fieldNameError && 'danger'" :hint="fieldNameError"  />
              <InputGroup label="Email *" type="email" v-model="email" :model-value="fieldEmail" @update:model-value="fieldEmail = $event" :state="fieldEmailError && 'danger'" :hint="fieldEmailError"  />
              <InputGroup label="Phone" type="text" v-model="phone" placeholder="(000) 000-0000" v-maska data-maska="(###) ###-####" />
            </div>
            <div class="mt-9">
              <Button text="Book a Consultation" type="yellow" size="medium" content-position="center" block :disabled="!isFormValid" />
            </div-->
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
// import { useForm, useField, useIsFormValid } from 'vee-validate'
// import * as zod from 'zod'
// import { toFormValidator } from '@vee-validate/zod'
// import parsePhoneNumber, { PhoneNumber } from 'libphonenumber-js'
// import { vMaska } from 'maska'
import { BookItemsType } from '@/types/book-types'
// import Icon from '@/components/icon/Icon'

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
    type: Array as PropType<BookItemsType>,
    default: () => [],
  },
})

const store = useStore()

useHubspotForm({ id: 'ctaForm', type: 'cta' })

// const name = ref<string>('')
// const email = ref<string>('')
// const phone = ref<string>('')
// const parsedPhoneNumber = ref<PhoneNumber>()

// const validationSchema = toFormValidator(
//   zod.object({
//     name: zod
//       .string()
//       .nonempty('This is required'),
//
//     email: zod
//       .string()
//       .email({ message: 'Invalid email address' })
//       .nonempty('This is required'),
//   })
// )

// const { handleReset } = useForm({
//   validationSchema,
// })

// const isFormValid = useIsFormValid()

// const { value: fieldName, errorMessage: fieldNameError } = useField('name')
// const { value: fieldEmail, errorMessage: fieldEmailError } = useField('email')

// watchEffect(() => {
//   parsedPhoneNumber.value = parsePhoneNumber(phone.value, 'US')
// })
</script>

<style lang="scss">
.book-consultation-container {
  .book-consultation-decor-1 {
    background: url('./svg/book-decor-1.svg') no-repeat;
    @apply absolute right-full bottom-full w-[71px] h-[100px] translate-x-[19px] translate-y-[49px];
  }

  .book-consultation-bg {
    background: url('./svg/book-bg.svg') repeat;
    @apply absolute -top-8 -right-8 bottom-31 w-[360px] rounded-lg -z-1;
  }

  .book-consultation-img-round {
    background: url('./svg/book-round.svg') no-repeat;
    @apply absolute left-0 top-0 w-[286px] h-[273px];
  }

  .book-consultation-form {
    iframe {
      @apply min-h-[320px];
    }
  }
}
</style>
