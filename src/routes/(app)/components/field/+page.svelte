<script>
  import Field from '$components/atoms/Field.svelte';
  import Input from '$components/atoms/Input.svelte';
  import { Highlight } from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Field');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/tabs">Field</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Field label="Title" required>
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Field memo">
  <Input placeholder="Field memo & Input memo duplicated" memo="Input memo" class="is-fullwidth" />
</Field>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Field label="Title" required>
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Field guide">
  <Input placeholder="name" memo="Input guide" class="is-fullwidth" />
</Field>`}
  />
</figure>

<h2>Colors</h2>
<Field label="Title" memo="Guide text" class="is-primary">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-link">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-info">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-success">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-warning">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-danger">
  <Input placeholder="name" />
</Field>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Field label="Title" memo="Guide text" class="is-primary">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-link">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-info">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-success">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-warning">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text" class="is-danger">
  <Input placeholder="name" />
</Field>`}
  />
</figure>

<style lang="scss"></style>
