<section class="race-aside">
  <slot></slot>
</section>

<style>
  .race-aside {
    position: relative;
    flex-direction: column;
    display: flex;
    height: 100vh;
    justify-content: end;
  }

  .race-aside:after {
    content: url("");
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #002420;
    top: 0;
    left: 0;
    transform: rotate(12deg) scale(3) translateX(-4rem);
  }
</style>
