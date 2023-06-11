<script lang="ts">
  export let isOnlyImage: boolean;
</script>

<div class="skeleton">
  <div class="image" />
  {#if !isOnlyImage}
    <div class="content">
      <div class="title" />
      <div class="description" />
    </div>
  {/if}
</div>

<style lang="less">
  @loading-grey: #ededed;

  .skeleton {
    width: 320px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  }

  .image {
    height: 200px;
  }

  .content {
    padding: 2rem 1.8rem;
  }

  .title {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  .image,
  .title,
  .description {
    background-color: @loading-grey;
    background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%
      )
      @loading-grey;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
  }

  @keyframes loading {
    to {
      background-position-x: -20%;
    }
  }

  .title {
    min-height: 1.6rem;
    border-radius: 4px;
    animation-delay: 0.05s;
  }

  .description {
    min-height: 4rem;
    border-radius: 4px;
    animation-delay: 0.06s;
  }
</style>
