<template>
  <div
    :class="['hero-blog-container', bgColorClasses, {
      'hero-blog-container-main': isMain,
      'hero-blog-container-inner': isInner,
      'hero-blog-container-owner': isOwner,
    }]"
    :style="isColor ? { backgroundColor: color }: {}"
  >
    <section :class="['overflow-hidden lg:relative flex flex-col', {
      'xs:pt-8 sm:pt-7 lg:pt-[90px] xs:pb-23 lg:pb-[90px]': isMainOrInner,
      'xs:pt-8 lg:pt-[80px] xs:pb-9 lg:pb-[80px]': isOwner,
    }]">
      <div :class="['mx-auto xs:px-4 sm:px-6 lg:px-28 w-full lg:grid lg:gap-8 lg:max-w-8xl z-20', {
        'xs:max-w-md sm:max-w-3xl': isMainOrInner,
        'lg:grid-cols-2 xl:grid-cols-[calc(50%-200px-32px)_1fr]': isMain,
        'lg:grid-cols-4 xs:order-2 lg:order-none': isInner,
        'lg:grid-cols-1': isOwner,
      }]">
        <div :class="[{
          'lg:col-span-3': isInner,
        }]">
          <header
            v-if="title || description"
            :class="['space-y-4', {
              'sm:max-w-[902px]': isInner,
              'sm:text-center': isOwner,
            }]"
          >
            <h1 v-if="title" class="xs:h2 lg:h1 !font-medium text-black font-alt" v-html="title" />
            <p v-if="description" class="xs:text-base lg:text-lg text-gray-600" v-text="description" />
          </header>
          <!--ul v-if="items" class="hero-list space-y-4 mt-8">
            <li class="hero-item flex space-x-3" v-for="{ id, text } in items" :key="id">
              <Icon name="check-circle" class="text-green-600 w-6 h-[1.5rem]" aria-hidden="true" />
              <span class="text-base text-black" v-text="text" />
            </li>
          </ul-->

          <div class="mt-6" v-if="validButton">
            <Button :text="buttonText" type="outline" size="medium" content-position="center" icon-name="arrow-up-right" icon="right-icon" @click="store.dispatch('openHubspotPopup')" />
          </div>

          <div :class="['flex xs:flex-col sm:flex-row sm:items-center sm:gap-x-6', {
            'xs:mt-4 sm:mt-8 xs:gap-y-4': isMainOrInner,
            'sm:justify-center': isOwner,
          }]" v-if="validMeta">
            <Breadcrumbs type="meta" :items="breadcrumbs" v-if="validBreadcrumbs" />
            <span class="xs:hidden sm:inline-block h-6 w-[1px] rounded-full bg-gray-300 bg-opacity-50 shrink-0" v-if="validBreadcrumbs" />
            <MetaInfo :items="meta" :size="'medium'" :color="'dark'" />
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6 xs:-order-1 lg:order-none" v-if="isInner">
        <!--div class="xs:py-12 sm:py-16 sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:translate-x-[300px]"-->
        <div class="xs:py-12 sm:py-16 sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:translate-x-[300px]">
          <div class="relative xs:px-4 sm:px-0 sm:mx-auto sm:max-w-3xl lg:h-full lg:max-w-none lg:flex">
            <img v-if="image" class="xs:w-full xs:h-auto lg:h-full lg:w-auto lg:max-w-none" :src="$urlFor(image).width(249).height(202).url()" width="249" height="202" loading="lazy" alt="" />
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6" v-else-if="isMain">
        <!--div class="xs:px-4 sm:px-6 lg:px-0 xs:py-12 sm:py-16 sm:relative lg:absolute lg:inset-y-0 lg:left-3/4 lg:-translate-x-1/2 xl:left-1/2 xl:-translate-x-[200px] xl:w-[calc(50%+200px-112px)]"-->
        <div class="xs:px-4 sm:px-6 lg:px-0 xs:py-12 sm:py-16 sm:relative lg:absolute lg:z-20 lg:inset-y-0 lg:left-3/4 lg:-translate-x-1/2 xl:left-1/2 xl:-translate-x-[200px] xl:w-[calc(50%+200px-112px)]">
          <div class="relative lg:max-w-[809px]">
            <BlogCard
              :key="formattedPost.title"
              :date="formattedPost.date"
              :datetime="formattedPost.datetime"
              :title="formattedPost.title"
              :description="formattedPost.description"
              :href="formattedPost.href"
              :blog-type="formattedPost.blogType"
              :image="formattedPost.image"
              :authorName="formattedPost.authorName"
              :authorLink="formattedPost.authorLink"
              :color="formattedPost.color"
              :category="formattedPost.category"
              :view="isXs ? 'tale' : 'list-item'"
              :snug="true"
            />
            <div class="hero-blog-decor-1" />
            <div class="hero-blog-box-bg" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { format as formatDate, parseISO as parseISODate } from 'date-fns'
