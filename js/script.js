$(document).ready(function() {
	var slider = $('.slider');
	slider.carouFredSel({	    
	    responsive: true,   
	    direction: "left",   
	    width: null,         
	    height: $(document).height(),    
	    items: {
	    	// width: '100%',
	    	height: "50%"
	    },
	    scroll: {
	    	fx: 'crossfade',
	    	duration: 5555
	    },
		onCreate: function () {
			$(window).on('resize', function () {
				slider.parent().add(slider).height(slider.children().first().height());
			}).trigger('resize');
		}
	});

	$('a').on('click', function() {
	  ga('send', 'event', 'Social Links', 'Click', $(this).attr('href'));
	});
});