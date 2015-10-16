var nave = document.getElementById('nave');

window.onmousemove = function(e) {
	nave.style.position = 'absolute';
	nave.style.left = -100 + e.clientX + 'px';
	nave.style.top = -50 + e.clientY + 'px';
	nave.style.cursor = 'none';
}

window.onkeydown = function(e) {
	

	
	switch(e.keyCode) {
		case 32: 	
			var img = new Image();
			img.src = "nave.png";
			img.style.position = 'absolute';
			img.style.left = nave.style.left;
			img.style.top = nave.style.top;
			
			document.body.appendChild(img);
			break;
			
		default:
			alert(e);
	}
	
}