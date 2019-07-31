const ELEMENT_ATTR_NAME = 'data-calculate-height'

export default function() {
  const $elems = $(`[${ELEMENT_ATTR_NAME}]`)
  const $body = $('body')

  $elems.each((i, e) => {
    const copy = $(e).clone().get(0);

    copy.style.visibility = 'hidden'
    copy.style.position = 'absolute'
    copy.style.overflow = 'auto'
    copy.style.top = '-10000px'
    copy.style.left = '-10000px'

    $body.append(copy)

    const {
      clientHeight: height
    } = copy

    e.style.height = `${height}px`
  })
}
