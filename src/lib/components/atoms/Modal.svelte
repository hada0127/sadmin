<script lang="ts">
  import { onMount } from 'svelte';

  export let active = false;
  export let close = '';
  export const closeModal: (() => void) | null = () => {
    if (close !== 'key') {
      active = false;
    }
  };
  const closeModalSystemButton = () => {
    if (close !== 'user') {
      active = false;
    }
  };
  const closeModalBg = () => {
    if (!close) {
      active = false;
    }
  };
  onMount(() => {
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
      if (e.key === 'Escape' && (!close || close === 'key')) {
        // Escape key
        active = false;
      }
    });
  });
</script>

<div class="modal" class:is-active={active}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="modal-background" on:click={closeModalBg} />
  <div class="modal-content">
    <slot />
  </div>
  {#if close !== 'key' && close !== 'user'}
    <button class="modal-close is-large" aria-label="close" on:click={closeModalSystemButton} />
  {/if}
</div>

<style lang="scss">
</style>
