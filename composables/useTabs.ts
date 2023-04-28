import { Ref } from 'vue'
import { TabType } from '@/types/tabs-types'

export const useTabs = ({
  tabs,
  selectedTab,
}: {
  tabs: Ref<TabType[]>
  selectedTab: Ref<TabType | undefined>
}): {
  isCurrentTab: (tab: TabType) => boolean
  selectTab: Ref<string>
  activePillWidth: Ref<number>
  activePillOffset: Ref<number>
  setItemRef: (el: HTMLElement) => void
} => {
  const selectTab = ref<string>('')
  const activePillWidth = ref<number>(210)
  const activePillOffset = ref<number>(0)

  selectTab.value = selectedTab.value?.name ?? tabs.value[0].name

  const isCurrentTab = (tab: TabType | undefined): boolean => selectTab.value === tab?.name

  onBeforeMount(() => {
    if (selectedTab.value) {
      const index = tabs.value.findIndex((tab) => selectedTab.value?.name === tab.name && !tab.isDisabled)

      if (index >= 0) {
        selectTab.value = selectedTab.value.name
      }
    }

    isCurrentTab(selectedTab.value)
  })

  const setItemRef = (el: HTMLElement): void => {
    if (!el) {
      return
    }

    const content = el.innerHTML

    if (content === selectTab.value) {
      activePillWidth.value = el.clientWidth
      activePillOffset.value = el.offsetLeft
    }
  }

  return {
    isCurrentTab,
    selectTab,
    activePillWidth,
    activePillOffset,
    setItemRef,
  }
}
