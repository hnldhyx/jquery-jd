<div class="shortcut-dropdown-wrap shortcut-address-wrap">
	<ul class="shortcut-address-part clearfix">
		{{each $data as value}}
		<li data-code="{{value.provinceCode}}">{{value.province}}</li>
		{{/each}}
	</ul>
</div>