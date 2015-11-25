$(document).ready(function() {

	$(".img-grid").rowGrid({
	    itemSelector: ".img-item",
	    minMargin: 1,
	    maxMargin: 2,
	    resize: true,
	    lastRowClass: "last-row",
	    firstItemClass: "first-item"
	});
	
	//scrollTo
	$('a.scrollto').click(function(e) {
		$('html,body').scrollTo(this.hash, this.hash, {
			gap : {
				y : -80
			},
			animation : {
				easing : 'easeInOutCubic',
				duration : 1600
			}
		});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')) {
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	$('.progress').each(function() {
		$(this).appear(function() {
			$(this).find('.progress-bar').animate({
				width : $(this).attr('data-percent')
			}, 1400);
		});
	});

	// owl-carousel
	$('.owl-battle').owlCarousel({
		animateOut: 'fadeOut',
    animateIn: 'fadeIn',
		autoHeight : true,
		margin: 0,
		items : 1,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed : 500,
		autoplayHoverPause : true,
		loop: true,
		dots: false,
	});

	$('.owl-pieces').owlCarousel({
		animateOut: 'fadeOut',
    animateIn: 'fadeIn',
		autoHeight : true,
		margin: 0,
		items : 1,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed : 500,
		autoplayHoverPause : true,
		loop: true,
	});

	//niceScroll
	$(".niceScroll").niceScroll({
		cursorcolor : "#000000",
		//cursoropacitymin : 0.7,
		cursoropacitymax : 0.3,
		cursorwidth : "10px",
		cursorborder : "1px solid transparent",
		cursordragontouch : true, // drag cursor in touch / touchbehavior mode also
		//smoothscroll: true, // scroll with ease movement
		//autohidemode: false,
		//zindex : "9999", // change z-index for scrollbar div
		//scrollspeed: 60, // scrolling speed
		//mousescrollstep: 40,
		//gesturezoom: false,
		//horizrailenabled: false,
		//cursorcolor: "#151515",
		//boxzoom: false,
		//cursorborder: "0 solid #202020",
		//cursorborderradius: "5px",
		//cursorwidth: 9,
		//enablemousewheel: true,
		//background : "#ffffff",
	});

	//parallax
	$(".parallax-xxs").parallax("50%",0.05);
	$(".parallax-xs").parallax("50%",0.1);
	$(".parallax-sm").parallax("50%",0.15);
	$(".parallax").parallax("50%",0.2);
	$(".parallax-md").parallax("50%",0.25);
	$(".parallax-lg").parallax("50%",0.3);
	$(".parallax-xl").parallax("50%",0.35);
	$(".parallax-xxl").parallax("50%",0.45);

	// Headroom init
	var elem = document.querySelector(".headroom");
	var headroom = new Headroom(elem, {
		"offset" : 100,
		"tolerance" : 5,
		"classes" : {
			"initial" : "animated",
			"pinned" : "slideDown",
			"unpinned" : "slideUp"
		}
	});
	headroom.init();

});
