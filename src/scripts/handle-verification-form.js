import { UserAccountModel, Types as UserAccountTypes } from './models/user-account'
import { sendVerificationByUserEmail } from './api'

const Selectors = {
  VERIFICATION_FORM: '[data-form-verify="form"]',
  VERIFICATION_FORM_CONTAINER: '[data-form-verify="container"]',
  VERIFICATION_FORM_NOTES: '[data-form-verify="notes"]',
  ERROR_TEMPLATE: '[data-form-verify-t="error"]',
  NO_BREACHES_TEMPLATE: '[data-form-verify-t="no-breaches"]',
  HAS_BREACHES_TEMPLATE: '[data-form-verify-t="has-breaches"]',
  UNREGISTERED_USER_BTN_VERIFY: '[data-form-verify-t="btn-verify"]',
  UNREGISTERED_USER_TEMPLATE_FAIL: '[data-form-verify-t="unreg-fail"]',
  UNREGISTERED_USER_TEMPLATE_SUCCESS: '[data-form-verify-t="unreg-success"]',
  UNREGISTERED_USER_TEMPLATE_MSG: '[data-form-verify-t="unreg-msg"]',
  UNVERIFIED_USER_TEMPLATE: '[data-form-verify-t="unver"]',
  VERIFIED_USER_TEMPLATE: '[data-form-verify-t="ver"]',
  BREACHES_ANCHOR: '[data-form-verify-breaches]',
  MSG_ANCHOR: '[data-form-verify-msg]',
  VERIFICATION_FORM_BTN: '[data-form-verify-btn]',
}

const BadRequestCodes = {
  E_MISSING_OR_INVALID_PARAMS: 'The email was entered incorrectly. Please check and try again'
}

const changeNotes = notes => (content) => {
  const $notes = $(notes)
  const $jumbo = $notes.parents('#jumbotron-verify')

  const [n] = $notes.get()

  if($jumbo.length) {
    $('body, html').animate({ scrollTop: $jumbo.offset().top - 210 }, 500)
  }

  $notes.fadeOut(500, function () {
    n.innerHTML = ''

    $notes.append(content)

    if (!$jumbo.length) {
      $notes.find('.text-white').removeClass('text-white')
    }

    $notes.fadeIn(500)
  })
}

const formContentFromTemplates = templates => seq => {
  const req = (cur, arr) => {
    if(!cur.length) return arr

    const [first, ...rest] = cur

    const { name, cb } = first

    const $template = $( templates[name] ).clone()

    if(cb) cb($template)

    return req(rest, [...arr, $template])
  }

  return req(seq, [])
}

const formatBreachInfoElement = cnt => e => {
  const conditions = [
    { name: 'breach', condition: cnt === 1 },
    { name: 'breaches', condition: cnt > 1 }
  ]

  const { name: noun } = conditions.find(({ condition }) => condition)

  const str = `${cnt} ${noun}`

  const $e = $(e).find(Selectors.BREACHES_ANCHOR).text(str)
}

const validateEmailAddress = email => /\S+@\S+\.\S+/.test(email)

const getUserByEmailAsync = (email) => {
  return new Promise(async (exec) => {
    if (!validateEmailAddress(email)) return exec({ err: new Error(BadRequestCodes.E_MISSING_OR_INVALID_PARAMS) })

    const res = await UserAccountModel.get(email)

    const { err, data: user, response } = res

    const error = (() => {
      if(!err) return null

      try {
        const { responseJSON: { code } } = response

        return BadRequestCodes[code] ? new Error(BadRequestCodes[code]) : true

      } catch (error) {

        return true
      }
    })();

    return exec({ err: error, user })
  })
}

export default async () => {
  const templates = {
    error: $(Selectors.ERROR_TEMPLATE).prop('content'),
    hasBreaches: $(Selectors.HAS_BREACHES_TEMPLATE).prop('content'),
    noBreaches: $(Selectors.NO_BREACHES_TEMPLATE).prop('content'),
    unregFail: $(Selectors.UNREGISTERED_USER_TEMPLATE_FAIL).prop('content'),
    unregSuccess: $(Selectors.UNREGISTERED_USER_TEMPLATE_SUCCESS).prop('content'),
    unregMsg: $(Selectors.UNREGISTERED_USER_TEMPLATE_MSG).prop('content'),
    btnVerify: $(Selectors.UNREGISTERED_USER_BTN_VERIFY).prop('content'),
    unver: $(Selectors.UNVERIFIED_USER_TEMPLATE).prop('content'),
    ver: $(Selectors.VERIFIED_USER_TEMPLATE).prop('content'),
  }

  const formContent = formContentFromTemplates(templates)

  const $container = $(Selectors.VERIFICATION_FORM_CONTAINER)

  const email = $('#email-get').get(0)

  $container.each(async (i, e) => {
    const $form = $(e).find(Selectors.VERIFICATION_FORM)
    const $notes = $(e).find(Selectors.VERIFICATION_FORM_NOTES)
    const changeCurrentNotes = changeNotes($notes)

    const showErrorNote = (msg = '') => {
      const msgHandler = ($parent) => $parent.find(Selectors.MSG_ANCHOR).text(msg || '* Something went wrong, try again later.')

      const content = formContent([
        {
          name: 'error',
          ...(!!msg ? { cb: msgHandler } : {})
        }
      ])

      changeCurrentNotes(content)

      return
    }

    const renderNotes = async (err, user) => {
      if (err) {
        showErrorNote(err.message || undefined)

        return
      }


      const breachesInfo = user.breaches ? { name: 'hasBreaches', cb: formatBreachInfoElement(user.breaches) } : { name: 'noBreaches' }

      const setEventHandler = ($parent) => $parent.find(Selectors.VERIFICATION_FORM_BTN).click(async function (e) {
        e.preventDefault()

        const { status } = await sendVerificationByUserEmail(user.email)

        if (status !== 'success') {
          showErrorNote()

          return
        }

        const content = formContent([
          { name: 'unregMsg' },
        ])

        changeCurrentNotes(content)
      })

      if (user.is(UserAccountTypes.UNREGISTERED)) {
        const content = formContent([
          breachesInfo,
          { name: 'btnVerify', cb: setEventHandler },
          { name: (user.breaches ? 'unregFail' : 'unregSuccess') }
        ])

        changeCurrentNotes(content)

        return
      }

      if (user.is(UserAccountTypes.UNVERIFIED)) {
        const content = formContent([
          breachesInfo,
          { name: 'unver' },
          { name: 'btnVerify', cb: setEventHandler },
        ])

        changeCurrentNotes(content)

        return
      }

      if (user.is(UserAccountTypes.VERIFIED)) {
        const content = formContent([
          breachesInfo,
          { name: 'ver' }
        ])

        changeCurrentNotes(content)

        return
      }
    }

    if ($form.parents('#jumbotron-verify').length && email.dataset.email !== 'false') {

      const { err, user } = await getUserByEmailAsync(email.dataset.email)

      $form.find('input[name="search"]').val(email.dataset.email)

      renderNotes(err, user)
    }

    $form.submit(async function(e) {
      e.preventDefault()
      const self = $(this)

      self.find('.page-loader-wrapper').addClass('d-inline-block')
      const { value: email } = $(this).serializeArray().find(({ name }) => name == 'search')


      const { err, user } = await getUserByEmailAsync(email)

      self.find('.page-loader-wrapper').removeClass('d-inline-block')

      renderNotes(err, user)
    })
  })
}
