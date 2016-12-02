// Javascript page for home page of website.




	//Initiating variables for scrolling feature
	var newScrollTop = 0;
	var lastScrollTop = 0;
	var delta = 5; // eliminates microscrolling 
	var didScroll; // scroll boolean
	var sectionView = {
		SD:{
			visib: false,
			firstView: 0
		},
		GD:{
			visib: false,
			firstView: 0
		},
		WD:{
			visib: false,
			firstView: 0
		},
		G:{
			visib: false,
			firstView: 0
		}
	};


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
	        animateHeader();
	        checkWindowView(); // home page window locator
	        animateSections(); // home page animation of sections
	        didScroll = false;
	    }
	}, 125);

 


//////////////////////////////////////////////////////////////////
// 				drop down menu portfolio						//

	$('.dropdown').hover(
    	function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
	);


//////////////////////////////////////////////////////////////////
// 				scroll back to top feature						//

    $(document).on( 'scroll', function(){
 
    	if ($(window).scrollTop() > 500) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);



/////////////////////////////////////////////////////////////////////////////////
// 							Homepage specific section           			   //
//////////////////////////////////////////////////////////////////
// 			Images from development section move  				//


};

$(document).ready(main);



// animation to bring the window to the top of the document
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

	// function that if scrolled will hide the header section.
function animateHeader(){
	newScrollTop = $(this).scrollTop(); // new scrolltop number
	
	// the scroll distance is farther than the delta proceede or else nothing
	if(Math.abs(lastScrollTop - newScrollTop) <= delta){
		return;
	}

	if (newScrollTop > lastScrollTop){ 
		//we have scrolled down
		$('.header').addClass('animHeaderUp');
		$('.header').fadeOut('slow');
	} else { 
		//we have scrolled up 
		$('.header').removeClass('animHeaderUp');
		$('.header').fadeIn();
	}

	//reset counter
	lastScrollTop = newScrollTop;
}


	// used to check window lowcation and run hide show functions
	// forgive me
function checkWindowView(){
		
		// Widown dimensions
	var windowHeight = $(window).height();
	var windowTopPosition = $(window).scrollTop();
	var windowBottomPosition = (windowTopPosition + windowHeight);

		// software development element sizing
	var SDelementHeight = $('#SDanimationElement').outerHeight();
	var SDelementTopPosition = $('#SDanimationElement').offset().top;
	var SDelementMidPosition = ( SDelementTopPosition + SDelementHeight/2);

		// graphic development element sizing
	var GDelementHeight = $('#GDanimationElement').outerHeight();
	var GDelementTopPosition = $('#GDanimationElement').offset().top;
	var GDelementMidPosition = ( GDelementTopPosition + GDelementHeight/2);

		// web development element sizing
	var WDelementHeight = $('#WDanimationElement').outerHeight();
	var WDelementTopPosition = $('#WDanimationElement').offset().top;
	var WDelementMidPosition = ( WDelementTopPosition + WDelementHeight/2);

		// graphic design element sizing
	var GelementHeight = $('#GanimationElement').outerHeight();
	var GelementTopPosition = $('#GanimationElement').offset().top;
	var GelementMidPosition = ( GelementTopPosition + GelementHeight/2);


	//check to see if next container is in window
	if (SDelementMidPosition >= windowTopPosition && SDelementMidPosition <= windowBottomPosition) {
		sectionView.SD.visib = true;
	} else {
		sectionView.SD.visib = false;
	}

	if (GDelementMidPosition >= windowTopPosition && GDelementMidPosition <= windowBottomPosition) {
		sectionView.GD.visib = true;
	} else {
		sectionView.GD.visib = false;
	}

	if (WDelementMidPosition >= windowTopPosition && WDelementMidPosition <= windowBottomPosition) {
		sectionView.WD.visib = true;
	} else {
		sectionView.WD.visib = false;
	}

	if (GelementMidPosition >= windowTopPosition && GelementMidPosition <= windowBottomPosition) {
		sectionView.G.visib = true;
	} else {
		sectionView.G.visib = false;
	}
}

// first view should be false if you want it to play everytime you see it and 0 if you want the animation to only run once
// also view object should be changed to false 
function animateSections(){

		//software development section animations
	if (sectionView.SD.visib && sectionView.SD.firstView){
		// run animation when you see it first
		$('.SDanimateL').animate({right: '10%'}, { easing: 'swing', duration: 2500});
		$('.SDanimateC').animate({right: '0'}, { easing: 'swing', duration: 1750});
		$('.SDanimateR').animate({right: '-10%'}, { easing: 'swing', duration: 1000});

		sectionView.SD.firstView = false;

	} else if ( sectionView.SD.visib == false && sectionView.SD.firstView === 0){
		sectionView.SD.firstView = true;
		// run animation when its out of view
		$('.SDanimateL').css({right: '100%'});
		$('.SDanimateC').css({right: '100%'});
		$('.SDanimateR').css({right: '100%'});
	}



		//Game development section animations
	if (sectionView.GD.visib && sectionView.GD.firstView){
		// run animation when you see it first
		$('.GDanimateL').animate({left: '-10%'}, { easing: 'swing', duration: 1000});
		$('.GDanimateC').animate({left: '0'}, { easing: 'swing', duration: 1750});
		$('.GDanimateR').animate({left: '10%'}, { easing: 'swing', duration: 2500});

		sectionView.GD.firstView = false;

	} else if ( sectionView.GD.visib == false && sectionView.GD.firstView === 0){
		sectionView.GD.firstView = true;
		// run animation when its out of view
		$('.GDanimateL').css({left: '100%'});
		$('.GDanimateC').css({left: '100%'});
		$('.GDanimateR').css({left: '100%'});
	}



		//Web development section animations
	if (sectionView.WD.visib && sectionView.WD.firstView){
		// run animation when you see it first
		$('.WDanimateL').animate({right: '10%'}, { easing: 'swing', duration: 2500});
		$('.WDanimateC').animate({right: '0'}, { easing: 'swing', duration: 1750});
		$('.WDanimateR').animate({right: '-10%'}, { easing: 'swing', duration: 1000});

		sectionView.WD.firstView = false;

	} else if ( sectionView.WD.visib == false && sectionView.WD.firstView === 0){
		sectionView.WD.firstView = true;
		// run animation when its out of view
		$('.WDanimateL').css({right: '100%'});
		$('.WDanimateC').css({right: '100%'});
		$('.WDanimateR').css({right: '100%'});
	}



		//Graphic Design section animations
	if (sectionView.G.visib && sectionView.G.firstView){
		// run animation when you see it first
		$('.GanimateL').animate({left: '-10%'}, { easing: 'swing', duration: 1000});
		$('.GanimateC').animate({left: '0'}, { easing: 'swing', duration: 1750});
		$('.GanimateR').animate({left: '10%'}, { easing: 'swing', duration: 2500});

		sectionView.G.firstView = false;

	} else if ( sectionView.G.visib == false && sectionView.G.firstView === 0){
		sectionView.G.firstView = true;
		// run animation when its out of view
		$('.GanimateL').css({left: '100%'});
		$('.GanimateC').css({left: '100%'});
		$('.GanimateR').css({left: '100%'});
	}
}