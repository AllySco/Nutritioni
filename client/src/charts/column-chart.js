var ColumnChart = function(title, data, categories) {
  var container = document.querySelector("#column-chart");
  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: { text: title},
    series: data,
    xAxis: {
      categories: categories
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


