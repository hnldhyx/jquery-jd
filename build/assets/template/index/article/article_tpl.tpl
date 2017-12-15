<div class="article-nav">
	<ul class="article-nav-trigger">
		{{each $data.articleNavData.navData as nav}}
		<li data-id="{{nav.index}}">
			{{each nav.detail as navItem index}}<span data-url="{{navItem.url}}">{{navItem.text}}</span>{{if index != nav.detail.length-1}}/{{/if}}{{/each}}
		</li>
		{{/each}}
	</ul>
	<div class="article-nav-detail"></div>
</div>
<div class="article-slide">
	<div class="article-slide-wrap"></div> 
	<div class="article-slide-extend">
		<ul class="clearfix">
			{{each $data.articleSlideExtendData as slideExtend}}
			<li data-url="{{slideExtend.url}}"><img src="{{slideExtend.imgUrl}}" alt=""></li>
			{{/each}}
		</ul>
	</div>
</div>
<div class="article-sidebar">
	<div class="article-sidebar-part1">
		<div class="article-sidebar-login clearfix">
			<div class="article-sidebar-login-profile">
				<img src="assets/images/index/article_sidebar_login_profile.png" alt="">
			</div>
			<div class="article-sidebar-login-text">
				<div>Hi , 欢迎来到京东!</div>
				<div>
					<span data-behavior="login">登录</span>
					<span data-behavior="register">注册</span>
				</div>
			</div>
		</div>
		<ul class="article-sidebar-vip clearfix">
			<li data-behavior="welfare">新人福利</li>
			<li data-behavior="plusvip">PLUS会员</li>
		</ul>
	</div>
	<div class="article-sidebar-part2">
		<div class="sidebar-news-header">
			<span class="sidebar-news-toggle sidebar-news-onsale" data-behavior="onsale">促销</span>
			<span class="sidebar-news-toggle sidebar-news-notice" data-behavior="notice">公告</span>
			<span class="sidebar-news-more" data-behavior="more">更多</span>
			<div class="sidebar-news-active" data-position="first"></div>
		</div>
		<div class="sidebar-news-content">
			<ul class="sidebar-news-content-onsale">
				{{each $data.articleSidebarOnsale as newsOnsale}}
				<li data-url="{{newsOnsale.url}}" title="{{newsOnsale.text}}">{{newsOnsale.text}}</li>
				{{/each}}
			</ul>
			<ul class="sidebar-news-content-notice" style="display: none;">
				{{each $data.articleSidebarNotice as newsNotice}}
				<li data-url="{{newsNotice.url}}" title="{{newsNotice.text}}">{{newsNotice.text}}</li>
				{{/each}}
			</ul>
		</div>
	</div>
	<div class="article-sidebar-part3">
		<ul class="sidebar-tools clearfix">
			{{each $data.articleSidebarTools as tools}}
			<li class="sidebar-tools-item" data-url="{{tools.url}}" data-type="{{tools.type}}" {{if tools.quickAccess}}data-quick="true"{{/if}}>
				{{if tools.tag}}
				<span class="sidebar-tools-item-tag">{{tools.tag}}</span>
				{{/if}}
				<i class="sidebar-tools-item-img" style="background-position: {{tools.imgPosition}}"></i>
				<span class="sidebar-tools-item-text">{{tools.text}}</span>
			</li>
			{{/each}}
		</ul>
		<div class="sidebar-tools-quick">
			<ul class="tools-quick-header clearfix">
				{{each $data.articleSidebarTools as toolsQuick}}
				{{if toolsQuick.quickAccess}}
				<li data-url="{{toolsQuick.url}}" data-type="{{toolsQuick.type}}">
					{{toolsQuick.text}}
					{{if toolsQuick.tag}}
					<i class="tools-quick-tag"></i>
					{{/if}}
				</li>
				{{/if}}
				{{/each}}
			</ul>
			<div class="tools-quick-content">
				<div class="tools-quick-exit">x</div>
				<div class="tools-quick-detail">
					<div class="tools-quick-bill"></div>
					<div class="tools-quick-planeTicket"></div>
					<div class="tools-quick-hotel"></div>
					<div class="tools-quick-trainTickets"></div>
				</div>
			</div>
		</div>
	</div>
</div>