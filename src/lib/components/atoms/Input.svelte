<script lang="ts">
  export let ref: HTMLInputElement | null = null;
  export let type = 'text';
  export let value = '';
  const onInput = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    value = target.value;
  };
  export let id: string | null = null;
  export let name = '';
  export let inheritsClass = $$props.class ? $$props.class : '';
  export let disabled: boolean | null = null;
  export let readonly: boolean | null = null;
  export let placeholder = '';
  export let maxlength: number | null = null;
  export let iconLeft = '';
  export let iconRight = '';
  export let memo = '';
  export let match: RegExp | null = null;
  export let success = '';
  export let invalid = '';
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
  <div
    class={inheritsClass}
    class:control={(iconLeft && iconLeft.length > 0) || (iconRight && iconRight.length > 0)}
    class:has-icons-left={iconLeft && iconLeft.length > 0}
    class:has-icons-right={iconRight && iconRight.length > 0}
  >
    <input
      bind:this={ref}
      {id}
      {name}
      {type}
      {value}
      class="is-small {inheritsClass} input"
      class:is-danger={(matchView && matchResult === false) || inheritsClass.includes('is-danger')}
      class:is-success={(matchView && matchResult === true) || inheritsClass.includes('is-success')}
      {readonly}
      {disabled}
      {placeholder}
      {maxlength}
      on:input={onInput}
    />
    {#if iconLeft && iconLeft.length > 0}
      <span class="icon is-small is-left">
        <i class={iconLeft} />
      </span>
    {/if}
    {#if iconRight && iconRight.length > 0}
      <span class="icon is-small is-right">
        <i class={iconRight} />
      </span>
    {/if}
    {#if matchView && matchResult === false}
      <p class="help is-danger">{invalid}</p>
    {:else if matchView && matchResult === true}
      <p class="help is-success">{success}</p>
    {:else if memo}
      <p class="help {inheritsClass}">{memo}</p>
    {/if}
  </div>
{/if}

<style lang="scss">
  div {
    display: inline-block;
    vertical-align: top;
  }
  .is-fullwidth {
    display: flex;
    width: 100%;
  }
  p {
    font-size: 11px;
  }
</style>
