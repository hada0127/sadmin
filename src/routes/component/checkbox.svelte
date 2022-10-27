<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Label } from "$lib/ui";
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
<Label class="checkbox">
  <input type="checkbox" />
  Remember me
</Label>
<Label class="checkbox">
  <input type="checkbox" />
  I agree to the <a href="#">terms and conditions</a>
</Label>
<Label label="Remember me" class="checkbox" disabled>
  <input type="checkbox" disabled />
  Remember me
</Label>
<figure class="highlight">
  <HighlightSvelte
    code={`<Label class="checkbox">
  <input type="checkbox" />
  Remember me
</Label>
<Label class="checkbox">
  <input type="checkbox" />
  I agree to the <a href="#">terms and conditions</a>
</Label>
<Label label="Remember me" class="checkbox" disabled>
  <input type="checkbox" disabled />
  Remember me
</Label>`}
  />
</figure>

<h2>Radio Basic</h2>
<Label label="Control" class="radio">
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
</Label>
<figure class="highlight">
  <HighlightSvelte
    code={`<Label class="checkbox">
  <input type="checkbox" />
  Remember me
</Label>
<Label class="checkbox">
  <input type="checkbox" />
  I agree to the <a href="#">terms and conditions</a>
</Label>
<Label label="Remember me" class="checkbox" disabled>
  <input type="checkbox" disabled />
  Remember me
</Label>`}
  />
</figure>
