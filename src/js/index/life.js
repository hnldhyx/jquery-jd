define(['assets/js/common/model.js',
	'viewTpl/index/life/life_tpl',
	'assets/js/lib/jquery.hyxui.1.0.js'], 
	function(model, lifeTpl){

	var self;
	var lifeApp = {
		init: function(){
			self = this;
			self._renderLife();
			self._lifeEvent();
		},
		/*
		* 渲染享品质部分
		*/
		_renderLife: function(){
			model.getLifeData().then(function(res){
				if(res.meta.status == 200){
					$('#life').html(lifeTpl(res.data));

					var $lifeShortcut = $('.life-content-shortcut');
					$.each($lifeShortcut, function(i, item){
						$lifeShortcut.eq(i).hyxuiSlide({
							'data': res.data[i].shortcut,
							'isInfinit': true,
							'toggleBar': {
								'fixed': false
							},
							'rubberBanding': false, // 橡皮筋效果
							'slideLength': 1, // 每次点击滑动一张图
							'showLength': 5, // 每次展示的数量
							'animateTime': 1000
						});
					})
				}
			})
		},
		_lifeEvent: function(){
			
		}
	};
	return lifeApp
})