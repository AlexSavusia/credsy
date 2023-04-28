import { Ref } from 'vue'
import classNames from 'classnames'

export const useBlogCardClasses = ({
  color = ref(''),
  hasImage = ref(false),
  snug = ref(false),
  isTale = ref(true),
  isListItem = ref(false),
}: {
  color: Ref<string>
  hasImage: Ref<boolean>
  snug: Ref<boolean>
  isTale: Ref<boolean>
  isListItem: Ref<boolean>
}): {
  cardClasses: Ref<string>
  lineClasses: Ref<string>
  imageWrapperClasses: Ref<string>
  imageClasses: Ref<string>
} => {
  const baseClasses = computed<string>(() =>
    classNames('blog-card flex overflow-hidden bg-white border rounded-lg relative mx-auto', {
      'flex-col sm:max-w-xs': isTale.value,
      'xs:px-6 sm:px-8 py-10': isTale.value && !snug.value,
      'xs:px-6 sm:px-6 py-8': isTale.value && snug.value,
      'w-full max-w-none py-4 pr-6 pl-[320px] min-h-[312px] flex-col': isListItem.value,
    })
  )

  const colorClasses = computed<string>(() => `border-[#eee]`)

  const lineBaseClasses = computed<string>(() => 'absolute -inset-x-px -top-px h-2.5 rounded-t-lg z-10')

  const lineColorClasses = computed<string>(() =>
    color.value ? classNames(`bg-[${color.value}]`) : classNames(`bg-blue-50`)
  )

  const imageWrapperClasses = computed<string>(() => {
    if (!hasImage.value) {
      return ''
    }

    if (isTale.value) {
      return classNames('flex-shrink-0 mb-6 xs:w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)]', {
        'xs:-mx-6 sm:-mx-8 -mt-10': !snug.value,
        'xs:-mx-6 -mt-8': snug.value,
      })
    }

    if (isListItem.value) {
      return classNames('flex-shrink-0 absolute left-[16px] inset-y-4')
    }

    return ''
  })

  const imageClasses = computed<string>(() => {
    if (!hasImage.value) {
      return ''
    }

    if (isTale.value) {
      return classNames('h-42 w-full object-cover', imageColorClasses.value)
    }

    if (isListItem.value) {
      return classNames('w-70 h-full object-cover rounded-lg', imageColorClasses.value)
    }

    return ''
  })

  const imageColorClasses = computed<string>(() =>
    color.value ? classNames(`bg-[${color.value}]`) : classNames(`bg-transparent`)
  )

  const cardClasses = computed<string>(() => classNames(baseClasses.value, colorClasses.value))

  const lineClasses = computed<string>(() => {
    if (hasImage.value) {
      return ''
    }

    return classNames(lineBaseClasses.value, lineColorClasses.value)
  })

  return {
    cardClasses,
    imageWrapperClasses,
    imageClasses,
    lineClasses,
  }
}
