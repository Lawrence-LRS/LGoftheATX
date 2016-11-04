// Javascript page for home page of website.




	//Initiating variables for scrolling feature
	var newScrollTop = 0;
	var lastScrollTop = 0;
	var delta = 5; // eliminates microscrolling 
	var didScroll; // scroll boolean




// main function that runs once document is loaded
var main = function() {

/////////////////////////////////////////////////////////////////////////////////
// 							ALL WEBPAGES section           					   //

///////////////////////////////////////////////////////////////
// 				scroll events								//

	// function returns true for scroll event
	$(window).scroll(function(event){
		didScroll = true;
	});

	// This function repeats every 1/4th second, if scrolled recently decides how to effect header.
	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        checkWindowView();// home page animation specific based on window location
	        didScroll = false;
	    }
	}, 250);


//////////////////////////////////////////////////////////////////
// 				return from the bottom of the page				//

	//button on bottom page to return to top
	$('#spnTop').on("click",function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
	}); 



//////////////////////////////////////////////////////////////////
// 				drop down menu portfolio						//

	$('.portfolio').click(function(){
    	$('.dropdown-menu').toggle();
    
	});


//////////////////////////////////////////////////////////////////
// 				Image hover enlarge images						//

//performed with css :hover and :active


/////////////////////////////////////////////////////////////////////////////////
// 							Homepage specific section           			   //
//////////////////////////////////////////////////////////////////
// 			Images from development section move  				//





};

$(document).ready(main);



	// function that if scrolled will hide the header section.
function hasScrolled(){
	newScrollTop = $(this).scrollTop(); // new scrolltop number
	
	// the scroll distance is farther than the delta proceede or else nothing
	if(Math.abs(lastScrollTop - newScrollTop) <= delta){
		return;
	}

	if (newScrollTop > lastScrollTop){ 
		//we have scrolled down
		
		$('.header').slideUp('slow');
		$('.header').fadeOut();
	} else { 
		//we have scrolled up 
		$('.header').fadeIn();
	}

	//reset counter
	lastScrollTop = newScrollTop;
}





function checkWindowView(){
		
		// Widown dimensions
	var windowHeight = $(window).height();
	var windowTopPosition = $(window).scrollTop();
	var windowBottomPosition = (windowTopPosition + windowHeight);

		// software development element sizing
	var SDelementHeight = $('#SDanimationElement').outerHeight();
	var SDelementTopPosition = $('#SDanimationElement').offset().top;
	var SDelementMidPosition = ( SDelementTopPosition + SDelementHeight);
	var SDinView = false;

		// graphic development element sizing
	var GDelementHeight = $('#GDanimationElement').outerHeight();
	var GDelementTopPosition = $('#GDanimationElement').offset().top;
	var GDelementMidPosition = ( GDelementTopPosition + GDelementHeight);

		// web development element sizing
	var WDelementHeight = $('#WDanimationElement').outerHeight();
	var WDelementTopPosition = $('#WDanimationElement').offset().top;
	var WDelementMidPosition = ( WDelementTopPosition + WDelementHeight);

		// graphic design element sizing
	var GelementHeight = $('#GanimationElement').outerHeight();
	var GelementTopPosition = $('#GanimationElement').offset().top;
	var GelementMidPosition = ( GelementTopPosition + GelementHeight);


	//check to see if next container is in window
	if (SDelementMidPosition >= windowTopPosition && SDelementTopPosition <= windowBottomPosition) {
		
		// Software dev from the left
		
			console.log("software development in field")
		$('#SDanimationElement').css('visibility', 'visible');	
		$('.SDanimateL').fadeIn("slow");
		$('.SDanimateC').fadeIn("slow");
		$('.SDanimateR').fadeIn("slow");
		
		

	} else {
		console.log("software dev not in field")
		$('#SDanimationElement').css('visibility', 'hidden');

	}


	if (GDelementMidPosition >= windowTopPosition && GDelementTopPosition <= windowBottomPosition) {
		// game dev from the right
		$('.GDanimateL').delay().fadeIn();
		$('.GDanimateC').delay(500).fadeIn();
		$('.GDanimateR').delay(1000).fadeIn();

	} else {
		$('.GDanimationElement').fadeOut()
		
	}



	if (WDelementMidPosition >= windowTopPosition && WDelementTopPosition <= windowBottomPosition) {
		// web dev from the left
		$('.WDanimateL').delay().fadeIn();
		$('.WDanimateC').delay(500).fadeIn();
		$('.WDanimateR').delay(1000).fadeIn();

	} else {
		$('.WDanimationElement').fadeOut()

	}



	if (GelementMidPosition >= windowTopPosition && GelementTopPosition <= windowBottomPosition) {
		// graphic design from the right
		$('.GanimateL').delay().fadeIn();
		$('.GanimateC').delay(500).fadeIn();
		$('.GanimateR').delay(1000).fadeIn();

	} else {
		$('.GanimationElement').fadeOut()
	}
}
