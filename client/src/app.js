var UI = require('./views/UI.js')

var app = function() {

	new UI();

	console.log("I said stop laughing");

}

window.addEventListener('load', app)