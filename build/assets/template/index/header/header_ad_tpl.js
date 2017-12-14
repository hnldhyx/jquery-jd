/*TMODJS:{"version":1,"md5":"e2914f7649fdb8926e9ebb46558ab173"}*/
define(['../../template',''],function(template){return template('index/header/header_ad_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,$out='';$out+='<div class="header-ad-wrap"> <img src="';
$out+=$escape($data.imgUrl);
$out+='" alt="';
$out+=$escape($data.imgDescription);
$out+='"> <div class="header-ad-close">X</div> </div>';
return new String($out);
});});