import { HeroBlogType } from '@/types/hero-blog-types'
import { BreadcrumbItemsType } from '@/types/breadcrumb-types'
import { MetaItemsType } from '@/types/meta-types'
import { PostType } from '@/types/post-types'
// import Button from '@/components/button/Button'
// import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'
// import MetaInfo from '@/components/meta/MetaInfo'
import { HERO_POST_QUERY } from '@/groq/queries'
import { BlogCategoriesType, BlogCategoryType } from "~/types/blog-types";

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  image: {
    type: Object as PropType<object>,
    default: () => {},
  },
  type: {
    type: String as PropType<HeroBlogType>,
    default: 'main',
  },
  color: {
    type: String as PropType<string>,
    default: '',
  },
  categories: {
    type: Array as PropType<BlogCategoriesType>,
    default: () => [],
  },
  buttonText: {
    type: String as PropType<string>,
    default: 'Book a Consultation',
  },
  authorName: {
    type: String as PropType<string>,
    default: '',
  },
  authorLink: {
    type: String as PropType<string>,
    default: '',
  },
  date: {
    type: String as PropType<string>,
    default: '',
  },
  readTime: {
    type: String as PropType<string>,
    default: '',
  },
})

const breadcrumbs = computed<BreadcrumbItemsType>(() => [
  { name: 'Blog', href: '/blog' },
  ...props.categories.map((category: BlogCategoryType) => ({ name: category.title, href: `/blog` })), //href: `/blog/category/${category.slug}`
])

const meta = computed<MetaItemsType>(() => [
  { text: props.authorName }, // href: props.authorLink
  { text: props.date },
  { text: props.readTime },
].filter(({ text }) => !!text))

const isMain = computed<boolean>(() => ['main'].includes(props.type))
const isInner = computed<boolean>(() => ['inner'].includes(props.type))
const isOwner = computed<boolean>(() => ['owner'].includes(props.type))
const isMainOrInner = computed<boolean>(() => ['main', 'inner'].includes(props.type))
const isInnerOrOwner = computed<boolean>(() => ['inner', 'owner'].includes(props.type))
const isColor = computed<boolean>(() => !!props.color)

const validButton = computed<boolean>(() => (isMain.value && !!props.buttonText))

const validBreadcrumbs = computed<boolean>(() => (isMainOrInner.value && !!breadcrumbs.value.length))

const validMeta = computed<boolean>(() => (isInnerOrOwner.value && (!!breadcrumbs.value.length || !!meta.value.length)))

const store = useStore()

watch(
  () => props.type,
  (type) => {
    if (type === 'main') {
      useHubspotForm({ id: 'heroBlogForm', type: 'cta' })
    }
  },
  { immediate: true },
)

const { data: postResult } = useSanityQuery(HERO_POST_QUERY)

const formattedPost = computed<PostType>(() => {
  return {
    image: postResult.value?.mainImage,
    date:
      (postResult.value?._updatedAt && `${formatDate(parseISODate(postResult.value?._updatedAt), 'dd LLL, yyyy')} updated`) ||
      (postResult.value?._createdAt && formatDate(parseISODate(postResult.value?._createdAt), 'dd LLL, yyyy')),
    datetime: postResult.value?._updatedAt || postResult.value?._createdAt,
    authorName: postResult.value?.author?.name,
    authorLink: `/blog/author/${postResult.value?.author?.slug}`,
    title: postResult.value?.title,
    description: postResult.value?.lead,
    href: `/blog/${postResult.value?.slug}`,
    color: postResult.value?.color?.hex,
    category: {
      ...postResult.value?.category,
      color: postResult.value?.category?.color?.hex
    },
  }
})

const bgColorClasses = computed<string>(() => props.color ? `bg-[${props.color}]` : `bg-blue-50`)

watchEffect(() => console.log('hero-blog-section-post-result', formattedPost.value))

const isXs = inject('isXs')
const isSm = inject('isSm')
</script>

<style lang="scss">
.hero-blog-container {
  .line {
    @apply relative whitespace-nowrap;

    &::after {
      content: '';
      background: url('./svg/line.svg') no-repeat center center;
      @apply block absolute top-full left-0 right-0 bg-contain;

      @screen xs {
        @apply h-[18px];
      }

      @screen lg {
        @apply h-[18px];
      }
    }
  }
}

.hero-blog-container {
  .hero-blog-decor-1 {
    @screen sm {
      background: url('./svg/box-decor-1.svg') no-repeat;
      @apply absolute right-full -left-[39px] -top-[39px] w-[71px] h-[99px];
    }
  }

  .hero-blog-box-bg {
    @screen lg {
      @apply absolute left-[32px] -top-[18px] bottom-[32px] -right-[18px] rounded-lg -z-1 m-0;
      background: url('./svg/box-pattern.svg') repeat;
      mix-blend-mode: luminosity;
    }

    @screen xl {
      @apply absolute left-[106px] -top-[18px] bottom-[102px] -right-[18px] rounded-lg -z-1 m-0;
      background: url('./svg/box-pattern.svg') repeat;
      mix-blend-mode: luminosity;
    }
  }
}
</style>
