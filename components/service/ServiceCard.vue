<template>
  <article :class="cardClasses">
    <div :class="backgroundClasses" />
    <header v-if="title || description" class="!mt-0">
      <h3 v-if="title" :class="titleClasses" v-text="title" />
      <p v-if="description" :class="descriptionClasses" v-html="description" />
    </header>
    <ul v-if="items.length" :class="listClasses">
      <li :class="itemClasses" v-for="text in items" :key="text">
        <Icon name="check" :class="itemIconClasses" />
        <span :class="itemTextClasses" v-text="text" />
      </li>
    </ul>
    <!--footer>
      <DecoratedLink class="stretched-link" :type="decodatedLinkType" :href="href" text="Learn more" icon-name="arrow-up-right" icon="right-icon" />
    </footer-->
  </article>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ServiceColorType } from '@/types/service-types'
// import { Type as LinkType, TypeEnum as LinkTypeEnum } from '@/types/link-types'

const props = defineProps({
  color: {
    type: String as PropType<ServiceColorType>,
    required: true,
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  items: {
    type: Array as PropType<string[]>,
    required: true,
  },
  href: {
    type: String as PropType<string>,
    required: true,
  },
  scale: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const { color, scale } = toRefs(props)

const {
  cardClasses,
  titleClasses,
  descriptionClasses,
  listClasses,
  itemIconClasses,
  itemClasses,
  itemTextClasses,
  backgroundClasses,
} = useServiceCardClasses({ color, scale })

// const decodatedLinkType = computed<LinkType>(() => [TypeEnum.dark].includes(serviceType.value) ? LinkTypeEnum.yellow : LinkTypeEnum.base)
</script>
