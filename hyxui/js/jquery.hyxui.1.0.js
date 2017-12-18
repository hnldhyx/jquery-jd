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


/*
* 下拉组件api
* 	1.examples:
*	2.documents:
*/

/*
* 弹窗组件api
* 	1.examples:
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
			/*
			* 挂在到DOM对象的jQuery对象上的方法
			*/
			$.fn.extend({
				// 轮播图
				'hyxuiSlideShow': function(param){
					return slideShowApp.slideShow(this, param);
				},
				'hyxyuSlideShowReset': function(){
					slideShowApp._resize(this);
				},
				// 滑动组件
				'hyxuiSlide': function(param){
					return slideApp.slide(this, param);
				},
				// 下拉组件
				'hyxuiDropdown': function(param){
					return dropDownApp.dropdown(this, param);
				},
				'hyxuiDropdownResize': function(){
					dropDownApp._hyxuiSlideResize();
				}
			});
			/*
			* 挂载到jQuery全局的方法
			*/
			$.extend({
				'hyxuiDialogOpen': function(param){
					return dialogApp.openDialog(param);
				},
				'hyxuiDialogClose': function(param){
					dialogApp.closeDialog('current', param);
				},
				'hyxuiDialogCloseAll': function(){
					dialogApp.closeDialog('all');
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
			currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1);

		slideShowApp.hyxuiSlideMap[currentId].timer = setInterval(function(){
			// $(elem).find('.hyxui-slide-togglebar-right').click();
			slideShowApp._hyxuiSlidePlay('right', elem, param);
		}, param.toggleDelay + param.animateTime);
	},
	// 播放
	_hyxuiSlidePlay: function(direction, elem, param){
		var $currentSlideWrap = $(elem).find('.hyxui-slideshow-wrap'),
			currentId = $currentSlideWrap.attr('id').substr($currentSlideWrap.attr('id').length-1),
			currentIndex = $(elem).find('.hyxui-slide-skipbar-item.hyxui-slide-active').index(),
			direction = direction,
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

		var direction = $(target).data('direction');
		slideShowApp._hyxuiSlidePlay(direction, elem, param);
	},
	_resize: function(elem){},
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

/*
* 下拉组件
*/
var dropDownApp = {
	dropdown: function(elem, param){
		try {
			if(elem.length>1) throw new Error('无法在相同类名的多个DOM元素中生成dropdown组件，若传入多个相同的类，默认取第一个dom元素生成该组件！');
		}catch(err){
			console.log(err);
		}

		elem = elem.eq(0);
		
		// 默认参数
		var defaults = {
			'placeholder': '',
			'width': 'auto',
			'data': []
		};
		var options = $.extend(true, defaults, param);

		// 各种参数
		var placeholder = options.placeholder,
			width = options.width,
			data = options.data;

		// 触发框
		var dropdownCount = $('.hyxui-dropdown-trigger').length;
		var triggerHtml = '';

		var selectedTxt,
			selectedVal,
			selectedComment;

		var _selectedFlag = true;
		var itemHtml = '';
		for(var i=0;i<data.length; i++){
			if(data[i].selected && _selectedFlag){
				selectedTxt = typeof data[i].text === 'undefined' ? '' : data[i].text;
				selectedVal = typeof data[i].value === 'undefined' ? '' : data[i].value;
				selectedComment = typeof data[i].comment === 'undefined' ? '' : data[i].comment;
				_selectedFlag = false;
			}

			if(typeof data[i].comment == 'undefined'){
				itemHtml += '<li class="dropdown-bd-item" data-value="' + data[i].value + '">' + data[i].text + '</li>'
			}else{
				itemHtml += '<li class="dropdown-bd-item" data-comment="' + data[i].comment + '" data-value="' + data[i].value + '">' + data[i].text + '</li>'
			}
			
		}

		if(typeof selectedVal === 'undefined'){
			triggerHtml += '<div id="hyxui-dropdown-trigger'+dropdownCount+'" style="width: ' + width + '" class="hyxui-dropdown-trigger hyxui-placeholder" data-status="close">'
			triggerHtml	+= '<span class="hyxui-dropdown-trigger-text">' + placeholder + '</span>'
			triggerHtml	+= '<span class="hyxui-dropdown-trigger-icon"></span>'
			triggerHtml += '</div>';
		}else{
			triggerHtml += '<div id="hyxui-dropdown-trigger'+dropdownCount+'" style="width: ' + width + '" class="hyxui-dropdown-trigger" data-status="close" data-val="'+selectedVal+'" data-comment="'+selectedComment+'">'
			triggerHtml	+= '<span class="hyxui-dropdown-trigger-text">' + selectedTxt + '</span>'
			triggerHtml	+= '<span class="hyxui-dropdown-trigger-icon"></span>'
			triggerHtml += '</div>';
		}

		$(elem).append(triggerHtml);
		// 点击触发框
		var $triggerArea = $(elem).children('.hyxui-dropdown-trigger');

		$triggerArea.css({
			height: $(elem).height(),
			lineHeight: $(elem).height()-2 + 'px'
		})

		$triggerArea.on('click', function(){
			$('.dropdown-menu').remove();
			if($(this).attr('data-status') == 'open'){
				$(this).attr('data-status','close');
				return;
			}else{
				$(this).attr('data-status','open');
			}
			
			var listHtml = '';
			listHtml += '<div id="dropdown-menu'+dropdownCount+'" class="hyx-dropdown-bd dropdown-menu" style="width: ' + $triggerArea.outerWidth() + 'px">';
			listHtml += '<ul class="dropdown-bd">' + itemHtml + '</ul></div>';

			$(listHtml).appendTo('body').css({
				'top': $triggerArea.offset().top + $triggerArea.outerHeight(),
				'left': $triggerArea.offset().left
			});



		})
	},
	_hyxuiDropdownEvent: (function(){
		$(document).on('click', function(e){
			var $tar = $(e.target);
			if($tar.closest('.hyxui-dropdown-trigger').length == 1){
				return;
			}

			if($tar.closest('.dropdown-menu').length == 1){
				return;
			}

			$('.dropdown-menu').remove();
			$('.hyxui-dropdown-trigger').attr('data-status','close');
		});

		$(document).on('click', '.dropdown-bd li.dropdown-bd-item', function(){
			var id = $(this).closest('.hyx-dropdown-bd').attr('id'),
				identifier = id[id.length-1];
				$currentTrigger = $('#hyxui-dropdown-trigger' + identifier);
			
			var dropText = $(this).text(),
				dropValue = $(this).data('value'),
				dropComment = $(this).data('comment');

			$(this).closest('.hyx-dropdown-bd').remove();
			$currentTrigger.attr('data-status','close')
				.attr('data-val',dropValue).attr('data-comment',dropComment)
				.removeClass('hyxui-placeholder')
				.find('.hyxui-dropdown-trigger-text').text(dropText);

			if(typeof dropComment == 'undefined'){
				$currentTrigger.removeAttr('data-comment');
			}
		}).on('mouseenter', '.dropdown-bd li.dropdown-bd-item', function(){
			$(this).addClass('active');
		}).on('mouseleave', '.dropdown-bd li.dropdown-bd-item', function(){
			$(this).removeClass('active');
		})

		$(window).on('resize', function(){
			dropDownApp._hyxuiSlideResize();
		})
	})(),
	_hyxuiSlideResize(){
		var $currentTrigger = $('.hyxui-dropdown-trigger[data-status="open"]');
			$currentDrop = $('.hyx-dropdown-bd:visible');
		if($currentTrigger.length != 0 && $currentDrop != 0){
			$currentDrop.css({
				'top': $currentTrigger.offset().top + $currentTrigger.outerHeight(),
				'left': $currentTrigger.offset().left,
				'width': $currentTrigger.outerWidth()
			})
		}
	}
};

/*
* 弹窗组件
*/
var dialogApp = {
	openDialog: function(param){
		var defaults = {
			'title': '信息',
			'area': 'auto',
			'btn': ['确认'],
			'content': ''
		}

		var options = $.extend(true, defaults, param);

		var title = options.title,
			dialogWidth = parseInt(options.area[0]) + 'px',
			dialogHeight = parseInt(options.area[1]) + 'px',
			content = options.content;
		var dialogCount = $('.hyxui-layer-dialog').length; // 统计当前弹窗的数量

		// 各种参数
		if(options.area == 'auto'){
			dialogWidth = 'auto',
			dialogHeight = 'auto';
		}

		// 阴影层
		var shadowHtml = '<div id="hyxui-layer-shade' + dialogCount + '" class="hyxui-layer-shade" style="z-index: 100;background-color: #000;opacity: 0.3;filter:alpha(opacity=30);"></div>'

		// 弹出层的按钮
		var btnHtml = '';
		for(var i=0; i<options.btn.length; i++){
			if(i == 0){
				btnHtml += '<a class="hyxui-layer-btn' + i + ' btn btn-primary btn-sm">' + options.btn[i] + '</a>';
			}else{
				btnHtml += '<a class="hyxui-layer-btn' + i + ' btn btn-default btn-sm">' + options.btn[i] + '</a>';
			}
			
		}

		// 计算屏幕高度和弹窗内容高度
		var screenHeight = document.documentElement.clientHeight,
			screenWidth = document.documentElement.clientWidth;
		var top = (screenHeight - parseInt(dialogHeight)) / 2,
			left = (screenWidth - parseInt(dialogWidth)) / 2;
		// 弹出层整体框架
		var dialogHtml = '';
		dialogHtml += '<div class="hyxui-layer hyxui-layer-dialog" id="hyxui-layer'+dialogCount+'" style="width:'+dialogWidth+'; height:'+dialogHeight+'; top:'+top+'px; left:'+left+'px;">';
		dialogHtml += '<div class="hyxui-layer-title" title="' + title + '">' + title + '</div><div class="hyxui-layer-content" style="height:'+(parseInt(dialogHeight)-76)+'px">' + content + '</div>';
		dialogHtml += '<div class="hyxui-layer-btn">' + btnHtml + '</div>';

		$('body').append(shadowHtml).append(dialogHtml);

		dialogApp.resizeDialog();
		param.success && param.success(dialogCount);

		// 绑定按钮事件
		$('#hyxui-layer' + dialogCount).find('.hyxui-layer-btn').on('click', 'a.btn', function(){
			var _index = $(this).index()+1;
			var btn = 'btn' + _index;
			if(typeof options[btn] == 'function'){
				options[btn]();
			}else{
				if(_index === 1 || _index === 2){
					dialogApp.closeDialog('current', dialogCount)
				}
			}
		})

		return dialogCount;
	},
	closeDialog(type, _index){
		if(type == 'all'){
			$('.hyxui-layer-dialog').remove();
			$('.hyxui-layer-shade').remove();
		}else if(type == 'current'){
			$('#hyxui-layer' + _index).remove();
			if($('.hyxui-layer-dialog').length == 0){
				$('.hyxui-layer-shade').remove();
			}
		}
	},
	resizeDialog(){
		var screenHeight = document.documentElement.clientHeight,
			screenWidth = document.documentElement.clientWidth;
		var $dialogArea = $('.hyxui-layer');
		$.each($dialogArea, function(i, item){
			var $currentDialog = $dialogArea.eq(i);
			$currentDialog.css({
				'top': (screenHeight - $currentDialog.height()) / 2 + 'px',
				'left': (screenWidth - $currentDialog.width()) / 2 + 'px'
			})
		})
	},
	hyxuiDailogEvent: (function(){
		$(window).on('resize', function(){
			dialogApp.resizeDialog();
		})
	})()
};