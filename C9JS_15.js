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

This JavaScript is intended to be used with the accompanying C9JS_15.html, and style15.css files.

*/

$(function() {   // un-comment the snipblet you want to test:
	// Test that this javascript file is working:
	// alert("It works");

	// Select by "id" and add the highlight class:
	// $('#first').addClass('highlight');

	// Select by element / tag  (here by paragraph):
	// $('p').addClass('highlight');

	// Select by class:
	// $('.chosen').addClass('highlight');

	// Select combinations:
	// $('#first, .chosen').addClass('highlight');

	// Contains:
	// $('li:contains("Three")').addClass('highlight');

	// Not Contains: (doesn't work yet)
	// $('li:contains(!"Three")').addClass('highlight');

	// next, previous
	// $('li:contains("Three")').next().addClass('highlight');
	// $('li:contains("Three")').prev().addClass('highlight');

	// Siblings, parent
	// $('li:contains("Three")').siblings().addClass('highlight');
	// $('li:contains("Three")').parent().addClass('highlight');

	// Children (This is not zero based like an array.)
	// $('li:nth-child(1)').addClass('highlight');

	// attributes
	// $('p[name="mySecondPara"]').addClass('highlight');
	// The not attribute ('!'):
	// $('p[name!="mySecondPara"]').addClass('highlight');

	// The not method:
	// $('p').not('[name="mySecondPara"]').addClass('highlight');
	// $('p').not('[name]').addClass('highlight');

	// Select the header as in h1
	// $(':header').addClass('highlight');

	// Select all paragraphs that are empty:
	// $('p:empty').text('You seemed lonely so I gave you some text.');

	// Documentation:  http://api.jquery.com

	// Even and odds:
	// $('li:even').addClass('highlight');
	// $('li:odd').addClass('highlight');

});

