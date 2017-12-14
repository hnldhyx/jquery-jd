/*TMODJS:{"version":1,"md5":"eb5ff86174d92e923ec61669a326573b"}*/
define(['../../template',''],function(template){return template('index/header/header_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,$each=$utils.$each,value=$data.value,$index=$data.$index,tabs=$data.tabs,index=$data.index,tabsItem=$data.tabsItem,$out='';$out+='<div class="jd-logo"></div> <div class="header-search"> <div class="search-area"> <input type="text" placeholder="';
$out+=$escape($data.hotSearch.text);
$out+='"> <div class="header-search-camera"> <label for="header-search-upload" title="未选择任何文件"></label> <input id="header-search-upload" type="file" accept="image/png,image/jpeg,image/jpg"> </div> <div class="header-search-btn" data-url="';
$out+=$escape($data.hotSearch.url);
$out+='"></div> </div> <div class="search-tips"> <ul class="clearfix"> ';
$each($data.quickAccess,function(value,$index){
$out+=' <li data-url="';
$out+=$escape(value.url);
$out+='">';
$out+=$escape(value.text);
$out+='</li> ';
});
$out+=' </ul> </div> </div> <div class="header-cart"> <i class="header-cart-logo"></i> <i class="header-cart-text">我的购物车</i> <i class="header-cart-count">0</i> <div class="header-shade-line"></div> <div class="header-cart-dropdown-wrap"></div> </div> <div class="header-tab clearfix"> ';
$each($data.headerTabs,function(tabs,index){
$out+=' <ul class="header-tab-group clearfix"> ';
$each(tabs,function(tabsItem,$index){
$out+=' <li data-url="';
$out+=$escape(tabsItem.url);
$out+='">';
$out+=$escape(tabsItem.text);
$out+='</li> ';
});
$out+=' </ul> ';
if(index != $data.headerTabs.length-1){
$out+=' <div class="split"></div> ';
}
$out+=' ';
});
$out+=' </div> <div class="header-treasure" data-url="';
$out+=$escape($data.headerTreasure.url);
$out+='"><img src="';
$out+=$escape($data.headerTreasure.imgUrl);
$out+='" alt=""></div>';
return new String($out);
});});