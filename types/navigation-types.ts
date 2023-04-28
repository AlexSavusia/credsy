import { IconNameType } from '@/types/icon-types'

export type NavigationItemType = {
  id: string
  iconName?: IconNameType
  name: string
  href: string
  badge?: string
  isOpen?: boolean
  items?: NavigationItemsType
}

export type NavigationItemsType = NavigationItemType[]
