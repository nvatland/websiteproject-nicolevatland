jQuery(document).ready(function($){
	var contentSections = $('.resume'),
		navigationItems = $('#dot-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        console.log($(this.hash));
        smoothScroll($(this.hash));
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#dot-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
				console.log(navigationItems.eq(activeSection));
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}

	$(window).scroll(function(){
		var sticky = $('.reg-nav'),
			scroll = $(window).scrollTop();
			console.log(scroll);
		if (scroll > 400) {
			sticky.addClass('sticky');
		} else {
			sticky.removeClass('sticky');
		}
	})

});