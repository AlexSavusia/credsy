<template>
  <RouterLink v-if="!external" v-slot="{ navigate }" :to="to || { path: attrs.href }" custom>
    <a v-bind="attrs" :href="attrs.href" :class="linkClasses" role="link" tabindex="0" @click="navigate" @keypress.enter="navigate">
      <slot name="icon" v-if="$slots.icon || iconName">
        <Icon :class="iconClasses" :name="iconName" aria-hidden="true" />
      </slot>
      <span v-if="text" :class="textClasses" v-text="text" />
    </a>
  </RouterLink>
  <a v-else v-bind="attrs" :href="attrs.href" :class="linkClasses" role="link" tabindex="0">
    <slot name="icon" v-if="$slots.icon || iconName">
      <Icon :class="iconClasses" :name="iconName" aria-hidden="true" />
    </slot>
    <span v-if="text" :class="textClasses" v-text="text" />
  </a>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import classNames from 'classnames'
import { LinkType, LinkSizeType, LinkStateType, LinkStyleType, LinkWeightType, LinkIconType } from '@/types/link-types'
import { IconNameType } from '@/types/icon-types'
import { useLink } from '@/composables/useLink'

// import Icon from '@/components/icon/Icon'

const props = defineProps({
  size: {
    type: String as PropType<LinkSizeType>,
    default: 'medium',
  },
  state: {
    type: String as PropType<LinkStateType>,
    default: 'default',
  },
  type: {
    type: String as PropType<LinkType>,
    default: 'base',
  },
  icon: {
    type: String as PropType<LinkIconType>,
    default: 'left-icon',
  },
  linkStyle: {
    type: String as PropType<LinkStyleType>,
    default: 'default',
  },
  weight: {
    type: String as PropType<LinkWeightType>,
    default: 'regular',
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
  darkMode: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  isActive: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  to: {
    type: [Object, String] as PropType<object|string>,
    default: '/',
  },
  external: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const {
  text,
  iconName,
  type,
  size,
  weight,
  icon,
  to,
  disabled,
  linkStyle,
  isActive,
  darkMode
} = toRefs(props)

const {
  validOnlyIcon,
  validWithIcon
} = useLink({ text, iconName, icon })

const {
  linkClasses: _linkClasses,
  iconClasses,
  textClasses
} = useLinkClasses({ size, type, weight, linkStyle, isActive, darkMode })

const linkClasses = computed(() => classNames(_linkClasses.value, {
  'decorated-link-with-icon': validWithIcon.value,
  'decorated-link-left-icon': icon.value === 'left-icon',
  'decorated-link-right-icon': icon.value === 'right-icon',
  'decorated-link-only-icon shrink-0': validOnlyIcon.value,
  'cursor-pointer': !disabled.value,
  'is-disabled pointer-events-none opacity-50': disabled.value,
}))

const attrs = useAttrs()
</script>

<style lang="scss">
.decorated-link {
  @apply inline-flex flex-nowrap items-center;

  &.decorated-link-only-icon {
    .decorated-link-text {
      @apply sr-only m-0;
    }
  }

  &.decorated-link-with-icon.decorated-link-right-icon {
    @apply space-x-reverse flex-row-reverse;
  }

  &.decorated-link-medium {
    .decorated-link-icon {
      @apply w-4 h-4;
    }

    &.decorated-link-only-icon {
      @apply min-w-10;
    }
  }
}

@mixin initial-transform {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
}

.decorated-link-style-default {
  .decorated-link-text::before {
    content: '';
    background: currentColor;
    position: absolute;
    top: 100%;
    left: 0;
    height: 1px;
    width: 100%;
    pointer-events: none;
    transition: transform 0.3s;
    @include initial-transform;
  }

  &:hover .decorated-link-text::before,
  &:focus .decorated-link-text::before {
    transform-origin: 0 50%;
    transform: scale3d(1, 1, 1);
  }

  &.is-disabled {
    &:hover .decorated-link-text::before,
    &:focus .decorated-link-text::before {
      @include initial-transform;
    }
  }
}

.decorated-link-style-default-active {
  .decorated-link-text::before {
    transform-origin: 0 50%;
    transform: scale3d(1, 1, 1);
  }
}
</style>
