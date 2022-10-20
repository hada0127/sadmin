<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  import { Toggle } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  let page = $params.page;
  pageTitle.set("Component Toggle");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/toggle">Component Toggle</a>`
  );
  let toggleChecked = true;
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Toggle>Toggle</Toggle>
<Toggle checked>Toggle</Toggle>
<figure class="highlight">
  <HighlightSvelte
    code={`<Toggle>Toggle</Toggle>
<Toggle checked>Toggle</Toggle>`}
  />
</figure>

<h2>Colors</h2>
<p>Default color is "is-primary"</p>
<Toggle class="is-primary" checked>Toggle</Toggle>
<Toggle class="is-link" checked>Toggle</Toggle>
<Toggle class="is-info" checked>Toggle</Toggle>
<Toggle class="is-success" checked>Toggle</Toggle>
<Toggle class="is-warning" checked>Toggle</Toggle>
<Toggle class="is-danger" checked>Toggle</Toggle>
<figure class="highlight" checked>
  <HighlightSvelte
    code={`<Toggle class="is-primary">Toggle</Toggle>
<Toggle class="is-link">Toggle</Toggle>
<Toggle class="is-info">Toggle</Toggle>
<Toggle class="is-success">Toggle</Toggle>
<Toggle class="is-warning">Toggle</Toggle>
<Toggle class="is-danger">Toggle</Toggle>`}
  />
</figure>

<h2>Disabled</h2>
<Toggle disabled>Toggle</Toggle>
<Toggle disabled checked>Toggle</Toggle>
<figure class="highlight">
  <HighlightSvelte
    code={`<Toggle disabled>Toggle</Toggle>
<Toggle disabled checked>Toggle</Toggle>`}
  />
</figure>
<h2>Binding</h2>
<Toggle bind:checked={toggleChecked}>Toggle</Toggle>
<p>{toggleChecked}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  let toggleChecked = true;
</script>
<Toggle bind:checked={toggleChecked}>Toggle</Toggle>
<p>{toggleChecked}</p>`}
  />
</figure>

<style lang="scss"></style>
