var canvas = document.getElementById("canvas");
var stage = new createjs.Stage(canvas);

var player = new createjs.Bitmap("nave.png");
player.x = player.y = 0;

stage.addChild(player);

createjs.Ticker.addEventListener("tick", function() {
	player.y = player.y + 1;
	stage.update();		
});
