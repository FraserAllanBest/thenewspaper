"use strict";

$(document).ready(function(){

    $("#skippr-slideshow").skippr({
        transition: 'slide',
        speed: 1000,
        easing: 'easeOutQuart',
        navType: 'none',
        childrenElementType: 'div',
        arrows: true,
        autoPlay: true,
        autoPlayDuration: 10000,
        keyboardOnAlways: true,
        hidePrevious: false
    });

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

	$("div.navi-button:contains('news')").addClass("news-nav-button");
	$("div.navi-button:contains('opinion')").addClass("opinion-nav-button");
	$("div.navi-button:contains('arts')").addClass("arts-nav-button");
	$("div.navi-button:contains('features')").addClass("features-nav-button");
	$("div.navi-button:contains('columns')").addClass("columns-nav-button");

// WAYPOINT FOR BAR

	// var $menu = $(".bar");



	var $BarSticky = new Waypoint.Sticky ({
		element: $('.bar')[0]
	});

	var $bar = $('.bar');

	$bar.waypoint(function	() {
		console.log('whats up?');
		$(".bar").toggleClass("bar-locked");
	});


// LETTER-N SHRINK

	var $letterN = $(".letter-n");

	$letterN.waypoint(function()	{

		$(window).scroll(function () {
		    var $scrollValue = $(window).scrollTop();
			    console.log($scrollValue);

			if ($scrollValue > 150 && $scrollValue < 228) {
	    		$(".letter-n").css("width", 15 + ((93 - $scrollValue) / 10) + "%");
	    		$(".letter-n").css("bottom", 0 + ((93 - $scrollValue) / 9.25) + "rem");
			}

    		if ($scrollValue > 238 && $scrollValue < 311)	{
    			$(".letter-n").css("width", ((8 + (239 - $scrollValue)) / 10) + "rem");
    			$(".letter-n").css("bottom", (((239 - $scrollValue) / 10) - 14.25) + "rem");
    		}

    		if ($scrollValue < 93)		{
    			$(".letter-n").css("width", 15 + "%");
    			$(".letter-n").css("bottom", 0 + "rem");
    		}
		});
	});


	$( ".card" ).hover(
	  function() {
	    $(this).find('img').css("opacity", "0.25");
	    $(this).find('.published').css("display", "block")
	    $(this).find('.modified').css("display", "block")
	  }, function() {
	    $(this).find('img').css("opacity", "1.0");
	    $(this).find('.published').css("display", "none")
	   	$(this).find('.modified').css("display", "none")
	  }
	);


 // WAYPOINT FOR BAR

});