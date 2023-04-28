import { Ref } from 'vue'
import { LinkIconEnum, LinkIconType } from '@/types/link-types'
import { IconNameType } from '@/types/icon-types'

export const useLink = ({
  text,
  iconName = ref(undefined),
  icon,
}: {
  text: Ref<string>
  iconName: Ref<IconNameType | undefined> | undefined
  icon: Ref<LinkIconType>
}): {
  validOnlyIcon: Ref<boolean>
  validWithIcon: Ref<boolean>
} => {
  const onlyIcon = computed<boolean>(() => icon.value === LinkIconEnum['only-icon'])

  const validOnlyIcon = computed<boolean>(() => !!iconName.value && (onlyIcon.value || !text.value))

  const validWithIcon = computed<boolean>(() => !!iconName.value && !!text.value && !onlyIcon.value)

  return {
    validOnlyIcon,
    validWithIcon,
  }
}
