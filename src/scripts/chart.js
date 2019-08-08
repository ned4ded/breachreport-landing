import Chart from 'chart.js'

import skype from './assets/dataset-skype'
import britishairways from './assets/dataset-britishairways'

export const datasets = {
  skype,
  britishairways
}

export default function() {
  const ch = document.querySelectorAll('[data-chart]')

  if(!ch.length) return

  ch.forEach((v) => {
    const {
      chartDataset: dataset
    } = v.dataset

    if (!datasets[dataset]) return

    const context = v.getContext('2d')

    new Chart(context, datasets[dataset])
  })
}
