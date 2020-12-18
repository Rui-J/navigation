export const isScroll = (el, vertical = true) => {
  const style = document.defaultView.getComputedStyle(el)
  const styleKey = ['overflow', vertical ? 'overflowY' : 'overflowX']
  return styleKey.every(key => {
    return ['scroll', 'auto'].includes(style[key])
  })
}

export const getScrollContainer = (el, vertical = true) => {
  let parent = el.parentNode
  while (parent) {
    if ([document, document.documentElement].includes(parent)) {
      return document
    }
    if (isScroll(parent, vertical)) {
      console.log(1111111111111111111111111111, parent)
      return parent
    }
    parent = parent.parentNode
  }

  return parent
}
