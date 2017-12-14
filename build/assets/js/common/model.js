define([], function(){
	var baseUrl = '/assets/js/data/';
	var modelApp = {
		/*
		* 获取广告信息
		*/
		getAdInfo: function(){
			return $.ajax({
				url: baseUrl + 'index/advertisement/advertisement.json'
			})
		},
		/*
		* 获取当前地址的接口
		*/
		'getCurrentAddr': function(){
			return $.ajax({
				url: baseUrl + 'index/shortcut/currentCity.json'
			})
		},
		/*
		* 获取搜索中的placeholder文字和搜索框下面的快速搜索内容以及连接的url
		*/
		'getHeaderInfo': function(){
			return $.ajax({
				url: baseUrl + 'index/header/headerInfo.json'
			})
		},
		/*
		* 初始化购物车数量的接口
		*/
		'initCartInfo': function(){
			return $.ajax({
				url: baseUrl + 'index/header/initCart.json'
			})
		},
		/*
		* 获取购物车数据
		*/
		'getHeaderCart': function(){
			return $.ajax({
				url: baseUrl + 'index/header/headerCart.json'
			})
		},
		/*
		* 获取轮播部分的数据
		*/
		'getArticleSlideData': function(){
			return $.ajax({
				url: baseUrl + 'index/article/articleSlideData.json'
			})
		},
		/*
		* 获取新闻（促销，通知）部分数据
		*/
		'getArticleNewsData': function(){
			return $.ajax({
				url: baseUrl + 'index/article/articleNewsData.json'
			})
		},
		/*
		* 获取秒杀部分数据
		*/
		'getSeckillData': function(){
			return $.ajax({
				url: baseUrl + 'index/seckill/seckillData.json'
			})
		},
		/*
		* 获取fbr部分数据
		*/
		'getFbrData': function(){
			return $.ajax({
				url: baseUrl + 'index/fbr/fbrData.json'
			})
		},
		/*
		* 获取cs（领券中心、觅me）部分数据
		*/
		'getCsData': function(){
			return $.ajax({
				url: baseUrl + 'index/cs/csData.json'
			})
		},
		/*
		* 获取享品质部分数据
		*/
		'getQualityData': function(){
			return $.ajax({
				url: baseUrl + 'index/quality/qualityData.json'
			})
		},
		/*
		* 获取爱生活部分数据
		*/
		'getLifeData': function(){
			return $.ajax({
				url: baseUrl + 'index/life/lifeData.json'
			})
		}
	};
	return modelApp;
})