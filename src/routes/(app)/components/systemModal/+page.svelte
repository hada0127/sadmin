<script lang="ts">
  import Button from '$components/atoms/Button.svelte';
  import SystemModal from '$components/modules/SystemModal.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('System Modal');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/systemModal">System Modal</a>`
  );
  let modalActive = false;
  let modalMessage = '';
  let modalType = 'alert';
  let promptText = '';
  let isComplete = false;

  var handleOk: (() => void) | null = null;
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Base Setting</h2>
<SystemModal
  bind:modalType
  bind:modalMessage
  bind:promptText
  bind:isComplete
  bind:callbackFunction={handleOk}
  bind:active={modalActive}
/>

<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let modalActive = false;
  let modalMessage = '';
  let modalType = 'alert';
  let promptText = '';
  let isComplete = false;

  var handleOk: (() => void) | null = null;
<\u002Fscript>
<SystemModal
  bind:modalType
  bind:modalMessage
  bind:promptText
  bind:isComplete
  bind:callbackFunction={handleOk}
  bind:active={modalActive}
/>`}
  />
</figure>

<h2>Cases</h2>
<Button
  on:click={() => {
    //
    handleOk = null;
    modalType = 'alert';
    modalActive = true;
    modalMessage = 'Alert Test';
  }}>alert(nohandle)</Button
>

<Button
  on:click={() => {
    //
    handleOk = () => {
      alert('alert - callback');
      modalActive = false;
    };
    modalType = 'alert';
    modalActive = true;
    modalMessage = 'Alert Test(callback)';
  }}>alert(callback)</Button
>

<Button
  on:click={() => {
    //
    handleOk = () => {
      alert(`prompt - ${promptText}`);
      promptText = '';
      modalActive = false;
    };
    promptText = '';
    modalType = 'prompt';
    modalActive = true;
    modalMessage = 'Prompt Test';
  }}>prompt(callback)</Button
>

<Button
  on:click={() => {
    //
    handleOk = () => {
      alert(`remove`);
      modalActive = false;
    };
    promptText = '';
    modalType = 'remove';
    modalActive = true;
  }}>remove(callback)</Button
>
<Button
  on:click={() => {
    //
    handleOk = () => {
      alert(`loading`);
      modalActive = false;
    };
    isComplete = false;
    modalType = 'loading';
    setTimeout(() => {
      isComplete = true;
    }, 2000);
    modalActive = true;
  }}>loading(callback)</Button
>
<figure class="highlight">
  <HighlightSvelte
    code={`<Button
  on:click={() => {
    //
    handleOk = null;
    modalType = 'alert';
    modalActive = true;
    modalMessage = 'Alert Test';
  }}>alert(nohandle)</Button
>

<Button
  on:click={() => {
    //
    handleOk = () => {
      alert('alert - callback');
      modalActive = false;
    };
    modalType = 'alert';
    modalActive = true;
    modalMessage = 'Alert Test(callback)';
  }}>alert(callback)</Button
>

<Button
  on:click={() => {
    //
    handleOk = () => {
      alert(\`prompt - \${promptText}\`);
      promptText = '';
      modalActive = false;
    };
    promptText = '';
    modalType = 'prompt';
    modalActive = true;
    modalMessage = 'Prompt Test';
  }}>prompt(callback)</Button
>

<Button
  on:click={() => {
    //
    handleOk = () => {
      alert("remove");
      modalActive = false;
    };
    promptText = '';
    modalType = 'remove';
    modalActive = true;
  }}>remove(callback)</Button
>
<Button
  on:click={() => {
    //
    handleOk = () => {
      alert("loading");
      modalActive = false;
    };
    isComplete = false;
    modalType = 'loading';
    setTimeout(() => {
      isComplete = true;
    }, 2000);
    modalActive = true;
  }}>loading(callback)</Button
>`}
  />
</figure>

<style lang="scss"></style>
