import React from 'react'
import PageLayout from '../layouts/PageLayout'
import Scoreboard from './components/Scoreboard/Scoreboard';
import AllGames from '../scores/components/AllGames/AllGames';
import BestGame from './components/BestGame/BestGame';
import ScoresChart from './components/AverageScores/AverageScoresChart';
import { getAverageScoreOnHole, getPlayerAverageScoreOnHole, holeNums, players } from '../util/statFunctions';

const Stats = () => {

  const averageDatasets = [{
    label: "Gemiddelde Score",
    data: holeNums.map(holeNum => { return { x: getAverageScoreOnHole(holeNum), y: holeNum } })
  }]

  players.forEach(player => {
    averageDatasets.push({
      label: player,
      data: holeNums.map(holeNum => { return { x: getPlayerAverageScoreOnHole(player, holeNum), y: holeNum } })
    })
  })

  return (
    <PageLayout title='Stats'>
      <BestGame />
      <Scoreboard />
      <div className='flex justify-center gap-4 my-4 flex-col lg:flex-row'>
        <ScoresChart
          datasets={averageDatasets}
          dataLabels={holeNums}
          title={"Gemiddelde scores per hole"}
          xLabel="Hole"
          yLabel="Gemiddelde score"
        />
        <ScoresChart
          datasets={averageDatasets}
          dataLabels={Array(10).map((_, i) => i + 1)}
          title={"Gemiddelde scores per hole"}
          xLabel="Hole"
          yLabel="Gemiddelde score"
        />
      </div>
    </PageLayout>
  )
}

export default Stats