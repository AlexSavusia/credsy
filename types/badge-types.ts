export enum BadgeSizeEnum {
  small = 'small',
  medium = 'medium',
}

export type BadgeSizeType = keyof typeof BadgeSizeEnum

export enum BadgeRadiusEnum {
  'semi-rounded' = 'semi-rounded',
  pill = 'pill',
}

export type BadgeRadiusType = keyof typeof BadgeRadiusEnum
