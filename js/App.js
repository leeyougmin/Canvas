class App {
	constructor() {
    this.canvas = document.querySelector(".canvas");
    this.cRect = this.canvas.getBoundingClientRect();
		this.ctx = this.canvas.getContext("2d");
		this.pos = { 
			x : 0
			, y : 0
		};
		this.init();
	}
	init() {
		this.setCanvas();
		this.evtHandler();
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
		this.canvas.addEventListener("mousedown", this.setPos.bind(this));
		// draw evt
		this.canvas.addEventListener("mousemove", this.draw.bind(this));
	}
	// Change color
	changeColor(e) {
		document.querySelector(".color-picker-btn").dataset.color = e.target.dataset.color;
		this.setCanvas(e.target.dataset.color);
	}
	// set Position
	setPos(e) {   
    this.pos.x = Math.round(e.clientX) - this.cRect.left;
		this.pos.y = Math.round(e.clientY) - this.cRect.top;
	}
	// Canvas
	setCanvas(color) {
    this.ctx.fillStyle = color; // Set Color
    this.ctx.lineWidth = 1;
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

window.onload = () => {
	const app = new App();
}