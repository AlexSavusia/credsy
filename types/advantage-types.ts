export type AdvantageIconNameType =
  | 'virtual-care'
  | 'primary-care'
  | 'health-systems'
  | 'group-practices'
  | 'healthcare-startups'
  | 'urgent-care'
  | 'fast'
  | 'experience'
  | 'profile'
  | 'transparent-process'
  | 'team'
  | 'support'
  | 'physician'
  | 'physician-assistant'
  | 'nurse'
  | 'dentist'
  | 'social-worker'
  | 'mental-health-counselor'

export type AdvantageItemType = {
  iconName: AdvantageIconNameType
  name: string
  description: string
}

export type AdvantageItemsType = AdvantageItemType[]

export type AdvantageIconSizeType = 'medium' | 'large'

export type AdvantageSpaceYType = 1 | 2 | 3
