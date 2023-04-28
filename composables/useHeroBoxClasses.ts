import { Ref } from 'vue'
import classNames from 'classnames'
import { HeroBoxColorType, HeroBoxColorEnum } from '@/types/hero-types'

export const useHeroBoxClasses = ({
  color,
}: {
  color: Ref<HeroBoxColorType>
}): {
  boxClasses: Ref<string>
  titleClasses?: Ref<string>
  descriptionClasses?: Ref<string>
  listClasses?: Ref<string>
  itemClasses?: Ref<string>
  itemIconClasses?: Ref<string>
  itemTextClasses?: Ref<string>
  backgroundClasses: Ref<string>
} => {
  const baseClasses = computed<string>(
    () => 'hero-box relative flex flex-col xs:px-6 lg:px-8 xs:py-8 lg:py-12 rounded-lg sm:w-full space-y-6 z-1'
  )

  const colorClasses = computed<string>(() => {
    const colorClassMap = {
      [HeroBoxColorEnum.dark]: 'hero-box-dark',
      [HeroBoxColorEnum.light]: 'hero-box-light',
    }

    const classes = colorClassMap[color.value]

    return classNames({
      [classes]: classes,
    })
  })

  const backgroundClasses = computed<string>(() => {
    const colorClassMap = {
      [HeroBoxColorEnum.dark]: 'hero-box-bg-dark bg-gradient-dark',
      [HeroBoxColorEnum.light]: 'hero-box-bg-light bg-white',
    }

    const classes = colorClassMap[color.value]

    return classNames('rounded-lg absolute inset-0 -z-1 !m-0', {
      [classes]: classes,
    })
  })

  const titleClasses = computed<string>(() => {
    const colorClassMap = {
      [HeroBoxColorEnum.dark]: 'text-white',
      [HeroBoxColorEnum.light]: 'text-black',
    }

    const classes = colorClassMap[color.value]

    return classNames('hero-box-title h4 !font-semibold line-clamp-2', {
      [classes]: classes,
    })
  })

  const descriptionClasses = computed<string>(() => {
    const colorClassMap = {
      [HeroBoxColorEnum.dark]: 'text-white',
      [HeroBoxColorEnum.light]: 'text-black',
    }

    const classes = colorClassMap[color.value]

    return classNames('hero-box-description xs:mt-2 lg:mt-3 xs:text-sm lg:text-base relative flex flex-col space-y-6', {
      [classes]: classes,
    })
  })

  const listClasses = computed<string>(() => 'hero-box-list space-y-2.5 flex-1 relative')

  const itemClasses = computed<string>(() => 'hero-box-item flex space-x-3')

  const itemTextClasses = computed<string>(() => {
    const colorClassMap = {
      [HeroBoxColorEnum.dark]: 'text-white',
      [HeroBoxColorEnum.light]: 'text-black',
    }

    const classes = colorClassMap[color.value]

    return classNames('text-base', {
      [classes]: classes,
    })
  })

  const itemIconClasses = computed<string>(() => {
    const colorClassMap = {
      [HeroBoxColorEnum.dark]: 'text-yellow-600',
      [HeroBoxColorEnum.light]: 'text-yellow-600',
    }

    const classes = colorClassMap[color.value]

    return classNames('hero-box-icon w-3 h-[1.5rem]', {
      [classes]: classes,
    })
  })

  const boxClasses = computed<string>(() => classNames(baseClasses.value, colorClasses.value))

  return {
    boxClasses,
    titleClasses,
    descriptionClasses,
    listClasses,
    itemClasses,
    itemIconClasses,
    itemTextClasses,
    backgroundClasses,
  }
}
