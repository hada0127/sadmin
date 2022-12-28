<script lang="ts">
  import { page } from '$app/stores';
  export let nowPage = 1;
  export let totalArticles = 1;
  export let pageSize = 20;
  let pageCols = 5;
  let totalPage: number;
  let outputStart: number;
  interface PageList {
    page: number;
    active: boolean;
  }
  let pageList: PageList[] = [];
  let searchData = '';
  $: {
    $page.url.searchParams.delete('page');
    searchData = $page.url.searchParams.toString();
    totalPage = Math.floor(totalArticles / pageSize);
    outputStart = Math.floor((nowPage - 1) / pageCols) * pageCols + 1;
    pageList = [];
    for (let outputNow = 0; outputNow < pageCols; outputNow++) {
      let outputPage = outputStart + outputNow;
      let active = nowPage === outputPage ? true : false;
      if (outputPage <= totalPage) {
        pageList.push({ page: outputPage, active: active });
      }
    }
    pageList = pageList;
  }
</script>

<nav class="pagination is-centered is-small" aria-label="pagination">
  <ul class="pagination-list">
    {#if nowPage > 1}
      <li>
        <a href="?page={nowPage - 1}&{searchData}" class="pagination-previous"
          ><i class="fas fa-angle-left" /></a
        >
      </li>
    {/if}
    {#each pageList as page}
      <li>
        <a
          href="?page={page.page}&{searchData}"
          class="pagination-link"
          class:is-current={page.active}
          aria-label="Page {page.page}"
          aria-current="page">{page.page}</a
        >
      </li>
    {/each}
    {#if nowPage < totalPage}
      <li>
        <a href="?page={nowPage + 1}&{searchData}" class="pagination-next"
          ><i class="fas fa-angle-right" /></a
        >
      </li>
    {/if}
  </ul>
</nav>

<style lang="scss">
  .pagination {
    border: none;
    * {
      border: none;
    }
    a:hover:not(.is-current) {
      font-weight: 700;
      color: hsl(171, 100%, 41%);
    }
    .is-current {
      font-weight: 700;
      background-color: hsl(171, 100%, 41%);
    }
  }
</style>
