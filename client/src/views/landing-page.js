var LandingPage = function() { 
	this.render();
}

LandingPage.prototype = {
	render: function() {
		var main = document.createElement('main');

		var jumbotron = this.createJumbotron();

		var flexBodyMap = document.createElement('div');
		flexBodyMap.classList.add('flex-container-body-map');
		var flexHeader = document.createElement('div');
		flexHeader.classList.add('flex-box-header');
		flexHeader.innerText = 'YOUR BODY AND FOOD';
		var bodyP = document.createElement('p');
		bodyP.innerText = 'click to know more!';
		flexBodyMap.appendChild(flexHeader);
		flexBodyMap.appendChild(bodyP);
		var background2 = document.createElement('div');
		background2.classList.add('background-2');

		var flexBodyMap2 = document.createElement('div');
		flexBodyMap2.classList.add('flex-container-body-map');
		var flexHeader2 = document.createElement('div');
		flexHeader2.classList.add('flex-box-header');
		flexHeader2.innerText = 'WHATS IN YOUR FOOD';
		var bodyP2 = document.createElement('p');
		bodyP2.innerText = 'click here to find out!';
		flexBodyMap2.appendChild(flexHeader2);
		flexBodyMap2.appendChild(bodyP2);

		var background3 = document.createElement('div');
		background3.classList.add('background-3');

		main.appendChild(jumbotron);
		main.appendChild(flexBodyMap);
		main.appendChild(background2);
		main.appendChild(flexBodyMap2);
		main.appendChild(background3);

		document.body.appendChild(main);
	},

	createJumbotron: function() {
		var jumbotron = document.createElement('div');
		jumbotron.classList.add('background-1');
		var flexMainHeader = document.createElement('div');
		flexMainHeader.classList.add('flex-container-main-header');
		var h1 = document.createElement('h1');
		h1.classList.add('top-border');
		h1.innerText = 'NUTRITIONi';
		var burger = document.createElement('i');
		burger.classList.add('burger');
		flexMainHeader.appendChild(h1);
		flexMainHeader.appendChild(burger);
		jumbotron.appendChild(flexMainHeader);
		return jumbotron;
	}
}

module.exports = LandingPage;

