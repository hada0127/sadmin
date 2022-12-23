<script lang="ts">
  import { onMount } from 'svelte';
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';
  import { v4 as uuidv4 } from 'uuid';
  import type {
    DateOption,
    DateRangeLimit,
    DateLimit,
    ParsedOptions
  } from 'flatpickr/dist/types/options';

  export let inheritsClass: string | null = $$props.class ? $$props.class : '';
  export let id = '';
  export let name = '';
  export let value = '';
  export let placeholder = '';
  export let readonly: boolean | null = null;
  export let disabled: boolean | null = null;
  export let minDate = '';
  export let maxDate = '';
  export let disable: DateLimit<Date>[];
  export let enable: DateLimit<Date>[];
  export let mode: 'single' | 'multiple' | 'range' | 'time';
  export let defaultDate: Date | Date[] | undefined;

  const dateID = `f` + uuidv4();

  onMount(() => {
    let options: ParsedOptions = {
      dateFormat: 'Y-m-d'
    };
    if (minDate.length > 0) options.minDate = new Date(minDate);
    if (maxDate.length > 0) options.maxDate = new Date(maxDate);
    if (disable) options.disable = disable;
    if (enable) options.enable = enable;
    if (defaultDate) options.defaultDate = defaultDate;
    if (mode) options.mode = mode;
    flatpickr(`.${dateID}`, options);
  });
</script>

<div class="control has-icons-right {inheritsClass} {disabled}">
  {#if readonly === true}
    <input
      {id}
      {name}
      type="text"
      bind:value
      {placeholder}
      {disabled}
      readonly
      class="is-small input {inheritsClass}"
    />
  {:else}
    <input
      type="text"
      bind:value
      {placeholder}
      {disabled}
      class="is-small input flatpickr {dateID} {inheritsClass}"
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
