export type HeroItemType = {
  id: string
  text: string
}

export type HeroItemsType = HeroItemType[]

export enum HeroTypeEnum {
  main = 'main',
  business = 'business',
  provider = 'provider',
  product = 'product',
}

export type HeroType = keyof typeof HeroTypeEnum

export enum HeroBoxColorEnum {
  dark = 'dark',
  light = 'light',
}

export type HeroBoxColorType = keyof typeof HeroBoxColorEnum
