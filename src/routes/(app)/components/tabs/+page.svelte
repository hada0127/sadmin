<script lang="ts">
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  import { Highlight } from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import Tabs from '$components/atoms/Tabs.svelte';
  pageTitle.set('Tabs');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/tabs">Tabs</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Tabs tabs={[{ name: 'Basic Info' }, { name: 'Extend' }, { name: 'Log' }]}>
  <div>tab1</div>
  <div>tab2</div>
  <div>tab3</div>
</Tabs>
<Tabs tabs={[{ name: 'Basic Info' }, { name: 'Extend' }, { name: 'Log', checked: true }]}>
  <div>tab1</div>
  <div>tab2</div>
  <div>tab3</div>
</Tabs>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Tabs tabs={[{name:'Basic Info'}, {name:'Extend'}, {name:'Log'}]}>
  <div>tab1</div>
  <div>tab2</div>
  <div>tab3</div>
</Tabs>
<Tabs tabs={[{ name: 'Basic Info' }, { name: 'Extend' }, { name: 'Log', checked: true }]}>
  <div>tab1</div>
  <div>tab2</div>
  <div>tab3</div>
</Tabs>`}
  />
</figure>

<h2>Styles</h2>
<Tabs tabs={[{ name: 'Basic Info' }, { name: 'Extend' }, { name: 'Log' }]} class="is-boxed mt-5">
  <div>tab1</div>
  <div>tab2</div>
  <div>tab3</div>
</Tabs>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Tabs tabs={[{name:'Basic Info'}, {name:'Extend'}, {name:'Log'}]} class="is-boxed">
  <div>tab1</div>
  <div>tab2</div>
  <div>tab3</div>
</Tabs>`}
  />
</figure>

<h2>External Link</h2>
<Tabs
  tabs={[
    { name: 'Basic Info', link: '#' },
    { name: 'Extend', link: '#', checked: true },
    { name: 'Log', link: '#' }
  ]}
  pageMove={true}
/>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Tabs
  tabs={[
    { name: 'Basic Info', link: '#' },
    { name: 'Extend', link: '#', checked: true },
    { name: 'Log', link: '#' }
  ]}
  pageMove={true}
/>`}
  />
</figure>

<style lang="scss"></style>
