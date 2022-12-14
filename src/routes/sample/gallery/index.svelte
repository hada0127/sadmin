<script>
	import Layout from '$components/templates/Layout.svelte';
	import { params } from '@roxi/routify';
	let page = $params.page;
	let pageTitle = 'Sample Gallery';
	let pagePath = `&gt; <a href="/sample/1">Sample</a> &gt; <a href="/sample/gallery/1">Sample Gallery</a>`;
</script>

<Layout {pageTitle} {pagePath}>
	page: {page}
</Layout>

<style lang="scss"></style>
