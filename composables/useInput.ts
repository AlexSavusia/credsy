import { Ref } from 'vue'
import { InputRadiusType, InputRadiusEnum } from '@/types/input-types'

export const useInput = ({
  radius,
}: {
  radius: Ref<InputRadiusType>
}): {
  isSemiRounded: Ref<boolean>
  hover: Ref<boolean>
  focus: Ref<boolean>
  onFocus: () => void
  onBlur: () => void
  onMouseover: () => void
  onMouseout: () => void
} => {
  const hover: Ref<boolean> = ref<boolean>(false)
  const focus: Ref<boolean> = ref<boolean>(false)

  const isSemiRounded = computed<boolean>(() => radius.value === InputRadiusEnum['semi-rounded'])

  const onFocus = () => {
    focus.value = true
  }

  const onBlur = () => {
    focus.value = false
  }

  const onMouseover = () => {
    hover.value = true
  }

  const onMouseout = () => {
    hover.value = false
  }

  return {
    isSemiRounded,
    hover,
    focus,
    onFocus,
    onBlur,
    onMouseover,
    onMouseout,
  }
}
