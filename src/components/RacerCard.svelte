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

<section class="race-section">
  <RacerBackground background={alonsoBackground} />
  <section class="race-info race-background">
    <RacerAside>
      <RacerNumber number="{racerNumber}"/>
      <RaceTeamLogo logo="{astonMartinTeamLogo}" />
      <RacerImage image={alonsoProfile}/>
    </RacerAside>
    <RacerStatistics>
      Статистика: 3235
    </RacerStatistics>
  </section>
</section>

<style lang="scss">
  .race-section {
    position: relative;
    height: 100vh;
  }

  .race-info {
    height: 100%;
    display: inline-flex;
    position: relative;
  }

  .race-background {
    display: flex;
  }
</style>
