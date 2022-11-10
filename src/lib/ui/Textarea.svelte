<script>
  export let value = "";
  const onInput = (e) => (value = e.target.value);
  export let id;
  export let name;
  export let style = $$props.class ? $$props.class : "";
  export let disabled;
  export let readonly;
  export let placeholder;
  export let maxlength;
  export let memo = "";
  export let match = "";
  export let success = "";
  export let invalid = "";
  export let rows;
  export let fixed;

  export let matchResult = false;

  let matchView = false;
  $: if (match !== "" && value && value.length > 0) {
    matchResult = match.test(value);
    matchView = true;
  } else {
    matchView = false;
  }
</script>

<div class={style}>
  <textarea
    id={id}
    name={name}
    class="is-small {style} textarea"
    class:is-danger={matchView && matchResult === false}
    class:is-success={matchView && matchResult === true}
    class:has-fixed-size={fixed}
    readonly={readonly}
    disabled={disabled}
    placeholder={placeholder}
    maxlength={maxlength}
    rows={rows}
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
