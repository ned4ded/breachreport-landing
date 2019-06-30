import { ScrollVelocityMeasurer } from './utils/scroll-velocity-measurer'

const Selectors = {
  MODAL: '#before-close-modal'
}

export default () => {
  const $modal = $(Selectors.MODAL)

  if(!$modal.length) return

  const svm = new ScrollVelocityMeasurer()

  const unbindAll = () => {
    $(document).unbind('mouseleave', handler)

    svm.off()
  }

  const handler = function (e) {
    $modal.modal('show')

    unbindAll()
  }

  $( document ).one('mouseleave', handler)

  svm.on(speed => {
    if(speed > 10) return handler()
  })
}
