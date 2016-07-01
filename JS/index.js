$(function(){
 	
	//nav//
	
    $(".nav").on('click',function(){
	 $(".nv-wrapper").fadeToggle();
    });

	//stickymenu //
	$(window).trigger('scroll');
	
    var headerOffsetTop = $("header").offset().top;
 
	$(window).on('scroll', function() {
        if($(window).scrollTop() > headerOffsetTop){
            $("header").addClass('sticky');
        } else {
            $("header").removeClass('sticky');
        }
    });
	
	//slideshow//
	
	$(".hottest-news").each(function(){
	
	var currentIndex = 0,
		articles = $(".hottest-news-article"),
		articleAmt = articles.length;
	
	setInterval(circleArticles, 5000);		
		
	function circleArticles(){
		var nextIndex = (currentIndex +1) % articleAmt;
		articles.hide();
		articles.eq(currentIndex).css('display','inline-block');
		currentIndex = nextIndex;
		}
  	});
	
	//whatsnews mouseover effect//
	
	$(".whats-news-items")
		
		.on('mouseover',function(){
		$(this).find('img').css('opacity',0.2);
		$(this).find('h4').css({
			color: 'black',
		});
	})
	
		.on('mouseout',function(){
		$(this).find('img').css('opacity',1);
		$(this).find('h4').css({
			color: '',
		});
	});
	
	//article-item mouseover//
	
	$(".article-item").on('mouseover',function(){
		$(this).css('color','black');
	});

	//channel-category mouseover//
	
	$(".cate-item")
	 .on('mouseover',function(){
		$(this).css('opacity',0.6);
	})
	 .on('mouseout',function(){
		$(this).css('opacity',1);
	});
	
});
