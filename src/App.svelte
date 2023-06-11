<script lang="ts">
  import { USER_IDLE_TIME } from "./constants";
  import { onMount } from "svelte";
  import { timer } from "./stores/timer";
  import { coffeeAsyncList } from "./stores/coffeeAsyncList";

  import AddButton from "./components/AddButton.svelte";
  import CardList from "./components/CardList.svelte";
  import CardSkeleton from "./components/CardSkeleton.svelte";

  $: if ($timer >= USER_IDLE_TIME) {
    coffeeAsyncList.fetchNewCoffee();
    timer.reset();
  }

  onMount(() => {
    coffeeAsyncList.fetchNewCoffee();
  });
</script>

<CardList />
{#if $coffeeAsyncList.isLoading}
  <CardSkeleton isOnlyImage={false} />
{/if}
<AddButton />

<style lang="less">
  :root {
    background-color: #f6f6f6;
    font-family: Helvetica;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>
