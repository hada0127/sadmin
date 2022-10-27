<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Label, Input } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("Label");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/tabs">Label</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Label label="Title" required>
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Label memo">
  <Input
    placeholder="Label memo & Input memo duplicated"
    memo="Input memo"
    class="is-fullwidth"
  />
</Label>
<Label label="Title" memo="Guide text" disabled>
  <Input placeholder="name" disabled />
</Label>
<figure class="highlight">
  <HighlightSvelte
    code={`<Label label="Title" required>
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Label guide">
  <Input placeholder="name" memo="Input guide" class="is-fullwidth" />
</Label>
<Label label="Title" memo="Guide text" disabled>
  <Input placeholder="name" disabled />
</Label>`}
  />
</figure>

<h2>Colors</h2>
<Label label="Title" memo="Guide text" class="is-primary">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-link">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-info">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-success">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-warning">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-danger">
  <Input placeholder="name" />
</Label>
<figure class="highlight">
  <HighlightSvelte
    code={`<Label label="Title" memo="Guide text" class="is-primary">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-link">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-info">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-success">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-warning">
  <Input placeholder="name" />
</Label>
<Label label="Title" memo="Guide text" class="is-danger">
  <Input placeholder="name" />
</Label>`}
  />
</figure>

<style lang="scss"></style>
