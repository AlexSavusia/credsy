<template>
  <template v-if="postResult?.lead">
    <p class="lead" v-text="postResult.lead" />
    <hr />
  </template>
  <SanityContent :blocks="formattedBody" :serializers="serializers" />
  <div v-if="postResult?.table" class="xs:mt-12 lg:mt-12 xs:mb-12 lg:mb-0 not-prose overflow-x-auto shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
    <div class="inline-block min-w-full align-middle">
      <table class="min-w-full divide-y divide-[#E4E7EC]">
        <tbody class="divide-y divide-[#E4E7EC] bg-white">
        <tr :key="_key" v-for="{ _key, cells } in postResult?.table?.rows">
          <td class="max-w-[1px] py-4 px-3 text-sm text-gray-500 whitespace-nowrap" :key="cellText" v-for="cellText in cells" v-text="cellText" />
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { slugify } from 'transliteration'
import InlineImage from '@/components/InlineImage'
import { POST_BY_SLUG_QUERY } from '@/groq/queries'

definePageMeta({
  layout: 'blog-post'
})

const serializers = {
  types: {
    image: InlineImage,
  }
}

const route = useRoute()
const store = useStore()

const { data: postResult, pending: postLoading, refresh: postRefresh } = useSanityQuery(POST_BY_SLUG_QUERY, { slug: route.params?.slug.toString() })

const validPost = computed<boolean>(() => !!postResult.value)

const formattedBody = computed<unknown>(() => postResult.value?.body.map(block => {
  if (['h2', 'h3'].includes(block.style)) {
    return { ...block, id: slugify(block.children[0].text) }
  }

  return block
}))

watch(
  () => [route.params.slug],
  ([slug]) => {
    postRefresh({ slug: slug.toString() })
  },
)

watchEffect(() => {
  if (postLoading.value) {
    return;
  }

  if (!validPost.value) postRefresh({ slug: route.params.slug.toString() })
})

watchEffect(() => {
  const post = postResult.value
  if (!post) return

  store.commit('setBlogPostNavigation', { body: post.body })
  store.commit('setBlogPost', {
    id: post._id,
    title: post.title,
    createdAt: post._createdAt,
    mainImage: post.mainImage,
    updatedAt: post._updatedAt,
    author: post.author,
    type: post.type,
    categories: post.categories,
    color: post.color || '',
    table: post.table
  })
  store.commit('setPage', { title: post.title, fullPath: route.fullPath })
})
</script>
