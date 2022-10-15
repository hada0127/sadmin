<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Component Modal");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/modal">Component Modal</a>`
  );
</script>

Modal

<style lang="scss"></style>
