var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var img = new Image();
img.src = "star.png";

img.onload = function() {
	
	context.fillRect(0,0,800,640);
	
	for(var i=0; i<10000; i++) {	
		var x = 800 * Math.random();
		var y = 640 * Math.random();
		var tam = 2 * Math.random();
		
		context.drawImage(img, x, y, tam, tam);	
	}
}



