<script>
  import { params } from "@roxi/routify";
  let id = $params.id;
  console.log($params.id);
</script>

<header>
  <h1>상세 샘플</h1>
  <div class="path">
    <a href="/">HOME</a>
    &gt; <a href="/sample">샘플화면</a>
    &gt; 상세
  </div>
</header>
<article>{id}</article>

<style lang="scss"></style>
