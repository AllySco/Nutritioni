var RecipeForm = require('./recipe-form');
var LandingPage = require('./landing-page');
var FoodJourney = require('./food-journey');
var StoreLocator = require('./store-locator');

var Navigation = function() {
	this.render();
}

Navigation.prototype = {
	render: function() {
		var container = document.createElement('header');
		var nav = this.createNavList();
		var banner = document.createElement('h1');
		banner.innerHTML = 'NUTRITIONi';
		banner.addEventListener('click', function() {
			document.querySelector('main').remove();
			new LandingPage();
		});
		container.appendChild(banner);
		container.appendChild(nav);
		document.body.appendChild(container);
	},
	createNavList: function() {
		var nav = document.createElement('nav');
		var ul = document.createElement('ul');
		var recipeAnalyserLink = this.createNavItem('Recipe Analyser');
		recipeAnalyserLink.addEventListener('click', function() {
			document.querySelector('main').remove();
			new RecipeForm();
		});
		var foodStoriesLink = this.createNavItem('Food Journey');
		foodStoriesLink.addEventListener('click', function() {
			document.querySelector('main').remove();
			new FoodJourney();
		});
		var storeLocatorLink = this.createNavItem('Store Locator');
		storeLocatorLink.addEventListener('click', function() {
			document.querySelector('main').remove();
			new StoreLocator();
		});

		
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
	}
}

module.exports = Navigation;