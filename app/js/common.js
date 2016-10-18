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
      slideSpeed : 800,
      paginationSpeed : 1200,
      singleItem:true,
	  autoPlay: true,
	  itemsMobile : false
       
 	  });

	   // Custom Navigation Events
	$(".next").click(function(){
    owl.trigger('owl.next');
  	})
  	$(".prev").click(function(){
    owl.trigger('owl.prev');
  	})

// выравнивание групп товаров

	function setEqualHeight(columns) { 
		var tallestcolumn = 0; 
		columns.each( function() { 
			currentHeight = $(this).height(); 
			if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); 
			columns.height(tallestcolumn); 
	} 
		
	setEqualHeight($(".cat-name")); 
	

});
