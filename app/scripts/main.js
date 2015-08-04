"use strict";

$(document).ready(function(){

	$(".tag").on("click", function(){
		$(this).toggleClass("highlight");
	});

	$(".btn").on("click", function(){
		$(this).toggleClass("highlight");
	});


	console.log("HELLO WORLD");


	$("div.tag:contains('news')").addClass("news-tag");
	$("div.tag:contains('opinion')").addClass("opinion-tag");
	$("div.tag:contains('arts')").addClass("arts-tag");
	$("div.tag:contains('features')").addClass("features-tag");
	$("div.tag:contains('columns')").addClass("columns-tag");

	$("div.nav-button:contains('news')").addClass("news-nav-button");
	$("div.nav-button:contains('opinion')").addClass("opinion-nav-button");
	$("div.nav-button:contains('arts')").addClass("arts-nav-button");
	$("div.nav-button:contains('features')").addClass("features-nav-button");
	$("div.nav-button:contains('columns')").addClass("columns-nav-button");


	var sticky = new Waypoint.Sticky({
		element: $('.bar')[0]
	});

	var $menu = $(".bar");

	$menu.waypoint(function()	{
		$(".bar").toggleClass("bar-locked");
		$(".cover-photo").toggleClass("sticky-offset");
	});

});