var StoreLocator = function() {
	var h1 = document.createElement('h1')
	h1.innerHTML = "THIS IS THE STORE LOCATOR PAGE";
	var main = document.createElement('main');
	main.appendChild(h1);
	document.body.appendChild(main);
}

StoreLocator.prototype = {

}

module.exports = StoreLocator;