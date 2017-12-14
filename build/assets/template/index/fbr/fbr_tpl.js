/*TMODJS:{"version":1,"md5":"54a42122a15a10c8f7b5485f0d95ae7a"}*/
define(['../../template',''],function(template){return template('index/fbr/fbr_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,$each=$utils.$each,find=$data.find,index=$data.index,rankHeader=$data.rankHeader,$index=$data.$index,$out='';$out+='<div class="fbr-find fbr-item"> <div class="fbr-find-header fbr-item-header"> <div class="fbr-item-header-arrow"></div> <div class="fbr-item-header-icon"></div> <h3>发现好货</h3> <span data-url="';
$out+=$escape($data.url);
$out+='">发现品质生活<i></i></span> </div> <div class="fbr-find-content"> <ul class="clearfix"> ';
$each($data.find,function(find,index){
$out+=' <li data-url="';
$out+=$escape(find.url);
$out+='" ';
if(index == $data.find.length-1 || index == $data.find.length-2){
$out+='style="border-bottom:none;"';
}
$out+='> <div class="fbr-find-textholder" title="';
$out+=$escape(find.text);
$out+='">';
$out+=$escape(find.text);
$out+='</div> <div class="fbr-find-imgholder"><img src="';
$out+=$escape(find.imgUrl);
$out+='" alt=""></div> </li> ';
});
$out+=' </ul> </div> </div> <div class="fbr-buy fbr-item"> <div class="fbr-buy-header fbr-item-header"> <div class="fbr-item-header-arrow"></div> <div class="fbr-item-header-icon"></div> <h3>会买专辑</h3> <span data-url="';
$out+=$escape($data.url);
$out+='">甄选优质好物<i></i></span> </div> <div class="fbr-buy-content"></div> </div> <div class="fbr-rank fbr-item"> <div class="fbr-rank-header fbr-item-header"> <div class="fbr-item-header-arrow"></div> <div class="fbr-item-header-icon"></div> <h3>排行榜</h3> <span data-url="';
$out+=$escape($data.url);
$out+='">专属你的购物指南<i></i></span> </div> <div class="fbr-rank-content"> <ul class="rank-content-nav clearfix"> <li class="active-identifier"></li> ';
$each($data.rank.header,function(rankHeader,$index){
$out+=' <li data-id="';
$out+=$escape(rankHeader.label);
$out+='">';
$out+=$escape(rankHeader.text);
$out+='</li> ';
});
$out+=' </ul> <div class="rank-content-detail"></div> </div> </div>';
return new String($out);
});});