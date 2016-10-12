//---------------------------Members----------------------------------------------------
var members = [{
	name: "Laura Magno",
	img: "mockup_images/laura.jpg"
},{
	name: "Karlo Magno",
	img: "mockup_images/karlo.jpg"
}, {
	name: "Agustin Cortes",
	img: "mockup_images/agustin.jpg"
}, {
	name: "Jaime Chiluisa",
	img: "mockup_images/jaime.jpg"
}, {
	name: "Victor Muratalla",
	img: "mockup_images/victor.jpg"
}, {
	name: "Alejandro Magno",
	img: "mockup_images/alejandro.jpg"
}];


function displayMembersSection() {
	$('.members').prepend('<h2>Members</h2>');
	$('.members').append('<ul class="col-md-12 polaroids"></ul>');
	for (var i = 0; i < members.length; i++) {
		var person = members[i];
		$('.members > ul').append('<li class="col-md-3"><img class="img-responsive" src="'+ person.img +'" alt="'+ person.name +'"><p>'+ person.name +'</p></li>');
	}
}

$(document).ready(function() {
	displayMembersSection();

});