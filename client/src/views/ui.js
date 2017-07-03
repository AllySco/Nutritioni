var Canvas = require('./canvas');

var Navigation = require('./navigation');
var RecipeForm = require('./recipe-form');
var LandingPage = require('./landing-page');
var FoodJourney = require('./food-journey');
var StoreLocator = require('./store-locator');


var UI = function() {
	// new Canvas();

	new Navigation();
	// new RecipeForm();
	// new LandingPage();
	// new StoreLocator();
	new LandingPage();
}

UI.prototype = {
}

module.exports = UI;
