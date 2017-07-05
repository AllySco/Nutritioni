var FoodJourney = function() {
	console.log('in food journey')
	var h1 = document.createElement('h1')
	h1.innerHTML = "THIS IS FOOD JOURNEY PAGE";
	var main = document.createElement('main');
	main.id = 'food-journey'
	main.appendChild(h1);
	document.body.appendChild(main);
}

FoodJourney.prototype = {

}

module.exports = FoodJourney;