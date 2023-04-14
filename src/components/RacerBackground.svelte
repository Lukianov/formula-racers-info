<script>
  export let background
</script>

<img src={background}
       alt={background}
       class="racer-background__image" />

<style>
  .racer-background__image {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
    filter: brightness(55%);
  }
</style>

