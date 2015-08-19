$(document).ready(function(){
	$('.home').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.header-section').offset().top
				}, 1000);
	});

	$('.about').on('click', function(){
		$('html, body').animate({
    		scrollTop: $(".about-section").offset().top + 60
				}, 1000);
	});	

	$('.gallery').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.work-section').offset().top + 100
				}, 1000);
	});

	$('.contact').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.contact-section').offset().top + 60
				}, 1000);
	});
});