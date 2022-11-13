<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Toggle } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("Toggle");
  pagePath.set(
    `&gt; <a href="/components/field">Component</a> &gt; <a href="/components/toggle">Toggle</a>`
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
<Toggle style="is-primary" checked>Toggle</Toggle>
<Toggle style="is-link" checked>Toggle</Toggle>
<Toggle style="is-info" checked>Toggle</Toggle>
<Toggle style="is-success" checked>Toggle</Toggle>
<Toggle style="is-warning" checked>Toggle</Toggle>
<Toggle style="is-danger" checked>Toggle</Toggle>
<figure class="highlight" checked>
  <HighlightSvelte
    code={`<Toggle style="is-primary">Toggle</Toggle>
<Toggle style="is-link">Toggle</Toggle>
<Toggle style="is-info">Toggle</Toggle>
<Toggle style="is-success">Toggle</Toggle>
<Toggle style="is-warning">Toggle</Toggle>
<Toggle style="is-danger">Toggle</Toggle>`}
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
