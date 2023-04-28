import { Ref } from 'vue'
import classNames from 'classnames'

export const useAdvantageItemCasses = ({
  isMedium = ref(true),
  isLarge = ref(false),
}: {
  isMedium: Ref<boolean>
  isLarge: Ref<boolean>
}): {
  itemClasses: Ref<string>
  iconClasses: Ref<string>
  nameClasses: Ref<string>
  descriptionClasses: Ref<string>
} => {
  const itemClasses = computed<string>(() => classNames('advantage-item relative'))

  const iconClasses = computed<string>(() =>
    classNames('absolute', {
      'w-20 h-20': isMedium.value,
      'w-24 h-24': isLarge.value,
    })
  )

  const nameClasses = computed<string>(() =>
    classNames('h4 text-black font-alt block line-clamp-2', {
      'xs:ml-23 sm:ml-26': isMedium.value,
      'xs:ml-27 sm:ml-30': isLarge.value,
    })
  )

  const descriptionClasses = computed<string>(() =>
    classNames('xs:mt-1 sm:mt-2 xs:text-sm sm:text-base !leading-6 text-gray-700', {
      'xs:ml-23 sm:ml-26': isMedium.value,
      'xs:ml-27 sm:ml-30': isLarge.value,
    })
  )

  return {
    itemClasses,
    iconClasses,
    nameClasses,
    descriptionClasses,
  }
}
