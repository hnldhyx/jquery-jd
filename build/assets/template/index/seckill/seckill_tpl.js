/*TMODJS:{"version":1,"md5":"5808a939a535ad604d0d87991829a7f1"}*/
define(['../../template',''],function(template){return template('index/seckill/seckill_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,$out='';$out+='<div class="seckill-header clearfix"> <div class="seckill-header-icon"></div> <div class="seckill-header-logo"></div> <div class="seckill-header-link">京东秒杀<span data-url="//miaosha.jd.com">总有你想不到的低价<i class="seckill-header-link-icon"></i></span></div> <div class="seckill-header-time clearfix"> <span>当前场次</span> <em class="seckill-header-time-hour">';
$out+=$escape($data.countdownObj.hour);
$out+='</em> <em class="seckill-header-time-split"> <i class="dot-top"></i> <i class="dot-bottom"></i> </em> <em class="seckill-header-time-min">';
$out+=$escape($data.countdownObj.min);
$out+='</em> <em class="seckill-header-time-split"> <i class="dot-top"></i> <i class="dot-bottom"></i> </em> <em class="seckill-header-time-sec">';
$out+=$escape($data.countdownObj.sec);
$out+='</em> <span>后结束抢购</span> </div> </div> <div class="seckill-content clearfix"> <div class="seckill-content-manul hyxui-slide-container"></div> <div class="seckill-content-auto"></div> </div>';
return new String($out);
});});