<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Date } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";
  import dayjs from "dayjs";

  pageTitle.set("Date");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/date">Date</a>`
  );
  let today = dayjs().format("YYYY-MM-DD");
  let minDate = dayjs().subtract(10, "day").format("YYYY-MM-DD");
  let maxDate = dayjs().add(10, "day").format("YYYY-MM-DD");
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
    code={`<script>
  let today = dayjs().format("YYYY-MM-DD");
</script>
<Date bind:value={today} />
<Date bind:value={today} readonly />
<Date bind:value={today} disabled />
`}
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
  <HighlightSvelte
    code={`<Date bind:value={today} class="is-primary" />
<Date bind:value={today} class="is-link" />
<Date bind:value={today} class="is-info" />
<Date bind:value={today} class="is-success" />
<Date bind:value={today} class="is-warning" />
<Date bind:value={today} class="is-danger" />`}
  />
</figure>

<h2>minDate & maxDate</h2>
<Date bind:value={today} minDate="today" />
<Date bind:value={today} minDate={minDate} maxDate={maxDate} />
<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  let today = dayjs().format("YYYY-MM-DD");
  let minDate = dayjs().subtract(10, "day").format("YYYY-MM-DD");
  let maxDate = dayjs().add(10, "day").format("YYYY-MM-DD");
</script>
<Date bind:value={today} minDate="today" />
<Date bind:value={today} minDate={minDate} maxDate={maxDate} />
`}
  />
</figure>

<h2>Disabling dates</h2>
<Date
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
      // return true to disable
      return date.getDay() === 0 || date.getDay() === 6;
    },
  ]}
/>
<figure class="highlight">
  <HighlightSvelte
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
      // return true to disable
      return date.getDay() === 0 || date.getDay() === 6;
    },
  ]}
/>`}
  />
</figure>

<h2>Enabling dates</h2>
<Date
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
/>
<figure class="highlight">
  <HighlightSvelte
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
  <Date
    mode="multiple"
    class="is-fullwidth"
    defaultDate={["2016-10-20", "2016-11-04"]}
  />
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<Date multiple class="is-fullwidth" />
<Date
  multiple
  class="is-fullwidth"
  defaultDate={["2016-10-20", "2016-11-04"]}
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
        // disable every multiple of 8
        return !(date.getDate() % 8);
      },
    ]}
  />
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<Date mode="range" class="is-fullwidth" />
<Date
  mode="range"
  class="is-fullwidth"
  minDate="today"
  disable={[
    function (date) {
      // disable every multiple of 8
      return !(date.getDate() % 8);
    },
  ]}
/>`}
  />
</figure>

<style lang="scss"></style>
