<script lang="ts">
	import { onMount } from 'svelte';
	import flatpickr from 'flatpickr';
	import type { Options as FlatpickerOptions } from 'flatpickr/dist/types/options';
	import 'flatpickr/dist/flatpickr.min.css';
	import { v4 as uuidv4 } from 'uuid';

	export let inheritsClass: string | null = $$props.class ? $$props.class : '';
	export let id: string | null;
	export let name: string | null;
	export let value: string = '';
	export let placeholder: string = '';
	export let readonly: boolean;
	export let disabled: boolean;
	export let minDate: string = '';
	export let maxDate: string = '';
	export let disable: boolean;
	export let enable: boolean;
	export let mode: string | null;
	export let defaultDate: string | null;

	const dateID = `f` + uuidv4();

	onMount(() => {
		let options: FlatpickerOptions = {
			dateFormat: 'Y-m-d',
			minDate: '',
			maxDate: '',
			defaultDate: ''
		};
		if (minDate.length > 0) options.minDate = minDate;
		if (maxDate.length > 0) options.maxDate = maxDate;
		if (disable) options.disable = disable;
		if (enable) options.enable = enable;
		if (defaultDate) options.defaultDate = defaultDate;
		if (mode) options.mode = mode;
		flatpickr(`.${dateID}`, options);
	});
</script>

<div class="control has-icons-right {inheritsClass} {disabled}">
	{#if readonly === true}
		<input
			{id}
			{name}
			type="text"
			bind:value
			{placeholder}
			{disabled}
			readonly
			class="is-small input {inheritsClass}"
		/>
	{:else}
		<input
			type="text"
			bind:value
			{placeholder}
			{disabled}
			class="is-small input flatpickr {dateID} {inheritsClass}"
		/>
	{/if}
	<span class="icon is-small is-right">
		<i class="fas fa-calendar-alt" />
	</span>
</div>

<style lang="scss">
	div {
		display: inline-block;
		width: 110px;
	}
	div.is-fullwidth {
		width: 100%;
	}
	div.disabled {
		cursor: not-allowed;
	}
</style>
