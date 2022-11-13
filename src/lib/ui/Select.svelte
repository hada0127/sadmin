<script>
  export let multiple = false;
  export let size = "2";
  export let value = "";
  export let inheritsClass = $$props.class ? $$props.class : "";
  export let icon = "";
  export let disabled = false;
  export let placeholder = "";

  let checkPlaceholder;
  $: if (value === "" && placeholder && placeholder.length > 0) {
    value = placeholder;
    checkPlaceholder = true;
  } else {
    checkPlaceholder = false;
  }
</script>

<div class="control" class:has-icons-left={icon.length > 0}>
  <div class="select is-small {inheritsClass} " class:is-multiple={multiple}>
    {#if multiple && multiple === true}
      <select
        size={multiple === true ? size : ""}
        multiple
        {disabled}
        bind:value
        class:placeholder={checkPlaceholder}
      >
        {#if placeholder && placeholder.length > 0}
          <option disabled>{placeholder}</option>
        {/if}
        <slot />
      </select>
    {:else if value != ""}
      <select {disabled} bind:value class:placeholder={checkPlaceholder}>
        {#if placeholder && placeholder.length > 0}
          <option disabled>{placeholder}</option>
        {/if}
        <slot />
      </select>
    {:else}
      <select {disabled} class:placeholder={checkPlaceholder}>
        {#if placeholder && placeholder.length > 0}
          <option disabled>{placeholder}</option>
        {/if}
        <slot />
      </select>
    {/if}
  </div>
  {#if icon.length > 0}
    <span class="icon is-small is-left">
      <i class="fas fa-globe" />
    </span>
  {/if}
</div>

<style>
  .control {
    display: inline-block;
  }
  .placeholder {
    color: #999;
  }
</style>
