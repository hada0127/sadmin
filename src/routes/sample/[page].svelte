<script>
  import Page from './index.svelte';
  import { params } from '@roxi/routify';
  let page = $params.page;
</script>

<Page {page} />
