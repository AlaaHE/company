$(window).on('load', function () {

         $(".over .loader").fadeOut(2000,function(){
		 $(this).parent().fadeOut(2000);
		 
		 });
	   });

       $(document).ready(function () {
          //nicescroll, theme
		   $("html").niceScroll({cursorcolor:"red",scrollspeed:"100",cursorwidth:"10px"});

			$("#grayButton").click(function(){
			  
				 $("link[rel=stylesheet]").last().attr({href : "css/gray.css"});
				 $("html").niceScroll().remove();
				 $("html").niceScroll({cursorcolor:"gray",scrollspeed:"100",cursorwidth:"10px"});

			
			});
			 $("#whiteButton").click(function(){
			  
				 $("link[rel=stylesheet]").last().attr({href : "css/red.css"});
				 $("html").niceScroll().remove();
				 $("html").niceScroll({cursorcolor:"red",scrollspeed:"100",cursorwidth:"10px"});
				 
			
			});
			$("#blueButton").click(function(){
			  
				 $("link[rel=stylesheet]").last().attr({href : "css/blue.css"});
				 $("html").niceScroll().remove();
				 $("html").niceScroll({cursorcolor:"blue",scrollspeed:"100",cursorwidth:"10px"});
				 
			
			});
			$("#yellowButton").click(function(){
			  
				 $("link[rel=stylesheet]").last().attr({href : "css/yellow.css"});
				 $("html").niceScroll().remove();
				 $("html").niceScroll({cursorcolor:"yellow",scrollspeed:"100",cursorwidth:"10px"});
				 
			
			});
			
			
			//end of theme
	   
     
			
			

			/******************************
			  BOTTOM SCROLL TOP BUTTON
		   ******************************/

		  // declare variable
		  var scrollTop = $(".scrollTop");

		  $(window).scroll(function() {
			// declare variable
			var topPos = $(this).scrollTop();

			// if user scrolls down - show scroll to top button
			//var h=($(document).height())-500;
			if (topPos > 800) {
			  $(scrollTop).css("opacity", "1");

			} else {
			  $(scrollTop).css("opacity", "0");
			}

		  }); // scroll END

		  //Click event to scroll to top
		  $(scrollTop).click(function() {
			$('html, body').animate({
			  scrollTop: 0     }, 800);
			return false;

		  }); // click() scroll top EMD

		  
				
		 });