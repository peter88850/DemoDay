$(function(){
 	
    $(".nav").on('click',function(){
	 $(".nv-wrapper").toggle();
    });
   
   // 對每個 hottest-news 元素進行以下語法
    $(".hottest-news").each(function(){
        
		var slides = $(this).find('.hottest-news-article'),
            slideCount = slides.length,
            currentIndex = 0;
		
		var nextIndex = (currentIndex +1) % slideCount;

        function showNextSlide() {
            slides.eq(currentIndex).fadeOut();
            slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
		
		 // 每秒執行 showNextSlide 函式
        setInterval(showNextSlide, 3000);

    });	
	
});