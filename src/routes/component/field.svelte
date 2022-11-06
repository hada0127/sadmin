<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Field, Input } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("Field");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/tabs">Field</a>`
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
  <Input
    placeholder="Field memo & Input memo duplicated"
    memo="Input memo"
    class="is-fullwidth"
  />
</Field>
<Field label="Title" memo="Guide text" disabled>
  <Input placeholder="name" disabled />
</Field>
<figure class="highlight">
  <HighlightSvelte
    code={`<Field label="Title" required>
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Guide text">
  <Input placeholder="name" />
</Field>
<Field label="Title" memo="Field guide">
  <Input placeholder="name" memo="Input guide" class="is-fullwidth" />
</Field>
<Field label="Title" memo="Guide text" disabled>
  <Input placeholder="name" disabled />
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
  <HighlightSvelte
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
