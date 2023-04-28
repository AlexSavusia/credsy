<template>
  <Listbox as="div" :modelValue="selectedItem" @update:modelValue="updateSelect">
    <ListboxLabel v-if="label" class="sr-only" v-text="label" />
    <div class="relative">
      <ListboxButton
        :class="['button-select', buttonClasses]"
        @mouseover="onMouseover"
        @mouseout="onMouseout"
        @focus="onFocus"
        @blur="onBlur"
      >
        <Icon :class="iconClasses" :name="buttonIconName" aria-hidden="true" />
        <span :class="textClasses" v-text="selectedItem.name" />
      </ListboxButton>
      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none xs:text-base sm:text-sm">
          <ListboxOption as="template" v-for="item in items" :key="item.id" :value="item" v-slot="{ active, selected }">
            <li :class="[active ? 'text-black bg-blue-50' : 'text-black', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <span :class="['block truncate', selected ? 'font-semibold' : 'font-normal']" v-text="item.name" />
              <span v-if="selected" :class="[active ? 'text-green-600' : 'text-green-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <Icon name="check" class="w-3 h-6" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { IconNameType } from '@/types/icon-types'
import { SelectItemType, SelectItemsType } from '@/types/select-types'
import {
  ButtonContentPositionType,
  ButtonIconType,
  ButtonRadiusType,
  ButtonSizeType,
  ButtonType
} from '@/types/button-types'
import classNames from 'classnames'

const {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} = await import('@headlessui/vue')

const props = defineProps({
  label: {
    type: String as PropType<string>,
    default: '',
  },
  items: {
    type: Array as PropType<SelectItemsType>,
    default: () => [],
  },
  modelValue: {
    type: Object as PropType<SelectItemType>,
    default: {},
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const buttonIconName = ref<IconNameType>('chevron-down')
const buttonIcon = ref<ButtonIconType>('right-icon')
const buttonContentPosition = ref<ButtonContentPositionType>('center')
const buttonRadius = ref<ButtonRadiusType>('semi-rounded')
const buttonTag = ref<string>('button')
const buttonSize = ref<ButtonSizeType>('medium')
const buttonType = ref<ButtonType>('select')
const buttonBlock = ref<boolean>(true)

const selectedItem = ref<SelectItemType | undefined>(undefined)
const selectedName = ref<string>('')

const { disabled } = toRefs(props)

const {
  onFocus,
  onBlur,
  onMouseover,
  onMouseout,
  isSemiRounded,
  validOnlyIcon,
  title,
  validWithIcon,
} = useButton({ text: selectedName, iconName: buttonIconName, icon: buttonIcon, radius: buttonRadius, tag: buttonTag })

const {
  buttonClasses: _buttonClasses,
  iconClasses,
  textClasses,
} = useButtonClasses({ size: buttonSize, type: buttonType, isSemiRounded })

const buttonClasses = computed<string>(() => classNames(_buttonClasses.value, {
  'button-with-icon': validWithIcon.value,
  'button-left-icon': buttonIcon.value === 'left-icon',
  'button-right-icon': buttonIcon.value === 'right-icon',
  'button-only-icon shrink-0': validOnlyIcon.value,
  'button-left-content': buttonContentPosition.value === 'left',
  'button-right-content': buttonContentPosition.value === 'right',
  'button-center-content': buttonContentPosition.value === 'center',
  'button-block w-full': buttonBlock.value,
  'is-disabled': disabled.value,
}))

const updateSelect = (value: SelectItemType) => {
  selectedItem.value = value
  emit('update:modelValue', value)
}

watch(
  () => props.modelValue,
  () => {
    selectedItem.value = props.modelValue
    selectedName.value = selectedItem.value?.name ?? ''
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.button-select {
  @apply inline-flex flex-nowrap items-center cursor-pointer;

  &:focus {
    @apply outline-none;
  }

  &:disabled {
    @apply pointer-events-none opacity-50;
  }

  &.button-only-icon {
    @apply px-0;

    .button-text {
      @apply sr-only m-0;
    }
  }

  &.button-with-icon.button-right-icon {
    @apply space-x-reverse flex-row-reverse;
  }

  &.button-small {
    .button-text {
      @apply text-base leading-5 font-semibold;
    }

    .button-icon {
      @apply w-5 h-5;
    }

    &.button-only-icon {
      @apply min-w-10;
    }
  }

  &.button-medium {
    .button-text {
      @apply text-base font-semibold;
    }

    .button-icon {
      @apply w-5 h-5;
    }

    &.button-only-icon {
      @apply min-w-12;
    }
  }

  &.button-left-content {
    @apply justify-start;

    &.button-only-icon {
      @apply justify-center;
    }
  }

  &.button-right-content {
    @apply justify-end;

    &.button-only-icon {
      @apply justify-center;
    }
  }

  &.button-center-content {
    @apply justify-center;
  }
}
</style>
