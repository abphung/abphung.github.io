// Obtain a reference to the canvas element using its id.
htmlCanvas = document.getElementById('c'),
// Obtain a graphics context on the canvas element for drawing.
ctx = htmlCanvas.getContext('2d');

// Start listening to resize events and draw canvas.
initialize();

function initialize() {
	// Register an event listener to call the resizeCanvas() function 
	// each time the window is resized.
	window.addEventListener('resize', resizeCanvas, false);
	// Draw canvas border for the first time.
	resizeCanvas();
}

// Display custom canvas. In this case it's a blue, 5 pixel 
// border that resizes along with the browser window.
function redraw() {
	var size = Math.min(window.innerWidth, window.innerHeight);
	var width = htmlCanvas.width;
	var height = htmlCanvas.height;
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = size;
	//ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
	ctx.beginPath();
	ctx.arc(width/2, height/2, 50,0,2*Math.PI);//(x, y, rad, start_angle, end_angle)
	ctx.stroke();

}

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
	htmlCanvas.width = window.innerWidth;
	htmlCanvas.height = window.innerHeight;
	redraw();
}