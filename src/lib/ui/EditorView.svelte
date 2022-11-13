<script>
  import "suneditor/dist/css/suneditor.min.css";
  import "$public/css/suneditor.scss";

  export let value = "";
  export let width = "100%";
  export let height = "auto";
  let widthUnit, heightUnit;
  let match = /^[0-9]+$/;
  $: widthUnit = match.test(width) ? "px" : "";
  $: heightUnit = match.test(height) ? "px" : "";
  export let inheritsClass = $$props.class ? $$props.class : "";
</script>

<div
  style="width:{width}{widthUnit};height:{height}{heightUnit};"
  class="sun-editor-editable {inheritsClass}"
>
  {@html value}
</div>

<style lang="scss">
  div {
    overflow: auto;
  }
</style>
