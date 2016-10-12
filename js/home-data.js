//---------------------------Home----------------------------------------------------
function displayWelcomeSection() {
	$('.welcome-video').prepend('<h4>Listen to us!</h4>');
	$('.welcome-video').append('<audio controls autoplay loop><source src="radio.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio>');
	$('.extra-space').append('<a href="contact.html"><h3>Book Us!</h3></a>');
	$('.upcoming-events').prepend('<h4>Social Events</h4>');
	$('.upcoming-events').append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMariachiConnecticut%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>');
}

var photos = [
			"mockup_images/img1_resized.jpg",
			"mockup_images/img2_resized.jpg",
			"mockup_images/img3_resized.jpg"
		];

$(document).ready(function() {
	displayWelcomeSection();

	$(".slideshow").backstretch(photos, {duration: 4000});
});