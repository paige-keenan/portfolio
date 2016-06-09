(function() {

    function init() {
    	addWaypoints()
        assignClassToTwinkles();
    }

    function addWaypoints() {
    	var slides = [1, 2, 3, 4];

    	for (x = 0; x < slides.length; x++) {
    		var currentSlide = $('.slide-' + slides[x]);

    		
    		currentSlide.each(function() {
    			var that = $(this);
    			
				var waypoint = new Waypoint({
				  element: currentSlide,
				  handler: function(direction) {
				    that.addClass('scrolled--to');
				  },
                  offset: '70%'
				});
    		});
    	}
    }


    function assignClassToTwinkles() {
        var classes = ['twinkle-one', 'twinkle-two', 'twinkle-three'];
        $('svg path').each(function() {
            $(this).attr('class', (classes[~~(Math.random() * classes.length)]));
        });
    }

    $(document).on('ready', function() {
        init();
    });

})();