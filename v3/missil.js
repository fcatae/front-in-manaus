function criar_sprite(iniX, iniY, imagem) {

	var sprite = {
		img: new Image(),
		x: iniX,
		y: iniY
	};
	
	sprite.img.src = imagem;		
	
	sprite.update = function() {};
	
	sprite.draw = function(ctx) {
		ctx.drawImage(sprite.img, sprite.x, sprite.y);	
	}
	
	return sprite;	
}

function criar_tiro(x,y) {
	
	var tiro = criar_sprite(x,y, "bomb.png");
	
	tiro.update = function() {
		tiro.y = tiro.y - 1;
	}
	
	return tiro;
	
}

var tiros = [];

function criar_player() {
	
	var player = criar_sprite(300,400, "ship.png");
	
	window.onkeyup = function(e) {
		var tiro = criar_tiro(player.x + 32, player.y + 32);
		tiros.push(tiro);
	}
	
	window.onmousemove = function(e) {
		player.x = e.clientX - 50;
		player.y = e.clientY - 50;
	}
	
	return player;
	
}

var player = criar_player();