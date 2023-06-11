<script lang="ts">
  import { getRandomCoffeeImage } from "../api/coffeeImage";
  import CardSkeleton from "./CardSkeleton.svelte";

  let promise = getRandomCoffeeImage();
</script>

{#await promise}
  <CardSkeleton isOnlyImage={true} />
{:then data}
  <img src={data.file} alt="Random coffee" />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style lang="less">
  img {
    object-fit: cover;
    display: block;
    height: 200px;
    width: 100%;
  }
</style>
