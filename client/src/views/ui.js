var Canvas = require('./canvas.js');
var RecipeForm = require('./recipe-form.js');

var UI = function() {
	new Canvas();
	new RecipeForm();
}

UI.prototype = {

}

module.exports = UI;
