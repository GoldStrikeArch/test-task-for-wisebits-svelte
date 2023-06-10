<script lang="ts">
  import { timer } from "./stores/timer";

  let coffeeArr = [];
  let isClicked = false;

  let promise = getRandomCoffee();

  $: if ($timer >= 3000) {
    // promise = getRandomCoffee();
    timer.reset();
  }

  async function getRandomCoffee() {
    const res = await fetch(
      `https://random-data-api.com/api/coffee/random_coffee`
    );
    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error("Could not fetch coffee");
    }
  }

  function handleClick() {
    promise = getRandomCoffee();
  }
</script>

<button on:click={handleClick}>Fetch coffee</button>
{$timer}

{#await promise}
  <p>...waiting</p>
{:then data}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
