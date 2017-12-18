define(['assets/js/common/model.js',
	'viewTpl/index/header/header_tpl',
	'viewTpl/index/header/header_cart_tpl',
	'assets/js/common/clamp.min.js'], 
	function(model, headerTpl, headerCartTpl){

	var self;
	var headerApp = {
		init: function(){
			self = this;
			self._renderHeader();
			self._headerEvent();
		},
		/*
		* 渲染头部
		*/
		_renderHeader: function(callback){
			// 获取头部信息，包括搜索框下面快速访问的信息（暂时写死）和头部tab等信息
			model.getHeaderInfo().then(function(res){
				if(res.meta.status == 200){
					var headerData = {
						'hotSearch': res.data.hotSearch,
						'quickAccess': res.data.quickAccess,
						'headerTabs': res.data.headerTabs,
						'headerTreasure': res.data.headerTreasure
					};
					$('.header').html(headerTpl(headerData));
					callback && callback();

					// 初始化购物车信息
					model.initCartInfo().then(function(res){
						if(res.meta.status == 200){
							$('.header .header-cart-count').html(res.data.count);
						}
					})
				}
			});

		},
		_renderCart: function(){
			var $cartDrop = $('.header-cart .header-cart-dropdown-wrap')
			model.getHeaderCart().then(function(res){
				if(res.meta.status == 200){
					var cartData = res.data;
					$cartDrop.html(headerCartTpl(cartData));

					var $description = $('.cart-dropdown-description');

					if($description.length != 0){
						$.each($description, function(i){
							$clamp($description[i], {'clamp':3});
						})
					}
				}

			})
		},
		_headerEvent: function(){
			// 鼠标移入购物车
			$(document).on('mouseenter', '.header-cart', function(e){
				if($(e.target).closest('.header-cart-dropdown-wrap').length != 0){
					return false;
				}
				var $cartDrop = $('.header-cart .header-cart-dropdown-wrap');
				$cartDrop.show().prev('.header-shade-line').show();
				self._renderCart();
			}).on('mouseleave', '.header-cart', function(){
				$('.header-cart .header-cart-dropdown-wrap').empty().hide().prev('.header-shade-line').hide();
			})

			// 点击删除
			$(document).on('click', '.cart-info-del', function(){
				var $parent = $(this).closest('.cart-dropdown-item');
				$parent.remove();
			})
		}
	};
	return headerApp;
})