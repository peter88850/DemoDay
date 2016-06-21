$(function(){
 	
	//nav//
	
    $(".nav").on('click',function(){
	 $(".nv-wrapper").fadeToggle();
    });

	//stickymenu//
	$(window).trigger('scroll');
	
    var headerOffsetTop = $("header").offset().top;
 
	$(window).on('scroll', function() {
        if($(window).scrollTop() > headerOffsetTop){
            $("header").addClass('sticky');
        } else {
            $("header").removeClass('sticky');
        }
    });
	
	//
	
	
	
});
