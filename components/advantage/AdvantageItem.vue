<template>
  <div :class="itemClasses">
    <dt>
      <AdvantageIcon
        :name="iconName"
        :class="iconClasses"
        aria-hidden="true"
      />
      <span
        :class="nameClasses"
        v-text="name"
      />
    </dt>
    <dd
      :class="descriptionClasses"
      v-text="description"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { AdvantageIconNameType, AdvantageIconSizeType } from '@/types/advantage-types'
import { useAdvantageItemCasses } from '@/composables/useAdvantageItemCasses'

const props = defineProps({
  iconName: {
    type: String as PropType<AdvantageIconNameType> ,
    required: true,
  },
  name: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  iconSize: {
    type: String as PropType<AdvantageIconSizeType>,
    default: 'medium',
  }
})

const isMedium = computed<boolean>(() => ['medium'].includes(props.iconSize))
const isLarge = computed<boolean>(() => ['large'].includes(props.iconSize))

const { itemClasses, iconClasses, nameClasses, descriptionClasses } = useAdvantageItemCasses({ isMedium, isLarge })
</script>
