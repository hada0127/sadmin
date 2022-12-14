<script>
  export let active = false;
  export let close;
  export const closeModal = () => {
    if (close !== "key") {
      active = false;
    }
  };
  const closeModalSystemButton = () => {
    if (close !== "user") {
      active = false;
    }
  };
  const closeModalBg = () => {
    if (!close) {
      active = false;
    }
  };
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;
    if (e.keyCode === 27 && (!close || close === "key")) {
      // Escape key
      active = false;
    }
  });
</script>

<div class="modal" class:is-active={active}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="modal-background" on:click={closeModalBg} />
  <div class="modal-content">
    <slot {closeModal} />
  </div>
  {#if close !== "key"}
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={closeModalSystemButton}
    />
  {/if}
</div>

<style lang="scss">
</style>
