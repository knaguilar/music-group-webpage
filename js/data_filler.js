var socialButtons = [{
	name: "gmail",
	icon: "fa fa-envelope",
	url: "mailto:emperadoresct@gmail.com"
}, {
	name: "facebook",
	icon: "fa fa-facebook-official",
	url: "https://www.facebook.com/MariachiConnecticut/"
}];

function displaySocialButtons() {
	for (var i = 0; i < socialButtons.length; i++) {
		var social = socialButtons[i];
		$('#header-social > ul').append('<li class="'+ social.name+'"><a href="'+ social.url +'"><i aria-hidden="true" class="'+ social.icon +'"></i></a></li>');
		$('#footer-social > ul').append('<li class="'+ social.name+'"><a href="'+ social.url +'"><i aria-hidden="true" class="'+ social.icon +'"></i></a></li>');
	}
}

var navigation = [{
	header: "Home",
	link: "index.html"
},{
	header: "About",
	link: "about.html"
}, {
	header: "Members",
	link: "members.html"
}, {
	header: "Contact Us",
	link: "contact.html"
}];

function displayNavigation() {
	for (var i = 0; i < navigation.length; i++) {
		var nav = navigation[i];
		$('.nav-menu > ul').append('<li><a href="'+ nav.link +'">'+ nav.header +'</a></li>');
		$('.footer-menu > nav > ul').append('<li><a href="'+ nav.link +'">'+ nav.header +'</a></li>');
	}
}

function addGreca() {
	$('header > .greca').append('<picture><source class="img-responsive" srcset="mockup_images/greca-header-sm.png" media="(max-width: 476px)" ><source class="img-responsive" srcset="mockup_images/greca-header-lg.png" ><img class="img-responsive" src="mockup_images/greca-header-lg.png" alt="greca decoration" ></picture>');
}

$(document).ready(function() {
	//code goes here
	displaySocialButtons();
	displayNavigation();
	addGreca();
});