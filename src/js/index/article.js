define(['assets/js/common/model.js',
	'assets/js/data/index/article/articleNavData.js',
	'viewTpl/index/article/article_tpl',
	'viewTpl/index/article/article_nav_tpl'], 
	function(model, articleNavData, articleTpl, articleNavTpl){

	var self;
	var articleApp = {
		init: function(){
			self = this;
			self._renderArticle();
			self._articleEvent();
		},
		/*
		* 渲染article部分（轮播图，导航栏等）
		*/
		_renderArticle: function(){
			var articleData = {}; 
			$.when(model.getArticleSlideData(), model.getArticleNewsData())
			.done(function(res1, res2){
				var res1 = res1[0],
					res2 = res2[0];
				if(res1.meta.status == 200 && res2.meta.status == 200){
					articleData.articleNavData = articleNavData;
					articleData.articleSlideData = res1.data.slideData;
					articleData.articleSlideExtendData = res1.data.slideExtendData;

					articleData.articleSidebarOnsale = res2.data.onsale;
					articleData.articleSidebarNotice = res2.data.notice;
					articleData.articleSidebarTools = res2.data.tools;
					
					$('.article').html(articleTpl(articleData));

					// 渲染轮播图
					$('.article-slide-wrap').hyxuiSlideShow({
						'data': articleData.articleSlideData,
						'toggleType': 'blink',
						'toggleBar': {
							'fixed': false
						},
						'skipBar': {
							'trigger': 'hover'
						},
						'toggleDelay': 2000
					});
				}
			})
		},
		_articleEvent: function(){
			// 1.左侧nav（防抖动暂未实现）
			$('.article').on('mouseenter', '.article-nav-trigger li', function(){
				var currentId = $(this).attr('data-id'),
					navDetailData = $.extend(true, {}, articleNavData.navDetailData),
					currentDetailData = navDetailData[currentId];
				var currentDetailDataHtml = articleNavTpl(currentDetailData);
				$(this).addClass('trigger').siblings().removeClass('trigger');
				$('.article-nav .article-nav-detail').show();
				$('.article-nav-detail').html(currentDetailDataHtml)
			}).on('mouseleave', '.article-nav', function(e){
				$('.article .trigger').removeClass('trigger');
				$('.article-nav .article-nav-detail').hide();
				$('.article-nav-detail').html('');
			});

			// 2.右侧公告栏
			$('.article').on('mouseenter', '.article-sidebar .sidebar-news-header .sidebar-news-toggle', function(){
				var $active = $(this).nextAll('.sidebar-news-active'),
					index = $(this).index();
				var map = {
					0: {
						'value': 'first',
						'content': 'onsale'
					},
					1: {
						'value': 'second',
						'content': 'notice'
					}
				}
				$active.attr('data-position', map[index].value);
				$('.sidebar-news-content-' + map[index].content).show().siblings().hide();
			})

			// 鼠标移入工具栏部分
			$('.article').on('mouseenter', '.sidebar-tools-item', function(e){
				if(!$(this).data('quick')){
					return false;
				}
				$('.sidebar-tools-item').eq(3).attr('data-toogle', 'ok');
				var _index = $(this).index();
				$('.sidebar-tools').slideUp(100);
				$('.sidebar-tools-quick').show().find('.tools-quick-header li').eq(_index).trigger('mouseenter');
			})

			// 鼠标移入工具栏头部
			$('.article').on('mouseenter', '.sidebar-tools-quick .tools-quick-header li', function(){
				// var 
				$(this).addClass('active').siblings().removeClass('active');

			})

			// 点击工具栏部分的叉号
			$('.article').on('click', '.tools-quick-exit', function(){
				$('.sidebar-tools-quick').hide();
				$('.sidebar-tools').slideDown(100);
			})

		}
	};
	return articleApp;
})