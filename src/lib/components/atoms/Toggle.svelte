<script lang="ts">
	export let id: string | null = null;
	export let name: string | null = null;
	export let checked = false;

	export let disabled = false;
	export let style: string = $$props.class ? $$props.class : 'is-primary';
</script>

<label>
	<input {id} {name} type="checkbox" bind:checked class="{style} " disabled={disabled === true} />
	<span />
</label>

<style lang="scss">
	input {
		appearance: none;
		position: relative;
		border-radius: 1.1em;
		border: 0.1em solid #fff;
		width: 3.5em;
		height: 2.2em;
		background-color: #aaa;
		cursor: pointer;
	}
	input::before {
		content: '';
		position: absolute;
		left: 0;
		width: 2em;
		height: 2em;
		border-radius: 50%;
		transform: scale(0.8);
		background-color: #efefef;
		transition: 0.15s;
	}
	input:checked::before {
		background-color: #fff;
		left: 1.3em;
	}

	input:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	input:disabled + span {
		opacity: 0.5;
		cursor: not-allowed;
	}

	input:checked {
		background-color: hsl(171, 100%, 41%);
	}
	input.is-primary:checked {
		background-color: hsl(171, 100%, 41%);
	}
	input.is-link:checked {
		background-color: hsl(217, 71%, 53%);
	}
	input.is-info:checked {
		background-color: hsl(204, 86%, 53%);
	}
	input.is-success:checked {
		background-color: hsl(141, 53%, 53%);
	}
	input.is-warning:checked {
		background-color: hsl(48, 100%, 67%);
	}
	input.is-danger:checked {
		background-color: hsl(348, 100%, 61%);
	}
</style>
