import { Ref } from 'vue'
import {
  ButtonRadiusEnum,
  ButtonIconEnum,
  ButtonRadiusType,
  ButtonIconType,
  ButtonRoleType,
} from '@/types/button-types'
import { IconNameType } from '@/types/icon-types'

export const useButton = ({
  text,
  iconName = ref(undefined),
  icon,
  radius,
  tag,
}: {
  text: Ref<string>
  iconName: Ref<IconNameType | undefined> | undefined
  icon: Ref<ButtonIconType>
  radius: Ref<ButtonRadiusType>
  tag: Ref<string>
}): {
  hover: Ref<boolean>
  focus: Ref<boolean>
  isTagLink: Ref<boolean>
  isSemiRounded: Ref<boolean>
  role: Ref<ButtonRoleType>
  validOnlyIcon: Ref<boolean>
  title: Ref<string>
  validWithIcon: Ref<boolean>
  onFocus: () => void
  onBlur: () => void
  onMouseover: () => void
  onMouseout: () => void
} => {
  const hover = ref<boolean>(false)
  const focus = ref<boolean>(false)

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

  const isSemiRounded = computed<boolean>(() => radius.value === ButtonRadiusEnum['semi-rounded'])

  const isTagLink = computed<boolean>(() => tag.value === 'a')

  const isTagButton = computed<boolean>(() => tag.value === 'button')

  const role = computed<ButtonRoleType>(() => (!isTagButton.value && 'button') || undefined)

  const onlyIcon = computed<boolean>(() => icon.value === ButtonIconEnum['only-icon'])

  const validOnlyIcon = computed<boolean>(() => !!iconName.value && (onlyIcon.value || !text.value))

  const title = computed<string>(() => (validOnlyIcon.value && text.value) || '')

  const validWithIcon = computed<boolean>(() => !!iconName.value && !!text.value && !onlyIcon.value)

  return {
    hover,
    focus,
    isTagLink,
    isSemiRounded,
    role,
    validOnlyIcon,
    title,
    validWithIcon,
    onFocus,
    onBlur,
    onMouseover,
    onMouseout,
  }
}
