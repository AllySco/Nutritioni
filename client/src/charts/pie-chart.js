var PieChart = function(title, dataLabel, data) {
	var container = document.querySelector('#pie-chart');
	var chart = new Highcharts.Chart({
		chart: {
			type: 'pie',
			renderTo: container,
			animation: false,
			backgroundColor:'transparent'
		},
		title: {
			text: title,
			style: {
			  color: '#fff5ee' 
			}
		},
		series: [
			{
				name: dataLabel,
				data: data
			}
		]
	});
}

PieChart.prototype = {}

module.exports = PieChart;
