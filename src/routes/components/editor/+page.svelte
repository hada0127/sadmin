<script>
	import Layout from '$components/templates/Layout.svelte';
	import Editor from '$components/atoms/Editor.svelte';
	import EditorView from '$components/atoms/EditorView.svelte';
	import { HighlightSvelte } from 'svelte-highlight';
	import highlightStyle from 'svelte-highlight/styles/vs2015';

	let pageTitle = 'Editor';
	let pagePath = `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/editor">Editor</a>`;

	let txt, txt2, txt3;
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
</script>

<svelte:head>
	{@html highlightStyle}
</svelte:head>

<Layout {pageTitle} {pagePath}>
	<h2>Basic</h2>
	<Editor bind:value={txt} placeholder="Description" />
	<div class="mt-2">
		<EditorView bind:value={txt} />
	</div>

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

	<h2>Toolbar</h2>
	<p>
		Using SunEditor (<a
			href="https://github.com/JiHong88/SunEditor/blob/master/README.md"
			target="_blank">Readme</a
		>)
	</p>
	<Editor bind:value={txt3} {toolbar} />
	<div class="mt-2">
		<EditorView bind:value={txt3} />
	</div>
	<figure class="highlight">
		<HighlightSvelte
			code={`<script>
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
  </script>
  <Editor bind:value={txt3} {toolbar} />
  <EditorView bind:value={txt3} />
  `}
		/>
	</figure>
</Layout>

<style lang="scss"></style>
