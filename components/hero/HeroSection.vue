<template>
  <div
    :class="['hero-container', {
      'hero-container-main bg-blue-50': isMain,
      'hero-container-product bg-blue-50': isProduct,
      'hero-container-provider bg-blue-50': isProvider,
      'hero-container-business bg-sand-100': isBusiness,
    }]"
  >
    <section class="overflow-hidden xs:pt-8 sm:pt-7 lg:relative lg:pt-[112px] xs:pb-23 lg:pb-[140px] flex flex-col">
      <div :class="['mx-auto xs:px-4 sm:px-6 lg:px-28 w-full xs:max-w-md sm:max-w-3xl lg:max-w-8xl lg:grid lg:grid-cols-2 lg:gap-8', {
        'xs:order-2 lg:order-none': !isProviderOrBusiness,
        'xs:order-none lg:order-none': isProviderOrBusiness,
      }]">
        <div>
          <header class="sm:max-w-[560px] space-y-4" v-if="title || description">
            <h1 v-if="title" class="xs:h2 lg:h1 !font-medium text-black font-alt" v-html="title" />
            <p v-if="description" class="xs:text-base lg:text-lg text-gray-600" v-text="description" />
          </header>
          <ul v-if="items" class="hero-list space-y-4 mt-8">
            <li class="hero-item flex space-x-3" v-for="{ id, text } in items" :key="id">
              <Icon name="check-circle" class="text-green-600 w-6 h-[1.5rem]" aria-hidden="true" />
              <span class="text-base text-black" v-text="text" />
            </li>
          </ul>

          <div class="xs:mt-10 sm:mt-12" v-if="isMainOrProduct">
            <div class="inline-flex xs:flex-col sm:flex-row sm:items-center sm:divide-x sm:divide-gray-[#D4E2E7]">
              <div class="sm:pr-6">
                <Button :text="buttonText" type="yellow" size="medium" content-position="center" icon-name="arrow-up-right" icon="right-icon" @click="store.dispatch('openHubspotPopup')" :decor="isXs ? 'right-decor' : 'none-decor'" />
              </div>
              <div class="min-w-0 flex-1 sm:pl-6 text-sm leading-5.5 text-gray-600 xs:mt-5 sm:mt-0" v-html="buttonHint" />
            </div>
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6 xs:-order-1 lg:order-none" v-if="isMain && isTabletOrDesktop">
        <div class="xs:py-12 sm:py-16 sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[calc(50%-16px)]">
          <!--div class="relative xs:pl-4 sm:px-0 sm:mx-auto sm:max-w-3xl lg:h-full lg:max-w-none lg:flex"-->
          <div class="relative xs:pl-4 sm:px-0 sm:mx-auto sm:max-w-3xl lg:mx-0 lg:flex lg:items-center lg:justify-center lg:h-full lg:max-w-[768px]">
            <img
              :class="['xs:w-full xs:h-auto lg:h-full lg:w-auto lg:max-w-none', {
                'lg:scale-[1.1] lg:-translate-y-[40px]': true
              }]"
              :src="imagePath"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6 xs:-order-1 lg:order-none" v-if="isProduct">
        <div class="xs:py-12 sm:py-16 sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[calc(50%-16px)]">
          <!--div class="relative xs:pl-4 sm:px-0 sm:mx-auto sm:max-w-3xl lg:h-full lg:max-w-none lg:flex"-->
          <div class="relative xs:pl-4 sm:px-0 sm:mx-auto sm:max-w-3xl lg:mx-0 lg:flex lg:items-center lg:justify-center lg:h-full lg:max-w-[768px]">
            <img
              :class="['xs:w-full xs:h-auto lg:h-full lg:w-auto lg:max-w-none', {}]"
              :src="imagePath"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6 xs:order-none lg:order-none" v-else-if="isBusiness">
        <!--div class="xs:px-4 sm:px-6 lg:px-0 xs:py-12 sm:py-16 sm:relative lg:absolute lg:inset-y-0 lg:left-3/4 lg:-translate-x-1/2"-->
        <div class="xs:px-4 sm:px-6 lg:px-0 xs:py-12 sm:py-16 sm:relative lg:absolute lg:z-20 lg:inset-y-0 lg:right-0 lg:w-[calc(50%-16px)]">
          <div class="relative lg:flex lg:items-center lg:justify-center lg:h-full lg:max-w-[804px]">
            <section :class="[boxClasses, 'sm:max-w-[378px]']">
              <h3 v-if="heroBusinessBox.title" :class="titleClasses" v-text="heroBusinessBox.title" />
              <div class="mt-3 lg:min-h-[320px] flex items-center justify-center" v-if="!store.getters.loadedHubspotScript" v-text="'Loading...'" />
              <div id="heroForm" v-once class="mt-3 min-h-[320px] hero-form" v-else />
              <!--div class="space-y-3 mt-3 flex-1">
                <InputGroup label="Name *" type="text" v-model="name" :model-value="fieldName" @update:model-value="fieldName = $event" :state="fieldNameError && 'danger'" :hint="fieldNameError"  />
                <InputGroup label="Email *" type="email" v-model="email" :model-value="fieldEmail" @update:model-value="fieldEmail = $event" :state="fieldEmailError && 'danger'" :hint="fieldEmailError"  />
                <InputGroup label="Phone" type="text" v-model="phone" placeholder="(000) 000-0000" v-maska data-maska="(###) ###-####" />
              </div>
              <div class="mt-9">
                <Button text="Book a Consultation" type="yellow" size="medium" content-position="center" block :disabled="!isFormValid" />
              </div-->
              <div class="hero-box-pattern" />
              <div class="hero-box-image" />
              <div :class="backgroundClasses" />
            </section>
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6 xs:order-none lg:order-none" v-else-if="isProvider">
        <div class="xs:hidden lg:block xs:py-12 sm:py-16 sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div class="relative xs:pl-4 sm:px-0 sm:mx-auto sm:max-w-3xl lg:h-full lg:max-w-none lg:flex">
            <img class="xs:w-full xs:h-auto lg:h-[calc(100%+112px)] lg:-translate-y-[112px] lg:w-auto lg:max-w-none" :src="imagePath" alt="" />
          </div>
        </div>
        <!--div class="xs:px-4 sm:px-6 lg:px-0 xs:py-12 sm:py-16 sm:relative lg:absolute lg:inset-y-0 lg:left-3/4 lg:-translate-x-1/2"-->
        <div class="xs:px-4 sm:px-6 lg:px-0 xs:py-12 sm:py-16 sm:relative lg:absolute lg:z-20 lg:inset-y-0 lg:right-0 lg:w-[calc(50%-16px)]">
          <div class="relative lg:flex lg:items-center lg:justify-center lg:h-full lg:max-w-[768px]">
            <article :class="[boxClasses, 'sm:max-w-[414px]']">
              <header class="!mt-0" v-if="heroProviderBox.title || heroProviderBox.description">
                <h3 v-if="heroProviderBox.title" :class="titleClasses" v-text="heroProviderBox.title" />
                <p v-if="heroProviderBox.description" :class="descriptionClasses" v-text="heroProviderBox.description" />
              </header>
              <ul v-if="heroProviderBox.items.length" :class="listClasses">
                <li :class="itemClasses" v-for="text in heroProviderBox.items" :key="text">
                  <Icon name="check" :class="itemIconClasses" />
                  <span :class="itemTextClasses" v-text="text" />
                </li>
              </ul>
              <footer class="flex flex-col">
                <Button :text="buttonText" type="yellow" size="medium" content-position="center" @click="store.dispatch('openHubspotPopup')" />
              </footer>
              <div :class="backgroundClasses" />
            </article>
          </div>
        </div>
      </div>
    </section>
    <div class="hero-decor-star" v-if="isMain && isPhone" />
    <div class="hero-decor-jump" v-if="isMain && isPhone" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { HeroBoxColorType, HeroItemsType, HeroTypeEnum, HeroType } from '@/types/hero-types'
