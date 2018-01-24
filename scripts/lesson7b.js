/*

	Learn to Code JavaScript: Lesson 7
	jQuery Part 1

	Let's look at some basic jQuery events!

*/

// the document ready function is called on load. This is where we initialize our events
$(document).ready(function() {

	// let's set some click events for our 3 buttons to change our jumbotron message.
	$("#button_message1").click(function() {
		$("#main_message").html("Good day, I hope you are enjoying working with JavaScript!");
	});

	$("#button_message2").click(function() {
		$("#main_message").html("You are going to be a front-end master with jQuery!");
	});

	$("#button_message3").click(function() {
		$("#main_message").html("Let's get started!");
	});

	// setting our custom message involves extracting the value from a text field
	$("#button_custom_message").click(function() {

		// get the custom message and update the jumbotron message
		var customMessage = $("#custom_message").val();
		$("#main_message").html(customMessage);
	});

	// some simple show and hide buttons can easily remove some unneeded clutter from the
	// screen, while still allowing the user to access it. Note how we are also updating
	// which particular button is showing

	$("#button_custom_message_hide").click(function() {
		$("#custom_section").hide();
		$("#button_custom_message_hide").hide();
		$("#button_custom_message_show").show();
	});

	$("#button_custom_message_show").click(function() {
		$("#custom_section").show();
		$("#button_custom_message_show").hide();
		$("#button_custom_message_hide").show();
	});
});