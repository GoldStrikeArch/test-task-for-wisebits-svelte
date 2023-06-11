<script lang="ts">
  export let notes;

  let colors = [
    "#d46432",
    "#d3c09f",
    "#699384",
    "#ac9c85",
    "#314a46",
    "#f9cb9c",
    "#f6977a",
  ];
  let notesArr: string[] = [];

  $: notesArr = notes.split(",").map((note) => note.trim());
</script>

<div>
  {#each notesArr as note, index}
    <span style={`background-color: ${colors[index % colors.length]}`}
      >{note}</span
    >
  {/each}
</div>

<style lang="less">
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: visible;
    overflow: hidden;
    width: 400px;
    gap: 8px;
  }

  span {
    max-height: 20px;
    word-wrap: none;
  }
</style>
