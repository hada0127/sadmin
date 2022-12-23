<script lang="ts">
	import 'suneditor/dist/css/suneditor.min.css';
	import '$scss/suneditor.scss';

	export let value = '';
	export let width = '100%';
	export let height = 'auto';
	let widthUnit: string, heightUnit: string;
	let match = /^[0-9]+$/;
	$: widthUnit = match.test(width) ? 'px' : '';
	$: heightUnit = match.test(height) ? 'px' : '';
	export let inheritsClass: string = $$props.class ? $$props.class : '';
</script>

<div
	style="width:{width}{widthUnit};height:{height}{heightUnit};"
	class="sun-editor-editable {inheritsClass}"
>
	{@html value}
</div>

<style lang="scss">
	div {
		overflow: auto;
	}
</style>
