<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Editor, EditorView } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("Editor");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/editor">Editor</a>`
  );

  let txt, txt2;
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Editor bind:value={txt} placeholder="Description" />
<EditorView bind:value={txt} />

<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  let txt;
</script>
<Editor bind:value={txt} placeholder="Description" />
<EditorView bind:value={txt} />`}
  />
</figure>

<h2>Size</h2>
<p>Default width is 100% and default height is auto</p>
<div class="columns">
  <div class="column">
    <Editor bind:value={txt2} height="300" />
  </div>
  <div class="column">
    <div style="border:1px solid #EEE;border-radius:4px;padding:5px;">
      <EditorView bind:value={txt2} width="100%" height="300" />
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
    <Editor bind:value={txt2} height="300" />
  </div>
  <div class="column">
    <div style="border:1px solid #EEE;border-radius:4px;padding:5px;">
      <EditorView bind:value={txt2} width="100%" height="300" />
    </div>
  </div>
</div>`}
  />
</figure>

<style lang="scss"></style>
