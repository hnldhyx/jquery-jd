/*TMODJS:{"version":1,"md5":"5f7a479e4184f35c51e56cf139c9bd7d"}*/
define(['../../template',''],function(template){return template('index/header/header_cart_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,value=$data.value,$index=$data.$index,$escape=$utils.$escape,$out='';if($data.listData.length != 0){
$out+=' <div class="cart-dropdown-title">最新加入的商品</div> <ul class="cart-dropdown-item-wrap"> ';
$each($data.listData,function(value,$index){
$out+=' <li class="cart-dropdown-item clearfix" data-id="';
$out+=$escape(value.id);
$out+='" data-url="';
$out+=$escape(value.url);
$out+='"> <div class="cart-dropdown-img"><img src="';
$out+=$escape(value.imgUrl);
$out+='"></div> <div class="cart-dropdown-description" title="';
$out+=$escape(value.description);
$out+='">';
$out+=$escape(value.description);
$out+='</div> <div class="cart-dropdown-info"> <div class="cart-info-prise" title="￥';
$out+=$escape(value.price);
$out+='×';
$out+=$escape(value.count);
$out+='">￥';
$out+=$escape(value.price);
$out+='×';
$out+=$escape(value.count);
$out+='</div> <div class="cart-info-del">删除</div> </div> </li> ';
});
$out+=' </ul> <div class="cart-dropdown-footer"> <div class="summary-cart">共 <em>';
$out+=$escape($data.listData.length);
$out+='</em> 件商品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共计￥ <em>';
$out+=$escape($data.totalPrice);
$out+='</em></div> <div class="goto-cart">去购物车</div> </div> ';
}else if($data.listData.length == 0){
$out+=' <div class="cart-dropdown-nodata">购物车中还没有商品，赶紧选购吧！</div> ';
}
return new String($out);
});});