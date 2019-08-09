export default {
  type: 'horizontalBar',
  data: {
    labels: ['Plain text', 'Easily cracked', 'Standart protection', 'Strongest encryption'],
    datasets: [{
      label: 'Twitter',
      data: [10, 11, 6, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      display: false,
      title: {
        display: true,
        text: 'Twitter'
      },
      labels: {
        fontFamily: "'Dosis', sans-serif",
      }
    },
    scales: {
      yAxes: [{
        barPercentage: 0.2,
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}
