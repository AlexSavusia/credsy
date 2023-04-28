export type MetaItemType = {
  text: string
  href?: string
}

export type MetaItemsType = MetaItemType[]

export enum MetaSizeEnum {
  small = 'small',
  medium = 'medium',
}

export type MetaSizeType = keyof typeof MetaSizeEnum

export enum MetaColorEnum {
  light = 'light',
  dark = 'dark',
}

export type MetaColorType = keyof typeof MetaColorEnum
