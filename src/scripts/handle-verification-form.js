import { UserAccountModel, Types as UserAccountTypes } from './models/user-account'
import { sendVerificationByUserEmail } from './api'

const Selectors = {
  VERIFICATION_FORM: '[data-form-verify="form"]',
  VERIFICATION_FORM_CONTAINER: '[data-form-verify="container"]',
  VERIFICATION_FORM_NOTES: '[data-form-verify="notes"]',
  ERROR_TEMPLATE: '[data-form-verify-t="error"]',
  NO_BREACHES_TEMPLATE: '[data-form-verify-t="no-breaches"]',
  HAS_BREACHES_TEMPLATE: '[data-form-verify-t="has-breaches"]',
  UNREGISTERED_USER_BTN_FAIL: '[data-form-verify-t="btn-fail"]',
  UNREGISTERED_USER_BTN_SUCCESS: '[data-form-verify-t="btn-success"]',
  UNREGISTERED_USER_TEMPLATE_FAIL: '[data-form-verify-t="unreg-fail"]',
  UNREGISTERED_USER_TEMPLATE_SUCCESS: '[data-form-verify-t="unreg-success"]',
  UNREGISTERED_USER_TEMPLATE_MSG: '[data-form-verify-t="unreg-msg"]',
  UNVERIFIED_USER_TEMPLATE: '[data-form-verify-t="unver"]',
  VERIFIED_USER_TEMPLATE: '[data-form-verify-t="ver"]',
  BREACHES_ANCHOR: '[data-form-verify-breaches]',
  VERIFICATION_FORM_BTN: '[data-form-verify-btn]',
}

const changeNotes = notes => (content) => {
  const $notes = $( notes )
  const $jumbo = $notes.parents('#jumbotron-verify')

  const [n] = $notes.get()

  if($jumbo.length) {
    $('body, html').animate({ scrollTop: $jumbo.offset().top - 210 }, 500)
  }

  $notes.fadeOut(500, function () {
    n.innerHTML = ''

    $notes.append( content )

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

export default async () => {
  const templates = {
    error: $(Selectors.ERROR_TEMPLATE).prop('content'),
    hasBreaches: $(Selectors.HAS_BREACHES_TEMPLATE).prop('content'),
    noBreaches: $(Selectors.NO_BREACHES_TEMPLATE).prop('content'),
    unregFail: $(Selectors.UNREGISTERED_USER_TEMPLATE_FAIL).prop('content'),
    unregSuccess: $(Selectors.UNREGISTERED_USER_TEMPLATE_SUCCESS).prop('content'),
    unregMsg: $(Selectors.UNREGISTERED_USER_TEMPLATE_MSG).prop('content'),
    btnSuccess: $(Selectors.UNREGISTERED_USER_BTN_SUCCESS).prop('content'),
    btnFail: $(Selectors.UNREGISTERED_USER_BTN_FAIL).prop('content'),
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

    const showErrorNote = () => {
      const content = formContent([
        { name: 'error' }
      ])

      changeCurrentNotes(content)

      return
    }

    const renderNotes = async (err, user) => {
      if (err) {
        showErrorNote()

        return
      }

      const breachesInfo = user.breaches ? { name: 'hasBreaches', cb: formatBreachInfoElement(user.breaches) } : { name: 'noBreaches' }

      if (user.is(UserAccountTypes.UNREGISTERED)) {
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

        const content = formContent([
          breachesInfo,
          { name: (user.breaches ? 'btnFail' : 'btnSuccess'), cb: setEventHandler },
          { name: (user.breaches ? 'unregFail' : 'unregSuccess') }
        ])

        changeCurrentNotes(content)

        return
      }

      if (user.is(UserAccountTypes.UNVERIFIED)) {
        const { status } = await sendVerificationByUserEmail(user.email)

        if (status !== 'success') {
          showErrorNote()

          return
        }

        const content = formContent([
          breachesInfo,
          { name: 'unver' }
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
      const { err, data: user } = await UserAccountModel.get(email.dataset.email)

      $form.find('input[name="search"]').val(email.dataset.email)

      renderNotes(err, user)
    }

    $form.submit(async function(e) {
      e.preventDefault()

      const { value: email } = $(this).serializeArray().find(({ name }) => name == 'search')

      const { err, data: user } = await UserAccountModel.get(email)

      renderNotes(err, user)
    })
  })
}
