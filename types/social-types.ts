import { IconNameType } from '@/types/icon-types'

export type SocialButtonType = {
  iconName: IconNameType
  text: string
  href?: string
}

export type SocialButtonsType = SocialButtonType[]
