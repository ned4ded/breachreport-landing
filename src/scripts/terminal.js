$( document ).ready(function () {
  const formatter = {
    comma: (num) => Math.round(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
    billion: (n) => {
      const adjustNumber = (str, n = 1) => {
        if(str.length >= n) return str

        return adjustNumber('0' + str, n)
      }

      const num = (function() {
        const num = Math.round(n).toString()

        return num.length > 3 ? num : adjustNumber(num, 3)
      })()

      return num.replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1.')
    },

  }

  $('[data-toggle="popover"]').popover()

  const count = el => {
    const $el = $( el )
    const formatterName = $el.data('formatter') || 'comma'

    const { [formatterName]:formatterFn } = formatter

    $el.countTo({
      formatter: formatterFn,
      refreshInterval: 2,
      onComplete: function() {
        setTimeout(() => {
          count(this)

          return
        }, 1000)
      }
    })
  }

  $('[data-count-number]').each((i, e) => count(e))
})
