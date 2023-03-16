<script lang="ts">
  import Button from '$components/atoms/Button.svelte';
  export let closeModal: (() => void) | null = null;
  export let callbackFunction: (() => void) | null = null;
  export let inheritsClass: string = $$props.class ? $$props.class : '';
</script>

{#if callbackFunction}
  <Button
    class={inheritsClass}
    on:click={() => {
      console.log(callbackFunction);
      callbackFunction && callbackFunction();
    }}>Ok</Button
  >
{:else}
  <Button class="modal-close-user {inheritsClass}" on:click={closeModal}>Ok</Button>
{/if}
