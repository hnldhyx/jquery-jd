define(['assets/js/common/model.js', 
	'assets/js/data/index/addressData.js',
	'viewTpl/index/shortcut/shortcut_tpl',
	'viewTpl/index/shortcut/shortcut_address_tpl',
	'viewTpl/index/shortcut/shortcut_myjd_tpl',
	'viewTpl/index/shortcut/shortcut_service_tpl',
	'viewTpl/index/shortcut/shortcut_websitenav_tpl'],
	function(model, addressData, shortcutTpl, shortcutAddressTpl, shortcutMyjdTpl, shortcutServiceTpl, shortcutWebsitenavTpl){

	var self;
	var shortcutApp = {
		init: function(){
			self = this;
			self._renderShortcut(function(){
				self._shortcutEvent();
			});
		},
		/*
		* 渲染shortcut部分信息
		*/
		_renderShortcut: function(callback){
			// 获取当前的地址信息（此处写死）
			model.getCurrentAddr().then(function(res){
				if(res.meta.status == 200){
					var shortcutData = {
						'currentProvince': {
							'text': res.data.currentProvince,
							'code': res.data.provinceCode
						},
						'shortcutInfoData': [{
							'text': '您好，请登录',
							'comment': '免费注册',
							'clsName': 'shortcut-login'
						},{
							'text': '我的订单',
							'clsName': 'shortcut-my-order'
						},{
							'text': '我的京东',
							'clsName': 'shortcut-my-jd shortcut-dropdown',
							'hasDropdown': true
						},{
							'text': '京东会员',
							'clsName': 'shortcut-jdvip'
						},{
							'text': '企业采购',
							'clsName': 'shortcut-enterprise-order'
						},{
							'text': '客户服务',
							'clsName': 'shortcut-service shortcut-dropdown',
							'hasDropdown': true
						},{
							'text': '网站导航',
							'clsName': 'shortcut-website-nav shortcut-dropdown',
							'hasDropdown': true
						},{
							'text': '手机京东',
							'clsName': 'shortcut-telephone-version'
						}]
					}
					$('.shortcut').html(shortcutTpl(shortcutData));
					$('.shortcut-address').append(shortcutAddressTpl(addressData.addressData));
					$('.shortcut-my-jd').append(shortcutMyjdTpl());
					$('.shortcut-service').append(shortcutServiceTpl());
					$('.shortcut-website-nav').append(shortcutWebsitenavTpl());

					callback && callback();
				}
			})
		},
		_shortcutEvent: function(){
			// 1.鼠标移入地址选择栏
			$('.shortcut').on('mouseenter', '.shortcut-address', function(){
				var $addressDrop = $('.shortcut-address').find('.shortcut-address-wrap'),
					currentProvinceCode = $(this).attr('data-code');

				$addressDrop.show().find('li[data-code="' + currentProvinceCode + '"]').addClass('active').siblings().removeClass('active');
				$('.shortcut-address').find('.shortcut-shade-line').show();

			}).on('mouseleave', '.shortcut-address', function(){
				$('.shortcut-address')
				.find('.shortcut-address-wrap').hide()
				.end().find('.shortcut-shade-line').hide();
			});

			// 2.选中具体省份
			$('.shortcut').on('click', '.shortcut-address .shortcut-address-wrap li', function(){
				var selectedHtml = $(this).html()
				if(!$(this).hasClass('active')){
					$('.shortcut .shortcut-address')
						.attr('data-code',$(this).attr('data-code'))
						.find('.shortcut-address-current-province').html(selectedHtml).attr('title', selectedHtml)
						.end().children('i').attr('title', selectedHtml);
				}

				$('.shortcut-address').find('.shortcut-address-wrap').hide()
					.end().find('.shortcut-shade-line').hide();

				// 再调接口，接口成功返回之后，程序控制自动刷新页面
			})

			// 3.shortcut部分鼠标移入效果
			$('.shortcut').on('mouseenter', '.shortcut-info li.shortcut-dropdown', function(){
				$(this).addClass('dropdown-active')
				.find('.shortcut-dropdown-wrap').show()
				.end().find('.shortcut-shade-line').show();
			}).on('mouseleave', '.shortcut-info li.shortcut-dropdown', function(){
				$(this).removeClass('dropdown-active')
				$('.shortcut-dropdown-wrap').hide();
				$('.shortcut-shade-line').hide();
			})

			// 4.鼠标移入手机京东效果
			$('.shortcut').on('mouseenter', '.shortcut-telephone-version', function(){
				
			}).on('mouseleave', '.shortcut-telephone-version', function(){
				
			})
		}
	};
	return shortcutApp;
})