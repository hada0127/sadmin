<script lang="ts">
  import Toggle from '$components/atoms/Toggle.svelte';
  import { HighlightSvelte, Highlight } from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Toggle');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/toggle">Toggle</a>`
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
  <Highlight
    language={html}
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
<figure class="highlight">
  <Highlight
    language={html}
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
  <Highlight
    language={html}
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
<\u002Fscript>
<Toggle bind:checked={toggleChecked}>Toggle</Toggle>
<p>{toggleChecked}</p>`}
  />
</figure>

<style lang="scss"></style>
