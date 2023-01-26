<script lang="ts">
  import { onMount } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';
  interface Tab {
    name: string;
    checked?: boolean;
    link?: string;
  }
  export let pageMove = false;
  export let tabs: Tab[] = [];
  export let inheritsClass = $$props.class ? $$props.class : '';

  const tabID = `t` + uuidv4();
  let nowTab = 0;

  const setTabs = (selectTab: number) => {
    nowTab = selectTab;
    document.querySelectorAll(`#${tabID} > div:not(.tabs)`).forEach((el, i) => {
      if (i === selectTab) {
        el.classList.add('is-visible');
      } else {
        el.classList.remove('is-visible');
      }
    });
  };
  onMount(() => {
    setTabs(0);
    tabs.forEach(function (tab, i) {
      if (tab.checked === true) {
        nowTab = i;
        setTabs(nowTab);
      }
    });
  });
</script>

<div id={tabID} class="tabsgroup">
  <div class="tabs is-small {inheritsClass}">
    <ul>
      {#each tabs as tab, i}
        <li class={i === nowTab ? 'is-active' : ''}>
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <a
            href={tab.link ? tab.link : undefined}
            on:click={() => {
              setTabs(i);
            }}>{tab.name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  {#if pageMove === false}
    <slot />
  {/if}
</div>

<style lang="scss">
  .tabsgroup {
    > :global(div:not(.tabs):not(.is-visible)) {
      display: none;
    }
    > :global(.is-visible) {
      display: block;
    }
  }
</style>
