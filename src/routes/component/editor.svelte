<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Editor } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("Editor");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/editor">Editor</a>`
  );

  let txt, txt2, txt3;

  let toolbarOptions = [["bold", "italic", "underline", "strike"]];
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Editor bind:value={txt} placeholder="Description" />
<div class="ql-editor">{@html txt}</div>

<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  let txt;
</script>
<Editor bind:value={txt} placeholder="Description" />
<div class="ql-editor">{@html txt}</div>`}
  />
</figure>

<h2>Size</h2>
<div class="columns">
  <div class="column">
    <Editor bind:value={txt2} width="100%" height="300" />
  </div>
  <div class="column">
    <div
      class="ql-editor"
      style="width:100%;height:300px;overflow:hidden auto;border:1px solid #EEE;"
    >
      {@html txt2}
    </div>
  </div>
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<script>
    let txt2;
  </script>
<div class="columns">
  <div class="column">
    <Editor bind:value={txt2} width="100%" height="300" />
  </div>
  <div class="column">
    <div
      class="ql-editor"
      style="width:100%;height:300px;overflow:hidden auto;border:1px solid #EEE;"
    >
      {@html txt2}
    </div>
  </div>
</div>`}
  />
</figure>

<h2>Toolbar options</h2>
<p>
  <a href="https://quilljs.com/docs/modules/toolbar/" target="_blank"
    >Quill Toobar Module Manual</a
  >
</p>
<Editor bind:value={txt3} {toolbarOptions} />
<div class="ql-editor">{@html txt3}</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  let txt3;
  let toolbarOptions = [["bold", "italic", "underline", "strike"]];
</script>
<Editor bind:value={txt3} {toolbarOptions} />
<div class="ql-editor">{@html txt3}</div>`}
  />
</figure>

<style lang="scss"></style>
