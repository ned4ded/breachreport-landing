import { API_URL_ROOT } from '../constants'
import { resolvePath as resolve, createAjaxPromise as ajax } from '../utils'

const SEND_VERIFY_API_URL = resolve(API_URL_ROOT, 'verify-email/')

export default async (emailAddress) => {
  if (!emailAddress) throw new Error('SendVerifyEmailApi: Email must be specified')

  return ajax(SEND_VERIFY_API_URL, 'POST', { emailAddress })
}
