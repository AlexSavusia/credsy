<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center">
      <li v-for="({ name, href, current }, number) in items" :key="name">
        <div class="flex items-center">
          <span class="h-6 w-6 inline-flex shrink-0 items-center justify-center text-base font-light text-gray-600" aria-hidden="true" v-if="number !== 0">/</span>
          <RouterLink :to="href" class="text-base font-light text-gray-600 hover:text-gray-600" :aria-current="current ? 'page' : undefined" v-text="name" />
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { BreadcrumbItemsType, BreadcrumbType } from '@/types/breadcrumb-types'

const props = defineProps({
  items: {
    type: Array as PropType<BreadcrumbItemsType>,
    default: () => [],
  },
  type: {
    type: String as PropType<BreadcrumbType>,
    default: 'meta',
  },
})
</script>
