var Canvas = require('../components/canvas');
var Navigation = require('../components/navigation');
var RecipeForm = require('./recipe-form');
var LandingPage = require('./landing-page');
var FoodJourney = require('./food-journey');
var StoreLocator = require('./store-locator');

var UI = function() {
	this.render();
}

UI.prototype = {
	render: function() {
		// new Navigation();
		 new RecipeForm();
		// new LandingPage();
	}
}

module.exports = UI;
