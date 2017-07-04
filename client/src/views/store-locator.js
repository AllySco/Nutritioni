var StoreLocator = function() {
	this.render();
}

StoreLocator.prototype = {
	render: function() {
		var main = document.createElement('main');
		var h1 = document.createElement('h1')
		h1.innerHTML = "THIS IS THE STORE LOCATOR PAGE";
		main.appendChild(h1);
		document.body.appendChild(main);
	}
}

module.exports = StoreLocator;