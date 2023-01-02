<script lang="ts">
  import { onMount } from 'svelte';
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';
  import { v4 as uuidv4 } from 'uuid';
  import type { DateOption, DateLimit } from 'flatpickr/dist/types/options';

  export let inheritsClass: string | null = $$props.class ? $$props.class : '';
  export let id = '';
  export let name = '';
  export let value = '';
  export let placeholder = '';
  export let readonly: boolean | null = null;
  export let disabled: boolean | null = null;
  export let minDate: DateOption = '';
  export let maxDate: DateOption = '';
  export let disable: DateLimit<DateOption>[] = [];
  let enableInit = [
    {
      from: '1970-01-01',
      to: '9999-12-31'
    }
  ];
  export let enable: DateLimit<DateOption>[] = enableInit;
  export let mode: 'single' | 'multiple' | 'range' | 'time' = 'single';
  let defaultDate: DateOption | DateOption[] = '';

  const dateID = `f` + uuidv4();

  onMount(() => {
    const options = {
      dateFormat: 'Y-m-d',
      minDate: minDate && minDate,
      maxDate: maxDate && maxDate,
      disable: disable && disable,
      defaultDate: defaultDate && defaultDate,
      enable,
      mode: mode
    };
    if (enable !== enableInit) options.enable = enable;
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
