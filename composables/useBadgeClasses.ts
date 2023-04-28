import { Ref } from 'vue'
import classNames from 'classnames'
import { BadgeSizeType, BadgeSizeEnum } from '@/types/badge-types'

export const useBadgeClasses = ({
  size,
  color,
  isSemiRounded,
  isPill,
}: {
  size: Ref<BadgeSizeType>
  color: Ref<string>
  isSemiRounded: Ref<boolean>
  isPill: Ref<boolean>
}): {
  badgeClasses: Ref<string>
} => {
  const baseClasses = computed<string>(() => 'badge inline-flex flex-nowrap items-center truncate')

  const radiusClasses = computed<string>(() =>
    classNames({
      'button-semi-rounded rounded':
        // @ts-ignore
        isSemiRounded.value && [BadgeSizeEnum.small, BadgeSizeEnum.medium].includes(size.value),
      'button-semi-rounded rounded-full': isPill.value,
    })
  )

  const sizeClasses = computed<string>(() => {
    const sizeClassMap = {
      [BadgeSizeEnum.medium]: 'badge-medium h-7 px-3 text-sm font-sans font-medium',
      [BadgeSizeEnum.small]: 'badge-small h-4.5 px-2 text-xs font-sans font-medium',
    }

    const classes = sizeClassMap[size.value]

    return classNames({
      [classes]: classes,
    })
  })

  const colorClasses = computed<string>(() =>
    color.value ? classNames(`bg-[${color.value}] text-black`) : classNames(`bg-white text-gray-600`)
  )

  const badgeClasses = computed<string>(() =>
    classNames(baseClasses.value, sizeClasses.value, colorClasses.value, radiusClasses.value)
  )

  return {
    badgeClasses,
  }
}
