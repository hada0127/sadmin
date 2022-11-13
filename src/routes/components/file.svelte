<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { File } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("File");
  pagePath.set(
    `&gt; <a href="/components/field">Component</a> &gt; <a href="/components/file">File</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<File id="thumnail" name="thumnail" />
<File name="thumnail" multiple />
<figure class="highlight">
  <HighlightSvelte
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
  <HighlightSvelte
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
<File
  name="thumnail"
  class="is-boxed is-warning"
  icon="fas fa-cloud-upload-alt"
/>
<figure class="highlight">
  <HighlightSvelte
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
  <HighlightSvelte
    code={`<File name="thumnail" class="is-primary" accept=".jpg, .jpeg, .gif, .png" />`}
  />
</figure>

<style lang="scss"></style>
