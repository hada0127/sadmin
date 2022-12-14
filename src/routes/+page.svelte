<script lang="ts">
	import { a } from '$store/sample.js';
	import Title from '$components/atoms/title-sample.svelte';
</script>

<svelte:head>
	<title>Main Page</title>
</svelte:head>

<div>
	<Title>title</Title>
	<p>
		contents {$a}
		<br />
		<img src="/assets/sample.png" alt="" />
	</p>
</div>

<style lang="scss">
	div {
		margin: 20px;
		border: 1px solid #000;
		> p {
			color: #00f;
		}
	}
</style>
