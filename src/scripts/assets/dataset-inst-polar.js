export default {
  type: 'polarArea',
  data: {
    labels: ["Username", "IP address"],
    datasets: [{
      label: "Breaches",
      backgroundColor: ["rgba(54, 162, 235, .4)", "rgba(255, 99, 132, .4)"],
      data: [7, 11]
    }]
  },
  options: {
    legend: {
      position: 'right'
    },
    title: {
      display: false,
      text: 'Structure of compromised private data for britishairways.com - Instagram'
    }
  }
}
