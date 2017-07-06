var Canvas = require('../components/canvas');
var Navigation = require('../components/navigation');
var RecipeAnalyser = require('./recipe-analyser2');
var LandingPage = require('./landing-page');
var FoodJourney = require('./food-journey');
var StoreLocator = require('./store-locator');

var UI = function() {
	this.render();
}

UI.prototype = {
	render: function() {
		new Navigation();
		// new RecipeAnalyser();
		new LandingPage();
	 //  new StoreLocator();
    // new FoodJourney();
	}
}

module.exports = UI;
