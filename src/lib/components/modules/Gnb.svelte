<script lang="ts">
  import Button from '$components/atoms/Button.svelte';
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img
        src="/favicon/android-chrome-512x512.png"
        alt="logo"
        style="width:15px;margin-right:5px;"
      /> Sadmin</a
    >
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <Button
          iconLeft="fas fa-cog"
          on:click={() => {
            location.href = '/setting';
          }}>Setting</Button
        >
        <Button class="is-primary" iconLeft="fas fa-sign-out-alt">Sign Out</Button>
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
