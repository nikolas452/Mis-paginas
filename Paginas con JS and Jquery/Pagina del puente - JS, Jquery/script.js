function CambiaNav() {
	var link = document.getElementsByClassName('nav-link');
	var desplazamiento = window.pageYOffset;
		if (desplazamiento >= 67){
			$('#navv').addClass('nav2');
			$('#web').removeClass('text-dark');
			$('#web').addClass('text-light');

			$('.nav-link').removeClass('text-dark');	
			$('.nav-link').addClass('text-light');	
		} else {
			$('#navv').removeClass('nav2');
			$('#web').addClass('text-dark');
			$('#web').removeClass('text-light');
			$('.nav-link').removeClass('text-light');	
			$('.nav-link').addClass('text-dark');
		}
}

$(window).scroll(CambiaNav);

