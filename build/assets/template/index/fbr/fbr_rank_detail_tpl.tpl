<ul class="clearfix">
	{{each $data as value index}}
	<li data-url="{{value.url}}" {{if index > 2}}style="border-bottom:none;"{{/if}} title="{{value.text}}">
		<div class="rank-detail-imgholder">
			<img src="{{value.imgUrl}}" alt="">
		</div>
		<div class="rank-detail-textholder">{{value.text}}</div>
		<div class="rank-detail-rankicon rank-{{value.rank}}">{{value.rank}}</div>
	</li>
	{{/each}}
</ul>