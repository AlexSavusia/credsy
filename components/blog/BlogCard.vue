<template>
  <article :key="title" :class="cardClasses">
    <div :class="lineClasses" v-if="showLine" :style="color ? { backgroundColor: color }: {}" />
    <div v-if="hasImage" :class="imageWrapperClasses">
      <img :class="imageClasses" :style="color ? { backgroundColor: color }: {}" :src="$urlFor(image).width(288).height(168).url()" width="288" height="168" loading="lazy" alt="" />
    </div>
    <header>
      <div :class="['blog-card-meta flex items-center space-x-2.5', {
        'pt-4': isListItem,
      }]">
        <span>
          <!---RouterLink v-if="category?.slug" v-slot="{ navigate }" :to="{ path: `/blog/category/${category.slug}` }" custom>
            <Badge class="relative z-20" tag="a" size="medium" :color="category?.color" radius="pill" :text="category?.title" :href="`/blog/category/${category.slug}`" @keypress.enter="navigate" />
          </RouterLink-->
          <Badge class="relative z-20" tag="span" size="medium" :color="category?.color" radius="pill" :text="category?.title" />
        </span>
        <time :datetime="datetime" class="blog-card-date d-ss-meta text-gray-300" v-text="date" />
        <!--RouterLink v-if="authorName" class="blog-card-author d-ss-meta text-gray-300 relative z-20" v-slot="{ navigate }" :to="{ path: authorLink }">
          {{authorName}}
        </RouterLink-->
        <span v-if="authorName" class="blog-card-author d-ss-meta text-gray-300 relative z-20" v-text="authorName" />
      </div>
      <h3 :class="['font-alt text-black line-clamp-3 blog-card-title', {
        'h4 mt-2': isTale && !snug,
        'h4 mt-4': isTale && snug,
        'h3 !font-medium mt-6': isListItem,
      }]">
        <RouterLink class="stretched-link text-black hover:text-opacity-90 line-clamp-2" v-slot="{ navigate }" :to="{ path: href }">
          {{title}}
        </RouterLink>
      </h3>
    </header>
    <p :class="['blog-card-description mt-4 text-base -tracking-[0.1px] text-gray-600', {
        'line-clamp-[7]': isTale,
        'line-clamp-[4]': isListItem,
    }]" v-text="description" />
  </article>
</template>

<script setup lang="ts">
import { BlogCategoryType, BlogViewType } from "@/types/blog-types";
import { useBlogCardClasses } from '@/composables/useBlogCardClasses'
// import Badge from '@/components/Badge'

const props = defineProps({
  image: {
    type: Object as PropType<object>,
    default: () => {},
  },
  date: {
    type: String as PropType<string>,
    required: true,
  },
  datetime: {
    type: String as PropType<string>,
    required: true,
  },
  authorName: {
    type: String as PropType<string>,
    default: '',
  },
  authorLink: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  category: {
    type: Object as PropType<BlogCategoryType>,
    default: () => {},
  },
  href: {
    type: String as PropType<string>,
    required: true,
  },
  snug: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  color: {
    type: String as PropType<string>,
    default: '',
  },
  view: {
    type: String as PropType<BlogViewType>,
    default: 'tale',
  },
})

const { color, snug } = toRefs(props)

const hasImage = computed<boolean>(() => !!props.image)

const isTale = computed<boolean>(() => ['tale'].includes(props.view))
const isListItem = computed<boolean>(() => ['list-item'].includes(props.view))

const showLine = computed<boolean>(() => isTale.value && !hasImage.value)

const {
  cardClasses,
  lineClasses,
  imageWrapperClasses,
  imageClasses,
} = useBlogCardClasses({ color, hasImage, snug, isTale, isListItem })
</script>
