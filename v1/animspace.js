var canvas = document.querySelector('canvas');

var context = canvas.getContext('2d');

var img = new Image(); 
img.src = "star.png";

context.fillRect(0,0,800,600);

var stars = [];

img.onload = function() {

	for(var i=0; i<10000; i++) {
		var tam = Math.random();
		var x = 800 * Math.random();
		var y = 600 * Math.random();

		stars[i] = {
			x: x,
			y: y,
			tam: tam,
			draw: function() { context.drawImage(img, this.x, this.y, this.tam, this.tam); }
		}					
	}	

	//setInterval(gameLoop, 15);	
	requestAnimationFrame(gameLoop);
}

function gameLoop() {
	
	context.fillRect(0,0,800,600);

	// update
	for(var i=0; i<10000; i++) {
		
		stars[i].y = stars[i].y + 1; 
		if(stars[i].y > 600) {
			stars[i].y -= 600;
		}
		// draw
		stars[i].draw();
	}
	
	requestAnimationFrame(gameLoop);
}

