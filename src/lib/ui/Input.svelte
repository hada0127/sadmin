<script>
  export let type = "text";
  export let value = "";
  const onInput = (e) => (value = e.target.value);
  export let id;
  export let name;
  export let style = $$props.class ? $$props.class : "";
  export let disabled;
  export let readonly;
  export let placeholder;
  export let maxlength;
  export let iconLeft = "";
  export let iconRight = "";
  export let memo = "";
  export let match = "";
  export let success = "";
  export let invalid = "";
  export let pattern = "";

  export let matchResult = false;
  let matchView = false;
  $: if (match !== "" && value && value.length > 0) {
    matchResult = match.test(value);
    matchView = true;
  } else {
    matchView = false;
  }
</script>

<div
  class:control={(iconLeft && iconLeft.length > 0) ||
    (iconRight && iconRight.length > 0)}
  class:has-icons-left={iconLeft && iconLeft.length > 0}
  class:has-icons-right={iconRight && iconRight.length > 0}
>
  <input
    {id}
    {name}
    {type}
    {value}
    class="input is-small {style}"
    class:is-danger={matchView && matchResult === false}
    class:is-success={matchView && matchResult === true}
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
</style>
