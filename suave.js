
/*
 *      Suave makes it easier to apply smooth vertical scrolling to all of the same-page
 *		links on your website. Simply pass in all anchor tags and you are set. You can 
 *		also select specific classes or IDs if you don't need it on all links. I'm working
 *		on adding support for horizontal scrolling and also to make Suave more 
 *		customizable. Stay tuned
 *
 *      Suave requires jQuery to work.
 *
 *
 *      by Enrique Gonzalez (Enriikke)
 *      helloimenrique.com
 *      enrique@chiibo.com
 *
 *      enjoy!
 *
 */
(function ($) {
	
	$.fn.suave = function(options) {

		


		// Settings 
		var settings = $.extend({

			speed: 			400,
			displayHash: 	false

		}, options);


		// TODO: Need to filterout the target
		var getTarget = function(anchor) {

			if(	anchor.hash.replace(/#/, '') &&
				anchor.hostname == location.hostname &&
				anchor.pathname == location.pathname ) return anchor.hash;


			return false;

		};


		// TODO: test the location
		var setHash = function(target) {

			location.hash = target;
		};


		// TODO: allow for horizontal scrolling
		return this.each(function() {
			var target = getTarget(this);
			if(!target) return true;

			$(this).click(function (event) {
				event.preventDefault();

				var offset = $(target).offset().top;
				$('html, body').animate({scrollTop: offset}, settings.speed, function() {
					if(settings.displayHash) setHash(target);
				});
			});
		});
	};

})(jQuery);



