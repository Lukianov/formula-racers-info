<section class="race-aside">
  <slot></slot>
</section>

<style>
  .race-aside {
    flex-basis: 40%;
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 16px;
  }

  /*.race-aside:after {*/
  /*  content: '';*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  position: absolute;*/
  /*  background-color: #002420;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  transform: rotate(19deg) scale(2) translateY(12rem);*/
  /*}*/
</style>
