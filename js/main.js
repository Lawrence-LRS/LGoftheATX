// Javascript page for home page of website.




	//Initiating variables for scrolling feature
	var newScrollTop = 0;
	var lastScrollTop = 0;
	var delta = 5; // eliminates microscrolling 
	var didScroll; // scroll boolean
	var sectionView = {
		SD:{
			visib: false,
			firstView: false
		},
		GD:{
			visib: false,
			firstView: false
		},
		WD:{
			visib: false,
			firstView: false
		},
		G:{
			visib: false,
			firstView: false
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
	var SDelementMidPosition = ( SDelementTopPosition + SDelementHeight);

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
		console.log("software development in field");
		sectionView.SD.visib = true;
	} else {
		sectionView.SD.visib = false;
	}

	if (GDelementMidPosition >= windowTopPosition && GDelementTopPosition <= windowBottomPosition) {
		console.log("Game development in field");
		sectionView.GD.visib = true;
	} else {
		sectionView.GD.visib = false;
	}

	if (WDelementMidPosition >= windowTopPosition && WDelementTopPosition <= windowBottomPosition) {
		console.log("Web development in field");
		sectionView.WD.visib = true;
	} else {
		sectionView.WD.visib = false;
	}

	if (GelementMidPosition >= windowTopPosition && GelementTopPosition <= windowBottomPosition) {
		console.log("Graphic Design in field");
		sectionView.G.visib = true;
	} else {
		sectionView.G.visib = false;
	}
}

function animateSections(){

	if (sectionView.SD.visib && sectionView.SD.firstView){
		console.log("software dev run animation")
		// run animation
		$('.SDanimateL').animate({marginRight: '-=300px'},2000);
		$('.SDanimateC').animate({marginRight: '-=600px'},2000);
		$('.SDanimateR').animate({marginRight: '-=900px'},2000);

		sectionView.SD.firstView = false;

	} else if ( sectionView.SD.visib == false && sectionView.SD.firstView == false){
		sectionView.SD.firstView = true;
		console.log("software dev reset to first view")
		$('.SDanimateL').animate({marginRight: '+=300px'},0000);
		$('.SDanimateC').animate({marginRight: '+=600px'},0000);
		$('.SDanimateR').animate({marginRight: '+=900px'},0000);
		// $('.SDanimateL').css({marginRight: '-=300px'});
		// $('.SDanimateC').css({marginRight: '-=300px'});
		// $('.SDanimateR').css({marginRight: '-=300px'});
	}



		// $('#SDanimationElement').css('visibility', 'visible').delay(500);	
		// $('#SDanimationElement').css('visibility', 'hidden');

}











// 	if (GDelementMidPosition >= windowTopPosition && GDelementTopPosition <= windowBottomPosition) {
// 		// game dev from the right
// 		$('.GDanimateL').delay().fadeIn();
// 		$('.GDanimateC').delay(500).fadeIn();
// 		$('.GDanimateR').delay(1000).fadeIn();

// 	} else {
// 		$('.GDanimationElement').fadeOut()
		
// 	}



// 	if (WDelementMidPosition >= windowTopPosition && WDelementTopPosition <= windowBottomPosition) {
// 		// web dev from the left
// 		$('.WDanimateL').delay().fadeIn();
// 		$('.WDanimateC').delay(500).fadeIn();
// 		$('.WDanimateR').delay(1000).fadeIn();

// 	} else {
// 		$('.WDanimationElement').fadeOut()

// 	}



// 	if (GelementMidPosition >= windowTopPosition && GelementTopPosition <= windowBottomPosition) {
// 		// graphic design from the right
// 		$('.GanimateL').delay().fadeIn();
// 		$('.GanimateC').delay(500).fadeIn();
// 		$('.GanimateR').delay(1000).fadeIn();

// 	} else {
// 		$('.GanimationElement').fadeOut()
// 	}
// }
