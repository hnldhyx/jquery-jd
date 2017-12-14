/*TMODJS:{"version":1,"md5":"407d362c9bafc9a4b18d0e2d1632aaa0"}*/
define(['../../template',''],function(template){return template('index/article/article_tpl', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,nav=$data.nav,$index=$data.$index,$escape=$utils.$escape,navItem=$data.navItem,index=$data.index,slideExtend=$data.slideExtend,newsOnsale=$data.newsOnsale,newsNotice=$data.newsNotice,tools=$data.tools,toolsQuick=$data.toolsQuick,$out='';$out+='<div class="article-nav"> <ul class="article-nav-trigger"> ';
$each($data.articleNavData.navData,function(nav,$index){
$out+=' <li data-id="';
$out+=$escape(nav.index);
$out+='"> ';
$each(nav.detail,function(navItem,index){
$out+='<span data-url="';
$out+=$escape(navItem.url);
$out+='">';
$out+=$escape(navItem.text);
$out+='</span>';
if(index != nav.detail.length-1){
$out+='/';
}
});
$out+=' </li> ';
});
$out+=' </ul> <div class="article-nav-detail"></div> </div> <div class="article-slide"> <div class="article-slide-wrap"></div> <div class="article-slide-extend"> <ul class="clearfix"> ';
$each($data.articleSlideExtendData,function(slideExtend,$index){
$out+=' <li data-url="';
$out+=$escape(slideExtend.url);
$out+='"><img src="';
$out+=$escape(slideExtend.imgUrl);
$out+='" alt=""></li> ';
});
$out+=' </ul> </div> </div> <div class="article-sidebar"> <div class="article-sidebar-part1"> <div class="article-sidebar-login clearfix"> <div class="article-sidebar-login-profile"> <img src="assets/images/index/article_sidebar_login_profile.png" alt=""> </div> <div class="article-sidebar-login-text"> <div>Hi , 欢迎来到京东!</div> <div> <span data-behavior="login">登录</span> <span data-behavior="register">注册</span> </div> </div> </div> <ul class="article-sidebar-vip clearfix"> <li data-behavior="welfare">新人福利</li> <li data-behavior="plusvip">PLUS会员</li> </ul> </div> <div class="article-sidebar-part2"> <div class="sidebar-news-header"> <span class="sidebar-news-toggle sidebar-news-onsale" data-behavior="onsale">促销</span> <span class="sidebar-news-toggle sidebar-news-notice" data-behavior="notice">公告</span> <span class="sidebar-news-more" data-behavior="more">更多</span> <div class="sidebar-news-active" data-position="first"></div> </div> <div class="sidebar-news-content"> <ul class="sidebar-news-content-onsale"> ';
$each($data.articleSidebarOnsale,function(newsOnsale,$index){
$out+=' <li data-url="';
$out+=$escape(newsOnsale.url);
$out+='" title="';
$out+=$escape(newsOnsale.text);
$out+='">';
$out+=$escape(newsOnsale.text);
$out+='</li> ';
});
$out+=' </ul> <ul class="sidebar-news-content-notice" style="display: none;"> ';
$each($data.articleSidebarNotice,function(newsNotice,$index){
$out+=' <li data-url="';
$out+=$escape(newsNotice.url);
$out+='" title="';
$out+=$escape(newsNotice.text);
$out+='">';
$out+=$escape(newsNotice.text);
$out+='</li> ';
});
$out+=' </ul> </div> </div> <div class="article-sidebar-part3"> <ul class="sidebar-tools clearfix"> ';
$each($data.articleSidebarTools,function(tools,$index){
$out+=' <li class="sidebar-tools-item" data-url="';
$out+=$escape(tools.url);
$out+='" data-type="';
$out+=$escape(tools.type);
$out+='" ';
if(tools.quickAccess){
$out+='data-quick="true"';
}
$out+='> ';
if(tools.tag){
$out+=' <span class="sidebar-tools-item-tag">';
$out+=$escape(tools.tag);
$out+='</span> ';
}
$out+=' <i class="sidebar-tools-item-img" style="background-position: ';
$out+=$escape(tools.imgPosition);
$out+='"></i> <span class="sidebar-tools-item-text">';
$out+=$escape(tools.text);
$out+='</span> </li> ';
});
$out+=' </ul> <div class="sidebar-tools-quick"> <ul class="tools-quick-header clearfix"> ';
$each($data.articleSidebarTools,function(toolsQuick,$index){
$out+=' ';
if(toolsQuick.quickAccess){
$out+=' <li data-url="';
$out+=$escape(toolsQuick.url);
$out+='" data-type="';
$out+=$escape(toolsQuick.type);
$out+='"> ';
$out+=$escape(toolsQuick.text);
$out+=' ';
if(toolsQuick.tag){
$out+=' <i class="tools-quick-tag"></i> ';
}
$out+=' </li> ';
}
$out+=' ';
});
$out+=' </ul> <div class="tools-quick-content"> <div class="tools-quick-exit">x</div> <div class="tools-quick-detail"> <div class="tools-quick-bill"></div> <div class="tools-quick-planeTicket"></div> <div class="tools-quick-hotel"></div> <div class="tools-quick-trainTickets"></div> </div> </div> </div> </div> </div>';
return new String($out);
});});