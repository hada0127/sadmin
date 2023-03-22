<script lang="ts">
  import Textarea from '$components/atoms/Textarea.svelte';
  import Button from '$components/atoms/Button.svelte';
  import { HighlightSvelte, Highlight } from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Textarea');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/textarea">Textarea</a>`
  );
  let reviewCheckResult = false;
  const reviewRegex = new RegExp(/^.{100,300}$/);
  let text = '';

  let ref: HTMLTextAreaElement | null;
  const setFocus = () => {
    ref && ref.focus();
  };
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Textarea bind:value={text} placeholder="description" rows={5} />
<Textarea bind:value={text} placeholder="description" rows={5} fixed />
<p>Input Text : {text}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let text;
<\u002Fscript>
<Textarea bind:value={text} placeholder="description" rows="5" />
<Textarea bind:value={text} placeholder="description" rows="5" fixed />
<p>{text}</p>`}
  />
</figure>

<h2>View</h2>
<Textarea value="test Message" placeholder="description" rows={5} view={true} />
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Textarea value="test Message" placeholder="description" rows={5} view={true} />`}
  />
</figure>

<h2>Colors</h2>
<Textarea class="is-primary" />
<Textarea class="is-link" />
<Textarea class="is-info" />
<Textarea class="is-success" />
<Textarea class="is-warning" />
<Textarea class="is-danger" />

<figure class="highlight">
  <Highlight
    language={html}
    code={`<Textarea class="is-primary" />
<Textarea class="is-link" />
<Textarea class="is-info" />
<Textarea class="is-success" />
<Textarea class="is-warning" />
<Textarea class="is-danger" />`}
  />
</figure>

<h2>Static & Readonly, Disabled</h2>
<Textarea class="is-static" value="is-static" readonly />
<Textarea value="readonly" readonly />
<Textarea value="disabled" disabled />

<figure class="highlight">
  <Highlight
    language={html}
    code={`<Textarea class="is-static" value="is-static" readonly />
<Textarea class="is-primary" value="readonly" readonly />
<Textarea value="disabled" disabled />`}
  />
</figure>

<h2>Focus</h2>
<Textarea bind:ref />
<Button on:click={setFocus}>Set Focus</Button>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let ref:HTMLInputElement | null;
  const setFocus = () => {
    ref && ref.focus();
  };
<\u002Fscript>
<Textarea bind:ref />
<Button on:click={setFocus}>Set Focus</Button>`}
  />
</figure>

<h2>memo</h2>
<Textarea
  placeholder="Description"
  iconLeft="fas fa-lock"
  memo="Please enter characters between 100 and 300 digits."
/>
<Textarea
  class="is-danger"
  placeholder="Description"
  iconLeft="fas fa-lock"
  memo="Please enter characters between 100 and 300 digits."
/>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Textarea
  placeholder="Password"
  iconLeft="fas fa-lock"
  memo="Please enter characters between 100 and 300 digits."
/>
<Textarea
  class="is-danger"
  placeholder="Password"
  iconLeft="fas fa-lock"
  memo="Please enter characters between 100 and 300 digits."
/>`}
  />
</figure>

<h2>Match</h2>
<p>Using Regex, success and invalid message</p>
<Textarea
  placeholder="Review"
  iconLeft="fas fa-lock"
  match={reviewRegex}
  maxlength={300}
  success="Success"
  invalid="Please enter characters between 100 and 300 digits."
  bind:matchResult={reviewCheckResult}
  class="is-fullwidth"
/>
<p>Review Check Result : {reviewCheckResult}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let reviewCheckResult = false;
  const reviewRegex = /^.{100,300}$/;
<\u002Fscript>
<Textarea
  placeholder="Review"
  iconLeft="fas fa-lock"
  match={reviewRegex}
  maxlength=300
  success="Success"
  invalid="Please enter characters between 100 and 300 digits."
  bind:matchResult={reviewCheckResult}
  class="is-fullwidth"
/>`}
  />
</figure>

<style lang="scss"></style>
