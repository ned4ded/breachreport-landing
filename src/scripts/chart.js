import Chart from 'chart.js'

import skype from './assets/dataset-skype'
import tw from './assets/dataset-tw'
import vk from './assets/dataset-vk'
import inst from './assets/dataset-inst'
import types from './assets/dataset-type-of-breached-accountes'

export const datasets = {
  skype,
  tw,
  vk,
  inst,
  types
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
