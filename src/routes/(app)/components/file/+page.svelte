<script lang="ts">
  import File from '$components/atoms/File.svelte';
  import Button from '$components/atoms/Button.svelte';
  import { HighlightSvelte, Highlight } from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('File');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/file">File</a>`
  );

  let ref: HTMLInputElement | null;
  const setFocus = () => {
    ref && ref.focus();
  };
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<File id="thumnail" name="thumnail" />
<File name="thumnail" multiple />
<figure class="highlight">
  <Highlight
    language={html}
    code={`<File id="thumnail" name="thumnail" />
<File name="thumnail" multiple />`}
  />
</figure>

<h2>Colors</h2>
<div>
  <File name="thumnail" class="is-primary" />
  <File name="thumnail" class="is-link" />
  <File name="thumnail" class="is-info" />
</div>
<div class="mt-2">
  <File name="thumnail" class="is-success" />
  <File name="thumnail" class="is-warning" />
  <File name="thumnail" class="is-danger" />
</div>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<File name="thumnail" class="is-primary" />
<File name="thumnail" class="is-link" />
<File name="thumnail" class="is-info" />
<File name="thumnail" class="is-success" />
<File name="thumnail" class="is-warning" />
<File name="thumnail" class="is-danger" />`}
  />
</figure>

<h2>Icon & Styles</h2>
<File name="thumnail" class="is-boxed is-primary" />
<File name="thumnail" class="is-boxed is-warning" icon="fas fa-cloud-upload-alt" />
<figure class="highlight">
  <Highlight
    language={html}
    code={`<File name="thumnail" class="is-boxed is-primary" />
<File
  name="thumnail"
  class="is-boxed is-warning"
  icon="fas fa-cloud-upload-alt"
/>`}
  />
</figure>

<h2>Accept</h2>
<File name="thumnail" accept=".jpg, .jpeg, .gif, .png" />
<figure class="highlight">
  <Highlight
    language={html}
    code={`<File name="thumnail" class="is-primary" accept=".jpg, .jpeg, .gif, .png" />`}
  />
</figure>

<style lang="scss"></style>
