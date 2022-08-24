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

  function smoothScroll() {
    document.getElementById("counter").scrollIntoView({ behavior: "smooth" });
  }
</script>

{#if open}
  <section>
    <div
      id="counter"
      class="counter"
      in:fade={{ duration: 2000 }}
      on:introstart={smoothScroll}>
      <button on:click={subtract}>-</button>
      <pre>{count}</pre>
      <button on:click={add}>+</button>
    </div>
    <div class="message" transition:fade>
      <h2><slot /></h2>
    </div>
  </section>
{/if}

<style>
  section {
    height: 66vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
