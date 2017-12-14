{{if $data.listData.length != 0}}
<div class="cart-dropdown-title">最新加入的商品</div>
<ul class="cart-dropdown-item-wrap">
	{{each $data.listData as value}}
	<li class="cart-dropdown-item clearfix" data-id="{{value.id}}" data-url="{{value.url}}">
		<div class="cart-dropdown-img"><img src="{{value.imgUrl}}"></div>
		<div class="cart-dropdown-description" title="{{value.description}}">{{value.description}}</div>
		<div class="cart-dropdown-info">
			<div class="cart-info-prise" title="￥{{value.price}}×{{value.count}}">￥{{value.price}}×{{value.count}}</div>
			<div class="cart-info-del">删除</div>
		</div>
	</li>
	{{/each}}
</ul>
<div class="cart-dropdown-footer">
	<div class="summary-cart">共 <em>{{$data.listData.length}}</em> 件商品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共计￥ <em>{{$data.totalPrice}}</em></div>
	<div class="goto-cart">去购物车</div>
</div>
{{else if $data.listData.length == 0}}
<div class="cart-dropdown-nodata">购物车中还没有商品，赶紧选购吧！</div>
{{/if}}