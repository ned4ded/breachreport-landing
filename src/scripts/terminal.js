$( document ).ready(function () {
  const animateScrollByID = (id) => {
    const target = $(`${id}`)

    const { top } = target.offset()

    $('body, html').animate({ scrollTop: top }, 500)
  }

  const $links = $('[data-animate-scroll]')

  $links.on('click', function(e) {
    e.preventDefault()

    animateScrollByID(this.hash)
  })

  const $modalLinks = $('[data-modal-animate-scroll]')

  $modalLinks.click(function(e) {
    e.preventDefault()

    const $modal = $( this ).parents('.modal')

    const animate = () => animateScrollByID(this.hash)

    $modal.one('hidden.bs.modal', animate)

    $modal.modal('hide')
  })

  const getOffset = () => {
    const height = $( window ).height()

    return (height * .3) + 80
  }

  const resetBodyScrollspy = () => {
    $('body').scrollspy('dispose')

    $('body').scrollspy({
      offset: getOffset(),
      target: '.navbar'
    })
  }

  resetBodyScrollspy()

  $( window ).resize(resetBodyScrollspy)

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

    const repeat = $el.data('repeat') || false

    $el.countTo({
      formatter: formatterFn,
      refreshInterval: 2,
      onComplete: function() {
        if(!repeat) return

        setTimeout(() => {
          count(this)

          return
        }, 1000)
      }
    })
  }

  $('[data-count-number]').each((i, e) => count(e))

  const $modalForm = $('#get-for-free-modal').find('form')
  const $modalNote = $('#get-for-free-modal').find('[data-form-note]')

  $modalForm.on('submit', function(e) {
    e.preventDefault()

    $modalNote.addClass('active')
  })

  const $homeForm = $('#home').find('form')
  const $homeNote = $('#home').find('[data-form-note]')

  $homeForm.on('submit', function(e) {
    e.preventDefault()

    $homeNote.addClass('active')
  })

  const COOKIE_POLICY_NAME = 'br-cookie-policy-accepted'

  const cookies = decodeURIComponent(document.cookie)
    .split(';')
    .map(s => s.trim())
    .reduce((acc, c) => {
      const firstEqSignIndex = c.search('=')

      const name = c.slice(0, firstEqSignIndex)
      const value = c.slice(firstEqSignIndex + 1, c.length)

      return { ...acc, [name] : value }
    }, {})

  const { [COOKIE_POLICY_NAME] : cookie } = cookies

  if(!cookie || cookie !== 'true') {
    const $toast = $('#cookie-policy-toast').toast({
      autohide: false,
      delay: 0
    })

    const $acceptBtn = $toast.find('[data-accept-btn]')

    $acceptBtn.click(function(ev) {
      ev.preventDefault()

      document.cookie = `${COOKIE_POLICY_NAME}=true`

      $toast.toast('hide')
    })

    $toast.toast('show')
  }

  const $subscribeForm = $('#subscription').find('form')

  const $subscribeAfter = $('#subscription').find('[data-after-subscription]')

  $subscribeForm.submit(function(e) {
    e.preventDefault()

    $subscribeForm.fadeOut(1000, function() {
      $subscribeAfter.fadeIn(100)
    })
  })
})
