//---------------------------Contact Us----------------------------------------------------
var formFields = [
	{
		label:'Name',
		input: '<input type="text" name="Name" id="Name" />'
	}, {
		label: 'City',
		input: '<input type="text" name="City" id="City" />'
	}, {
		label: 'Email',
		input: '<input type="email" name="_replyto" id="Email" />'
	}, {
		label: 'Message',
		input: '<textarea name="Message" rows="10" cols="10" id="Message"></textarea>'
	}];


function displayContactSection() {
	$('.contact-details > .contact-person').prepend('<h2 class="cursive-font">Contact Details</h2>');
	$('.contact-details > .contact-person').append('<p><strong>Person of Contact:</strong> Karlo Magno</p><p><strong>Phone Number:</strong> (203) 206-2706</p><p><strong>Email:</strong> emperadoresct@gmail.com</p>');
	$('.short').append('<h3>From Waterbury, Connecticut</h3><h3>To all of New England!</h3><h3>Music for all occasions.</h3>');
	$('.contact-title').append('<h1>Contact Us!</h1>');
	$('.form').append('<form method="post" action="https://formspree.io/emperadoresct@gmail.com"></form>');
	for (var i=0; i < formFields.length; i++) {
		var field = formFields[i];
		$('.form > form').append('<label for="'+ field.label +'">'+ field.label +':</label>');
		$('.form > form').append(field.input);
	}
	$('.form > form').append('<input type="hidden" name="_subject" value="New request for a gig!" />');
	$('.form > form').append('<input type="submit" name="submit" value="Submit" class="submit-button" />');
	$('.form > form').append('<input type="text" name="_gotcha" style="display:none" />');
}

$(document).ready(function() {
	displayContactSection();

});