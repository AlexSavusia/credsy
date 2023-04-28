export enum SectionTypeEnum {
  'blog' = 'blog',
  'advantage' = 'advantage',
  'service' = 'service',
  'feature' = 'feature',
  'app-featured' = 'app-featured',
  'review' = 'review',
  'default' = 'default',
}

export type SectionType = keyof typeof SectionTypeEnum
