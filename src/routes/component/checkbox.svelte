<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Field } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  pageTitle.set("Checkbox & Radio");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/checkbox">Checkbox & Radio</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Checkbox Basic</h2>
<Field class="checkbox">
  <input type="checkbox" />
  Remember me
</Field>
<Field class="checkbox">
  <input type="checkbox" />
  <!-- svelte-ignore a11y-invalid-attribute -->
  I agree to the <a href="#">terms and conditions</a>
</Field>
<Field label="Remember me" class="checkbox" disabled>
  <input type="checkbox" disabled />
  Remember me
</Field>
<figure class="highlight">
  <HighlightSvelte
    code={`<Field class="checkbox">
  <input type="checkbox" />
  Remember me
</Field>
<Field class="checkbox">
  <input type="checkbox" />
  I agree to the <a href="#">terms and conditions</a>
</Field>
<Field label="Remember me" class="checkbox" disabled>
  <input type="checkbox" disabled />
  Remember me
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
  <label disabled>
    <input type="radio" name="rsvp" disabled />
    Maybe
  </label>
</Field>
<figure class="highlight">
  <HighlightSvelte
    code={`<Field label="Control" class="radio">
  <label>
    <input type="radio" name="rsvp" />
    Going
  </label>
  <label>
    <input type="radio" name="rsvp" />
    Not going
  </label>
  <label disabled>
    <input type="radio" name="rsvp" disabled />
    Maybe
  </label>
</Field>`}
  />
</figure>
