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
      <div class="race-image-wrapper race-image-wrapper_logo">
        <RaceTeamLogo logo="{astonMartinTeamLogo}" />
      </div>
      <div class="race-image-wrapper race-image-wrapper_pilot">
        <RacerImage image={alonsoProfile}/>
      </div>
    </RacerAside>
    <RacerStatistics>
      Статистика: 3235
    </RacerStatistics>
  </section>
</section>

<style lang="scss">
  .race-image-wrapper {
    position: relative;
    flex: 1 0 auto;
    width: 100%;

    &_pilot {
      flex-basis: 60%;
    }

    &_logo {
      flex-basis: 20%;
    }
  }

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
