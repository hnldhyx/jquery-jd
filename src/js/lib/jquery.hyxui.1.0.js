/*
*	轮播图api:
*		1.examples:
*			$('.slide-wrap1').hyxuiSlideShow({
*				'data': [{
*					'imgUrl': './images/1.png',
*					'url': 'xxxxxxx'
*				},{
*					'imgUrl': './images/2.png',
*					'url': 'xxxxxxx'
*				},{
*					'imgUrl': './images/3.png',
*					'url': 'xxxxxxx'
*				},{
*					'imgUrl': './images/4.png',
*					'url': 'xxxxxxx'
*				},{
*					'imgUrl': './images/5.png',
*					'url': 'xxxxxxx'
*				}],
*				'isInfinit': true,
*				'toggleBar': {
*					'show': true,
*					'fixed': true
*				},
*				'skipBar': {
*					'show': true,
*					'position': 'center',
*					'trigger': 'click'
*				},
*				'toggleType': 'blink',
*				'toggleDelay': 2000,
*				'animateTime': 1000
*			})
*
*		2.documents:
*/

/*
* 滑动切换组件api:
*	1.examples:
*	2.documents:
*/

;(function($){
	var app = {
		init: function(){
			this.methods();
		},
		methods: function(){
			app.init();
		},
		init: function(){
			$.fn.extend({
				'hyxuiSlideShow': function(param){
					return slideShowApp.slideShow(this, param);
				},
				'hyxyuSlideShowReset': function(){
					slideShowApp._resize(this);
				},
				'hyxuiSlide': function(param){
					return slideApp.slide(this, param);
				}
			})
		}
	};
	app.init();
})(jQuery);

