<script>
  import { fade } from 'svelte/transition';
  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<section>
  <div id="counter" class="counter" in:fade={{ duration: 600 }}>
    <button on:click={subtract}>-</button>
    <pre>{count}</pre>
    <button on:click={add}>+</button>
  </div>
</section>

<style>
  section {
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
