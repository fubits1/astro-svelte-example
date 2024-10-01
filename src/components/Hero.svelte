<script>
  // export let state;
  import { is_open } from '../state.svelte.js';
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
  function updateState() {
    // is_open.set(!is_open.get());
    // if (is_open.get()) {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // }
  }
</script>

<section>
  {@render children?.()}
  <!-- <button onclick={updateState}>{is_open.get() ? 'Close' : 'Open'}</button> -->
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
