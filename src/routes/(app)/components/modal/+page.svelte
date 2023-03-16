<script lang="ts">
  import Button from '$components/atoms/Button.svelte';
  import Modal from '$components/atoms/Modal.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Modal');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/modal">Modal</a>`
  );
  let modalDefault: boolean;
  let modalCloseButton: boolean;
  let modalCloseKey: boolean;
  let modalCloseUser: boolean;
  let closeModal: (() => void) | null = null;
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Button
  on:click={() => {
    modalDefault = !modalDefault;
  }}>Basic Modal</Button
>
<Modal bind:active={modalDefault}>
  <div class="box">test</div>
</Modal>

<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let modalDefault: boolean;
<\u002Fscript>
<Button
  on:click={() => {
    modalDefault = !modalDefault;
  }}>Basic Modal</Button
>
<Modal bind:active={modalDefault}>
  <div class="box">test</div>
</Modal>`}
  />
</figure>

<h2>Close Options</h2>
<table class="table is-fullwidth is-hoverable is-fixed">
  <thead>
    <tr>
      <th>Option Name</th>
      <th>System Close Button</th>
      <th>User Close Button</th>
      <th>Background Click</th>
      <th>Esc Key</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Default Setting</td>
      <td>👌</td>
      <td>👌</td>
      <td>👌</td>
      <td>👌</td>
    </tr>
    <tr>
      <td>button</td>
      <td>👌</td>
      <td>👌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>key</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>👌</td>
    </tr>
    <tr>
      <td>user</td>
      <td>❌</td>
      <td>👌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>
<Button
  on:click={() => {
    modalCloseButton = !modalCloseButton;
  }}>close="button"</Button
>
<Modal bind:active={modalCloseButton} close="button">
  <div class="box">test</div>
</Modal>

<Button
  on:click={() => {
    modalCloseKey = !modalCloseKey;
  }}>close="key"</Button
>
<Modal bind:active={modalCloseKey} close="key">
  <div class="box">close="key"</div>
</Modal>

<Button
  on:click={() => {
    modalCloseUser = !modalCloseUser;
  }}>close="user"</Button
>
<Modal bind:active={modalCloseUser} bind:closeModal close="user">
  <div class="box">
    <p>close="user"</p>
    <Button class="modal-close-user" on:click={closeModal}>close</Button>
  </div>
</Modal>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let modalCloseButton: boolean;
  let modalCloseKey: boolean;
  let modalCloseUser: boolean;
  let closeModal: (() => void) | undefined;
<\u002Fscript>
<Button
  on:click={() => {
    modalCloseButton = !modalCloseButton;
  }}>close="button"</Button
>
<Modal bind:active={modalCloseButton} close="button">
  <div class="box">test</div>
</Modal>

<Button
  on:click={() => {
    modalCloseKey = !modalCloseKey;
  }}>close="key"</Button
>
<Modal bind:active={modalCloseKey} close="key">
  <div class="box">close="key"</div>
</Modal>

<Button
  on:click={() => {
    modalCloseUser = !modalCloseUser;
  }}>close="user"</Button
>
<Modal bind:active={modalCloseUser} bind:closeModal close="user">
  <div class="box">
    <p>close="user"</p>
    <Button class="modal-close-user" on:click={closeModal}>close</Button>
  </div>
</Modal>`}
  />
</figure>

<style lang="scss"></style>
