<script lang="ts">
  import Input from '$components/atoms/Input.svelte';
  import Button from '$components/atoms/Button.svelte';
  import Modal from '$components/atoms/Modal.svelte';
  import SystemModalOkButton from '$components/atoms/SystemModalOkButton.svelte';
  import IconComplete from '$components/icons/IconComplete.svelte';
  import IconLoading from '$components/icons/IconLoading.svelte';

  let closeModal: (() => void) | null = null;
  export let callbackFunction: (() => void) | null = null;
  export let modalMessage = '-';
  export let modalType = 'alert';
  export let active = false;
  export let promptText = '';
  export let promptplaceholder = '';
  let disabled = true;
  $: disabled = promptText === 'delete' ? false : true;

  let handleDelete: () => void;
  $: handleDelete = () => {
    promptText = '';
    callbackFunction && callbackFunction();
  };
  export let isComplete = false;
  let loadingText: string;
  $: loadingText = isComplete === true ? 'Completed' : 'Processing';
</script>

<Modal bind:active bind:closeModal close="user">
  <div class="box {modalType}">
    {#if modalType === 'alert'}
      <h2>{modalMessage}</h2>
      <SystemModalOkButton bind:callbackFunction {closeModal} class="is-350 is-h40 is-primary" />
    {:else if modalType === 'confirm'}
      <h2>{modalMessage}</h2>
      <div class="buttons">
        <Button on:click={closeModal} class="is-180 is-h40">Cancel</Button>
        <SystemModalOkButton bind:callbackFunction class="is-180 is-h40 is-primary" />
      </div>
    {:else if modalType === 'prompt'}
      <h2>{modalMessage}</h2>
      <Input bind:value={promptText} class="is-384" bind:promptplaceholder />
      <div class="buttons">
        <Button on:click={closeModal} class="is-180 is-h40">Cancel</Button>
        <SystemModalOkButton bind:callbackFunction class="is-180 is-h40 is-primary" />
      </div>
    {:else if modalType === 'remove'}
      <div><img src="/layout/system/iconRemove.svg" alt="" /></div>
      <h2>Do you want to delete the current data?</h2>
      <div>
        <Input bind:value={promptText} class="is-384" placeholder="delete" />
        <p class="help">To confirm the deletion, enter 'delete' in the field.</p>
      </div>
      <div class="buttons">
        <Button on:click={closeModal} class="is-180 is-h40">Cancel</Button>
        <Button class="is-180 is-h40 is-danger" on:click={handleDelete} {disabled}>Delete</Button>
      </div>
    {:else if modalType === 'loading'}
      <div class="svgs">
        {#if isComplete}
          <IconComplete />
        {:else}
          <IconLoading />
        {/if}
      </div>
      <h2>{loadingText}</h2>
      <div class="buttons" class:transparent={isComplete === false}>
        <SystemModalOkButton bind:callbackFunction {closeModal} class="is-350 is-h40 is-primary" />
      </div>
    {/if}
  </div>
</Modal>

<style lang="scss">
  .box {
    margin: 0 auto;
    width: 460px;
    padding: 10px 0;
    height: 180px;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    gap: 40px;
    > :global(h2) {
      margin-top: 0;
      font-size: 20px;
      font-weight: 700;
      color: #000;
    }
    :global(p.help) {
      text-align: left;
    }
    > :global(div.buttons) {
      gap: 19px;
    }
    &.prompt {
      height: 240px;
      gap: 30px;
    }
    &.remove {
      height: 270px;
      gap: 15px;
    }
    &.loading {
      height: 260px;
      gap: 15px;
      .svgs {
        position: relative;
      }
      .transparent {
        :global(button) {
          opacity: 0;
        }
      }
      :global(button) {
        transition: 0.5s;
      }
      :global(svg) {
        width: 49px;
        height: 49px;
      }
    }
  }
</style>
