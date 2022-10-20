<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  import { File } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  let page = $params.page;
  pageTitle.set("Component File");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/file">Component File</a>`
  );
  let toggleChecked = true;
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
  <File name="thumnail" style="is-primary" />
  <File name="thumnail" style="is-link" />
  <File name="thumnail" style="is-info" />
</div>
<div class="mt-2">
  <File name="thumnail" style="is-success" />
  <File name="thumnail" style="is-warning" />
  <File name="thumnail" style="is-danger" />
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<File name="thumnail" style="is-primary" />
<File name="thumnail" style="is-link" />
<File name="thumnail" style="is-info" />
<File name="thumnail" style="is-success" />
<File name="thumnail" style="is-warning" />
<File name="thumnail" style="is-danger" />`}
  />
</figure>

<h2>Icon & Styles</h2>
<File name="thumnail" style="is-boxed is-primary" />
<File
  name="thumnail"
  style="is-boxed is-warning"
  icon="fas fa-cloud-upload-alt"
/>
<figure class="highlight">
  <HighlightSvelte
    code={`<File name="thumnail" style="is-boxed is-primary" />
<File
  name="thumnail"
  style="is-boxed is-warning"
  icon="fas fa-cloud-upload-alt"
/>`}
  />
</figure>

<h2>Accept</h2>
<File name="thumnail" accept=".jpg, .jpeg, .gif, .png" />
<figure class="highlight">
  <HighlightSvelte
    code={`<File name="thumnail" style="is-primary" accept=".jpg, .jpeg, .gif, .png" />`}
  />
</figure>

<style lang="scss"></style>
