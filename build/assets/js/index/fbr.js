define(['assets/js/common/model.js',
	'viewTpl/index/fbr/fbr_tpl',
	'viewTpl/index/fbr/fbr_rank_detail_tpl',
	'assets/js/common/clamp.min.js'], 
	function(model, fbrTpl, fbrRankDetailTpl){
	var self;
	var rankData;
	var fbrApp = {
		init: function(){
			self = this;
			self._renderFbr();
			self._fbrEvent();
		},
		_renderFbr: function(){
			model.getFbrData().then(function(res){
				if(res.meta.status == 200){
					$('#fbr').html(fbrTpl(res.data));

					// 渲染轮播图
					$('#fbr .fbr-buy .fbr-buy-content').hyxuiSlideShow({
						'data': res.data.buy,
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

					rankData = res.data.rank.detail;

					$('.rank-content-nav li:not(.active-identifier):first').trigger('mouseenter');
				}
			})
		},
		_fbrEvent: function(){
			// 1.鼠标移入排行榜的nav
			$('#fbr').on('mouseenter', '.fbr-rank .rank-content-nav li:not(.active-identifier)', function(){
				var _index = $(this).index() - 1,
					_id = $(this).data('id'),
					$navActive = $('#fbr .rank-content-nav li.active-identifier');

				if($(this).data('id') == $navActive.attr('data-id')) return false;

				$navActive.attr('data-id', _id).stop().animate({
					'left': 20 * _index + 2.5 + '%'
				}, 200, function(){

				})

				var fbrRankHtml = fbrRankDetailTpl(rankData[_id]);
				$('#fbr .rank-content-detail').html(fbrRankHtml);

			})
		}
	};
	return fbrApp;
})