<script>
  export let type = 'button';

  export let setClass = null;

  export let iconLeft = null
  export let iconRight = null
</script>
<button
  type={type}
  class="button {setClass} is-small"
  on:click
  >
  {#if iconLeft}
    <i class="{iconLeft}" style="margin-right:5px;"></i>
  {/if}
  <span>
    <slot />
  </span>
  {#if iconRight}
    <i class="{iconRight}" style="margin-left:5px;"></i>
  {/if}
</button>
<style>
  button:not(:last-child) {
    margin-right:5px;
  }
</style>