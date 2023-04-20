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

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet">
</svelte:head>

<section class="race-section">
  <RacerBackground background={alonsoBackground} />
  <section class="race-info race-background">
    <RacerAside>
      <div class="race-pilot-names">
        {#each [1] as number, i}
          <svg class="race-pilot-name" viewBox="0 0 56 18">
            <text fill="currentColor" x="0" y="15">Alonso</text>
          </svg>
        {/each}
      </div>
      <RacerNumber number="{racerNumber}"/>
      <div class="race-image-wrapper race-image-wrapper_logo">
        <RaceTeamLogo logo="{astonMartinTeamLogo}" />
      </div>
      <div class="race-image-wrapper race-image-wrapper_pilot">
        <RacerImage image={alonsoProfile}/>
      </div>
    </RacerAside>
    <RacerStatistics>
      Statistics: 3235
    </RacerStatistics>
  </section>
</section>

<style lang="scss">
  .race-pilot-names {
    display: flex;
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
    transform: rotate(270deg);
    height: 100vh;
  }

  .race-pilot-name {
    color: #002420;
    width: 100vh;
    font-size: 36px;
  }

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
