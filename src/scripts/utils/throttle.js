export default (fn, ms) => {
  let throttle = false

  function handle(...args) {
    if (!throttle) {
      throttle = true

      fn.apply(this, args)

      setTimeout(() => {
        throttle = false
      }, ms)
    }
  }

  return handle
}
