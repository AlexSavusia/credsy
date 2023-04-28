<template>
  <img
    v-if="asset._ref"
    class="cover"
    :src="$urlFor(asset._ref).url()"
    loading="lazy"
    alt=""
  />
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  asset: {
    type: Object as PropType<object>,
    default: { _ref: '' },
  },
})
</script>
