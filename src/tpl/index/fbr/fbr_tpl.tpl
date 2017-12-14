<div class="fbr-find fbr-item">
	<div class="fbr-find-header fbr-item-header">
		<div class="fbr-item-header-arrow"></div>
		<div class="fbr-item-header-icon"></div>
		<h3>发现好货</h3>
		<span data-url="{{$data.url}}">发现品质生活<i></i></span>
	</div>
	<div class="fbr-find-content">
		<ul class="clearfix">
			{{each $data.find as find index}}
			<li data-url="{{find.url}}" {{if index == $data.find.length-1 || index == $data.find.length-2}}style="border-bottom:none;"{{/if}}>
				<div class="fbr-find-textholder" title="{{find.text}}">{{find.text}}</div>
				<div class="fbr-find-imgholder"><img src="{{find.imgUrl}}" alt=""></div>
			</li>
			{{/each}}
		</ul>
	</div>
</div>
<div class="fbr-buy fbr-item">
	<div class="fbr-buy-header fbr-item-header">
		<div class="fbr-item-header-arrow"></div>
		<div class="fbr-item-header-icon"></div>
		<h3>会买专辑</h3>
		<span data-url="{{$data.url}}">甄选优质好物<i></i></span>
	</div>
	<div class="fbr-buy-content"></div>
</div>
<div class="fbr-rank fbr-item">
	<div class="fbr-rank-header fbr-item-header">
		<div class="fbr-item-header-arrow"></div>
		<div class="fbr-item-header-icon"></div>
		<h3>排行榜</h3>
		<span data-url="{{$data.url}}">专属你的购物指南<i></i></span>
	</div>
	<div class="fbr-rank-content">
		<ul class="rank-content-nav clearfix">
			<li class="active-identifier"></li>
			{{each $data.rank.header as rankHeader}}
			<li data-id="{{rankHeader.label}}">{{rankHeader.text}}</li>
			{{/each}}
		</ul>
		<div class="rank-content-detail"></div>
	</div>
</div>