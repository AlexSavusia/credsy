export enum ButtonSizeEnum {
  small = 'small',
  medium = 'medium',
}

export type ButtonSizeType = keyof typeof ButtonSizeEnum

export enum ButtonTypeEnum {
  primary = 'primary',
  yellow = 'yellow',
  outline = 'outline',
  'outline-fade' = 'outline-fade',
  select = 'select',
  transparent = 'transparent',
}

export type ButtonType = keyof typeof ButtonTypeEnum

export enum ButtonIconEnum {
  'left-icon' = 'left-icon',
  'right-icon' = 'right-icon',
  'only-icon' = 'only-icon',
}

export type ButtonIconType = keyof typeof ButtonIconEnum

export enum ButtonDecorEnum {
  'left-decor' = 'left-decor',
  'right-decor' = 'right-decor',
  'none-decor' = 'none-decor',
}

export type ButtonDecorType = keyof typeof ButtonDecorEnum

export enum ButtonContentPositionEnum {
  left = 'left',
  right = 'right',
  center = 'center',
}

export type ButtonContentPositionType = keyof typeof ButtonContentPositionEnum

export enum ButtonRadiusEnum {
  'semi-rounded' = 'semi-rounded',
  pill = 'pill',
}

export type ButtonRadiusType = keyof typeof ButtonRadiusEnum

export type ButtonRoleType = 'button' | undefined

export type ButtonBorderType = 'light' | 'dark'
