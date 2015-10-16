var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = "star.png";

var stars = [];

img.onload = function() {	
	
	for(var i=0; i<5000; i++) {	
		
		var x = 800 * Math.random();
		var y = 640 * Math.random();
		var tam = 2 * Math.random();
		
		
		var obj = {
			x: x, y: y, tam: tam
		};
		stars[i] = obj;
	}
	
	setInterval(gameLoop,30);
}

function gameLoop() {
	
	ctx.fillRect(0,0,800,640);
	
	for(var i=0; i<5000; i++) {
		
		var obj = stars[i];
		
		obj.y = obj.y + 1;
		if(obj.y > 640) {
			obj.y = 0;
		}
		ctx.drawImage(img, obj.x, obj.y, obj.tam, obj.tam );
	}
	
	for(var t=0; t<tiros.length; t++) {
		var tiro = tiros[t];
		tiro.update();
		tiro.draw(ctx);
	}
	
	player.update();
	player.draw(ctx);
	
}

// var nave = document.querySelector('img');
// 
// nave.style.position = 'absolute';
// nave.style.left = '100px';
// nave.style.top = '100px';
// 
// window.onmousemove = function(e) {
// 	nave.style.cursor = 'none';
// 	nave.style.left = -50 + e.clientX + 'px';
// 	nave.style.top = -50 + e.clientY + 'px';
// }
// 
// window.onkeyup = function(e) {
// 	criar_tiro()
// }