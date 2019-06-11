import { API_URL_ROOT } from '../constants'
import { resolvePath as resolve, createAjaxPromise as ajax } from '../utils'

const SEND_RESULT_API_URL = resolve(API_URL_ROOT, '/send-results/')

export default async (emailAddress) => {
  if(!emailAddress) throw new Error('SendResultApi: Email must be specified')

  const res = await ajax(SEND_RESULT_API_URL, 'POST', { emailAddress })

  console.log(res)

  return res
}
