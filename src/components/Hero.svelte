<script>
  // export let state;
  import { state } from "../state.js";
  function updateState() {
    $state = !$state;
    if (!$state) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
</script>

<section>
  <h1><slot /></h1>
  <button on:click={updateState}>{$state ? "Close" : "Open"}</button>
</section>

<style>
  section {
    height: 100vh;
    width: 100%;
    background: linear-gradient(to right, #fdfbfb, #ebedee);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  h1 {
    position: sticky;
    top: 1rem;
  }

  button {
    position: absolute;
    bottom: 10%;
    border-radius: 8px;
  }
</style>
