$(document).ready(function(){

	gallery(projects);	

});


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

var gallery = function(project) {

	var projectHtml = $('.viewable-gallery').clone();

	$('.gallery-row').append(projectHtml);

	var img = projectHtml.find('.gallery-template img');
	img.attr('src', project[0].img)
	
	$('.gallery-row').append(img);

}