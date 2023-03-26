<script>
  export let background
</script>

<section style="background-image: url('{background}')"
         class="racer-background"
>
  <slot></slot>
</section>

<style>
  .racer-background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
</style>

