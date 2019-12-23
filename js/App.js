class App {
	constructor() {
		this.init();
	}
	init() {
		this.evtHandler();
		this.setCanvas();
	}
	evtHandler() {
		// Show Color picker wrap evt
		document.querySelector(".color-picker-btn").addEventListener("click", (e) => {
				document.querySelector(".color-picker").style.display = "flex";
		});
		document.querySelector(".picker-wrap").addEventListener("mouseleave", (e) => {
				document.querySelector(".color-picker").style.display = "none";
		});

		// Change Color evt
		document.querySelectorAll(".color-picker > button").forEach((v) => {
				v.addEventListener("click", this.changeColor.bind(this));
		});

		document.querySelector(".canvas").addEventListener("mousemove", this.draw.bind(this));
	}
			// Change color
	changeColor(e) {
		document.querySelector(".color-picker-btn").value = e.target.value;
		this.setCanvas(e.target.value);
	}
			// Canvas
	setCanvas(color) {
		const canvas = document.querySelector(".canvas");
		const ctx = canvas.getContext("2d");

		ctx.fillStyle = color; // Set Color
		console.log(ctx.fillStyle);

	}
			// 
	setPostion() {

	}
			// Draw
	draw(e) {
		if (e.buttons !== 1) return;
	}
}

window.onload = (e) => {
	const app = new App();
}