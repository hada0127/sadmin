<script>
  export let label = null;
  export let labelFor = null;
  export let memo = '';
  export let required = false;
  export let inheritsClass = $$props.class ? $$props.class : '';
  export let disabled = false;
</script>

{#if inheritsClass.includes('checkbox') === true}
  <label
    for={labelFor}
    class="field {inheritsClass}"
    disabled={disabled || null}
  >
    {#if label}
      {label}
    {/if}
    {#if required}
      <span>*</span>
    {/if}
    <div>
      <slot />
    </div>
    {#if memo}
      <p class="help {inheritsClass}">{memo}</p>
    {/if}
  </label>
{:else}
  <div for={labelFor} class="field {inheritsClass}" disabled={disabled || null}>
    {#if label}
      {label}
    {/if}
    {#if required}
      <span>*</span>
    {/if}
    <div>
      <slot />
    </div>
    {#if memo}
      <p class="help {inheritsClass}">{memo}</p>
    {/if}
  </div>
{/if}

<style lang="scss">
  .field {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: var(--font-base-color);
    div {
      font-weight: 400;
    }
    span {
      color: var(--font-red-color);
    }
    p {
      font-size: 11px;
      font-weight: 400;
    }
  }

  .field.radio {
    cursor: default;
  }

  .field.radio,
  .field.checkbox {
    line-height: 30px;
    min-height: 30px;
    vertical-align: middle;
  }
</style>
