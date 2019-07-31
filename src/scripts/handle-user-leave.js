import { ScrollVelocityMeasurer } from './utils/scroll-velocity-measurer'
import throttle from './utils/throttle'

const Selectors = {
  MODAL: '#before-close-modal',
  ABOUT: '#about'
}

export default () => {
  const $modal = $(Selectors.MODAL)
  const $about = $(Selectors.ABOUT)

  if(!$modal.length || !$about.length) return

  const deepnessHeightTrigger = (() => {
    const {
      offsetHeight,
      offsetTop
    } = $about.get(0)

    return offsetHeight + offsetTop
  })();

  const svm = new ScrollVelocityMeasurer()

  const unbindAll = () => {
    clearTimeout(timer)

    svm.off()

    $(document).unbind('scroll', handleScroll)
  }

  const handler = function (e) {
    $modal.modal('show')

    unbindAll()
  }

  const handleScroll = throttle(function(ev) {
    const currentPosition = $(this).scrollTop() + window.innerHeight

    if (currentPosition >= deepnessHeightTrigger) handler()
  }, 500)

  $(document).scroll(handleScroll)

  svm.on(speed => {
    if(speed > 10) return handler()
  })

  const timer = setTimeout(handler, 18000)
}
