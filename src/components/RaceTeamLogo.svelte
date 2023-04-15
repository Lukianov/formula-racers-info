<script>
  export let logo
</script>

<img class="team-logo" src={logo} alt={logo}>

<style>
  .team-logo {
    width: 100%;
    position: absolute;
    z-index: 1;
    height: 100%;
    object-fit: contain;
  }
</style>
