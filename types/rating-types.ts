export enum RatingSizeEnum {
  small = 'small',
  medium = 'medium',
}

export type RatingSizeType = keyof typeof RatingSizeEnum

export type RatingStarsType = 1 | 2 | 3 | 4 | 5
