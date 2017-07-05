
var RecipeAnalyser = require('./recipe-analyser2');
var FoodJourney = require('./food-journey');
var StoreLocator = require('./store-locator');


var LandingPage = function() { 
	this.render();
	this.addNavigationLinks();

}

LandingPage.prototype = {
	render: function() {
		var main = document.createElement('main');
		main.id = 'landing-page';


		var jumbotron = this.createJumbotron();

		var bodyAndFood = this.createPageInfo('body-and-food', 'YOUR BODY AND FOOD', 'Click to know more!');
		var bodyBackground = this.createBackground('body-background');

		var recipeAnalyser = this.createPageInfo('recipe-analyser', 'WHAT\'S IN YOUR FOOD', 'Click here to find out!');
		var analyserBackground = this.createBackground('analyser-background');

		var storeLocator = this.createPageInfo('store-locator', 'ORGANIC FOOD STORE LOCATOR', 'Find great food near you!');	
		var storeBackground = this.createBackground('store-background');

		main.appendChild(jumbotron);
		main.appendChild(bodyAndFood);
		main.appendChild(bodyBackground);
		main.appendChild(recipeAnalyser);
		main.appendChild(analyserBackground);
		main.appendChild(storeLocator);
		main.appendChild(storeBackground);

		document.body.appendChild(main);
	},

	createJumbotron: function() {
		var jumbotron = document.createElement('div');
		jumbotron.id = 'jumbotron';
		jumbotron.classList.add('background-image');

		var jumbotronHeader = this.createJumbotronHeader();

		jumbotron.appendChild(jumbotronHeader);

		return jumbotron;
	},

	createJumbotronHeader: function() {
		var jumbotronHeader = document.createElement('div');
		jumbotronHeader.id = 'jumbotron-header';

		var h1 = document.createElement('h1');
		h1.innerText = 'NUTRITIONi';

		var burgerIcon = document.createElement('i');
		burgerIcon.id = 'burger';

		jumbotronHeader.appendChild(h1);
		jumbotronHeader.appendChild(burgerIcon);

		return jumbotronHeader;
	},

	createPageInfo: function(id, h2Text, pText) {
		var container = document.createElement('div');
		container.id = id;
		container.classList.add('page-info');

		var descriptionSnippet = this.createDescriptionSnippet(h2Text, pText);

		container.appendChild(descriptionSnippet);

		return container;
	},

	createDescriptionSnippet: function(h2Text, pText) {
		var descriptionSnippet = document.createElement('div');
		descriptionSnippet.classList.add('description-snippet');

		var h1 = document.createElement('h1');
		h1.innerText = h2Text;

		var p = document.createElement('p');
		p.innerText = pText;

		descriptionSnippet.appendChild(h1);
		descriptionSnippet.appendChild(p);

		return descriptionSnippet;
	},

	createBackground: function(id) {
		var bodyBackground = document.createElement('div');
		bodyBackground.id = 'body-background';
		bodyBackground.classList.add('background-image');

		return bodyBackground;
	},

	addNavigationLinks: function() {
		var foodJourneyLink = document.querySelector('#body-and-food .description-snippet');
		var recipeAnalyserLink = document.querySelector('#recipe-analyser .description-snippet');
		var storeLocatorLink = document.querySelector('#store-locator .description-snippet');

		foodJourneyLink.addEventListener('click', this.navigateToFoodJourney);
		recipeAnalyserLink.addEventListener('click', this.navigateToRecipeAnalyser);
		storeLocatorLink.addEventListener('click', this.navigateToStoreLocator);
	},

	navigateToStoreLocator: function() {
		document.querySelector('main').remove();
		new StoreLocator();
	},

	navigateToFoodJourney: function() {
		document.querySelector('main').remove();
		new FoodJourney();
	},

	navigateToRecipeAnalyser: function() {
		document.querySelector('main').remove();
		new RecipeAnalyser();
	}
}

module.exports = LandingPage;

