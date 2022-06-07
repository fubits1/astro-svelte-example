<script>
  // export let state;
  import { state } from "../state.js";
  function updateState() {
    $state = !$state;
  }
</script>

<section>
  <h1>Hero</h1>
  <button on:click={updateState}>Start ({$state})</button>
</section>

<style>
  section {
    height: 50vh;
    width: 100%;
    background: linear-gradient(to right, #fdfbfb, #ebedee);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  button {
    position: absolute;
    bottom: 10%;
    border-radius: 8px;
  }
</style>
