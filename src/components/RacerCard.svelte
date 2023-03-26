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

<RacerBackground background={alonsoBackground}>
  <RacerAside>
    <RacerNumber number="{racerNumber}"/>
    <RaceTeamLogo logo="{astonMartinTeamLogo}" />
    <RacerImage image={alonsoProfile}/>
  </RacerAside>
  <RacerStatistics />
</RacerBackground>
