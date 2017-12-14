define([], function(){
	var toolApp = {
		/*
		* 将个位数转换为0开头的两位数组合，如：9-->09
		*/
		_formatSingleDigit: function(num){
			var num = parseInt(num, 10);
			if(typeof num != 'number'){
				throw new Error('Please input a correct type---number');
			}
			if(num < 10){
				return '0' + num;
			}else{
				return num;
			}
		}
	};
	return toolApp;
})