/*TMODJS:{"version":1,"md5":"7341b244949674c321b781b9445979e3"}*/
define(['../../template',''],function(template){return template('index/cs/cs_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,$each=$utils.$each,coupon=$data.coupon,$index=$data.$index,$out='';$out+='<div class="coupon cs-item"> <div class="cs-item-header"> <div class="cs-item-header-arrow"></div> <div class="cs-item-header-icon"></div> <h3>领券中心</h3> <span data-url="';
$out+=$escape($data.coupon.url);
$out+='">前往领券中心<i></i></span> </div> <div class="coupon-content"> <ul class="clearfix"> ';
$each($data.coupon.list,function(coupon,$index){
$out+=' <li data-url="';
$out+=$escape(coupon.url);
$out+='" title="';
$out+=$escape(coupon.tip);
$out+='"> <div class="coupon-content-holder"> <div class="coupon-info"> <p class="coupon-info-price"><i>￥</i>';
$out+=$escape(coupon.price);
$out+='</p> <p class="coupon-info-tip">';
$out+=$escape(coupon.tip);
$out+='</p> <p class="coupon-info-limit">';
$out+=$escape(coupon.limit);
$out+='</p> <p class="coupon-info-more">';
$out+=$escape(coupon.more);
$out+='</p> </div> <img class="coupon-img" src="';
$out+=$escape(coupon.imgUrl);
$out+='" /> </div> <div class="coupon-content-shadow"></div> </li> ';
});
$out+=' </ul> </div> </div> <div class="seek cs-item"> <div class="cs-item-header"> <div class="cs-item-header-arrow"></div> <div class="cs-item-header-icon"></div> <h3>觅me</h3> <span data-url="';
$out+=$escape($data.seek.url);
$out+='">探索生活<i></i></span> </div> <div class="seek-content"></div> </div>';
return new String($out);
});});