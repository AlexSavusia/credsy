<template>
  <div class="relative bg-white xs:px-4 sm:px-6 lg:px-0 xs:pt-16 lg:pt-22.5 xs:pb-20 lg:pb-25">
    <!--div class="absolute inset-0">
      <div class="xs:h-1/3 sm:h-2/3 bg-white" />
    </div--->
    <section class="relative mx-auto max-w-6.5xl blog-section lg:px-27">
      <SectionHeader
        :title="title"
        :subtitle="description"
        type="blog"
      />
      <div class="mx-auto mt-15 grid gap-9.5 xs:grid-cols-1 lg:grid-cols-3">
        <BlogCard
          v-for="{ date, datetime, title, description, tagText, href, category, color } in formattedPosts"
          :key="title"
          :date="date"
          :datetime="datetime"
          :title="title"
          :description="description"
          :tagText="tagText"
          :href="href"
          :color="color"
          :category="category"
        />
      </div>
      <div class="text-center mt-15">
        <DecoratedLink type="base" :to="'/blog'" text="All Blog News" icon-name="arrow-up-right" icon="right-icon" weight="semibold" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { format as formatDate, parseISO as parseISODate } from 'date-fns'
// import SectionHeader from '@/components/section/SectionHeader'
// import BlogCard from '@/components/blog/BlogCard'
// import DecoratedLink from '@/components/DecoratedLink'
import { POPULAR_POSTS_QUERY } from '@/groq/queries'

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: 'Credsy News and Blog posts',
  },
  description: {
    type: String as PropType<string>,
    default: 'The latest news, reading resources and articles about medical licensing and payors',
  },
})

const { data: postsResult } = useSanityQuery(POPULAR_POSTS_QUERY)

const formattedPosts = computed(() => postsResult.value?.map(({
  title,
  lead,
  _createdAt,
  _updatedAt,
  color,
  category,
  slug
}: any) => ({
  date:
    (_updatedAt && `${formatDate(parseISODate(_updatedAt), 'dd LLL, yyyy')} updated`) ||
    (_createdAt && formatDate(parseISODate(_createdAt), 'dd LLL, yyyy')),
  datetime: _updatedAt || _createdAt,
  title,
  description: lead,
  href: `/blog/${slug}`,
  color: color && color?.hex,
  category: {
    title: category && category.title,
    slug: category && category.slug,
    color: category?.color && category.color?.hex
  },
})))
</script>
