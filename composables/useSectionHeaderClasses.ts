import { Ref } from 'vue'
import classNames from 'classnames'
import { SectionType, SectionTypeEnum } from '@/types/section-types'

export const useSectionHeaderClasses = ({
  type,
}: {
  type: Ref<SectionType>
}): {
  headerClasses: Ref<string>
  titleClasses: Ref<string>
  subtitleClasses: Ref<string>
} => {
  const headerClasses = computed<string>(() => {
    const typeClassMap = {
      [SectionTypeEnum.default]: 'section-header-default space-y-4 xs:text-left sm:text-center',
      [SectionTypeEnum.service]: 'section-header-service space-y-4 xs:text-left sm:text-center lg:text-center',
      [SectionTypeEnum.advantage]: 'section-header-advantage xs:text-left sm:text-center space-y-4',
      [SectionTypeEnum.review]: 'section-header-review xs:text-left sm:text-center space-y-4',
      [SectionTypeEnum['app-featured']]: 'section-header-app-featured space-y-4 xs:text-left sm:text-center',
      [SectionTypeEnum.feature]: 'section-header-feature space-y-4 xs:text-left sm:text-center',
      [SectionTypeEnum.blog]: 'section-header-blog xs:text-left sm:text-center space-y-4',
    }

    // @ts-ignore
    const classes = typeClassMap[type.value]

    return classNames('section-header', {
      [classes]: classes,
    })
  })

  const titleClasses = computed<string>(() => {
    const typeClassMap = {
      [SectionTypeEnum.default]: 'sm:max-w-5xl mx-auto',
      [SectionTypeEnum.service]: 'lg:mx-auto', // sm:max-w-[946px]
      [SectionTypeEnum.advantage]: 'mx-auto', // sm:max-w-[946px]
      [SectionTypeEnum.review]: 'sm:max-w-[666px] mx-auto',
      [SectionTypeEnum.feature]: 'sm:mx-auto', // sm:max-w-5xl
      [SectionTypeEnum['app-featured']]: 'sm:mx-auto', // sm:max-w-5xl
      [SectionTypeEnum.blog]: 'sm:max-w-[535px] sm:mx-auto',
    }

    const classes = typeClassMap[type.value]

    return classNames('section-title xs:h3_5 lg:h2 font-alt text-black', {
      [classes]: classes,
    })
  })

  const subtitleClasses = computed<string>(() => {
    const typeClassMap = {
      [SectionTypeEnum.default]: 'sm:max-w-5xl sm:mx-auto',
      [SectionTypeEnum.service]: 'sm:max-w-[800px] sm:mx-auto',
      [SectionTypeEnum.advantage]: 'sm:max-w-[800px] sm:mx-auto',
      [SectionTypeEnum.review]: 'sm:max-w-[540px] sm:mx-auto',
      [SectionTypeEnum.feature]: 'sm:max-w-[800px] sm:mx-auto',
      [SectionTypeEnum['app-featured']]: 'sm:max-w-[800px] sm:mx-auto',
      [SectionTypeEnum.blog]: 'sm:max-w-[454px] sm:mx-auto',
    }

    const classes = typeClassMap[type.value]

    return classNames('section-subtitle xs:text-base lg:subtitle text-gray-600', {
      [classes]: classes,
    })
  })

  return {
    headerClasses,
    titleClasses,
    subtitleClasses,
  }
}
