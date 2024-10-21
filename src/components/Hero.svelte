<script>
  // export let state;
  import { is_open } from '../state.svelte.js';
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();

  let open = $derived(is_open.value);

  function updateState() {
    if (open) {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }

    is_open.value = !is_open.value

}
</script>

<section>
  {@render children?.()}
  <button onclick={updateState}>{open ? 'Close' : 'Open'}</button>
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

  button {
    position: absolute;
    bottom: 10%;
    border-radius: 8px;
  }
</style>
