export type BlogViewType = 'tale' | 'list-item'

export type BlogCategoryType = {
  title: string
  slug?: string
  color?: string | undefined
}

export type BlogCategoriesType = BlogCategoryType[]
