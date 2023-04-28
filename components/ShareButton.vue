<template>
  <div class="relative inline-flex">
    <Button
      :tag="'span'"
      :role="''"
      :icon-name="iconName"
      :text="text"
      :icon="'only-icon'"
      :type="'outline-fade'"
      :radius="'semi-rounded'"
      :size="'small'"
    />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { useStore } from 'vuex'
import { SocialIconNameType } from '@/types/icon-types'

const props = defineProps({
  iconName: {
    type: String as PropType<SocialIconNameType>,
    required: true,
  },
  text: {
    type: String as PropType<string>,
    default: '',
  },
  href: {
    type: String as PropType<string>,
    default: '',
  },
})

const store = useStore()
</script>
