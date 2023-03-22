<script lang="ts">
  import { onMount } from 'svelte';
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.min.css';
  import { v4 as uuidv4 } from 'uuid';
  import type { DateOption, DateLimit } from 'flatpickr/dist/types/options';

  export let ref: HTMLInputElement | null = null;
  export let inheritsClass: string | null = $$props.class ? $$props.class : '';
  export let id = '';
  export let name = '';
  export let value = '';
  export let placeholder = '';
  export let readonly: boolean | null = null;
  export let disabled: boolean | null = null;
  export let minDate: DateOption = '';
  export let maxDate: DateOption = '';
  export let view = false;

  let disableInit = ['9999-12-31'] as DateLimit<DateOption>[];
  export let disable: DateLimit<DateOption>[] = disableInit;
  let enableInit = [
    {
      from: '1970-01-01',
      to: '9999-12-31'
    }
  ];
  export let enable: DateLimit<DateOption>[] = enableInit;
  export let mode: 'single' | 'multiple' | 'range' | 'time' = 'single';

  const dateID = `f` + uuidv4();

  onMount(() => {
    let options = {
      dateFormat: 'Y-m-d',
      minDate: minDate && minDate,
      maxDate: maxDate && maxDate,
      disable,
      enable,
      mode: mode
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (disable !== disableInit) delete (options as any).enable;
    flatpickr(`.${dateID}`, options);
  });
</script>

{#if view === true}
  {value}
{:else}
  <div class="control has-icons-right {inheritsClass} {disabled}">
    {#if readonly === true}
      <input
        bind:this={ref}
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
        bind:this={ref}
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
{/if}

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
