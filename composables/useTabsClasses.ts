import { computed, Ref, ref } from 'vue'
import classNames from 'classnames'

export const useTabsClasses = ({
  tabPillPosition,
}: {
  tabPillPosition: Ref<string>
}): {
  tabsContainerClasses: Ref<string>
  tabsWrapperClasses: Ref<string>
  disabledTabClasses: Ref<string>
  selectedTabClasses: Ref<string>
  tabWrapperClasses: Ref<string>
  tabPillPositionClasses: Ref<string>
  tabNameDefaultClasses: Ref<string>
  tabNameClasses: Ref<string>
  tabPositionClasses: Ref<string>
  hiddenTabPillClasses: Ref<string>
  unselectedPillPositionClasses: Ref<string>
  selectedPillPositionClasses: Ref<string>
  onHoverTabClasses: Ref<string>
} => {
  const onHoverTabClasses = ref<string>('hover:text-blue-900 hover:text-opacity-90')

  const selectedTabClasses = ref<string>('text-blue-900 hover:text-opacity-100')

  const disabledTabClasses = ref<string>('text-gray-600 hover:text-gray-600 pointer-events-none opacity-50')

  const tabWrapperClasses = computed<string>(
    () => 'flex flex-nowrap whitespace-nowrap w-auto cursor-pointer text-gray-600 group'
  )

  const tabPillPositionClasses = computed<string>(() =>
    classNames({
      'top-0': tabPillPosition.value === 'top',
      'bottom-0': tabPillPosition.value === 'bottom',
    })
  )

  const tabNameDefaultClasses = computed<string>(
    () => 'flex flex-nowrap justify-end items-center h-12 px-6 space-x-2 text-lg font-semibold'
  )

  const tabNameClasses = computed<string>(() =>
    classNames({
      'mt-2': tabPillPosition.value === 'top',
      'mb-2': tabPillPosition.value === 'bottom',
    })
  )

  const tabPositionClasses = computed<string>(() =>
    classNames({
      'flex-col': tabPillPosition.value === 'top',
      'flex-col-reverse': tabPillPosition.value === 'bottom',
    })
  )

  const hiddenTabPillClasses = computed<string>(() => 'bg-none group-hover:bg-white group-hover:opacity-50 delay-100')

  const unselectedPillPositionClasses = computed<string>(() => 'absolute transform transition-all')

  const selectedPillPositionClasses = computed<string>(
    () => 'absolute left-0 transform transition-all duration-400 h-12 bg-white shadow-1 rounded-md -z-50'
  )

  const tabsContainerClasses = computed<string>(() => 'tabs-container')

  const tabsWrapperClasses = computed<string>(
    () =>
      'tabs-wrapper inline-flex items-center flex-nowrap flex-auto bg-sand-100 rounded-lg relative z-10 px-1.5 h-15 space-x-1.5 '
  )

  return {
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
  }
}
