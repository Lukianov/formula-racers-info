<script>
  export let image
</script>

<img class="racer-image" src="{image}" alt="{image}">

<style>
  .racer-image {
    width: 100%;
    position: absolute;
    z-index: 1;
    height: 100%;
    object-fit: contain;
  }
</style>
