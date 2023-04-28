export enum HeroBlogTypeEnum {
  main = 'main',
  inner = 'inner',
  owner = 'owner',
}

export type HeroBlogType = keyof typeof HeroBlogTypeEnum
