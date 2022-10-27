<script>
  export let label = null;
  export let labelFor = null;
  export let memo = "";
  export let required = false;
  export let style = $$props.class ? $$props.class : "";
  export let disabled = false;
</script>

<label for={labelFor} class="label {style}" disabled={disabled || null}>
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
    <p class="help {style}">{memo}</p>
  {/if}
</label>

<style lang="scss">
  label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    margin-top: 10px;
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
  label.radio {
    display: inline-block;
    label {
      display: inline-block;
      margin-right: 10px;
    }
  }
  label.checkbox div,
  label.radio div {
    line-height: 30px;
    min-height: 30px;
    vertical-align: middle;
  }
</style>
