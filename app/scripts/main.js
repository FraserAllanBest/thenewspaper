"use strict"

$(document).ready(function(){

	$(".tag").on("click", function(){
		$(this).toggleClass("highlight");
	});

	$(".btn").on("click", function(){
		$(this).toggleClass("highlight");
	});


	console.log("HELLO WORLD");


	$("div.tag:contains('opinion')").addClass("opinion-tag");


});