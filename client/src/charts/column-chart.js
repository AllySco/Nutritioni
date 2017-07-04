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
      gridLineColor: '#292828',
      className: 'column-chart-x-axis',
      categories: categories
    },
    legend: {
      enabled: false
    },
    yAxis: {
            gridLineColor: '#696969',
            className: 'column-chart-y-axis',
            title: {
              text: 'Mass mg'
            },
            labels: {
                format: '{value} mg'
            }
        },
  });
}

ColumnChart.prototype = {}
module.exports = ColumnChart;


