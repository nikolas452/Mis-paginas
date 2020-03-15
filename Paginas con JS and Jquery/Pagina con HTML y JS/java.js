

function navbarColor() {
	var desplazamiento = window.pageYOffset;
	var nav = document.getElementById('barra');
	var enlaces = document.getElementsByClassName('nav-link');
	
	if (desplazamiento >= 470){
		nav.classList.add('bg-light');
		nav.style.transition = '1s';
		for (i in enlaces){
		enlaces[i].classList.add('text-dark');
		}
	}
	else {
		nav.classList.remove('bg-light');
		for (i in enlaces){
		enlaces[i].classList.remove('text-dark');
		}
	}

}
	


	window.addEventListener('load',function(){
		navbarColor();
	});
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		navbarColor();
});


// window.addEventListener('click',function(){console.log(e.target);})


// window.addEventListener('click',function(e){
//     console.log(e.target);})

var prog = document.getElementById('prog');
var dis = document.getElementById('dis');
var mark = document.getElementById('mark');

function displayProg(){
document.getElementById('prog').style.display = "flex";
document.getElementById('dis').style.display = "none";
document.getElementById('mark').style.display = "none";
}
function displayDis(){
document.getElementById('dis').style.display = "flex";
document.getElementById('prog').style.display = "none";
document.getElementById('mark').style.display = "none";
}
function displayMark(){
document.getElementById('mark').style.display = "flex";
document.getElementById('prog').style.display = "none";
document.getElementById('dis').style.display = "none";
}
function displayTodos(){
document.getElementById('mark').style.display = "flex";
document.getElementById('prog').style.display = "flex";
document.getElementById('dis').style.display = "flex";
}
document.getElementById('programacion').addEventListener('click',displayProg);
document.getElementById('diseño').addEventListener('click',displayDis);
document.getElementById('marketing').addEventListener('click',displayMark);
document.getElementById('todos').addEventListener('click',displayTodos);


