<script lang="ts">
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Sample Details');
  pagePath.set(
    `&gt; <a href="/sample/1">Sample</a> &gt; <a href="/sample/detail/1">Sample Details</a>`
  );

  import { page } from '$app/stores';
  let id = $page.params.id;
</script>

<h1>Slug Sample</h1>
<p>id: {id}</p>

<style lang="scss"></style>
