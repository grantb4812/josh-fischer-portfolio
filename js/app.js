$(document).ready(function(){

	
	appendProject(projects);

	$('.work').on('click', function(){
		$('.container').animate({
			scrolltop: $(".latest-works").offset().top
		}, 1000);		
	});

	

	$('#myCarousel').carousel();

});





var projects = [
		{
			img: "http://placehold.it/600x300",
			p: "Project Title 2"
		},
		{
			img: "http://placehold.it/600x300",
			p: "Project Title 3"
		},
		{
			img: "http://placehold.it/600x300",
			p: "Project Title 4"
		},
		{
			img: "http://placehold.it/600x300",
			p: "Project Title 5"
		}
]


var createProject = function (projectObject) {

	var project = $('.viewable-template .item').clone();

	var pictureElement = project.find('.img-responsive');
	var paragraphElement = project.find('.project-title');

	pictureElement.attr("src", projectObject.img);
	paragraphElement.text(projectObject.p);
	
	return project;
}	

var createIndicator = function(n) {
	
	 var indicatorElement = $('.viewable-template .indicator').clone();
	 indicatorElement.attr('data-slide-to', n + 1);

	 return indicatorElement;
}

var appendProject = function (assembledProject) {

	$.each(assembledProject, function(i, item) {

				
			
				var append = createProject(item);
				$('.carousel-inner').append(append);
				console.log(i)	

				var galleryIndicator = createIndicator(i);
				$('.carousel-indicators').append(galleryIndicator);	
		
	})

	
}


