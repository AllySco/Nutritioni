var Canvas = require('./canvas.js');
var RecipeForm = require('./recipe-form.js');
var MapWrapper = require('./map-wrapper.js')

var UI = function() {

	// new Canvas();
	new RecipeForm();


var initialize = function() {
  var main = document.querySelector('main');
	var container = document.createElement('div');

  var cords = {lat:51, lng: 5}

  var zoom = 8
  var mainMap = new MapWrapper(location, cords, zoom);
  mainMap.addMarker(cords);
  mainMap.addClickEvent();
  main.appendChild(container);
}
window.addEventListener('load', initialize);
}

UI.prototype = {

}

module.exports = UI;
