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
    totalPage = Math.floor(Number(totalArticles) / pageSize) + 1;
    outputStart = Math.floor((Number(nowPage) - 1) / pageCols) * pageCols + 1;
    pageList = [];
    for (let outputNow = 0; outputNow < pageCols; outputNow++) {
      let outputPage = outputStart + outputNow;
      let active = Number(nowPage) === outputPage ? true : false;
      if (outputPage <= totalPage) {
        pageList.push({ page: outputPage, active: active });
      }
    }
    console.log(nowPage, totalPage, outputStart, pageList);
    pageList = pageList;
  }
</script>

<nav class="pagination is-centered is-small" aria-label="pagination">
  <ul class="pagination-list">
    {#if Number(nowPage) > 1}
      <li>
        <a href="?page={Number(nowPage) - 1}&{searchData}" class="pagination-previous"
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
    {#if Number(nowPage) < totalPage}
      <li>
        <a href="?page={Number(nowPage) + 1}&{searchData}" class="pagination-next"
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
