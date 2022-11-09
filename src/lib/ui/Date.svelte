<script>
  import { onMount } from "svelte";
  import flatpickr from "flatpickr";
  import "flatpickr/dist/flatpickr.min.css";
  import { Korean } from "flatpickr/dist/l10n/ko.js";
  import { v4 as uuidv4 } from "uuid";

  export let style = $$props.class ? $$props.class : "";
  export let value = "";
  export let placeholder = "";
  export let readonly;
  export let disabled;
  export let minDate = "";
  export let maxDate = "";
  export let disable;
  export let enable;
  export let mode;
  export let defaultDate;

  let dateID = `f` + uuidv4();

  onMount(() => {
    let options = {
      dateFormat: "Y-m-d",
      locale: Korean,
    };
    if (minDate.length > 0) options.minDate = minDate;
    if (maxDate.length > 0) options.maxDate = maxDate;
    if (disable) options.disable = disable;
    if (enable) options.enable = enable;
    if (defaultDate) options.defaultDate = defaultDate;
    if (mode) options.mode = mode;
    flatpickr(`.${dateID}`, options);
  });
</script>

<div class="control has-icons-right {style} {disabled}">
  {#if readonly === true}
    <input
      type="text"
      bind:value
      placeholder={placeholder}
      disabled={disabled}
      readonly
      class="is-small input {style}"
    />
  {:else}
    <input
      type="text"
      bind:value
      placeholder={placeholder}
      disabled={disabled}
      class="is-small input flatpickr {dateID} {style}"
    />
  {/if}
  <span class="icon is-small is-right">
    <i class="fas fa-calendar-alt" />
  </span>
</div>

<style lang="scss">
  div {
    display: inline-block;
    width: 110px;
  }
  div.is-fullwidth {
    width: 100%;
  }
  div.disabled {
    cursor: not-allowed;
  }
</style>
