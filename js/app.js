$(document).ready(function(){

	
	console.log("This is working!");

	$('.gallery-row').click(slideLeft);
	$('.works-bar').click(slideRight);

});
var width = $(window).width()

var slideRight = function() {
	width = width * .25;
	$('.gallery-row div').animate({
		right: width
	})
}

var slideLeft = function() {
	 	width = width * .25;
	$('.gallery-row div').animate({
		left: width 
	})

	
}

	//appendGallery(assembleGallery(projects));



/*
var projects = [
	{
		img: "http://placehold.it/250x250",
		name: "Cool App Title 1"
	},
	{
		img: "http://placehold.it/250x250",
		name: "Cool App Title"
	},
	{
		img: "http://placehold.it/250x250",
		name: "Cool App Title"
	},
	{
		img: "http://placehold.it/250x250",
		name: "Cool App Title"
	}
]

var assembleGallery = function(project) {

	var projectHtml = $('.viewable-gallery').clone();


	var imgElement = projectHtml.find('.viewable-gallery img');
	imgElement.attr('img', projects[0].img)

	var titleElement = projectHtml.find('.viewable-gallery p');
	titleElement.text(projects[0].name);

	return project;
}

var appendGallery = function (assembledGallery) {

	$('.gallery-row').append(assembledGallery);
}*/