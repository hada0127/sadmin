<script>
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  import { HighlightSvelte } from 'svelte-highlight';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import Tabs from '$components/modules/Tabs.svelte';
  pageTitle.set('Tabs');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/tabs">Tabs</a>`
  );
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<Tabs tabs={['Basic Info', 'Extend', 'Log']}>
  <div>tab1</div>
  <div>tab2</div>
  <div>tab3</div>
</Tabs>
<figure class="highlight">
  <HighlightSvelte
    code={`<Tabs tabs={['Basic Info', 'Extend', 'Log']}>
  <div>tab1</div>
  <div>tab2</div>
  <div>tab3</div>
</Tabs>`}
  />
</figure>

<style lang="scss"></style>
