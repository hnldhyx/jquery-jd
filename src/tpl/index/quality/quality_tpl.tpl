<div class="quality-header">
	<span>享品质</span>
</div>
<div class="quality-content">
	<ul class="clearfix">
		<li class="quality-content-item quality-content-big"></li>
		{{each $data.normal as normal}}
		<li class="quality-content-item" data-url="{{normal.url}}">
			<div class="quality-content-text" style="background-color: {{normal.theme}}">
				<div class="quality-content-text-title">{{normal.title}}</div>
				<div class="quality-content-text-detail">{{normal.description}}</div>
			</div>
			<div class="quality-content-img">
				<img src="{{normal.imgUrl}}" alt="">
			</div>
		</li>
		{{/each}}
		{{each $data.small as small}}
		<li class="quality-content-item quality-content-small" data-url="{{small.url}}">
			<div class="quality-content-text" style="background-color: {{small.theme}}">
				<div class="quality-content-text-title">{{small.title}}</div>
				<div class="quality-content-text-detail">{{small.description}}</div>
			</div>
			<div class="quality-content-img">
				<img src="{{small.imgUrl}}" alt="">
			</div>
		</li>
		{{/each}}
	</ul>
</div>