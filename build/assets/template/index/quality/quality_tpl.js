/*TMODJS:{"version":1,"md5":"d5990e50a9ff529d079ecf5bbc3f6f95"}*/
define(['../../template',''],function(template){return template('index/quality/quality_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,normal=$data.normal,$index=$data.$index,$escape=$utils.$escape,small=$data.small,$out='';$out+='<div class="quality-header"> <span>享品质</span> </div> <div class="quality-content"> <ul class="clearfix"> <li class="quality-content-item quality-content-big"></li> ';
$each($data.normal,function(normal,$index){
$out+=' <li class="quality-content-item" data-url="';
$out+=$escape(normal.url);
$out+='"> <div class="quality-content-text" style="background-color: ';
$out+=$escape(normal.theme);
$out+='"> <div class="quality-content-text-title">';
$out+=$escape(normal.title);
$out+='</div> <div class="quality-content-text-detail">';
$out+=$escape(normal.description);
$out+='</div> </div> <div class="quality-content-img"> <img src="';
$out+=$escape(normal.imgUrl);
$out+='" alt=""> </div> </li> ';
});
$out+=' ';
$each($data.small,function(small,$index){
$out+=' <li class="quality-content-item quality-content-small" data-url="';
$out+=$escape(small.url);
$out+='"> <div class="quality-content-text" style="background-color: ';
$out+=$escape(small.theme);
$out+='"> <div class="quality-content-text-title">';
$out+=$escape(small.title);
$out+='</div> <div class="quality-content-text-detail">';
$out+=$escape(small.description);
$out+='</div> </div> <div class="quality-content-img"> <img src="';
$out+=$escape(small.imgUrl);
$out+='" alt=""> </div> </li> ';
});
$out+=' </ul> </div>';
return new String($out);
});});