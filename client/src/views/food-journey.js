var FoodJourney = function() {
	var h1 = document.createElement('h1')
	h1.innerHTML = "THIS IS FOOD JOURNEY PAGE";
	var main = document.createElement('main');
	main.appendChild(h1);
	document.body.appendChild(main);
}

FoodJourney.prototype = {

}

module.exports = FoodJourney;