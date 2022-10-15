<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Sample List");
  pagePath.set(`&gt; <a href="/sample">Sample List</a>`);
</script>

page: {page}

<style lang="scss"></style>
