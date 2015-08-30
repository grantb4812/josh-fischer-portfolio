$(document).ready(function(){
	
	height = $(window).height();

	$('.header-section, .about-section, .work-section, .contact-section').css("height", height);

	$('.home').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.header-section').offset().top
				}, 1000);
	});

	$('.about').on('click', function(){
		$('html, body').animate({
    		scrollTop: $(".about-section").offset().top 
				}, 1000);
	});	

	$('.gallery').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.work-section').offset().top 
				}, 1000);
	});

	$('.contact').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.contact-section').offset().top 
				}, 1000);
	});

	$('.about-drop-button').on('click', function(){
		$('.about-section').animate(
			{
				height: '25em'
			}, 1000);
		$('.about-slide-out').slideDown('slow');

	});




});