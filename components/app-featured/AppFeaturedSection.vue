<template>
  <div class="bg-white xs:px-4 sm:px-6 lg:px-12 xs:py-8 lg:py-18 lg:overflow-hidden app-featured-container relative">
    <section class="mx-auto max-w-6.5xl app-featured-section xs:px-6 lg:px-18 xs:pt-0 lg:pt-[43px] overflow-hidden">
      <SectionHeader
        :title="title"
        :subtitle="description"
        :type="'app-featured'"
      />
      <div class="relative bg-blue-50 rounded-lg xs:px-6 lg:px-18 xs:py-8 lg:py-18 xs:-mx-6 lg:-mx-18 xs:mt-8 lg:mt-16 overflow-hidden">
        <div class="grid xs:gap-8 lg:gap-18 xs:grid-cols-1 lg:grid-cols-2 lg:mt-12.5 relative z-1">
          <div class="mx-auto sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:text-left order-2">
            <div>
              <dl>
                <div :class="['flex flex-col space-y-3 xs:px-6 lg:px-8 pb-4.5 rounded-lg', active ? 'bg-blue-900 mb-7' : '']" v-for="{ id, title, text, active } in items" :key="id">
                  <dt :class="['font-alt h4 pt-8', active ? 'text-white' : 'text-black']" v-text="title" />
                  <!--CollapseTransition :duration="3000"-->
                    <dd :class="['text-base pb-3.5', active ? 'block text-blue-300' : 'hidden text-gray-600']" v-text="text" />
                  <!--/CollapseTransition-->
                </div>
              </dl>
              <!--div class="mt-10">
                <DecoratedLink type="base" href="/" text="Discover all platform features" icon-name="arrow-up-right" icon="right-icon" weight="semibold" />
              </div-->
            </div>
          </div>
          <div class="lg:relative xs:mt-10 lg:mt-0 -order-1">
            <div class="sm:mx-auto sm:max-w-2xl lg:max-w-none lg:px-0">
              <MockupImage class="xs:w-full xs:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-auto lg:h-auto lg:top-1/2 lg:-translate-y-1/2" />
            </div>
          </div>
        </div>
        <div class="absolute inset-0 xs:w-full lg:w-1/2 flex items-center">
          <BackgroundImage aria-hidden="true" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { AppFeaturedItemsType } from '@/types/app-featured-types'

// TODO
const MockupImage = defineAsyncComponent(() => import('@/components/app-featured/images/MockupImage.vue'));
const BackgroundImage = defineAsyncComponent(() => import('@/components/app-featured/images/BackgroundImage.vue'));

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  items: {
    type: Array as PropType<AppFeaturedItemsType>,
    default: () => [],
  },
})

const items = ref(props.items)

onMounted(() => {
  const delay: number = 3300

  let currentIndex: number = 0
  let nextIndex: number = 1

  setInterval(() => {
    currentIndex = items.value.findIndex(item => item.active === true)
    nextIndex = ((currentIndex + 1) <= items.value.length - 1) ? currentIndex + 1 : 0
    items.value[currentIndex].active = false
    items.value[nextIndex].active = true
    // console.log('=====')
    // console.log('currentIndex', currentIndex)
    // console.log('nextIndex', nextIndex)
  }, delay);
})
</script>
