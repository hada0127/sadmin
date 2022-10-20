<script>
  export let id;
  export let name;
  export let accept;
  export let multiple = false;
  export let files;
  export let style = $$props.class ? $$props.class : "";
  export let icon = "fas fa-upload";
</script>

<div class="file has-name is-small {style}">
  <label class="file-label">
    <input
      class="file-input"
      type="file"
      {id}
      {name}
      {accept}
      {multiple}
      bind:files
    />
    <span class="file-cta">
      <span class="file-icon">
        <i class={icon} />
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name">
      {#if files && files[0]}
        {files[0].name}
        {#if files.length > 1}
          & {files.length - 1} files
        {/if}
      {/if}
    </span>
  </label>
</div>

<style lang="scss">
  div.file {
    display: inline-block;
  }
  span.file-name {
    min-width: 140px;
  }
</style>
