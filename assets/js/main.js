$(document).ready( function(){

	// cuida do abrir e fechar do menu mobile

	btn = document.querySelector(".material-btn");
	hamburguer = document.querySelector(".material-hamburguer");
	content = document.querySelector(".material-content");
	lis = document.querySelectorAll("nav li");

	btn.addEventListener('click', function() {
		this.classList.toggle('active');
		$('.material-menu').toggleClass('material-menu-full');
		$('.material-content').fadeToggle();
		$('.material-btn .material-hamburguer:before ').toggleClass('dont-display');
		hamburguer.classList.toggle('material-close');
		content.classList.toggle('active');
		Array.prototype.forEach.call(lis, function(el, i){
			el.classList.toggle('active');
		});
	});


	// cuida da mascara do telefone no campo do button "Enviar Link!"

	const $input = document.querySelector('[data-js="input"]')
	$input.addEventListener('input', handleInput, false)

	function handleInput (e) {
		e.target.value = mascaraPhone(e.target.value)
	}

	function mascaraPhone (phone) {
		if (phone.toString().length < 15) { 
			return phone.replace(/\D/g, '')
			.replace(/^(\d)/, '($1')
			.replace(/^(\(\d{2})(\d)/, '$1) $2')
			.replace(/(\d{4})(\d{1,5})/, '$1-$2')
			.replace(/(-\d{5})\d+?$/, '$1');
		} else {
			return phone.replace(/\D/g, '')
			.replace(/^(\d)/, '($1')
			.replace(/^(\(\d{2})(\d)/, '$1) $2')
			.replace(/(\d{5})(\d{1,5})/, '$1-$2')
			.replace(/(-\d{4})\d+?$/, '$1');
		}
	}


});
