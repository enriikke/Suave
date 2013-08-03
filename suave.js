

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



