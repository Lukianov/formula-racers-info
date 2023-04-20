<script>
  export let image
</script>

<div class="racer-image__wrapper">
  <img class="racer-image" src="{image}" alt="{image} ">
</div>

<style lang="scss">
  .racer-image__wrapper {
    display: flex;
    width: 100%;
    position: absolute;
    z-index: 1;
    height: 100%;
    justify-content: center;
    align-items: flex-end;
  }

  .racer-image {
    max-width: 100%;
    max-height: 100%;
    //position: absolute;
    //object-fit: contain;
  }
</style>
