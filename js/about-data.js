//---------------------------About----------------------------------------------------
function displayAboutSection() {
	$('.group-pic').append('<img class="img-responsive" src="mockup_images/group_image.jpg" alt="mariachi group photo">');
	$('.summary').append('<h2>ABOUT</h2><p>3ra generacion del mariachi</p><p>Sirviendo a la comunidad de CT desde el año 2000</p><p>Autentico, tradicional show de mariachi para todo tipo de eventos</p><p>Trabajo garantizado</p>');
}

$(document).ready(function() {
	displayAboutSection();

});