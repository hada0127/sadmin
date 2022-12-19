<script lang="ts">
	export let value: string = '';
	const onInput = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		value = target.value;
	};
	export let id: string = '';
	export let name: string = '';
	export let style: string = $$props.class ? $$props.class : '';
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let placeholder: string = '';
	export let maxlength: number | null = null;
	export let memo: string = '';
	export let match: string = '';
	export let success: string = '';
	export let invalid: string = '';
	export let rows: number | null = null;
	export let fixed: boolean = false;

	export let matchResult: boolean = false;

	let matchView = false;
	$: if (match !== '' && value && value.length > 0) {
		let regexp = new RegExp(match);
		matchResult = regexp.test(value);
		matchView = true;
	} else {
		matchView = false;
	}
</script>

<div class={style}>
	<textarea
		{id}
		{name}
		class="is-small {style} textarea"
		class:is-danger={(matchView && matchResult === false) || style.includes('is-danger')}
		class:is-success={(matchView && matchResult === true) || style.includes('is-success')}
		class:has-fixed-size={fixed}
		{readonly}
		{disabled}
		{placeholder}
		{maxlength}
		{rows}
		on:input={onInput}>{value}</textarea
	>
</div>

{#if matchView && matchResult === false}
	<p class="help is-danger">{invalid}</p>
{:else if matchView && matchResult === true}
	<p class="help is-success">{success}</p>
{:else if memo}
	<p class="help {style}">{memo}</p>
{/if}

<style lang="scss">
	div {
		display: inline-block;
	}
	.is-fullwidth {
		display: flex;
		width: 100%;
	}
	p {
		font-size: 11px;
	}
</style>
