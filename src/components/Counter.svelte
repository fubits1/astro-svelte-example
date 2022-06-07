<script>
  import { state } from "../state.js";
  import { fade } from "svelte/transition";
  $: open = $state;
  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

{#if open}
  <div class="counter" transition:fade>
    <button on:click={subtract}>-</button>
    <pre>{count}</pre>
    <button on:click={add}>+</button>
  </div>
  <div class="message" transition:fade>
    <slot />
  </div>
{/if}

<style>
  .counter {
    display: grid;
    font-size: 2em;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 2em;
    place-items: center;
  }
  .message {
    text-align: center;
  }
</style>
