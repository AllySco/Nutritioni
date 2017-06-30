

var Canvas = function () { 
	this.canvas = document.createElement("canvas")
	this.canvas.width = 500;
	this.canvas.height = 500;
	this.ctx = this.canvas.getContext("2d")

	this.image = document.createElement("img")
	this.image.addEventListener('load', this.draw.bind(this) )
	this.image.src = "images/body_pic.png"

	var container = document.querySelector("main")
	container.appendChild(this.canvas)

}

Canvas.prototype = {
	draw: function() {
		this.ctx.drawImage(this.image, 150, 20, 200, 600)
	}
};

module.exports = Canvas;