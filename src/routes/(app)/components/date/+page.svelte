<script lang="ts">
  import Date from '$components/atoms/Date.svelte';
  import Button from '$components/atoms/Button.svelte';
  import { HighlightSvelte, Highlight } from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import dayjs from 'dayjs';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Date');
  pagePath.set(
    `&gt; <a href="/components/field">Components</a> &gt; <a href="/components/date">Date</a>`
  );

  let today = dayjs().format('YYYY-MM-DD');
  let minDate = dayjs().subtract(10, 'day').format('YYYY-MM-DD');
  let maxDate = dayjs().add(10, 'day').format('YYYY-MM-DD');

  let ref: HTMLInputElement | null;
  const setFocus = () => {
    console.log(ref);
    ref && ref.focus();
  };
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<Date bind:value={today} />
<Date bind:value={today} readonly />
<Date bind:value={today} disabled />
<p>Selected date : {today}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
    let today = dayjs().format("YYYY-MM-DD");
<\u002Fscript>
<Date bind:value={today} />
<Date bind:value={today} readonly />
<Date bind:value={today} disabled />`}
  />
</figure>

<h2>View</h2>
<Date bind:value={today} view={true} />
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
    let today = dayjs().format("YYYY-MM-DD");
<\u002Fscript>
<Date bind:value={today} view={true} />`}
  />
</figure>

<h2>Color</h2>
<Date bind:value={today} class="is-primary" />
<Date bind:value={today} class="is-link" />
<Date bind:value={today} class="is-info" />
<Date bind:value={today} class="is-success" />
<Date bind:value={today} class="is-warning" />
<Date bind:value={today} class="is-danger" />
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Date bind:value={today} class="is-primary" />
<Date bind:value={today} class="is-link" />
<Date bind:value={today} class="is-info" />
<Date bind:value={today} class="is-success" />
<Date bind:value={today} class="is-warning" />
<Date bind:value={today} class="is-danger" />`}
  />
</figure>

<h2>Focus</h2>
<Date bind:ref />
<Button on:click={setFocus}>Set Focus</Button>
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let ref:HTMLInputElement | null;
  const setFocus = () => {
    ref && ref.focus();
  };
<\u002Fscript>
<Date bind:ref />
<Button on:click={setFocus}>Set Focus</Button>`}
  />
</figure>

<h2>minDate & maxDate</h2>
<Date bind:value={today} minDate="today" />
<Date bind:value={today} {minDate} {maxDate} />
<figure class="highlight">
  <HighlightSvelte
    code={`<script lang="ts">
  let today = dayjs().format("YYYY-MM-DD");
  let minDate = dayjs().subtract(10, "day").format("YYYY-MM-DD");
  let maxDate = dayjs().add(10, "day").format("YYYY-MM-DD");
<\u002Fscript>
<Date bind:value={today} minDate="today" />
<Date bind:value={today} minDate={minDate} maxDate={maxDate} />
`}
  />
</figure>

<h2>Disabling dates</h2>
<Date
  value={dayjs('2025-02-10').format('YYYY-MM-DD')}
  disable={['2025-02-01', '2025-02-21', '2025-02-22']}
/>
<Date
  value={dayjs('2025-06-10').format('YYYY-MM-DD')}
  disable={[
    {
      from: '2025-04-01',
      to: '2025-05-01'
    },
    {
      from: '2025-09-01',
      to: '2025-12-01'
    }
  ]}
/>
<Date
  value={today}
  disable={[
    function (date) {
      return date.getDay() === 0 || date.getDay() === 6;
    }
  ]}
/>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Date
  value={dayjs("2025-02-10").format("YYYY-MM-DD")}
  disable={["2025-02-01", "2025-02-21", "2025-02-22"]}
/>
<Date
  value={dayjs("2025-06-10").format("YYYY-MM-DD")}
  disable={[
    {
      from: "2025-04-01",
      to: "2025-05-01",
    },
    {
      from: "2025-09-01",
      to: "2025-12-01",
    },
  ]}
/>
<Date
  value={today}
  disable={[
    function (date) {
      return date.getDay() === 0 || date.getDay() === 6;
    },
  ]}
/>`}
  />
</figure>

<h2>Enabling dates</h2>
<Date
  value={dayjs('2025-02-01').format('YYYY-MM-DD')}
  enable={['2025-02-01', '2025-02-21', '2025-02-22']}
/>
<Date
  value={dayjs('2025-04-10').format('YYYY-MM-DD')}
  enable={[
    {
      from: '2025-04-01',
      to: '2025-05-01'
    },
    {
      from: '2025-09-01',
      to: '2025-12-01'
    }
  ]}
/>
<Date
  value={today}
  enable={[
    function (date) {
      return date.getMonth() % 2 === 0 && date.getDate() < 15;
    }
  ]}
/>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Date
  value={dayjs("2025-02-01").format("YYYY-MM-DD")}
  enable={["2025-02-01", "2025-02-21", "2025-02-22"]}
/>
<Date
  value={dayjs("2025-04-10").format("YYYY-MM-DD")}
  enable={[
    {
      from: "2025-04-01",
      to: "2025-05-01",
    },
    {
      from: "2025-09-01",
      to: "2025-12-01",
    },
  ]}
/>
<Date
  value={today}
  enable={[
    function (date) {
      return date.getMonth() % 2 === 0 && date.getDate() < 15;
    },
  ]}
/>`}
  />
</figure>

<h2>Multiple dates</h2>
<Date mode="multiple" class="is-fullwidth" />
<div class="mt-2">
  <Date mode="multiple" class="is-fullwidth" value="2016-10-20, 2016-11-04" />
</div>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Date multiple class="is-fullwidth" />
<Date
  multiple
  class="is-fullwidth"
  value="2016-10-20, 2016-11-04"
/>`}
  />
</figure>

<h2>Range Calendar</h2>
<Date mode="range" class="is-fullwidth" />
<div class="mt-2">
  <Date
    mode="range"
    class="is-fullwidth"
    minDate="today"
    disable={[
      function (date) {
        return !(date.getDate() % 8);
      }
    ]}
  />
</div>
<figure class="highlight">
  <Highlight
    language={html}
    code={`<Date mode="range" class="is-fullwidth" />
<Date
  mode="range"
  class="is-fullwidth"
  minDate="today"
  disable={[
    function (date) {
      return !(date.getDate() % 8);
    },
  ]}
/>`}
  />
</figure>

<style lang="scss"></style>
