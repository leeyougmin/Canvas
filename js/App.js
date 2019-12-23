class App {
	constructor() {
		this.canvas = document.querySelector(".canvas");
		this.ctx = this.canvas.getContext("2d");
		this.pos = { 
			x : 0
			, y : 0
		};
		this.init();
	}
	init() {
		this.evtHandler();
		this.setCanvas();
	}
	evtHandler() {
		// show Color picker
		document.querySelector(".color-picker-btn").addEventListener("click", (e) => {
			document.querySelector(".color-picker").style.display = "flex";
		});
		// hide Color picker
		document.querySelector(".picker-wrap").addEventListener("mouseleave", (e) => {
			document.querySelector(".color-picker").style.display = "none";
		});
		// Change Color evt
		document.querySelectorAll(".color-picker > button").forEach((v) => {
				v.addEventListener("click", this.changeColor.bind(this));  
		});
		// set postion
		document.querySelector(".canvas").addEventListener("mousedown", this.setPos.bind(this));
		// draw evt
		document.querySelector(".canvas").addEventListener("mousemove", this.draw.bind(this));
	}
	// Change color
	changeColor(e) {
		document.querySelector(".color-picker-btn").dataset.color = e.target.dataset.color;
		this.setCanvas(e.target.dataset.color);
	}
	// set Position
	setPos(e) {
		this.pos.x = e.pageX - this.canvas.offsetLeft;
		this.pos.y = e.pageY - this.canvas.offsetTop;
	}
	// Canvas
	setCanvas(color) {
		this.ctx.fillStyle = color; // Set Color
		this.ctx.lineCap = "round";
	}
	// Draw
	draw(e) {
		if (e.buttons !== 1) return;
		this.ctx.beginPath();
		this.ctx.moveTo(this.pos.x, this.pos.y);
		this.setPos(e)
		this.ctx.lineTo(this.pos.x, this.pos.y);
		this.ctx.stroke();
	}
}

window.onload = (e) => {
	const app = new App();
}