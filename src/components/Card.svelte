<script lang="ts">
  import type { GetRandomCoffeeResponse } from "../api/coffee";
  import CoffeeImage from "./CoffeeImage.svelte";

  import Notes from "./Notes.svelte";

  export let coffee: GetRandomCoffeeResponse;
</script>

{#if coffee.error}
  <p style="color: red">Couldn't fetch coffee :(</p>
{:else}
  <section>
    <CoffeeImage />
    <div>
      <h4>{coffee.blend_name}</h4>
      <p>{coffee.origin}</p>
      <p>{coffee.variety}</p>
      <p>{coffee.intensifier}</p>
      <Notes notes={coffee.notes} />
    </div>
  </section>
{/if}

<style lang="less">
  section {
    width: 320px;
    overflow-y: hidden;
    overflow-x: auto;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  }

  div {
    padding: 2rem 1.8rem;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4rem;
  }
</style>
