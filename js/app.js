$(document).ready(function(){

	
	appendProject(projects);

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


var projects = [
		{
			img: "http://placehold.it/300x300",
			p: "Project Title"
		},
		{
			img: "http://placehold.it/300x300",
			p: "Project Title"
		},
		{
			img: "http://placehold.it/300x300",
			p: "Project Title"
		},
		{
			img: "http://placehold.it/300x300",
			p: "Project Title"
		},
		{
			img: "http://placehold.it/300x300",
			p: "Project Title"
		},
		{
			img: "http://placehold.it/300x300",
			p: "Project Title"
		}
]




var createProject = function (projectObject) {

	var project = $('.viewable-template .viewable-gallery').clone();

	var pictureElement = project.find('.img-responsive');
	var paragraphElement = project.find('.project-title');

	pictureElement.attr("src", projectObject.img);
	paragraphElement.text(projectObject.p);
	
	return project;
}	

var appendProject = function (assembledProject) {

	$.each(assembledProject, function(i, item) {

			var append = createProject(item);
			$('.gallery-row').append(append);
		
		
	})

	
}


