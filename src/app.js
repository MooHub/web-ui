var temperature = true;
var c,f;

window.onload = function(){
	c = document.querySelector('#tempCels');
	f = document.querySelector('#tempFahr');
	var toggle = document.querySelector('#switch-1');
	f.style.display = "none";
	toggle.addEventListener('click',showDegreesUnit);
}

function showDegreesUnit(){
	temperature = !temperature;
	if(temperature){
		f.style.display = "none";
		c.style.display = "block";
	}else{
		f.style.display = "block";
		c.style.display = "none";
	}
	console.log(temperature);
}