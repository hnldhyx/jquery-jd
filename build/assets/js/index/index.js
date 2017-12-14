define(['assets/js/index/render_static_struct.js'], 
	function(renderStaticStructApp){

	var self;
	var indexApp = {
		init: function(){
			self = this;
			self._getStart();
			self._event();

			$(window).scroll();
		},
		_getStart: function(){
			renderStaticStructApp.init();
		},
		_event: function(){
			$(window).on('scroll', function(){
				var scrollTop = $(window).scrollTop();
				var $search = $('#search');
				if(scrollTop >= 740){
					if($('#search:visible').length == 0){
						$search.slideDown();
						$search.find('input[type="text"]').attr('placeholder', $('.header .search-area input[type="text"]').attr('placeholder'));
						$search.find('.header-search-btn').attr('data-url', $('.header .header-search-btn').data('url'));
					}
				}else{
					if($('#search:visible').length != 0){
						$search.slideUp();
					}
				}

				/*if(scrollTop >= 1470){
					if($('#anchor:visible').length == 0){
						$('#anchor').fadeIn();
					}
				}else{
					if($('#anchor:visible').length != 0){
						$('#anchor').fadeOut();
					}
				}*/
			})

			$(document).on('click', '.to-top', function(){
				$('html').animate({
					'scrollTop': '0px'
				},500)
			})
		}
	};
	return indexApp;
})