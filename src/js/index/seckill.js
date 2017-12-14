define(['assets/js/common/model.js',
	'assets/js/common/tool.js',
	'viewTpl/index/seckill/seckill_tpl',
	'assets/js/lib/jquery.hyxui.1.0.js'], 
	function(model, toolApp, seckillTpl){

	var self;
	var countdownTimer;
	var seckillApp = {
		init: function(){
			self = this;
			self._renderSeckill(function(){
				self._countDown();
				self._seckillEvent();
			});
		},
		/*
		* 渲染秒杀部分
		*/
		_renderSeckill: function(callback){
			model.getSeckillData().then(function(res){
				if(res.meta.status == 200){
					var seckillData = $.extend(true, {}, res.data);
					seckillData.countdownObj = {
						'hour': seckillData.countdown[0],
						'min': seckillData.countdown[1],
						'sec': seckillData.countdown[2]
					}
					$('#seckill').html(seckillTpl(seckillData));

					// 渲染滑动组件
					$('#seckill .seckill-content-manul').hyxuiSlide({
						'data': seckillData.manual,
						'isInfinit': true,
						'toggleBar': {
							'fixed': false
						},
						'rubberBanding': false, // 橡皮筋效果
						'slideLength': 1, // 每次点击滑动一张图
						'showLength': 5, // 每次展示的数量
						'animateTime': 1000
					});

					// 渲染轮播图
					$('#seckill .seckill-content-auto').hyxuiSlideShow({
						'data': seckillData.auto,
						'toggleType': 'blink',
						'toggleBar': {
							'show': false
						},
						'skipBar': {
							'trigger': 'hover'
						},
						'toggleDelay': 2000
					});

					callback && callback();
				}
			})
		},
		_countDown: function(){
			if(countdownTimer) clearInterval(countdownTimer);
			countdownTimer = setInterval(function(){
				var $timeParent = $('.seckill-header-time'),
					$hourArea = $timeParent.find('.seckill-header-time-hour'),
					$minArea = $timeParent.find('.seckill-header-time-min'),
					$secArea = $timeParent.find('.seckill-header-time-sec');
				var currentHour = parseInt($hourArea.html()),
					currentMin = parseInt($minArea.html()),
					currentSec = parseInt($secArea.html());

				if(currentHour == 0 && currentMin == 0 && currentSec == 0){
					clearInterval(countdownTimer);
					seckillApp._renderSeckill(function(){
						seckillApp._countDown();
					});
				}else if(currentHour != 0 && currentMin == 0 && currentSec == 0){
					$hourArea.html(toolApp._formatSingleDigit(currentHour - 1));
					$minArea.html('59');
					$secArea.html('59');
				}else if(currentMin != 0 && currentSec == 0){
					$minArea.html(toolApp._formatSingleDigit(currentMin - 1));
					$secArea.html('59');
				}else{
					$secArea.html(toolApp._formatSingleDigit(currentSec - 1));
				}
			},1000);
		},
		_seckillEvent: function(){
			
		}
	};
	return seckillApp
})