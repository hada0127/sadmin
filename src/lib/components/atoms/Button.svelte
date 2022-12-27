<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';

  export let inheritsClass = $$props.class ? $$props.class : '';

  export let iconLeft: string | null = null;
  export let iconRight: string | null = null;
  export let disabled = false;
</script>

<button {type} class="button {inheritsClass} is-small" on:click {disabled}>
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
