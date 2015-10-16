var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var img = new Image();
img.src = "star.png";

img.onload = function() {
	
	context.fillRect(0,0,800,640);
	
	var stars = [];
	
	for(var i=0; i<5000; i++) {	
		
		var x = 800 * Math.random();
		var y = 640 * Math.random();
		var tam = 2 * Math.random();
		
		var obj = {
			x: x,
			y: y,
			tam: tam
		};
		
		stars[i] = obj;
	}	
		
	setInterval(gameLoop, 13.3);
	
	function gameLoop() {
	
		context.fillRect(0,0,800,640);
		
		for(var i=0; i<5000; i++) {	
			// update
			stars[i].y = (stars[i].y + 1) % 640;
			
			// draw
			context.drawImage(img, stars[i].x, stars[i].y, stars[i].tam, stars[i].tam);
		}
	}
	

}








var nave = document.getElementById('nave');

nave.style.position = 'absolute';
nave.style.left = '100px';
nave.style.top = '100px';

window.onmousemove = function(e) {
	nave.style.cursor = 'none';
	nave.style.position = 'absolute';
	nave.style.left = -100 + e.clientX + 'px';
	nave.style.top = -50 + e.clientY + 'px';
}
