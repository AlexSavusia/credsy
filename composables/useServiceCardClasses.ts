import { Ref } from 'vue'
import classNames from 'classnames'
import { ServiceColorType, ServiceColorEnum } from '@/types/service-types'

export const useServiceCardClasses = ({
  color,
  scale,
}: {
  color: Ref<ServiceColorType>
  scale: Ref<boolean>
}): {
  cardClasses: Ref<string>
  titleClasses: Ref<string>
  descriptionClasses: Ref<string>
  listClasses: Ref<string>
  itemClasses: Ref<string>
  itemIconClasses: Ref<string>
  itemTextClasses: Ref<string>
  backgroundClasses: Ref<string>
} => {
  const baseClasses = computed<string>(
    () => 'service-card relative flex flex-col xs:px-7 sm:px-8 pt-8 pb-10 group relative space-y-6 w-full'
  )

  const colorClasses = computed<string>(() => {
    const colorClassMap = {
      [ServiceColorEnum.payors]: 'service-card-payors',
      [ServiceColorEnum.licensing]: 'service-card-licensing',
      [ServiceColorEnum.credentialing]: 'service-card-credentialing',
      [ServiceColorEnum.light]: 'service-card-light',
      [ServiceColorEnum.dark]: 'service-card-dark',
    }

    const classes = colorClassMap[color.value]

    return classNames({
      [classes]: classes,
    })
  })

  const backgroundClasses = computed<string>(() => {
    const colorClassMap = {
      [ServiceColorEnum.payors]: 'service-bg-payors border',
      [ServiceColorEnum.licensing]: 'service-bg-licensing bg-gradient-blue border border-gray-100',
      [ServiceColorEnum.credentialing]: 'service-bg-credentialing border',
      [ServiceColorEnum.light]: 'service-bg-light bg-gradient-blue border border-gray-100',
      [ServiceColorEnum.dark]: 'service-bg-dark bg-gradient-dark border border-gray-800',
    }

    // @ts-ignore
    const classes = colorClassMap[color.value]

    return classNames('rounded-lg absolute inset-0', {
      [classes]: classes,
      '-mx-[6px] -my-[16px]': scale.value,
    })
  })

  const titleClasses = computed<string>(() => {
    const colorClassMap = {
      [ServiceColorEnum.payors]: 'text-black',
      [ServiceColorEnum.licensing]: 'text-black',
      [ServiceColorEnum.credentialing]: 'text-black',
      [ServiceColorEnum.light]: 'text-black',
      [ServiceColorEnum.dark]: 'text-white',
    }

    // @ts-ignore
    const classes = colorClassMap[color.value]

    return classNames('font-alt line-clamp-2 service-card-title group-hover:text-opacity-90 relative', {
      [classes]: classes,
      h3_75: scale.value,
      h4: !scale.value,
    })
  })

  const descriptionClasses = computed<string>(() => {
    const colorClassMap = {
      [ServiceColorEnum.payors]: 'text-gray-600',
      [ServiceColorEnum.licensing]: 'text-gray-600',
      [ServiceColorEnum.credentialing]: 'text-gray-600',
      [ServiceColorEnum.light]: 'text-gray-600',
      [ServiceColorEnum.dark]: 'text-white',
    }

    // @ts-ignore
    const classes = colorClassMap[color.value]

    return classNames(
      'service-card-description xs:mt-2 lg:mt-5.5 xs:text-sm lg:text-base relative flex flex-col space-y-6',
      {
        [classes]: classes,
      }
    )
  })

  const listClasses = computed<string>(() => 'service-card-list space-y-2.5 flex-1 relative')

  const itemClasses = computed<string>(() => 'service-card-item flex space-x-3')

  const itemTextClasses = computed<string>(() => {
    const colorClassMap = {
      [ServiceColorEnum.payors]: 'text-gray-600',
      [ServiceColorEnum.licensing]: 'text-gray-600',
      [ServiceColorEnum.credentialing]: 'text-gray-600',
      [ServiceColorEnum.light]: 'text-gray-600',
      [ServiceColorEnum.dark]: 'text-white',
    }

    // @ts-ignore
    const classes = colorClassMap[color.value]

    return classNames('text-base', {
      [classes]: classes,
    })
  })

  const itemIconClasses = computed<string>(() => {
    const colorClassMap = {
      [ServiceColorEnum.payors]: 'text-green-600',
      [ServiceColorEnum.licensing]: 'text-green-600',
      [ServiceColorEnum.credentialing]: 'text-green-600',
      [ServiceColorEnum.light]: 'text-green-600',
      [ServiceColorEnum.dark]: 'text-yellow-600',
    }

    // @ts-ignore
    const classes = colorClassMap[color.value]

    return classNames('service-card-icon w-3 h-[1.5rem]', {
      [classes]: classes,
    })
  })

  const cardClasses = computed<string>(() => classNames(baseClasses.value, colorClasses.value))

  return {
    cardClasses,
    titleClasses,
    descriptionClasses,
    listClasses,
    itemClasses,
    itemIconClasses,
    itemTextClasses,
    backgroundClasses,
  }
}
