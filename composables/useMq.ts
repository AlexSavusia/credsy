import { Ref } from 'vue'
// @ts-ignore
import { useMq as Mq } from 'vue3-mq'

export default function useMq(): {
  isPhone?: Ref<boolean>
  isShortTablet?: Ref<boolean>
  isWideTablet?: Ref<boolean>
  isTablet?: Ref<boolean>
  isDesktop?: Ref<boolean>
  isPhoneOrTablet?: Ref<boolean>
  isTabletOrDesktop?: Ref<boolean>
  screen?: Ref<string>
  isXs?: Ref<boolean>
  isSm?: Ref<boolean>
  isMd?: Ref<boolean>
  isAir?: Ref<boolean>
  isLg?: Ref<boolean>
  isXl?: Ref<boolean>
  is2Xl?: Ref<boolean>
} {
  if (process.server) {
    return {}
  }

  const mq = Mq()

  const isPhone = computed<boolean>(() => ['xs', 'sm'].includes(mq.current))

  const isShortTablet = computed<boolean>(() => ['md'].includes(mq.current))

  const isWideTablet = computed<boolean>(() => ['air'].includes(mq.current))

  const isTablet = computed<boolean>(() => ['md', 'air'].includes(mq.current))

  const isDesktop = computed<boolean>(() => ['lg', 'xl', '2xl'].includes(mq.current))

  const isPhoneOrTablet = computed<boolean>(() => ['xs', 'sm', 'md', 'air'].includes(mq.current))

  const isTabletOrDesktop = computed<boolean>(() => ['md', 'air', 'lg', 'xl', '2xl'].includes(mq.current))

  const screen = computed<string>(() => mq.current)

  const isXs = computed<boolean>(() => ['xs'].includes(mq.current))
  const isSm = computed<boolean>(() => ['sm'].includes(mq.current))
  const isMd = computed<boolean>(() => ['md'].includes(mq.current))
  const isAir = computed<boolean>(() => ['air'].includes(mq.current))
  const isLg = computed<boolean>(() => ['lg'].includes(mq.current))
  const isXl = computed<boolean>(() => ['xl'].includes(mq.current))
  const is2Xl = computed<boolean>(() => ['2xl'].includes(mq.current))

  return {
    screen,
    isPhone,
    isShortTablet,
    isWideTablet,
    isTablet,
    isDesktop,
    isPhoneOrTablet,
    isTabletOrDesktop,
    isXs,
    isSm,
    isMd,
    isAir,
    isLg,
    isXl,
    is2Xl,
  }
}
