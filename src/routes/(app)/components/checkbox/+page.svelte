<script lang="ts">
  import Field from '$components/atoms/Field.svelte';
  import { Highlight } from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Checkbox & Radio');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/checkbox">Checkbox & Radio</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Checkbox Basic</h2>
<Field class="checkbox">
  <label>
    <input type="checkbox" name="checkbox01" />
    Remember me
  </label>
</Field>
<Field class="checkbox">
  <label>
    <input type="checkbox" />
    <!-- svelte-ignore a11y-invalid-attribute -->
    I agree to the <a href="#">terms and conditions</a>
  </label>
</Field>
<Field label="Remember me" class="checkbox">
  <label class="disabled">
    <input type="checkbox" disabled />
    Remember me
  </label>
</Field>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Field class="checkbox">
  <label>
    <input type="checkbox" name="checkbox01" />
    Remember me
  </label>
</Field>
<Field class="checkbox">
  <label>
    <input type="checkbox" />
    I agree to the <a href="#">terms and conditions</a>
  </label>
</Field>
<Field label="Remember me" class="checkbox">
  <label class="disabled">
    <input type="checkbox" disabled />
    Remember me
  </label>
</Field>`}
  />
</figure>

<h2>Radio Basic</h2>
<Field label="Control" class="radio">
  <label>
    <input type="radio" name="rsvp" />
    Going
  </label>
  <label>
    <input type="radio" name="rsvp" />
    Not going
  </label>
  <label class="disabled">
    <input type="radio" name="rsvp" disabled />
    Maybe
  </label>
</Field>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Field label="Control" class="radio">
  <label>
    <input type="radio" name="rsvp" />
    Going
  </label>
  <label>
    <input type="radio" name="rsvp" />
    Not going
  </label>
  <label class="disabled">
    <input type="radio" name="rsvp" disabled />
    Maybe
  </label>
</Field>`}
  />
</figure>
