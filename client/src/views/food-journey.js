var Draggable = require('../components/draggable.js')

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

    var h3 = this.createTitle();

    var backingWrapper = this.createBackingWrapper();

    var canvasWrapper = this.createCanvasWrapper();
    var proteinJourneyButton = this.createProteinJourneyButton();
    var carbsJourneyButton = this.createCarbsJourneyButton();
    var fatsJourneyButton = this.createFatsJourneyButton();
    var textBoxTitle = this.createTextBoxTitle("TITLE")
    var textBox = this.createTextBox("");

    infoHeader.appendChild(h3)
    infoContainer.appendChild(infoHeader)
    backingWrapper.appendChild(canvasWrapper)
    infoContainer.appendChild(backingWrapper)

    textContainer.appendChild(textBoxTitle)
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

populate: function() {

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
  var h3 = document.createElement('h3');
  h3.innerText = "YOUR BODY AND FOOD";
  return h3;
},

createBackingWrapper: function() {
  var backingWrapper = document.createElement('div')
  backingWrapper.id = 'backing-wrapper'
  return backingWrapper
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
    this.populateTextBoxCarbs() 
  }.bind(this)
  return carbsButton
},

createFatsJourneyButton: function () {
  var fatsButton = document.createElement('button')
  fatsButton.id = "button"
  fatsButton.innerText = "FATS"
  fatsButton.onclick = function () {
   this.populateTextBoxFat()  
 }.bind(this)
 return fatsButton
},

createTextBoxTitle: function(text) {
  var textBoxTitle = document.createElement('p')
  textBoxTitle.id = 'text-title'
  textBoxTitle.innerText = text
  return textBoxTitle
},

createTextBox: function(text) {
  console.log("createTextBox", this)
  console.log(text)
  var textBox = document.createElement('p')
  textBox.id = 'pTag'
  textBox.innerText = text
  return textBox
},

// Event Listener methods
setEventListeners: function() {

},


// EVENT DRIVEN ACTIONS

populateTextBoxProtein: function() {
  var text = "Protein is a combination of many different molecules called aminoacids. These join together to make proteins. Protein can be used in the body as a fuel source but also to build tissue in a similar way to fat.";
  var textBoxContainer = document.getElementById('text-container')
  textBoxContainer.innerHTML = ""
  var textTitle = document.createElement('p')
  var textBox = document.createElement('pTag');
  textBox.id = 'pTag'
  textTitle.id = 'text-title'
  textBoxContainer.appendChild(textTitle)
  textBoxContainer.appendChild(textBox)
  textTitle.innerText = "INFO"
  textBox.innerText = text
  this.textBoxContainer = document.createElement('text-container')
  this.img = document.createElement('img')
  this.img.src = "../images/drumstick.png"
  this.img.width = 80;
  this.img.height = 60;
  this.img.id = 'drumstick';
  textBoxContainer.appendChild(this.img);
  var canvas = document.querySelector('#canvas-wrapper')
  new Draggable(this.img, canvas, [{ top: 50, left: 100 }]);
},

populateTextBoxCarbs: function() {
  var text = "A carbohydrate is form of sugar. Sugar or glucose is one of the simplest forms of carbohydrate. Starch, like in a potatoe or pasta is one of most complex froms of carbohydrate, made from long chains of glucose molecules"
  var textBoxContainer = document.getElementById('text-container')
  textBoxContainer.innerHTML = ""
  var textTitle = document.createElement('p')
  var textBox = document.createElement('pTag');
  textBox.id = 'pTag'
  textTitle.id = 'text-title'
  textBoxContainer.appendChild(textTitle)
  textBoxContainer.appendChild(textBox)
  textTitle.innerText = "INFO"
  textBox.innerText = text
  this.textBoxContainer = document.createElement('text-container')
  this.img = document.createElement('img')
  this.img.src = "../images/frenchfried1.png"
  this.img.width = 80;
  this.img.height = 80;
  this.img.id = 'frenchfried';
  textBoxContainer.appendChild(this.img);
  var canvas = document.querySelector('#canvas-wrapper')
  new Draggable(this.img, canvas, [{ top: 50, left: 100 }]);
},

populateTextBoxFat: function() {

  var text = "Fat is the combinatation of two types of molecules, a type of alcohol called glycerol and fatty acids. These join together to make a molecule called triacylglycerol. It is the only macronutrient that is essential to life"
  var textBoxContainer = document.getElementById('text-container')
  textBoxContainer.innerHTML = ""
  var textTitle = document.createElement('p')
  var textBox = document.createElement('pTag');
  textBox.id = 'pTag'
  textTitle.id = 'text-title'
  textBoxContainer.appendChild(textTitle)
  textBoxContainer.appendChild(textBox)
  textTitle.innerText = "INFO"
  textBox.innerText = text
  this.textBoxContainer = document.createElement('text-container')
  this.img = document.createElement('img')
  this.img.src = "../images/cheese1.png"
  this.img.width = 80;
  this.img.height = 60;
  this.img.id = 'cheese';
  textBoxContainer.appendChild(this.img);
  var canvas = document.querySelector('#canvas-wrapper')
  new Draggable(this.img, canvas, [{ top: 50, left: 100 }]);
},

}

module.exports = FoodJourney;