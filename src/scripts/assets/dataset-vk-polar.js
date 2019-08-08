export default {
  type: 'polarArea',
  data: {
    labels: ["Username", "Password", "IP address"],
    datasets: [{
      label: "Breaches",
      backgroundColor: ["rgba(255, 99, 132, .4)", "rgba(75, 192, 192, .4)", "rgba(255, 205, 86, .4)"],
      data: [15, 10, 20]
    }]
  },
  options: {
    legend: {
      position: 'right'
    },
    title: {
      display: false,
      text: 'Structure of compromised private data for britishairways.com - Vkontakte'
    }
  }
}
