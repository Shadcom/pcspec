$(document).ready(function() {

	// Custom JS
	$(".aside-nav li").click(function() {
		$(".aside-nav li").removeClass("active");
		$(this).addClass("active");
	});

	$(".top-mnu li").click(function() {
		$(".top-mnu li").removeClass("active");
		$(this).addClass("active");
	});

	// Owl Carousel

	 $("#owl-demo").owlCarousel({
 
      
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });


});