/*
* 轮播图组件部分
*/
var slideShowApp = {
	hyxuiSlideMap: {},
	slideShow: function(elem, param){
		if((!param.data || param.data.length == 0 || param.data == null) && (param.content == '' || !param.content)){
			throw new Error('data或content必选其一！');
		}

		if($(elem).hasClass('hyxui-slideshow-container')){
			throw new Error('该dom元素已被初始化，不能重复初始化');
		}

		var defaults = {
			'isInfinit': true,
			'toggleBar': {
				'show': true,
				'fixed': true
			},
			'skipBar': {
				'show': true,
				'position': 'center',
				'trigger': 'click'
			},
			'toggleType': 'blink',
			'toggleDelay': 2000,
			'animateTime': 1000
		}

		var options = $.extend(true, defaults, param);

		var hyxuiSlideIndicator = slideShowApp._renderBasicStruct(elem, options);

		return hyxuiSlideIndicator;
	},
	// 渲染基础（公共结构）
	_renderBasicStruct: function(elem, param){

		var itemLength = param.data.length,
			itemWidth = $(elem).width();

		var hyxuiSlideCount = $('.hyxui-slideshow-wrap').length;

		var basicStructImg = '';
		for(var i=0; i<param.data.length; i++){
			if(param.data[i].url){
				basicStructImg += '<li data-url="' + param.data[i].url + '" class="hyxui-slideshow-item">';
				basicStructImg += '<img style="cursor:pointer;" src="' + param.data[i].imgUrl + '" /></li>'
			}else{
				basicStructImg += '<li class="hyxui-slideshow-item"><img src="' + param.data[i].imgUrl + '" /></li>';
			}
			
		}

		if(param.toggleType == 'slide'){
			basicStructImg += basicStructImg;
		}

		var basicStructHtml = '';
		basicStructHtml += '<ul id="hyxui-slide-show-wrap-' + hyxuiSlideCount + '" class="hyxui-slideshow-wrap clearfix">' + basicStructImg + '</ul>'

		slideShowApp.hyxuiSlideMap[hyxuiSlideCount] = {};

		$(elem)	.append(basicStructHtml)
				.css({
					'position': 'relative',
					'overflow': 'hidden'
				})
				.addClass('hyxui-slideshow-container')
				.children('ul')
				.width(itemWidth * itemLength)
				.css({
					'position': 'absolute'
				})
				.children('.hyxui-slideshow-item').width(itemWidth)
				.children('img').width(itemWidth).height($(elem).height());
				

		if(param.toggleType == 'slide'){
			$(elem).children('ul').width(itemWidth * itemLength * 2);
		}

		// 渲染私有样式
		slideShowApp._renderSelfStruct(elem, param);

		return hyxuiSlideCount;
	},
	// 渲染私有结构
	_renderSelfStruct: function(elem, param){
		var itemLength = param.data.length,
			itemWidth = $(elem).width();

		var skipBar = param.skipBar,
			toggleBar = param.toggleBar;

		// skipBar
		var skipBarHtml = '';
		if(skipBar.show){
			skipBarHtml += '<div class="hyxui-slide-skipbar">';
		}else{
			skipBarHtml += '<div class="hyxui-slide-skipbar" style="display:none;">';
		}
		
		for(var i=0;i<itemLength;i++){
			if(i == 0){
				skipBarHtml += '<span class="hyxui-slide-skipbar-item hyxui-slide-active"></span>';
			}else{
				skipBarHtml += '<span class="hyxui-slide-skipbar-item"></span>';
			}
		}
		skipBarHtml += '</div>';
		$(elem).append(skipBarHtml);
		if(param.skipBar.position == 'center'){
			$(elem).find('.hyxui-slide-skipbar').css({
				'left': '50%',
				'-webkit-transform': 'translateX(-50%)',
				'-moz-transform': 'translateX(-50%)',
				'-o-transform': 'translateX(-50%)',
				'-mstransform': 'translateX(-50%)',
				'transform': 'translateX(-50%)'
			})
		}else if(param.skipBar.position == 'left'){
			$(elem).find('.hyxui-slide-skipbar').css({
				'left': '20px',
			})
		}else if(param.skipBar.position == 'right'){
			$(elem).find('.hyxui-slide-skipbar').css({
				'right': '20px',
			})
		}

		// toggleBar（isInfinit未做）
		var toggleBarHtml = '';

		if(toggleBar.show){
			if(!toggleBar.fixed){
				toggleBarHtml += '<div class="hyxui-slide-togglebar" style="display: none;">';
			}else{
				toggleBarHtml += '<div class="hyxui-slide-togglebar">';
			}
		}else{
			toggleBarHtml += '<div class="hyxui-slide-togglebar" style="opacity:0">';
		}
		
		toggleBarHtml += '<div data-direction="left" class="hyxui-slide-togglebar-btn hyxui-slide-togglebar-left"><</div>';
		toggleBarHtml += '<div data-direction="right" class="hyxui-slide-togglebar-btn hyxui-slide-togglebar-right">></div></div>';
		$(elem).append(toggleBarHtml);

		slideShowApp._hyxuiSlideAutoplay(elem, param);
		slideShowApp._hyxuiSlideEvent(elem, param);
	},
	// 自动播放
	_hyxuiSlideAutoplay: function(elem, param){
		var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
			currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1),
			currentIndex = $(elem).find('.hyxui-slide-skipbar-item.hyxui-slide-active').index(),
			itemLength = param.data.length,
			itemWidth = $(elem).width();
		var animateFlag = true;

		slideShowApp.hyxuiSlideMap[currentId].timer = setInterval(function(){
			$(elem).find('.hyxui-slide-togglebar-right').click();
		}, param.toggleDelay + param.animateTime);
	},
	// 事件绑定
	_hyxuiSlideEvent: function(elem, param){
		// 鼠标悬停，停止轮播
		$(elem).on('mouseover', function(){
			var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
				currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1);
			clearInterval(slideShowApp.hyxuiSlideMap[currentId].timer);
			$(elem).find('.hyxui-slide-togglebar').show();
		}).on('mouseout',function(){
			if(!param.toggleBar.fixed){
				$(elem).find('.hyxui-slide-togglebar').hide();
			}
			slideShowApp._hyxuiSlideAutoplay(elem, param)
		})

		// 点击下方圆点切换
		var skipbarTrigger = param.skipBar.trigger;
		if(skipbarTrigger == 'hover') skipbarTrigger = 'mouseenter'
		$(elem).on(skipbarTrigger, '.hyxui-slide-skipbar-item', function(){
			slideShowApp._skipBarPlay(this, elem, param);
		});
		
		// 点击左右键切换
		$(elem).on('click', '.hyxui-slide-togglebar-btn', function(){
			slideShowApp._toggleBarPlay(this, elem, param);
		})
	},
	// 跳转
	_skipBarPlay: function(target, elem, param){
		if($(target).hasClass('hyxui-slide-active')) return;
		var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
			currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1),
			currentIndex = $(elem).find('.hyxui-slide-skipbar-item.hyxui-slide-active').index(),
			targetIndex = $(target).index(),
			itemLength = param.data.length,
			itemWidth = $(elem).width();
		var slideType = param.toggleType;

		$(target).addClass('hyxui-slide-active').siblings().removeClass('hyxui-slide-active');

		if(slideType == 'slide'){
			$currentSlideWrap.stop().animate({
				'left': -targetIndex * itemWidth
			},1000)
		}else{
			$currentSlideWrap.fadeOut(200, function(){
				$currentSlideWrap.css({
					'left': -targetIndex * itemWidth
				}).fadeIn(300);
			})
		}
	},
	// 左右切换
	_toggleBarPlay: function(target, elem, param){
		if($(target).hasClass('forbidden')) return;
		var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
			currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1),
			currentIndex = $(elem).find('.hyxui-slide-skipbar-item.hyxui-slide-active').index(),
			direction = $(target).data('direction'),
			itemLength = param.data.length,
			itemWidth = $(elem).width();
		var slideType = param.toggleType;


		if(param.toggleType == 'blink'){
			currentIndex = currentIndex == 0 && direction == 'left' ? itemLength : currentIndex;
			currentIndex = currentIndex == itemLength - 1 && direction == 'right' ? -1 : currentIndex;
		}else{
			if(currentIndex == 0 && direction == 'left'){
				currentIndex = itemLength;
				$currentSlideWrap.css({
					'left': -currentIndex * itemWidth
				})
			}else if(currentIndex == 0 && direction == 'right'){
				currentIndex = 0;
				$currentSlideWrap.css({
					'left': 0
				})
			}
		}
		

		var targetIndex = direction == 'right' ? currentIndex + 1 : currentIndex - 1;

		$(elem).find('.hyxui-slide-skipbar-item').eq(targetIndex%itemLength).addClass('hyxui-slide-active').siblings().removeClass('hyxui-slide-active');

		if(slideType == 'slide'){
			$currentSlideWrap.stop().animate({
				'left': -targetIndex * itemWidth
			},1000)
		}else{
			$currentSlideWrap.fadeOut(200, function(){
				$currentSlideWrap.css({
					'left': -targetIndex * itemWidth
				}).fadeIn(300);
			})
		}
	},
	_resize: function(elem){
		
	}
};

