<script lang="ts">
  export let id: string | null = null;
  export let name: string | null = null;
  export let checked = false;

  export let disabled = false;
  export let style: string = $$props.class ? $$props.class : 'is-primary';
</script>

<label>
  <input {id} {name} type="checkbox" bind:checked class="{style} " disabled={disabled === true} />
  <span />
</label>

<style lang="scss">
  input {
    appearance: none;
    position: relative;
    border-radius: 10px;
    border: 1 solid #fff;
    width: 33px;
    height: 20px;
    background-color: #aaa;
    cursor: pointer;
  }
  input::before {
    content: '';
    position: absolute;
    left: 2.5px;
    top: 2.5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #efefef;
    transition: 0.15s;
  }
  input:checked::before {
    background-color: #fff;
    left: auto;
    right: 2.5px;
  }

  input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input:checked {
    background-color: hsl(171, 100%, 41%);
  }
  input.is-primary:checked {
    background-color: hsl(171, 100%, 41%);
  }
  input.is-link:checked {
    background-color: hsl(217, 71%, 53%);
  }
  input.is-info:checked {
    background-color: hsl(204, 86%, 53%);
  }
  input.is-success:checked {
    background-color: hsl(141, 53%, 53%);
  }
  input.is-warning:checked {
    background-color: hsl(48, 100%, 67%);
  }
  input.is-danger:checked {
    background-color: hsl(348, 100%, 61%);
  }
</style>
