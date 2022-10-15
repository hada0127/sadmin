<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Edit Personal Info");
  pagePath.set(`&gt; <a href="/user/edit">Edit Personal Info</a>`);
</script>

Edit Personal Info

<style lang="scss"></style>
