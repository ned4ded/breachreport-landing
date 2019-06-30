import throttle from './throttle'

const getDistanceByScrollPosition = (init, current) => {
  const q = init > current ? 1 : -1

  return (init - current) * q
}

export class ScrollVelocityMeasurer {
  constructor() {
    this._pageY = Math.round(window.pageYOffset)
    this._time = 0
    this._cb = () => {}

    this._fn = throttle((ev) => {
      const { timeStamp } = ev
      const pageY = Math.round(window.pageYOffset)

      const distance = getDistanceByScrollPosition(this._pageY, pageY)
      const time = timeStamp - this._time
      const speed = distance / time

      this._pageY = pageY
      this._time = timeStamp
      this._speed = speed
    }, 50)
  }

  on(cb) {
    if(cb) this._cb = cb

    $(document).scroll(this._fn)
  }

  off() {
    $(document).unbind('scroll', this._fn)
  }

  set _speed(speed) {
    this._cb(speed)
  }
}
