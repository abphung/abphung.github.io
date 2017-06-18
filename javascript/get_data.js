window.onload = function() {
	//initialize the canvas and time
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		time = 0

	//set an event handler to listen in for refreshes
	window.addEventListener('resize', resize_canvas, false)
	resize_canvas()

	//load json and call draw
	var sleeps
	$.getJSON("https://raw.githubusercontent.com/abphung/abphung.github.io/master/assets/sleep.json", function(json) {
		sleeps = json
		draw()
	})

	// setInterval(function() {
	// 	requestAnimationFrame(draw)
	// }, 1000/60)

	function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

	function draw_sleep(sleep, width, height, radius) {
		var date = new Date(sleep['startTime'])
			start_angle = Math.PI/12*date.getHours() + Math.PI/(12*60)*date.getMinutes()
			end_angle = (start_angle + Math.PI/(12*60)*sleep['duration']/60000)%(2*Math.PI)

		console.log(start_angle, end_angle)

		context.lineWidth = 5
		context.strokeStyle = getRandomColor()

		context.beginPath()
		context.arc(width/2, height/2, radius, start_angle, end_angle)
		context.stroke()
	}
	
	function draw() {
		//get the screen width and height
		var width = canvas.width,
			height = canvas.height,
			size = Math.min(width, height)/90

		try {
			for (i = sleeps.length - 1; i > sleeps.length - 61; i -= 1) {
				for (j = 0; j < sleeps[i].length; j += 1) {
					draw_sleep(sleeps[i][j], width, height, (180 - i)*5)
				}
			}

			//update the time
			time += 1
		}
		catch(err) {
		}
	}

	function resize_canvas() {
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
		//draw()
	}
}