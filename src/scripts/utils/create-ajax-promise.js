const wrap = (status, response) => ({ status, response })

export const Types = {
  SUCCESS: 'success',
  ERROR: 'error'
}

export default (url, type = 'GET', data = {}) => {
  return new Promise(async function(exec) {

    const { status, response } = await $.ajax(url, { data, type })
      .then(
        (r) => wrap(Types.SUCCESS, r),
        (r) => wrap(Types.ERROR, r)
      )

    exec({ status, response })
  })
}
