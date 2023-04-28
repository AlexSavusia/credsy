export enum LinkTypeEnum {
  light = 'light',
  yellow = 'yellow',
  dark = 'dark',
  base = 'base',
}

export type LinkType = keyof typeof LinkTypeEnum

export enum LinkSizeEnum {
  medium = 'medium',
}

export type LinkSizeType = keyof typeof LinkSizeEnum

export enum LinkStyleEnum {
  default = 'default',
}

export type LinkStyleType = keyof typeof LinkStyleEnum

export enum LinkStateEnum {
  default = 'default',
}

export type LinkStateType = keyof typeof LinkStateEnum

export enum LinkWeightEnum {
  regular = 'regular',
  medium = 'medium',
  semibold = 'semibold',
}

export type LinkWeightType = keyof typeof LinkWeightEnum

export enum LinkIconEnum {
  'left-icon' = 'left-icon',
  'right-icon' = 'right-icon',
  'only-icon' = 'only-icon',
}

export type LinkIconType = keyof typeof LinkIconEnum
