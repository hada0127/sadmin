<script lang="ts">
  import { onMount } from 'svelte';
  export let tabs: string[] = [];
  let nowTab: number;
  $: nowTab = 0;
  const setTabs = (selectTab: number) => {
    nowTab = selectTab;
    document.querySelectorAll('.tabsgroup div:not(.tabs)').forEach((el, i) => {
      if (i === selectTab) {
        el.classList.add('is-visible');
      } else {
        el.classList.remove('is-visible');
      }
    });
  };
  onMount(() => {
    setTabs(0);
  });
</script>

<div class="tabsgroup">
  <div class="tabs is-small">
    <ul>
      {#each tabs as tab, i}
        <li class={i === nowTab ? 'is-active' : ''}>
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <a
            on:click={() => {
              setTabs(i);
            }}>{tab}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <slot />
</div>

<style lang="scss">
  .tabsgroup {
    :global(div:not(.tabs):not(.is-visible)) {
      display: none;
    }
    :global(.is-visible) {
      display: block;
    }
  }
</style>
