var Canvas = require('./canvas');
var RecipeForm = require('./recipe-form');
var Navigation = require('./navigation');

var UI = function() {

	// new Canvas();
	new Navigation();
	// new RecipeForm();
	new LandingPage();

}

UI.prototype = {
}

module.exports = UI;
