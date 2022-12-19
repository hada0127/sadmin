<script>
	import Layout from '$components/templates/Layout.svelte';
	let id = '';
	let pageTitle = 'Sample Details';
	let pagePath = `&gt; <a href="/sample/1">Sample</a> &gt; <a href="/sample/detail/1">Sample Details</a>`;
</script>

<Layout {pageTitle} {pagePath}>
	id: {id}
</Layout>

<style lang="scss"></style>
