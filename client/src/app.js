var UI = require('./views/UI.js');

var app = function() {
	new UI();
}

window.addEventListener('load', app);
