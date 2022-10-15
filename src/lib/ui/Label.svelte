<script>
  export let label = null;
  export let labelFor = '';
  export let type = '';
  export let message = '';
  
</script>
<div>
  {#if label}
    <label for={labelFor} class="label">{label}</label>
  {/if}
  <slot statusType={type} />
  {#if message}
    <p class="help {type}">{message}</p>
  {/if}
</div>
