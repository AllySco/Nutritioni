var RecipeAnalyser = require('../views/recipe-analyser');
var LandingPage = require('../views/landing-page');
var FoodJourney = require('../views/food-journey');
var StoreLocator = require('../views/store-locator');

var Navigation = function() {
	this.render();
}

Navigation.prototype = {
	render: function() {
		var header = document.createElement('header');
		var banner = this.createBanner();
		var nav = this.createNavList();
		
		header.appendChild(banner);
		header.appendChild(nav);
		document.body.appendChild(header);
	},
	createBanner: function() {
		var banner = document.createElement('h1');
		banner.innerHTML = 'NUTRITIONi';
		banner.addEventListener('click', navigateToLandingPage);
		return Banner;
	},
	createNavList: function() {
		var nav = document.createElement('nav');
		var ul = document.createElement('ul');

		var recipeAnalyserLink = this.createNavItem('Recipe Analyser');
		recipeAnalyserLink.addEventListener('click', navigateToRecipeAnalyser);
		var foodJourneyLink = this.createNavItem('Food Journey');
		foodJourneyLink.addEventListener('click', navigateToFoodJourney);
		var storeLocatorLink = this.createNavItem('Store Locator');
		storeLocatorLink.addEventListener('click', navigateToStoreLocator);
		
		ul.appendChild(recipeAnalyserLink);
		ul.appendChild(foodStoriesLink);
		ul.appendChild(storeLocatorLink);
		nav.appendChild(ul);
		return nav;
	},
	createNavItem: function(name) {
		var li = document.createElement('li');
		li.innerHTML = name;
		return li;
	},
	navigateToLandingPage: function() {
		document.querySelector('main').remove();
		new LandingPage();
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

module.exports = Navigation;