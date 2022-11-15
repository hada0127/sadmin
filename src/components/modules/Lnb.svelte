<script>
  import { isActive } from "@roxi/routify";
  import { LnbData } from "@store/layout/Lnb.js";
</script>

<p class="menu-label">Menu</p>
<ul class="menu-list">
  {#each LnbData as lnb}
    <li>
      <a href={lnb.url} class:active={$isActive(lnb.url) && !lnb.submenu}
        >{lnb.name}</a
      >
      {#if lnb.submenu}
        <ul>
          {#each lnb.submenu as sub}
            <li>
              <a href={sub.url} class:active={$isActive(sub.url)}>{sub.name}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>

<style lang="scss">
  p {
    margin: 15px;
    color: var(--font-desc-color);
    font-size: 10px;
  }
  .menu-list {
    margin: 10px;
    li {
      display: block;
      font-size: 12px;
      a.active {
        font-weight: 700;
      }
    }
  }
</style>
