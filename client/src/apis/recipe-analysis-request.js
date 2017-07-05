var PieChart = require('../charts/pie-chart');
var ColumnChart = require('../charts/column-chart')

var RecipeRequest = function() {
	this.url = 'https://api.edamam.com/api/nutrition-details?app_id=3e9c23fc&app_key=b933c7dff6662a955efd389261d28d44'
}

RecipeRequest.prototype = {
	makePostRequest: function(recipeData, callback) {
		var jsonString = JSON.stringify(recipeData);
		var request = new XMLHttpRequest();
		request.open('POST', this.url);
		request.setRequestHeader('Content-Type', 'application/json');
		request.addEventListener('load', function() {
			callback(request.responseText);
		});
		request.send(jsonString);
	}
}

module.exports = RecipeRequest;