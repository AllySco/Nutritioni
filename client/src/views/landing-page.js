var LandingPage = function() {
	var h1 = document.createElement('h1')
	h1.innerHTML = "THIS IS THE LANDING PAGE";
	var main = document.createElement('main');
	main.appendChild(h1);
	document.body.appendChild(main);
}

LandingPage.prototype = {

}

module.exports = LandingPage;