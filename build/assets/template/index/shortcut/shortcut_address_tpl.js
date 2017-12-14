/*TMODJS:{"version":1,"md5":"3e163c24ddb2f5cf20f108b43a559687"}*/
define(['../../template',''],function(template){return template('index/shortcut/shortcut_address_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,value=$data.value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="shortcut-dropdown-wrap shortcut-address-wrap"> <ul class="shortcut-address-part clearfix"> ';
$each($data,function(value,$index){
$out+=' <li data-code="';
$out+=$escape(value.provinceCode);
$out+='">';
$out+=$escape(value.province);
$out+='</li> ';
});
$out+=' </ul> </div>';
return new String($out);
});});