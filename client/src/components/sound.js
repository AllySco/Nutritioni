var Sound = function() {
	this.sampleBuffer = null;
	// Fix up prefixing
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	this.context = new AudioContext();
	this.loadSound();
}

Sound.prototype = {

	loadSound: function() {
		var request = new XMLHttpRequest();
		request.open('GET', './sound.wav', true);
		request.responseType = 'arraybuffer';

		  // Decode asynchronously
	  request.onload = function() {
	  	context.decodeAudioData(request.response, function(buffer) {
	  		this.sampleBuffer = buffer;
	  	}, onError);
	  }
	  request.send();
	},

	playSound: function() {

	}

}

module.exports = Sound;