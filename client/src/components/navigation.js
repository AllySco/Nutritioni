var RecipeAnalyser = require('../views/recipe-analyser');
var LandingPage = require('../views/landing-page');
var FoodJourney = require('../views/food-journey');
var StoreLocator = require('../views/store-locator');

var Navigation = function() {
	// state holders
	this.currentPage = null;

	// we will watch these for events
	this.container = null;
	this.banner = null;
	this.recipeAnalyserLink = null;
	this.foodJourneyLink = null;
	this.storeLocatorLink = null;

	// UI
	this.render();
	this.setEventListeners();
}

Navigation.prototype = {

	render: function() {
		this.container = document.createElement('header');

		this.banner = this.createBanner();

		var nav = this.createNavList();
		
		this.container.appendChild(this.banner);
		this.container.appendChild(nav);

		document.body.appendChild(this.container);
	},

	createBanner: function() {
		var banner = document.createElement('h1');
		banner.id = ('banner');
		banner.innerHTML = 'NUTRITIONi';
		
		return banner;
	},

	createNavList: function() {
		var nav = document.createElement('nav');
		var ul = document.createElement('ul');

		this.recipeAnalyserLink = this.createNavItem('Recipe Analyser');
		this.foodJourneyLink = this.createNavItem('Food Journey');
		this.storeLocatorLink = this.createNavItem('Store Locator');
		
		
		ul.appendChild(this.recipeAnalyserLink);
		ul.appendChild(this.foodJourneyLink);
		ul.appendChild(this.storeLocatorLink);
		nav.appendChild(ul);

		return nav;
	},

	createNavItem: function(name) {
		var li = document.createElement('li');
		li.innerHTML = name;

		return li;
	},



	// EVENT HANDLERS
	setEventListeners: function() {
		this.banner.addEventListener('click', this.navigateToLandingPage);
		this.recipeAnalyserLink.addEventListener('click', this.navigateToRecipeAnalyser);
		this.foodJourneyLink.addEventListener('click', this.navigateToFoodJourney);
		this.storeLocatorLink.addEventListener('click', this.navigateToStoreLocator);
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