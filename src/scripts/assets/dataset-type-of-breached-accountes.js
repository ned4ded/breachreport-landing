export default {
  type: 'doughnut',
  data: {
  labels: ['Corporate accounts', 'User accounts'],
  datasets: [{
    label: 'Type of breached accounts',
    data: [25, 146],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1
  }]
  },

}