/*
* 滑动组件部分
*/
var slideApp = {
	canSlide: true,
	slide: function(elem, param){
		if(!param.data || param.data.length == 0 || param.data == null){
			throw new Error('data为必选项');
		}
		var defaults = {
			'isInfinit': true,
			'toggleBar': {
				'fixed': false
			},
			'rubberBanding': false, // 橡皮筋效果
			'slideLength': 1, // 每次点击滑动一张图
			'showLength': 5, // 每次展示的数量
			'animateTime': 1000
		}

		var options = $.extend(true, defaults, param);

		var hyxuiSlideIndicator = slideApp._renderBasicStruct(elem, options);

		return hyxuiSlideIndicator;
	},
	_renderBasicStruct: function(elem, param){
		var itemLength = param.data.length,
			wrapWidth = $(elem).width(),
			itemWidth = wrapWidth / param.showLength;
		var hyxuiSlideCount = $('.hyxui-slide-wrap').length;

		var basicStructImg = '';
		for(var i=0; i<param.data.length; i++){
			if(param.data[i].url){
				basicStructImg += '<li data-url="' + param.data[i].url + '" class="hyxui-slide-item">';
				basicStructImg += '<div class="hyxui-slide-imgholder"><img style="cursor:pointer;" src="' + param.data[i].imgUrl + '" /></div></li>'
			}else{
				basicStructImg += '<li class="hyxui-slide-item"><img src="' + param.data[i].imgUrl + '" /></li>';
			}
			
		}

		var basicStructHtml = '';
		basicStructHtml += '<ul id="hyxui-slide-wrap-' + hyxuiSlideCount + '" class="hyxui-slide-wrap clearfix">' + basicStructImg + '</ul>'

		$(elem)	.append(basicStructHtml)
				.css({
					'position': 'relative',
					'overflow': 'hidden'
				})
				.addClass('hyxui-slide-container')
				.children('ul')
				.width(itemWidth * itemLength)
				.css({
					'position': 'absolute'
				})
				.children('.hyxui-slide-item').outerWidth(itemWidth)
				.children('img')
				.css({
					'maxWidth': itemWidth,
					'maxHeight': $(elem).height()
				})
				
		// toggle bar
		var toggleBar = param.toggleBar;
		var toggleBarHtml = '';
		
		if(!toggleBar.fixed){
			toggleBarHtml += '<div class="hyxui-slide-togglebar" style="display: none;">';
		}else{
			toggleBarHtml += '<div class="hyxui-slide-togglebar">';
		}
		
		toggleBarHtml += '<div data-direction="left" class="hyxui-slide-togglebar-btn hyxui-slide-togglebar-left"><</div>';
		toggleBarHtml += '<div data-direction="right" class="hyxui-slide-togglebar-btn hyxui-slide-togglebar-right">></div></div>';
		$(elem).append(toggleBarHtml);


		// 渲染私有样式
		slideApp._renderSelfStruct(elem, param);

		return hyxuiSlideCount;
	},
	_renderSelfStruct: function(elem, param){
		var itemLength = param.data.length,
			wrapWidth = $(elem).width(),
			itemWidth = wrapWidth / param.showLength;
		// text-holder-area
		for(var i=0;i<param.data.length;i++){
			if(param.data[i].text){
				var textHtml = '';
				textHtml += '<div class="hyxui-slide-textholder style=height:26%"><div class="hyxui-slide-text-title">' + param.data[i].text + '</div>';
				textHtml += '<div class="hyxui-slide-text-price"><span class="hyxui-slide-text-promotion-price"><i>￥</i><span>' + param.data[i].promotionPrice + '</span></span>'
				textHtml += '<span class="hyxui-slide-text-original-price"><i>￥</i><del>' + param.data[i].originalPrice + '</del></span></div></div>'
				$(elem).find('.hyxui-slide-imgholder').eq(i).css({
					'height': '74%'
				}).parent().append(textHtml);
			}
		}

		if(param.isInfinit){
			$(elem).children('.hyxui-slide-wrap').append($(elem).find('.hyxui-slide-item').clone()).width(itemWidth * itemLength * 2);
		}

		slideApp._hyxuiSlideEvent(elem, param);
	},
	_hyxuiSlideEvent: function(elem, param){
		$(elem).on('mouseenter', function(){
			$(elem).find('.hyxui-slide-togglebar').show();
		}).on('mouseleave', function(){
			if(!param.toggleBar.fixed){
				$(elem).find('.hyxui-slide-togglebar').hide();
			}
		});

		// 点击左右键切换
		$(elem).on('click', '.hyxui-slide-togglebar-btn', function(){
			slideApp._toggleBarPlay(this, elem, param);
		})
	},
	_toggleBarPlay: function(target, elem, param){
		if($(target).hasClass('forbidden') || !slideApp.canSlide) return;

		slideApp.canSlide = false;

		var $currentSlideWrap = $(elem).find('.hyxui-slide-wrap'),
			currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1),
			direction = $(target).data('direction'),
			itemLength = param.data.length,
			itemWidth = $(elem).find('.hyxui-slide-item').outerWidth(),
			wrapWidth = $(elem).width();
		var currentIndex = Math.abs($(elem).find('.hyxui-slide-wrap').position().left / itemWidth) * param.slideLength,
			targetIndex;

		if(direction == 'left' && currentIndex == 0){
			currentIndex = itemLength;
			$currentSlideWrap.css({
				'left': -itemWidth * currentIndex
			})
		}else if(direction == 'right' && currentIndex == itemLength){
			currentIndex = -1;
			$currentSlideWrap.css({
				'left': 0
			})
		}

		targetIndex = direction == 'right' ? targetIndex =  currentIndex + 1 : targetIndex =  currentIndex - 1;

		$currentSlideWrap.animate({
			'left': -itemWidth * (param.slideLength * targetIndex)
		}, function(){
			slideApp.canSlide = true;
		})	

	}
};

















































