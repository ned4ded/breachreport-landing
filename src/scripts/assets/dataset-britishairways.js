export default {
  type: 'polarArea',
  data: {
    labels: ["Credit card no.", "Username", "Email", "Password", "IP address", "Geolocation"],
    datasets: [{
      label: "Breaches",
      backgroundColor: ["rgba(54, 162, 235, .4)", "rgba(255, 99, 132, .4)", "rgba(75, 192, 192, .4)", "rgba(255, 205, 86, .4)", "rgba(201, 203, 207, .4)", "rgba(155, 89, 182, .4)"],
      data: [5, 10, 15, 10, 20, 13]
    }]
  },
  options: {
    legend: {
      position: 'right'
    },
    title: {
      display: false,
      text: 'Structure of compromised private data for britishairways.com - All breaches'
    }
  }
}
