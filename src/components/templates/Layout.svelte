<script>
  import Gnb from "@components/modules/Gnb.svelte";
  import Lnb from "@components/modules/Lnb.svelte";

  export let pageTitle, pagePath;
</script>

<div class="body" data-routify-scroll="lock">
  <Gnb />
  <div class="container columns is-gapless">
    <aside class="column is-narrow">
      <div class="menu">
        <Lnb />
      </div>
    </aside>
    <section class="column">
      <div class="contents">
        <header>
          <h1>{pageTitle}</h1>
          <div class="path">
            <a href="/">HOME</a>
            {@html pagePath}
          </div>
        </header>
        <article class="article">
          <slot />
        </article>
      </div>
    </section>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    max-width: 100%;
    aside {
      display: block;
      position: relative;
      .menu {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        width: 170px;
        background-color: #fafafa;
        min-height: 100vh;
        overflow-y: auto;
      }
    }
    section {
      div.contents {
        padding: 20px 30px;
        header {
          position: relative;
          h1 {
            font-size: 20px;
            font-weight: 700;
            border-bottom: 1px solid #eee;
          }
          .path {
            position: absolute;
            font-size: 12px;
            right: 0;
            bottom: 5px;
            color: var(--font-desc-color);
          }
        }
      }
    }
  }
</style>
