<template>
  <article :class="itemClasses">
    <template v-if="isPhoneOrTablet">
      <header v-if="title || description" :class="headerClasses">
        <div v-if="title" class="relative">
          <Badge v-if="badge" :text="badge" :class="badgeClasses" type="white" size="medium" radius="pill" />
          <h2 :class="titleClasses" v-html="title" />
        </div>
        <p v-if="description" :class="descriptionClasses" v-html="description" />
      </header>
    </template>
    <div class="grid xs:gap-8 lg:gap-18 xs:grid-cols-1 lg:grid-cols-2 relative z-1">
      <div :class="['sm:mx-auto sm:max-w-2xl sm:text-center lg:text-left lg:flex lg:items-center w-full', {
        'xs:order-2 lg:order-none': !reverse,
        'xs:order-2 lg:order-2': reverse,
      }]">
        <div>
          <template v-if="isDesktop">
            <header v-if="title || description" :class="headerClasses">
              <div v-if="title" class="relative">
                <Badge v-if="badge" :text="badge" :class="badgeClasses" type="white" size="medium" radius="pill" />
                <h2 :class="titleClasses" v-html="title" />
              </div>
              <div v-if="description" :class="descriptionClasses" v-html="description" />
            </header>
          </template>
          <ul v-if="items.length" class="xs:text-base font-medium text-black space-y-4 mt-6 sm:text-center lg:text-left">
            <li class="flex space-x-2" v-for="{ id, text } in items" :key="id">
              <Icon name="check-2" class="w-4.5 xs:h-[1.5rem] text-yellow-700" aria-hidden="true" />
              <span v-text="text" />
            </li>
          </ul>
          <!--div class="mt-10">
            <DecoratedLink type="base" href="/" text="Learn more how we can help your business" icon-name="arrow-up-right" icon="right-icon" weight="semibold" />
          </div-->
        </div>
      </div>
      <div :class="['lg:relative xs:mt-10 lg:mt-0', {
        'xs:-order-1 lg:order-none': !reverse,
        'xs:-order-1 lg:order-1': reverse,
      }]">
        <div :class="['sm:mx-auto sm:max-w-2xl lg:max-w-none lg:px-0', {
          'lg:min-h-[462px]': isPrimary,
          'lg:min-h-[324px]': isSecondary,
        }]">
          <img v-if="imageName" class="xs:w-full xs:h-auto lg:absolute lg:inset-0 lg:m-auto lg:w-full lg:h-full feature-item-image" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
    <div :class="bgColorClasses" />
    <div :class="bgImageClasses">
      <img class="feature-item-image" aria-hidden="true" :src="bgSrc" alt="" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/utils'
import { FeatureType, FeatureListItemsType, FeatureColorClassesType } from '@/types/feature-types'
import { useFeatureItemClasses } from '@/composables/useFeatureItemClasses'

const props = defineProps({
  type: {
    type: String as PropType<FeatureType>,
    default: 'primary',
  },
  title: {
    type: String as PropType<string>,
    default: '',
  },
  badge: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  imageName: {
    type: String as PropType<string>,
    default: '',
  },
  bgName: {
    type: String as PropType<string>,
    default: '',
  },
  items: {
    type: Array as PropType<FeatureListItemsType>,
    default: () => [],
  },
  reverse: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  colorClasses: {
    type: String as PropType<FeatureColorClassesType>,
    default: 'bg-sand-100',
  },
})

const { colorClasses, reverse } = toRefs(props)

const isPrimary = computed<boolean>(() => props.type === 'primary')
const isSecondary = computed<boolean>(() => props.type === 'secondary')

const {
  itemClasses,
  headerClasses,
  titleClasses,
  descriptionClasses,
  badgeClasses,
  bgColorClasses,
  bgImageClasses,
} = useFeatureItemClasses({ colorClasses, reverse, isPrimary, isSecondary })

const bgSrc = computed<string>(() => getImageUrl(props.bgName))
const imageSrc = computed<string>(() => getImageUrl(props.imageName))

const isPhoneOrTablet = inject('isPhoneOrTablet')
const isDesktop = inject('isDesktop')
</script>
