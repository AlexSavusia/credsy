<template>
  <div>
    <label :for="id" class="sr-only" v-text="'Subscribe'" />
    <div class="flex rounded shadow-xs">
      <div class="relative flex flex-grow items-stretch h-12 focus-within:z-10">
        <input
          :class="inputClasses"
          type="email"
          name="subscribe-email"
          :id="id"
          placeholder="Enter your email"
        />
      </div>
      <Button
        :class="_buttonClasses"
        :size="'medium'"
        :type="'yellow'"
        :text="buttonText"
        :decor="buttonDecor"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { ButtonBorderType, ButtonDecorType } from '@/types/button-types'

const props = defineProps({
  buttonClasses: {
    type: String as PropType<string>,
    default: '',
  },
  buttonText: {
    type: String as PropType<string>,
    default: 'Subscribe',
  },
  buttonDecor: {
    type: String as PropType<ButtonDecorType>,
    default: 'none-decor',
  },
  border: {
    type: String as PropType<ButtonBorderType>,
    default: 'light',
  },
})

const isBorderLight = computed<boolean>(() => props.border === 'light')
const isBorderDark = computed<boolean>(() => props.border === 'dark')

const inputClasses = computed<string>(() => classNames('block w-full rounded-none rounded-l pl-3.5 border border-l-3 text-base bg-white text-black placeholder-gray-250', {
    'border-gray-300 focus:border-gray-600 focus:ring-gray-600': isBorderLight.value,
    'border-[#072734] focus:border-gray-600 focus:ring-gray-600': isBorderDark.value,
}))

const _buttonClasses = computed<string>(() => classNames(props.buttonClasses, '-ml-px !rounded-l-none !border shrink-0', {
  '!border-gray-300': isBorderLight.value,
  '!border-[#072734]': isBorderDark.value,
}))

const id = nanoid()
</script>
