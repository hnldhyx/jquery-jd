<div class="life-header">
	<span>爱生活</span>
</div>
<div class="life-content clearfix">
	{{each $data as value}}
	<div id="life-content-{{value.identifier}}" class="life-content-item">
		<div class="life-content-nav" style="background-color: {{value.theme[0]}}">
			<div class="qrcode">{{value.title}}</div>
			<ul class="life-content-nav-wrap" class="clearfix">
				{{each value.taglist as taglist}}
				<li class="life-content-nav-list" data-url="taglist.url" style="border: 1px {{value.theme[1]}} solid;">{{taglist.text}}</li>
				{{/each}}
			</ul>
		</div>
		<div class="life-content-detail">
			<div class="clearfix">
				{{each value.detail.large as large}}
				<div class="life-content-detail-large" data-url="{{large.url}}">
					<img src="{{large.imgUrl}}" alt="">
				</div>
				{{/each}}
				<div class="life-content-detail-normal">
					<ul class="clearfix">
						{{each value.detail.normal as normal index}}
						<li {{if index>value.detail.normal.length-3}}style="border-bottom: 1px transparent solid;{{/if}}" data-url="{{normal.url}}">
							<div class="life-content-text-title" style="color: {{value.detail.theme[0]}}">{{normal.title}}</div>
							<div class="life-content-text-description" style="color: {{value.detail.theme[1]}}">{{normal.description}}</div>
							<img src="{{normal.imgUrl}}" alt="">
						</li>
						{{/each}}
					</ul>
				</div>
			</div>
			<div class="life-content-detail-small">
				<ul class="clearfix">
					{{each value.detail.small as small}}
					<li data-url="{{small.url}}"><img src="{{small.imgUrl}}" alt=""></li>
					{{/each}}
				</ul>
			</div>
			<div class="life-content-shortcut"></div>
		</div>
	</div>
	{{/each}}
</div>