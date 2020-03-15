var nom = document.getElementById('inputName');
var ape = document.getElementById('inputApellido');
var email = document.getElementById('inputEmail4');
var pass = document.getElementById('inputPassword4');

function validate() {
	var ExpReg1 = /^[A-Z]?[a-z]{2,}$/;
	var ExpReg2 = /^[A-Z]?[a-z]{2,}$/;
	var ExpReg3 = /^.{2,20}\@[a-z]{2,6}\.[a-z]{2,3}$/i;
	var ExpReg4 = /^[0-9]+[a-z]{1,3}[A-Z]?$/;
	
	var rta1 = ExpReg1.test(nom.value);
	var rta2 = ExpReg2.test(ape.value);
	var rta3 = ExpReg3.test(email.value);
	var rta4 = ExpReg4.test(pass.value);

	if (rta1 == false){
		nom.setCustomValidity('Nombre invalido: el nombre debe ser de una sola palabra sin espacios ni signos ni numeros');
		return false;
	} else nom.setCustomValidity('');

	if (rta2 == false){
		ape.setCustomValidity('Apellido invalido: el apellido debe ser de una sola palabra sin espacios ni signos ni numeros');
		return false;
	} else ape.setCustomValidity('');

	if (rta3 == false){
		email.setCustomValidity('Email invalido');
		return false;
	} else email.setCustomValidity('');

	if (rta4 == false){
		pass.setCustomValidity('La contraseña debe contener solamente numeros , entre 1 y 3 letras minusculas y una letra mayuscula opcional');
		return false;
	} else pass.setCustomValidity('');
}
