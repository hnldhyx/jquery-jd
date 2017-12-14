/*TMODJS:{"version":1,"md5":"791153cb39bdb17dad81ea171bbfbdb5"}*/
define(['../../template',''],function(template){return template('index/article/article_nav_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,$each=$utils.$each,channel=$data.channel,$index=$data.$index,detail=$data.detail,list=$data.list,abbrImg=$data.abbrImg,bigImg=$data.bigImg,$out='';$out+='<div class="article-nav-item" id="cate-item';
$out+=$escape($data.pid);
$out+='"> <div class="article-nav-col1"> <div class="nav-col1-channel"> <ul class="clearfix"> ';
$each($data.channel,function(channel,$index){
$out+=' <li data-url="';
$out+=$escape(channel.url);
$out+='">';
$out+=$escape(channel.text);
$out+='<i class="col1-channel-icon">></i></li> ';
});
$out+=' </ul> </div> <div class="nav-col1-detail"> ';
$each($data.detail,function(detail,$index){
$out+=' <div class="nav-col1-detail-item clearfix"> <div class="nav-col1-detail-title" data-url="';
$out+=$escape(detail.title.url);
$out+='">';
$out+=$escape(detail.title.text);
$out+='</div> <ul class="clearfix"> ';
$each(detail.list,function(list,$index){
$out+=' <li data-url="';
$out+=$escape(list.url);
$out+='">';
$out+=$escape(list.text);
$out+='</li> ';
});
$out+=' </ul> </div> ';
});
$out+=' </div> </div> <div class="article-nav-col2"> <div class="nav-col2-abbrpic"> <ul class="clearfix"> ';
$each($data.abbrImg,function(abbrImg,$index){
$out+=' <li data-url="';
$out+=$escape(abbrImg.url);
$out+='"><img src="';
$out+=$escape(abbrImg.imgUrl);
$out+='" alt=""></li> ';
});
$out+=' </ul> </div> <div class="nav-col2-bigpic"> <ul> ';
$each($data.bigImg,function(bigImg,$index){
$out+=' <li data-url="';
$out+=$escape(bigImg.url);
$out+='"><img src="';
$out+=$escape(bigImg.imgUrl);
$out+='" alt=""></li> ';
});
$out+=' </ul> </div> </div> </div> ';
return new String($out);
});});