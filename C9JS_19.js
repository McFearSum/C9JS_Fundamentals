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

$(function() {
	//alert("Yes JavaScript works!!!");
	$("#clickme").click(function () {
		/*
		$.getJSON('data19.json', function() {
			var items = [];
			$.each(data, function(key, val) {
				items.push('<li id="' + key + '">' + val + '</li>');
			});
			$('<ul/>', {
				'class': 'interest-list',
				html: items.join('')
			}).appendTo('body');
		}); */
		$.ajax({
			url: 'data19.json',
			dataType: 'json',
			success: function(data) {
				var items = [];
				$.each(data, function(key, val) {
					items.push('<li id="' + key + '">' + val + '</li>');
				});
				$('<ul/>', {
					'class': 'interest-list',
					html: items.join('')
				}).appendTo('body');

			},
			statusCode: {
				404: function() {
					alert('This will never work.');
				}
			}
		});	
	});
});
