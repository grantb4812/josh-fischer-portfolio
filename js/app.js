$(document).ready(function(){

	$('#myCarousel').carousel('pause');
	//appendProject(projects);


});





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
			console.log(i)
		
	})

	
}


