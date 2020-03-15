$(document).ready(function() {

	$("#boton").click(function() {
		var valor = $("input[name='align']:checked").val();
		var lista = $("#lista");
		var msjerror = $("span");

		if(valor != undefined){
			if(valor == "left"){
				lista.css({textAlign: "left"});
			} else if (valor == "center"){
				lista.css("text-align", "center");
			} else if (valor == "right"){
				lista.css("text-align","right");
			}
			msjerror.hide();
		} else msjerror.show();
	});

	});
	$('#letra').change(function() {
		var tam = $(this).val();
		var texto = $('#fuente');
		
		if(tam == "p"){

			texto.animate({fontSize: '.75em'},"slow");
		} 
		if(tam == "n"){

			texto.animate({fontSize: '1em'},"slow");
		}
		if(tam == "g"){

			texto.animate({fontSize: '1.25em'},"slow");
		}

});


$('#pass').keypress(function() {
	console.log('mostrar');
	$('#conpass').fadeIn('slow');
});

$('#pass').focusout(function() {
	if($(this).val() == ""){
	$('#conpass').fadeOut('slow');
	}
});

function limpiar(){
	var comm = document.getElementById('area');
	comm.value = "";
	 // $('#area').val('');
}

$('input[name="estado"]').click(function() {

	if($('input[name="estado"]:checked').val() == "otro"){
		$('#comentarios').fadeIn('slow');
	}	else  {
		$('#comentarios').fadeOut('slow');
		limpiar();
		}
});


function estilo() {
	var desplazamiento = window.pageYOffset;
	
	if (desplazamiento >= 50){
		$('body').css({backgroundColor: '#D6F2EC'})	
		$('.container').removeClass('border-dark');
		$('.container').addClass('border-primary');
		$('h2').addClass('text-primary');
		$('#boton').removeClass('btn-success');
		$('#boton').addClass('btn-primary');
	}
	else {
		$('body').css({backgroundColor: '#F4F3D8'})	
		$('.container').removeClass('border-primary');
		$('.container').addClass('border-dark');
		$('h2').removeClass('text-primary');
		$('#boton').removeClass('btn-primary');
		$('#boton').addClass('btn-success');
	}

}

$(window).scroll(function() {
	// console.log(window.pageYOffset);
	estilo();
});