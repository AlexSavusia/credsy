<template>
  <client-only>
    <component :is="IconSVG" v-bind="attrs" :class="[iconClasses, attrs.class]" />
    <template #fallback />
  </client-only>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { camelCase, startCase } from 'lodash-es'
import { AdvantageIconNameType } from '@/types/advantage-types'

const props = defineProps({
  name: {
    type: String as PropType<AdvantageIconNameType>,
    required: true,
  },
})

const { name } = toRefs(props)

const { iconClasses } = useAdvantageIconClasses({ name })

const attrs = useAttrs()

const IconSVG = computed(() => {
  const pascalCaseName: string = startCase(camelCase(name.value)).replace(/ /g, '')

  return defineAsyncComponent({
    loader: () => import(`./icons/${pascalCaseName}Icon.vue`),
    loadingComponent: {
      template: '<span></span>',
    },
    errorComponent: {
      template: '<span>error</span>',
    },
    delay: 200,
    timeout: 3000,
    suspensible: true,
  })
})
</script>
