import vis from 'vis-timeline'
import moment from 'moment'
import Chart from 'chart.js';

import overallDataset from './assets/dataset-britishairways'
import skypeDataset from './assets/dataset-skype-polar'
import vkDataset from './assets/dataset-vk-polar'
import twDataset from './assets/dataset-tw-polar'
import instDataset from './assets/dataset-inst-polar'

const overall = {
  amount: '250m',
}

export default function() {
  const container = document.getElementById('visualization')
  const component = document.querySelector('[data-timeline]')
  const chartContainer = document.querySelector('[data-timeline-chart]')

  if(!container || !component || !chartContainer) return

  var chart = new Chart(chartContainer.getContext('2d'), overallDataset)

  const amount = component.querySelector('[data-timeline-amount]')
  const date = component.querySelector('[data-timeline-date]')
  const structure = component.querySelector('[data-timeline-structure]')
  const chartName = document.querySelector('[data-timeline-chart-name]')

  const updateDate = (d) => $(date).text(d)
  const updateAmount = (a) => $(amount).text(a)
  const updateChartName = (a) => $(chartName).text(a)
  const updateChart = (conf) => {
    chart.destroy()

    const newChart = new Chart(chartContainer.getContext('2d'), conf)

    chart = newChart
  }
  const updateStructure = (arr) => {
    structure.innerHTML = ''

    arr.forEach(e => {
      const span = document.createElement('span')

      $(structure).append($(span).text(e))
    })
  }

  updateAmount(overall.amount)

  const items = new vis.DataSet([{
      id: 1,
      content: 'Skype',
      start: '2014-03-20',
      type: 'point',
      data: {
        icon: 'skype',
        amount: '150m',
        structure: ['username', 'email', 'password', 'ip-address'],
        chart: skypeDataset
      }
    },
    {
      id: 2,
      content: 'VK',
      start: '2014-04-14',
      type: 'point',
      data: {
        icon: 'vk',
        amount: '90m',
        structure: ['username', 'password', 'ip-address'],
        chart: vkDataset
      }
    },
    {
      id: 3,
      content: 'Instagram',
      start: '2014-05-18',
      type: 'point',
      data: {
        icon: 'inst',
        amount: '100m',
        structure: ['username', 'ip-address'],
        chart: instDataset
      }
    },
    {
      id: 4,
      content: 'Twitter',
      start: '2014-07-16',
      type: 'point',
      data: {
        icon: 'tw',
        amount: '50m',
        structure: ['username', 'ip-address', 'email'],
        chart: twDataset
      }
    }
  ]);

  const options = {
    zoomable: false,
    margin: {
      item: 30,
    },
    // onInitialDrawComplete(...args) {
    //   console.log(timeline.getVisibleItems())
    // },
    orientation: {
      axis: 'none',
    },
    multiselect: false,
    template: function(item, element, d) {
      const { data } = d

      element.classList.add('report-timeline-item')
      element.classList.add(`report-timeline-item-${data.icon}`)
    }
  };

  const timeline = new vis.Timeline(container, items, options)

  timeline.on('select', ({ items: i, event }) => {
    const isItemSelection = !event.target.classList.contains('vis-group')

    if(!isItemSelection) {
      updateDate('')
      updateAmount(overall.amount)
      updateStructure([])
      updateChart(overallDataset)
      updateChartName('All Breaches')

      return
    }

    const [ item ] = i

    const { start, data, content } = items.get(item)

    updateDate(moment(start).format('MMMM YYYY'))
    updateAmount(data.amount)
    updateStructure(data.structure)
    updateChart(data.chart)
    updateChartName(content)
  })

}
