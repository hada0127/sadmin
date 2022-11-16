<script>
  import Button from '@components/atoms/Button.svelte';
  // const handleSubmit = (e) => {
  //   //    location.href = url;
  //   const formData = new FormData(e.target);

  //   const data = {};
  //   for (let field of formData) {
  //     const [key, value] = field;
  //     data[key] = value;
  //   }
  //   console.log(data);
  // };
</script>

<div class="box">
  <form action="./1">
    <slot />
    <div class="has-text-centered">
      <Button type="reset">Reset</Button>
      <Button type="submit" class="is-primary" iconLeft="fas fa-search"
        >Search</Button
      >
    </div>
  </form>
</div>

<style lang="scss">
  .box {
    border: 1px solid var(--line-base-color);
    box-shadow: none;
    :global(.columns:not(:last-child)) {
      margin-bottom: 0;
    }
  }
</style>
