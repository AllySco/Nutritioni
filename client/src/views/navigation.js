var Navigation = function() {
	this.render();
}

Navigation.prototype = {
	render: function() {
		var container = document.createElement('header');
		var nav = this.createNavList();
		var banner = document.createElement('h1');
		banner.innerHTML = 'NUTRITIONi';
		container.appendChild(banner);
		container.appendChild(nav);
		document.body.appendChild(container);
	},
	createNavList: function() {
		var nav = document.createElement('nav');
		var ul = document.createElement('ul');
		var recipeAnalyserLink = this.createNavItem('Recipe Analyser');
		
		ul.appendChild(recipeAnalyserLink);
		nav.appendChild(ul);
		return nav
	},
	createNavItem: function(name) {
		var li = document.createElement('li');
		li.innerHTML = name;
		return li;
	}
}

module.exports = Navigation;