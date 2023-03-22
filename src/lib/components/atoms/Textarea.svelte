<script lang="ts">
  export let ref: HTMLTextAreaElement | null = null;
  export let value = '';
  const onInput = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    value = target.value;
  };
  export let id = '';
  export let name = '';
  export let style: string = $$props.class ? $$props.class : '';
  export let disabled = false;
  export let readonly = false;
  export let placeholder = '';
  export let maxlength: number | null = null;
  export let memo = '';
  export let match: RegExp | null = null;
  export let success = '';
  export let invalid = '';
  export let rows: number | null = null;
  export let fixed = false;
  export let view = false;

  export let matchResult = false;

  let matchView = false;
  $: if (match && value && value.length > 0) {
    matchResult = match.test(value);
    matchView = true;
  } else {
    matchView = false;
  }
</script>

{#if view === true}
  {value}
{:else}
  <div class={style}>
    <textarea
      bind:this={ref}
      {id}
      {name}
      class="is-small {style} textarea"
      class:is-danger={(matchView && matchResult === false) || style.includes('is-danger')}
      class:is-success={(matchView && matchResult === true) || style.includes('is-success')}
      class:has-fixed-size={fixed}
      {readonly}
      {disabled}
      {placeholder}
      {maxlength}
      {rows}
      on:input={onInput}>{value}</textarea
    >
  </div>

  {#if matchView && matchResult === false}
    <p class="help is-danger">{invalid}</p>
  {:else if matchView && matchResult === true}
    <p class="help is-success">{success}</p>
  {:else if memo}
    <p class="help {style}">{memo}</p>
  {/if}
{/if}

<style lang="scss">
  div {
    display: inline-block;
  }
  .is-fullwidth {
    display: flex;
    width: 100%;
  }
  p {
    font-size: 11px;
  }
</style>
