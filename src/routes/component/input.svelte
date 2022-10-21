<script>
  import { pageTitle, pagePath } from "$store/layout";
  import { params } from "@roxi/routify";
  import { Input } from "$lib/ui";
  import { HighlightSvelte } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";

  let page = $params.page;
  pageTitle.set("Component Input");
  pagePath.set(
    `&gt; <a href="/component/label">Component</a> &gt; <a href="/component/input">Component Input</a>`
  );
  let passwordCheckResult = false;
  const passwordRegex = /^.{8,30}$/;
  const emailRegex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const idRegex = /^[a-zA-Z][0-9a-zA-Z]{3,20}$/;
  const telRegex = /\d{3}-\d{3,4}-\d{4}/;
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>

<h2>Basic</h2>
<p>Default type is "text"</p>
<Input placeholder="name" />
<Input type="password" placeholder="password" />
<Input type="number" placeholder="number" />
<Input type="email" placeholder="email" />
<Input type="tel" placeholder="tel" />
<figure class="highlight">
  <HighlightSvelte
    code={`<Input placeholder="name" />
<Input type="password" placeholder="password" />
<Input type="number" placeholder="number" />
<Input type="email" placeholder="email" />
<Input type="tel" placeholder="tel" />`}
  />
</figure>

<h2>Colors</h2>
<Input style="is-primary" />
<Input style="is-link" />
<Input style="is-info" />
<Input style="is-success" />
<Input style="is-warning" />
<Input style="is-danger" />

<figure class="highlight">
  <HighlightSvelte
    code={`<Input style="is-primary" />
<Input style="is-link" />
<Input style="is-info" />
<Input style="is-success" />
<Input style="is-warning" />
<Input style="is-danger" />`}
  />
</figure>

<h2>Static & Readonly, Disabled</h2>
<Input style="is-static" value="is-static" readonly />
<Input value="readonly" readonly />
<Input value="disabled" disabled />

<figure class="highlight">
  <HighlightSvelte
    code={`<Input style="is-primary is-static" value="is-static" readonly />
<Input style="is-primary" value="readonly" readonly />
<Input value="disabled" disabled />`}
  />
</figure>

<h2>Icon</h2>
<p>
  Using Font Awesome (<a
    href="https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/"
    target="_blank">Spec Sheet</a
  >)
</p>
<Input
  placeholder="Email"
  iconLeft="fas fa-envelope"
  iconRight="fas fa-check"
/>
<Input type="password" placeholder="Password" iconLeft="fas fa-lock" />

<figure class="highlight">
  <HighlightSvelte
    code={`<Input placeholder="Email" iconLeft="fas fa-envelope" iconRight="fas fa-check" />
<Input type="password" placeholder="Password" iconLeft="fas fa-lock" />`}
  />
</figure>

<h2>memo</h2>
<Input
  type="password"
  placeholder="Password"
  iconLeft="fas fa-lock"
  memo="Please enter characters between 8 and 30 digits."
/>
<Input
  type="password"
  style="is-danger"
  placeholder="Password"
  iconLeft="fas fa-lock"
  memo="Please enter characters between 8 and 30 digits."
/>
<figure class="highlight">
  <HighlightSvelte
    code={`<Input type="password" placeholder="Password" iconLeft="fas fa-lock" memo="Please enter characters between 8 and 30 digits." />
<Input type="password" style="is-danger" placeholder="Password" iconLeft="fas fa-lock" memo="Please enter characters between 8 and 30 digits." />`}
  />
</figure>

<h2>Match</h2>
<p>Using Regex, success and invalid message</p>
<Input
  type="password"
  placeholder="Password"
  iconLeft="fas fa-lock"
  match={passwordRegex}
  success="Success"
  invalid="Please enter characters between 8 and 30 digits."
  bind:matchResult={passwordCheckResult}
/>
<p>Password Check Result : {passwordCheckResult}</p>
<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  const passwordRegex = /^.{8,30}$/;
</script>
<Input
  type="password"
  placeholder="Password"
  iconLeft="fas fa-lock"
  match={passwordRegex}
  success="Success"
  invalid="Please enter characters between 8 and 30 digits."
  bind:matchResult={passwordCheckResult}
/>`}
  />
</figure>
<div class="mt-2">
  <Input
    type="email"
    placeholder="Email"
    iconLeft="fas fa-envelope"
    match={emailRegex}
    success="Success"
    invalid="Invalid Email address."
    memo="Please, write Email address."
  />
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  const emailRegex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
</script>
<Input
  type="email"
  placeholder="Email"
  iconLeft="fas fa-envelope"
  match={emailRegex}
  success="Success"
  invalid="Invalid Email address."
  memo="Please, write Email address."
/>`}
  />
</figure>
<div class="mt-2">
  <Input
    placeholder="Id"
    iconLeft="fas fa-id-card"
    match={idRegex}
    success="Success"
    invalid="Alphabet, number, 4~20 characters"
  />
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  idRegex = /^[a-zA-Z][0-9a-zA-Z]{3,20}$/;
</script>
<Input
  placeholder="Id"
  iconLeft="fas fa-id-card"
  match={idRegex}
  success="Success"
  invalid="Alphabet, number, 4~20 characters"
/>`}
  />
</figure>

<div class="mt-2">
  <Input
    type="tel"
    placeholder="tel"
    iconLeft="fas fa-mobile-alt"
    match={telRegex}
    memo="000-0000-0000"
  />
</div>
<figure class="highlight">
  <HighlightSvelte
    code={`<script>
  const telRegex = /\d{3}-\d{3,4}-\d{4}/;
</script>
<Input
  type="tel"
  placeholder="tel"
  iconLeft="fas fa-mobile-alt"
  match={telRegex}
  memo="000-0000-0000"
/>`}
  />
</figure>

<style lang="scss"></style>