import { getImageUrl } from '@/utils'

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: 'Schedule a consultation',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  items: {
    type: Array as PropType<HeroItemsType>,
    default: () => [],
  },
  type: {
    type: String as PropType<HeroType>,
    default: 'main',
  },
  buttonText: {
    type: String as PropType<string>,
    default: 'Book a Consultation',
  },
  buttonHint: {
    type: String as PropType<string>,
    default: `Free 15&nbsp;minutes consultation and pick our brain for free. Zero commitments.`,
  },
})

const store = useStore()

const isMain = computed<boolean>(() => ['main'].includes(props.type))
const isProduct = computed<boolean>(() => ['product'].includes(props.type))
const isProvider = computed<boolean>(() => ['provider'].includes(props.type))
const isBusiness = computed<boolean>(() => ['business'].includes(props.type))
const isProviderOrBusiness = computed<boolean>(() => ['provider', 'business'].includes(props.type))
const isMainOrProduct = computed<boolean>(() => ['main', 'product'].includes(props.type))

const heroBoxColor = computed<HeroBoxColorType>(() => isBusiness.value ? 'light' : 'dark')

const {
  boxClasses,
  titleClasses,
  descriptionClasses,
  listClasses,
  itemIconClasses,
  itemClasses,
  itemTextClasses,
  backgroundClasses,
} = useHeroBoxClasses({ color: heroBoxColor })

