<template>
  <component
    :is="tag"
    v-if="!isTagLink"
    v-bind="attrs"
    :class="buttonClasses"
    :disabled="disabled"
    :role="role"
    :title="title"
    tabindex="0"
    @click="clickHandler"
    @mouseover="onMouseover"
    @mouseout="onMouseout"
    @focus="onFocus"
    @blur="onBlur"
  >
    <Icon v-if="iconName" :class="iconClasses" :name="iconName" aria-hidden="true" />
    <span v-if="text" :class="textClasses" v-text="text" />
  </component>
  <RouterLink v-else v-slot="{ navigate }" :to="to || { path: attrs.href }" custom>
    <a
      v-bind="attrs"
      :class="buttonClasses"
      :role="role || 'link'"
      :title="title"
      :disabled="disabled"
      tabindex="0"
      @click="navigate"
      @keypress.enter="navigate"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
      @focus="onFocus"
      @blur="onBlur"
    >
      <Icon v-if="iconName" :class="iconClasses" :name="iconName" aria-hidden="true" />
      <span v-if="text" :class="textClasses" v-text="text" />
    </a>
  </RouterLink>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import classNames from 'classnames'
import {
  ButtonSizeType,
  ButtonType,
  ButtonIconType,
  ButtonDecorType,
  ButtonContentPositionType,
  ButtonRadiusType
} from '@/types/button-types'
import { IconNameType } from '@/types/icon-types'
// import Icon from '@/components/icon/Icon'

const props = defineProps({
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'medium',
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary',
  },
  icon: {
    type: String as PropType<ButtonIconType>,
    default: 'none-icon',
  },
  decor: {
    type: String as PropType<ButtonDecorType>,
    default: 'none-decor',
  },
  contentPosition: {
    type: String as PropType<ButtonContentPositionType>,
    default: 'center',
  },
  radius: {
    type: String as PropType<ButtonRadiusType>,
    default: 'semi-rounded',
  },
  selected: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  iconName: {
    type: String as PropType<IconNameType>,
    default: undefined,
  },
  text: {
    type: String as PropType<string>,
    default: '',
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  tag: {
    type: String as PropType<string>,
    default: 'button',
  },
  block: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  to: {
    type: [Object, String] as PropType<object | string>,
    default: '/',
  },
})

const emit = defineEmits(['click'])

const {
  text,
  iconName,
  icon,
  radius,
  tag,
  type,
  size,
  block,
  disabled,
  contentPosition,
  to,
  decor
} = toRefs(props)

const {
  onFocus,
  onBlur,
  onMouseover,
  onMouseout,
  isSemiRounded,
  isTagLink,
  role,
  validOnlyIcon,
  title,
  validWithIcon,
} = useButton({ text, iconName, icon, radius, tag })

const {
  buttonClasses: _buttonClasses,
  iconClasses,
  textClasses,
} = useButtonClasses({ size, type, isSemiRounded })

const buttonClasses = computed(() => classNames(_buttonClasses.value, {
  'button-with-icon': validWithIcon.value,
  'button-left-icon': icon.value === 'left-icon',
  'button-right-icon': icon.value === 'right-icon',
  'button-only-icon shrink-0': validOnlyIcon.value,
  'button-left-content': contentPosition.value === 'left',
  'button-right-content': contentPosition.value === 'right',
  'button-center-content': contentPosition.value === 'center',
  'button-decor-tl': decor.value === 'left-decor',
  'button-decor-tr': decor.value === 'right-decor',
  'button-decor-none': decor.value === 'none-decor',
  'button-block w-full': block.value,
  'is-disabled': disabled.value,
}))

const clickHandler = (event: Event): void => {
  emit('click', event)
}

const attrs = useAttrs()
</script>

<style lang="scss">
.button {
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

  &.button-decor-tl,
  &.button-decor-tr {
    @apply relative overflow-visible;
  }

  &.button-decor-tl::after,
  &.button-decor-tr::after {
    content: '';
    background: url('./svg/button-decor-click.svg') no-repeat;
    background-size: contain;
    @apply absolute top-0 w-[53px] h-[71px] -translate-y-[40px];

    @screen sm {
      @apply w-[71px] h-[100px] -translate-y-[56px];
    }
  }

  &.button-decor-tr::after {
    @apply right-0 -scale-x-100 translate-x-[38px];

    @screen sm {
      @apply translate-x-[48px];
    }
  }
}
</style>
