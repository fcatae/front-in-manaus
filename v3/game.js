var nave = document.querySelector('img');

nave.style.position = 'absolute';
nave.style.left = '100px';
nave.style.top = '100px';

window.onmousemove = function(e) {
	nave.style.cursor = 'none';
	nave.style.left = -100 + e.clientX + 'px';
	nave.style.top = -50 + e.clientY + 'px';
}

window.onkeyup = function(e) {
	
	var img = new Image();
	img.src = "nave.png";
	
	img.style.position = 'absolute';
	img.style.left = nave.style.left;
	img.style.top = nave.style.top;

	document.body.appendChild(img);
}