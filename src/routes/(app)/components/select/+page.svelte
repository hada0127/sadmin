<script lang="ts">
  import Select from '$components/atoms/Select.svelte';
  import Button from '$components/atoms/Button.svelte';
  import { HighlightSvelte, Highlight } from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Select');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/select">Select</a>`
  );
  let bindSelectBasic = '1';
  let bindSelectPlaceholder = '';
  let bindSelectDisabled = '2';
  let bindSelectMultie = '';

  let ref: HTMLSelectElement | null;
  const setFocus = () => {
    ref && ref.focus();
  };
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Select>
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Select>
    <option value="1">Seoul</option>
    <option value="2">Jeju</option>
  </Select>`}
  />
</figure>

<h2>View</h2>
<Select value="1" view={true}>
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<figure class="highlight">
  <HighlightSvelte
    code={`<Select value="1" view={true}>
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>`}
  />
</figure>

<h2>Colors</h2>
<Select class="is-primary">
  <option value="1">primary</option>
</Select>
<Select class="is-link">
  <option value="1">link</option>
</Select>
<Select class="is-info">
  <option value="1">info</option>
</Select>
<Select class="is-success">
  <option value="1">success</option>
</Select>
<Select class="is-warning">
  <option value="1">warning</option>
</Select>
<Select class="is-danger">
  <option value="1">danger</option>
</Select>

<figure class="highlight">
  <Highlight
    language={html}
    code={`<Select class="is-primary">
  <option value="1">primary</option>
</Select>
<Select class="is-link">
  <option value="1">link</option>
</Select>
<Select class="is-info">
  <option value="1">info</option>
</Select>
<Select class="is-success">
  <option value="1">success</option>
</Select>
<Select class="is-warning">
  <option value="1">warning</option>
</Select>
<Select class="is-danger">
  <option value="1">danger</option>
</Select>`}
  />
</figure>

<h2>Icon</h2>
<p>
  Using Font Awesome (<a
    href="https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/"
    rel="noreferrer">Spec Sheet</a
  >)
</p>
<Select icon="fas fa-globe">
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Select>
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>`}
  />
</figure>

<h2>Focus</h2>
<Select bind:ref bind:value={bindSelectBasic}>
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<Button on:click={setFocus}>Set Focus</Button>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let ref:HTMLInputElement | null;
  const setFocus = () => {
    ref && ref.focus();
  };
<\u002Fscript>
<Select bind:ref bind:value={bindSelectBasic}>
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<Button on:click={setFocus}>Set Focus</Button>`}
  />
</figure>

<h2>Binding</h2>
<Select bind:value={bindSelectBasic}>
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<p>Selected value : {bindSelectBasic}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let bindSelect = "1";
<\u002Fscript>
<Select bind:value={bindSelect}>
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<p>Selected value : {bindSelect}</p>`}
  />
</figure>

<h2>Placeholder</h2>
<Select bind:value={bindSelectPlaceholder} placeholder="Select City">
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<p>Selected value : {bindSelectPlaceholder}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let bindSelect;
<\u002Fscript>
<Select bind:value={bindSelect} placeholder="Select City">
  <option value="1">Seoul</option>
  <option value="2">Jeju</option>
</Select>
<p>Selected value : {bindSelect}</p>`}
  />
</figure>

<h2>Disabled</h2>
<Select bind:value={bindSelectDisabled} disabled>
  <option value="1">Seoul</option>
  <option value="2" selected>Jeju</option>
</Select>
<p>Selected value : {bindSelectDisabled}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let bindSelect = "2";
<\u002Fscript>
<Select bind:value={bindSelect} disabled>
  <option value="1">Seoul</option>
  <option value="2" selected>Jeju</option>
</Select>
<p>Selected value : {bindSelect}</p>`}
  />
</figure>

<h2>Multiple</h2>
<Select bind:value={bindSelectMultie} multiple size={5}>
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</Select>
<p>Selected value : {bindSelectMultie}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let bindSelect;
<\u002Fscript>
<Select bind:value={bindSelect} multiple size="5">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</Select>
<p>Selected value : {bindSelect}</p>`}
  />
</figure>

<style lang="scss"></style>
