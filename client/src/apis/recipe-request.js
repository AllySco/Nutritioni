var PieChart = require('../charts/pie-chart');
var ColumnChart = require('../charts/column-chart')

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
		var NutrientData = [{ 
				name: "vitamins",
				data: [
			{y: nutrients.CA.quantity , color: 'red'},
			{y: nutrients.FE.quantity, color: 'blue'},
			{y: nutrients.K.quantity, color: 'orange'},
			{y: nutrients.MG.quantity, color: 'purple'},
			{y: nutrients.P.quantity, color: 'brown'},
			{y: nutrients.TOCPHA.quantity, color: 'yellow'},
			{y: nutrients.ZN.quantity, color: 'black'},
			]
		}];
			console.log("line 36", NutrientData)

			var NutrientLabels = [ "Calcium", 
			"Iron", "Potassium", "Magnesium", "Potassium", "Vitamin E", "Zinc"]


		console.log("line 47", NutrientLabels);		

		var pieChartData = [
			{ name: nutrients.CHOCDF.label, y: nutrients.CHOCDF.quantity, color: 'red' },
			{ name: nutrients.FAT.label, y: nutrients.FAT.quantity, color: 'green' },
			{ name: nutrients.PROCNT.label, y: nutrients.PROCNT.quantity, color: 'blue' }
		];


		new PieChart('Nutrition Info', 'Nutrients', pieChartData);
		new ColumnChart('Vitamin Info', NutrientData, NutrientLabels);

	}
}

module.exports = RecipeRequest;