<template>
  <div>
    <label v-if="label" :for="id" :class="labelClasses" v-text="label" />
    <div
      :class="{ 'mt-1.5': label }"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
      @focus="onFocus"
      @blur="onBlur"
    >
      <input
        v-bind="attrs"
        :class="inputClasses"
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="updateInput"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    <label v-if="hint" :for="id" :class="hintClasses" v-text="hint" />
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { InputRadiusType, InputSizeType, InputStateType } from '@/types/input-types'

const props = defineProps({
  modelValue: {
    type: String as PropType<string>,
    default: '',
  },
  size: {
    type: String as PropType<InputSizeType>,
    default: 'small',
  },
  state: {
    type: String as PropType<InputStateType>,
    default: 'default',
  },
  radius: {
    type: String as PropType<InputRadiusType>,
    default: 'semi-rounded',
  },
  label: {
    type: String as PropType<string>,
    default: '',
  },
  hint: {
    type: String as PropType<string>,
    default: '',
  },
  type: {
    type: String as PropType<'text'>,
    default: 'text',
  },
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const { size, state, radius, disabled } = toRefs(props)

const {
  isSemiRounded,
  hover,
  focus,
  onMouseover,
  onMouseout,
  onFocus,
  onBlur
} = useInput({ radius })

const {
  inputClasses,
  labelClasses,
  hintClasses
} = useInputClasses({ size, state, hover, focus, disabled, isSemiRounded })

const attrs = useAttrs()

const id = nanoid()

const updateInput = (event: Event): void => {
  // @ts-ignore
  emit('update:modelValue', event.target.value)
}
</script>
