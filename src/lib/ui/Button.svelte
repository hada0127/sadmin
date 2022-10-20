<script>
  export let type = "button";

  export let style = null;

  export let iconLeft = null;
  export let iconRight = null;
  export let disabled = false;
</script>

<button
  type={type}
  class="button {style} is-small"
  on:click
  disabled={disabled}
>
  {#if iconLeft}
    <i class={iconLeft} style="margin-right:5px;" />
  {/if}
  <span>
    <slot />
  </span>
  {#if iconRight}
    <i class={iconRight} style="margin-left:5px;" />
  {/if}
</button>

<style>
  button:not(:last-child) {
    margin-right: 5px;
  }
</style>
