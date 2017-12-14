define(['assets/js/common/model.js',
	'viewTpl/index/quality/quality_tpl',
	'assets/js/lib/jquery.hyxui.1.0.js'], 
	function(model, qualityTpl){

	var self;
	var qualityApp = {
		init: function(){
			self = this;
			self._renderQuality();
			self._qualityEvent();
		},
		/*
		* 渲染享品质部分
		*/
		_renderQuality: function(){
			model.getQualityData().then(function(res){
				if(res.meta.status == 200){
					$('#quality').html(qualityTpl(res.data));

					$('#quality .quality-content .quality-content-big').hyxuiSlideShow({
						'data': res.data.large,
						'toggleType': 'blink',
						'toggleBar': {
							'show': true
						},
						'skipBar': {
							'show': false
						},
						'toggleDelay': 2000
					})
				}
			})
		},
		_qualityEvent: function(){
			
		}
	};
	return qualityApp
})