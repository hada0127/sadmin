<script>
  import { Button } from "../ui";
  import { url } from "@roxi/routify";
  import Logo from "$asset/favicon/favicon.svg";
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src={Logo} alt="logo" style="width:15px;margin-right:5px;" /> Sadmin</a
    >
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <Button
          class="is-text"
          iconLeft="fas fa-user"
          on:click={() => {
            location.href = $url("/sample/edit");
          }}>Edit Personal Info</Button
        >
        <Button class="is-primary" iconLeft="fas fa-sign-out-alt"
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
