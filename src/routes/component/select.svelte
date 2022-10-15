<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Component Label");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/tabs">Component Label</a>`
  );
</script>

Label

<style lang="scss"></style>
