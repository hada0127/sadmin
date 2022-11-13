<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("Modal");
  pagePath.set(
    `&gt; <a href="/components/field">Component</a> &gt; <a href="/components/modal">Modal</a>`
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
