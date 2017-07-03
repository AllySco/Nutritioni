var LandingPage = function() {
	var main = document.createElement('main');

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
	var flexBodyMap = document.createElement('div');
	flexBodyMap.classList.add('flex-container-body-map');
	var flexHeader = document.createElement('div');
	flexHeader.classList.add('flex-box-header');
	flexHeader.innerText = 'YOUR BODY AND FOOD';
	var bodyP = document.createElement('p');
	bodyP.innerText = 'click to know more!';
	flexBodyMap.appendChild(flexHeader);
	flexBodyMap.appendChild(bodyP);
	var bgImg2 = document.createElement('div');
	bgImg2.classList.add('bgimg-2');

	var flexBodyMap2 = document.createElement('div');
	flexBodyMap2.classList.add('flex-container-body-map');
	var flexHeader2 = document.createElement('div');
	flexHeader2.classList.add('flex-box-header');
	flexHeader2.innerText = 'WHATS IN YOUR FOOD';
	var bodyP2 = document.createElement('p');
	bodyP2.innerText = 'click here to find out!';
	flexBodyMap2.appendChild(flexHeader2);
	flexBodyMap2.appendChild(bodyP2);

	var bgImg3 = document.createElement('div');
	bgImg3.classList.add('bgimg-3');

	main.appendChild(bgImg1);
	main.appendChild(flexBodyMap);
	main.appendChild(bgImg2);
	main.appendChild(flexBodyMap2);
	main.appendChild(bgImg3);

	// document.body.appendChild(bgImg1);
	// document.body.appendChild(flexBodyMap);
	// document.body.appendChild(bgImg2);
	// document.body.appendChild(flexBodyMap2);
	// document.body.appendChild(bgImg3);

	document.body.appendChild(main);
}

LandingPage.prototype = {

}

module.exports = LandingPage;

// <div class="bgimg-1">
//   <div class=flex-container-main-header>
//     <h1 class="top-border">NUTRITIONi</h1>
//     <i class="burger"></i>
//   </div>
// </div>
// <div class="flex-container-body-map">
//   <div class="flex-box-header">YOUR BODY AND FOOD</div>
//   <p>click to know more!</p>
// </div>
// <div class="bgimg-2"></div>
// <div class="flex-container-body-map">
//   <div class="flex-box-header">WHATS IN YOUR FOOD</div>
//   <p>click here to find out!</p>
// </div>
// <div class="bgimg-3">
  
// </div>