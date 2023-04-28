  <template>
  <header :class="headerClasses">
    <h2 :class="titleClasses" v-html="title" />
    <p
      :class="subtitleClasses"
      v-html="subtitle"
    />
  </header>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { SectionType } from '@/types/section-types'

const props = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  subtitle: {
    type: String as PropType<string>,
    required: true,
  },
  type: {
    type: String as PropType<SectionType>,
    required: true,
  },
})

const { type } = toRefs(props)

const {
  headerClasses,
  titleClasses,
  subtitleClasses,
} = useSectionHeaderClasses({ type })
</script>

<style lang="scss">
.section-header-app-featured,
.section-header-feature {
  @apply relative z-1;

  .section-title {
    @apply relative;

    &::before {
      @screen lg {
        content: '';
        @apply w-[120px] h-[17px] absolute mx-auto inset-x-0 bottom-full -translate-y-[26px];
        background: url('./images/top-underline.svg') no-repeat;
      }
    }
  }
}

.section-header-review {
  @apply relative z-1;

  .section-subtitle {
    @apply relative;

    &::after {
      @screen lg {
        content: '';
        @apply w-[100px] h-[79px] absolute left-full top-1/2 -translate-y-[calc(50%-3px)] translate-x-[45px];
        background: url('./images/heart.svg') no-repeat;
      }
    }
  }
}
</style>
