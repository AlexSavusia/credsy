import { IconNameType } from '@/types/icon-types'

export type FooterNavigationItemType = {
  iconName?: IconNameType
  name: string
  href: string
  badge?: string
}

export type FooterNavigationType = {
  company?: FooterNavigationItemType[]
  forProviders?: FooterNavigationItemType[]
  forBusinesses?: FooterNavigationItemType[]
  customerStories?: FooterNavigationItemType[]
  product?: FooterNavigationItemType[]
  contacts?: FooterNavigationItemType[]
  policy?: FooterNavigationItemType[]
}
