export type FeatureListItemType = {
  id: string
  text: string
}

export type FeatureListItemsType = FeatureListItemType[]

export type FeatureType = 'primary' | 'secondary'

export type FeatureItemType = {
  title?: string
  badge?: string
  description?: string
  imageName?: string
  bgName?: string
  items?: FeatureListItemsType
  colorClasses?: string
}

export type FeatureItemsType = FeatureItemType[]

export type FeatureColorClassesType = 'bg-sand-100' | 'bg-blue-50'
