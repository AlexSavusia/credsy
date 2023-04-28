export enum InputSizeEnum {
  small = 'small',
  medium = 'medium',
}

export type InputSizeType = keyof typeof InputSizeEnum

export enum InputStateEnum {
  default = 'default',
  danger = 'danger',
  success = 'success',
}

export type InputStateType = keyof typeof InputStateEnum

export enum InputRadiusEnum {
  'semi-rounded' = 'semi-rounded',
}

export type InputRadiusType = keyof typeof InputRadiusEnum
