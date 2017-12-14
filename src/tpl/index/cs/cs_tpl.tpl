<div class="coupon cs-item">
	<div class="cs-item-header">
		<div class="cs-item-header-arrow"></div>
		<div class="cs-item-header-icon"></div>
		<h3>领券中心</h3>
		<span data-url="{{$data.coupon.url}}">前往领券中心<i></i></span>
	</div>
	<div class="coupon-content">
		<ul class="clearfix">
			{{each $data.coupon.list as coupon}}
			<li data-url="{{coupon.url}}" title="{{coupon.tip}}">
				<div class="coupon-content-holder">
					<div class="coupon-info">
						<p class="coupon-info-price"><i>￥</i>{{coupon.price}}</p>
						<p class="coupon-info-tip">{{coupon.tip}}</p>
						<p class="coupon-info-limit">{{coupon.limit}}</p>
						<p class="coupon-info-more">{{coupon.more}}</p>
					</div>
					<img class="coupon-img" src="{{coupon.imgUrl}}" />
				</div>
				<div class="coupon-content-shadow"></div>
			</li>
			{{/each}}
		</ul>
	</div>
</div>
<div class="seek cs-item">
	<div class="cs-item-header">
		<div class="cs-item-header-arrow"></div>
		<div class="cs-item-header-icon"></div>
		<h3>觅me</h3>
		<span data-url="{{$data.seek.url}}">探索生活<i></i></span>
	</div>
	<div class="seek-content"></div>
</div>