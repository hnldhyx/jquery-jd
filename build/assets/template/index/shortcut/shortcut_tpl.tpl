<div class="shortcut-wrap clearfix">
	<div class="shortcut-address" data-code="{{$data.currentProvince.code}}">
		<i class="shortcut-address-icon" title="{{$data.currentProvince.text}}"></i>
		<span class="shortcut-address-current-province" title="{{$data.currentProvince.text}}">{{$data.currentProvince.text}}</span>
		<div class="shortcut-shade-line"></div>
	</div>
	<div class="shortcut-info">
		<ul class="clearfix">
			{{each $data.shortcutInfoData as value index}}
			<li class="{{value.clsName}}">
				<span class="shortcut-info-text">{{value.text}}</span>
				<!-- comments -->
				{{if value.comment}}
				<em>{{value.comment}}</em>
				{{/if}}
				<!-- arrow -->
				{{if value.hasDropdown}}
				<i class="drop-tag">∨</i>
				<div class="shortcut-shade-line"></div>
				{{/if}}
				<!-- qr code -->
				{{if value.clsName == 'shortcut-telephone-version'}}
				<div class="telephone-qrcode"><span class="triangle"></span></div>
				{{/if}}
			</li>
			{{if index != $data.shortcutInfoData.length-1}}
			<li class="shortcut-split"></li>
			{{/if}}
			{{/each}}
		</ul>
	</div>
</div>


