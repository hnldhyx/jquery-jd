/*TMODJS:{"version":1,"md5":"c70ed8115a6a55ceac3b8ddb5e8eb048"}*/
define(['../../template',''],function(template){return template('index/fbr/fbr_rank_detail_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,value=$data.value,index=$data.index,$escape=$utils.$escape,$out='';$out+='<ul class="clearfix"> ';
$each($data,function(value,index){
$out+=' <li data-url="';
$out+=$escape(value.url);
$out+='" ';
if(index > 2){
$out+='style="border-bottom:none;"';
}
$out+=' title="';
$out+=$escape(value.text);
$out+='"> <div class="rank-detail-imgholder"> <img src="';
$out+=$escape(value.imgUrl);
$out+='" alt=""> </div> <div class="rank-detail-textholder">';
$out+=$escape(value.text);
$out+='</div> <div class="rank-detail-rankicon rank-';
$out+=$escape(value.rank);
$out+='">';
$out+=$escape(value.rank);
$out+='</div> </li> ';
});
$out+=' </ul>';
return new String($out);
});});