/*

This is a javascript template file intended to be used with in 
the Channel 9 javascript Fundamentals course presented by "Bob Tabor".

Use:
1.  Open this file in Sublime and save it as C9JS_<section>.js 
    -  replace <section> with the section number of the course.
2. Start writing some javascript code as directoed by Bob.
3. Have fun or just don't do it.

Author:  Paul Talik
Date:    2015-12-18

This JavaScript is indended to be used in conjunction with C9JS_16.html.

If it doesn't work check:
	1. Line: <script type="text/javascript" src="CSJS_16.js" ></script>

*/

$(function() {
	// First test that JavaScript is working:
	// alert('It Works!');
	$('#success').hide();
	$('#startover').addClass('hoverOut');
	var score = 0;
	$('#bobhead').click(function() {
		// alert("Got here!")
		score++;
		$('#score').text(score);
		$('#success').show('slow').fadeOut(1500);
	});

	$('#startover').hover(function() {
		score = 0;
		$('#score').text(score);
		$('#startover').addClass('hoverIn').removeClass('hoverOut');
	}, function() {
		$('#startover').removeClass('hoverIn').addClass('hoverOut');


	});
});

