<script>
  import RacerBackground from './RacerBackground.svelte'

  import RacerImage from './RacerImage.svelte'
  import RaceTeamLogo from './RaceTeamLogo.svelte'
  import RacerNumber from './RacerNumber.svelte'
  import RacerStatistics from './RacerStatistics.svelte'
  import RacerAside from './RacerAside.svelte'

  import alonsoProfile from '../assets/racersImage/racer_image_alonso.png'
  import alonsoBackground from '../assets/racersBackground/alonso_background.jpeg'
  import astonMartinTeamLogo from '../assets/teamsLogo/aston_martin_team_logo.png'

  const racerNumber = 14;
</script>

<section>
  <RacerBackground background={alonsoBackground} />
  <section class="race-info race-background">
    <RacerAside>
      <RacerNumber number="{racerNumber}"/>
      <RaceTeamLogo logo="{astonMartinTeamLogo}" />
      <RacerImage image={alonsoProfile}/>
    </RacerAside>
    <RacerStatistics />
  </section>
</section>

<style>
  .race-info {
    height: 100%;
    display: inline-flex;
    position: relative;
  }

  /*.race-background {*/
  /*  position: relative;*/
  /*}*/

  /*.race-background:after {*/
  /*  content: url("");*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  position: absolute;*/
  /*  background-color: red;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  transform: perspective(20vw) rotateY(45deg);*/
  /*}*/
</style>
