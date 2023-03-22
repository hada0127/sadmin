<script lang="ts">
  import Editor from '$components/atoms/Editor.svelte';
  import Button from '$components/atoms/Button.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  import type SunEditor from 'suneditor/src/lib/core';
  pageTitle.set('Editor');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/editor">Editor</a>`
  );

  let txt: string, txt2: string, txt3: string;
  let toolbar = [
    ['undo', 'redo', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
    [
      'bold',
      'underline',
      'italic',
      'strike',
      'subscript',
      'superscript',
      'fontColor',
      'hiliteColor',
      'textStyle',
      'removeFormat'
    ],
    ['outdent', 'indent', 'align', 'horizontalRule', 'list', 'lineHeight'],
    ['table', 'link', 'image', 'video', 'audio', 'imageGallery'],
    ['fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template']
  ];
  let ref: SunEditor | null = null;
  const setFocus = () => {
    ref && ref.core.focus();
  };
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Editor bind:value={txt} placeholder="Description" />
<div class="mt-2">
  <Editor bind:value={txt} view={true} />
</div>

<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let txt;
<\u002Fscript>
<Editor bind:value={txt} placeholder="Description" />
<Editor bind:value={txt} view={true} />`}
  />
</figure>

<h2>View</h2>
<Editor value="test Message" view={true} />
<figure class="highlight">
  <HighlightSvelte code={`<Editor value="test Message" view={true} />`} />
</figure>

<h2>Focus</h2>
<Editor bind:ref />
<Button on:click={setFocus}>Set Focus</Button>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  import type SunEditor from 'suneditor/src/lib/core';
  let ref: SunEditor | null = null;
  const setFocus = () => {
    ref && ref.core.focus();
  };
<\u002Fscript>
<Editor bind:ref />
<Button on:click={setFocus}>Set Focus</Button>`}
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
      <Editor bind:value={txt2} width="100%" height="300" view={true} />
    </div>
  </div>
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let txt2;
<\u002Fscript>
<div class="columns">
  <div class="column">
    <Editor bind:value={txt2} height="300" />
  </div>
  <div class="column">
    <div style="border:1px solid #EEE;border-radius:4px;padding:5px;">
      <Editor bind:value={txt2} width="100%" height="300" view={true} />
    </div>
  </div>
</div>`}
  />
</figure>

<h2>Toolbar</h2>
<p>
  Using SunEditor (<a
    href="https://github.com/JiHong88/SunEditor/blob/master/README.md"
    target="_blank"
    rel="noreferrer">Readme</a
  >)
</p>
<Editor bind:value={txt3} {toolbar} />
<div class="mt-2">
  <Editor bind:value={txt3} view={true} />
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let toolbar = [
    [
      "undo",
      "redo",
      "font",
      "fontSize",
      "formatBlock",
      "paragraphStyle",
      "blockquote",
    ],
    [
      "bold",
      "underline",
      "italic",
      "strike",
      "subscript",
      "superscript",
      "fontColor",
      "hiliteColor",
      "textStyle",
      "removeFormat",
    ],
    ["outdent", "indent", "align", "horizontalRule", "list", "lineHeight"],
    ["table", "link", "image", "video", "audio", "imageGallery"],
    [
      "fullScreen",
      "showBlocks",
      "codeView",
      "preview",
      "print",
      "save",
      "template",
    ],
  ];
<\u002Fscript>
<Editor bind:value={txt3} {toolbar} />
<Editor bind:value={txt3} view={true} />`}
  />
</figure>

<style lang="scss"></style>
