var FoodJourney = function() {
	
  this.render();

}

FoodJourney.prototype = {


render: function() {
  var main = document.createElement('main');
  main.id = "food-journey";
  var infoContainer = document.createElement('div')
  infoContainer.id = 'info-container';

  var infoHeader = document.createElement('div')
  infoHeader.id = "info-header"

  var h2 = document.createElement('h2');
  h2.innerText = "YOUR BODY AND FOOD";

  var opacityWrapper = document.createElement('div');
  opacityWrapper.id = 'opacity-wrapper'


  infoContainer.appendChild(infoHeader)
  main.appendChild(infoContainer)
  document.body.appendChild(main)

}
}

module.exports = FoodJourney;