<script lang="ts">
  import { afterUpdate } from "svelte";
  import { coffeeAsyncList } from "../stores/coffeeAsyncList";
  import Card from "./Card.svelte";

  afterUpdate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
</script>

<main>
  {#each $coffeeAsyncList.coffees as coffee}
    <Card {coffee} />
  {/each}
</main>

<style lang="less">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
</style>
