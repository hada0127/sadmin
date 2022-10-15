<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Component Delete");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/delete">Component Delete</a>`
  );
</script>

Delete

<style lang="scss"></style>
