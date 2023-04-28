import { Ref } from 'vue'
import classNames from 'classnames'

export const useIconClasses = ({
  name,
}: {
  name: Ref<string>
}): {
  iconClasses: Ref<string>
} => {
  const baseClasses = computed<string>(() => 'icon shrink-0')

  const nameClasses = computed<string>(() =>
    classNames({
      [`--${name.value}`]: !!name.value,
    })
  )

  const iconClasses = computed<string>(() => classNames(baseClasses.value, nameClasses.value))

  return {
    iconClasses,
  }
}
