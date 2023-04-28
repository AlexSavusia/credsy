<template>
  <aside class="flex flex-col divide-y divide-[#E4E7EC] sidebar-container">
    <section class="flex flex-col space-y-3 xs:pt-8 lg:pt-0" v-if="isBlog">
      <h4 class="h4 text-black sidebar-title font-alt" v-text="'Search'" />
      <InputGroup :placeholder="'Lets find something ...'" :size="'small'" v-model="query" />
    </section>
    <section class="flex flex-col py-8" v-if="isBlog">
      <h4 class="h4 text-black sidebar-title font-alt" v-text="'Category'" />
      <fieldset class="flex flex-col space-y-4 pt-4">
        <div class="relative flex items-start" v-for="{ title, _id } in store.state.blogCategories">
          <div class="flex h-6 items-center">
            <input v-model="selectedBlogCategories" :id="_id" name="" type="checkbox" class="h-5 w-5 rounded border-[#D0D5DD] text-blue-600 focus:ring-blue-600" :value="_id" />
          </div>
          <div class="ml-3 text-base">
            <label :for="`#${_id}`" class="font-medium text-gray-700" v-text="title" />
          </div>
        </div>
      </fieldset>
    </section>
    <nav class="flex flex-col py-8 space-y-4 sidebar-navigation" v-if="isPost">
      <h4 class="h4 text-black  font-alt sidebar-title sidebar-title-decorator" v-text="'Table of contents:'" />
      <ul
        class="flex flex-col space-y-4" v-if="store.state.blogPostNavigation.length"
        v-scroll-spy
        v-scroll-spy-active="{ selector: '.sidebar-link', class: 'selected' }"
      >
        <li
          v-for="{ id, name, href, items } in store.state.blogPostNavigation"
          :key="id"
          class="flex flex-col space-y-4"
        >
          <RouterLink
            :class="['pl-3 sidebar-link', baseLinkClasses, {
                // [notSelectedLinkClasses]: id !== selectedItem?.id,
                // [selectedLinkClasses]: id === selectedItem?.id,
              }]"
            :to="href"
            v-text="name"
          />
          <ul class="flex flex-col space-y-3" v-if="items?.length">
            <li
              v-for="{ id, name, href } in items"
              :key="id"
            >
              <RouterLink
                :class="['pl-8 sidebar-link', baseLinkClasses, {
                  // [notSelectedLinkClasses]: id !== selectedItem.id,
                  // [selectedLinkClasses]: id === selectedItem.id,
                }]"
                :to="href"
                v-text="name"
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <section class="flex flex-nowrap space-x-3 pt-8" v-if="isBlogOrPost">
      <Button
        :icon-name="'share'"
        :text="'Copy to clipboard'"
        :icon="'only-icon'"
        :type="'outline-fade'"
        :radius="'semi-rounded'"
        :size="'small'"
        @click.stop="copyURL(store.state.pageFullPath)"
      />
      <ShareButton :icon-name="'twitter'" :text="''">
        <ShareNetwork
          class="absolute inset-0"
          network="twitter"
          :url="store.state.pageFullPath"
          :title="store.state.pageTitle"
        >
          <span class="sr-only" v-text="'Share on Twitter'" />
        </ShareNetwork>
      </ShareButton>
      <ShareButton :icon-name="'facebook'" :text="''">
        <ShareNetwork
          class="absolute inset-0"
          network="facebook"
          :url="store.state.pageFullPath"
          :title="store.state.pageTitle"
        >
          <span class="sr-only" v-text="'Share on Facebook'" />
        </ShareNetwork>
      </ShareButton>
      <ShareButton :icon-name="'linkedin'" :text="''">
        <ShareNetwork
          class="absolute inset-0"
          network="linkedin"
          :url="store.state.pageFullPath"
          :title="store.state.pageTitle"
        >
          <span class="sr-only" v-text="'Share on LinkedIn'" />
        </ShareNetwork>
      </ShareButton>
    </section>
  </aside>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { useStore } from 'vuex'
import classNames from 'classnames'
import { NavigationItemType } from '@/types/navigation-types'
// import ShareButton from '@/components/ShareButton'
// import InputGroup from '@/components/input/InputGroup'

const props = defineProps({
  state: {
    type: String as PropType<'blog' | 'blog-post'>,
    default: 'blog-post',
  },
})

const store = useStore()
const selectedBlogCategories = ref([])

const isBlog = computed<boolean>(() => props.state === 'blog')
const isPost = computed<boolean>(() => props.state === 'blog-post')
const isBlogOrPost = computed<boolean>(() => ['blog', 'blog-post'].includes(props.state))

let query = ref<string>('')

const baseLinkClasses = classNames('inline-flex text-base sidebar-link');
// const notSelectedLinkClasses = classNames('text-gray-700 hover:text-gray-700 font-medium cursor-pointer');
// const selectedLinkClasses = classNames('text-blue-900 hover:text-blue-900 font-semibold pointer-events-none selected');

// const selectedItem = ref<NavigationItemType>(navigation[0])

watch(
  () => [selectedBlogCategories.value, query.value],
  ([categories, query]) => {
    store.commit('setSelectedBlogCategories', {
      categories,
      query,
    })
  },
)

async function copyURL(url: string) {
  try {
    await navigator.clipboard.writeText(url);
    store.dispatch('toastSuccess', { message: 'Copied to clipboard' })
  } catch(e) {
    store.dispatch('toastDanger', { message: 'Cannot copy' })
  }
}
</script>

<style lang="scss">
.sidebar-container {
  .sidebar-title-decorator {
    @apply relative;

    &::before {
      @screen lg {
        content: '';
        @apply w-[120px] h-[16px] absolute left-0 bottom-full -translate-y-4;
        background: url('./images/top.svg') no-repeat;
      }
    }
  }

  .sidebar-link:not(.selected) {
    @apply text-gray-700 hover:text-gray-700 font-medium cursor-pointer;
  }

  .sidebar-link.selected {
    @apply relative text-blue-900 hover:text-blue-900 font-semibold pointer-events-none;

    &::before {
      content: '';
      @apply absolute left-0 inset-y-0 w-[2px] bg-blue-600 rounded-full;
    }
  }
}
</style>
