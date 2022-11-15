<script>
  import Layout from "@components/templates/Layout.svelte";
  import Field from "@components/atoms/Field.svelte";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  let pageTitle = "Checkbox & Radio";
  let pagePath = `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/checkbox">Checkbox & Radio</a>`;
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<Layout {pageTitle} {pagePath}>
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
</Layout>
