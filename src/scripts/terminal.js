$( document ).ready(function () {
  const formatter = (num) => Math.round(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  $('[data-toggle="popover"]').popover()

  $('[data-count-number]').countTo({
    formatter,
    refreshInterval: 2
  });
})
