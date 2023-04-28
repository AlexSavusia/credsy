import { RatingStarsType } from '@/types/rating-types'

export type ReviewType = {
  id: string
  content: string
  ratingStars: RatingStarsType
  doctorName: string
  doctorPosition?: string
  doctorProfile?: string
  avatarSrc: string
}

export type ReviewsType = ReviewType[]
