<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  import { Label, Button } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  let page = $params.page;
  pageTitle.set("Component Button");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/button">Component Button</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Button>button</Button>
<figure class="highlight">
  <HighlightSvelte code={`<Button>button</Button>`} />
</figure>

<h2>Type</h2>
<p>Default type is "button"</p>
<Button style="is-primary" type="submit">submit</Button>
<Button style="" type="reset">reset</Button>
<figure class="highlight">
  <HighlightSvelte code={`<Button>button</Button>`} />
</figure>

<h2>Colors</h2>
<Button style="is-white">white</Button>
<Button style="is-light">light</Button>
<Button style="is-dark">dark</Button>
<Button style="is-black">black</Button>
<Button style="is-text">text</Button>
<Button style="is-ghost">ghost</Button>
<figure class="highlight">
  <HighlightSvelte
    code={`<Button style="is-white">white</Button>
<Button style="is-light">light</Button>
<Button style="is-dark">dark</Button>
<Button style="is-black">black</Button>
<Button style="is-text">text</Button>
<Button style="is-ghost">ghost</Button>
`}
  />
</figure>
<div class="mt-4">
  <Button style="is-primary">primary</Button>
  <Button style="is-link">link</Button>
  <Button style="is-info">info</Button>
  <Button style="is-success">success</Button>
  <Button style="is-warning">warning</Button>
  <Button style="is-danger">danger</Button>
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<Button style="is-primary">primary</Button>
<Button style="is-link">link</Button>
<Button style="is-info">info</Button>
<Button style="is-success">success</Button>
<Button style="is-warning">warning</Button>
<Button style="is-danger">danger</Button>
`}
  />
</figure>

<h2>Styles</h2>
<div>
  <h3>Outlined</h3>
  <Button style="is-primary is-outlined">primary</Button>
  <Button style="is-link is-outlined">link</Button>
  <Button style="is-info is-outlined">info</Button>
  <Button style="is-success is-outlined">success</Button>
  <Button style="is-warning is-outlined">warning</Button>
  <Button style="is-danger is-outlined">danger</Button>
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<Button style="is-primary is-outlined">primary</Button>
<Button style="is-link is-outlined">link</Button>
<Button style="is-info is-outlined">info</Button>
<Button style="is-success is-outlined">success</Button>
<Button style="is-warning is-outlined">warning</Button>
<Button style="is-danger is-outlined">danger</Button>
`}
  />
</figure>
<div class="mt-4">
  <h3>Inverted</h3>
  <Button style="is-primary is-inverted">primary</Button>
  <Button style="is-link is-inverted">link</Button>
  <Button style="is-info is-inverted">info</Button>
  <Button style="is-success is-inverted">success</Button>
  <Button style="is-danger is-inverted">danger</Button>
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<Button style="is-primary is-inverted">primary</Button>
<Button style="is-link is-inverted">link</Button>
<Button style="is-info is-inverted">info</Button>
<Button style="is-success is-inverted">success</Button>
<Button style="is-danger is-inverted">danger</Button>
`}
  />
</figure>
<h2>Click Event & Status</h2>
<p>
  If the Status is 'is-static' or 'is-loading' or 'disabled', the Click event
  will not work.
</p>
<Button
  style="is-primary"
  on:click={() => {
    alert("click!");
  }}>click</Button
>
<Button
  style="is-primary is-static"
  on:click={() => {
    alert("click!");
  }}>static</Button
>
<Button
  style="is-primary is-loading"
  on:click={() => {
    alert("click!");
  }}>loading</Button
>
<Button
  style="is-primary"
  disabled
  on:click={() => {
    alert("click!");
  }}>disabled</Button
>
<figure class="highlight">
  <HighlightSvelte
    code={`<Button style="is-primary" on:click={() => { alert("click!");}}>static</Button>
<Button style="is-primary is-static' on:click={() => { alert("click!");}}>static</Button>
<Button style="is-primary is-loading' on:click={() => { alert("click!");}}>loading</Button>
<Button style="is-primary' disabled on:click={() => { alert("click!");}}>disabled</Button>`}
  />
</figure>

<h2>Icon</h2>
<p>
  Using Font Awesome (<a
    href="https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/"
    target="_blank">Spec Sheet</a
  >)
</p>
<Button style="is-primary" iconLeft="fab fa-github">button</Button>
<Button style="is-success" iconLeft="fas fa-check">button</Button>
<Button style="is-danger is-outlined" iconRight="fas fa-times">button</Button>
<figure class="highlight">
  <HighlightSvelte
    code={`<Button style="is-primary" iconLeft="fab fa-github">button</Button>
<Button style="is-success" iconLeft="fas fa-check">button</Button>
<Button style="is-danger is-outlined" iconRight="fas fa-times">button</Button>`}
  />
</figure>

<style lang="scss"></style>
