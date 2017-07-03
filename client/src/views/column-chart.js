
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
    }
  });
}

ColumnChart.prototype = {}
module.exports = ColumnChart;


