var LandingPage = function() {
  this.render();
}

LandingPage.prototype = {
	render: function() {
		var main = document.createElement('main');

		var bgImg1 = this.createBGImg1();
		var flexBodyMap = this.createFlexBody('YOUR BODY AND FOOD', 'click to know more!');
		var bgImg2 = this.createImageContainer('bgimg-2');
		var flexBodyMap2 = this.createFlexBody('WHATS IN YOUR FOOD', 'click here to find out!');
		var bgImg3 = this.createImageContainer('bgimg-3');

		main.appendChild(bgImg1);
		main.appendChild(flexBodyMap);
		main.appendChild(bgImg2);
		main.appendChild(flexBodyMap2);
		main.appendChild(bgImg3);

		document.body.appendChild(main);
	},
	createFlexBody: function(title, paragraph) {
		var flexBodyMap = document.createElement('div');
		flexBodyMap.classList.add('flex-container-body-map');

		var flexHeader = document.createElement('div');
		flexHeader.classList.add('flex-box-header');
		flexHeader.innerText = title;

		var bodyP = document.createElement('p');
		bodyP.innerText = paragraph;

		flexBodyMap.appendChild(flexHeader);
		flexBodyMap.appendChild(bodyP);
		return flexBodyMap;
	},
	createBGImg1: function() {
		var bgImg1 = document.createElement('div');
		bgImg1.classList.add('bgimg-1');

		var flexMainHeader = document.createElement('div');
		flexMainHeader.classList.add('flex-container-main-header');

		var h1 = document.createElement('h1');
		h1.classList.add('top-border');
		h1.innerText = 'NUTRITIONi';

		var burger = document.createElement('i');
		burger.classList.add('burger');
		
		flexMainHeader.appendChild(h1);
		flexMainHeader.appendChild(burger);
		bgImg1.appendChild(flexMainHeader);
		return bgImg1;
	},
	createImageContainer: function(className) {
		var bgImg = document.createElement('div');
		bgImg.classList.add(className);
		return bgImg;
	}
}

module.exports = LandingPage;

