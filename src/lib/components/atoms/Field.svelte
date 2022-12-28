<script lang="ts">
  export let label = '';
  export let memo = '';
  export let required = false;
  export let inheritsClass: string = $$props.class ? $$props.class : '';
</script>

<div class="field {inheritsClass}">
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

<style lang="scss">
  .field {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: var(--font-base-color);
    div {
      min-height: 30px;
      line-height: 30px;
      font-weight: 400;
    }
    span {
      color: var(--font-red-color);
    }
    p {
      font-size: 11px;
      font-weight: 400;
    }
    &.radio,
    &.checkbox {
      cursor: default;
      :global(label) {
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
      }
      :global(label[disabled]) {
        cursor: not-allowed;
      }
    }
  }

  .field.radio > div,
  .field.checkbox > div {
    line-height: 30px;
    min-height: 30px;
    vertical-align: middle;
  }
</style>
