<script lang="ts">
  import { coffeeAsyncList } from "../stores/coffeeAsyncList";

  const { fetchNewCoffee } = coffeeAsyncList;
</script>

<div>
  <button on:click={fetchNewCoffee} disabled={$coffeeAsyncList.isLoading}
    >Add more
  </button>
</div>

<style lang="less">
  div {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    margin: 5px 10px;
    padding: 6px;
    height: 35px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: background-color 0.3s ease-in-out;
  }

  button {
    color: #ffffff;
    background-color: #ef2d0e;
  }
  button {
    background-color: #bb1d05;
  }
</style>
