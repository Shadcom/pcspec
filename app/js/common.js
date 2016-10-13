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

	var owl = $("#owl-demo");

	owl.owlCarousel({
 
      
	  pagination : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay: true,
	  itemsMobile : false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 	  });

	   // Custom Navigation Events
	$(".next").click(function(){
    owl.trigger('owl.next');
  	})
  	$(".prev").click(function(){
    owl.trigger('owl.prev');
  	})


});
