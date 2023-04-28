<template>
  <HeroBlogSection :title="hero.title" :description="hero.description" :type="'main'" :author-name="'Michelle Ofiwe'" :author-link="'/author/name'" :date="'Sep 01, 2021'" :read-time="'11 min read'" />
  <div class="mx-auto xs:px-4 sm:px-6 lg:px-28 w-full grid xs:grid-cols-[1fr] lg:grid-cols-[280px_1fr] gap-8 lg:py-18 lg:max-w-8xl">
    <div sticky-container>
      <Sidebar data-aos="fade-in" data-aos-once="true" v-sticky :state="'blog'" />
    </div>
    <div data-aos="fade-in" data-aos-once="true" class="mx-auto grid gap-6 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <BlogCard
        v-for="{ date, datetime, title, description, tagText, href, image, color, category } in formattedPosts"
        :key="title"
        :date="date"
        :datetime="datetime"
        :title="title"
        :description="description"
        :tagText="tagText"
        :href="href"
        :image="image"
        :color="color"
        :category="category"
        :snug="true"
      />
    </div>
  </div>
  <!--div ref="observerRef" class="observer md:h-6 lg:h-8 border" /-->
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { format as formatDate, parseISO as parseISODate } from 'date-fns'
import { PostsType } from '@/types/post-types'
import HeroBlogSection from '@/components/hero/HeroBlogSection'
import Sidebar from '@/components/sidebar/Sidebar'
import BlogCard from '@/components/blog/BlogCard'
import { CATEGORIES_QUERY, POSTS_QUERY } from "@/groq/queries";

const store = useStore()
const route = useRoute()

// const POST_ON_PAGE_COUNT = 9
// const page = ref<number>(1)
// const limit = ref<number>(POST_ON_PAGE_COUNT - 1)
// const posts = ref<[]>([])
// const observerRef = ref<HTMLElement>(null)
//
// const offset = computed(() => {
//   return limit.value * (page.value - 1);
// })
//
// const postCount = computed(() => postsResult.value.postCount ?? 0)
//
// const totalPages = computed(() => {
//   return Math.ceil(postCount.value / limit.value)
// })

// onMounted(() => {
//   const options = {
//     rootMargin: '0px',
//     threshold: 1.0,
//   }
//
//   const callback = (entries, observer) => {
//     if (entries[0].isIntersecting) {
//       loadMorePosts()
//     }
//   }
//
//   const observer = new IntersectionObserver(callback, options)
//   observer.observe(observerRef.value)
// })

// async function loadMorePosts() {
//   if (page.value >= totalPages.value) {
//     return;
//   }
//
//   page.value += 1;
//
//   const updateQuery = (previousResult, { fetchMoreResult }) => {
//     if (!fetchMoreResult) {
//       return previousResult;
//     }
//
//     const previousPosts = previousResult.posts;
//     const fetchMorePosts = fetchMoreResult.posts;
//
//     fetchMoreResult.tariffs = [...previousPosts, ...fetchMorePosts];
//
//     return { ...fetchMoreResult }
//   }
//
//   await postFetchMore( { updateQuery, variables: { limit: limit.value, offset: offset.value }});
// }

const hero: {
  title: string,
  description: string,
  buttonText: string,
} = {
  title: `Credsy <span class="line">blog</span>`,
  description: 'Get the latest updates on news, reading resources and articles about medical licensing, credentialing and payors.',
  buttonText: 'Book a Consultation',
}

const { data: postsResult, refresh: postsRefresh } = useSanityQuery(POSTS_QUERY)
const { data: categoriesResult } = useSanityQuery(CATEGORIES_QUERY)

const formattedPosts = computed<PostsType>(() =>
  postsResult.value
    ?.map(({ title, lead, mainImage, _createdAt, _updatedAt, slug, color, category }: any) => ({
      image: mainImage,
      date:
        (_updatedAt && `${formatDate(parseISODate(_updatedAt), 'dd LLL, yyyy')} updated`) ||
        (_createdAt && formatDate(parseISODate(_createdAt), 'dd LLL, yyyy')),
      datetime: _updatedAt || _createdAt,
      title,
      description: lead,
      color: color && color?.hex,
      category: {
        title: category && category.title,
        slug: category && category.slug,
        color: category?.color && category.color?.hex
      },
      href: `/blog/${slug}`,
    }))
    ?.filter(({ category }: any) => (store.state.selectedBlogCategories.length ? store.state.selectedBlogCategories.includes(category._id) : true))
    ?.filter(({ title }: any) =>
      title
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(store.state.blogQuery.toLowerCase().replace(/\s+/g, ''))
    ))

watch(
  () => [categoriesResult.value],
  ([categories]) => {
    // postsRefresh()
    store.commit('setBlogCategories', {
      categories,
    })
  },
)

store.commit('setPage', { title: 'Credsy Blog', fullPath: route.fullPath })

watchEffect(() => console.log('xxx', postsResult.value))
</script>
