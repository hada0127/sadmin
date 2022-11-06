<script>
  import { pageTitle, pagePath } from "@/store/layout";
  import { params } from "@roxi/routify";
  let page = $params.page;
  pageTitle.set("Sample Gallery");
  pagePath.set(
    `&gt; <a href="/sample/1">Sample</a> &gt; <a href="/sample/gallery/1">Sample Gallery</a>`
  );
</script>

page: {page}

<style lang="scss"></style>
