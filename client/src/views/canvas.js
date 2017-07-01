var Canvas = function () {
	this.init();
}

Canvas.prototype = {
	init: function() {
		this.createCanvas();
		this.image = document.createElement("img");
		this.image.addEventListener('load', this.drawBodyImage.bind(this));
		this.image.src = "images/body_pic.png";
	},
	createCanvas: function() {
		var container = document.querySelector("main");
		this.canvas = document.createElement("canvas");
		this.canvas.width = 500;
		this.canvas.height = 500;
		this.ctx = this.canvas.getContext("2d");
		container.appendChild(this.canvas);
	},
	drawBodyImage: function() {
		this.ctx.drawImage(this.image, 150, 20, 200, 600);
	}
};

module.exports = Canvas;