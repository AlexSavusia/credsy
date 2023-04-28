import { Ref } from 'vue'
import classNames from 'classnames'
import { RatingSizeEnum, RatingSizeType } from '@/types/rating-types'

export const useRatingClasses = ({
  size,
}: {
  size: Ref<RatingSizeType>
}): {
  containerClasses: Ref<string>
  starClasses: Ref<string>
} => {
  const isSmall = computed<boolean>(() => size.value === RatingSizeEnum.small)
  const isMedium = computed<boolean>(() => size.value === RatingSizeEnum.medium)

  const containerClasses = computed<string>(() =>
    classNames('rating-container flex flex-shrink-0', {
      'space-x-1': isSmall.value,
      'space-x-2': isMedium.value,
    })
  )

  const starClasses = computed<string>(() =>
    classNames('rating-star text-yellow-600', {
      'rating-star-small h-4 w-4': isSmall.value,
      'rating-star-medium xs:h-6 xs:w-6 lg:h-5.5 lg:w-5.5': isMedium.value,
    })
  )

  return {
    containerClasses,
    starClasses,
  }
}
