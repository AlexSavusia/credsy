<template>
  <transition
    :name="name"
    @before-appear="beforeAppear"
    @appear="appear"
    @after-appear="afterAppear"
    @appear-cancelled="appearCancelled"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <slot />
  </transition>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { isEmpty } from 'lodash-es'
import { CollapseDimensionType, CollapseCachedStylesType } from '@/types/collapse-transition-types'

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: 'collapse',
  },
  dimension: {
    type: String as PropType<CollapseDimensionType>,
    required: false,
    default: 'height',
  },
  duration: {
    type: Number,
    required: false,
    default: 300,
  },
  easing: {
    type: String,
    required: false,
    default: 'ease-in-out'
  },
})

const emit = defineEmits(['before-appear', 'appear', 'after-appear', 'appear-cancelled', 'before-enter', 'enter', 'after-enter', 'enter-cancelled', 'before-leave', 'leave', 'after-leave', 'leave-cancelled'])

const { name, dimension, duration, easing } = toRefs(props)
const cachedStyles = ref<CollapseCachedStylesType>({})

const transition = computed<string>(() => {
  let transitions: any[] = []

  Object.keys(cachedStyles.value).forEach(key => {
    transitions.push(`${convertToCssProperty(key)} ${duration.value}ms ${easing.value}`)
  })

  return transitions.join(', ')
})

function beforeAppear(el: HTMLElement): void {
  emit('before-appear', el)
}

function appear(el: HTMLElement): void {
  emit('appear', el)
}

function afterAppear(el: HTMLElement): void {
  emit('after-appear', el)
}

function appearCancelled(el: HTMLElement): void {
  emit('appear-cancelled', el)
}

function beforeEnter(el: HTMLElement): void {
  emit('before-enter', el)
}

function enter(el: HTMLElement, done: (...args: any[]) => void): void {
  // Because width and height may be 'auto',
  // first detect and cache the dimensions
  detectAndCacheDimensions(el)

  // The order of applying styles is important:
  // - 1. Set styles for state before transition
  // - 2. Force repaint
  // - 3. Add transition style
  // - 4. Set styles for state after transition
  // If the order is not right and you open any 2nd level submenu
  // for the first time, the transition will not work.
  setClosedDimensions(el)
  hideOverflow(el)
  forceRepaint(el)
  setTransition(el)
  setOpenedDimensions(el)

  emit('enter', el, done)

  // Call done() when the transition ends
  // to trigger the @after-enter event.
  setTimeout(done, duration.value)
}

function afterEnter(el: HTMLElement): void {
  // Clean up inline styles
  unsetOverflow(el)
  unsetTransition(el)
  unsetDimensions(el)
  clearCachedDimensions()

  emit('after-enter', el)
}

function enterCancelled(el: HTMLElement): void {
  emit('enter-cancelled', el)
}

function beforeLeave(el: HTMLElement): void {
  emit('before-leave', el)
}

function leave(el: HTMLElement, done: (...args: any[]) => void): void {
  // For some reason, @leave triggered when starting
  // from open state on page load. So for safety,
  // check if the dimensions have been cached.
  detectAndCacheDimensions(el)

  // The order of applying styles is less important
  // than in the enter phase, as long as we repaint
  // before setting the closed dimensions.
  // But it is probably best to use the same
  // order as the enter phase.
  setOpenedDimensions(el)
  hideOverflow(el)
  forceRepaint(el)
  setTransition(el)
  setClosedDimensions(el)

  emit('leave', el, done)

  // Call done() when the transition ends
  // to trigger the @after-leave event.
  // This will also cause v-show
  // to reapply 'display: none'.
  setTimeout(done, duration.value)
}

function afterLeave(el: HTMLElement): void {
  // Clean up inline styles
  unsetOverflow(el)
  unsetTransition(el)
  unsetDimensions(el)
  clearCachedDimensions()

  emit('after-leave', el)
}

function leaveCancelled(el: HTMLElement): void {
  emit('leave-cancelled', el)
}

function detectAndCacheDimensions(el: HTMLElement): void {
  // Cache actual dimensions
  // only once to void invalid values when
  // triggering during a transition
  if (!isEmpty(cachedStyles.value)) {
    return
  }

  const visibility = el.style.visibility
  const display = el.style.display

  // Trick to get the width and
  // height of a hidden element
  el.style.visibility = 'hidden'
  el.style.display = ''

  cachedStyles.value = detectRelevantDimensions(el)

  // Restore any original styling
  el.style.visibility = visibility
  el.style.display = display
}

function clearCachedDimensions(): void {
  cachedStyles.value = {}
}

function detectRelevantDimensions(el: HTMLElement): {
  height?: string,
  paddingTop?: string,
  paddingBottom?: string,
  width?: string,
  paddingLeft?: string,
  paddingRight?: string,
} {
  // These properties will be transitioned
  if (dimension.value === 'height') {
    return {
      'height': `${el.offsetHeight}px`,
      'paddingTop': el.style.paddingTop || getCssValue(el, 'padding-top'),
      'paddingBottom': el.style.paddingBottom || getCssValue(el, 'padding-bottom'),
    }
  }

  if (dimension.value === 'width') {
    return {
      'width': `${el.offsetWidth}px`,
      'paddingLeft': el.style.paddingLeft || getCssValue(el, 'padding-left'),
      'paddingRight': el.style.paddingRight || getCssValue(el, 'padding-right'),
    }
  }

  return {}
}

function setTransition(el: HTMLElement): void {
  el.style.transition = transition.value
}

function unsetTransition(el: HTMLElement): void {
  el.style.transition = ''
}

function hideOverflow(el: HTMLElement): void {
  el.style.overflow = 'hidden'
}

function unsetOverflow(el: HTMLElement): void {
  el.style.overflow = ''
}

function setClosedDimensions(el: HTMLElement): void {
  Object.keys(cachedStyles.value).forEach(key => {
    // @ts-ignore
    el.style[key] = '0'
  })
}

function setOpenedDimensions(el: HTMLElement): void {
  Object.keys(cachedStyles.value).forEach((key) => {
    // @ts-ignore
    el.style[key] = cachedStyles.value[key]
  })
}

function unsetDimensions(el: HTMLElement): void {
  Object.keys(cachedStyles.value).forEach((key) => {
    // @ts-ignore
    el.style[key] = ''
  })
}

function forceRepaint(el: HTMLElement): void {
  // Force repaint to make sure the animation is triggered correctly.
  // Thanks: https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
  getComputedStyle(el)[dimension.value]
}

function getCssValue(el: HTMLElement, style: string): string {
  return getComputedStyle(el, null).getPropertyValue(style)
}

function convertToCssProperty(style: string): string {
  // Example: convert 'paddingTop' to 'padding-top'
  // Thanks: https://gist.github.com/tan-yuki/3450323
  const upperChars = style.match(/([A-Z])/g)

  if ( ! upperChars) {
    return style
  }

  for (let i = 0, n = upperChars.length; i < n; i++) {
    style = style.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase())
  }

  if (style.slice(0, 1) === '-') {
    style = style.slice(1)
  }

  return style
}

watch(
  () => dimension.value,
  () => {
    clearCachedDimensions()
  }
)
</script>
