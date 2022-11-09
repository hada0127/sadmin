<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { Date } from "$lib/ui";
  pageTitle.set("Date & Time");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/datetime">Date & Time</a>`
  );
  let today = "2022-01-01";
</script>

<h2>Basic</h2>
<Date bind:value={today} />
<Date bind:value={today} readonly />
<Date bind:value={today} disabled />
{today}

<style lang="scss"></style>
