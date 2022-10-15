<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Component Input");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/input">Component Input</a>`
  );
</script>

Input

<style lang="scss"></style>
