import { Ref } from 'vue'
import classNames from 'classnames'

export const useFooterClasses = (): {
  footerTitleClasses: Ref<string>
  footerTextMediumClasses: Ref<string>
  footerLinkMediumClasses: Ref<string>
  footerTextSmallClasses: Ref<string>
  footerLinkSmallClasses: Ref<string>
} => {
  const footerTitleClasses = computed<string>(() => classNames('text-base font-bold text-white'))

  const footerTextMediumClasses = computed<string>(() => classNames('text-base -tracking-[0.1px] text-blue-50'))
  const footerLinkMediumClasses = computed<string>(() =>
    classNames('text-base -tracking-[0.1px] text-blue-50 hover:text-blue-200 space-x-2.5')
  )

  const footerTextSmallClasses = computed<string>(() => classNames('text-sm -tracking-[0.1px] text-blue-50'))
  const footerLinkSmallClasses = computed<string>(() =>
    classNames('text-sm -tracking-[0.1px] text-blue-50 hover:text-blue-200')
  )

  return {
    footerTitleClasses,
    footerTextMediumClasses,
    footerLinkMediumClasses,
    footerTextSmallClasses,
    footerLinkSmallClasses,
  }
}
