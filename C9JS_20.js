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

This JavaScript is indended to be used in conjunction with C9JS_<section>.html.

If it doesn't work check:
	1. Line: <script type="text/javascript" src="CSJS_<section>.js" ></script>

*/

// As always test to make sure JavaScript is working before doing anything else:

/*  Version one without a closure:
$(function() {
	//alert("Yes JavaScript works!!!");
	function buildACat() {
		var catName = "Mr. Tibbles";
		function catFactory() {
			/*
			Functional scoping: in JavaScript, the scope of a variable
			is defined by it's location within the source code, and nested
			functions have access to variables declared in their outer scope.
			*//*
			alert(catName);
		}
		catFactory();  // () means it executes the inner method immediatedly
	}
	$('#buildcat').click(function() {
		buildACat();
	});
});

*//*
// Version two with a closure:
$(function() {
	function buildACat() {
		var catName = "Tuffy";
		function catFactory() {
			alert(catName);
		}
		// Notice: instead of executing it, it just returns are REFERENCE!
		return catFactory();
	}
	$('#buildcat').click(function() {
		var myNewCat = buildACat();
		// buildACat() has executed. It has goine out of scope now,
		// and all its private function variables with it, right? Right?
		myNewCat();  // <-- Not so fast ... the catName variable value LIVES!
	});
});
*/
a = (function() {
	var privateFunction = function() {
		alert('hello');
	}
	return {
		publicFunction: function () {
			privateFunction();
		}
	}
})();

a.publicFunction();


