<script>
  export let url = './';
  export let searchData;
  export let nowPage = 1;
  export let startPage = 1;
  export let lastPage = 1;
  export let pageCols = 5;
  export let pageSize = 20;
</script>

<nav
  class="pagination is-centered is-small"
  role="navigation"
  aria-label="pagination"
>
  <ul class="pagination-list">
    <li><a class="pagination-previous"><i class="fas fa-angle-left" /></a></li>
    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page">46</a
      >
    </li>
    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
    <li><a class="pagination-next"><i class="fas fa-angle-right" /></a></li>
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
