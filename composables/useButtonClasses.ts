import { Ref } from 'vue'
import classNames from 'classnames'
import { ButtonSizeType, ButtonSizeEnum, ButtonType, ButtonTypeEnum } from '@/types/button-types'

export const useButtonClasses = ({
  size,
  type,
  isSemiRounded,
}: {
  size: Ref<ButtonSizeType>
  type: Ref<ButtonType>
  isSemiRounded: Ref<boolean>
}): {
  buttonClasses: Ref<string>
  iconClasses: Ref<string>
  textClasses: Ref<string>
} => {
  const baseClasses = computed<string>(() =>
    classNames('button align-top truncate transition duration-150 focus:ring-2 focus:ring-offset-2 relative')
  )

  const iconClasses = computed<string>(() => 'button-icon')

  const textClasses = computed<string>(() => 'button-text truncate')

  const radiusClasses = computed<string>(() =>
    classNames({
      'button-semi-rounded rounded':
        // @ts-ignore
        isSemiRounded.value && [ButtonSizeEnum.small, ButtonSizeEnum.medium].includes(size.value),
      'button-pill rounded-full': !isSemiRounded.value,
    })
  )

  const sizeClasses = computed<string>(() => {
    const sizeClassMap = {
      [ButtonSizeEnum.small]: 'button-small h-10 px-5 space-x-2',
      [ButtonSizeEnum.medium]: 'button-medium h-12 px-6 space-x-2',
    }

    const classes = sizeClassMap[size.value]

    return classNames({
      [classes]: classes,
    })
  })

  const typeClasses = computed<string>(() => {
    const typeClassMap = {
      [ButtonTypeEnum.transparent]:
        'button-transparent bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent text-gray-600',
      [ButtonTypeEnum.primary]:
        'button-primary bg-gray-900 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 focus:ring-gray-700 text-white',
      [ButtonTypeEnum.yellow]:
        'button-yellow bg-yellow-600 hover:bg-yellow-700 focus:bg-yellow-700 active:bg-yellow-700 focus:ring-yellow-700 text-gray-900',
      [ButtonTypeEnum.outline]: 'button-outline bg-transparent border border-gray-300 text-gray-600',
      [ButtonTypeEnum['outline-fade']]: 'button-outline-fade bg-transparent border border-[#D0D5DD] text-[#D0D5DD]',
      [ButtonTypeEnum.select]: 'button-select bg-white shadow-1',
    }

    const classes = typeClassMap[type.value]

    return classNames({
      [classes]: classes,
    })
  })

  const buttonClasses = computed<string>(() => {
    if (type.value !== 'select') {
      return classNames(baseClasses.value, sizeClasses.value, typeClasses.value, radiusClasses.value)
    }

    return classNames(baseClasses.value, 'h-11 px-6 space-x-2', typeClasses.value, 'rounded-md')
  })

  return {
    buttonClasses,
    iconClasses,
    textClasses,
  }
}
