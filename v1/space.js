var canvas = document.querySelector('canvas');

var context = canvas.getContext('2d');

var img = new Image(); 
img.src = "star.png";

context.fillRect(0,0,800,600);

img.onload = function() {

	for(var i=0; i<10000; i++) {	
		var tam = Math.random();
		var x = 800 * Math.random();
		var y = 600 * Math.random();
		context.drawImage(img, x, y, tam, tam);
	}	
	
}
