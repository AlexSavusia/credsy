import { Ref } from 'vue'
import { BadgeRadiusType, BadgeRadiusEnum } from '@/types/badge-types'

export const useBadge = ({
  radius,
}: {
  radius: Ref<BadgeRadiusType>
}): {
  isSemiRounded: Ref<boolean>
  isPill: Ref<boolean>
} => {
  const isSemiRounded = computed<boolean>(() => BadgeRadiusEnum['semi-rounded'] === radius.value)
  const isPill = computed<boolean>(() => BadgeRadiusEnum['pill'] === radius.value)

  return {
    isSemiRounded,
    isPill,
  }
}
