<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("Editor");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/editor">Editor</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<figure class="highlight">
  <HighlightSvelte code={``} />
</figure>

<style lang="scss"></style>
