<script lang="ts">
	import Layout from '$components/templates/Layout.svelte';
	import Toggle from '$components/atoms/Toggle.svelte';
	import { HighlightSvelte } from 'svelte-highlight';
	import highlightStyle from 'svelte-highlight/styles/vs2015';

	let pageTitle = 'Toggle';
	let pagePath = `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/toggle">Toggle</a>`;
	let toggleChecked = true;
</script>

<svelte:head>
	{@html highlightStyle}
</svelte:head>

<Layout {pageTitle} {pagePath}>
	<h2>Basic</h2>
	<Toggle>Toggle</Toggle>
	<Toggle checked>Toggle</Toggle>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Toggle>Toggle</Toggle>
<Toggle checked>Toggle</Toggle>`}
		/>
	</figure>

	<h2>Colors</h2>
	<p>Default color is "is-primary"</p>
	<Toggle style="is-primary" checked>Toggle</Toggle>
	<Toggle style="is-link" checked>Toggle</Toggle>
	<Toggle style="is-info" checked>Toggle</Toggle>
	<Toggle style="is-success" checked>Toggle</Toggle>
	<Toggle style="is-warning" checked>Toggle</Toggle>
	<Toggle style="is-danger" checked>Toggle</Toggle>
	<figure class="highlight" checked>
		<HighlightSvelte
			code={`<Toggle style="is-primary">Toggle</Toggle>
<Toggle style="is-link">Toggle</Toggle>
<Toggle style="is-info">Toggle</Toggle>
<Toggle style="is-success">Toggle</Toggle>
<Toggle style="is-warning">Toggle</Toggle>
<Toggle style="is-danger">Toggle</Toggle>`}
		/>
	</figure>

	<h2>Disabled</h2>
	<Toggle disabled>Toggle</Toggle>
	<Toggle disabled checked>Toggle</Toggle>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Toggle disabled>Toggle</Toggle>
<Toggle disabled checked>Toggle</Toggle>`}
		/>
	</figure>

	<h2>Binding</h2>
	<Toggle bind:checked={toggleChecked}>Toggle</Toggle>
	<p>{toggleChecked}</p>
	<figure class="highlight">
		<HighlightSvelte
			code={`<script>
  let toggleChecked = true;
<\u002Fscript>
<Toggle bind:checked={toggleChecked}>Toggle</Toggle>
<p>{toggleChecked}</p>`}
		/>
	</figure>
</Layout>

<style lang="scss"></style>
