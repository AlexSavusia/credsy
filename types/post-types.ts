import { BlogCategoryType } from '@/types/blog-types'

export type PostType = {
  image?: string
  date: string
  datetime: string
  authorName?: string
  authorLink?: string
  title: string
  description: string
  color?: string | undefined
  category: BlogCategoryType
  href: string
}

export type PostsType = PostType[]
