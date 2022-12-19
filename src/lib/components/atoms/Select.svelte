<script lang="ts">
	export let multiple: boolean = false;
	export let id: string = '';
	export let name: string = '';
	export let size: number = 2;
	export let value: string = '';
	export let inheritsClass: string = $$props.class ? $$props.class : '';
	export let icon: string = '';
	export let disabled: boolean = false;
	export let placeholder: string = '';

	let checkPlaceholder: boolean = false;
	$: if (value === '' && placeholder && placeholder.length > 0) {
		value = placeholder;
		checkPlaceholder = true;
	} else {
		checkPlaceholder = false;
	}
</script>

<div class="control {inheritsClass}" class:has-icons-left={icon.length > 0}>
	<div class="select is-small {inheritsClass} " class:is-multiple={multiple}>
		{#if multiple && multiple === true}
			<select
				{id}
				{name}
				size={multiple === true ? size : 2}
				multiple
				{disabled}
				bind:value
				class:placeholder={checkPlaceholder}
				class={inheritsClass}
			>
				{#if placeholder && placeholder.length > 0}
					<option disabled>{placeholder}</option>
				{/if}
				<slot />
			</select>
		{:else if value != ''}
			<select
				{id}
				{name}
				{disabled}
				bind:value
				class:placeholder={checkPlaceholder}
				class={inheritsClass}
			>
				{#if placeholder && placeholder.length > 0}
					<option disabled>{placeholder}</option>
				{/if}
				<slot />
			</select>
		{:else}
			<select {id} {name} {disabled} class:placeholder={checkPlaceholder} class={inheritsClass}>
				{#if placeholder && placeholder.length > 0}
					<option disabled>{placeholder}</option>
				{/if}
				<slot />
			</select>
		{/if}
	</div>
	{#if icon.length > 0}
		<span class="icon is-small is-left">
			<i class="fas fa-globe" />
		</span>
	{/if}
</div>

<style>
	.control {
		display: inline-block;
	}
	.placeholder {
		color: #999;
	}
</style>
