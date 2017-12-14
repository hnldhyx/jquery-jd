define(['assets/js/common/model.js', 
	'assets/js/index/shortcut.js',
	'assets/js/index/header.js',
	'assets/js/index/article.js',
	'assets/js/index/seckill.js',
	'assets/js/index/fbr.js',
	'assets/js/index/cs.js',
	'assets/js/index/quality.js',
	'assets/js/index/life.js',
	
	'viewTpl/index/header/header_ad_tpl',
	'viewTpl/index/footer/footer_tpl'
 	], 
 	function(model, shortcutApp, headerApp, articleApp, seckillApp, fbrApp, csApp, qualityApp, lifeApp, headerAdTpl, footerTpl){

	var self;
	var renderStaticStructApp = {
		init: function(){
			self = this;
			
			self._renderAds();

			shortcutApp.init();
			headerApp.init();
			articleApp.init();
			seckillApp.init();
			fbrApp.init();
			csApp.init();
			qualityApp.init();
			lifeApp.init();

			self._renderFooter();
			
		},
		/*
		* 渲染广告
		*/
		_renderAds: function(){
			// 获取广告信息
			model.getAdInfo().then(function(res){
				if(res.meta.status == 200){
					$('.header-ad').css({
						'backgroundColor': res.data.headerAd.theme
					}).html(headerAdTpl(res.data.headerAd));

					// 领券中心、觅me下面的广告
					var csAd = res.data.csAd,
						csAdHtml = '<ul class="clearfix">';
					for(var i=0;i<csAd.length;i++){
						csAdHtml += '<li data-url="' + csAd[i].url + '"><img src="' + csAd[i].imgUrl + '" /></li>';
					}
					csAdHtml += '</ul>'
					$('#cs-content-ad').html(csAdHtml);

					// 享品质下面的广告
					var qualityAd = res.data.qualityAd,
						qualityAdHtml = '<ul class="clearfix">';
					for(var i=0;i<csAd.length;i++){
						qualityAdHtml += '<li data-url="' + qualityAd[i].url + '"><img src="' + qualityAd[i].imgUrl + '" /></li>';
					}
					qualityAdHtml += '</ul>'
					$('#quality-content-ad').html(qualityAdHtml);
				}
			})

			// 绑定一个事件（点击头部广告的叉号）
			$('.header-ad').on('click', '.header-ad-close', function(){
				$('.header-ad').fadeOut(function() {
					$('.shortcut').css({
						'marginTop': '80px'
					}).animate({
						'marginTop': '0'
					} ,800, function(){
						$('.shortcut').removeAttr('style');
					})
				});
			})
		},
		/*
		* 渲染尾部
		*/
		_renderFooter: function(){
			require(['assets/js/data/index/footer/footerData.js'], function(footerData){
				var footerData = $.extend(true, {}, footerData);
				$('.footer').html(footerTpl(footerData));
			})
		}
	};
	return renderStaticStructApp;
})