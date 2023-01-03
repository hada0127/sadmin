<script lang="ts">
  import { HighlightAuto } from 'svelte-highlight';
  import highlightStyle from 'svelte-highlight/styles/vs2015';
  import { pageTitle, pagePath } from '$store/layout/PageTitle';
  pageTitle.set('Guide');
  pagePath.set(`&gt; <a href="/">Guide</a>`);
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>
<h2>Sadmin - Svelte Admin UI Template</h2>
<p>
  <img src="/favicon/android-chrome-512x512.png" alt="logo" style="width:50px;" /><br />
  Sadmin is an Administrator UI Template that utilizes the components of svelte.<br />
  Features include built-in components for easy customization.<br />
  [<a href="https://github.com/hada0127/sadmin" target="_blank" rel="noreferrer">Source Code</a>]
</p>
<h2>Installation</h2>
<figure class="highlight">
  <HighlightAuto code={`npx degit hada0127/sadmin`} />
</figure>
<h2>Setting Nginx</h2>
<figure class="highlight">
  <HighlightAuto
    code={`server {
  listen 80;
  root /usr/share/nginx/html;
  gzip on;
  gzip_types text/css application/javascript application/json image/svg+xml;
  gzip_comp_level 9;
  etag on;
  location / {
    try_files $uri $uri/ /index.html;
  }
}`}
  />
</figure>

<h2>Routing Manual</h2>
<p>
  <a href="https://kit.svelte.dev/docs/routing" target="_blank" rel="noreferrer"
    >Sveltekit Documentation</a
  >
</p>

<h2>Styling Manual</h2>
<p>
  <a href="https://bulma.io/documentation/" target="_blank" rel="noreferrer">Bulma Documentation</a>
  <br />
  To maintain design consistency, Changed the font, and the component size is forced to use "is-small".
  <br /><br />
  <a href="https://sass-lang.com/documentation/" target="_blank" rel="noreferrer"
    >Sass Documentation</a
  ><br /><br />
  <a
    href="https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/"
    target="_blank"
    rel="noreferrer">FA free Cheatsheet</a
  >
</p>

<h2>Open Source Usage List</h2>
<table class="table is-fullwidth  is-hoverable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Link</th>
      <th>License</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sveltekit</td>
      <td
        ><a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">https://kit.svelte.dev</a
        ></td
      >
      <td>MIT</td>
    </tr>
    <tr>
      <td>Bulma</td>
      <td><a href="https://bulma.io/" target="_blank" rel="noreferrer">https://bulma.io/</a></td>
      <td>MIT</td>
    </tr>
    <tr>
      <td>Pretendard</td>
      <td
        ><a href="https://cactus.tistory.com/306" target="_blank" rel="noreferrer"
          >https://cactus.tistory.com/306</a
        ></td
      >
      <td>OFL</td>
    </tr>
    <tr>
      <td>FA free</td>
      <td
        ><a href="https://fontawesome.com/" target="_blank" rel="noreferrer"
          >https://fontawesome.com/</a
        ></td
      >
      <td
        ><a href="https://fontawesome.com/license/free" target="_blank" rel="noreferrer"
          >MIT & OFL</a
        ></td
      >
    </tr>
    <tr>
      <td>Highlight.js</td>
      <td
        ><a href="https://github.com/highlightjs/highlight.js" target="_blank" rel="noreferrer"
          >https://github.com/highlightjs/highlight.js</a
        ></td
      >
      <td>BSD</td>
    </tr>
    <tr>
      <td>svelte-highlight</td>
      <td
        ><a href="https://github.com/metonym/svelte-highlight" target="_blank" rel="noreferrer"
          >https://github.com/metonym/svelte-highlight</a
        ></td
      >
      <td>MIT</td>
    </tr>
    <tr>
      <td>flatpickr</td>
      <td
        ><a href="https://flatpickr.js.org/" target="_blank" rel="noreferrer"
          >https://flatpickr.js.org/</a
        ></td
      >
      <td>MIT</td>
    </tr>
    <tr>
      <td>dayjs</td>
      <td
        ><a href="https://github.com/iamkun/dayjs" target="_blank" rel="noreferrer"
          >https://github.com/iamkun/dayjs</a
        ></td
      >
      <td>MIT</td>
    </tr>
    <tr>
      <td>SunEditor</td>
      <td
        ><a href="http://suneditor.com/" target="_blank" rel="noreferrer">http://suneditor.com/</a
        ></td
      >
      <td>MIT</td>
    </tr>
  </tbody>
</table>

<h2>License</h2>
<p>
  <a href="license">MIT</a>
</p>
