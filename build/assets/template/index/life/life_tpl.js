/*TMODJS:{"version":1,"md5":"bef853187807bb096a783ded426fa128"}*/
define(['../../template',''],function(template){return template('index/life/life_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,value=$data.value,$index=$data.$index,$escape=$utils.$escape,taglist=$data.taglist,large=$data.large,normal=$data.normal,index=$data.index,small=$data.small,$out='';$out+='<div class="life-header"> <span>爱生活</span> </div> <div class="life-content clearfix"> ';
$each($data,function(value,$index){
$out+=' <div id="life-content-';
$out+=$escape(value.identifier);
$out+='" class="life-content-item"> <div class="life-content-nav" style="background-color: ';
$out+=$escape(value.theme[0]);
$out+='"> <div class="qrcode">';
$out+=$escape(value.title);
$out+='</div> <ul class="life-content-nav-wrap" class="clearfix"> ';
$each(value.taglist,function(taglist,$index){
$out+=' <li class="life-content-nav-list" data-url="taglist.url" style="border: 1px ';
$out+=$escape(value.theme[1]);
$out+=' solid;">';
$out+=$escape(taglist.text);
$out+='</li> ';
});
$out+=' </ul> </div> <div class="life-content-detail"> <div class="clearfix"> ';
$each(value.detail.large,function(large,$index){
$out+=' <div class="life-content-detail-large" data-url="';
$out+=$escape(large.url);
$out+='"> <img src="';
$out+=$escape(large.imgUrl);
$out+='" alt=""> </div> ';
});
$out+=' <div class="life-content-detail-normal"> <ul class="clearfix"> ';
$each(value.detail.normal,function(normal,index){
$out+=' <li ';
if(index>value.detail.normal.length-3){
$out+='style="border-bottom: 1px transparent solid;';
}
$out+='" data-url="';
$out+=$escape(normal.url);
$out+='"> <div class="life-content-text-title" style="color: ';
$out+=$escape(value.detail.theme[0]);
$out+='">';
$out+=$escape(normal.title);
$out+='</div> <div class="life-content-text-description" style="color: ';
$out+=$escape(value.detail.theme[1]);
$out+='">';
$out+=$escape(normal.description);
$out+='</div> <img src="';
$out+=$escape(normal.imgUrl);
$out+='" alt=""> </li> ';
});
$out+=' </ul> </div> </div> <div class="life-content-detail-small"> <ul class="clearfix"> ';
$each(value.detail.small,function(small,$index){
$out+=' <li data-url="';
$out+=$escape(small.url);
$out+='"><img src="';
$out+=$escape(small.imgUrl);
$out+='" alt=""></li> ';
});
$out+=' </ul> </div> <div class="life-content-shortcut"></div> </div> </div> ';
});
$out+=' </div>';
return new String($out);
});});