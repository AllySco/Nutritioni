
var PieChart = require('../views/pie-chart');
var ColumnChart = require('../views/column-chart')

var RecipeRequest = function() {
	this.url = 'https://api.edamam.com/api/nutrition-details?app_id=3e9c23fc&app_key=b933c7dff6662a955efd389261d28d44'
}

RecipeRequest.prototype = {
	makePostRequest: function(recipeData) {
		var jsonString = JSON.stringify(recipeData);
		console.log("json string", jsonString);
		var request = this.request = new XMLHttpRequest();
		request.open('POST', this.url);
		request.setRequestHeader('Content-Type', 'application/json');
		request.addEventListener('load', this.handleResponse.bind(this));
		request.send(jsonString);
	},
	handleResponse: function() {
		if (this.request.status !== 200) return;
		var jsonResponse = this.request.responseText;
		var responseData = JSON.parse(jsonResponse);
		console.log("response data line 23", responseData)

		var nutrients = responseData.totalNutrients;
		console.log("nutrients line 26", nutrients)
		var columnChartData = [
			{name: nutrients.CA.label, y: nutrients.CA.quantity, color: 'red'},
			{name: nutrients.FE.label, y: nutrients.FE.quantity, color: 'blue'},
			{name: nutrients.K.label, y: nutrients.K.quantity, color: 'orange'},
			{name: nutrients.MG.label, y: nutrients.MG.quantity, color: 'purple'},
			{name: nutrients.P.label, y: nutrients.P.quantity, color: 'brown'},
			{name: nutrients.TOCPHA.label, y: nutrients.TOCPHA.quantity, color: 'yellow'},
			{name: nutrients.ZN.label, y: nutrients.ZN.quantity, color: 'black'},
			];
			
		var pieChartData = [
			{ name: nutrients.CHOCDF.label, y: nutrients.CHOCDF.quantity, color: 'red' },
			{ name: nutrients.FAT.label, y: nutrients.FAT.quantity, color: 'green' },
			{ name: nutrients.PROCNT.label, y: nutrients.PROCNT.quantity, color: 'blue' }
		];
		new PieChart('Nutrition Info', 'Nutrients', pieChartData);
		new ColumnChart('Nutritional Info', 'Nutrients', columnChartData )
	}
}

module.exports = RecipeRequest;