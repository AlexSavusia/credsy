import { Ref } from 'vue'
import classNames from 'classnames'

export const useFeatureItemClasses = ({
  colorClasses,
  reverse = ref(false),
  isPrimary = ref(true),
  isSecondary = ref(true),
}: {
  colorClasses: Ref<string>
  reverse: Ref<boolean>
  isPrimary: Ref<boolean>
  isSecondary: Ref<boolean>
}): {
  itemClasses: Ref<string>
  headerClasses: Ref<string>
  titleClasses: Ref<string>
  descriptionClasses: Ref<string>
  badgeClasses: Ref<string>
  bgColorClasses: Ref<string>
  bgImageClasses: Ref<string>
} => {
  const itemClasses = computed<string>(() =>
    classNames('feature-item w-full relative', {
      'feature-item-reverse': reverse.value,
      'xs:px-6 lg:px-18 xs:py-8 lg:py-18 overflow-hidden feature-item-primary': isPrimary.value,
      'xs:px-6 lg:px-0 xs:py-8 lg:py-10 overflow-hidden feature-item-secondary': isSecondary.value,
    })
  )

  const headerClasses = computed<string>(() => 'space-y-4 xs:text-left sm:text-center lg:text-left relative z-1')

  const titleClasses = computed<string>(() =>
    classNames('font-alt text-black flex flex-col', {
      'xs:h3_5 lg:h2': isPrimary.value,
      'xs:h3_5 lg:h3': isSecondary.value,
    })
  )

  const descriptionClasses = computed<string>(() =>
    classNames('sm:max-w-lg sm:mx-auto lg:mx-0 text-gray-600 space-y-4', {
      'xs:text-base lg:text-lg': isPrimary.value || isSecondary.value,
    })
  )

  const badgeClasses = computed<string>(() => 'relative ml-4 -translate-y-1')

  const bgColorClasses = computed<string>(() =>
    classNames('absolute inset-0 rounded-lg feature-item-bg-color', {
      'w-full': isPrimary.value,
      'xs:w-full lg:w-[calc(50%-36px)]': isSecondary.value,
      'lg:ml-auto lg:-translate-x-[0px]': !reverse.value && isSecondary.value,
      'lg:mr-auto lg:translate-x-[0px]': reverse.value && isSecondary.value,
      [colorClasses.value]: true,
    })
  )

  const bgImageClasses = computed<string>(() =>
    classNames('absolute inset-0 flex items-center feature-item-bg-image', {
      'xs:w-full lg:w-1/2': isPrimary.value,
      'lg:ml-auto': !reverse.value && isPrimary.value,
      'lg:mr-auto': reverse.value && isPrimary.value,
      'xs:w-full lg:w-[calc(50%-36px)]': isSecondary.value,
      'lg:ml-auto lg:-translate-x-[0px]': !reverse.value && isSecondary.value,
      'lg:mr-auto lg:translate-x-[0px]': reverse.value && isSecondary.value,
    })
  )

  return {
    itemClasses,
    headerClasses,
    titleClasses,
    descriptionClasses,
    badgeClasses,
    bgColorClasses,
    bgImageClasses,
  }
}
