var FoodJourney = function() {
	
  this.render();

}

FoodJourney.prototype = {


render: function() {
  var main = document.createElement('main');
  main.id = "food-journey";

  var infoContainer = this.createInfoContainer();

  var infoHeader = this.createInfoHeader();

  var h2 = this.createTitle();

  var opacityWrapper = this.createOpacityWrapper();

  infoHeader.appendChild(h2)
  infoContainer.appendChild(infoHeader)
  infoContainer.appendChild(opacityWrapper)
  main.appendChild(infoContainer)
  document.body.appendChild(main)

},

createInfoContainer: function() {
  var infoContainer = document.createElement('div')
  infoContainer.id = 'info-container';
  return infoContainer;
},

createInfoHeader: function() {
  var infoHeader = document.createElement('div')
  infoHeader.id = "info-header"
  return infoHeader;

},

createTitle: function() {
  var h2 = document.createElement('h2');
  h2.innerText = "YOUR BODY AND FOOD";
  return h2;
},

createOpacityWrapper: function() {
  var opacityWrapper = document.createElement('div');
  opacityWrapper.id = 'opacity-wrapper'
  return opacityWrapper
},

}

module.exports = FoodJourney;