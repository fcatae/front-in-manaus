var nave = document.getElementById('nave');

nave.style.position = 'absolute';
nave.style.left = '100px';
nave.style.top = '100px';

window.onmousemove = function(e) {
	
	nave.style.cursor = 'none';
	nave.style.position = 'absolute';
	nave.style.left = -50 + e.clientX + 'px';
	nave.style.top = -50 + e.clientY + 'px';

}

window.onkeyup = function(e) {
	
	var key = e.keyCode;
	
	if( key === 32 ) {
		var img = new Image();
		img.src = "nave.png";
		
		img.style.position = 'absolute';
		img.style.left = nave.style.left;
		img.style.top = nave.style.top;
		
		document.body.appendChild(img);
	}
}