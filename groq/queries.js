export const HERO_POST_QUERY = groq`*[_type == "post"][0] {
  _id,
  _createdAt,
  _updatedAt,
  mainImage,
  title,
  type,
  lead,
  color,
  "category": categories[][0]-> {
    title,
    color,
    "slug": select(defined(parent) => parent->slug.current + "/" + slug.current, slug.current)
  },
  "slug": select(slug.current),
  author-> {
    name,
    "slug": select(slug.current)
  }
}`

export const POPULAR_POSTS_QUERY = groq`*[_type == "post"][0..2] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  lead,
  color,
  "category": categories[][0]-> {
    title,
    color,
    "slug": select(defined(parent) => parent->slug.current + "/" + slug.current, slug.current)
  },
  type,
  "slug": select(slug.current)
}`

export const POSTS_QUERY = groq`*[_type == "post"] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  type,
  mainImage,
  lead,
  color,
  "category": categories[][0]-> {
    _id,
    title,
    color,
    "slug": select(defined(parent) => parent->slug.current + "/" + slug.current, slug.current)
  },
  "slug": select(slug.current)
}`

export const CATEGORIES_QUERY = groq`*[_type == "category"] {
  _id,
  title,
}`

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  mainImage,
  title,
  type,
  color,
  lead,
  body,
  table,
  categories[]-> {
    title,
    color,
    "slug": select(defined(parent) => parent->slug.current + "/" + slug.current, slug.current)
  },
  author-> {
    name,
    "slug": select(slug.current)
  }
}`