const isXl = inject('isXl')
const isPhone = inject('isPhone')
const isTabletOrDesktop = inject('isTabletOrDesktop')

watch(
  () => props.type,
  (type) => {
    if (type === 'business') {
      useHubspotForm({ id: 'heroForm', type: 'cta' })
    }
  },
  { immediate: true },
)

const imagePath = computed<string>(() => getImageUrl({
  [HeroTypeEnum.business]: 'hero-main.svg',
  [HeroTypeEnum.main]: 'hero-main.svg',
  [HeroTypeEnum.product]: 'hero-product.svg',
  [HeroTypeEnum.provider]: 'hero-provider.svg',
}[props.type]))

const heroBusinessBox: {
  title: string,
} = {
  title: 'Get started now',
}

const heroProviderBox: {
  title: string,
  description: string,
  items: string[],
} = {
  title: 'Schedule a consultation',
  description: 'Hop on a call with one of our specialists to find out how we can help you get licensed and credentialed. Without the headache',
  items: [
    'Initial state licensing',
    'Automated renewal and monitoring',
    'Secure document storage',
  ],
}
</script>

<style lang="scss">
.hero-container {
  @apply relative;

  .line {
    @apply relative whitespace-nowrap;

    &::after {
      content: '';
      background: url('./svg/line.svg') no-repeat center center;
      @apply block absolute top-full left-0 right-0 bg-contain;

      @screen xs {
        @apply h-[18px] -mt-[9px];
      }

      @screen lg {
        @apply h-[18px] -mt-[9px];
      }
    }
  }

  .hero-decor-star {
    background: url('./svg/hero-decor-star.svg') no-repeat;
    @apply absolute w-[50px] h-[52px] top-full -translate-y-[calc(50%+4px)] left-1/2 -translate-x-[calc(50%+55px)] z-10;
  }

  .hero-decor-jump {
    background: url('./svg/hero-decor-jump.svg') no-repeat;
    @apply absolute w-[160px] h-[115px] top-full -translate-y-[48px] right-0 z-10;
  }
}

.hero-container-business {
  .hero-box {
    box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.1);

    .hero-box-image {
      @screen lg {
        @apply w-[487px] h-[148px] absolute -left-[182px] top-full -translate-y-[74px] -z-1 m-0;
        background: url('./svg/box-image.svg') repeat;
      }
    }

    .hero-box-pattern {
      @screen lg {
        @apply absolute -left-10 -top-8 -bottom-8 rounded-lg -z-1 w-screen m-0;
        background: url('./svg/box-pattern.svg') repeat;
        mix-blend-mode: luminosity;
      }
    }
  }
}
</style>
