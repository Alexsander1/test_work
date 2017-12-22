$(document).ready(function(){

	function gallery(){


	var w = $(window).width();
	 var h = $(window).height();

	var imagewidth=(w/6)-0.1;
	var ratio = 200/265;
	var imageheight=imagewidth*ratio;
	var galleryheight = imageheight*2;

	$(".gallery").css("height", galleryheight);
	$(".g-items").css("height", galleryheight);

	$(".g-item").css("height", imageheight);
	$(".g-item").css("width", imagewidth);

	}
	$( window ).resize(function() {
		gallery();
	});
	gallery();


	$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
       
        $('body,html').animate({scrollTop: top}, 1500);
    });

	function Scrolling(){
		if($(window).width() >= 767)
		{
			if(window.pageYOffset > 90)
			{
				$("#navigator").addClass("navigator-fixed");		}
			else
			{
				$("#navigator").removeClass("navigator-fixed");
			}
			if(window.pageYOffset >= 600 && window.pageYOffset < 1500){
				$(".nav-link").removeClass("active");
				$("#aabout").addClass("active");
			}
			else if (window.pageYOffset >= 1500 && window.pageYOffset < 2400){
				$(".nav-link").removeClass("active");
				$("#aexpertise").addClass("active");
			}
			else if (window.pageYOffset >= 2400 && window.pageYOffset < 3200){
				$(".nav-link").removeClass("active");
				$("#ateams").addClass("active");
			}
			else if (window.pageYOffset >= 3200 && window.pageYOffset < 3800){
				$(".nav-link").removeClass("active");
				$("#aworks").addClass("active");
			}
			else if (window.pageYOffset >= 3800 && window.pageYOffset < 4294){
				$(".nav-link").removeClass("active");
				$("#apeople").addClass("active");
			}
			else if (window.pageYOffset >= 4294){
				$(".nav-link").removeClass("active");
				$("#acontact").addClass("active");
			}
			else
			{
				$(".nav-link").removeClass("active");
				$("#ahome").addClass("active");
			}
		}	
	}
	Scrolling();
	$(window).scroll(Scrolling);

});
