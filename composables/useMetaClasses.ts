import { Ref } from 'vue'
import classNames from 'classnames'
import { MetaSizeType, MetaColorType } from '@/types/meta-types'

export const useMetaClasses = ({
  size,
  color,
}: {
  size: Ref<MetaSizeType>
  color: Ref<MetaColorType>
}): {
  linkClasses: Ref<string>
  textClasses: Ref<string>
  sepClasses: Ref<string>
} => {
  const isMedium = computed<boolean>(() => ['medium'].includes(size.value))
  const isSmall = computed<boolean>(() => ['small'].includes(size.value))

  const isLight = computed<boolean>(() => ['light'].includes(color.value))
  const isDark = computed<boolean>(() => ['dark'].includes(color.value))

  const linkClasses = computed<string>(() =>
    classNames('whitespace-nowrap', {
      'text-base font-light': isMedium.value,
      'd-ss-meta': isSmall.value,
      'text-gray-300 hover:text-gray-300': isLight.value,
      'text-gray-600 hover:text-gray-600': isDark.value,
    })
  )

  const textClasses = computed<string>(() =>
    classNames('whitespace-nowrap', {
      'text-base font-light': isMedium.value,
      'd-ss-meta font-light': isSmall.value,
      'text-gray-300': isLight.value,
      'text-gray-600': isDark.value,
    })
  )

  const sepClasses = computed<string>(() =>
    classNames('inline-flex ррshrink-0 items-center justify-center', {
      'text-base font-light h-6 w-6': isMedium.value,
      'd-ss-meta font-light h-6 w-6': isSmall.value,
      'text-gray-300': isLight.value,
      'text-gray-600': isDark.value,
    })
  )

  return {
    linkClasses,
    textClasses,
    sepClasses,
  }
}