/*var hyxuiSlideMap = {};
function slideShow(elem, param){
	if(!param.data || param.data.length == 0 || param.data == null){
		throw new Error('data为必选项');
	}
	var defaults = {
		'isInfinit': true,
		'toggleBar': {
			'show': true,
			'fixed': true
		},
		'skipBar': {
			'show': true,
			'position': 'center',
			'trigger': 'click'
		},
		'toggleType': 'blink',
		'toggleDelay': 2000,
		'animateTime': 1000
	}

	var options = $.extend(true, defaults, param);

	var hyxuiSlideIndicator = _renderBasicStruct(elem, options);

	return hyxuiSlideIndicator;
}

// 渲染基础（公共结构）
function _renderBasicStruct(elem, param){

	var itemLength = param.data.length,
		itemWidth = $(elem).width();

	var hyxuiSlideCount = $('.hyxui-slideshow-wrap').length;

	var basicStructImg = '';
	for(var i=0; i<param.data.length; i++){
		if(param.data[i].url){
			basicStructImg += '<li data-url="' + param.data[i].url + '" class="hyxui-slideshow-item">';
			basicStructImg += '<img style="cursor:pointer;" src="' + param.data[i].imgUrl + '" /></li>'
		}else{
			basicStructImg += '<li class="hyxui-slideshow-item"><img src="' + param.data[i].imgUrl + '" /></li>';
		}
		
	}

	if(param.toggleType == 'slide'){
		basicStructImg += basicStructImg;
	}

	var basicStructHtml = '';
	basicStructHtml += '<ul id="hyxui-slideshow-wrap-' + hyxuiSlideCount + '" class="hyxui-slideshow-wrap clearfix">' + basicStructImg + '</ul>'

	hyxuiSlideMap[hyxuiSlideCount] = {};

	$(elem)	.append(basicStructHtml)
			.css({
				'position': 'relative',
				'overflow': 'hidden'
			})
			.children('ul')
			.width(itemWidth * itemLength)
			.css({
				'position': 'absolute'
			})
			.children('.hyxui-slideshow-item').width(itemWidth)
			.children('img').width(itemWidth).height($(elem).height());
			

	if(param.toggleType == 'slide'){
		$(elem).children('ul').width(itemWidth * itemLength * 2);
	}

	// 渲染私有样式
	_renderSelfStruct(elem, param);

	return hyxuiSlideCount;
}

// 渲染私有结构
function _renderSelfStruct(elem, param){
	var itemLength = param.data.length,
		itemWidth = $(elem).width();

	var skipBar = param.skipBar,
		toggleBar = param.toggleBar;

	// skipBar
	var skipBarHtml = '';
	if(skipBar.show){
		skipBarHtml += '<div class="hyxui-slide-skipbar">'
		for(var i=0;i<itemLength;i++){
			if(i == 0){
				skipBarHtml += '<span class="hyxui-slide-skipbar-item hyxui-slide-active"></span>';
			}else{
				skipBarHtml += '<span class="hyxui-slide-skipbar-item"></span>';
			}
		}
		skipBarHtml += '</div>';
		$(elem).append(skipBarHtml);
		if(param.skipBar.position == 'center'){
			$(elem).find('.hyxui-slide-skipbar').css({
				'left': '50%',
				'-webkit-transform': 'translateX(-50%)',
				'-moz-transform': 'translateX(-50%)',
				'-o-transform': 'translateX(-50%)',
				'-mstransform': 'translateX(-50%)',
				'transform': 'translateX(-50%)'
			})
		}else if(param.skipBar.position == 'left'){
			$(elem).find('.hyxui-slide-skipbar').css({
				'left': '20px',
			})
		}else if(param.skipBar.position == 'right'){
			$(elem).find('.hyxui-slide-skipbar').css({
				'right': '20px',
			})
		}
	}

	// toggleBar（isInfinit未做）
	var toggleBarHtml = '';
	if(toggleBar.show){
		if(!toggleBar.fixed){
			toggleBarHtml += '<div class="hyxui-slide-togglebar" style="display: none;">';
		}else{
			toggleBarHtml += '<div class="hyxui-slide-togglebar">';
		}
		toggleBarHtml += '<div data-direction="left" class="hyxui-slide-togglebar-btn hyxui-slide-togglebar-left"><</div>';
		toggleBarHtml += '<div data-direction="right" class="hyxui-slide-togglebar-btn hyxui-slide-togglebar-right">></div></div>';
		$(elem).append(toggleBarHtml);

	}

	_hyxuiSlideAutoplay(elem, param);
	_hyxuiSlideEvent(elem, param);
}

// 自动播放
function _hyxuiSlideAutoplay(elem, param){
	var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
		currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1),
		currentIndex = $(elem).find('.hyxui-slide-skipbar-item.hyxui-slide-active').index(),
		itemLength = param.data.length,
		itemWidth = $(elem).width();
	var animateFlag = true;

	hyxuiSlideMap[currentId].timer = setInterval(function(){
		$(elem).find('.hyxui-slide-togglebar-right').click();
		// console.log('a');
	}, param.toggleDelay + param.animateTime);
}

function _hyxuiSlideEvent(elem, param){

	// 鼠标悬停，停止轮播
	$(elem).on('mouseover', function(){
		var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
			currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1);
		clearInterval(hyxuiSlideMap[currentId].timer);
		$(elem).find('.hyxui-slide-togglebar').show();
	}).on('mouseout',function(){
		if(!param.toggleBar.fixed){
			$(elem).find('.hyxui-slide-togglebar').hide();
		}
		_hyxuiSlideAutoplay(elem, param)
	})

	// 点击下方圆点切换
	var skipbarTrigger = param.skipBar.trigger;
	if(skipbarTrigger == 'hover') skipbarTrigger = 'mouseenter'
	$(elem).on(skipbarTrigger, '.hyxui-slide-skipbar-item', function(){
		_skipBarPlay(this, elem, param);
	});
	
	// 点击左右键切换
	$(elem).on('click', '.hyxui-slide-togglebar-btn', function(){
		_toggleBarPlay(this, elem, param);
	})
}

function  _skipBarPlay(target, elem, param){
	if($(target).hasClass('hyxui-slide-active')) return;
	var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
		currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1),
		currentIndex = $(elem).find('.hyxui-slide-skipbar-item.hyxui-slide-active').index(),
		targetIndex = $(target).index(),
		itemLength = param.data.length,
		itemWidth = $(elem).width();
	var slideType = param.toggleType;

	$(target).addClass('hyxui-slide-active').siblings().removeClass('hyxui-slide-active');

	if(slideType == 'slide'){
		$currentSlideWrap.stop().animate({
			'left': -targetIndex * itemWidth
		},1000)
	}else{
		$currentSlideWrap.fadeOut(200, function(){
			$currentSlideWrap.css({
				'left': -targetIndex * itemWidth
			}).fadeIn(300);
		})
	}
}

function  _toggleBarPlay(target, elem, param){
	if($(target).hasClass('forbidden')) return;
	var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
		currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1),
		currentIndex = $(elem).find('.hyxui-slide-skipbar-item.hyxui-slide-active').index(),
		direction = $(target).data('direction'),
		itemLength = param.data.length,
		itemWidth = $(elem).width();
	var slideType = param.toggleType;


	if(param.toggleType == 'blink'){
		currentIndex = currentIndex == 0 && direction == 'left' ? itemLength : currentIndex;
		currentIndex = currentIndex == itemLength - 1 && direction == 'right' ? -1 : currentIndex;
	}else{
		if(currentIndex == 0 && direction == 'left'){
			currentIndex = itemLength;
			$currentSlideWrap.css({
				'left': -currentIndex * itemWidth
			})
		}else if(currentIndex == 0 && direction == 'right'){
			currentIndex = 0;
			$currentSlideWrap.css({
				'left': 0
			})
		}
	}
	

	var targetIndex = direction == 'right' ? currentIndex + 1 : currentIndex - 1;

	$(elem).find('.hyxui-slide-skipbar-item').eq(targetIndex%itemLength).addClass('hyxui-slide-active').siblings().removeClass('hyxui-slide-active');

	if(slideType == 'slide'){
		$currentSlideWrap.stop().animate({
			'left': -targetIndex * itemWidth
		},1000)
	}else{
		$currentSlideWrap.fadeOut(200, function(){
			$currentSlideWrap.css({
				'left': -targetIndex * itemWidth
			}).fadeIn(300);
		})
	}
}*/

