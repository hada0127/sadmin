<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Component Button");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/button">Component Button</a>`
  );
</script>

Button

<style lang="scss"></style>
