window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		end_ang = 0

	window.addEventListener('resize', resizeCanvas, false)
	resizeCanvas()

	var sleep
	$.getJSON("assets/sleep.json", function(json) {
		sleep = json
	})
	console.log(sleep)
	
	setInterval(function() {
		requestAnimationFrame(draw)
	}, 1000/60)
	
	function draw() {
		var width = canvas.width
		var height = canvas.height
		context.clearRect(0,0,600,600)
		context.beginPath()
		context.arc(100, 100, 20, 0, end_ang)
		context.stroke()
		end_ang += .1
	}

	function resizeCanvas() {
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
		draw()
	}
}