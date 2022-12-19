<script lang="ts">
	import Layout from '$components/templates/Layout.svelte';
	import Textarea from '$components/atoms/Textarea.svelte';
	import { HighlightSvelte } from 'svelte-highlight';
	import highlightStyle from 'svelte-highlight/styles/vs2015';

	let pageTitle = 'Textarea';
	let pagePath = `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/textarea">Textarea</a>`;
	let reviewCheckResult = false;
	const reviewRegex = '/^.{100,300}$/';
	let text: string = '';
</script>

<svelte:head>
	{@html highlightStyle}
</svelte:head>

<Layout {pageTitle} {pagePath}>
	<h2>Basic</h2>
	<Textarea bind:value={text} placeholder="description" rows={5} />
	<Textarea bind:value={text} placeholder="description" rows={5} fixed />
	<p>Input Text : {text}</p>
	<figure class="highlight">
		<HighlightSvelte
			code={`<script>
    let text;
  <\u002Fscript>
  <Textarea bind:value={text} placeholder="description" rows="5" />
  <Textarea bind:value={text} placeholder="description" rows="5" fixed />
  <p>{text}</p>`}
		/>
	</figure>

	<h2>Colors</h2>
	<Textarea class="is-primary" />
	<Textarea class="is-link" />
	<Textarea class="is-info" />
	<Textarea class="is-success" />
	<Textarea class="is-warning" />
	<Textarea class="is-danger" />

	<figure class="highlight">
		<HighlightSvelte
			code={`<Textarea class="is-primary" />
  <Textarea class="is-link" />
  <Textarea class="is-info" />
  <Textarea class="is-success" />
  <Textarea class="is-warning" />
  <Textarea class="is-danger" />`}
		/>
	</figure>

	<h2>Static & Readonly, Disabled</h2>
	<Textarea class="is-static" value="is-static" readonly />
	<Textarea value="readonly" readonly />
	<Textarea value="disabled" disabled />

	<figure class="highlight">
		<HighlightSvelte
			code={`<Input class="is-primary is-static" value="is-static" readonly />
  <Input class="is-primary" value="readonly" readonly />
  <Input value="disabled" disabled />`}
		/>
	</figure>

	<h2>memo</h2>
	<Textarea
		placeholder="Description"
		iconLeft="fas fa-lock"
		memo="Please enter characters between 100 and 300 digits."
	/>
	<Textarea
		class="is-danger"
		placeholder="Description"
		iconLeft="fas fa-lock"
		memo="Please enter characters between 100 and 300 digits."
	/>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Textarea
    placeholder="Password"
    iconLeft="fas fa-lock"
    memo="Please enter characters between 100 and 300 digits."
  />
  <Textarea
    class="is-danger"
    placeholder="Password"
    iconLeft="fas fa-lock"
    memo="Please enter characters between 100 and 300 digits."
  />`}
		/>
	</figure>

	<h2>Match</h2>
	<p>Using Regex, success and invalid message</p>
	<Textarea
		placeholder="Review"
		iconLeft="fas fa-lock"
		match={reviewRegex}
		maxlength={300}
		success="Success"
		invalid="Please enter characters between 100 and 300 digits."
		bind:matchResult={reviewCheckResult}
		class="is-fullwidth"
	/>
	<p>Review Check Result : {reviewCheckResult}</p>
	<figure class="highlight">
		<HighlightSvelte
			code={`<script>
    let reviewCheckResult = false;
    const reviewRegex = /^.{100,300}$/;
  <\u002Fscript>
  <Textarea
    placeholder="Review"
    iconLeft="fas fa-lock"
    match={reviewRegex}
    maxlength=300
    success="Success"
    invalid="Please enter characters between 100 and 300 digits."
    bind:matchResult={reviewCheckResult}
    class="is-fullwidth"
  />`}
		/>
	</figure>
</Layout>

<style lang="scss"></style>
