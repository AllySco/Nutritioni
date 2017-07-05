var FoodJourney = function() {
	
  this.render();

}

FoodJourney.prototype = {


render: function() {
  var main = document.createElement('main');
  main.id = "food-journey";

  var buttonAndTextContainers = this.createButtonAndTextContainers();
  var buttonContainer = this.createButtonContainer();

  var textContainer = this.createTextContainer();

  var infoContainer = this.createInfoContainer();

  var infoHeader = this.createInfoHeader();

  var h2 = this.createTitle();

  var opacityWrapper = this.createOpacityWrapper();

  var canvasWrapper = this.createCanvasWrapper();
  var proteinJourneyButton = this.createProteinJourneyButton();
  var carbsJourneyButton = this.createCarbsJourneyButton();
  var fatsJourneyButton = this.createFatsJourneyButton();
  var textBox = this.createTextBox();

  infoHeader.appendChild(h2)
  infoContainer.appendChild(infoHeader)
  opacityWrapper.appendChild(canvasWrapper)
  infoContainer.appendChild(opacityWrapper)

  textContainer.appendChild(textBox)

  buttonContainer.appendChild(proteinJourneyButton)
  buttonContainer.appendChild(carbsJourneyButton)
  buttonContainer.appendChild(fatsJourneyButton)

  buttonAndTextContainers.appendChild(buttonContainer)
  buttonAndTextContainers.appendChild(textContainer)
  main.appendChild(buttonAndTextContainers)
  main.appendChild(infoContainer)
  document.body.appendChild(main)

  // var addImageToCanvas = this.addImageToCanvas();
},

// Page creation Methods 

createButtonAndTextContainers: function() {
  var buttonAndTextContainers = document.createElement('div')
  buttonAndTextContainers.id = 'button-and-text-containers'
  return buttonAndTextContainers
},

createButtonContainer: function() {
  var buttonContainer = document.createElement('div')
  buttonContainer.id = 'button-container'
  return buttonContainer
},

createTextContainer: function() {
  var textContainer = document.createElement('div')
  textContainer.id = 'text-container'
  return textContainer
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
  var opacityWrapper = document.createElement('div')
  opacityWrapper.id = 'opacity-wrapper'
  return opacityWrapper
},

createCanvasWrapper: function() {
  var canvasWrapper = document.createElement('div');
  canvasWrapper.id = 'canvas-wrapper'
  return canvasWrapper
},

createProteinJourneyButton: function() {
  var proteinButton = document.createElement('button')
  proteinButton.id = "button"
  proteinButton.innerText = "PROTEIN"
  proteinButton.onclick = function () {
    this.populateTextBoxProtein()
  }.bind(this)
  return proteinButton
},

createCarbsJourneyButton: function () {
  var carbsButton = document.createElement('button')
  carbsButton.id = "button"
  carbsButton.innerText = "CARBS"
  carbsButton.onclick = function () {
     console.log("carbs clicked") 
    }
  return carbsButton
},

createFatsJourneyButton: function () {
  var fatsButton = document.createElement('button')
  fatsButton.id = "button"
  fatsButton.innerText = "FATS"
  fatsButton.onclick = function () {
   console.log("fats clicked") 
  }
  return fatsButton
},

createTextBox: function() {
  var textBox = document.createElement('p')
  textBox.id = 'pTag'
  textBox.innerText = "Fuckbags"
  return textBox

},

// Event Listener methods
setEventListeners: function() {

},


// EVENT DRIVEN ACTIONS

populateTextBoxProtein: function() {
  // var Text = "Protein is a combination of many different molecules called aminoacides, joined together to make proteins. Protein can be used in the body as a fuel source but also to build tissue in a similar way to fat."
  // this.addTextBox(Text)
},

populateTextBoxFat: function() {
  console.log("hi fat")
},

populateTextBoxCarbs: function() {
  console.log("hi carbs")
},
}

module.exports = FoodJourney;