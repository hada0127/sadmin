<script>
  import Layout from "@components/templates/Layout.svelte";
  import { params } from "@roxi/routify";
  let page = $params.page;
  let pageTitle = "Sample List";
  let pagePath = `&gt; <a href="/sample">Sample List</a>`;
</script>

<Layout {pageTitle} {pagePath}>
  page: {page}
</Layout>

<style lang="scss"></style>
