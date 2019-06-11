import { getUserAccountDataByEmail } from '../api'
import { Types as ResponseTypes } from '../utils/create-ajax-promise'
import { determineUserAccountTypeHelper } from './helpers'

export const Types = {
  UNREGISTERED: 'unregistered',
  UNVERIFIED: 'unverified',
  VERIFIED: 'verified'
}

export class UserAccountModel {
  /**
   *Creates an instance of UserAccount.
   * @param {String} email
   * @param {Boolean} created
   * @param {Boolean} confirmed
   * @param {Number} breaches
   * @memberof UserAccountModel
   */
  static async get(email) {
    const { status, response } = await getUserAccountDataByEmail(email)

    if (status === ResponseTypes.ERROR) return { err: true, response }

    const { results: breaches, isConfirmedAccount: confirmed, isCreatedAccount: created } = response

    return { data: new UserAccountModel(email, created, confirmed, breaches) }
  }

  constructor(email, created, confirmed, breaches) {
    this._email = email
    this._breaches = breaches

    Object.defineProperty(this, determineUserAccountTypeHelper(created, confirmed), {
      get: () => true
    })
  }

  is(name) {
    return !!this[name]
  }

  get breaches() {
    return this._breaches
  }

  get email() {
    return this._email
  }
}
