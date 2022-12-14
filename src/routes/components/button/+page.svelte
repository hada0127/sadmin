<script>
	import Layout from '$components/templates/Layout.svelte';
	import Button from '$components/atoms/Button.svelte';
	import { HighlightSvelte } from 'svelte-highlight';
	import highlightStyle from 'svelte-highlight/styles/vs2015';

	let pageTitle = 'Button';
	let pagePath = `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/button">Button</a>`;
</script>

<svelte:head>
	{@html highlightStyle}
</svelte:head>

<Layout {pageTitle} {pagePath}>
	<h2>Basic</h2>
	<Button>button</Button>
	<figure class="highlight">
		<HighlightSvelte code={`<Button>button</Button>`} />
	</figure>

	<h2>Type</h2>
	<p>Default type is "button"</p>
	<Button class="is-primary" type="submit">submit</Button>
	<Button class="" type="reset">reset</Button>
	<figure class="highlight">
		<HighlightSvelte code={`<Button>button</Button>`} />
	</figure>

	<h2>Colors</h2>
	<Button class="is-white">white</Button>
	<Button class="is-light">light</Button>
	<Button class="is-dark">dark</Button>
	<Button class="is-black">black</Button>
	<Button class="is-text">text</Button>
	<Button class="is-ghost">ghost</Button>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Button class="is-white">white</Button>
<Button class="is-light">light</Button>
<Button class="is-dark">dark</Button>
<Button class="is-black">black</Button>
<Button class="is-text">text</Button>
<Button class="is-ghost">ghost</Button>
  `}
		/>
	</figure>
	<div class="mt-4">
		<Button class="is-primary">primary</Button>
		<Button class="is-link">link</Button>
		<Button class="is-info">info</Button>
		<Button class="is-success">success</Button>
		<Button class="is-warning">warning</Button>
		<Button class="is-danger">danger</Button>
	</div>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Button class="is-primary">primary</Button>
<Button class="is-link">link</Button>
<Button class="is-info">info</Button>
<Button class="is-success">success</Button>
<Button class="is-warning">warning</Button>
<Button class="is-danger">danger</Button>
  `}
		/>
	</figure>

	<h2>Styles</h2>
	<div>
		<h3>Outlined</h3>
		<Button class="is-primary is-outlined">primary</Button>
		<Button class="is-link is-outlined">link</Button>
		<Button class="is-info is-outlined">info</Button>
		<Button class="is-success is-outlined">success</Button>
		<Button class="is-warning is-outlined">warning</Button>
		<Button class="is-danger is-outlined">danger</Button>
	</div>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Button class="is-primary is-outlined">primary</Button>
<Button class="is-link is-outlined">link</Button>
<Button class="is-info is-outlined">info</Button>
<Button class="is-success is-outlined">success</Button>
<Button class="is-warning is-outlined">warning</Button>
<Button class="is-danger is-outlined">danger</Button>
  `}
		/>
	</figure>
	<div class="mt-4">
		<h3>Inverted</h3>
		<Button class="is-primary is-inverted">primary</Button>
		<Button class="is-link is-inverted">link</Button>
		<Button class="is-info is-inverted">info</Button>
		<Button class="is-success is-inverted">success</Button>
		<Button class="is-danger is-inverted">danger</Button>
	</div>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Button class="is-primary is-inverted">primary</Button>
<Button class="is-link is-inverted">link</Button>
<Button class="is-info is-inverted">info</Button>
<Button class="is-success is-inverted">success</Button>
<Button class="is-danger is-inverted">danger</Button>
  `}
		/>
	</figure>
	<h2>Click Event & Status</h2>
	<p>If the Status is 'is-static' or 'is-loading' or 'disabled', the Click event will not work.</p>
	<Button
		class="is-primary"
		on:click={() => {
			alert('click!');
		}}>click</Button
	>
	<Button
		class="is-primary is-static"
		on:click={() => {
			alert('click!');
		}}>static</Button
	>
	<Button
		class="is-primary is-loading"
		on:click={() => {
			alert('click!');
		}}>loading</Button
	>
	<Button
		class="is-primary"
		disabled
		on:click={() => {
			alert('click!');
		}}>disabled</Button
	>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Button class="is-primary" on:click={() => { alert("click!");}}>static</Button>
<Button class="is-primary is-static' on:click={() => { alert("click!");}}>static</Button>
<Button class="is-primary is-loading' on:click={() => { alert("click!");}}>loading</Button>
<Button class="is-primary' disabled on:click={() => { alert("click!");}}>disabled</Button>`}
		/>
	</figure>

	<h2>Icon</h2>
	<p>
		Using Font Awesome (<a
			href="https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/"
			target="_blank"
			rel="noreferrer">Spec Sheet</a
		>)
	</p>
	<Button class="is-primary" iconLeft="fab fa-github">button</Button>
	<Button class="is-success" iconLeft="fas fa-check">button</Button>
	<Button class="is-danger is-outlined" iconRight="fas fa-times">button</Button>
	<figure class="highlight">
		<HighlightSvelte
			code={`<Button class="is-primary" iconLeft="fab fa-github">button</Button>
<Button class="is-success" iconLeft="fas fa-check">button</Button>
<Button class="is-danger is-outlined" iconRight="fas fa-times">button</Button>`}
		/>
	</figure>
</Layout>

<style lang="scss"></style>
