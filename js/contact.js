// Javascript page for about page of website.




//Initiating variables for scrolling feature
	var newScrollTop = 0;
	var lastScrollTop = 0;
	var delta = 5; // eliminates microscrolling 
	var didScroll; // scroll boolean
	// var sectionView = {
	// 	abilities:{
	// 		visib: false,
	// 		firstView: 0
	// 	}
	// };

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
	        // checkWindowView();
	        // animateSections();
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
// 							contact page specific section           	       //
//////////////////////////////////////////////////////////////////
// 				actually submit email on submint 				//

	// $('#submit').on( 'click', function(){
	// 	//for later use with email setups
	// });

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

// function checkWindowView(){
		
// 		// Widown dimensions
// 	var windowHeight = $(window).height();
// 	var windowTopPosition = $(window).scrollTop();
// 	var windowBottomPosition = (windowTopPosition + windowHeight);

// 		// software development element sizing
// 	var aElementHeight = $('.abilities').outerHeight();
// 	var aElementTopPosition = $('.abilities').offset().top;
// 	var aElementMidPosition = ( aElementTopPosition + aElementHeight/2);


// 	//check to see if next container is in window
// 	if (aElementMidPosition >= windowTopPosition && aElementMidPosition <= windowBottomPosition) {
// 		sectionView.abilities.visib = true;
// 		console.log("abilities in view")
// 	} else {
// 		sectionView.abilities.visib = false;
// 	}
// }

// function animateSections(){

// 		//software development section animations
// 	if (sectionView.abilities.visib && sectionView.abilities.firstView){
// 		// run animation when you see it first
// 	// $('.filledStar').removeClass('glyphicon-star-empty').addClass('glyphicon-star');

// 	$(".filledStar").addClass("glyphicon-star").delay(750).queue(function(){
//     	$(this).removeClass("glyphicon-star-empty").dequeue();
// 	});

// 		sectionView.abilities.firstView = false;

// 	} else if ( sectionView.abilities.visib == false && sectionView.abilities.firstView === 0){
// 		sectionView.abilities.firstView = true;
// 		// run animation when its out of view

// 	}
// }




