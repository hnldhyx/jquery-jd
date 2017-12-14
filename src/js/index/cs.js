define(['assets/js/common/model.js',
	'viewTpl/index/cs/cs_tpl',
	'assets/js/common/clamp.min.js'], 
	function(model, csTpl){
	var self;
	var csApp = {
		init: function(){
			self = this;
			self._renderCs();
			self._csEvent();
		},
		_renderCs: function(){
			model.getCsData().then(function(res){
				if(res.meta.status == 200){
					$('#cs').html(csTpl(res.data));

					// 渲染轮播图
					$('#cs .seek-content').hyxuiSlideShow({
						'data': res.data.seek.list,
						'toggleType': 'blink',
						'toggleBar': {
							'show': true,
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
		_csEvent: function(){
			
		}
	};
	return csApp;
})