// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Obtén los colores definidos en el HTML
var colorEspera = window.getComputedStyle(document.querySelector('.text-primary')).color;
var colorProceso = window.getComputedStyle(document.querySelector('.text-success')).color;
var colorEntrega = window.getComputedStyle(document.querySelector('.text-info')).color;

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var dataValues = [7, 7, 7]; // Valores de cada sección

var backgroundColors = [colorEspera, colorProceso, colorEntrega];
var hoverBackgroundColors = backgroundColors.map(color => {
  // Puedes ajustar estos colores según tus preferencias
  return color.replace(")", ", 0.8)").replace("rgb", "rgba");
});

var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["En espera", "En proceso", "En entrega"],
    datasets: [{
      data: dataValues,
      backgroundColor: backgroundColors,
      hoverBackgroundColor: hoverBackgroundColors,
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
