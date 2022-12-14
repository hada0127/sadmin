<script lang="ts">
  import { page } from '$app/stores';
  import { LnbData } from "$store/layout/Lnb";
</script>

<div class="menu">
  <p class="menu-label">Menu</p>
  <ul class="menu-list">
    {#each LnbData as lnb}
      <li>
        <a href={lnb.url} class:active={$page.route.id === lnb.url && !lnb.submenu}
          >{lnb.name}</a
        >
        {#if lnb.submenu}
          <ul>
            {#each lnb.submenu as sub}
              <li>
                <a href={sub.url} class:active={$page.route.id === sub.url}
                  >{sub.name}</a
                >
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  div.menu {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 170px;
    background-color: #fafafa;
    min-height: 100vh;
    overflow-y: auto;
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
  }
</style>
