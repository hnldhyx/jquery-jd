<div class="jd-logo"></div>
<div class="header-search">
	<div class="search-area">
		<input type="text" placeholder="{{$data.hotSearch.text}}">
		<div class="header-search-camera">
			<label for="header-search-upload" title="未选择任何文件"></label>
			<input id="header-search-upload" type="file" accept="image/png,image/jpeg,image/jpg">
		</div>
		<div class="header-search-btn" data-url="{{$data.hotSearch.url}}"></div>
	</div>
	<div class="search-tips">
		<ul class="clearfix">
			{{each $data.quickAccess as value}}
			<li data-url="{{value.url}}">{{value.text}}</li>
			{{/each}}
		</ul>
	</div>
</div>
<div class="header-cart">
	<i class="header-cart-logo"></i>
	<i class="header-cart-text">我的购物车</i>
	<i class="header-cart-count">0</i>
	<div class="header-shade-line"></div>
	<div class="header-cart-dropdown-wrap"></div>
</div>
<div class="header-tab clearfix">
	{{each $data.headerTabs as tabs index}}
	<ul class="header-tab-group clearfix">
		{{each tabs as tabsItem}}
		<li data-url="{{tabsItem.url}}">{{tabsItem.text}}</li>
		{{/each}}
	</ul>
	{{if index != $data.headerTabs.length-1}}
	<div class="split"></div>
	{{/if}}
	{{/each}}
</div>
<div class="header-treasure" data-url="{{$data.headerTreasure.url}}"><img src="{{$data.headerTreasure.imgUrl}}" alt=""></div>