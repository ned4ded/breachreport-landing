import { Types } from '../user-account'

export default (created, confirmed) => {
  const conditions = [
    {
      name: Types.UNREGISTERED,
      value: !created
    },
    {
      name: Types.UNVERIFIED,
      value: !confirmed
    },
    {
      name: Types.VERIFIED,
      value: true
    }
  ]

  const { name } = conditions.find(({ name, value }) => value)

  return name
}
