export const getScrollBarWidth = () => {
  document.body.style.overflow = 'hidden'
  let width = document.body.clientWidth
  document.body.style.overflow = 'scroll'
  width -= document.body.clientWidth
  if (!width) width = document.body.offsetWidth - document.body.clientWidth
  document.body.style.overflow = ''
  return width
}

export const lockBodyScroll = (lock = false) => {
  const body = document.querySelector('body')

  if (lock) {
    document.querySelector('html')?.style.setProperty('padding-right', `${getScrollBarWidth()}px`)
    body?.style.setProperty('overflow', 'hidden')
  } else {
    document.querySelector('html')?.style.setProperty('padding-right', `0px`)
    body?.style.setProperty('overflow', 'auto')
  }
}
