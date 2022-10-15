<script>
  import { Button } from "../ui";
  import { url } from "@roxi/routify";
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">Svelte Admin UI Kit</a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <Button
          setClass="is-text"
          iconLeft="fas fa-user"
          on:click={() => {
            location.href = $url("/user/edit");
          }}>Edit Personal Info</Button
        >
        <Button setClass="is-primary" iconLeft="fas fa-sign-out-alt"
          >Sign Out</Button
        >
      </div>
    </div>
  </div>
</nav>

<style lang="scss">
  .navbar {
    border-bottom: 1px solid #eee;
    a.navbar-item {
      font-weight: 700;
    }
  }
</style>
