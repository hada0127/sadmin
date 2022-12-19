<script lang="ts">
	export let type: string = 'text';
	export let value: string = '';
	const onInput = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		value = target.value;
	};
	export let id: string = '';
	export let name: string = '';
	export let inheritsClass = $$props.class ? $$props.class : '';
	export let disabled: boolean | null = null;
	export let readonly: boolean | null = null;
	export let placeholder: string = '';
	export let maxlength: number | null = null;
	export let iconLeft: string = '';
	export let iconRight: string = '';
	export let memo: string = '';
	export let match: string = '';
	export let success: string = '';
	export let invalid: string = '';

	export let matchResult = false;
	let matchView = false;
	$: if (match !== '' && value && value.length > 0) {
		let regexp = new RegExp(match);
		matchResult = regexp.test(value);
		matchView = true;
	} else {
		matchView = false;
	}
</script>

<div
	class={inheritsClass}
	class:control={(iconLeft && iconLeft.length > 0) || (iconRight && iconRight.length > 0)}
	class:has-icons-left={iconLeft && iconLeft.length > 0}
	class:has-icons-right={iconRight && iconRight.length > 0}
>
	<input
		{id}
		{name}
		{type}
		{value}
		class="is-small {inheritsClass} input"
		class:is-danger={(matchView && matchResult === false) || inheritsClass.includes('is-danger')}
		class:is-success={(matchView && matchResult === true) || inheritsClass.includes('is-success')}
		{readonly}
		{disabled}
		{placeholder}
		{maxlength}
		on:input={onInput}
	/>
	{#if iconLeft && iconLeft.length > 0}
		<span class="icon is-small is-left">
			<i class={iconLeft} />
		</span>
	{/if}
	{#if iconRight && iconRight.length > 0}
		<span class="icon is-small is-right">
			<i class={iconRight} />
		</span>
	{/if}
</div>

{#if matchView && matchResult === false}
	<p class="help is-danger">{invalid}</p>
{:else if matchView && matchResult === true}
	<p class="help is-success">{success}</p>
{:else if memo}
	<p class="help {inheritsClass}">{memo}</p>
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
