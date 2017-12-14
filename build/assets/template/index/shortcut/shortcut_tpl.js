/*TMODJS:{"version":1,"md5":"d1cf69188223b192294e507e743e0f26"}*/
define(['../../template',''],function(template){return template('index/shortcut/shortcut_tpl', function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,$each=$utils.$each,value=$data.value,index=$data.index,$out='';$out+='<div class="shortcut-wrap clearfix"> <div class="shortcut-address" data-code="';
$out+=$escape($data.currentProvince.code);
$out+='"> <i class="shortcut-address-icon" title="';
$out+=$escape($data.currentProvince.text);
$out+='"></i> <span class="shortcut-address-current-province" title="';
$out+=$escape($data.currentProvince.text);
$out+='">';
$out+=$escape($data.currentProvince.text);
$out+='</span> <div class="shortcut-shade-line"></div> </div> <div class="shortcut-info"> <ul class="clearfix"> ';
$each($data.shortcutInfoData,function(value,index){
$out+=' <li class="';
$out+=$escape(value.clsName);
$out+='"> <span class="shortcut-info-text">';
$out+=$escape(value.text);
$out+='</span>  ';
if(value.comment){
$out+=' <em>';
$out+=$escape(value.comment);
$out+='</em> ';
}
$out+='  ';
if(value.hasDropdown){
$out+=' <i class="drop-tag">∨</i> <div class="shortcut-shade-line"></div> ';
}
$out+='  ';
if(value.clsName == 'shortcut-telephone-version'){
$out+=' <div class="telephone-qrcode"><span class="triangle"></span></div> ';
}
$out+=' </li> ';
if(index != $data.shortcutInfoData.length-1){
$out+=' <li class="shortcut-split"></li> ';
}
$out+=' ';
});
$out+=' </ul> </div> </div> ';
return new String($out);
});});