<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Sample Tabs");
  pagePath.set(
    `&gt; <a href="/sample/1">Sample</a> &gt; <a href="/sample/tabs">Sample Tabs</a>`
  );
</script>

Tabs

<style lang="scss"></style>
