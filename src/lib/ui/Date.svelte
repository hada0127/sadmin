<script>
  import { onMount } from "svelte";
  import flatpickr from "flatpickr";
  import { Korean } from "flatpickr/dist/l10n/ko.js";

  export let style;
  export let value = "";
  export let placeholder = "";
  export let readonly;
  export let disabled;

  onMount(() => {
    flatpickr(".flatpickr", {
      dateFormat: "Y-m-d",
      locale: Korean,
    });
  });
</script>

<div class="control has-icons-right {style} {disabled}" style="width:110px;">
  <input
    type="text"
    bind:value
    placeholder={placeholder}
    readonly={readonly}
    disabled={disabled}
    class="is-small input flatpickr"
  />
  <span class="icon is-small is-right">
    <i class="fas fa-calendar-alt" />
  </span>
</div>

<style lang="scss">
  div {
    display: inline-block;
  }
  div.disabled {
    cursor: not-allowed;
  }
</style>
