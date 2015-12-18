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

Why jQuery?
DOM
Ajax
Events
Effects

*/
// first test to make sure jQuery is working!!!
// you can access the jquery with either specifying jquery() or by using $().
// Asl you can shorten $(document).ready(function() {} ); 
// to just $(function() {} );
$(function(){
	// start up code goes here
	// alert("this works!")  // This line proves jQuery is working or not.
	//$("#title").text("Yay, I can now get at the H1 tag immediatedly!");

	//$("#first").html("<h2>Great quotes!</h2>");

	/* append and prepend work INSIDE the given selection
	before, after, insertBefore, insertAfter work OUTSIDE
	the given selection. */ /*

	$("#first").prepend("<h2>Great quotes</h2>");
	$("#first").append("<h3>... for you to ponder ...</h3>");
	*/

	// $("#myAnchor").attr("href", "http://channel9.msdn.com");

	$("#title").addClass("standout");

});

/*
$('.importText');
$('#myFirstParagraph');
$('p');
$('p').fadeOut();


jQuery('<div id="badge"><img src="badge.gif" alt"Batch earned for achievement" /></div>');
JQuery.mhCustomMethod = function () {alert('hi');};
$.listBox = {
	show: function () {},
	hide: function () {},
	position: function() {},
	initiate: function () {}
};

$(function(){
	// start up code goes here
	alert("this works 1!")  // This line proves jQuery is working or not.
});

$(function(){
	// start up code goes here
	alert("this works 2!")  // This line proves jQuery is working or not.
});

$(function(){
	// start up code goes here
	alert("this works 3!")  // This line proves jQuery is working or not.
});

*/
// jQuery('p').fadeOut(500).fadeIn(500);



