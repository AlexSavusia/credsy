import { Ref } from 'vue'
import classNames from 'classnames'
import { InputSizeType, InputSizeEnum, InputStateType, InputStateEnum } from '@/types/input-types'

export const useInputClasses = ({
  size,
  state,
  hover,
  focus,
  disabled,
  isSemiRounded,
}: {
  size: Ref<InputSizeType>
  state: Ref<InputStateType>
  hover: Ref<boolean>
  focus: Ref<boolean>
  disabled: Ref<boolean>
  isSemiRounded: Ref<boolean>
}): {
  inputClasses: Ref<string>
  labelClasses: Ref<string>
  hintClasses: Ref<string>
} => {
  const DISABLED = 'disabled'
  const HOVER = 'hover'
  const FOCUS = 'focus'
  const NONE = 'none'

  const extraState = computed(() => {
    if (disabled.value) {
      return DISABLED
    }

    if (focus.value) {
      return FOCUS
    }

    if (hover.value) {
      return HOVER
    }

    return NONE
  })

  const baseClasses = computed<string>(
    () => 'input block w-full rounded border shadow-xs bg-white placeholder-gray-250'
  )

  const radiusClasses = computed<string>(() =>
    classNames({
      'input-semi-rounded rounded':
        // @ts-ignore
        isSemiRounded.value && [InputSizeEnum.small, InputSizeEnum.medium].includes(size.value),
    })
  )

  const sizeClasses = computed<string>(() => {
    const sizeClassMap = {
      small: 'input-small h-11 px-3.5 text-base font-light',
      medium: 'input-medium h-12 px-3.5 text-base',
    }

    const classes = sizeClassMap[size.value]

    return classNames({
      [classes]: classes,
    })
  })

  const inputStateClasses = computed<string>(() => {
    const inputStateClassMap = {
      [InputStateEnum.default]: 'border-[#D0D5DD] focus:border-[#D0D5DD] focus:ring-[#D0D5DD]',
      [InputStateEnum.success]: 'border-green-600 focus:border-green-600 focus:ring-green-600',
      [InputStateEnum.danger]: 'border-red-600 focus:border-red-600 focus:ring-red-600',
    }

    const classes = inputStateClassMap[state.value]

    return classNames({
      [classes]: classes,
    })
  })

  const labelBaseClasses = computed<string>(() => classNames('label block text-sm'))

  const labelStateClasses = computed<string>(() => {
    const labelStateClassMap = {
      [InputStateEnum.default]: classNames({
        'label-state-default text-black': [NONE, HOVER, FOCUS].includes(extraState.value),
      }),
      [InputStateEnum.success]: classNames({
        'label-state-success text-green-600': [NONE, HOVER, FOCUS].includes(extraState.value),
      }),
      [InputStateEnum.danger]: classNames({
        'label-state-danger text-red-600': [NONE, HOVER, FOCUS].includes(extraState.value),
      }),
    }

    const classes = labelStateClassMap[state.value]

    return classNames({
      [classes]: classes,
    })
  })

  const hintClasses = computed<string>(() =>
    classNames('hint block px-3.5 truncate mt-1.5 text-xs', {
      'hint-default text-gray-600': state.value == 'default',
      'hint-danger text-red-600': state.value == 'danger',
      'hint-success text-green-600': state.value == 'success',
    })
  )

  const inputClasses = computed<string>(() =>
    classNames(baseClasses.value, sizeClasses.value, inputStateClasses.value, radiusClasses.value)
  )

  const labelClasses = computed<string>(() => classNames(labelBaseClasses.value, labelStateClasses.value))

  return {
    inputClasses,
    labelClasses,
    hintClasses,
  }
}
