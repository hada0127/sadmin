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
  $: loadingText = isComplete === true ? 'Completed' : 'Processing.';
</script>

<Modal bind:active bind:closeModal close="user">
  <div class="box {modalType}">
    {#if modalType === 'alert'}
      <p>{@html modalMessage}</p>
      <div class="buttons">
        <SystemModalOkButton bind:callbackFunction {closeModal} class="is-primary btn-modal" />
      </div>
    {:else if modalType === 'confirm'}
      <p>{@html modalMessage}</p>
      <div class="buttons">
        <Button on:click={closeModal} class="btn-modal">Cancel</Button>
        <SystemModalOkButton bind:callbackFunction class="is-primary btn-modal" />
      </div>
    {:else if modalType === 'prompt'}
      <p>{@html modalMessage}</p>
      <Input bind:value={promptText} class="is-384" bind:promptplaceholder />
      <div class="buttons">
        <Button on:click={closeModal} class="btn-modal">Cancel</Button>
        <SystemModalOkButton bind:callbackFunction class="is-primary btn-modal" />
      </div>
    {:else if modalType === 'remove'}
      <div class="icons">
        <img src="/layout/system/iconRemove.svg" alt="" />
        <p>Do you want to delete the current data?</p>
      </div>
      <div>
        <Input bind:value={promptText} class="is-384" placeholder="delete" />
        <p class="help">To confirm the deletion, enter 'delete' in the field.</p>
      </div>
      <div class="buttons">
        <Button on:click={closeModal} class="btn-modal">Cancel</Button>
        <Button on:click={handleDelete} {disabled} class="is-danger btn-modal">Delete</Button>
      </div>
    {:else if modalType === 'loading'}
      <div class="icons">
        <div>
          {#if isComplete}
            <IconComplete />
          {:else}
            <IconLoading />
          {/if}
        </div>
        <p>{loadingText}</p>
      </div>
      <div class="buttons">
        <Button on:click={handleDelete} disabled={!isComplete} class="is-success btn-modal"
          >Ok</Button
        >
      </div>
    {/if}
  </div>
</Modal>

<style lang="scss">
  .box {
    position: relative;
    margin: 0 auto;
    width: 460px;
    padding: 45px 40px 25px 40px;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
    gap: 30px;

    .icons {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: start;
      align-content: stretch;
      align-items: center;
      gap: 20px;
      > p {
        display: inline-block;
        min-height: 0;
        width: fit-content;
        height: fit-content;
      }
    }
    :global(p:not(.help)) {
      width: 100%;
      min-height: 54px;
      margin-top: 0;
      font-size: 16px;
      color: #000;
    }
    > :global(div.buttons) {
      width: 100%;
      justify-content: end;
      gap: 20px;
    }
    :global(img),
    :global(svg) {
      width: 35px;
      height: 35px;
      vertical-align: middle;
    }
    :global(.btn-modal) {
      width: 100px;
      height: 36px;
      font-weight: 700;
      border-radius: 18px !important;
      margin-left: 0;
      margin-right: 0 !important;
      margin-bottom: 0 !important;
    }
    :global(.buttons:last-child) {
      margin-bottom: 0 !important;
    }
    &.prompt {
      gap: 30px;
      p {
        min-height: 0;
      }
    }
    &.remove {
      gap: 15px;
    }
    &.loading {
      gap: 15px;
      :global(button) {
        transition: 0.5s;
      }
    }
  }
</style>
