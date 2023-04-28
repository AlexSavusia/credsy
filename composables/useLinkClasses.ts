import { Ref } from 'vue'
import classNames from 'classnames'
import {
  LinkSizeType,
  LinkSizeEnum,
  LinkType,
  LinkTypeEnum,
  LinkWeightType,
  LinkWeightEnum,
  LinkStyleType,
  LinkStyleEnum,
} from '@/types/link-types'

export const useLinkClasses = ({
  size,
  type,
  weight,
  linkStyle,
  isActive,
  darkMode,
}: {
  size: Ref<LinkSizeType>
  type: Ref<LinkType>
  weight: Ref<LinkWeightType>
  linkStyle: Ref<LinkStyleType>
  isActive: Ref<boolean>
  darkMode: Ref<boolean>
}): {
  linkClasses: Ref<string>
  iconClasses: Ref<string>
  textClasses: Ref<string>
} => {
  const baseClasses = computed<string>(() =>
    classNames('decorated-link focus:outline-none active:opacity-75 transition-opacity duration-200')
  )

  const sizeClasses = computed<string>(() => {
    const sizeClassMap = {
      [LinkSizeEnum.medium]: classNames('decorated-link-medium space-x-2', {
        'decorated-link-font-regular text-base': weight.value === LinkWeightEnum.regular,
        'decorated-link-font-medium text-base font-medium': weight.value === LinkWeightEnum.medium,
        'decorated-link-font-semibold text-base font-semibold': weight.value === LinkWeightEnum.semibold,
      }),
    }

    const classes = sizeClassMap[size.value]

    return classNames({
      [classes]: classes,
    })
  })

  const typeClasses = computed<string>(() => {
    const typeClassMap = {
      [LinkTypeEnum.dark]: 'decorated-link-dark text-gray-900 hover:text-gray-700',
      [LinkTypeEnum.light]: 'decorated-link-light text-blue-50 hover:text-blue-100',
      [LinkTypeEnum.base]: 'decorated-link-base text-blue-900 hover:text-blue-600',
      [LinkTypeEnum.yellow]: 'decorated-link-yellow text-yellow-600 hover:text-blue-700',
    }

    const darkTypeClassMap = {
      ...typeClassMap,
      [LinkTypeEnum.dark]: 'decorated-link-dark text-blue-50 hover:text-blue-100',
      [LinkTypeEnum.light]: 'decorated-link-light text-gray-900 hover:text-gray-700',
      [LinkTypeEnum.base]: 'decorated-link-base text-blue-900 hover:text-blue-600',
    }

    const classes = darkMode.value ? darkTypeClassMap[type.value] : typeClassMap[type.value]

    return classNames({
      [classes]: classes,
    })
  })

  const styleClasses = computed<string>(() =>
    classNames({
      'decorated-link-style-default': linkStyle.value === LinkStyleEnum.default,
      'decorated-link-style-default-active': linkStyle.value === LinkStyleEnum.default && isActive.value,
    })
  )

  const iconClasses = computed<string>(() =>
    classNames('decorated-link-icon', {
      'decorated-link-icon-regular pstroke-1-5': weight.value === LinkWeightEnum.regular,
      'decorated-link-icon-medium pstroke-2': weight.value === LinkWeightEnum.medium,
      'decorated-link-icon-semibold pstroke-2': weight.value === LinkWeightEnum.semibold,
    })
  )

  const textClasses = computed<string>(() => classNames('decorated-link-text relative'))

  const linkClasses = computed<string>(() =>
    classNames(baseClasses.value, sizeClasses.value, typeClasses.value, styleClasses.value)
  )

  return {
    linkClasses,
    iconClasses,
    textClasses,
  }
}
