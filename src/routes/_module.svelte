<script>
  import { Button } from "../component/ui";
  import { pageTitle, pagePath } from "../store/layout";
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/"> 관리자 UI </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <Button
          setClass="is-text"
          on:click={() => {
            alert("test");
          }}>정보변경</Button
        >
        <Button setClass="is-primary" iconLeft="fas fa-sign-out-alt"
          >로그아웃</Button
        >
      </div>
    </div>
  </div>
</nav>
<div class="container columns is-gapless">
  <aside class="column is-narrow">
    <div class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <li>
          <a href="/sample">샘플화면</a>
          <ul>
            <li><a href="/sample">목록</a></li>
            <li><a href="/sample/detail">상세</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
  <section class="column">
    <div class="contents">
      <header>
        <h1>{$pageTitle}</h1>
        <div class="path">
          <a href="/">HOME</a>
          &gt; {$pagePath}
        </div>
      </header>
      <article class="article">
        <slot />
      </article>
    </div>
  </section>
</div>

<style lang="scss">
  .navbar {
    border-bottom: 1px solid #eee;
  }
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
          }
        }
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
            a {
              color: var(--font-desc-color);
            }
          }
        }
      }
    }
  }
</style>
