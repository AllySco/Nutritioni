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

  var canvasWrapper = this.createCanvasWrapper();


  infoHeader.appendChild(h2)
  infoContainer.appendChild(infoHeader)
  infoContainer.appendChild(canvasWrapper)
  main.appendChild(infoContainer)
  document.body.appendChild(main)

  // var addImageToCanvas = this.addImageToCanvas();
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

createCanvasWrapper: function() {
  var canvasWrapper = document.createElement('div');
  canvasWrapper.id = 'canvas-wrapper'
  return canvasWrapper
},

// addImageToCanvas: function() {
//   var canvas = document.querySelector("#canvas-wrapper")
//   console.log(canvas)
//   canvas.style.backgroundImage = 'url(\'./images/body_pic.png\')'
// }

}

module.exports = FoodJourney;