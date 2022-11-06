<script>
  import { pageTitle, pagePath } from "@/store/layout";
  import { params } from "@roxi/routify";
  let id = $params.id;
  pageTitle.set("Sample Details");
  pagePath.set(
    `&gt; <a href="/sample/1">Sample</a> &gt; <a href="/sample/detail/1">Sample Details</a>`
  );
</script>

id: {id}

<style lang="scss"></style>
