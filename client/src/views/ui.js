var Canvas = require('./canvas');
var RecipeForm = require('./recipe-form');
var LandingPage = require('./landing-page');

var UI = function() {
	// new Canvas();
	// new RecipeForm();
	new LandingPage();
}

UI.prototype = {

}

module.exports = UI;
