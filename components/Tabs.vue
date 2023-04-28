<template>
  <ScrollContainer :class="tabsContainerClasses" :direction="'horizontal'">
    <div :class="tabsWrapperClasses">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        :class="[
          tabWrapperClasses,
          tabPositionClasses,
          selectTab === tab.name && !tab.isDisabled ? selectedTabClasses : '',
          tab.isDisabled ? disabledTabClasses : '',
          !tab.isDisabled && tab.name !== selectTab ? onHoverTabClasses : '',
        ]"
        @click="selectThisTab(tab)"
      >
        <div
          v-if="selectTab !== tab.name || selectTab === tab.name"
          :class="[tabPillPositionClasses, hiddenTabPillClasses]"
        />

        <div
          :class="[
            isCurrentTab(tab) ? selectedPillPositionClasses : unselectedPillPositionClasses,
            tabPillPositionClasses,
          ]"
          :style="[
            isCurrentTab(tab)
              ? { width: `${activePillWidth}px`, transform: `translateX(${activePillOffset}px)` }
              : { transform: `translateX(${activePillOffset}px)` },
          ]"
        />

        <div :ref="setItemRef" :class="[tabNameDefaultClasses, tabNameClasses]" v-text="tab.name" />
      </div>
    </div>
  </ScrollContainer>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { TabsType, TabType } from '@/types/tabs-types'

const props = defineProps({
  tabs: {
    type: Array as PropType<TabsType>,
    required: true,
  },
  modelValue: {
    type: Object as PropType<TabType>,
    default: '',
  },
  tabPillPosition: {
    type: String as PropType<string>,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const { tabPillPosition, tabs } = toRefs(props)

const selectedTab = ref<TabType|undefined>(undefined)

watch(
  () => props.modelValue,
  () => {
    selectedTab.value = props.modelValue
  },
  { immediate: true }
)

const { isCurrentTab, selectTab, activePillWidth, activePillOffset, setItemRef } = useTabs({ tabs, selectedTab })

const {
  tabsContainerClasses,
  tabsWrapperClasses,
  disabledTabClasses,
  selectedTabClasses,
  tabWrapperClasses,
  tabPillPositionClasses,
  tabNameDefaultClasses,
  tabNameClasses,
  tabPositionClasses,
  hiddenTabPillClasses,
  unselectedPillPositionClasses,
  selectedPillPositionClasses,
  onHoverTabClasses,
} = useTabsClasses({ tabPillPosition })

const selectThisTab = (tab: TabType): void => {
  if (!tab.isDisabled) {
    selectTab.value = tab.name
    emit('update:modelValue', tab)
  }
}
</script>
