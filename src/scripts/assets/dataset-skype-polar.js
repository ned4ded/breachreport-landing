export default {
  type: 'polarArea',
  data: {
    labels: ["Username", "Email", "Password", "IP address"],
    datasets: [{
      label: "Breaches",
      backgroundColor: ["rgba(54, 162, 235, .4)", "rgba(255, 99, 132, .4)", "rgba(75, 192, 192, .4)", "rgba(255, 205, 86, .4)"],
      data: [3, 4, 2, 1]
    }]
  },
  options: {
    legend: {
      position: 'right'
    },
    title: {
      display: false,
      text: 'Structure of compromised private data for britishairways.com - Skype'
    }
  }
}
