<script>
  import { pageTitle, pagePath } from "../store/layout";
  import { HighlightAuto } from "svelte-highlight";
  import highlightStyle from "svelte-highlight/styles/vs2015";
  import Logo from "$asset/favicon/android-chrome-512x512.png";
  pageTitle.set("Guide");
  pagePath.set(`&gt; <a href="/">Guide</a>`);
</script>

<svelte:head>
  {@html highlightStyle}
</svelte:head>
<h2>Sadmin - Svelte Admin UI Kit</h2>
<p>
  <img src={Logo} alt="logo" style="width:50px;" /><br />
  Sadmin is an Administrator UI kit that utilizes the component function of svelte.<br
  />
  [<a href="https://github.com/hada0127/sadmin" target="_blank">Source Code</a>]
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
  <a href="https://v3.ci.routify.dev/docs#" target="_blank"
    >Routify 3 Documentation</a
  >
</p>

<h2>Styling Manual</h2>
<p>
  <a href="https://bulma.io/documentation/" target="_blank"
    >Bulma Documentation</a
  >
  <br />
  To maintain design consistency, Changed the font, and the component size is forced
  to use "is-small". <br /><br />
  <a href="https://sass-lang.com/documentation/" target="_blank"
    >Sass Documentation</a
  ><br /><br />
  <a
    href="https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/"
    target="_blank">FA free Cheatsheet</a
  >
</p>

<h2>Version History</h2>
<p style="width:100%;">Before release</p>

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
      <td>Svelte</td>
      <td
        ><a href="https://svelte.dev/" target="_blank">https://svelte.dev/</a
        ></td
      >
      <td>MIT</td>
    </tr>
    <tr>
      <td>Vite</td>
      <td
        ><a href="https://vitejs.dev/" target="_blank">https://vitejs.dev/</a
        ></td
      >
      <td>MIT</td>
    </tr>
    <tr>
      <td>Routify 3</td>
      <td
        ><a href="https://v3.routify.dev/" target="_blank"
          >https://v3.routify.dev/</a
        ></td
      >
      <td>MIT</td>
    </tr>
    <tr>
      <td>Sass</td>
      <td
        ><a href="https://sass-lang.com/" target="_blank"
          >https://sass-lang.com/</a
        ></td
      >
      <td>MIT</td>
    </tr>
    <tr>
      <td>Bulma</td>
      <td><a href="https://bulma.io/" target="_blank">https://bulma.io/</a></td>
      <td>MIT</td>
    </tr>
    <tr>
      <td>Pretendard</td>
      <td
        ><a href="https://cactus.tistory.com/306" target="_blank"
          >https://cactus.tistory.com/306</a
        ></td
      >
      <td>OFL</td>
    </tr>
    <tr>
      <td>FA free</td>
      <td
        ><a href="https://fontawesome.com/" target="_blank"
          >https://fontawesome.com/</a
        ></td
      >
      <td
        ><a href="https://fontawesome.com/license/free" target="_blank"
          >MIT & OFL</a
        ></td
      >
    </tr>
    <tr>
      <td>Highlight.js</td>
      <td
        ><a href="https://github.com/highlightjs/highlight.js"
          >https://github.com/highlightjs/highlight.js</a
        ></td
      >
      <td>BSD</td>
    </tr>
    <tr>
      <td>svelte-highlight</td>
      <td
        ><a href="https://github.com/metonym/svelte-highlight"
          >https://github.com/metonym/svelte-highlight</a
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
