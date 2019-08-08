export default {
  type: 'polarArea',
  data: {
    labels: ["Username", "Email", "IP address"],
    datasets: [{
      label: "Breaches",
      backgroundColor: ["rgba(255, 205, 86, .4)", "rgba(201, 203, 207, .4)", "rgba(155, 89, 182, .4)"],
      data: [12, 10, 15]
    }]
  },
  options: {
    legend: {
      position: 'right'
    },
    title: {
      display: false,
      text: 'Structure of compromised private data for britishairways.com - Twitter'
    }
  }
}
