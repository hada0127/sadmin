<script lang="ts">
  import Button from '$components/atoms/Button.svelte';
  const handleSubmit = (e: Event) => {
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    interface FormType {
      [key: string]: string;
    }
    const data: FormType = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value.toString();
    }
    data['page'] = '1';
    let queryString = Object.keys(data)
      .map((key) => key + '=' + data[key])
      .join('&');
    location.href = `?${queryString}`;
  };
</script>

<div class="box">
  <form on:submit|preventDefault={handleSubmit}>
    <slot />
    <div class="has-text-centered">
      <Button type="reset">Reset</Button>
      <Button type="submit" class="is-primary" iconLeft="fas fa-search">Search</Button>
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
