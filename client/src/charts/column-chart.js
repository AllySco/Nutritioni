var ColumnChart = function(title, data, categories) {

  var container = document.querySelector("#column-chart");
  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container,
      backgroundColor:'transparent'
    },
    title: { 
      text: title,
      style: {
        color: '#fff5ee' 
      }
    },
    series: data,
    xAxis: {
      categories: categories
    },
    legend: {
      enabled: false
    },
    yAxis: {
            labels: {
                format: '{value} mg'
            }
        },
  });
}

ColumnChart.prototype = {}
module.exports = ColumnChart;


