<div class="article-nav-item" id="cate-item{{$data.pid}}">
	<div class="article-nav-col1">
		<div class="nav-col1-channel">
			<ul class="clearfix">
				{{each $data.channel as channel}}
				<li data-url="{{channel.url}}">{{channel.text}}<i class="col1-channel-icon">></i></li>
				{{/each}}
			</ul>
		</div>
		<div class="nav-col1-detail">
			{{each $data.detail as detail}}
			<div class="nav-col1-detail-item clearfix">
				<div class="nav-col1-detail-title" data-url="{{detail.title.url}}">{{detail.title.text}}</div>
				<ul class="clearfix">
					{{each detail.list as list}}
					<li data-url="{{list.url}}">{{list.text}}</li>
					{{/each}}
				</ul>
			</div>
			{{/each}}
		</div>
	</div>
	<div class="article-nav-col2">
		<div class="nav-col2-abbrpic">
			<ul class="clearfix">
				{{each $data.abbrImg as abbrImg}}
				<li data-url="{{abbrImg.url}}"><img src="{{abbrImg.imgUrl}}" alt=""></li>
				{{/each}}
			</ul>
		</div>
		<div class="nav-col2-bigpic">
			<ul>
				{{each $data.bigImg as bigImg}}
				<li data-url="{{bigImg.url}}"><img src="{{bigImg.imgUrl}}" alt=""></li>
				{{/each}}
			</ul>
		</div>
	</div>
</div>
